// This file parses enough of the WebAssembly file format to determine the
// contents of each section. It does not parse the WebAssembly bytecode within
// each function. Functions are compiled lazily when they are first evaluated.
//
// See the WebAssembly file format reference for more information:
// https://webassembly.github.io/spec/core/binary/index.html

import { Op } from './compile'
import { LazyFunc } from './instantiate'

const enum Section {
  Custom,
  Type,
  Import,
  Function,
  Table,
  Memory,
  Global,
  Export,
  Start,
  Element,
  Code,
  Data,
  DataCount,
}

export const enum Type {
  Func = 0x60,
  I32 = 0x7F,
  I64 = 0x7E,
  F32 = 0x7D,
  F64 = 0x7C,
  V128 = 0x7B,
  FuncRef = 0x70,
  ExternRef = 0x6F,
}

export const enum Desc {
  Func,
  Table,
  Mem,
  Global,
}

const enum LimitsKind {
  OnlyMin,
  MinMax,
}

const enum Mutable {
  Const,
  Var,
}

const enum ElementFlag {
  Passive = 1 << 0,
  TableIndex = 1 << 1,
  Expression = 1 << 2,
}

const enum DataMode {
  ActiveZero,
  Passive,
  Active,
}

const enum NameSubsection {
  Module,
  Function,
  Local,
}

export type GlobalValue =
  | null
  | number
  | bigint
  | LazyFunc
export type GlobalInitializer = (globals: readonly GlobalValue[], createLazyFunc: (index: number) => LazyFunc) => GlobalValue
export type OffsetInitializer = (globals: readonly GlobalValue[]) => number

export type FuncType = readonly [argTypes: readonly Type[], returnTypes: readonly Type[]]
export type LocalRun = readonly [count: number, type: Type]

export type CodeItem = readonly [locals: readonly LocalRun[], codeStart: number, codeEnd: number]
export type CustomItem = readonly [name: string, bytes: Uint8Array]
export type DataItem = readonly [memory: number, initializer: OffsetInitializer | null, data: Uint8Array]
export type ElementItem = readonly [tableIndex: number | null, initializer: OffsetInitializer | null, indices: readonly (number | null)[]]
export type ExportItem = readonly [name: string, desc: Desc, index: number]
export type GlobalItem = readonly [type: Type, mutable: Mutable, initializer: GlobalInitializer]
export type ImportItem =
  | readonly [module: string, name: string, desc: Desc.Func, index: number]
  | readonly [module: string, name: string, desc: Desc.Table, type: Type, min: number, max: number]
  | readonly [module: string, name: string, desc: Desc.Mem, min: number, max: number]
  | readonly [module: string, name: string, desc: Desc.Global, type: Type, mutable: Mutable]
export type MemoryItem = readonly [min: number, max: number]
export type TableItem = readonly [type: Type, min: number, max: number]

export interface WASM {
  readonly bytes_: Uint8Array
  readonly dataView_: DataView
  readonly codeSection_: readonly CodeItem[]
  readonly customSections_: readonly CustomItem[]
  readonly dataSection_: readonly DataItem[]
  readonly elementSection_: readonly ElementItem[]
  readonly exportSection_: readonly ExportItem[]
  readonly functionSection_: readonly number[]
  readonly globalSection_: readonly GlobalItem[]
  readonly importSection_: readonly ImportItem[]
  readonly memorySection_: readonly MemoryItem[]
  readonly nameSection_: ReadonlyMap<number, string>
  readonly startSection_: number
  readonly tableSection_: readonly TableItem[]
  readonly typeSection_: readonly FuncType[]
}

