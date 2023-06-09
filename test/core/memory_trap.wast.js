
// memory_trap.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x03\x60\x00\x01\x7f\x60\x02\x7f\x7f\x00\x60\x01\x7f\x01\x7f\x03\x85\x80\x80\x80\x00\x04\x00\x01\x02\x02\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x9e\x80\x80\x80\x00\x03\x05\x73\x74\x6f\x72\x65\x00\x01\x04\x6c\x6f\x61\x64\x00\x02\x0b\x6d\x65\x6d\x6f\x72\x79\x2e\x67\x72\x6f\x77\x00\x03\x0a\xba\x80\x80\x80\x00\x04\x89\x80\x80\x80\x00\x00\x3f\x00\x41\x80\x80\x04\x6c\x0b\x8c\x80\x80\x80\x00\x00\x10\x00\x20\x00\x6a\x20\x01\x36\x02\x00\x0b\x8a\x80\x80\x80\x00\x00\x10\x00\x20\x00\x6a\x28\x02\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x40\x00\x0b");

// memory_trap.wast:21
assert_return(() => call($1, "store", [-4, 42]));

// memory_trap.wast:22
assert_return(() => call($1, "load", [-4]), 42);

// memory_trap.wast:23
assert_trap(() => call($1, "store", [-3, 13]));

// memory_trap.wast:24
assert_trap(() => call($1, "load", [-3]));

// memory_trap.wast:25
assert_trap(() => call($1, "store", [-2, 13]));

// memory_trap.wast:26
assert_trap(() => call($1, "load", [-2]));

// memory_trap.wast:27
assert_trap(() => call($1, "store", [-1, 13]));

// memory_trap.wast:28
assert_trap(() => call($1, "load", [-1]));

// memory_trap.wast:29
assert_trap(() => call($1, "store", [0, 13]));

// memory_trap.wast:30
assert_trap(() => call($1, "load", [0]));

// memory_trap.wast:31
assert_trap(() => call($1, "store", [-2_147_483_648, 13]));

// memory_trap.wast:32
assert_trap(() => call($1, "load", [-2_147_483_648]));

// memory_trap.wast:33
assert_return(() => call($1, "memory.grow", [65_537]), -1);

// memory_trap.wast:35
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa9\x80\x80\x80\x00\x08\x60\x01\x7f\x01\x7f\x60\x01\x7f\x01\x7e\x60\x01\x7f\x01\x7d\x60\x01\x7f\x01\x7c\x60\x02\x7f\x7f\x00\x60\x02\x7f\x7e\x00\x60\x02\x7f\x7d\x00\x60\x02\x7f\x7c\x00\x03\x98\x80\x80\x80\x00\x17\x00\x01\x02\x03\x00\x00\x00\x00\x01\x01\x01\x01\x01\x01\x04\x05\x06\x07\x04\x04\x05\x05\x05\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\xb3\x82\x80\x80\x00\x17\x08\x69\x33\x32\x2e\x6c\x6f\x61\x64\x00\x00\x08\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x02\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x03\x0b\x69\x33\x32\x2e\x6c\x6f\x61\x64\x38\x5f\x73\x00\x04\x0b\x69\x33\x32\x2e\x6c\x6f\x61\x64\x38\x5f\x75\x00\x05\x0c\x69\x33\x32\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x73\x00\x06\x0c\x69\x33\x32\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x75\x00\x07\x0b\x69\x36\x34\x2e\x6c\x6f\x61\x64\x38\x5f\x73\x00\x08\x0b\x69\x36\x34\x2e\x6c\x6f\x61\x64\x38\x5f\x75\x00\x09\x0c\x69\x36\x34\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x73\x00\x0a\x0c\x69\x36\x34\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x75\x00\x0b\x0c\x69\x36\x34\x2e\x6c\x6f\x61\x64\x33\x32\x5f\x73\x00\x0c\x0c\x69\x36\x34\x2e\x6c\x6f\x61\x64\x33\x32\x5f\x75\x00\x0d\x09\x69\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x0e\x09\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x0f\x09\x66\x33\x32\x2e\x73\x74\x6f\x72\x65\x00\x10\x09\x66\x36\x34\x2e\x73\x74\x6f\x72\x65\x00\x11\x0a\x69\x33\x32\x2e\x73\x74\x6f\x72\x65\x38\x00\x12\x0b\x69\x33\x32\x2e\x73\x74\x6f\x72\x65\x31\x36\x00\x13\x0a\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x38\x00\x14\x0b\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x31\x36\x00\x15\x0b\x69\x36\x34\x2e\x73\x74\x6f\x72\x65\x33\x32\x00\x16\x0a\xa7\x82\x80\x80\x00\x17\x87\x80\x80\x80\x00\x00\x20\x00\x28\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x29\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2a\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2b\x03\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2c\x00\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2e\x01\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2f\x01\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x30\x00\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x31\x00\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x32\x01\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x33\x01\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x34\x02\x00\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x35\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x37\x03\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x38\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x39\x03\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x3a\x00\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x3b\x01\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x3c\x00\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x3d\x01\x00\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x3e\x02\x00\x0b\x0b\x9d\x80\x80\x80\x00\x02\x00\x41\x00\x0b\x08\x61\x62\x63\x64\x65\x66\x67\x68\x00\x41\xf8\xff\x03\x0b\x08\x61\x62\x63\x64\x65\x66\x67\x68");

