
// endianness.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa4\x80\x80\x80\x00\x07\x60\x02\x7f\x7f\x00\x60\x02\x7f\x7e\x00\x60\x01\x7f\x01\x7f\x60\x01\x7f\x01\x7e\x60\x01\x7e\x01\x7e\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x98\x80\x80\x80\x00\x17\x00\x00\x01\x02\x02\x03\x02\x02\x02\x04\x04\x04\x04\x04\x05\x06\x02\x02\x04\x04\x04\x05\x06\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\xe1\x81\x80\x80\x00\x11\x0c\x69\x33\x32\x5f\x6c\x6f\x61\x64\x31\x36\x5f\x73\x00\x06\x0c\x69\x33\x32\x5f\x6c\x6f\x61\x64\x31\x36\x5f\x75\x00\x07\x08\x69\x33\x32\x5f\x6c\x6f\x61\x64\x00\x08\x0c\x69\x36\x34\x5f\x6c\x6f\x61\x64\x31\x36\x5f\x73\x00\x09\x0c\x69\x36\x34\x5f\x6c\x6f\x61\x64\x31\x36\x5f\x75\x00\x0a\x0c\x69\x36\x34\x5f\x6c\x6f\x61\x64\x33\x32\x5f\x73\x00\x0b\x0c\x69\x36\x34\x5f\x6c\x6f\x61\x64\x33\x32\x5f\x75\x00\x0c\x08\x69\x36\x34\x5f\x6c\x6f\x61\x64\x00\x0d\x08\x66\x33\x32\x5f\x6c\x6f\x61\x64\x00\x0e\x08\x66\x36\x34\x5f\x6c\x6f\x61\x64\x00\x0f\x0b\x69\x33\x32\x5f\x73\x74\x6f\x72\x65\x31\x36\x00\x10\x09\x69\x33\x32\x5f\x73\x74\x6f\x72\x65\x00\x11\x0b\x69\x36\x34\x5f\x73\x74\x6f\x72\x65\x31\x36\x00\x12\x0b\x69\x36\x34\x5f\x73\x74\x6f\x72\x65\x33\x32\x00\x13\x09\x69\x36\x34\x5f\x73\x74\x6f\x72\x65\x00\x14\x09\x66\x33\x32\x5f\x73\x74\x6f\x72\x65\x00\x15\x09\x66\x36\x34\x5f\x73\x74\x6f\x72\x65\x00\x16\x0a\xd2\x83\x80\x80\x00\x17\x96\x80\x80\x80\x00\x00\x20\x00\x20\x01\x3a\x00\x00\x20\x00\x41\x01\x6a\x20\x01\x41\x08\x76\x3a\x00\x00\x0b\x94\x80\x80\x80\x00\x00\x20\x00\x20\x01\x10\x00\x20\x00\x41\x02\x6a\x20\x01\x41\x10\x76\x10\x00\x0b\x96\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa7\x10\x01\x20\x00\x41\x04\x6a\x20\x01\x42\x20\x88\xa7\x10\x01\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x20\x00\x41\x01\x6a\x2d\x00\x00\x41\x08\x74\x72\x0b\x91\x80\x80\x80\x00\x00\x20\x00\x10\x03\x20\x00\x41\x02\x6a\x10\x03\x41\x10\x74\x72\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x10\x04\xad\x20\x00\x41\x04\x6a\x10\x04\xad\x42\x20\x86\x84\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x10\x00\x41\x00\x2e\x01\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x10\x00\x41\x00\x2f\x01\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x10\x01\x41\x00\x28\x02\x00\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\xa7\x10\x00\x41\x00\x32\x01\x00\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\xa7\x10\x00\x41\x00\x33\x01\x00\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\xa7\x10\x01\x41\x00\x34\x02\x00\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\xa7\x10\x01\x41\x00\x35\x02\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x10\x02\x41\x00\x29\x03\x00\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\xbc\x10\x01\x41\x00\x2a\x02\x00\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\xbd\x10\x02\x41\x00\x2b\x03\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x3b\x01\x00\x41\x00\x10\x03\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x36\x02\x00\x41\x00\x10\x04\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\x3d\x01\x00\x41\x00\x10\x03\xad\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\x3e\x02\x00\x41\x00\x10\x04\xad\x0b\x8d\x80\x80\x80\x00\x00\x41\x00\x20\x00\x37\x03\x00\x41\x00\x10\x05\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\x38\x02\x00\x41\x00\x10\x04\xbe\x0b\x8e\x80\x80\x80\x00\x00\x41\x00\x20\x00\x39\x03\x00\x41\x00\x10\x05\xbf\x0b");

