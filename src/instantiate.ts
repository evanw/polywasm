import { castToJS, castToWASM, compileCode, liveCastToWASM } from './compile'
import { createLibrary } from './library'
import { Desc, FuncType, Module, Type, moduleMap } from './parse'

export class Global {
  declare value: any
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
    const bytes = new Uint8Array(buffer)
    bytes.set(context[ContextField.Uint8Array])
    resetContext(context, buffer, bytes)
  }
  return pageCount
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
    const exports: WebAssembly.Exports = this.exports = {}
    const funcs: Function[] = []
    const funcTypes: FuncType[] = []
    const globals: (number | bigint)[] = []
    const globalTypes: Type[] = []
    const tables: (Function | null)[][] = []
    const library = createLibrary()

    // Handle memory
    const context = new Context
    const memory = context.memory_ = new Memory
    if (memorySection.length > 1) throw new Error(`Unsupported memory count: ${memorySection.length}`)
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
      if (pageCount < 0) throw new RangeError('Cannot grow past limit')
      return pageCount
    }
    resetContext(context, memory.buffer = new ArrayBuffer(context[ContextField.PageCount] << 16))

    // Handle data
    for (const [index, offset, data] of dataSection) {
      if (index !== 0) throw new Error(`Invalid memory index: ${index}`)
      context[ContextField.Uint8Array].set(data, offset)
    }

    // Handle imports
    for (const tuple of importSection) {
      const [module, name, desc, payload] = tuple
      const value = importObject![module][name]
      if (desc === Desc.Func) {
        const funcType = typeSection[payload]
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
        funcs.push(new Function('f', 'l', `return(${argNames})=>{${result}}`)(value, library))
        funcTypes.push(funcType)
      } else if (desc === Desc.Global) {
        globals.push(liveCastToWASM(value, payload))
        globalTypes.push(payload)
      } else {
        throw new Error(`Unsupported import type ${desc} for "${module}"."${name}"`)
      }
    }

    // Handle globals
    for (const [type, mutable, initializer] of globalSection) {
      globals.push(initializer(globals))
      globalTypes.push(type)
    }

    // Handle code
    for (let i = 0; i < codeSection.length; i++) {
      const index = funcs.length
      funcTypes.push(typeSection[functionSection[i]])
      funcs.push((...args: any[]): any => {
        return (funcs[index] = compileCode(funcs, funcTypes, tables[0], globals, library, context, wasm, i, index))(...args)
      })
    }

    // Handle tables
    for (const [type, min, max] of tableSection) {
      const table: (Function | null)[] = []
      for (let i = 0; i < min; i++) table.push(null)
      tables.push(table)
    }
    for (let [offset, indices] of elementSection) {
      if (tables.length !== 1) throw new Error('Multiple tables are unsupported')
      const table = tables[0]
      for (const index of indices) table[offset++] = (...args: any[]): any => funcs[index](...args)
    }

    // Handle exports
    for (const [name, desc, index] of exportSection) {
      if (desc === Desc.Func) {
        const [argTypes, returnTypes] = funcTypes[index]
        const argNames: string[] = []
        const argExprs: string[] = []
        for (let i = 0; i < argTypes.length; i++) {
          argNames.push('a' + i)
          argExprs.push(castToWASM('a' + i, argTypes[i]))
        }
        let result = `f[i](${argExprs})`
        if (returnTypes.length === 1) {
          result = 'return ' + castToJS(result, returnTypes[0])
        } else if (returnTypes.length > 1) {
          result = `let r=${result};`
          for (let i = 0; i < returnTypes.length; i++) result += `r[${i}]=${castToJS(`r[${i}]`, returnTypes[i])};`
          result += 'return r'
        }
        exports[name] = new Function('f', 'i', 'l', `return(${argNames})=>{${result}}`)(funcs, index, library)
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
        throw new Error(`Unsupported export type ${desc} for "${name}"`)
      }
    }

    // Handle the starting function
    if (startSection >= 0) funcs[startSection]()
  }
}