// memory_trap.wast:111
assert_trap(() => call($2, "i32.store", [65_536, 0]));

// memory_trap.wast:112
assert_trap(() => call($2, "i32.store", [65_535, 0]));

// memory_trap.wast:113
assert_trap(() => call($2, "i32.store", [65_534, 0]));

// memory_trap.wast:114
assert_trap(() => call($2, "i32.store", [65_533, 0]));

// memory_trap.wast:115
assert_trap(() => call($2, "i32.store", [-1, 0]));

// memory_trap.wast:116
assert_trap(() => call($2, "i32.store", [-2, 0]));

// memory_trap.wast:117
assert_trap(() => call($2, "i32.store", [-3, 0]));

// memory_trap.wast:118
assert_trap(() => call($2, "i32.store", [-4, 0]));

// memory_trap.wast:119
assert_trap(() => call($2, "i64.store", [65_536, 0n]));

// memory_trap.wast:120
assert_trap(() => call($2, "i64.store", [65_535, 0n]));

// memory_trap.wast:121
assert_trap(() => call($2, "i64.store", [65_534, 0n]));

// memory_trap.wast:122
assert_trap(() => call($2, "i64.store", [65_533, 0n]));

// memory_trap.wast:123
assert_trap(() => call($2, "i64.store", [65_532, 0n]));

// memory_trap.wast:124
assert_trap(() => call($2, "i64.store", [65_531, 0n]));

// memory_trap.wast:125
assert_trap(() => call($2, "i64.store", [65_530, 0n]));

// memory_trap.wast:126
assert_trap(() => call($2, "i64.store", [65_529, 0n]));

// memory_trap.wast:127
assert_trap(() => call($2, "i64.store", [-1, 0n]));

// memory_trap.wast:128
assert_trap(() => call($2, "i64.store", [-2, 0n]));

// memory_trap.wast:129
assert_trap(() => call($2, "i64.store", [-3, 0n]));

// memory_trap.wast:130
assert_trap(() => call($2, "i64.store", [-4, 0n]));

// memory_trap.wast:131
assert_trap(() => call($2, "i64.store", [-5, 0n]));

// memory_trap.wast:132
assert_trap(() => call($2, "i64.store", [-6, 0n]));

// memory_trap.wast:133
assert_trap(() => call($2, "i64.store", [-7, 0n]));

// memory_trap.wast:134
assert_trap(() => call($2, "i64.store", [-8, 0n]));

// memory_trap.wast:135
assert_trap(() => call($2, "f32.store", [65_536, float32(0)]));

// memory_trap.wast:136
assert_trap(() => call($2, "f32.store", [65_535, float32(0)]));

// memory_trap.wast:137
assert_trap(() => call($2, "f32.store", [65_534, float32(0)]));

// memory_trap.wast:138
assert_trap(() => call($2, "f32.store", [65_533, float32(0)]));

// memory_trap.wast:139
assert_trap(() => call($2, "f32.store", [-1, float32(0)]));

// memory_trap.wast:140
assert_trap(() => call($2, "f32.store", [-2, float32(0)]));

