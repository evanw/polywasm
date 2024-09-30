import { Global, Instance, Memory, Table } from './instantiate'
import { Module, CompileError } from './parse'

const instantiate = async (input: any, importObject?: WebAssembly.Imports): Promise<any> => {
  if (input instanceof Module) return new Instance(input, importObject)
  const module = new Module(input)
  return { module, instance: new Instance(module, importObject) }
}

const validate = (input: any): boolean => {
  if (!ArrayBuffer.isView(input) && !(input instanceof ArrayBuffer)) {
    throw new TypeError('Invalid buffer source')
  }
  try {
    new Module(input)
    return true
  } catch {
    return false
  }
}

const wasmAPI: Partial<typeof WebAssembly> = {
  Global,
  Instance,
  instantiate,
  validate,
  Memory,
  Module,
  Table,

  // This cast ignores the lack of a call signature without "new", which we don't support
  CompileError: CompileError as typeof WebAssembly.CompileError,
}

export { wasmAPI as WebAssembly }