// endianness.wast:133
assert_return(() => call($1, "i32_load16_s", [-1]), -1);

// endianness.wast:134
assert_return(() => call($1, "i32_load16_s", [-4_242]), -4_242);

// endianness.wast:135
assert_return(() => call($1, "i32_load16_s", [42]), 42);

// endianness.wast:136
assert_return(() => call($1, "i32_load16_s", [12_816]), 12_816);

// endianness.wast:138
assert_return(() => call($1, "i32_load16_u", [-1]), 65_535);

// endianness.wast:139
assert_return(() => call($1, "i32_load16_u", [-4_242]), 61_294);

// endianness.wast:140
assert_return(() => call($1, "i32_load16_u", [42]), 42);

// endianness.wast:141
assert_return(() => call($1, "i32_load16_u", [51_966]), 51_966);

// endianness.wast:143
assert_return(() => call($1, "i32_load", [-1]), -1);

// endianness.wast:144
assert_return(() => call($1, "i32_load", [-42_424_242]), -42_424_242);

// endianness.wast:145
assert_return(() => call($1, "i32_load", [42_424_242]), 42_424_242);

// endianness.wast:146
assert_return(() => call($1, "i32_load", [-1_414_717_974]), -1_414_717_974);

// endianness.wast:148
assert_return(() => call($1, "i64_load16_s", [-1n]), -1n);

// endianness.wast:149
assert_return(() => call($1, "i64_load16_s", [-4_242n]), -4_242n);

// endianness.wast:150
assert_return(() => call($1, "i64_load16_s", [42n]), 42n);

// endianness.wast:151
assert_return(() => call($1, "i64_load16_s", [12_816n]), 12_816n);

// endianness.wast:153
assert_return(() => call($1, "i64_load16_u", [-1n]), 65_535n);

// endianness.wast:154
assert_return(() => call($1, "i64_load16_u", [-4_242n]), 61_294n);

// endianness.wast:155
assert_return(() => call($1, "i64_load16_u", [42n]), 42n);

// endianness.wast:156
assert_return(() => call($1, "i64_load16_u", [51_966n]), 51_966n);

// endianness.wast:158
assert_return(() => call($1, "i64_load32_s", [-1n]), -1n);

// endianness.wast:159
assert_return(() => call($1, "i64_load32_s", [-42_424_242n]), -42_424_242n);

// endianness.wast:160
assert_return(() => call($1, "i64_load32_s", [42_424_242n]), 42_424_242n);

// endianness.wast:161
assert_return(() => call($1, "i64_load32_s", [305_419_896n]), 305_419_896n);

// endianness.wast:163
assert_return(() => call($1, "i64_load32_u", [-1n]), 4_294_967_295n);

// endianness.wast:164
assert_return(() => call($1, "i64_load32_u", [-42_424_242n]), 4_252_543_054n);

// endianness.wast:165
assert_return(() => call($1, "i64_load32_u", [42_424_242n]), 42_424_242n);

// endianness.wast:166
assert_return(() => call($1, "i64_load32_u", [2_880_249_322n]), 2_880_249_322n);

// endianness.wast:168
assert_return(() => call($1, "i64_load", [-1n]), -1n);

// endianness.wast:169
assert_return(() => call($1, "i64_load", [-42_424_242n]), -42_424_242n);

// endianness.wast:170
assert_return(() => call($1, "i64_load", [2_880_249_322n]), 2_880_249_322n);

// endianness.wast:171
assert_return(() => call($1, "i64_load", [-6_075_977_126_246_539_798n]), -6_075_977_126_246_539_798n);

// endianness.wast:173
assert_return(() => call($1, "f32_load", [float32(-1_082_130_432)]), float32(-1_082_130_432));

// endianness.wast:174
assert_return(() => call($1, "f32_load", [float32(1_011_494_326)]), float32(1_011_494_326));