// memory_trap.wast:141
assert_trap(() => call($2, "f32.store", [-3, float32(0)]));

// memory_trap.wast:142
assert_trap(() => call($2, "f32.store", [-4, float32(0)]));

// memory_trap.wast:143
assert_trap(() => call($2, "f64.store", [65_536, float64(0n)]));

// memory_trap.wast:144
assert_trap(() => call($2, "f64.store", [65_535, float64(0n)]));

// memory_trap.wast:145
assert_trap(() => call($2, "f64.store", [65_534, float64(0n)]));

// memory_trap.wast:146
assert_trap(() => call($2, "f64.store", [65_533, float64(0n)]));

// memory_trap.wast:147
assert_trap(() => call($2, "f64.store", [65_532, float64(0n)]));

// memory_trap.wast:148
assert_trap(() => call($2, "f64.store", [65_531, float64(0n)]));

// memory_trap.wast:149
assert_trap(() => call($2, "f64.store", [65_530, float64(0n)]));

// memory_trap.wast:150
assert_trap(() => call($2, "f64.store", [65_529, float64(0n)]));

// memory_trap.wast:151
assert_trap(() => call($2, "f64.store", [-1, float64(0n)]));

// memory_trap.wast:152
assert_trap(() => call($2, "f64.store", [-2, float64(0n)]));

// memory_trap.wast:153
assert_trap(() => call($2, "f64.store", [-3, float64(0n)]));

// memory_trap.wast:154
assert_trap(() => call($2, "f64.store", [-4, float64(0n)]));

// memory_trap.wast:155
assert_trap(() => call($2, "f64.store", [-5, float64(0n)]));

// memory_trap.wast:156
assert_trap(() => call($2, "f64.store", [-6, float64(0n)]));

// memory_trap.wast:157
assert_trap(() => call($2, "f64.store", [-7, float64(0n)]));

// memory_trap.wast:158
assert_trap(() => call($2, "f64.store", [-8, float64(0n)]));

// memory_trap.wast:159
assert_trap(() => call($2, "i32.store8", [65_536, 0]));

// memory_trap.wast:160
assert_trap(() => call($2, "i32.store8", [-1, 0]));

// memory_trap.wast:161
assert_trap(() => call($2, "i32.store16", [65_536, 0]));

// memory_trap.wast:162
assert_trap(() => call($2, "i32.store16", [65_535, 0]));

// memory_trap.wast:163
assert_trap(() => call($2, "i32.store16", [-1, 0]));

// memory_trap.wast:164
assert_trap(() => call($2, "i32.store16", [-2, 0]));

// memory_trap.wast:165
assert_trap(() => call($2, "i64.store8", [65_536, 0n]));

// memory_trap.wast:166
assert_trap(() => call($2, "i64.store8", [-1, 0n]));

// memory_trap.wast:167
assert_trap(() => call($2, "i64.store16", [65_536, 0n]));

// memory_trap.wast:168
assert_trap(() => call($2, "i64.store16", [65_535, 0n]));

// memory_trap.wast:169
assert_trap(() => call($2, "i64.store16", [-1, 0n]));

// memory_trap.wast:170
assert_trap(() => call($2, "i64.store16", [-2, 0n]));

// memory_trap.wast:171
assert_trap(() => call($2, "i64.store32", [65_536, 0n]));

// memory_trap.wast:172
assert_trap(() => call($2, "i64.store32", [65_535, 0n]));

// memory_trap.wast:173
assert_trap(() => call($2, "i64.store32", [65_534, 0n]));

// memory_trap.wast:174
assert_trap(() => call($2, "i64.store32", [65_533, 0n]));

// memory_trap.wast:175
assert_trap(() => call($2, "i64.store32", [-1, 0n]));

// memory_trap.wast:176
assert_trap(() => call($2, "i64.store32", [-2, 0n]));

// memory_trap.wast:177
assert_trap(() => call($2, "i64.store32", [-3, 0n]));

// memory_trap.wast:178
assert_trap(() => call($2, "i64.store32", [-4, 0n]));

// memory_trap.wast:179
assert_trap(() => call($2, "i32.load", [65_536]));

// memory_trap.wast:180
assert_trap(() => call($2, "i32.load", [65_535]));

