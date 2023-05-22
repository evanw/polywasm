import { Global, Instance, Memory, Table } from './instantiate'
import { Module } from './parse'

const instantiate = async (input: any, importObject?: WebAssembly.Imports): Promise<any> => {
  if (input instanceof Module) return new Instance(input, importObject)
  const module = new Module(input)
  return { module, instance: new Instance(module, importObject) }
}

const wasmAPI: Partial<typeof WebAssembly> = {
  Global,
  Instance,
  instantiate,
  Memory,
  Module,
  Table,
}

export { wasmAPI as WebAssembly }
