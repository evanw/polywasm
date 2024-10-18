import { castToJS, castToWASM } from './compile'
import { InternalTable, LazyFunc } from './instantiate'

const buffer = new ArrayBuffer(8)
const f32 = new Float32Array(buffer)
const f64 = new Float64Array(buffer)
const i32 = new Int32Array(buffer)
const i64 = new BigInt64Array(buffer)
const u64 = new BigUint64Array(buffer)
const exportedFuncs = new WeakMap<Function, LazyFunc>()
const emptyArray: never[] = []

class Trampoline {
  declare fn_: Function | null
  declare args_: any[]
}

export const library = {
  copysign_(x: number, y: number): number {
    return (x < 0 || (x === 0 && Object.is(x, -0))) !== (y < 0 || (y === 0 && Object.is(y, -0))) ? -x : x
  },
  u64_to_s64_(x: bigint): bigint {
    u64[0] = x
    return i64[0]
  },
  i32_reinterpret_f32_(x: number): number {
    f32[0] = x
    return i32[0]
  },
  f32_reinterpret_i32_(x: number): number {
    i32[0] = x
    return f32[0]
  },
  i64_reinterpret_f64_(x: number): bigint {
    f64[0] = x
    return u64[0]
  },
  f64_reinterpret_i64_(x: bigint): number {
    u64[0] = x
    return f64[0]
  },
  i32_rotl_(x: number, y: number) {
    return x << y | x >>> 32 - y
  },
  i32_rotr_(x: number, y: number) {
    return x >>> y | x << 32 - y
  },
  i64_rotl_(x: bigint, y: bigint) {
    // Note: "y" is already "y & 63n" from the caller
    return (x << y | x >> 64n - y) & 0xFFFF_FFFF_FFFF_FFFFn
  },
  i64_rotr_(x: bigint, y: bigint) {
    // Note: "y" is already "y & 63n" from the caller
    return (x >> y | x << 64n - y) & 0xFFFF_FFFF_FFFF_FFFFn
  },
  i32_ctz_(x: number): number {
    return x ? Math.clz32(x & -x) ^ 31 : 32
  },
  i32_popcnt_(x: number): number {
    let count = 0
    while (x) {
      count++
      x &= x - 1
    }
    return count
  },
  i64_clz_(x: bigint): bigint {
    let count = Math.clz32(Number((x >> 32n) & 0xFFFF_FFFFn))
    if (count === 32) count += Math.clz32(Number(x & 0xFFFF_FFFFn))
    return BigInt(count)
  },
  i64_ctz_(x: bigint): bigint {
    let y = Number(x & 0xFFFF_FFFFn)
    if (y) return BigInt(Math.clz32(y & -y) ^ 31)
    y = Number((x >> 32n) & 0xFFFF_FFFFn)
    return y ? BigInt(32 + Math.clz32(y & -y) ^ 31) : 64n
  },
  i64_popcnt_(x: bigint): bigint {
    let count = 0n
    while (x) {
      count++
      x &= x - 1n
    }
    return count
  },
  i32_trunc_sat_s_(x: number): number {
    x = Math.trunc(x)
    return x >= 0x7FFF_FFFF ? 0x7FFF_FFFF :
      x <= -0x8000_0000 ? -0x8000_0000 :
        x | 0
  },
  i32_trunc_sat_u_(x: number): number {
    x = Math.trunc(x)
    return x >= 0xFFFF_FFFF ? -1 :
      x <= 0 ? 0 :
        x | 0
  },
  i64_trunc_sat_s_(x: number): bigint {
    x = Math.trunc(x)
    return x >= 0x7FFF_FFFF_FFFF_FFFF ? 0x7FFF_FFFF_FFFF_FFFFn :
      x <= -0x8000_0000_0000_0000 ? 0x8000_0000_0000_0000n :
        x === x ?
          BigInt(x) & 0xFFFF_FFFF_FFFF_FFFFn :
          0n // NaN must become 0
  },
  i64_trunc_sat_u_(x: number): bigint {
    x = Math.trunc(x)
    return x >= 0xFFFF_FFFF_FFFF_FFFF ? 0xFFFF_FFFF_FFFF_FFFFn :
      !(x > 0) ? 0n : // NaN must become 0
        BigInt(x)
  },
  i64_extend8_s_(x: bigint): bigint {
    return x & 0x80n ? x | 0xFFFF_FFFF_FFFF_FF00n : x & 0xFFn
  },
  i64_extend16_s_(x: bigint): bigint {
    return x & 0x8000n ? x | 0xFFFF_FFFF_FFFF_0000n : x & 0xFFFFn
  },
  i64_extend32_s_(x: bigint): bigint {
    return x & 0x8000_0000n ? x | 0xFFFF_FFFF_0000_0000n : x & 0xFFFF_FFFFn
  },
  memory_init_or_copy_(source: Uint8Array, destination: Uint8Array, target: number, start: number, count: number): void {
    if (source === destination) {
      destination.copyWithin(target, start, start + count)
    } else {
      destination.set(source.subarray(start, start + count), target)
    }
  },
  table_init_or_copy_(x: InternalTable, y: (LazyFunc | null)[], d: number, s: number, n: number): void {
    d >>>= 0
    s >>>= 0
    n >>>= 0
    if (s + n > y.length || d + n > x.length) throw RangeError()
    if (d <= s) {
      for (let j = 0; j < n; j++) x[d + j] = y[s + j]
    } else {
      for (let j = n - 1; j >= 0; j--) x[d + j] = y[s + j]
    }
  },
  table_grow_(x: InternalTable, val: LazyFunc | null, n: number): number {
    const sz = x.length
    n >>>= 0
    if (sz + n > x.limit_) return -1
    for (let i = 0; i < n; i++) x.push(val)
    return sz
  },
  table_fill_(x: InternalTable, i: number, val: LazyFunc | null, n: number): void {
    i >>>= 0
    n >>>= 0
    if (i + n > x.length) throw RangeError()
    for (let j = 0; j < n; j++) x[i + j] = val
  },
  return_call_(context: Trampoline, fn: Function, args: any[]): any {
    if (context instanceof Trampoline) {
      context.fn_ = fn
      context.args_ = args
      return emptyArray // Don't crash when destructuring multiple return values
    }

    // Technically this isn't a true tail call because the first call frame in a
    // chain of successive nested tail calls isn't collapsed, but it should help
    // to avoid stack overflow in common tail call usage, even with two or more
    // mutually tail-recursive functions.
    context = new Trampoline
    let result: any
    while ((result = fn.apply(context, args)), context.fn_) {
      fn = context.fn_
      args = context.args_
      context.fn_ = null
    }
    return result
  },
  importLazyFunc_(fn: Function | null): LazyFunc | null {
    if (fn === null) return fn
    const obj = exportedFuncs.get(fn)
    if (obj) return obj
    throw Error('Unexpected foreign function object')
  },
  exportLazyFunc_(obj: LazyFunc | null): Function | null {
    if (obj === null) return null
    if (!obj.exported_) {
      const [argTypes, returnTypes] = obj.type_
      const argNames: string[] = []
      const argExprs: string[] = []
      for (let i = 0; i < argTypes.length; i++) {
        argNames.push('a' + i)
        argExprs.push(castToWASM('a' + i, argTypes[i]))
      }
      let result = `f.${/* @__KEY__ */ 'compiled_'}(${argExprs})`
      if (returnTypes.length === 1) {
        result = 'return ' + castToJS(result, returnTypes[0])
      } else if (returnTypes.length > 1) {
        result = `let r=${result};`
        for (let i = 0; i < returnTypes.length; i++) result += `r[${i}]=${castToJS(`r[${i}]`, returnTypes[i])};`
        result += 'return r'
      }
      exportedFuncs.set(obj.exported_ = new Function('f', 'l', `return(${argNames})=>{${result}}`)(obj, this), obj)
    }
    return obj.exported_
  },
}
