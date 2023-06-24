export type Library = ReturnType<typeof createLibrary>

export const createLibrary = () => {
  const buffer = new ArrayBuffer(8)
  const f32 = new Float32Array(buffer)
  const f64 = new Float64Array(buffer)
  const i32 = new Int32Array(buffer)
  const i64 = new BigInt64Array(buffer)
  const u64 = new BigUint64Array(buffer)

  return {
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
  }
}
