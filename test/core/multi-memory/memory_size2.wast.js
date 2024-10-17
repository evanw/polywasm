
// memory_size2.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7f\x60\x01\x7f\x00\x03\x85\x80\x80\x80\x00\x04\x00\x01\x00\x01\x05\x8d\x80\x80\x80\x00\x04\x01\x00\x00\x01\x00\x00\x01\x00\x00\x01\x00\x02\x07\x9f\x80\x80\x80\x00\x04\x04\x73\x69\x7a\x65\x00\x00\x04\x67\x72\x6f\x77\x00\x01\x05\x73\x69\x7a\x65\x6e\x00\x02\x05\x67\x72\x6f\x77\x6e\x00\x03\x0a\xab\x80\x80\x80\x00\x04\x84\x80\x80\x80\x00\x00\x3f\x03\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x40\x03\x1a\x0b\x84\x80\x80\x80\x00\x00\x3f\x02\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x40\x02\x1a\x0b");

// memory_size2.wast:14
assert_return(() => call($1, "size", []), 0);

// memory_size2.wast:15
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:16
assert_return(() => call($1, "grow", [3]));

// memory_size2.wast:17
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:18
assert_return(() => call($1, "size", []), 0);

// memory_size2.wast:19
assert_return(() => call($1, "grow", [1]));

// memory_size2.wast:20
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:21
assert_return(() => call($1, "size", []), 1);

// memory_size2.wast:22
assert_return(() => call($1, "grow", [0]));

// memory_size2.wast:23
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:24
assert_return(() => call($1, "size", []), 1);

// memory_size2.wast:25
assert_return(() => call($1, "grow", [4]));

// memory_size2.wast:26
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:27
assert_return(() => call($1, "size", []), 1);

// memory_size2.wast:28
assert_return(() => call($1, "grow", [1]));

// memory_size2.wast:29
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:30
assert_return(() => call($1, "size", []), 2);

// memory_size2.wast:32
assert_return(() => call($1, "grown", [1]));

// memory_size2.wast:33
assert_return(() => call($1, "sizen", []), 0);

// memory_size2.wast:34
assert_return(() => call($1, "size", []), 2);
