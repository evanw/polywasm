import { castToJS, castToWASM, compileCode, liveCastToWASM } from './compile'
import { library } from './library'
import { Desc, FuncType, GlobalValue, Module, Type, formatHexByte, moduleMap } from './parse'

export class Global<T extends WebAssembly.ValueType = WebAssembly.ValueType> {
  declare value: WebAssembly.ValueTypeMap[T]

  valueOf(): WebAssembly.ValueTypeMap[T] {
    return this.value
  }
}

export interface LazyFunc {
  readonly index_: number
  readonly type_: FuncType
  exported_: Function | null // This is lazily-generated as needed (but only once because identity is important)
  compiled_: Function // This is overwritten once when the function is first compiled
}

const compileImportFunc = (funcType: FuncType, value: WebAssembly.ImportValue): (...args: any[]) => any => {
  const [argTypes, returnTypes] = funcType
  const argNames: string[] = []
  const argExprs: string[] = []
  for (let i = 0; i < argTypes.length; i++) {
    argNames.push('a' + i)
    argExprs.push(castToJS('a' + i, argTypes[i]))
  }
  let result = `f(${argExprs})`
  if (returnTypes.length === 1) {
    result = 'return ' + castToWASM(result, returnTypes[0])
  } else if (returnTypes.length > 1) {
    result = `let r=${result};`
    for (let i = 0; i < returnTypes.length; i++) result += `r[${i}]=${castToWASM(`r[${i}]`, returnTypes[i])};`
    result += 'return r'
  }
  return new Function('f', 'l', `return(${argNames})=>{${result}}`)(value, library)
}

export class Instance {
  declare exports: WebAssembly.Exports

