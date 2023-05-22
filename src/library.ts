export const enum LibFn {
  copysign = 'la',
  u64_to_i64 = 'lb',
  i32_reinterpret_f32 = 'lc',
  f32_reinterpret_i32 = 'ld',
  i64_reinterpret_f64 = 'le',
  f64_reinterpret_i64 = 'lf',
  i32_rotl = 'lg',
  i32_rotr = 'lh',
  i64_rotl = 'li',
  i64_rotr = 'lj',
  i32_ctz = 'lk',
  i32_popcnt = 'll',
  i64_clz = 'lm',
  i64_ctz = 'ln',
  i64_popcnt = 'lo',
  i32_trunc_sat_s = 'lp',
  i32_trunc_sat_u = 'lq',
  i64_trunc_sat_s = 'lr',
  i64_trunc_sat_u = 'ls',
  i64_extend8_s = 'lt',
  i64_extend16_s = 'lu',
  i64_extend32_s = 'lv',
}

export type Library = ReturnType<typeof createLibrary>

export const createLibrary = () => {
  const buffer = new ArrayBuffer(8)
  const f32 = new Float32Array(buffer)
  const f64 = new Float64Array(buffer)
  const i32 = new Int32Array(buffer)
  const i64 = new BigInt64Array(buffer)
  const u64 = new BigUint64Array(buffer)

  return {
    [LibFn.copysign](x: number, y: number): number {
      return (x < 0 || (x === 0 && Object.is(x, -0))) !== (y < 0 || (y === 0 && Object.is(y, -0))) ? -x : x
    },
    [LibFn.u64_to_i64](x: bigint): bigint {
      u64[0] = x
      return i64[0]
    },
    [LibFn.i32_reinterpret_f32](x: number): number {
      f32[0] = x
      return i32[0]
    },
    [LibFn.f32_reinterpret_i32](x: number): number {
      i32[0] = x
      return f32[0]
    },
    [LibFn.i64_reinterpret_f64](x: number): bigint {
      f64[0] = x
      return u64[0]
    },
    [LibFn.f64_reinterpret_i64](x: bigint): number {
      u64[0] = x
      return f64[0]
    },
    [LibFn.i32_rotl](x: number, y: number) {
      return x << y | x >>> 32 - y
    },
    [LibFn.i32_rotr](x: number, y: number) {
      return x >>> y | x << 32 - y
    },
    [LibFn.i64_rotl](x: bigint, y: bigint) {
      y &= 63n
      return (x << y | x >> 64n - y) & 0xFFFF_FFFF_FFFF_FFFFn
    },
    [LibFn.i64_rotr](x: bigint, y: bigint) {
      y &= 63n
      return (x >> y | x << 64n - y) & 0xFFFF_FFFF_FFFF_FFFFn
    },
    [LibFn.i32_ctz](x: number): number {
      return x ? Math.clz32(x & -x) ^ 31 : 32
    },
    [LibFn.i32_popcnt](x: number): number {
      let count = 0
      while (x) {
        count++
        x &= x - 1
      }
      return count
    },
    [LibFn.i64_clz](x: bigint): bigint {
      let count = Math.clz32(Number((x >> 32n) & 0xFFFF_FFFFn))
      if (count === 32) count += Math.clz32(Number(x & 0xFFFF_FFFFn))
      return BigInt(count)
    },
    [LibFn.i64_ctz](x: bigint): bigint {
      let y = Number(x & 0xFFFF_FFFFn)
      if (y) return BigInt(Math.clz32(y & -y) ^ 31)
      y = Number((x >> 32n) & 0xFFFF_FFFFn)
      return y ? BigInt(32 + Math.clz32(y & -y) ^ 31) : 64n
    },
    [LibFn.i64_popcnt](x: bigint): bigint {
      let count = 0n
      while (x) {
        count++
        x &= x - 1n
      }
      return count
    },
    [LibFn.i32_trunc_sat_s](x: number): number {
      x = Math.trunc(x)
      return x >= 0x7FFF_FFFF ? 0x7FFF_FFFF :
        x <= -0x8000_0000 ? -0x8000_0000 :
          x | 0
    },
    [LibFn.i32_trunc_sat_u](x: number): number {
      x = Math.trunc(x)
      return x >= 0xFFFF_FFFF ? -1 :
        x <= 0 ? 0 :
          x | 0
    },
    [LibFn.i64_trunc_sat_s](x: number): bigint {
      x = Math.trunc(x)
      return x >= 0x7FFF_FFFF_FFFF_FFFF ? 0x7FFF_FFFF_FFFF_FFFFn :
        x <= -0x8000_0000_0000_0000 ? 0x8000_0000_0000_0000n :
          x === x ?
            BigInt(x) & 0xFFFF_FFFF_FFFF_FFFFn :
            0n // NaN must become 0
    },
    [LibFn.i64_trunc_sat_u](x: number): bigint {
      x = Math.trunc(x)
      return x >= 0xFFFF_FFFF_FFFF_FFFF ? 0xFFFF_FFFF_FFFF_FFFFn :
        !(x > 0) ? 0n : // NaN must become 0
          BigInt(x)
    },
    [LibFn.i64_extend8_s](x: bigint): bigint {
      return x & 0x80n ? x | 0xFFFF_FFFF_FFFF_FF00n : x & 0xFFn
    },
    [LibFn.i64_extend16_s](x: bigint): bigint {
      return x & 0x8000n ? x | 0xFFFF_FFFF_FFFF_0000n : x & 0xFFFFn
    },
    [LibFn.i64_extend32_s](x: bigint): bigint {
      return x & 0x8000_0000n ? x | 0xFFFF_FFFF_0000_0000n : x & 0xFFFF_FFFFn
    },
  }
}
