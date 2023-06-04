// This file provides a way to parse a single WebAssembly function and convert
// it to JavaScript. Functions are compiled lazily when they are first evaluated.

import { Context, ContextField } from './instantiate'
import { LibFn, Library } from './library'
import { compileOptimizations } from './optimize'
import { FuncType, Type, WASM } from './parse'

export enum Op {
  // These are prefixed by 0xFC
  i32_trunc_sat_f32_s = 0x00,
  i32_trunc_sat_f32_u = 0x01,
  i32_trunc_sat_f64_s = 0x02,
  i32_trunc_sat_f64_u = 0x03,
  i64_trunc_sat_f32_s = 0x04,
  i64_trunc_sat_f32_u = 0x05,
  i64_trunc_sat_f64_s = 0x06,
  i64_trunc_sat_f64_u = 0x07,

  // These are prefixed by 0xFC
  memory_copy = 0x0A,
  memory_fill = 0x0B,

  unreachable = 0x00,
  nop = 0x01,
  block = 0x02,
  loop = 0x03,
  if = 0x04,
  else = 0x05,
  end = 0x0B,
  br = 0x0C,
  br_if = 0x0D,
  br_table = 0x0E,
  return = 0x0F,
  call = 0x10,
  call_indirect = 0x11,

  drop = 0x1A,
  select = 0x1B,
  select_type = 0x1C,

  local_get = 0x20,
  local_set = 0x21,
  local_tee = 0x22,
  global_get = 0x23,
  global_set = 0x24,

  table_get = 0x25,
  table_set = 0x26,

  i32_load = 0x28,
  i64_load = 0x29,
  f32_load = 0x2A,
  f64_load = 0x2B,
  i32_load8_s = 0x2C,
  i32_load8_u = 0x2D,
  i32_load16_s = 0x2E,
  i32_load16_u = 0x2F,
  i64_load8_s = 0x30,
  i64_load8_u = 0x31,
  i64_load16_s = 0x32,
  i64_load16_u = 0x33,
  i64_load32_s = 0x34,
  i64_load32_u = 0x35,
  i32_store = 0x36,
  i64_store = 0x37,
  f32_store = 0x38,
  f64_store = 0x39,
  i32_store8 = 0x3A,
  i32_store16 = 0x3B,
  i64_store8 = 0x3C,
  i64_store16 = 0x3D,
  i64_store32 = 0x3E,

  memory_size = 0x3F,
  memory_grow = 0x40,

  i32_const = 0x41,
  i64_const = 0x42,
  f32_const = 0x43,
  f64_const = 0x44,

  i32_eqz = 0x45,
  i32_eq = 0x46,
  i32_ne = 0x47,
  i32_lt_s = 0x48,
  i32_lt_u = 0x49,
  i32_gt_s = 0x4A,
  i32_gt_u = 0x4B,
  i32_le_s = 0x4C,
  i32_le_u = 0x4D,
  i32_ge_s = 0x4E,
  i32_ge_u = 0x4F,

  i64_eqz = 0x50,
  i64_eq = 0x51,
  i64_ne = 0x52,
  i64_lt_s = 0x53,
  i64_lt_u = 0x54,
  i64_gt_s = 0x55,
  i64_gt_u = 0x56,
  i64_le_s = 0x57,
  i64_le_u = 0x58,
  i64_ge_s = 0x59,
  i64_ge_u = 0x5A,

  f32_eq = 0x5B,
  f32_ne = 0x5C,
  f32_lt = 0x5D,
  f32_gt = 0x5E,
  f32_le = 0x5F,
  f32_ge = 0x60,

  f64_eq = 0x61,
  f64_ne = 0x62,
  f64_lt = 0x63,
  f64_gt = 0x64,
  f64_le = 0x65,
  f64_ge = 0x66,

  i32_clz = 0x67,
  i32_ctz = 0x68,
  i32_popcnt = 0x69,
  i32_add = 0x6A,
  i32_sub = 0x6B,
  i32_mul = 0x6C,
  i32_div_s = 0x6D,
  i32_div_u = 0x6E,
  i32_rem_s = 0x6F,
  i32_rem_u = 0x70,
  i32_and = 0x71,
  i32_or = 0x72,
  i32_xor = 0x73,
  i32_shl = 0x74,
  i32_shr_s = 0x75,
  i32_shr_u = 0x76,
  i32_rotl = 0x77,
  i32_rotr = 0x78,

  i64_clz = 0x79,
  i64_ctz = 0x7A,
  i64_popcnt = 0x7B,
  i64_add = 0x7C,
  i64_sub = 0x7D,
  i64_mul = 0x7E,
  i64_div_s = 0x7F,
  i64_div_u = 0x80,
  i64_rem_s = 0x81,
  i64_rem_u = 0x82,
  i64_and = 0x83,
  i64_or = 0x84,
  i64_xor = 0x85,
  i64_shl = 0x86,
  i64_shr_s = 0x87,
  i64_shr_u = 0x88,
  i64_rotl = 0x89,
  i64_rotr = 0x8A,

  f32_abs = 0x8B,
  f32_neg = 0x8C,
  f32_ceil = 0x8D,
  f32_floor = 0x8E,
  f32_trunc = 0x8F,
  f32_nearest = 0x90,
  f32_sqrt = 0x91,
  f32_add = 0x92,
  f32_sub = 0x93,
  f32_mul = 0x94,
  f32_div = 0x95,
  f32_min = 0x96,
  f32_max = 0x97,
  f32_copysign = 0x98,

  f64_abs = 0x99,
  f64_neg = 0x9A,
  f64_ceil = 0x9B,
  f64_floor = 0x9C,
  f64_trunc = 0x9D,
  f64_nearest = 0x9E,
  f64_sqrt = 0x9F,
  f64_add = 0xA0,
  f64_sub = 0xA1,
  f64_mul = 0xA2,
  f64_div = 0xA3,
  f64_min = 0xA4,
  f64_max = 0xA5,
  f64_copysign = 0xA6,

  i32_wrap_i64 = 0xA7,
  i32_trunc_f32_s = 0xA8,
  i32_trunc_f32_u = 0xA9,
  i32_trunc_f64_s = 0xAA,
  i32_trunc_f64_u = 0xAB,
  i64_extend_i32_s = 0xAC,
  i64_extend_i32_u = 0xAD,
  i64_trunc_f32_s = 0xAE,
  i64_trunc_f32_u = 0xAF,
  i64_trunc_f64_s = 0xB0,
  i64_trunc_f64_u = 0xB1,
  f32_convert_i32_s = 0xB2,
  f32_convert_i32_u = 0xB3,
  f32_convert_i64_s = 0xB4,
  f32_convert_i64_u = 0xB5,
  f32_demote_f64 = 0xB6,
  f64_convert_i32_s = 0xB7,
  f64_convert_i32_u = 0xB8,
  f64_convert_i64_s = 0xB9,
  f64_convert_i64_u = 0xBA,
  f64_promote_f32 = 0xBB,
  i32_reinterpret_f32 = 0xBC,
  i64_reinterpret_f64 = 0xBD,
  f32_reinterpret_i32 = 0xBE,
  f64_reinterpret_i64 = 0xBF,

  i32_extend8_s = 0xC0,
  i32_extend16_s = 0xC1,
  i64_extend8_s = 0xC2,
  i64_extend16_s = 0xC3,
  i64_extend32_s = 0xC4,