// Note: This deliberately assumes that the input is valid WebAssembly for
// simplicity. Typically you'd use this to run a WebAssembly binary that you
// already know is valid. If it's important to get validation errors for
// invalid input, then you want to use another tool instead of this one.
const parse = (bytes: Uint8Array): WASM => {
  const dataView = new DataView(bytes.buffer)

  const readU32LEB = (): number => {
    let value = 0
    let shift = 0
    let byte: number
    do {
      byte = bytes[ptr++]
      value |= (byte & 0x7F) << shift
      shift += 7
    } while (byte & 0x80)
    return value >>> 0
  }

  const readI32LEB = (): number => {
    let value = 0
    let shift = 0
    let byte: number
    do {
      byte = bytes[ptr++]
      value |= (byte & 0x7F) << shift
      shift += 7
    } while (byte & 0x80)
    return shift < 32 && (byte & 0x40) ? value | (~0 << shift) : value
  }

  const readI64LEB = (): bigint => {
    let value = 0n
    let shift = 0n
    let byte: number
    do {
      byte = bytes[ptr++]
      value |= BigInt(byte & 0x7F) << shift
      shift += 7n
    } while (byte & 0x80)
    return shift < 64 && (byte & 0x40) ? value | (~0n << shift) : value
  }

  const readF32 = (): number => {
    const value = dataView.getFloat32(ptr, true)
    ptr += 4
    return value
  }

  const readF64 = (): number => {
    const value = dataView.getFloat64(ptr, true)
    ptr += 8
    return value
  }

  const readValueTypes = (count = readU32LEB()): Type[] => {
    return [...bytes.slice(ptr, ptr += count)]
  }

  const readName = (length = readU32LEB()): string => {
    // Note: Can't use "TextDecoder" here because it doesn't handle U+FEFF correctly
    return decodeURIComponent(escape(String.fromCharCode(...bytes.slice(ptr, ptr += length))))
  }

  const readLimits = (kind: LimitsKind = bytes[ptr++]): [min: number, max: number] => {
    return [readU32LEB(), kind === LimitsKind.OnlyMin ? Infinity : readU32LEB()]
  }

  const readConstantU32 = (): OffsetInitializer => {
    const stack: OffsetInitializer[] = []
    let op: Op
    while ((op = bytes[ptr++]) !== Op.end) {
      if (op === Op.i32_const) {
        const value = readU32LEB()
        stack.push(() => value)
      }
      else if (op === Op.global_get) {
        const index = readU32LEB()
        stack.push(globals => {
          if (index >= globals.length) throw RangeError()
          return globals[index] as number
        })
      }
      else if (op === Op.i32_add) {
        const right = stack.pop()!, left = stack.pop()!
        stack.push(globals => left(globals) + right(globals) | 0)
      }
      else if (op === Op.i32_sub) {
        const right = stack.pop()!, left = stack.pop()!
        stack.push(globals => left(globals) - right(globals) | 0)
      }
      else if (op === Op.i32_mul) {
        const right = stack.pop()!, left = stack.pop()!
        stack.push(globals => Math.imul(left(globals), right(globals)))
      }
      else {
        throw new CompileError('Unsupported constant instruction: ' + formatHexByte(op))
      }
    }
    if (stack.length !== 1) throw new CompileError('Unsupported constant')
    return stack[0]
  }

  const readConstantFuncIndex = (): number | null => {
    const op: Op = bytes[ptr++]
    let value: number | null
    if (op === Op.ref_func) value = readU32LEB()
    else if (op === Op.ref_null) {
      if (bytes[ptr++] !== Type.FuncRef) throw new CompileError('Unsupported reference type: ' + formatHexByte(bytes[ptr - 1]))
      value = null
    }
    else throw new CompileError('Unsupported constant instruction: ' + formatHexByte(op))
    if (bytes[ptr++] !== Op.end) throw new CompileError('Expected end after constant: ' + formatHexByte(bytes[ptr - 1]))
    return value
  }

  const readInitializer = (type: Type): GlobalInitializer => {
    const op: Op = bytes[ptr++]
    let initializer: GlobalInitializer
    if (op === Op.i32_const && type === Type.I32) {
      const value = readI32LEB()
      initializer = () => value
    }
    else if (op === Op.i64_const && type === Type.I64) {
      const value = readI64LEB()
      initializer = () => value
    }
    else if (op === Op.f32_const && type === Type.F32) {
      const value = readF32()
      initializer = () => value
    }
    else if (op === Op.f64_const && type === Type.F64) {
      const value = readF64()
      initializer = () => value
    }
    else if (op === Op.ref_null && (type === Type.FuncRef || type === Type.ExternRef)) {
      ptr++ // Ignore the type
      initializer = () => null
    }
    else if (op === Op.ref_func && type === Type.FuncRef) {
      const index = readU32LEB()
      initializer = (_, createLazyFunc) => createLazyFunc(index)
    }
    else if (op === Op.global_get) {
      const index = readU32LEB()
      initializer = globals => {
        if (index >= globals.length) throw RangeError()
        return globals[index]
      }
    }
    else throw new CompileError('Unsupported constant instruction: ' + formatHexByte(op))
    if (bytes[ptr++] !== Op.end) throw new CompileError('Expected end after constant: ' + formatHexByte(bytes[ptr - 1]))
    return initializer
  }

  const codeSection: CodeItem[] = []
  const customSections: CustomItem[] = []
  const dataSection: DataItem[] = []
  const elementSection: ElementItem[] = []
  const exportSection: ExportItem[] = []
  const functionSection: number[] = []
  const globalSection: GlobalItem[] = []
  const importSection: ImportItem[] = []
  const memorySection: MemoryItem[] = []
  const nameSection: Map<number, string> = new Map
  const tableSection: TableItem[] = []
  const typeSection: FuncType[] = []
  let startSection = -1
  let ptr = 8

  if (bytes.slice(0, 8).join(',') !== '0,97,115,109,1,0,0,0')
    throw new CompileError('Invalid file header')

  while (ptr + 5 < bytes.length) {
    const sectionType: Section = bytes[ptr++]
    const contentsSize = readU32LEB()
    const sectionEnd = ptr + contentsSize

    if (sectionType === Section.Custom) {
      const sectionName = readName()
      customSections.push([sectionName, bytes.slice(ptr, sectionEnd)])

      // We can fill in the real function names if they are present (e.g. for stack traces)
      if (sectionName === 'name') {
        const subsection: NameSubsection = bytes[ptr++]
        const subsectionEnd = ptr + readU32LEB()
        if (subsection === NameSubsection.Function) {
          for (let i = 0, count = readU32LEB(); i < count && ptr < subsectionEnd; i++) {
            nameSection.set(readU32LEB(), readName())
          }
        }
      }
    }

    else if (sectionType === Section.Type) {
      for (let i = 0, typeCount = readU32LEB(); i < typeCount; i++) {
        if (bytes[ptr++] !== 0x60) throw new CompileError('Invalid function type: ' + formatHexByte(bytes[ptr - 1]))
        typeSection.push([readValueTypes(), readValueTypes()])
      }
    }

    else if (sectionType === Section.Import) {
      for (let i = 0, importCount = readU32LEB(); i < importCount; i++) {
        const module = readName()
        const name = readName()
        const desc: Desc = bytes[ptr++]
        if (desc === Desc.Func) importSection.push([module, name, desc, readU32LEB()])
        else if (desc === Desc.Table) importSection.push([module, name, desc, bytes[ptr++], ...readLimits()])
        else if (desc === Desc.Mem) importSection.push([module, name, desc, ...readLimits()])
        else if (desc === Desc.Global) importSection.push([module, name, desc, bytes[ptr++], bytes[ptr++]])
        else throw new CompileError('Unsupported import type: ' + formatHexByte(desc))
      }
    }

    else if (sectionType === Section.Function) {
      const functionCount = readU32LEB()
      for (let i = 0; i < functionCount; i++) {
        functionSection.push(readU32LEB())
      }
    }

    else if (sectionType === Section.Table) {
      for (let i = 0, tableCount = readU32LEB(); i < tableCount; i++) {
        tableSection.push([bytes[ptr++], ...readLimits()])
      }
    }

    else if (sectionType === Section.Memory) {
      for (let i = 0, memoryCount = readU32LEB(); i < memoryCount; i++) {
        memorySection.push(readLimits())
      }
    }

    else if (sectionType === Section.Global) {
      for (let i = 0, globalCount = readU32LEB(); i < globalCount; i++) {
        const type: Type = bytes[ptr++]
        const mutable = bytes[ptr++]
        const initializer = readInitializer(type)
        globalSection.push([type, mutable, initializer])
      }
    }

    else if (sectionType === Section.Export) {
      for (let i = 0, exportCount = readU32LEB(); i < exportCount; i++) {
        const name = readName()
        const desc: Desc = bytes[ptr++]
        const index = readU32LEB()
        exportSection.push([name, desc, index])
      }
    }

    else if (sectionType === Section.Start) {
      startSection = readU32LEB()
    }

    else if (sectionType === Section.Element) {
      for (let i = 0, elementCount = readU32LEB(); i < elementCount; i++) {
        const flags: ElementFlag = readU32LEB()
        if (flags > (ElementFlag.Passive | ElementFlag.TableIndex | ElementFlag.Expression)) {
          throw new CompileError('Unsupported element kind: ' + flags)
        }
        const mode = flags & (ElementFlag.Passive | ElementFlag.TableIndex)
        const tableIndex = mode === ElementFlag.TableIndex ? readU32LEB() : mode === 0 ? 0 : null
        const offset = flags & ElementFlag.Passive ? null : readConstantU32()
        if (mode && bytes[ptr++] !== (flags & ElementFlag.Expression ? Type.FuncRef : 0)) {
          throw new CompileError('Unsupported element type: ' + formatHexByte(bytes[ptr - 1]))
        }
        const indices: (number | null)[] = []
        for (let j = 0, count = readU32LEB(); j < count; j++) {
          indices.push(flags & ElementFlag.Expression ? readConstantFuncIndex() : readU32LEB())
        }
        elementSection.push([tableIndex, offset, indices])
      }
    }

    else if (sectionType === Section.Code) {
      for (let i = 0, codeCount = readU32LEB(); i < codeCount; i++) {
        const codeEnd = readU32LEB() + ptr
        const localsCount = readU32LEB()
        const locals: [count: number, type: Type][] = []
        for (let j = 0; j < localsCount; j++) locals.push([readU32LEB(), bytes[ptr++]])
        codeSection.push([locals, ptr, codeEnd])
        ptr = codeEnd
      }
    }

    else if (sectionType === Section.Data) {
      for (let i = 0, dataCount = readU32LEB(); i < dataCount; i++) {
        const mode: DataMode = readU32LEB()
        if (mode > DataMode.Active) throw new CompileError('Unsupported data mode: ' + mode)
        const memory = mode === DataMode.Active ? readU32LEB() : 0
        const offset = mode === DataMode.Passive ? null : readConstantU32()
        const length = readU32LEB()
        dataSection.push([memory, offset, bytes.slice(ptr, ptr += length)])
      }
    }

    else if (sectionType === Section.DataCount) {
      // This section is not used...
    }

    else {
      throw new CompileError('Unsupported section type: ' + formatHexByte(sectionType))
    }

    ptr = sectionEnd
  }

  return {
    bytes_: bytes,
    dataView_: dataView,
    codeSection_: codeSection,
    customSections_: customSections,
    dataSection_: dataSection,
    elementSection_: elementSection,
    exportSection_: exportSection,
    functionSection_: functionSection,
    globalSection_: globalSection,
    importSection_: importSection,
    memorySection_: memorySection,
    nameSection_: nameSection,
    startSection_: startSection,
    tableSection_: tableSection,
    typeSection_: typeSection,
  }
}

export const formatHexByte = (x: number): string => {
  return '0x' + x.toString(16).toUpperCase().padStart(2, '0')
}

export const moduleMap = new Map<Module, WASM>()

export class Module {
  constructor(source: BufferSource) {
    moduleMap.set(this, parse(source instanceof Uint8Array ? source :
      new Uint8Array(source instanceof ArrayBuffer ? source : source.buffer)))
  }

  declare static customSections: (moduleObject: Module, sectionName: string) => ArrayBuffer[]
  declare static exports: (moduleObject: Module) => WebAssembly.ModuleExportDescriptor[]
  declare static imports: (moduleObject: Module) => WebAssembly.ModuleImportDescriptor[]
}

export class CompileError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'CompileError'
  }
}