  constructor(module: Module, importObject?: WebAssembly.Imports) {
    const wasm = moduleMap.get(module)!
    const {
      codeSection_: codeSection,
      dataSection_: dataSection,
      elementSection_: elementSection,
      exportSection_: exportSection,
      functionSection_: functionSection,
      globalSection_: globalSection,
      importSection_: importSection,
      memorySection_: memorySection,
      startSection_: startSection,
      tableSection_: tableSection,
      typeSection_: typeSection,
    } = wasm
    const exports: WebAssembly.Exports = this.exports = Object.create(null)
    const memories: InternalMemory[] = []
    const funcs: Function[] = []
    const funcTypes: FuncType[] = []
    const globals: GlobalValue[] = []
    const globalTypes: Type[] = []
    const lazyFuncs: Record<number, LazyFunc> = {}
    const tables: InternalTable[] = []

    // Returns an object with a function that lazily-compiles the underlying
    // function once and then overwrites itself regardless of where the object
    // is referenced from. This is important for mutable tables of functions.
    const createLazyFunc = (index: number): LazyFunc => {
      const obj: LazyFunc = lazyFuncs[index] || (lazyFuncs[index] = {
        index_: index,
        type_: funcTypes[index],
        exported_: null,
        compiled_: (...args: [any[]]): any => {
          const result = funcs[index](...args) // Compile the function for the first time
          obj.compiled_ = funcs[index] // Overwrite ourselves with the newly-compiled function
          return result
        },
      })
      return obj
    }

    // Handle imports
    for (const tuple of importSection) {
      const [module, name, desc, payload] = tuple
      const value = importObject![module][name]
      if (desc === Desc.Func) {
        const funcType = typeSection[payload]
        const index = funcs.length
        funcs.push((...args: any[]) => {
          return (funcs[index] = compileImportFunc(funcType, value))(...args)
        })
        funcTypes.push(funcType)
      } else if (desc === Desc.Table) {
        tables.push(tableRegistry.get(value as Table)!)
      } else if (desc === Desc.Mem) {
        memories.push(memoryRegistry.get(value as Memory)!)
      } else if (desc === Desc.Global) {
        globals.push(liveCastToWASM(value, payload))
        globalTypes.push(payload)
      } else {
        throw Error(`Unsupported import type ${formatHexByte(desc)} for "${module}"."${name}"`)
      }
    }

    // Handle memory
    const context: Record<string, any> = {}
    for (const [initial, maximum] of memorySection) {
      memories.push(memoryRegistry.get(new Memory({ initial, maximum: initial > maximum ? initial : maximum }))!)
    }
    for (let i = 0; i < memories.length; i++) {
      const memory = memories[i]
      const patch = () => {
        // Copy these properties over to the context to reduce property lookup overhead
        context[/* @__KEY__ */ 'uint8Array_' + i] = memory.uint8Array_
        context[/* @__KEY__ */ 'int8Array_' + i] = memory.int8Array_
        context[/* @__KEY__ */ 'dataView_' + i] = memory.dataView_
      }
      context[/* @__KEY__ */ 'memory_' + i] = memory
      memory.patches_.push(patch)
      patch()
    }

    // Handle globals
    for (const [type, mutable, initializer] of globalSection) {
      globals.push(initializer(globals, createLazyFunc))
      globalTypes.push(type)
    }

    // Handle data
    const dataSegments: Uint8Array[] = []
    for (let [index, initializer, data] of dataSection) {
      if (initializer !== null) {
        context[/* @__KEY__ */ 'uint8Array_' + index].set(data, initializer(globals))
        data = new Uint8Array // "memory.init" should only succeed on active segments if the source "offset" and "size" are both 0
      }
      dataSegments.push(data)
    }

    // Handle code
    for (let i = 0; i < codeSection.length; i++) {
      const index = funcs.length
      funcTypes.push(typeSection[functionSection[i]])
      funcs.push((...args: any[]): any => {
        return (funcs[index] = compileCode(
          funcs,
          funcTypes,
          createLazyFunc,
          tables,
          dataSegments,
          elementSegments,
          globals,
          context,
          wasm,
          i,
          index,
        ))(...args)
      })
    }

    // Handle tables
    const elementSegments: (readonly (LazyFunc | null)[])[] = []
    for (const [type, initial, maximum] of tableSection) {
      if (type !== Type.FuncRef && type !== Type.ExternRef) throw Error('Unsupported element type: ' + formatHexByte(type))
      tables.push(tableRegistry.get(new Table({
        element: type === Type.ExternRef ? 'externref' : 'anyfunc',
        initial,
        maximum: initial > maximum ? initial : maximum,
      }))!)
    }
    for (let [tableIndex, initializer, indices] of elementSection) {
      const segment: (LazyFunc | null)[] = []
      for (const index of indices) segment.push(index === null ? null : createLazyFunc(index))
      elementSegments.push(segment)
      if (tableIndex !== null && initializer !== null) {
        const table = tables[tableIndex]
        let offset = initializer(globals)
        for (const value of segment) table[offset++] = value
      }
    }

    // Handle exports
    for (const [name, desc, index] of exportSection) {
      if (desc === Desc.Func) {
        exports[name] = library.exportLazyFunc_(createLazyFunc(index))!
      } else if (desc === Desc.Table) {
        exports[name] = tables[index].external_
      } else if (desc === Desc.Mem) {
        exports[name] = memories[index].external_
      } else if (desc === Desc.Global) {
        const value = new Global
        const type = globalTypes[index]
        Object.defineProperty(value, 'value', {
          get: () => globals[index],
          set: x => { globals[index] = liveCastToWASM(x, type) },
        })
        exports[name] = value
      } else {
        throw Error(`Unsupported export type ${formatHexByte(desc)} for "${name}"`)
      }
    }

    // Handle the starting function
    if (startSection >= 0) funcs[startSection]()
  }
}

interface InternalMemory {
  external_: Memory
  buffer_: ArrayBuffer
  uint8Array_: Uint8Array
  int8Array_: Int8Array
  dataView_: DataView
  pageCount_: number
  pageLimit_: number
  patches_: (() => void)[]
  grow_: (delta: number) => number
}

