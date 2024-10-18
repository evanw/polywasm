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
const extendedConstTestDir = path.join(coreTestDir, 'extended-const')
const multiMemoryTestDir = path.join(coreTestDir, 'multi-memory')
const tailCallTestDir = path.join(coreTestDir, 'tail-call')
const testHarness = fs.readFileSync(path.join(coreTestDir, 'harness', 'sync_index.js'), 'utf8')
  .replace(/\$\{e\.stack\}(\\n)?/g, '')

const tests = []
for (const name of fs.readdirSync(coreTestDir)) tests.push(path.join(coreTestDir, name))
for (const name of fs.readdirSync(extendedConstTestDir)) tests.push(path.join(extendedConstTestDir, name))
for (const name of fs.readdirSync(multiMemoryTestDir)) tests.push(path.join(multiMemoryTestDir, name))
for (const name of fs.readdirSync(tailCallTestDir)) tests.push(path.join(tailCallTestDir, name))

function runTests(wasm) {
  const counters = {
    passed: 0,
    failed: 0,
  }

  for (const file of tests) {
    if (!file.endsWith('.js')) continue
    console.log(`🔹 ${path.relative(coreTestDir, file)}`)
    const js = fs.readFileSync(file, 'utf8')

    const fn = new Function('counters', 'WebAssembly', `
      ${testHarness}

      registry.spectest.print = () => {}
      registry.spectest.print_i32 = () => {}
      registry.spectest.print_i64 = () => {}
      registry.spectest.print_i32_f32 = () => {}
      registry.spectest.print_f64_f64 = () => {}
      registry.spectest.print_f32 = () => {}
      registry.spectest.print_f64 = () => {}

      function test(fn, name) {
        try {
          fn()
          counters.passed++
        } catch (error) {
          counters.failed++
          console.log('  ❌ ' + name + ': ' + error)
        }
      }

      function assert_true(actual, description) {
        if (actual !== true) {
          throw new Error(description)
        }
      }

      function assert_equals(actual, expected, description) {
        if (actual !== expected) {
          throw new Error(description || 'expected ' + expected + ', got: ' + actual)
        }
      }

      // These are ignored...
      function assert_exhaustion() {}
      function assert_invalid() {}
      function assert_trap() {}
      function assert_uninstantiable() {}
      function assert_unlinkable() {}

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
