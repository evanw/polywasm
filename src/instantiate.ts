import { castToJS, castToWASM, compileCode, liveCastToWASM } from './compile'
import { createLibrary, Library } from './library'
import { Desc, FuncType, GlobalValue, Module, Type, moduleMap } from './parse'

export class Global<T extends WebAssembly.ValueType = WebAssembly.ValueType> {
  declare value: WebAssembly.ValueTypeMap[T]

  valueOf(): WebAssembly.ValueTypeMap[T] {
    return this.value
  }
}

export class Memory {
  declare buffer: ArrayBuffer
  declare grow: (delta: number) => number
}

export class Table {
  declare length: number
  declare get: (index: number) => any
  declare grow: (delta: number, value?: any) => number
  declare set: (index: number, value?: any) => void
}

export interface LazyFunc {
  readonly index_: number
  readonly type_: FuncType
  exported_: Function | null // This is lazily-generated as needed (but only once because identity is important)
  compiled_: Function // This is overwritten once when the function is first compiled
}

export const enum ContextField {
  PageCount = 'pc',
  PageGrow = 'pg',

  // These are reset when the memory grows
  Int8Array = 'i8',
  Uint8Array = 'u8',
  DataView = 'dv',
}

export class Context {
  declare memory_: Memory
  declare pageLimit_: number
  declare [ContextField.PageCount]: number
  declare [ContextField.PageGrow]: (pagesDelta: number) => number

  // These are reset when the memory grows
  declare [ContextField.Int8Array]: Int8Array
  declare [ContextField.Uint8Array]: Uint8Array
  declare [ContextField.DataView]: DataView
}

const resetContext = (context: Context, buffer: ArrayBuffer, bytes = new Uint8Array(buffer)): void => {
  context[ContextField.Int8Array] = new Int8Array(buffer)
  context[ContextField.Uint8Array] = bytes
  context[ContextField.DataView] = new DataView(buffer)
}

const growContext = (context: Context, pagesDelta: number): number => {
  const pageCount = context[ContextField.PageCount]
  pagesDelta >>>= 0
  if (pageCount + pagesDelta > context.pageLimit_) return -1
  if (pagesDelta) {
    const buffer = context.memory_.buffer = new ArrayBuffer((context[ContextField.PageCount] += pagesDelta) << 16)
    const oldBytes = context[ContextField.Uint8Array]
    const bytes = new Uint8Array(buffer)
    bytes.set(oldBytes)
    resetContext(context, buffer, bytes)

    // Try to detach the old buffer to mimic the real behavior of "grow"
    try {
      structuredClone(oldBytes.buffer, { transfer: [oldBytes.buffer] })
    } catch {
    }
  }
  return pageCount
}

const compileImportFunc = (funcType: FuncType, value: WebAssembly.ImportValue, library: Library): (...args: any[]) => any => {
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
    const funcs: Function[] = []
    const funcTypes: FuncType[] = []
    const globals: GlobalValue[] = []
    const globalTypes: Type[] = []
    const lazyFuncs: Record<number, LazyFunc> = {}
    const tables: (LazyFunc | null)[][] = []
    const library = createLibrary()

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

    // Handle memory
    const context = new Context
    const memory = context.memory_ = new Memory
    if (memorySection.length > 1) throw Error(`Unsupported memory count: ${memorySection.length}`)
    if (memorySection.length > 0) {
      const [memoryMin, memoryMax] = memorySection[0]
      context.pageLimit_ = Math.min(memoryMax, 0xFFFF) // 32-bit WASM has at most 65535 pages
      context[ContextField.PageCount] = memoryMin
    } else {
      context.pageLimit_ = 0
      context[ContextField.PageCount] = 0
    }
    const grow = context[ContextField.PageGrow] = pagesDelta => growContext(context, pagesDelta)
    memory.grow = pagesDelta => {
      const pageCount = grow(pagesDelta)
      if (pageCount < 0) throw RangeError('Cannot grow past limit')
      return pageCount
    }
    resetContext(context, memory.buffer = new ArrayBuffer(context[ContextField.PageCount] << 16))

    // Handle imports
    for (const tuple of importSection) {
      const [module, name, desc, payload] = tuple
      const value = importObject![module][name]
      if (desc === Desc.Func) {
        const funcType = typeSection[payload]
        const index = funcs.length
        funcs.push((...args: any[]) => {
          return (funcs[index] = compileImportFunc(funcType, value, library))(...args)
        })
        funcTypes.push(funcType)
      } else if (desc === Desc.Global) {
        globals.push(liveCastToWASM(value, payload))
        globalTypes.push(payload)
      } else {
        throw Error(`Unsupported import type ${desc} for "${module}"."${name}"`)
      }
    }

    // Handle data
    const dataSegments: Uint8Array[] = []
    for (let [index, offset, data] of dataSection) {
      if (index !== 0) throw Error('Invalid memory index: ' + index)
      if (offset !== null) {
        context[ContextField.Uint8Array].set(data, offset)
        data = new Uint8Array // "memory.init" should only succeed on active segments if the source "offset" and "size" are both 0
      }
      dataSegments.push(data)
    }

    // Handle globals
    for (const [type, mutable, initializer] of globalSection) {
      globals.push(initializer(globals, createLazyFunc))
      globalTypes.push(type)
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
          tableSection,
          dataSegments,
          elementSegments,
          globals,
          library,
          context,
          wasm,
          i,
          index,
        ))(...args)
      })
    }

    // Handle tables
    const elementSegments: (readonly (LazyFunc | null)[])[] = []
    for (const [type, min, max] of tableSection) {
      const table: (LazyFunc | null)[] = []
      for (let i = 0; i < min; i++) table.push(null)
      tables.push(table)
    }
    for (let [tableIndex, offset, indices] of elementSection) {
      const segment: (LazyFunc | null)[] = []
      for (const index of indices) segment.push(index === null ? null : createLazyFunc(index))
      elementSegments.push(segment)
      if (tableIndex !== null && offset !== null) {
        if (tableIndex >= tables.length) throw Error('Invalid table index: ' + tableIndex)
        const table = tables[tableIndex]
        for (const value of segment) table[offset++] = value
      }
    }

    // Handle exports
    for (const [name, desc, index] of exportSection) {
      if (desc === Desc.Func) {
        exports[name] = library.exportLazyFunc_(createLazyFunc(index))!
      } else if (desc === Desc.Table) {
        if (index >= tables.length) throw Error('Invalid table index: ' + index)
        const table = tables[index]
        const value = new Table
        Object.defineProperty(value, 'length', {
          get: () => table.length,
        })
        value.get = i => {
          i >>>= 0
          if (i >= table.length) throw RangeError()
          return library.exportLazyFunc_(table[i])
        }
        value.set = (i, fn) => {
          i >>>= 0
          if (i >= table.length) throw RangeError()
          table[i] = library.importLazyFunc_(fn)
        }
        value.grow = () => {
          throw Error('Unsupported operation "grow" on table ' + index)
        }
        exports[name] = value
      } else if (desc === Desc.Mem) {
        exports[name] = memory
      } else if (desc === Desc.Global) {
        const value = new Global
        const type = globalTypes[index]
        Object.defineProperty(value, 'value', {
          get: () => globals[index],
          set: x => { globals[index] = liveCastToWASM(x, type) },
        })
        exports[name] = value
      } else {
        throw Error(`Unsupported export type ${desc} for "${name}"`)
      }
    }

    // Handle the starting function
    if (startSection >= 0) funcs[startSection]()
  }
}