  // These are our own opcodes, and are not part of WebAssembly
  BOOL = 0xF0,
  BOOL_NOT = 0xF1,
  BOOL_TO_INT = 0xF2,
  TO_U32 = 0xF3,
  TO_S64 = 0xF4,
  U32_LOAD = 0xF5,
  S64_LOAD = 0xF6,
}

const enum BlockKind {
  Normal,
  Loop,
  IfElse,
}

interface Block {
  argCount_: number
  isDead_: boolean
  kind_: BlockKind
  labelBreak_: number
  labelContinueOrElse_: number
  parentStackTop_: number
  returnCount_: number
}

export const liveCastToWASM = (value: any, type: Type): number | bigint => {
  if (type === Type.F32 || type === Type.F64) return +value
  if (type === Type.I32) return value | 0
  if (type === Type.I64) return BigInt(value) & 0xFFFF_FFFF_FFFF_FFFFn
  throw new Error('Unsupported cast to type ' + type)
}

export const castToWASM = (code: string, type: Type): string => {
  if (type === Type.F32 || type === Type.F64) return '+' + code
  if (type === Type.I32) return code + '|0'
  if (type === Type.I64) return `BigInt(${code})&0xFFFFFFFFFFFFFFFFn`
  throw new Error('Unsupported cast to type ' + type)
}

export const castToJS = (code: string, type: Type): string => {
  if (type === Type.F64 || type === Type.I32) return code
  if (type === Type.F32) return `Math.fround(${code})`
  if (type === Type.I64) return `l.${LibFn.u64_to_s64}(${code})`
  throw new Error('Unsupported cast to type ' + type)
}

const enum MetaFlag {
  PopMask = 3, // Bits 0 and 1 are for the number of values popped from the stack
  Push = 1 << 2, // Pushes one value to the stack (e.g. "local_get")
  Simple = 1 << 3, // Doesn't need special handling during the initial scan (e.g. not "call")
  HasIndex = 1 << 4, // Has an index payload (e.g. "global_get")
  HasAlign = 1 << 5, // Has an align byte (e.g. "i32_store8")
  BoolToInt = 1 << 6, // Results in a boolean that must be casted back to an i32
  ToU32 = 1 << 7, // Arguments should be converted to 32-bit unsigned
  ToS64 = 1 << 8, // Arguments should be converted to 64-bit signed
  Omit = 1 << 9, // This causes us to omit the instruction entirely (e.g. "f64_promote_f32")
  And63 = 1 << 10, // The second operand needs a bitwise-and with 63
}

// This lookup table helps decode WebAssembly bytecode compactly. Most bytecodes
// have a regular stack-based structure. This is translated into a register-based
// structure internally, where a "register" is a JavaScript local variable.
const metaTable = new Uint16Array(256)

metaTable[Op.nop] = MetaFlag.Omit | MetaFlag.Simple
metaTable[Op.drop] = 1 | MetaFlag.Omit | MetaFlag.Simple

metaTable[Op.local_get] = MetaFlag.Push | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.local_set] = 1 | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.local_tee] = 1 | MetaFlag.Push | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.global_get] = MetaFlag.Push | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.global_set] = 1 | MetaFlag.HasIndex | MetaFlag.Simple

metaTable[Op.i32_load] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.f32_load] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.f64_load] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_load8_s] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_load8_u] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_load16_s] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_load16_u] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load8_s] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load8_u] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load16_s] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load16_u] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load32_s] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_load32_u] = 1 | MetaFlag.Push | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_store] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_store] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.f32_store] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.f64_store] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_store8] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i32_store16] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_store8] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_store16] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.i64_store32] = 2 | MetaFlag.HasAlign | MetaFlag.HasIndex | MetaFlag.Simple

metaTable[Op.memory_size] = MetaFlag.Push | MetaFlag.HasIndex | MetaFlag.Simple
metaTable[Op.memory_grow] = 1 | MetaFlag.Push | MetaFlag.HasIndex | MetaFlag.Simple

metaTable[Op.i32_eqz] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_eq] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i32_ne] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i32_lt_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i32_lt_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToU32
metaTable[Op.i32_gt_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i32_gt_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToU32
metaTable[Op.i32_le_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i32_le_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToU32
metaTable[Op.i32_ge_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i32_ge_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToU32

metaTable[Op.i64_eqz] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_eq] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i64_ne] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i64_lt_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToS64
metaTable[Op.i64_lt_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i64_gt_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToS64
metaTable[Op.i64_gt_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i64_le_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToS64
metaTable[Op.i64_le_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.i64_ge_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt | MetaFlag.ToS64
metaTable[Op.i64_ge_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt

metaTable[Op.f32_eq] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f32_ne] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f32_lt] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f32_gt] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f32_le] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f32_ge] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt

metaTable[Op.f64_eq] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f64_ne] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f64_lt] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f64_gt] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f64_le] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt
metaTable[Op.f64_ge] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.BoolToInt

metaTable[Op.i32_clz] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_ctz] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_popcnt] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_add] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_sub] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_mul] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_div_s] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_div_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.ToU32
metaTable[Op.i32_rem_s] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_rem_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.ToU32
metaTable[Op.i32_and] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_or] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_xor] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_shl] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_shr_s] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_shr_u] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_rotl] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_rotr] = 2 | MetaFlag.Push | MetaFlag.Simple

metaTable[Op.i64_clz] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_ctz] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_popcnt] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_add] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_sub] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_mul] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_div_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.ToS64
metaTable[Op.i64_div_u] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_rem_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.ToS64
metaTable[Op.i64_rem_u] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_and] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_or] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_xor] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_shl] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.And63
metaTable[Op.i64_shr_s] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.And63
metaTable[Op.i64_shr_u] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.And63
metaTable[Op.i64_rotl] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.And63
metaTable[Op.i64_rotr] = 2 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.And63

metaTable[Op.f32_abs] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_neg] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_ceil] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_floor] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_trunc] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_nearest] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_sqrt] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_add] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_sub] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_mul] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_div] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_min] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_max] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_copysign] = 2 | MetaFlag.Push | MetaFlag.Simple

metaTable[Op.f64_abs] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_neg] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_ceil] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_floor] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_trunc] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_nearest] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_sqrt] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_add] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_sub] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_mul] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_div] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_min] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_max] = 2 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_copysign] = 2 | MetaFlag.Push | MetaFlag.Simple

metaTable[Op.i32_wrap_i64] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_trunc_f32_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_trunc_f32_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_trunc_f64_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_trunc_f64_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_extend_i32_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_extend_i32_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_trunc_f32_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_trunc_f32_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_trunc_f64_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_trunc_f64_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_convert_i32_s] = 1 | MetaFlag.Push | MetaFlag.Omit | MetaFlag.Simple
metaTable[Op.f32_convert_i32_u] = 1 | MetaFlag.Push | MetaFlag.Omit | MetaFlag.Simple | MetaFlag.ToU32
metaTable[Op.f32_convert_i64_s] = 1 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.ToS64
metaTable[Op.f32_convert_i64_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_demote_f64] = 1 | MetaFlag.Push | MetaFlag.Omit | MetaFlag.Simple
metaTable[Op.f64_convert_i32_s] = 1 | MetaFlag.Push | MetaFlag.Omit | MetaFlag.Simple
metaTable[Op.f64_convert_i32_u] = 1 | MetaFlag.Push | MetaFlag.Omit | MetaFlag.Simple | MetaFlag.ToU32
metaTable[Op.f64_convert_i64_s] = 1 | MetaFlag.Push | MetaFlag.Simple | MetaFlag.ToS64
metaTable[Op.f64_convert_i64_u] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_promote_f32] = 1 | MetaFlag.Push | MetaFlag.Omit | MetaFlag.Simple
metaTable[Op.i32_reinterpret_f32] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_reinterpret_f64] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f32_reinterpret_i32] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.f64_reinterpret_i64] = 1 | MetaFlag.Push | MetaFlag.Simple

