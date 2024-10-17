import { Global, Instance, Memory, Table } from './instantiate'
import { Module, CompileError } from './parse'

const compile = async (input: BufferSource): Promise<Module> => {
  return new Module(input)
}

const compileStreaming = async (source: Response | PromiseLike<Response>): Promise<Module> => {
  return new Module(await (await source).arrayBuffer())
}

const instantiate = async (input: BufferSource | Module, importObject?: WebAssembly.Imports): Promise<any> => {
  if (input instanceof Module) return new Instance(input, importObject)
  const module = new Module(input)
  return { module, instance: new Instance(module, importObject) }
}

const instantiateStreaming = async (source: Response | PromiseLike<Response>, importObject?: WebAssembly.Imports): Promise<any> => {
  const module = new Module(await (await source).arrayBuffer())
  return { module, instance: new Instance(module, importObject) }
}

const validate = (input: any): boolean => {
  if (!ArrayBuffer.isView(input) && !(input instanceof ArrayBuffer)) {
    throw TypeError('Invalid buffer source')
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
  compile,
  compileStreaming,
  instantiate,
  instantiateStreaming,
  validate,
  Memory,
  Module,
  Table,

  // This cast ignores the lack of a call signature without "new", which we don't support
  CompileError: CompileError as typeof WebAssembly.CompileError,
}

export { wasmAPI as WebAssembly }
