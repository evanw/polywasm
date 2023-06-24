// This runs some tests from the WebAssembly specification in the "../test/core"
// directory.
//
// THESE TESTS ARE NOT ALL SUPPOSED TO PASS. The tests related to NaN bit
// patterns are pretty much impossible to pass with a JavaScript-based shim
// because JavaScript VMs canonicalize NaNs (unless you represent numbers as
// objects with metadata, but that's too much overhead). These tests are useful
// as a guide but are not useful for continuous integration.

import fs from 'fs'
import url from 'url'
import path from 'path'

const coreTestDir = path.join(url.fileURLToPath(import.meta.url), '..', 'core')

function runTests(wasm) {
  const counters = {
    passed: 0,
    failed: 0,
  }

  for (const name of fs.readdirSync(coreTestDir)) {
    if (!name.endsWith('.js')) continue
    console.log(`🔹 ${name}`)
    const file = path.join(coreTestDir, name)
    const js = fs.readFileSync(file, 'utf8')

    const fn = new Function('counters', 'WebAssembly', `
      const registry = {
        spectest: {
          print_i32() {},
          print_f32() {},
          print_f64() {},
          print_i32_f32() {},
          print_f64_f64() {},
          global_i32: 666,
          global_i64: 666n,
          global_f32: 666,
          global_f64: 666,
          table: new WebAssembly.Table({ initial: 10, maximum: 20, element: 'anyfunc' }),
          memory: new WebAssembly.Memory({ initial: 1, maximum: 2 })
        }
      }

      function register(name, instance) {
        if (instance.value) registry[name] = instance.value.exports
      }

      function get(instance, name) {
        if (instance.value) {
          const v = instance.value.exports[name]
          return { value: v instanceof WebAssembly.Global ? v.value : v }
        }
        return { error: instance.error }
      }

      function instance(bytes, imports = registry) {
        bytes = new Uint8Array(bytes.split('').map(x => x.charCodeAt(0)))
        try {
          const module = new WebAssembly.Module(bytes)
          const instance = new WebAssembly.Instance(module, imports)
          return { value: instance }
        } catch (error) {
          return { error }
        }
      }

      function exports(instance) {
        if (instance.value) return { value: { module: instance.value.exports } }
        return { error: instance.error }
      }

      function call(instance, name, args) {
        try {
          if (instance.value) return { value: instance.value.exports[name](...args) }
          return { error: instance.error }
        } catch (error) {
          return { error }
        }
      }

      function run(fn) {
        fn()
      }

      function assert_return(fn, ...expected) {
        const result = fn()
        if (result.error) {
          console.error('❌ assert_return: ' + fn + ': ' + result.error)
          counters.failed++
        } else {
          const observed = result.value ?? []
          if (observed + '' !== expected + '') {
            console.error('❌ assert_return: ' + fn + ': expected=' + expected + ' observed=' + observed)
            counters.failed++
          } else {
            // console.log('✅ assert_return: ' + fn)
            counters.passed++
          }
        }
      }

      // These are ignored...
      const assert_exhaustion = () => {}
      const assert_invalid = () => {}
      const assert_malformed = () => {}
      const assert_trap = () => {}
      const assert_uninstantiable = () => {}
      const assert_unlinkable = () => {}

      // OCaml seemingly can't print out floats accurately, so I've serialized them as integers to preserve the exact bits
      const float32 = i32 => new Float32Array(new Int32Array([i32]).buffer)[0]
      const float64 = i64 => new Float64Array(new BigInt64Array([i64]).buffer)[0]

      ${js}
    `)

    fn(counters, wasm)
  }

  const total = counters.passed + counters.failed
  console.log(`
  Passed: ${counters.passed} (${(100 * counters.passed / total).toFixed(1)}%)
  Failed: ${counters.failed} (${(100 * counters.failed / total).toFixed(1)}%)
  Total:  ${total}
  `)
}

console.log('\n===== Native =====')
runTests(WebAssembly)

console.log('\n===== Shim =====')
import('../index.js').then(({ WebAssembly }) => runTests(WebAssembly))

  .then(() => {
    console.log('\n===== Minified Shim =====')
    import('../index.min.js').then(({ WebAssembly }) => runTests(WebAssembly))
  })