metaTable[Op.i32_extend8_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i32_extend16_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_extend8_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_extend16_s] = 1 | MetaFlag.Push | MetaFlag.Simple
metaTable[Op.i64_extend32_s] = 1 | MetaFlag.Push | MetaFlag.Simple

// WebAssembly bytecode is decoded into an AST so that it can be optimized
// before converting it to JavaScript. The AST is stored as numbers in an
// array instead of as JavaScript objects for performance, which can matter
// a lot when the JavaScript JIT is disabled.
//
// Each AST node takes the following form:
//
//   ast[ptr] = opcode | (childCount << Pack.ChildCountShift) | (outputStackSlot << Pack.OutSlotShift)
//   ast[ptr + 1] = /* child 1 */
//   ast[ptr + 2] = /* child 2 */
//   ...
//   ast[ptr + N] = /* child N */
//   ast[ptr + N + 1] = /* an optional extra payload (e.g. an offset for load/store) */
//
// Encoding the child count in the node metadata and putting optional extra
// data after the children allows the AST to be traversed generically without
// needing to know the specifics of each node's internal format.
export const enum Pack {
  OpMask = 255,
  ChildCountShift = 8,
  ChildCountMask = 0xFFFF,
  OutSlotShift = 24,
}

// The AST is stored in a fixed-sized array, which assumes we never generate an
// AST bigger than this. This isn't so bad because we only ever generate an AST
// for a single basic block at a time. This array is allocated once so that we
// don't reallocate it every time we compile a function.
const astBufferSingleton = new Int32Array(1 << 16)

const optimizeNode = compileOptimizations()

