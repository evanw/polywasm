# polywasm

This is a polyfill for WebAssembly. It implements enough of the [WebAssembly API](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface) to be able to run a `.wasm` file in a JavaScript environment that lacks a WebAssembly implementation. This is done by parsing the `.wasm` file and translating each WebAssembly function to a JavaScript function. This is not nearly as fast as running WebAssembly natively, but it's better than it not running at all.

## Why does this exist?

WebAssembly support is already widespread so you don't normally need a polyfill to use it. However, certain modern JavaScript environments have WebAssembly disabled. For example, Apple's [Lockdown Mode](https://support.apple.com/en-us/HT212650) (an opt-in security enhancement) disables WebAssembly in Safari. You can use this polyfill to make a WebAssembly-based app work in Safari in Lockdown Mode anyway. It will be extremely slow because Lockdown Mode also disables JavaScript optimizations, but sometimes performance isn't critical.

Another reason to use this might be to play around with WebAssembly execution. For example, this polyfill makes it pretty trivial to instrument each function call to add caller/callee tracing or to make a copy of memory before/after a function call, which could be useful for debugging.

This library also exists because I thought building it would be an interesting challenge. I learned some new things about WebAssembly's file format and intermediate representation while building it.

## How to use it

You need to include this polyfill before code that uses the WebAssembly API:

```html
<script type="module">
  import { WebAssembly } from 'polywasm'
  globalThis.WebAssembly = WebAssembly
</script>
<script src="app.js"></script>
```

The polyfill is small (only ~25kb when minified) and can potentially be optionally loaded only when needed. Keep in mind that this polyfill requires that your JavaScript environment supports the [`BigInt64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array) API. If you want to build the polyfill yourself instead of installing it through npm, you can clone this repo and run `npm ci` follwed by `npm run build`.

## Limitations

Here are some limitations to be aware of:

* **No validation:** This does not fully validate the WebAssembly that it compiles. It assumes that the provided WebAssembly is valid. You should not use this library as a WebAssembly validator.

* **No traps:** This does not generate [traps](https://webassembly.github.io/spec/core/intro/overview.html#trap) for invalid situations (e.g. divide by zero). Generating traps would dramatically slow down the polyfill even more and correctly-designed WebAssembly shouldn't even encounter any traps in the first place.

* **No NaN bit patterns:** This does not preserve NaN bit patterns. WebAssembly does this natively but JavaScript VMs canonicalize NaN bit patterns which prevents a JavaScript-based WebAssembly polyfill from preserving them.

* **Limited API support:** This does not implement the full [WebAssembly API](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface). There's no reason it can't, but right now I have only implemented the parts of the API that I needed to be able to load and run a `.wasm` file and run the WebAssembly specification's core tests.

## Implementation details

### Numeric representation

Integer values in JS are always 64-bit floats while integer values in WASM are sign-independent 32-bit or 64-bit values. When representing WASM integers in JS, they need to have some sign (either signed or unsigned). For example, the 32-bit integer with all bits set to 1 could either be `-1` or `0xFFFF_FFFF` in JS, and the 64-bit integer with all bits set to 1 could either be `-1n` or `0xFFFF_FFFF_FFFF_FFFF` in JS.

In this implementation, 32-bit integers are always represented as signed JS numbers and 64-bit integers are always represented as unsigned JS bigints. The signed/unsigned choice is arbitrary but must be consistent for the compiled code to work. Signed numbers is used for 32-bit integers because the cast to signed (`x|0`) is shorter than the cast to unsigned (`x>>>0`) and because some JS VMs have certain optimizations that make signed integer arithmetic faster than unsigned integer arithmetic. Unsigned bigints is used for 64-bit integers because cast to unsigned can be done with the `&` operator but cast to signed can't be done with a single operator.

Note that this means signed 32-bit less-than of `a` and `b` is `a < b` but unsigned 32-bit less-than is `(a >>> 0) < (b >>> 0)`. Similarly unsigned 64-bit less-than of `a` and `b` is `a < b` but signed 64-bit less-than is something like `(i64[0] = a, i64[0]) < (i64[0] = b, i64[0])` where `i64` is a `BigInt64Array`.

### AST format

WebAssembly bytecode is decoded into an AST so that it can be optimized before converting it to JavaScript. The compiler only ever generates the AST for a single basic block (i.e. sequence of bytecodes without any jumps). The AST is stored as numbers in an array instead of as JavaScript objects for performance, which can matter a lot when the JavaScript JIT is disabled.

Each AST node takes the following form (given the index `ptr` of a node for which space has already been reserved):

```js
ast[ptr] = opcode | (childCount << 8) | (outputStackSlot << 24)
ast[ptr + 1] = /* child 1 */
ast[ptr + 2] = /* child 2 */
...
ast[ptr + N] = /* child N */
ast[ptr + N + 1] = /* an optional extra payload (e.g. an offset for load/store) */
```

Encoding the child count in the node metadata and putting optional extra data after the children allows the AST to be traversed generically without needing to know the specifics of each node's internal format.

### Optimizations

The AST is optimized using a declarative set of [peephole optimization](https://en.wikipedia.org/wiki/Peephole_optimization) rules before it's converted into JavaScript. These optimizations are tuned for the [Go](https://go.dev/) compiler's WebAssembly output, which does a lot of unnecessary 64-bit math. That's mostly fine when running WebAssembly natively but is pretty expensive when running WebAssembly via JS using BigInts. Avoiding unnecessary BigInts gives a decent performance boost (~50% faster).

For example, WebAssembly bytecode that extends a 32-bit integer out to 64-bit, adds a constant, and then wraps that integer back to 32-bit can be more efficiently represented using a 32-bit add bytecode instead:

```js
// Before optimization
i32_wrap_i64(
  i64_add(
    i64_extend_i32_u(X),
    i64_const(Y)))

// After optimization
i32_add(
  X,
  i32_const(Y))
```