// endianness.wast:175
assert_return(() => call($1, "f32_load", [float32(1_166_316_389)]), float32(1_166_316_389));

// endianness.wast:176
assert_return(() => call($1, "f32_load", [float32(2_139_095_039)]), float32(2_139_095_039));

// endianness.wast:178
assert_return(() => call($1, "f64_load", [float64(-4_616_189_618_054_758_400n)]), float64(-4_616_189_618_054_758_400n));

// endianness.wast:179
assert_return(() => call($1, "f64_load", [float64(4_653_144_502_447_687_399n)]), float64(4_653_144_502_447_687_399n));

// endianness.wast:180
assert_return(() => call($1, "f64_load", [float64(4_691_032_041_816_096_430n)]), float64(4_691_032_041_816_096_430n));

// endianness.wast:181
assert_return(() => call($1, "f64_load", [float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_311n));

// endianness.wast:184
assert_return(() => call($1, "i32_store16", [-1]), 65_535);

// endianness.wast:185
assert_return(() => call($1, "i32_store16", [-4_242]), 61_294);

// endianness.wast:186
assert_return(() => call($1, "i32_store16", [42]), 42);

// endianness.wast:187
assert_return(() => call($1, "i32_store16", [51_966]), 51_966);

// endianness.wast:189
assert_return(() => call($1, "i32_store", [-1]), -1);

// endianness.wast:190
assert_return(() => call($1, "i32_store", [-4_242]), -4_242);

// endianness.wast:191
assert_return(() => call($1, "i32_store", [42_424_242]), 42_424_242);

// endianness.wast:192
assert_return(() => call($1, "i32_store", [-559_035_650]), -559_035_650);

// endianness.wast:194
assert_return(() => call($1, "i64_store16", [-1n]), 65_535n);

// endianness.wast:195
assert_return(() => call($1, "i64_store16", [-4_242n]), 61_294n);

// endianness.wast:196
assert_return(() => call($1, "i64_store16", [42n]), 42n);

// endianness.wast:197
assert_return(() => call($1, "i64_store16", [51_966n]), 51_966n);

// endianness.wast:199
assert_return(() => call($1, "i64_store32", [-1n]), 4_294_967_295n);

// endianness.wast:200
assert_return(() => call($1, "i64_store32", [-4_242n]), 4_294_963_054n);

// endianness.wast:201
assert_return(() => call($1, "i64_store32", [42_424_242n]), 42_424_242n);

// endianness.wast:202
assert_return(() => call($1, "i64_store32", [3_735_931_646n]), 3_735_931_646n);

// endianness.wast:204
assert_return(() => call($1, "i64_store", [-1n]), -1n);

// endianness.wast:205
assert_return(() => call($1, "i64_store", [-42_424_242n]), -42_424_242n);

// endianness.wast:206
assert_return(() => call($1, "i64_store", [2_880_249_322n]), 2_880_249_322n);

// endianness.wast:207
assert_return(() => call($1, "i64_store", [-6_075_977_126_246_539_798n]), -6_075_977_126_246_539_798n);

// endianness.wast:209
assert_return(() => call($1, "f32_store", [float32(-1_082_130_432)]), float32(-1_082_130_432));

// endianness.wast:210
assert_return(() => call($1, "f32_store", [float32(1_011_494_326)]), float32(1_011_494_326));

// endianness.wast:211
assert_return(() => call($1, "f32_store", [float32(1_166_316_389)]), float32(1_166_316_389));

// endianness.wast:212
assert_return(() => call($1, "f32_store", [float32(2_139_095_039)]), float32(2_139_095_039));

// endianness.wast:214
assert_return(() => call($1, "f64_store", [float64(-4_616_189_618_054_758_400n)]), float64(-4_616_189_618_054_758_400n));

// endianness.wast:215
assert_return(() => call($1, "f64_store", [float64(4_653_144_502_447_687_399n)]), float64(4_653_144_502_447_687_399n));

// endianness.wast:216
assert_return(() => call($1, "f64_store", [float64(4_691_032_041_816_096_430n)]), float64(4_691_032_041_816_096_430n));

// endianness.wast:217
assert_return(() => call($1, "f64_store", [float64(9_218_868_437_227_405_311n)]), float64(9_218_868_437_227_405_311n));