// memory_trap.wast:181
assert_trap(() => call($2, "i32.load", [65_534]));

// memory_trap.wast:182
assert_trap(() => call($2, "i32.load", [65_533]));

// memory_trap.wast:183
assert_trap(() => call($2, "i32.load", [-1]));

// memory_trap.wast:184
assert_trap(() => call($2, "i32.load", [-2]));

// memory_trap.wast:185
assert_trap(() => call($2, "i32.load", [-3]));

// memory_trap.wast:186
assert_trap(() => call($2, "i32.load", [-4]));

// memory_trap.wast:187
assert_trap(() => call($2, "i64.load", [65_536]));

// memory_trap.wast:188
assert_trap(() => call($2, "i64.load", [65_535]));

// memory_trap.wast:189
assert_trap(() => call($2, "i64.load", [65_534]));

// memory_trap.wast:190
assert_trap(() => call($2, "i64.load", [65_533]));

// memory_trap.wast:191
assert_trap(() => call($2, "i64.load", [65_532]));

// memory_trap.wast:192
assert_trap(() => call($2, "i64.load", [65_531]));

// memory_trap.wast:193
assert_trap(() => call($2, "i64.load", [65_530]));

// memory_trap.wast:194
assert_trap(() => call($2, "i64.load", [65_529]));

// memory_trap.wast:195
assert_trap(() => call($2, "i64.load", [-1]));

// memory_trap.wast:196
assert_trap(() => call($2, "i64.load", [-2]));

// memory_trap.wast:197
assert_trap(() => call($2, "i64.load", [-3]));

// memory_trap.wast:198
assert_trap(() => call($2, "i64.load", [-4]));

// memory_trap.wast:199
assert_trap(() => call($2, "i64.load", [-5]));

// memory_trap.wast:200
assert_trap(() => call($2, "i64.load", [-6]));

// memory_trap.wast:201
assert_trap(() => call($2, "i64.load", [-7]));

// memory_trap.wast:202
assert_trap(() => call($2, "i64.load", [-8]));

// memory_trap.wast:203
assert_trap(() => call($2, "f32.load", [65_536]));

// memory_trap.wast:204
assert_trap(() => call($2, "f32.load", [65_535]));

// memory_trap.wast:205
assert_trap(() => call($2, "f32.load", [65_534]));

// memory_trap.wast:206
assert_trap(() => call($2, "f32.load", [65_533]));

// memory_trap.wast:207
assert_trap(() => call($2, "f32.load", [-1]));

// memory_trap.wast:208
assert_trap(() => call($2, "f32.load", [-2]));

// memory_trap.wast:209
assert_trap(() => call($2, "f32.load", [-3]));

// memory_trap.wast:210
assert_trap(() => call($2, "f32.load", [-4]));

// memory_trap.wast:211
assert_trap(() => call($2, "f64.load", [65_536]));

// memory_trap.wast:212
assert_trap(() => call($2, "f64.load", [65_535]));

// memory_trap.wast:213
assert_trap(() => call($2, "f64.load", [65_534]));

// memory_trap.wast:214
assert_trap(() => call($2, "f64.load", [65_533]));

// memory_trap.wast:215
assert_trap(() => call($2, "f64.load", [65_532]));

// memory_trap.wast:216
assert_trap(() => call($2, "f64.load", [65_531]));

// memory_trap.wast:217
assert_trap(() => call($2, "f64.load", [65_530]));

// memory_trap.wast:218
assert_trap(() => call($2, "f64.load", [65_529]));

// memory_trap.wast:219
assert_trap(() => call($2, "f64.load", [-1]));

// memory_trap.wast:220
assert_trap(() => call($2, "f64.load", [-2]));

// memory_trap.wast:221
assert_trap(() => call($2, "f64.load", [-3]));

// memory_trap.wast:222
assert_trap(() => call($2, "f64.load", [-4]));

// memory_trap.wast:223
assert_trap(() => call($2, "f64.load", [-5]));

// memory_trap.wast:224
assert_trap(() => call($2, "f64.load", [-6]));

// memory_trap.wast:225
assert_trap(() => call($2, "f64.load", [-7]));

// memory_trap.wast:226
assert_trap(() => call($2, "f64.load", [-8]));