const memoryRegistry = new WeakMap<Memory, InternalMemory>()
const clampPageCount = (x: number) => Math.max(-1, Math.min(x, 0xFFFF)) | 0

export class Memory {
  declare buffer: ArrayBuffer
  declare grow: (delta: number) => number

  constructor({ initial, maximum }: WebAssembly.MemoryDescriptor) {
    initial = clampPageCount(initial)
    maximum = clampPageCount(maximum ?? Infinity)
    if (initial < 0 || initial > maximum) throw RangeError()

    const initialBuffer = new ArrayBuffer(initial << 16)
    const internal: InternalMemory = {
      external_: this,
      buffer_: initialBuffer,
      uint8Array_: new Uint8Array(initialBuffer),
      int8Array_: new Int8Array(initialBuffer),
      dataView_: new DataView(initialBuffer),
      pageCount_: initial,
      pageLimit_: maximum,
      patches_: [],

      grow_(pageDelta: number): number {
        const oldPageCount = this.pageCount_
        const oldBytes = this.uint8Array_

        // Validate the page delta
        pageDelta = clampPageCount(pageDelta)
        if (pageDelta < 0 || this.pageCount_ + pageDelta > this.pageLimit_) return -1
        if (!pageDelta) return oldPageCount

        // Grow by copying over the old buffer
        const newBuffer = new ArrayBuffer((this.pageCount_ += pageDelta) << 16)
        const newBytes = new Uint8Array(newBuffer)
        newBytes.set(oldBytes)

        // Try to detach the old buffer to mimic the real behavior of "grow"
        try {
          structuredClone(this.buffer_, { transfer: [this.buffer_] })
        } catch {
        }

        // Finish the grow operation
        this.buffer_ = newBuffer
        this.uint8Array_ = newBytes
        this.int8Array_ = new Int8Array(newBuffer)
        this.dataView_ = new DataView(newBuffer)
        for (const patch of this.patches_) patch()
        return oldPageCount
      },
    }

    memoryRegistry.set(this, internal)
    Object.defineProperty(this, 'buffer', {
      get: () => internal.buffer_,
    })
    this.grow = pageDelta => {
      const pageCount = internal.grow_(pageDelta)
      if (pageCount < 0) throw RangeError()
      return pageCount
    }
  }
}

export type InternalTable = (LazyFunc | null)[] & {
  external_: Table
  limit_: number
}

const tableRegistry = new WeakMap<Table, InternalTable>()

export class Table {
  declare length: number
  declare get: (index: number) => any
  declare grow: (delta: number, value?: any) => number
  declare set: (index: number, value?: any) => void

  constructor({ element, initial, maximum }: WebAssembly.TableDescriptor) {
    const isAnyFunc = element == 'anyfunc'
    const internal = [] as unknown as InternalTable
    if (!isAnyFunc && element !== 'externref') throw TypeError()
    internal.external_ = this
    internal.limit_ = Math.min(0xFFFF_FFFF, maximum ?? Infinity)
    internal.length = initial
    for (let i = 0; i < initial; i++) internal[i] = null
    tableRegistry.set(this, internal)
    Object.defineProperty(this, 'length', {
      get: () => internal.length,
    })
    this.get = i => {
      i >>>= 0
      if (i >= internal.length) throw RangeError()
      return isAnyFunc ? library.exportLazyFunc_(internal[i]) : internal[i]
    }
    this.set = (i, value) => {
      i >>>= 0
      if (i >= internal.length) throw RangeError()
      internal[i] = isAnyFunc ? library.importLazyFunc_(value) : value
    }
    this.grow = (delta, value) => {
      const oldLength = library.table_grow_(internal, isAnyFunc ? library.importLazyFunc_(value) : value, delta)
      if (oldLength < 0) throw RangeError()
      return oldLength
    }
  }
}