export const compileCode = (
  funcs: Function[],
  funcTypes: FuncType[],
  table: (Function | null)[] | undefined,
  globals: (number | bigint)[],
  library: Library,
  context: Context,
  wasm: WASM,
  codeIndex: number,
  funcIndex: number,
): Function => {
  const readU32LEB = (): number => {
    let value = 0
    let shift = 0
    let byte: number
    do {
      byte = bytes[bytesPtr++]
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
      byte = bytes[bytesPtr++]
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
      byte = bytes[bytesPtr++]
      value |= BigInt(byte & 0x7F) << shift
      shift += 7n
    } while (byte & 0x80)
    return shift < 64 && (byte & 0x40) ? value | (~0n << shift) : value
  }

  const readBlockType = (): [argCount: number, returnCount: number] => {
    const byte = bytes[bytesPtr]
    if (byte === 0x40) {
      bytesPtr++
      return [0, 0]
    }
    if (byte & 0x40) {
      bytesPtr++
      return [0, 1]
    }
    const typeIndex = readU32LEB()
    const [argTypes, returnTypes] = typeSection[typeIndex]
    return [argTypes.length, returnTypes.length]
  }

  // A basic block is a sequence of non-branching instructions. Optimizations
  // are only done within a basic block, but not across basic blocks. We decode
  // WASM into our basic block IR until we hit a branch. Then we generate code
  // for the whole basic block at once, optimizing as we go. We scan backwards
  // through our IR so that we can process uses before definitions to apply our
  // optimizations.
  const ast = astBufferSingleton // Cache a reference in case it improves performance
  const astPtrs: (number | null)[] = []
  let astNextPtr = 0

  // Instructions can reference constants in here by index
  const constants: bigint[] = []

  let stackLimit = 0
  const stackSlotName = (stackSlot: number): string => {
    while (stackLimit < stackSlot) decls.push('s' + ++stackLimit)
    return 's' + stackSlot
  }

  // Optimize the single-byte case using typed arrays
  const load8 = (field: ContextField.Int8Array | ContextField.Uint8Array, addr: number, offset: number): string => {
    return `c.${field}[${emit(addr)}${offset ? '+' + offset : ''}]`
  }
  const store8 = (field: ContextField.Int8Array | ContextField.Uint8Array, addr: number, offset: number, value: string): string => {
    return `c.${field}[${emit(addr)}${offset ? '+' + offset : ''}]=${value}`
  }

  // The multi-byte case must use the data view for alignment reasons
  const load = <T extends string>(get: T extends 'Int8' | 'Uint8' ? never : T, addr: number, offset: number): string => {
    return `c.${ContextField.DataView}.get${get}(${emit(addr)}${offset ? '+' + offset : ''},1)`
  }
  const store = <T extends string>(set: T extends 'Int8' | 'Uint8' ? never : T, addr: number, offset: number, value: string): string => {
    return `c.${ContextField.DataView}.set${set}(${emit(addr)}${offset ? '+' + offset : ''},${value},1)`
  }

  const emit = (ptr: number): string => {
    return ptr < 0 ? stackSlotName(-ptr) : `(${emitUnwrapped(ptr)})`
  }

  const emitUnwrapped = (ptr: number): string => {
    const node = ast[ptr]

    switch (node & Pack.OpMask) {
      case Op.i32_trunc_sat_f32_s: return `l.${LibFn.i32_trunc_sat_s}(${emit(ast[ptr + 1])})`
      case Op.i32_trunc_sat_f32_u: return `l.${LibFn.i32_trunc_sat_u}(${emit(ast[ptr + 1])})`
      case Op.i32_trunc_sat_f64_s: return `l.${LibFn.i32_trunc_sat_s}(${emit(ast[ptr + 1])})`
      case Op.i32_trunc_sat_f64_u: return `l.${LibFn.i32_trunc_sat_u}(${emit(ast[ptr + 1])})`
      case Op.i64_trunc_sat_f32_s: return `l.${LibFn.i64_trunc_sat_s}(${emit(ast[ptr + 1])})`
      case Op.i64_trunc_sat_f32_u: return `l.${LibFn.i64_trunc_sat_u}(${emit(ast[ptr + 1])})`
      case Op.i64_trunc_sat_f64_s: return `l.${LibFn.i64_trunc_sat_s}(${emit(ast[ptr + 1])})`
      case Op.i64_trunc_sat_f64_u: return `l.${LibFn.i64_trunc_sat_u}(${emit(ast[ptr + 1])})`

      case Op.memory_copy: return `c.${ContextField.Uint8Array}.copyWithin(${emit(ast[ptr + 1])},T=${emit(ast[ptr + 2])},T+${emit(ast[ptr + 3])})`
      case Op.memory_fill: return `c.${ContextField.Uint8Array}.fill(${emit(ast[ptr + 1])},T=${emit(ast[ptr + 2])},T+${emit(ast[ptr + 3])})`

      case Op.call: {
        const childCount = (node >> Pack.ChildCountShift) & Pack.ChildCountMask
        const funcIndex = ast[ptr + childCount + 1]
        const [argTypes, returnTypes] = funcTypes[funcIndex]
        const args: string[] = []
        for (let i = 1; i <= childCount; i++) args.push(emit(ast[ptr + i]))
        const code = `f[${funcIndex}](${args})`
        if (returnTypes.length < 2) return code
        const slot = ast[ptr + childCount + 2]
        const returns: string[] = []
        for (let i = 0; i < returnTypes.length; i++) returns.push(stackSlotName(slot + i))
        return `[${returns}]=${code}`
      }
      case Op.call_indirect: {
        const childCount = (node >> Pack.ChildCountShift) & Pack.ChildCountMask
        const typeIndex = ast[ptr + childCount + 2]
        const [argTypes, returnTypes] = typeSection[typeIndex]
        const args: string[] = []
        const func = emit(ast[ptr + 1])
        for (let i = 1; i <= childCount; i++) args.push(emit(ast[ptr + i + 1]))
        const code = `t[${func}](${args})`
        if (returnTypes.length < 2) return code
        const slot = ast[ptr + childCount + 3]
        const returns: string[] = []
        for (let i = 0; i < returnTypes.length; i++) returns.push(stackSlotName(slot + i))
        return `[${returns}]=${code}`
      }

      case Op.select: return `${emit(ast[ptr + 1])}?${emit(ast[ptr + 2])}:${emit(ast[ptr + 3])}`

      case Op.local_get: return names[ast[ptr + 1]]
      case Op.local_set: case Op.local_tee: return `${names[ast[ptr + 2]]}=${emit(ast[ptr + 1])}`
      case Op.global_get: return `g[${ast[ptr + 1]}]`
      case Op.global_set: return `g[${ast[ptr + 2]}]=${emit(ast[ptr + 1])}`

      case Op.i32_load: return load('Int32', ast[ptr + 1], ast[ptr + 2])
      case Op.U32_LOAD: return load('Uint32', ast[ptr + 1], ast[ptr + 2])
      case Op.i64_load: return load('BigUint64', ast[ptr + 1], ast[ptr + 2])
      case Op.S64_LOAD: return load('BigInt64', ast[ptr + 1], ast[ptr + 2])
      case Op.f32_load: return load('Float32', ast[ptr + 1], ast[ptr + 2])
      case Op.f64_load: return load('Float64', ast[ptr + 1], ast[ptr + 2])
      case Op.i32_load8_s: return load8(ContextField.Int8Array, ast[ptr + 1], ast[ptr + 2])
      case Op.i32_load8_u: return load8(ContextField.Uint8Array, ast[ptr + 1], ast[ptr + 2])
      case Op.i32_load16_s: return load('Int16', ast[ptr + 1], ast[ptr + 2])
      case Op.i32_load16_u: return load('Uint16', ast[ptr + 1], ast[ptr + 2])
      case Op.i64_load8_s: return `BigInt(${load8(ContextField.Int8Array, ast[ptr + 1], ast[ptr + 2])})&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_load8_u: return `BigInt(${load8(ContextField.Uint8Array, ast[ptr + 1], ast[ptr + 2])})`
      case Op.i64_load16_s: return `BigInt(${load('Int16', ast[ptr + 1], ast[ptr + 2])})&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_load16_u: return `BigInt(${load('Uint16', ast[ptr + 1], ast[ptr + 2])})`
      case Op.i64_load32_s: return `BigInt(${load('Int32', ast[ptr + 1], ast[ptr + 2])})&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_load32_u: return `BigInt(${load('Uint32', ast[ptr + 1], ast[ptr + 2])})`
      case Op.i32_store: return store('Int32', ast[ptr + 1], ast[ptr + 3], emit(ast[ptr + 2]))
      case Op.i64_store: return store('BigUint64', ast[ptr + 1], ast[ptr + 3], emit(ast[ptr + 2]))
      case Op.f32_store: return store('Float32', ast[ptr + 1], ast[ptr + 3], emit(ast[ptr + 2]))
      case Op.f64_store: return store('Float64', ast[ptr + 1], ast[ptr + 3], emit(ast[ptr + 2]))
      case Op.i32_store8: return store8(ContextField.Uint8Array, ast[ptr + 1], ast[ptr + 3], emit(ast[ptr + 2]))
      case Op.i32_store16: return store('Int16', ast[ptr + 1], ast[ptr + 3], emit(ast[ptr + 2]))
      case Op.i64_store8: return store8(ContextField.Uint8Array, ast[ptr + 1], ast[ptr + 3], `Number(${emit(ast[ptr + 2])}&255n)`)
      case Op.i64_store16: return store('Int16', ast[ptr + 1], ast[ptr + 3], `Number(${emit(ast[ptr + 2])}&65535n)`)
      case Op.i64_store32: return store('Int32', ast[ptr + 1], ast[ptr + 3], `Number(${emit(ast[ptr + 2])}&0xFFFFFFFFn)`)

      case Op.memory_size: {
        if (ast[ptr + 1]) throw new Error('Unsupported non-zero memory index')
        return `c.${ContextField.PageCount}`
      }
      case Op.memory_grow: {
        if (ast[ptr + 2]) throw new Error('Unsupported non-zero memory index')
        return `c.${ContextField.PageGrow}(${emit(ast[ptr + 1])})`
      }

      case Op.i32_const: return ast[ptr + 1] + ''
      case Op.i64_const: return (constants[ast[ptr + 1]] & 0xFFFF_FFFF_FFFF_FFFFn) + 'n'
      case Op.f32_const: return dataView.getFloat32(ast[ptr + 1], true) + ''
      case Op.f64_const: return dataView.getFloat64(ast[ptr + 1], true) + ''

      case Op.BOOL: return emit(ast[ptr + 1])
      case Op.BOOL_NOT: return `!${emit(ast[ptr + 1])}`
      case Op.BOOL_TO_INT: return `${emit(ast[ptr + 1])}?1:0`
      case Op.TO_U32: return `${emit(ast[ptr + 1])}>>>0`
      case Op.TO_S64: return `l.${LibFn.u64_to_s64}(${emit(ast[ptr + 1])})`

      case Op.i32_eqz: case Op.i64_eqz: return `${emit(ast[ptr + 1])}?0:1`
      case Op.i32_eq: case Op.i64_eq: case Op.f32_eq: case Op.f64_eq: return `${emit(ast[ptr + 1])}===${emit(ast[ptr + 2])}`
      case Op.i32_ne: case Op.i64_ne: case Op.f32_ne: case Op.f64_ne: return `${emit(ast[ptr + 1])}!==${emit(ast[ptr + 2])}`
      case Op.i32_lt_s: case Op.i32_lt_u: case Op.i64_lt_s: case Op.i64_lt_u: case Op.f32_lt: case Op.f64_lt: return `${emit(ast[ptr + 1])}<${emit(ast[ptr + 2])}`
      case Op.i32_gt_s: case Op.i32_gt_u: case Op.i64_gt_s: case Op.i64_gt_u: case Op.f32_gt: case Op.f64_gt: return `${emit(ast[ptr + 1])}>${emit(ast[ptr + 2])}`
      case Op.i32_le_s: case Op.i32_le_u: case Op.i64_le_s: case Op.i64_le_u: case Op.f32_le: case Op.f64_le: return `${emit(ast[ptr + 1])}<=${emit(ast[ptr + 2])}`
      case Op.i32_ge_s: case Op.i32_ge_u: case Op.i64_ge_s: case Op.i64_ge_u: case Op.f32_ge: case Op.f64_ge: return `${emit(ast[ptr + 1])}>=${emit(ast[ptr + 2])}`

      case Op.i32_clz: return `Math.clz32(${emit(ast[ptr + 1])})`
      case Op.i32_ctz: return `l.${LibFn.i32_ctz}(${emit(ast[ptr + 1])})`
      case Op.i32_popcnt: return `l.${LibFn.i32_popcnt}(${emit(ast[ptr + 1])})`
      case Op.i32_add: return `${emit(ast[ptr + 1])}+${emit(ast[ptr + 2])}|0`
      case Op.i32_sub: return `${emit(ast[ptr + 1])}-${emit(ast[ptr + 2])}|0`
      case Op.i32_mul: return `Math.imul(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`
      case Op.i32_div_u: case Op.i32_div_s: return `${emit(ast[ptr + 1])}/${emit(ast[ptr + 2])}|0`
      case Op.i32_rem_u: case Op.i32_rem_s: return `${emit(ast[ptr + 1])}%${emit(ast[ptr + 2])}|0`
      case Op.i32_and: return `${emit(ast[ptr + 1])}&${emit(ast[ptr + 2])}`
      case Op.i32_or: return `${emit(ast[ptr + 1])}|${emit(ast[ptr + 2])}`
      case Op.i32_xor: return `${emit(ast[ptr + 1])}^${emit(ast[ptr + 2])}`
      case Op.i32_shl: return `${emit(ast[ptr + 1])}<<${emit(ast[ptr + 2])}`
      case Op.i32_shr_s: return `${emit(ast[ptr + 1])}>>${emit(ast[ptr + 2])}`
      case Op.i32_shr_u: return `${emit(ast[ptr + 1])}>>>${emit(ast[ptr + 2])}|0`
      case Op.i32_rotl: return `l.${LibFn.i32_rotl}(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`
      case Op.i32_rotr: return `l.${LibFn.i32_rotr}(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`

      case Op.i64_clz: return `l.${LibFn.i64_clz}(${emit(ast[ptr + 1])})`
      case Op.i64_ctz: return `l.${LibFn.i64_ctz}(${emit(ast[ptr + 1])})`
      case Op.i64_popcnt: return `l.${LibFn.i64_popcnt}(${emit(ast[ptr + 1])})`
      case Op.i64_add: return `(${emit(ast[ptr + 1])}+${emit(ast[ptr + 2])})&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_sub: return `(${emit(ast[ptr + 1])}-${emit(ast[ptr + 2])})&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_mul: return `(${emit(ast[ptr + 1])}*${emit(ast[ptr + 2])})&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_div_s: return `${emit(ast[ptr + 1])}/${emit(ast[ptr + 2])}&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_div_u: return `${emit(ast[ptr + 1])}/${emit(ast[ptr + 2])}`
      case Op.i64_rem_s: return `${emit(ast[ptr + 1])}%${emit(ast[ptr + 2])}&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_rem_u: return `${emit(ast[ptr + 1])}%${emit(ast[ptr + 2])}`
      case Op.i64_and: return `${emit(ast[ptr + 1])}&${emit(ast[ptr + 2])}`
      case Op.i64_or: return `${emit(ast[ptr + 1])}|${emit(ast[ptr + 2])}`
      case Op.i64_xor: return `${emit(ast[ptr + 1])}^${emit(ast[ptr + 2])}`
      case Op.i64_shl: return `${emit(ast[ptr + 1])}<<${emit(ast[ptr + 2])}&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_shr_s: return `l.${LibFn.u64_to_s64}(${emit(ast[ptr + 1])})>>${emit(ast[ptr + 2])}&0xFFFFFFFFFFFFFFFFn`
      case Op.i64_shr_u: return `${emit(ast[ptr + 1])}>>${emit(ast[ptr + 2])}`
      case Op.i64_rotl: return `l.${LibFn.i64_rotl}(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`
      case Op.i64_rotr: return `l.${LibFn.i64_rotr}(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`

      case Op.f32_abs: case Op.f64_abs: return `Math.abs(${emit(ast[ptr + 1])})`
      case Op.f32_neg: case Op.f64_neg: return `-${emit(ast[ptr + 1])}`
      case Op.f32_ceil: case Op.f64_ceil: return `Math.ceil(${emit(ast[ptr + 1])})`
      case Op.f32_floor: case Op.f64_floor: return `Math.floor(${emit(ast[ptr + 1])})`
      case Op.f32_trunc: case Op.f64_trunc: return `Math.trunc(${emit(ast[ptr + 1])})`
      case Op.f32_nearest: case Op.f64_nearest: return `Math.round(${emit(ast[ptr + 1])})`
      case Op.f32_sqrt: case Op.f64_sqrt: return `Math.sqrt(${emit(ast[ptr + 1])})`
      case Op.f32_add: case Op.f64_add: return `${emit(ast[ptr + 1])}+${emit(ast[ptr + 2])}`
      case Op.f32_sub: case Op.f64_sub: return `${emit(ast[ptr + 1])}-${emit(ast[ptr + 2])}`
      case Op.f32_mul: case Op.f64_mul: return `${emit(ast[ptr + 1])}*${emit(ast[ptr + 2])}`
      case Op.f32_div: case Op.f64_div: return `${emit(ast[ptr + 1])}/${emit(ast[ptr + 2])}`
      case Op.f32_min: case Op.f64_min: return `Math.min(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`
      case Op.f32_max: case Op.f64_max: return `Math.max(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`
      case Op.f32_copysign: case Op.f64_copysign: return `l.${LibFn.copysign}(${emit(ast[ptr + 1])},${emit(ast[ptr + 2])})`

      case Op.i32_wrap_i64: return `Number(${emit(ast[ptr + 1])}&0xFFFFFFFFn)|0`
      case Op.i32_trunc_f32_s: case Op.i32_trunc_f32_u: case Op.i32_trunc_f64_s: case Op.i32_trunc_f64_u: return `Math.trunc(${emit(ast[ptr + 1])})|0`
      case Op.i64_extend_i32_s: return `BigInt(${emit(ast[ptr + 1])})`
      case Op.i64_extend_i32_u: return `BigInt(${emit(ast[ptr + 1])}>>>0)`
      case Op.i64_trunc_f32_s: case Op.i64_trunc_f32_u: case Op.i64_trunc_f64_s: case Op.i64_trunc_f64_u: return `BigInt(Math.trunc(${emit(ast[ptr + 1])}))&0xFFFFFFFFFFFFFFFFn`
      case Op.f32_convert_i64_s: case Op.f32_convert_i64_u: case Op.f64_convert_i64_u: case Op.f64_convert_i64_s: return `Number(${emit(ast[ptr + 1])})`
      case Op.i32_reinterpret_f32: return `l.${LibFn.i32_reinterpret_f32}(${emit(ast[ptr + 1])})`
      case Op.i64_reinterpret_f64: return `l.${LibFn.i64_reinterpret_f64}(${emit(ast[ptr + 1])})`
      case Op.f32_reinterpret_i32: return `l.${LibFn.f32_reinterpret_i32}(${emit(ast[ptr + 1])})`
      case Op.f64_reinterpret_i64: return `l.${LibFn.f64_reinterpret_i64}(${emit(ast[ptr + 1])})`

      case Op.i32_extend8_s: return `${emit(ast[ptr + 1])}<<24>>24`
      case Op.i32_extend16_s: return `${emit(ast[ptr + 1])}<<16>>16`
      case Op.i64_extend8_s: return `l.${LibFn.i64_extend8_s}(${emit(ast[ptr + 1])})`
      case Op.i64_extend16_s: return `l.${LibFn.i64_extend16_s}(${emit(ast[ptr + 1])})`
      case Op.i64_extend32_s: return `l.${LibFn.i64_extend32_s}(${emit(ast[ptr + 1])})`

      default: throw 'Internal error'
    }
  }

  const allocateNode = (node: Op, length: number): number => {
    const ptr = astNextPtr
    ast[ptr] = node
    astNextPtr += length
    return ptr
  }

  const pushUnary = (op: Op, stackSlot = stackTop): void => {
    astPtrs.push(astNextPtr)
    ast[astNextPtr++] = op | (1 << Pack.ChildCountShift) | (stackSlot << Pack.OutSlotShift)
    ast[astNextPtr++] = -stackSlot
  }

  const finalizeBasicBlock = (popStackTop = false): string | undefined => {
    const parts: string[] = []
    let i = astPtrs.length - 1

    const optimizeChildrenAndSelf = (ptr: number): number => {
      const node = ast[ptr]
      const childCount = (node >> Pack.ChildCountShift) & Pack.ChildCountMask

      // Optimize the children first
      for (let j = childCount - 1; i >= 0 && j >= 0; j--) {
        const stackSlot = -ast[ptr + j + 1]
        let didSkip = false

        for (let k = i; k >= 0; k--) {
          const prevPtr = astPtrs[k]
          if (prevPtr === null) continue

          // If this load is from the previous store, inline the node
          const prevNode = ast[prevPtr]
          if ((prevNode >>> Pack.OutSlotShift) === stackSlot) {
            astPtrs[k] = null // Prevent inlined nodes from being emitted at the top level
            if (!didSkip) i = k - 1 // No need to re-scan these nodes
            ast[ptr + j + 1] = optimizeChildrenAndSelf(prevPtr)
            break
          }

          // Skip over this node to keep scanning for something to inline if we
          // know it's safe to do so (a side-effect free unary operation that
          // mutates a single stack slot in place). This is done for these sign
          // conversion opcodes because we generate them immediately before the
          // parent opcode, and they would prevent inlining if we don't do this.
          const prevOp = prevNode & Pack.OpMask
          if (prevOp !== Op.TO_U32 && prevOp !== Op.TO_S64) break
          didSkip = true
        }
      }

      // Then optimize the node itself
      return optimizeNode(ast, constants, allocateNode, ptr)
    }

    // Optimize nodes in reverse
    let ptr: number | null
    while (i >= 0) {
      const index = i--
      if ((ptr = astPtrs[index]) !== null) {
        astPtrs[index] = optimizeChildrenAndSelf(ptr)
      }
    }

    // Emit nodes in reverse
    let result: string | undefined
    i = astPtrs.length - 1
    if (popStackTop) {
      if (i >= 0 && (ptr = astPtrs[i]) !== null && (ast[ptr] >>> Pack.OutSlotShift) === stackTop) {
        result = emitUnwrapped(ptr)
        i--
      } else {
        result = 's' + stackTop
      }
      stackTop--
    }
    while (i >= 0) {
      if ((ptr = astPtrs[i--]) !== null) {
        const stackSlot = ast[ptr] >>> Pack.OutSlotShift
        parts.push(`${stackSlot ? stackSlotName(stackSlot) + '=' : ''}${emitUnwrapped(ptr)};`)
      }
    }

    body += parts.reverse().join('')
    constants.length = 0
    astPtrs.length = 0
    astNextPtr = 0
    return result
  }

  const {
    bytes_: bytes,
    dataView_: dataView,
    codeSection_: codeSection,
    functionSection_: functionSection,
    nameSection_: nameSection,
    typeSection_: typeSection,
  } = wasm

  const [argTypes, returnTypes] = typeSection[functionSection[codeIndex]]
  const [locals, codeStart, codeEnd] = codeSection[codeIndex]

  // The first set of names are the arguments
  const names: string[] = []
  const argCount = argTypes.length
  for (let i = 0; i < argCount; i++) {
    names.push('a' + i)
  }

  // The next set of names are the locals
  const decls: string[] = ['L', 'T']
  for (const [count, type] of locals) {
    for (let i = 0; i < count; i++) {
      const name = 't' + decls.length
      names.push(name)
      decls.push(name + (type === Type.I64 ? '=0n' : '=0'))
    }
  }

  // WebAssembly uses "blocks" to represent structured control flow instead of
  // labels like traditional assembly language. All WebAssembly code is inside
  // of one or more blocks (the outermost block is implicit), which we keep
  // track of during compilation using a stack.
  //
  // Using the WebAssembly "br" opcode jumps to the end of the block unless
  // that block is a loop, in which case it jumps to the beginning. So you can
  // think of WebAssembly blocks as having a label (in the assembly language
  // sense) at the end of the block for normal blocks, and at the beginning of
  // the block for a loop.
  //
  // Here's an example (using the textual WebAssembly S-expression syntax):
  //
  //   (block
  //     call foo
  //     (block
  //       (local.get 0)
  //       (if (then
  //         (br 2)
  //       ))
  //       (call bar)
  //       (br 1)
  //     )
  //     call baz
  //   )
  //
  // We use two different strategies to compile blocks them to JavaScript:
  //
  //   1) Translate WASM blocks to JS blocks
  //
  //      WebAssembly blocks behave similarly to JavaScript labeled statements,
  //      so the translation is straightforward. A normal WebAssembly block
  //      becomes a JavaScript labeled block, and a WebAssembly break becomes
  //      a JavaScript labeled break statement. So the above example would be
  //      translated like this:
  //
  //      b1: {
  //        foo();
  //        b2: {
  //          if (local_0) {
  //            break b2;
  //          }
  //          bar();
  //          break b1;
  //        }
  //        baz();
  //      }
  //
  //      A WebAssembly loop is translated to a JavaScript labeled while-true
  //      loop and a WebAssembly break of a loop becomes a JavaScript labeled.
  //      continue statement.
  //
  //   2) Translate WASM blocks to JS switch-case
  //
  //      Jumps in WebAssembly can also be simulated with a JavaScript switch
  //      statement inside a loop, with "case" statements as labels. Jumping
  //      to a label (which is essentially a simulated "goto") involves setting
  //      the label variable to the jump target and continuing the loop. So the
  //      above example would be translated like this:
  //
  //      var L = 1;
  //      for (;;) {
  //        switch (L) {
  //          case 1:
  //            foo();
  //            if (local_0) {
  //              L = 2;
  //              continue;
  //            }
  //            bar();
  //            L = 3;
  //            continue;
  //          case 2:
  //            baz();
  //          case 3:
  //        }
  //        break;
  //      }
  //
  // The first strategy is more efficient because there is zero overhead for
  // JavaScript-native branching. However, using nested JavaScript blocks means
  // the JavaScript VM will at some point refuse to compile code with too many
  // levels of nested scopes. This happens in all browsers (Chrome, Firefox,
  // and Safari).
  //
  // The second strategy is less efficient because it uses a JavaScript local
  // variable to store the "goto" target, and because "case" statements involve
  // an equality comparison. A VM could special-case this pattern to remove the
  // overhead, but not all VMs do this. However, it uses a constant number of
  // JavaScript scopes (one for the loop and one for the switch) so large
  // WebAssembly functions don't fail to compile due to JavaScript VM nested
  // scope limitations.
  //
  // We blend both strategies by using the first translation strategy until a
  // maximum scope depth is reached, at which point we switch over to using
  // the second translation strategy.
  const blockDepthLimit = 256
  const pushBlock = (kind: BlockKind): number => {
    const isBelowLimit = blocks.length < blockDepthLimit
    if (isBelowLimit) {
      body += `b${blocks.length}:`
    } else if (blocks.length === blockDepthLimit) {
      body += `L=1;b${blocks.length}:for(;;){switch(L){case 1:`
      nextLabel = 2
    }
    const labelBreak = isBelowLimit ? -1 : nextLabel++
    const labelContinueOrElse = isBelowLimit ? -1 : kind !== BlockKind.Normal ? nextLabel++ : 0
    const [argCount, returnCount] = readBlockType()
    blocks.push({
      argCount_: argCount,
      isDead_: false,
      kind_: kind,
      labelBreak_: labelBreak,
      labelContinueOrElse_: labelContinueOrElse,
      parentStackTop_: stackTop - argCount,
      returnCount_: returnCount,
    })
    return labelContinueOrElse
  }
  const jump = (index = blocks.length - readU32LEB() - 1): void => {
    if (blocks[blocks.length - 1].isDead_) return
    const block = blocks[index]
    if (block.kind_ === BlockKind.Loop) {
      if (stackTop > block.parentStackTop_ + block.argCount_) {
        for (let i = 1; i <= block.argCount_; i++) {
          body += `s${block.parentStackTop_ + i}=s${stackTop - block.argCount_ + i};`
        }
      }
      body += index < blockDepthLimit ? `continue b${index};` : `L=${block.labelContinueOrElse_};continue;`
    } else {
      if (stackTop > block.parentStackTop_ + block.returnCount_) {
        for (let i = 1; i <= block.returnCount_; i++) {
          body += `s${block.parentStackTop_ + i}=s${stackTop - block.returnCount_ + i};`
        }
      }
      body += index <= blockDepthLimit ? `break b${index};` : `L=${block.labelBreak_};continue;`
    }
  }
  const blocks: Block[] = [{
    argCount_: 0,
    isDead_: false,
    kind_: BlockKind.Normal,
    labelBreak_: -1,
    labelContinueOrElse_: -1,
    parentStackTop_: 0,
    returnCount_: returnTypes.length,
  }]

  // This is the slot for the value on the top of the stack. Note that the
  // first stack slot is 1 because slot 0 means "no stack slot".
  let stackTop = 0

  // Scan over WebAssembly opcodes and compile them to JavaScript as we go
  let bytesPtr = codeStart
  let nextLabel = 0
  let body = 'b0:{'

  while (bytesPtr < codeEnd) {
    let op = bytes[bytesPtr++]
    const flags: MetaFlag = metaTable[op]

    // Most opcodes can be decoded automatically using a table lookup
    if (flags & MetaFlag.Simple) {
      if (!blocks[blocks.length - 1].isDead_) {
        const childCount = flags & MetaFlag.PopMask
        if (flags & MetaFlag.And63) {
          astPtrs.push(astNextPtr)
          ast[astNextPtr++] = Op.i64_const | ((stackTop + 1) << Pack.OutSlotShift)
          ast[astNextPtr++] = constants.length
          constants.push(63n)
          astPtrs.push(astNextPtr)
          ast[astNextPtr++] = Op.i64_and | (2 << Pack.ChildCountShift) | (stackTop << Pack.OutSlotShift)
          ast[astNextPtr++] = -stackTop
          ast[astNextPtr++] = -(stackTop + 1)
        }
        stackTop -= childCount
        if (flags & (MetaFlag.ToU32 | MetaFlag.ToS64)) {
          for (let i = 0; i < childCount; i++) {
            pushUnary(flags & MetaFlag.ToU32 ? Op.TO_U32 : Op.TO_S64, stackTop + i + 1)
          }
        }
        if (!(flags & MetaFlag.Omit)) {
          if (flags & MetaFlag.HasAlign) bytesPtr++ // Alignment hints are ignored
          astPtrs.push(astNextPtr)
          if (flags & MetaFlag.Push) op |= (stackTop + 1) << Pack.OutSlotShift
          ast[astNextPtr++] = op | (childCount << Pack.ChildCountShift)
          for (let i = 1; i <= childCount; i++) ast[astNextPtr++] = -(stackTop + i)
          if (flags & MetaFlag.HasIndex) ast[astNextPtr++] = readU32LEB()
        }
        if (flags & MetaFlag.Push) stackTop++
        if (flags & MetaFlag.BoolToInt) pushUnary(Op.BOOL_TO_INT)
      } else {
        if (flags & MetaFlag.HasAlign) bytesPtr++
        if (flags & MetaFlag.HasIndex) readU32LEB()
      }
    }

    // A few opcodes need special handling and can't be decoded with a table
    else {
      switch (op) {
        case Op.unreachable:
          finalizeBasicBlock()
          body += '"unreachable"();'
          blocks[blocks.length - 1].isDead_ = true
          break

        case Op.block:
          finalizeBasicBlock()
          if (pushBlock(BlockKind.Normal) < 0) body += '{'
          break

        case Op.loop: {
          finalizeBasicBlock()
          const label = pushBlock(BlockKind.Loop)
          body += label < 0 ? 'for(;;){' : `case ${label}:`
          break
        }

        case Op.if: {
          if (!blocks[blocks.length - 1].isDead_) {
            pushUnary(blocks.length < blockDepthLimit ? Op.BOOL : Op.BOOL_NOT)
          }
          const test = finalizeBasicBlock(true)
          const label = pushBlock(BlockKind.IfElse)
          body += label < 0 ? `if(${test}){` : `if(${test}){L=${label};continue}`
          break
        }

        case Op.else: {
          finalizeBasicBlock()
          const index = blocks.length - 1, block = blocks[index]
          jump(index)
          body += index < blockDepthLimit ? '}else{' : `case ${block.labelContinueOrElse_}:`
          block.kind_ = BlockKind.Normal // Don't emit the "else" label on "end"
          stackTop = block.parentStackTop_ + block.argCount_
          block.isDead_ = false
          break
        }

        case Op.end: {
          finalizeBasicBlock()
          const index = blocks.length - 1, block = blocks[index]
          if (block.kind_ !== BlockKind.IfElse) block.labelContinueOrElse_ = 0 // Emit the "else" label if there was no "else" branch
          block.kind_ = BlockKind.Normal // Emit "break" not "continue"
          jump(index)
          if (index < blockDepthLimit) {
            body += `}`
          } else {
            if (block.labelContinueOrElse_) body += `case ${block.labelContinueOrElse_}:`
            body += `case ${block.labelBreak_}:`
            if (index == blockDepthLimit) body += `}break}`
          }
          stackTop = block.parentStackTop_ + block.returnCount_
          blocks.pop()
          break
        }

        case Op.br:
          finalizeBasicBlock()
          jump()
          blocks[blocks.length - 1].isDead_ = true
          break

        case Op.br_if: {
          if (!blocks[blocks.length - 1].isDead_) pushUnary(Op.BOOL)
          const test = finalizeBasicBlock(true)
          body += `if(${test}){`
          jump()
          body += '}'
          break
        }

        case Op.br_table: {
          const test = finalizeBasicBlock(true)
          body += `switch(${test}){`
          for (let i = 0, tableCount = readU32LEB(); i < tableCount; i++) {
            body += `case ${i}:`
            jump()
          }
          body += 'default:'
          jump()
          body += '}'
          blocks[blocks.length - 1].isDead_ = true
          break
        }

        case Op.return:
          finalizeBasicBlock()
          jump(0)
          blocks[blocks.length - 1].isDead_ = true
          break

        case Op.call: {
          const funcIndex = readU32LEB()
          if (!blocks[blocks.length - 1].isDead_) {
            const [argTypes, returnTypes] = funcTypes[funcIndex]
            stackTop -= argTypes.length
            astPtrs.push(astNextPtr)
            if (returnTypes.length === 1) op |= (stackTop + 1) << Pack.OutSlotShift // Only single-return functions can be inlined
            ast[astNextPtr++] = op | (argTypes.length << Pack.ChildCountShift)
            for (let i = 1; i <= argTypes.length; i++) ast[astNextPtr++] = -(stackTop + i)
            ast[astNextPtr++] = funcIndex // Append the function index to reconstruct the return count
            if (returnTypes.length > 1) ast[astNextPtr++] = stackTop + 1 // Append the first stack slot for unpacking the return values
            stackTop += returnTypes.length
          }
          break
        }

        case Op.call_indirect: {
          const typeIndex = readU32LEB()
          const tableIndex = readU32LEB()
          if (tableIndex !== 0) throw new Error('Unsupported table index: ' + tableIndex)
          if (!blocks[blocks.length - 1].isDead_) {
            const [argTypes, returnTypes] = typeSection[typeIndex]
            stackTop -= argTypes.length + 1
            astPtrs.push(astNextPtr)
            if (returnTypes.length === 1) op |= (stackTop + 1) << Pack.OutSlotShift // Only single-return functions can be inlined
            ast[astNextPtr++] = op | (argTypes.length << Pack.ChildCountShift)
            ast[astNextPtr++] = -(stackTop + argTypes.length + 1) // This is the function pointer
            for (let i = 1; i <= argTypes.length; i++) ast[astNextPtr++] = -(stackTop + i)
            ast[astNextPtr++] = typeIndex // Append the type index to reconstruct the return count
            if (returnTypes.length > 1) ast[astNextPtr++] = stackTop + 1 // Append the first stack slot for unpacking the return values
            stackTop += returnTypes.length
          }
          break
        }

        case Op.select: {
          // Note: JS evaluation order is different than WASM evaluation order here
          if (!blocks[blocks.length - 1].isDead_) {
            pushUnary(Op.BOOL)
            stackTop -= 2
            astPtrs.push(astNextPtr)
            ast[astNextPtr++] = op | (3 << Pack.ChildCountShift) | (stackTop << Pack.OutSlotShift)
            ast[astNextPtr++] = -(stackTop + 2)
            ast[astNextPtr++] = -stackTop
            ast[astNextPtr++] = -(stackTop + 1)
          }
          break
        }

        case Op.i32_const:
          if (!blocks[blocks.length - 1].isDead_) {
            astPtrs.push(astNextPtr)
            ast[astNextPtr++] = op | (++stackTop << Pack.OutSlotShift)
            ast[astNextPtr++] = readI32LEB() // Store the constant inline
          } else {
            readI32LEB()
          }
          break

        case Op.i64_const:
          if (!blocks[blocks.length - 1].isDead_) {
            astPtrs.push(astNextPtr)
            ast[astNextPtr++] = op | (++stackTop << Pack.OutSlotShift)
            ast[astNextPtr++] = constants.length // Store an index to the constant
            constants.push(readI64LEB())
          } else {
            readI64LEB()
          }
          break

        case Op.f32_const:
          if (!blocks[blocks.length - 1].isDead_) {
            astPtrs.push(astNextPtr)
            ast[astNextPtr++] = op | (++stackTop << Pack.OutSlotShift)
            ast[astNextPtr++] = bytesPtr // Store the offset of the constant in the file
          }
          bytesPtr += 4
          break

        case Op.f64_const:
          if (!blocks[blocks.length - 1].isDead_) {
            astPtrs.push(astNextPtr)
            ast[astNextPtr++] = op | (++stackTop << Pack.OutSlotShift)
            ast[astNextPtr++] = bytesPtr // Store the offset of the constant in the file
          }
          bytesPtr += 8
          break

        case 0xFC:
          op = bytes[bytesPtr++]
          if (op <= Op.i64_trunc_sat_f64_u) {
            if (!blocks[blocks.length - 1].isDead_) {
              pushUnary(op)
            }
          } else if (op === Op.memory_copy) {
            if (bytes[bytesPtr++] || bytes[bytesPtr++]) throw new Error('Unsupported non-zero memory index') // Source and destination
            if (!blocks[blocks.length - 1].isDead_) {
              stackTop -= 2
              astPtrs.push(astNextPtr)
              ast[astNextPtr++] = op | (3 << Pack.ChildCountShift) | (stackTop << Pack.OutSlotShift)
              ast[astNextPtr++] = -stackTop
              ast[astNextPtr++] = -(stackTop + 1)
              ast[astNextPtr++] = -(stackTop + 2)
            }
          } else if (op === Op.memory_fill) {
            if (bytes[bytesPtr++]) throw new Error('Unsupported non-zero memory index') // Destination
            if (!blocks[blocks.length - 1].isDead_) {
              // Note: JS evaluation order is different than WASM evaluation order here
              stackTop -= 2
              astPtrs.push(astNextPtr)
              ast[astNextPtr++] = op | (3 << Pack.ChildCountShift) | (stackTop << Pack.OutSlotShift)
              ast[astNextPtr++] = -(stackTop + 1)
              ast[astNextPtr++] = -stackTop
              ast[astNextPtr++] = -(stackTop + 2)
            }
          } else {
            throw new Error('Unsupported instruction: 0xFC' + op.toString(16).padStart(2, '0'))
          }
          break

        default:
          throw new Error('Unsupported instruction: 0x' + op.toString(16).padStart(2, '0'))
      }
    }
  }

  // Each node only has 8 bits of storage for the output stack slot
  if (stackLimit > 255) throw new Error('Deep stacks are not supported')

  // Emit a single return statement at the end of the function
  if (returnTypes.length === 1) {
    body += `return s${stackTop};`
  } else if (returnTypes.length > 1) {
    const values: string[] = []
    for (let i = returnTypes.length - 1; i >= 0; i--) values.push('s' + (stackTop - i))
    body += `return[${values}];`
  }

  // Wrap the body with the arguments
  const name = JSON.stringify('wasm:' + (nameSection.get(funcIndex) || `function[${codeIndex}]`))
  const js = `return{${name}(${names.slice(0, argCount)}){var ${decls};${body}}}[${name}]`
  return new Function('f', 'c', 't', 'g', 'l', js)(funcs, context, table, globals, library)
}