// memory_trap.wast:227
assert_trap(() => call($2, "i32.load8_s", [65_536]));

// memory_trap.wast:228
assert_trap(() => call($2, "i32.load8_s", [-1]));

// memory_trap.wast:229
assert_trap(() => call($2, "i32.load8_u", [65_536]));

// memory_trap.wast:230
assert_trap(() => call($2, "i32.load8_u", [-1]));

// memory_trap.wast:231
assert_trap(() => call($2, "i32.load16_s", [65_536]));

// memory_trap.wast:232
assert_trap(() => call($2, "i32.load16_s", [65_535]));

// memory_trap.wast:233
assert_trap(() => call($2, "i32.load16_s", [-1]));

// memory_trap.wast:234
assert_trap(() => call($2, "i32.load16_s", [-2]));

// memory_trap.wast:235
assert_trap(() => call($2, "i32.load16_u", [65_536]));

// memory_trap.wast:236
assert_trap(() => call($2, "i32.load16_u", [65_535]));

// memory_trap.wast:237
assert_trap(() => call($2, "i32.load16_u", [-1]));

// memory_trap.wast:238
assert_trap(() => call($2, "i32.load16_u", [-2]));

// memory_trap.wast:239
assert_trap(() => call($2, "i64.load8_s", [65_536]));

// memory_trap.wast:240
assert_trap(() => call($2, "i64.load8_s", [-1]));

// memory_trap.wast:241
assert_trap(() => call($2, "i64.load8_u", [65_536]));

// memory_trap.wast:242
assert_trap(() => call($2, "i64.load8_u", [-1]));

// memory_trap.wast:243
assert_trap(() => call($2, "i64.load16_s", [65_536]));

// memory_trap.wast:244
assert_trap(() => call($2, "i64.load16_s", [65_535]));

// memory_trap.wast:245
assert_trap(() => call($2, "i64.load16_s", [-1]));

// memory_trap.wast:246
assert_trap(() => call($2, "i64.load16_s", [-2]));

// memory_trap.wast:247
assert_trap(() => call($2, "i64.load16_u", [65_536]));

// memory_trap.wast:248
assert_trap(() => call($2, "i64.load16_u", [65_535]));

// memory_trap.wast:249
assert_trap(() => call($2, "i64.load16_u", [-1]));

// memory_trap.wast:250
assert_trap(() => call($2, "i64.load16_u", [-2]));

// memory_trap.wast:251
assert_trap(() => call($2, "i64.load32_s", [65_536]));

// memory_trap.wast:252
assert_trap(() => call($2, "i64.load32_s", [65_535]));

// memory_trap.wast:253
assert_trap(() => call($2, "i64.load32_s", [65_534]));

// memory_trap.wast:254
assert_trap(() => call($2, "i64.load32_s", [65_533]));

// memory_trap.wast:255
assert_trap(() => call($2, "i64.load32_s", [-1]));

// memory_trap.wast:256
assert_trap(() => call($2, "i64.load32_s", [-2]));

// memory_trap.wast:257
assert_trap(() => call($2, "i64.load32_s", [-3]));

// memory_trap.wast:258
assert_trap(() => call($2, "i64.load32_s", [-4]));

// memory_trap.wast:259
assert_trap(() => call($2, "i64.load32_u", [65_536]));

// memory_trap.wast:260
assert_trap(() => call($2, "i64.load32_u", [65_535]));

// memory_trap.wast:261
assert_trap(() => call($2, "i64.load32_u", [65_534]));

// memory_trap.wast:262
assert_trap(() => call($2, "i64.load32_u", [65_533]));

// memory_trap.wast:263
assert_trap(() => call($2, "i64.load32_u", [-1]));

// memory_trap.wast:264
assert_trap(() => call($2, "i64.load32_u", [-2]));

// memory_trap.wast:265
assert_trap(() => call($2, "i64.load32_u", [-3]));

// memory_trap.wast:266
assert_trap(() => call($2, "i64.load32_u", [-4]));

// memory_trap.wast:269
assert_return(() => call($2, "i64.load", [65_528]), 7_523_094_288_207_667_809n);

// memory_trap.wast:270
assert_return(() => call($2, "i64.load", [0]), 7_523_094_288_207_667_809n);
