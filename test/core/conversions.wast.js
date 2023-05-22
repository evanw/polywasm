
// conversions.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xbd\x80\x80\x80\x00\x0c\x60\x01\x7f\x01\x7e\x60\x01\x7e\x01\x7f\x60\x01\x7d\x01\x7f\x60\x01\x7c\x01\x7f\x60\x01\x7d\x01\x7e\x60\x01\x7c\x01\x7e\x60\x01\x7f\x01\x7d\x60\x01\x7e\x01\x7d\x60\x01\x7f\x01\x7c\x60\x01\x7e\x01\x7c\x60\x01\x7d\x01\x7c\x60\x01\x7c\x01\x7d\x03\xa2\x80\x80\x80\x00\x21\x00\x00\x01\x02\x02\x03\x03\x04\x04\x05\x05\x02\x02\x03\x03\x04\x04\x05\x05\x06\x07\x08\x09\x06\x07\x08\x09\x0a\x0b\x06\x09\x02\x05\x07\x91\x85\x80\x80\x00\x21\x10\x69\x36\x34\x2e\x65\x78\x74\x65\x6e\x64\x5f\x69\x33\x32\x5f\x73\x00\x00\x10\x69\x36\x34\x2e\x65\x78\x74\x65\x6e\x64\x5f\x69\x33\x32\x5f\x75\x00\x01\x0c\x69\x33\x32\x2e\x77\x72\x61\x70\x5f\x69\x36\x34\x00\x02\x0f\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x73\x00\x03\x0f\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x75\x00\x04\x0f\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x73\x00\x05\x0f\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x75\x00\x06\x0f\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x73\x00\x07\x0f\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x75\x00\x08\x0f\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x73\x00\x09\x0f\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x75\x00\x0a\x13\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x33\x32\x5f\x73\x00\x0b\x13\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x33\x32\x5f\x75\x00\x0c\x13\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x36\x34\x5f\x73\x00\x0d\x13\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x36\x34\x5f\x75\x00\x0e\x13\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x33\x32\x5f\x73\x00\x0f\x13\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x33\x32\x5f\x75\x00\x10\x13\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x36\x34\x5f\x73\x00\x11\x13\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x73\x61\x74\x5f\x66\x36\x34\x5f\x75\x00\x12\x11\x66\x33\x32\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x33\x32\x5f\x73\x00\x13\x11\x66\x33\x32\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x36\x34\x5f\x73\x00\x14\x11\x66\x36\x34\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x33\x32\x5f\x73\x00\x15\x11\x66\x36\x34\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x36\x34\x5f\x73\x00\x16\x11\x66\x33\x32\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x33\x32\x5f\x75\x00\x17\x11\x66\x33\x32\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x36\x34\x5f\x75\x00\x18\x11\x66\x36\x34\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x33\x32\x5f\x75\x00\x19\x11\x66\x36\x34\x2e\x63\x6f\x6e\x76\x65\x72\x74\x5f\x69\x36\x34\x5f\x75\x00\x1a\x0f\x66\x36\x34\x2e\x70\x72\x6f\x6d\x6f\x74\x65\x5f\x66\x33\x32\x00\x1b\x0e\x66\x33\x32\x2e\x64\x65\x6d\x6f\x74\x65\x5f\x66\x36\x34\x00\x1c\x13\x66\x33\x32\x2e\x72\x65\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x5f\x69\x33\x32\x00\x1d\x13\x66\x36\x34\x2e\x72\x65\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x5f\x69\x36\x34\x00\x1e\x13\x69\x33\x32\x2e\x72\x65\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x5f\x66\x33\x32\x00\x1f\x13\x69\x36\x34\x2e\x72\x65\x69\x6e\x74\x65\x72\x70\x72\x65\x74\x5f\x66\x36\x34\x00\x20\x0a\xd3\x82\x80\x80\x00\x21\x85\x80\x80\x80\x00\x00\x20\x00\xac\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xad\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xa7\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xa8\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xa9\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xaa\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xab\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xae\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xaf\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb0\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb1\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x01\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x02\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x03\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x04\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x05\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x06\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xfc\x07\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb2\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb4\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb7\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb9\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb3\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb5\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb8\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xba\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xbb\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xb6\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xbe\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xbf\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xbc\x0b\x85\x80\x80\x80\x00\x00\x20\x00\xbd\x0b");

// conversions.wast:37
assert_return(() => call($1, "i64.extend_i32_s", [0]), 0n);

// conversions.wast:38
assert_return(() => call($1, "i64.extend_i32_s", [10_000]), 10_000n);

// conversions.wast:39
assert_return(() => call($1, "i64.extend_i32_s", [-10_000]), -10_000n);

// conversions.wast:40
assert_return(() => call($1, "i64.extend_i32_s", [-1]), -1n);

// conversions.wast:41
assert_return(() => call($1, "i64.extend_i32_s", [2_147_483_647]), 2_147_483_647n);

// conversions.wast:42
assert_return(() => call($1, "i64.extend_i32_s", [-2_147_483_648]), -2_147_483_648n);

// conversions.wast:44
assert_return(() => call($1, "i64.extend_i32_u", [0]), 0n);

// conversions.wast:45
assert_return(() => call($1, "i64.extend_i32_u", [10_000]), 10_000n);

// conversions.wast:46
assert_return(() => call($1, "i64.extend_i32_u", [-10_000]), 4_294_957_296n);

// conversions.wast:47
assert_return(() => call($1, "i64.extend_i32_u", [-1]), 4_294_967_295n);

// conversions.wast:48
assert_return(() => call($1, "i64.extend_i32_u", [2_147_483_647]), 2_147_483_647n);

// conversions.wast:49
assert_return(() => call($1, "i64.extend_i32_u", [-2_147_483_648]), 2_147_483_648n);

// conversions.wast:51
assert_return(() => call($1, "i32.wrap_i64", [-1n]), -1);

// conversions.wast:52
assert_return(() => call($1, "i32.wrap_i64", [-100_000n]), -100_000);

// conversions.wast:53
assert_return(() => call($1, "i32.wrap_i64", [2_147_483_648n]), -2_147_483_648);

// conversions.wast:54
assert_return(() => call($1, "i32.wrap_i64", [-2_147_483_649n]), 2_147_483_647);

// conversions.wast:55
assert_return(() => call($1, "i32.wrap_i64", [-4_294_967_296n]), 0);

// conversions.wast:56
assert_return(() => call($1, "i32.wrap_i64", [-4_294_967_297n]), -1);

// conversions.wast:57
assert_return(() => call($1, "i32.wrap_i64", [-4_294_967_295n]), 1);

// conversions.wast:58
assert_return(() => call($1, "i32.wrap_i64", [0n]), 0);

// conversions.wast:59
assert_return(() => call($1, "i32.wrap_i64", [1_311_768_467_463_790_320n]), -1_698_898_192);

// conversions.wast:60
assert_return(() => call($1, "i32.wrap_i64", [4_294_967_295n]), -1);

// conversions.wast:61
assert_return(() => call($1, "i32.wrap_i64", [4_294_967_296n]), 0);

// conversions.wast:62
assert_return(() => call($1, "i32.wrap_i64", [4_294_967_297n]), 1);

// conversions.wast:64
assert_return(() => call($1, "i32.trunc_f32_s", [float32(0)]), 0);

// conversions.wast:65
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-2_147_483_648)]), 0);

// conversions.wast:66
assert_return(() => call($1, "i32.trunc_f32_s", [float32(1)]), 0);

// conversions.wast:67
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-2_147_483_647)]), 0);

// conversions.wast:68
assert_return(() => call($1, "i32.trunc_f32_s", [float32(1_065_353_216)]), 1);

// conversions.wast:69
assert_return(() => call($1, "i32.trunc_f32_s", [float32(1_066_192_077)]), 1);

// conversions.wast:70
assert_return(() => call($1, "i32.trunc_f32_s", [float32(1_069_547_520)]), 1);

// conversions.wast:71
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-1_082_130_432)]), -1);

// conversions.wast:72
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-1_081_291_571)]), -1);

// conversions.wast:73
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-1_077_936_128)]), -1);

// conversions.wast:74
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-1_074_580_685)]), -1);

// conversions.wast:75
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-1_073_741_824)]), -2);

// conversions.wast:76
assert_return(() => call($1, "i32.trunc_f32_s", [float32(1_325_400_063)]), 2_147_483_520);

// conversions.wast:77
assert_return(() => call($1, "i32.trunc_f32_s", [float32(-822_083_584)]), -2_147_483_648);

// conversions.wast:78
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(1_325_400_064)]));

// conversions.wast:79
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(-822_083_583)]));

// conversions.wast:80
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(2_139_095_040)]));

// conversions.wast:81
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(-8_388_608)]));

// conversions.wast:82
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(2_143_289_344)]));

// conversions.wast:83
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(2_141_192_192)]));

// conversions.wast:84
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(-4_194_304)]));

// conversions.wast:85
assert_trap(() => call($1, "i32.trunc_f32_s", [float32(-6_291_456)]));

// conversions.wast:87
assert_return(() => call($1, "i32.trunc_f32_u", [float32(0)]), 0);

// conversions.wast:88
assert_return(() => call($1, "i32.trunc_f32_u", [float32(-2_147_483_648)]), 0);

// conversions.wast:89
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1)]), 0);

// conversions.wast:90
assert_return(() => call($1, "i32.trunc_f32_u", [float32(-2_147_483_647)]), 0);

// conversions.wast:91
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_065_353_216)]), 1);

// conversions.wast:92
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_066_192_077)]), 1);

// conversions.wast:93
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_069_547_520)]), 1);

// conversions.wast:94
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_072_902_963)]), 1);

// conversions.wast:95
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_073_741_824)]), 2);

// conversions.wast:96
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_325_400_064)]), -2_147_483_648);

// conversions.wast:97
assert_return(() => call($1, "i32.trunc_f32_u", [float32(1_333_788_671)]), -256);

// conversions.wast:98
assert_return(() => call($1, "i32.trunc_f32_u", [float32(-1_083_808_154)]), 0);

// conversions.wast:99
assert_return(() => call($1, "i32.trunc_f32_u", [float32(-1_082_130_433)]), 0);

// conversions.wast:100
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(1_333_788_672)]));

// conversions.wast:101
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(-1_082_130_432)]));

// conversions.wast:102
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(2_139_095_040)]));

// conversions.wast:103
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(-8_388_608)]));

// conversions.wast:104
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(2_143_289_344)]));

// conversions.wast:105
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(2_141_192_192)]));

// conversions.wast:106
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(-4_194_304)]));

// conversions.wast:107
assert_trap(() => call($1, "i32.trunc_f32_u", [float32(-6_291_456)]));

// conversions.wast:109
assert_return(() => call($1, "i32.trunc_f64_s", [float64(0n)]), 0);

// conversions.wast:110
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-9_223_372_036_854_775_808n)]), 0);

// conversions.wast:111
assert_return(() => call($1, "i32.trunc_f64_s", [float64(1n)]), 0);

// conversions.wast:112
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-9_223_372_036_854_775_807n)]), 0);

// conversions.wast:113
assert_return(() => call($1, "i32.trunc_f64_s", [float64(4_607_182_418_800_017_408n)]), 1);

// conversions.wast:114
assert_return(() => call($1, "i32.trunc_f64_s", [float64(4_607_632_778_762_754_458n)]), 1);

// conversions.wast:115
assert_return(() => call($1, "i32.trunc_f64_s", [float64(4_609_434_218_613_702_656n)]), 1);

// conversions.wast:116
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_616_189_618_054_758_400n)]), -1);

// conversions.wast:117
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_615_739_258_092_021_350n)]), -1);

// conversions.wast:118
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_613_937_818_241_073_152n)]), -1);

// conversions.wast:119
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_612_136_378_390_124_954n)]), -1);

// conversions.wast:120
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_611_686_018_427_387_904n)]), -2);

// conversions.wast:121
assert_return(() => call($1, "i32.trunc_f64_s", [float64(4_746_794_007_244_308_480n)]), 2_147_483_647);

// conversions.wast:122
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_476_578_029_606_273_024n)]), -2_147_483_648);

// conversions.wast:123
assert_return(() => call($1, "i32.trunc_f64_s", [float64(-4_476_578_029_604_385_587n)]), -2_147_483_648);

// conversions.wast:124
assert_return(() => call($1, "i32.trunc_f64_s", [float64(4_746_794_007_248_083_354n)]), 2_147_483_647);

// conversions.wast:125
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(4_746_794_007_248_502_784n)]));

// conversions.wast:126
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(-4_476_578_029_604_175_872n)]));

// conversions.wast:127
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(9_218_868_437_227_405_312n)]));

// conversions.wast:128
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(-4_503_599_627_370_496n)]));

// conversions.wast:129
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(9_221_120_237_041_090_560n)]));

// conversions.wast:130
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(9_219_994_337_134_247_936n)]));

// conversions.wast:131
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(-2_251_799_813_685_248n)]));

// conversions.wast:132
assert_trap(() => call($1, "i32.trunc_f64_s", [float64(-3_377_699_720_527_872n)]));

// conversions.wast:134
assert_return(() => call($1, "i32.trunc_f64_u", [float64(0n)]), 0);

// conversions.wast:135
assert_return(() => call($1, "i32.trunc_f64_u", [float64(-9_223_372_036_854_775_808n)]), 0);

// conversions.wast:136
assert_return(() => call($1, "i32.trunc_f64_u", [float64(1n)]), 0);

// conversions.wast:137
assert_return(() => call($1, "i32.trunc_f64_u", [float64(-9_223_372_036_854_775_807n)]), 0);

// conversions.wast:138
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_607_182_418_800_017_408n)]), 1);

// conversions.wast:139
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_607_632_778_762_754_458n)]), 1);

// conversions.wast:140
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_609_434_218_613_702_656n)]), 1);

// conversions.wast:141
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_611_235_658_464_650_854n)]), 1);

// conversions.wast:142
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_611_686_018_427_387_904n)]), 2);

// conversions.wast:143
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_746_794_007_248_502_784n)]), -2_147_483_648);

// conversions.wast:144
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_751_297_606_873_776_128n)]), -1);

// conversions.wast:145
assert_return(() => call($1, "i32.trunc_f64_u", [float64(-4_617_090_337_980_232_499n)]), 0);

// conversions.wast:146
assert_return(() => call($1, "i32.trunc_f64_u", [float64(-4_616_189_618_054_758_401n)]), 0);

// conversions.wast:147
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_726_483_295_884_279_808n)]), 100_000_000);

// conversions.wast:148
assert_return(() => call($1, "i32.trunc_f64_u", [float64(-4_617_090_337_980_232_499n)]), 0);

// conversions.wast:149
assert_return(() => call($1, "i32.trunc_f64_u", [float64(4_751_297_606_875_663_565n)]), -1);

// conversions.wast:150
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(4_751_297_606_875_873_280n)]));

// conversions.wast:151
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(-4_616_189_618_054_758_400n)]));

// conversions.wast:152
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(4_846_369_599_423_283_200n)]));

// conversions.wast:153
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(5_055_640_609_639_927_018n)]));

// conversions.wast:154
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(4_890_909_195_324_358_656n)]));

// conversions.wast:155
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(9_218_868_437_227_405_312n)]));

// conversions.wast:156
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(-4_503_599_627_370_496n)]));

// conversions.wast:157
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(9_221_120_237_041_090_560n)]));

// conversions.wast:158
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(9_219_994_337_134_247_936n)]));

// conversions.wast:159
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(-2_251_799_813_685_248n)]));

// conversions.wast:160
assert_trap(() => call($1, "i32.trunc_f64_u", [float64(-3_377_699_720_527_872n)]));

// conversions.wast:162
assert_return(() => call($1, "i64.trunc_f32_s", [float32(0)]), 0n);

// conversions.wast:163
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-2_147_483_648)]), 0n);

// conversions.wast:164
assert_return(() => call($1, "i64.trunc_f32_s", [float32(1)]), 0n);

// conversions.wast:165
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-2_147_483_647)]), 0n);

// conversions.wast:166
assert_return(() => call($1, "i64.trunc_f32_s", [float32(1_065_353_216)]), 1n);

// conversions.wast:167
assert_return(() => call($1, "i64.trunc_f32_s", [float32(1_066_192_077)]), 1n);

// conversions.wast:168
assert_return(() => call($1, "i64.trunc_f32_s", [float32(1_069_547_520)]), 1n);

// conversions.wast:169
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-1_082_130_432)]), -1n);

// conversions.wast:170
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-1_081_291_571)]), -1n);

// conversions.wast:171
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-1_077_936_128)]), -1n);

// conversions.wast:172
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-1_074_580_685)]), -1n);

// conversions.wast:173
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-1_073_741_824)]), -2n);

// conversions.wast:174
assert_return(() => call($1, "i64.trunc_f32_s", [float32(1_333_788_672)]), 4_294_967_296n);

// conversions.wast:175
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-813_694_976)]), -4_294_967_296n);

// conversions.wast:176
assert_return(() => call($1, "i64.trunc_f32_s", [float32(1_593_835_519)]), 9_223_371_487_098_961_920n);

// conversions.wast:177
assert_return(() => call($1, "i64.trunc_f32_s", [float32(-553_648_128)]), -9_223_372_036_854_775_808n);

// conversions.wast:178
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(1_593_835_520)]));

// conversions.wast:179
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(-553_648_127)]));

// conversions.wast:180
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(2_139_095_040)]));

// conversions.wast:181
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(-8_388_608)]));

// conversions.wast:182
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(2_143_289_344)]));

// conversions.wast:183
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(2_141_192_192)]));

// conversions.wast:184
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(-4_194_304)]));

// conversions.wast:185
assert_trap(() => call($1, "i64.trunc_f32_s", [float32(-6_291_456)]));

// conversions.wast:187
assert_return(() => call($1, "i64.trunc_f32_u", [float32(0)]), 0n);

// conversions.wast:188
assert_return(() => call($1, "i64.trunc_f32_u", [float32(-2_147_483_648)]), 0n);

// conversions.wast:189
assert_return(() => call($1, "i64.trunc_f32_u", [float32(1)]), 0n);

// conversions.wast:190
assert_return(() => call($1, "i64.trunc_f32_u", [float32(-2_147_483_647)]), 0n);

// conversions.wast:191
assert_return(() => call($1, "i64.trunc_f32_u", [float32(1_065_353_216)]), 1n);

// conversions.wast:192
assert_return(() => call($1, "i64.trunc_f32_u", [float32(1_066_192_077)]), 1n);

// conversions.wast:193
assert_return(() => call($1, "i64.trunc_f32_u", [float32(1_069_547_520)]), 1n);

// conversions.wast:194
assert_return(() => call($1, "i64.trunc_f32_u", [float32(1_333_788_672)]), 4_294_967_296n);

// conversions.wast:195
assert_return(() => call($1, "i64.trunc_f32_u", [float32(1_602_224_127)]), -1_099_511_627_776n);

// conversions.wast:196
assert_return(() => call($1, "i64.trunc_f32_u", [float32(-1_083_808_154)]), 0n);

// conversions.wast:197
assert_return(() => call($1, "i64.trunc_f32_u", [float32(-1_082_130_433)]), 0n);

// conversions.wast:198
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(1_602_224_128)]));

// conversions.wast:199
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(-1_082_130_432)]));

// conversions.wast:200
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(2_139_095_040)]));

// conversions.wast:201
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(-8_388_608)]));

// conversions.wast:202
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(2_143_289_344)]));

// conversions.wast:203
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(2_141_192_192)]));

// conversions.wast:204
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(-4_194_304)]));

// conversions.wast:205
assert_trap(() => call($1, "i64.trunc_f32_u", [float32(-6_291_456)]));

// conversions.wast:207
assert_return(() => call($1, "i64.trunc_f64_s", [float64(0n)]), 0n);

// conversions.wast:208
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-9_223_372_036_854_775_808n)]), 0n);

// conversions.wast:209
assert_return(() => call($1, "i64.trunc_f64_s", [float64(1n)]), 0n);

// conversions.wast:210
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-9_223_372_036_854_775_807n)]), 0n);

// conversions.wast:211
assert_return(() => call($1, "i64.trunc_f64_s", [float64(4_607_182_418_800_017_408n)]), 1n);

// conversions.wast:212
assert_return(() => call($1, "i64.trunc_f64_s", [float64(4_607_632_778_762_754_458n)]), 1n);

// conversions.wast:213
assert_return(() => call($1, "i64.trunc_f64_s", [float64(4_609_434_218_613_702_656n)]), 1n);

// conversions.wast:214
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_616_189_618_054_758_400n)]), -1n);

// conversions.wast:215
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_615_739_258_092_021_350n)]), -1n);

// conversions.wast:216
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_613_937_818_241_073_152n)]), -1n);

// conversions.wast:217
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_612_136_378_390_124_954n)]), -1n);

// conversions.wast:218
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_611_686_018_427_387_904n)]), -2n);

// conversions.wast:219
assert_return(() => call($1, "i64.trunc_f64_s", [float64(4_751_297_606_875_873_280n)]), 4_294_967_296n);

// conversions.wast:220
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_472_074_429_978_902_528n)]), -4_294_967_296n);

// conversions.wast:221
assert_return(() => call($1, "i64.trunc_f64_s", [float64(4_890_909_195_324_358_655n)]), 9_223_372_036_854_774_784n);

// conversions.wast:222
assert_return(() => call($1, "i64.trunc_f64_s", [float64(-4_332_462_841_530_417_152n)]), -9_223_372_036_854_775_808n);

// conversions.wast:223
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(4_890_909_195_324_358_656n)]));

// conversions.wast:224
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(-4_332_462_841_530_417_151n)]));

// conversions.wast:225
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(9_218_868_437_227_405_312n)]));

// conversions.wast:226
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(-4_503_599_627_370_496n)]));

// conversions.wast:227
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(9_221_120_237_041_090_560n)]));

// conversions.wast:228
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(9_219_994_337_134_247_936n)]));

// conversions.wast:229
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(-2_251_799_813_685_248n)]));

// conversions.wast:230
assert_trap(() => call($1, "i64.trunc_f64_s", [float64(-3_377_699_720_527_872n)]));

// conversions.wast:232
assert_return(() => call($1, "i64.trunc_f64_u", [float64(0n)]), 0n);

// conversions.wast:233
assert_return(() => call($1, "i64.trunc_f64_u", [float64(-9_223_372_036_854_775_808n)]), 0n);

// conversions.wast:234
assert_return(() => call($1, "i64.trunc_f64_u", [float64(1n)]), 0n);

// conversions.wast:235
assert_return(() => call($1, "i64.trunc_f64_u", [float64(-9_223_372_036_854_775_807n)]), 0n);

// conversions.wast:236
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_607_182_418_800_017_408n)]), 1n);

// conversions.wast:237
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_607_632_778_762_754_458n)]), 1n);

// conversions.wast:238
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_609_434_218_613_702_656n)]), 1n);

// conversions.wast:239
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_751_297_606_873_776_128n)]), 4_294_967_295n);

// conversions.wast:240
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_751_297_606_875_873_280n)]), 4_294_967_296n);

// conversions.wast:241
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_895_412_794_951_729_151n)]), -2_048n);

// conversions.wast:242
assert_return(() => call($1, "i64.trunc_f64_u", [float64(-4_617_090_337_980_232_499n)]), 0n);

// conversions.wast:243
assert_return(() => call($1, "i64.trunc_f64_u", [float64(-4_616_189_618_054_758_401n)]), 0n);

// conversions.wast:244
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_726_483_295_884_279_808n)]), 100_000_000n);

// conversions.wast:245
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_846_369_599_423_283_200n)]), 10_000_000_000_000_000n);

// conversions.wast:246
assert_return(() => call($1, "i64.trunc_f64_u", [float64(4_890_909_195_324_358_656n)]), -9_223_372_036_854_775_808n);

// conversions.wast:247
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(4_895_412_794_951_729_152n)]));

// conversions.wast:248
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(-4_616_189_618_054_758_400n)]));

// conversions.wast:249
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(9_218_868_437_227_405_312n)]));

// conversions.wast:250
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(-4_503_599_627_370_496n)]));

// conversions.wast:251
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(9_221_120_237_041_090_560n)]));

// conversions.wast:252
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(9_219_994_337_134_247_936n)]));

// conversions.wast:253
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(-2_251_799_813_685_248n)]));

// conversions.wast:254
assert_trap(() => call($1, "i64.trunc_f64_u", [float64(-3_377_699_720_527_872n)]));

// conversions.wast:256
assert_return(() => call($1, "f32.convert_i32_s", [1]), float32(1_065_353_216));

// conversions.wast:257
assert_return(() => call($1, "f32.convert_i32_s", [-1]), float32(-1_082_130_432));

// conversions.wast:258
assert_return(() => call($1, "f32.convert_i32_s", [0]), float32(0));

// conversions.wast:259
assert_return(() => call($1, "f32.convert_i32_s", [2_147_483_647]), float32(1_325_400_064));

// conversions.wast:260
assert_return(() => call($1, "f32.convert_i32_s", [-2_147_483_648]), float32(-822_083_584));

// conversions.wast:261
assert_return(() => call($1, "f32.convert_i32_s", [1_234_567_890]), float32(1_318_267_910));

// conversions.wast:265
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(0)]), 0);

// conversions.wast:266
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-2_147_483_648)]), 0);

// conversions.wast:267
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(1)]), 0);

// conversions.wast:268
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-2_147_483_647)]), 0);

// conversions.wast:269
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(1_065_353_216)]), 1);

// conversions.wast:270
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(1_066_192_077)]), 1);

// conversions.wast:271
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(1_069_547_520)]), 1);

// conversions.wast:272
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-1_082_130_432)]), -1);

// conversions.wast:273
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-1_081_291_571)]), -1);

// conversions.wast:274
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-1_077_936_128)]), -1);

// conversions.wast:275
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-1_074_580_685)]), -1);

// conversions.wast:276
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-1_073_741_824)]), -2);

// conversions.wast:277
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(1_325_400_063)]), 2_147_483_520);

// conversions.wast:278
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-822_083_584)]), -2_147_483_648);

// conversions.wast:279
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(1_325_400_064)]), 2_147_483_647);

// conversions.wast:280
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-822_083_583)]), -2_147_483_648);

// conversions.wast:281
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(2_139_095_040)]), 2_147_483_647);

// conversions.wast:282
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-8_388_608)]), -2_147_483_648);

// conversions.wast:283
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(2_143_289_344)]), 0);

// conversions.wast:284
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(2_141_192_192)]), 0);

// conversions.wast:285
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-4_194_304)]), 0);

// conversions.wast:286
assert_return(() => call($1, "i32.trunc_sat_f32_s", [float32(-6_291_456)]), 0);

// conversions.wast:288
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(0)]), 0);

// conversions.wast:289
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-2_147_483_648)]), 0);

// conversions.wast:290
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1)]), 0);

// conversions.wast:291
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-2_147_483_647)]), 0);

// conversions.wast:292
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_065_353_216)]), 1);

// conversions.wast:293
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_066_192_077)]), 1);

// conversions.wast:294
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_069_547_520)]), 1);

// conversions.wast:295
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_072_902_963)]), 1);

// conversions.wast:296
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_073_741_824)]), 2);

// conversions.wast:297
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_325_400_064)]), -2_147_483_648);

// conversions.wast:298
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_333_788_671)]), -256);

// conversions.wast:299
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-1_083_808_154)]), 0);

// conversions.wast:300
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-1_082_130_433)]), 0);

// conversions.wast:301
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(1_333_788_672)]), -1);

// conversions.wast:302
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-1_082_130_432)]), 0);

// conversions.wast:303
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(2_139_095_040)]), -1);

// conversions.wast:304
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-8_388_608)]), 0);

// conversions.wast:305
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(2_143_289_344)]), 0);

// conversions.wast:306
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(2_141_192_192)]), 0);

// conversions.wast:307
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-4_194_304)]), 0);

// conversions.wast:308
assert_return(() => call($1, "i32.trunc_sat_f32_u", [float32(-6_291_456)]), 0);

// conversions.wast:310
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(0n)]), 0);

// conversions.wast:311
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-9_223_372_036_854_775_808n)]), 0);

// conversions.wast:312
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(1n)]), 0);

// conversions.wast:313
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-9_223_372_036_854_775_807n)]), 0);

// conversions.wast:314
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(4_607_182_418_800_017_408n)]), 1);

// conversions.wast:315
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(4_607_632_778_762_754_458n)]), 1);

// conversions.wast:316
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(4_609_434_218_613_702_656n)]), 1);

// conversions.wast:317
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_616_189_618_054_758_400n)]), -1);

// conversions.wast:318
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_615_739_258_092_021_350n)]), -1);

// conversions.wast:319
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_613_937_818_241_073_152n)]), -1);

// conversions.wast:320
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_612_136_378_390_124_954n)]), -1);

// conversions.wast:321
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_611_686_018_427_387_904n)]), -2);

// conversions.wast:322
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(4_746_794_007_244_308_480n)]), 2_147_483_647);

// conversions.wast:323
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_476_578_029_606_273_024n)]), -2_147_483_648);

// conversions.wast:324
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(4_746_794_007_248_502_784n)]), 2_147_483_647);

// conversions.wast:325
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_476_578_029_604_175_872n)]), -2_147_483_648);

// conversions.wast:326
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(9_218_868_437_227_405_312n)]), 2_147_483_647);

// conversions.wast:327
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-4_503_599_627_370_496n)]), -2_147_483_648);

// conversions.wast:328
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(9_221_120_237_041_090_560n)]), 0);

// conversions.wast:329
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(9_219_994_337_134_247_936n)]), 0);

// conversions.wast:330
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-2_251_799_813_685_248n)]), 0);

// conversions.wast:331
assert_return(() => call($1, "i32.trunc_sat_f64_s", [float64(-3_377_699_720_527_872n)]), 0);

// conversions.wast:333
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(0n)]), 0);

// conversions.wast:334
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-9_223_372_036_854_775_808n)]), 0);

// conversions.wast:335
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(1n)]), 0);

// conversions.wast:336
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-9_223_372_036_854_775_807n)]), 0);

// conversions.wast:337
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_607_182_418_800_017_408n)]), 1);

// conversions.wast:338
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_607_632_778_762_754_458n)]), 1);

// conversions.wast:339
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_609_434_218_613_702_656n)]), 1);

// conversions.wast:340
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_611_235_658_464_650_854n)]), 1);

// conversions.wast:341
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_611_686_018_427_387_904n)]), 2);

// conversions.wast:342
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_746_794_007_248_502_784n)]), -2_147_483_648);

// conversions.wast:343
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_751_297_606_873_776_128n)]), -1);

// conversions.wast:344
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-4_617_090_337_980_232_499n)]), 0);

// conversions.wast:345
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-4_616_189_618_054_758_401n)]), 0);

// conversions.wast:346
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_726_483_295_884_279_808n)]), 100_000_000);

// conversions.wast:347
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_751_297_606_875_873_280n)]), -1);

// conversions.wast:348
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-4_616_189_618_054_758_400n)]), 0);

// conversions.wast:349
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_846_369_599_423_283_200n)]), -1);

// conversions.wast:350
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(5_055_640_609_639_927_018n)]), -1);

// conversions.wast:351
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(4_890_909_195_324_358_656n)]), -1);

// conversions.wast:352
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(9_218_868_437_227_405_312n)]), -1);

// conversions.wast:353
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-4_503_599_627_370_496n)]), 0);

// conversions.wast:354
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(9_221_120_237_041_090_560n)]), 0);

// conversions.wast:355
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(9_219_994_337_134_247_936n)]), 0);

// conversions.wast:356
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-2_251_799_813_685_248n)]), 0);

// conversions.wast:357
assert_return(() => call($1, "i32.trunc_sat_f64_u", [float64(-3_377_699_720_527_872n)]), 0);

// conversions.wast:359
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(0)]), 0n);

// conversions.wast:360
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-2_147_483_648)]), 0n);

// conversions.wast:361
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1)]), 0n);

// conversions.wast:362
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-2_147_483_647)]), 0n);

// conversions.wast:363
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1_065_353_216)]), 1n);

// conversions.wast:364
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1_066_192_077)]), 1n);

// conversions.wast:365
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1_069_547_520)]), 1n);

// conversions.wast:366
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-1_082_130_432)]), -1n);

// conversions.wast:367
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-1_081_291_571)]), -1n);

// conversions.wast:368
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-1_077_936_128)]), -1n);

// conversions.wast:369
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-1_074_580_685)]), -1n);

// conversions.wast:370
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-1_073_741_824)]), -2n);

// conversions.wast:371
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1_333_788_672)]), 4_294_967_296n);

// conversions.wast:372
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-813_694_976)]), -4_294_967_296n);

// conversions.wast:373
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1_593_835_519)]), 9_223_371_487_098_961_920n);

// conversions.wast:374
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-553_648_128)]), -9_223_372_036_854_775_808n);

// conversions.wast:375
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(1_593_835_520)]), 9_223_372_036_854_775_807n);

// conversions.wast:376
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-553_648_127)]), -9_223_372_036_854_775_808n);

// conversions.wast:377
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(2_139_095_040)]), 9_223_372_036_854_775_807n);

// conversions.wast:378
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-8_388_608)]), -9_223_372_036_854_775_808n);

// conversions.wast:379
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(2_143_289_344)]), 0n);

// conversions.wast:380
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(2_141_192_192)]), 0n);

// conversions.wast:381
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-4_194_304)]), 0n);

// conversions.wast:382
assert_return(() => call($1, "i64.trunc_sat_f32_s", [float32(-6_291_456)]), 0n);

// conversions.wast:384
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(0)]), 0n);

// conversions.wast:385
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-2_147_483_648)]), 0n);

// conversions.wast:386
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1)]), 0n);

// conversions.wast:387
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-2_147_483_647)]), 0n);

// conversions.wast:388
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1_065_353_216)]), 1n);

// conversions.wast:389
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1_066_192_077)]), 1n);

// conversions.wast:390
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1_069_547_520)]), 1n);

// conversions.wast:391
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1_333_788_672)]), 4_294_967_296n);

// conversions.wast:392
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1_602_224_127)]), -1_099_511_627_776n);

// conversions.wast:393
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-1_083_808_154)]), 0n);

// conversions.wast:394
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-1_082_130_433)]), 0n);

// conversions.wast:395
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(1_602_224_128)]), -1n);

// conversions.wast:396
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-1_082_130_432)]), 0n);

// conversions.wast:397
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(2_139_095_040)]), -1n);

// conversions.wast:398
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-8_388_608)]), 0n);

// conversions.wast:399
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(2_143_289_344)]), 0n);

// conversions.wast:400
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(2_141_192_192)]), 0n);

// conversions.wast:401
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-4_194_304)]), 0n);

// conversions.wast:402
assert_return(() => call($1, "i64.trunc_sat_f32_u", [float32(-6_291_456)]), 0n);

// conversions.wast:404
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(0n)]), 0n);

// conversions.wast:405
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-9_223_372_036_854_775_808n)]), 0n);

// conversions.wast:406
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(1n)]), 0n);

// conversions.wast:407
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-9_223_372_036_854_775_807n)]), 0n);

// conversions.wast:408
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(4_607_182_418_800_017_408n)]), 1n);

// conversions.wast:409
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(4_607_632_778_762_754_458n)]), 1n);

// conversions.wast:410
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(4_609_434_218_613_702_656n)]), 1n);

// conversions.wast:411
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_616_189_618_054_758_400n)]), -1n);

// conversions.wast:412
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_615_739_258_092_021_350n)]), -1n);

// conversions.wast:413
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_613_937_818_241_073_152n)]), -1n);

// conversions.wast:414
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_612_136_378_390_124_954n)]), -1n);

// conversions.wast:415
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_611_686_018_427_387_904n)]), -2n);

// conversions.wast:416
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(4_751_297_606_875_873_280n)]), 4_294_967_296n);

// conversions.wast:417
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_472_074_429_978_902_528n)]), -4_294_967_296n);

// conversions.wast:418
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(4_890_909_195_324_358_655n)]), 9_223_372_036_854_774_784n);

// conversions.wast:419
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_332_462_841_530_417_152n)]), -9_223_372_036_854_775_808n);

// conversions.wast:420
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(4_890_909_195_324_358_656n)]), 9_223_372_036_854_775_807n);

// conversions.wast:421
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_332_462_841_530_417_151n)]), -9_223_372_036_854_775_808n);

// conversions.wast:422
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(9_218_868_437_227_405_312n)]), 9_223_372_036_854_775_807n);

// conversions.wast:423
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-4_503_599_627_370_496n)]), -9_223_372_036_854_775_808n);

// conversions.wast:424
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(9_221_120_237_041_090_560n)]), 0n);

// conversions.wast:425
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(9_219_994_337_134_247_936n)]), 0n);

// conversions.wast:426
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-2_251_799_813_685_248n)]), 0n);

// conversions.wast:427
assert_return(() => call($1, "i64.trunc_sat_f64_s", [float64(-3_377_699_720_527_872n)]), 0n);

// conversions.wast:429
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(0n)]), 0n);

// conversions.wast:430
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-9_223_372_036_854_775_808n)]), 0n);

// conversions.wast:431
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(1n)]), 0n);

// conversions.wast:432
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-9_223_372_036_854_775_807n)]), 0n);

// conversions.wast:433
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_607_182_418_800_017_408n)]), 1n);

// conversions.wast:434
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_607_632_778_762_754_458n)]), 1n);

// conversions.wast:435
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_609_434_218_613_702_656n)]), 1n);

// conversions.wast:436
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_751_297_606_873_776_128n)]), 4_294_967_295n);

// conversions.wast:437
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_751_297_606_875_873_280n)]), 4_294_967_296n);

// conversions.wast:438
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_895_412_794_951_729_151n)]), -2_048n);

// conversions.wast:439
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-4_617_090_337_980_232_499n)]), 0n);

// conversions.wast:440
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-4_616_189_618_054_758_401n)]), 0n);

// conversions.wast:441
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_726_483_295_884_279_808n)]), 100_000_000n);

// conversions.wast:442
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_846_369_599_423_283_200n)]), 10_000_000_000_000_000n);

// conversions.wast:443
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_890_909_195_324_358_656n)]), -9_223_372_036_854_775_808n);

// conversions.wast:444
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(4_895_412_794_951_729_152n)]), -1n);

// conversions.wast:445
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-4_616_189_618_054_758_400n)]), 0n);

// conversions.wast:446
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(9_218_868_437_227_405_312n)]), -1n);

// conversions.wast:447
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-4_503_599_627_370_496n)]), 0n);

// conversions.wast:448
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(9_221_120_237_041_090_560n)]), 0n);

// conversions.wast:449
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(9_219_994_337_134_247_936n)]), 0n);

// conversions.wast:450
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-2_251_799_813_685_248n)]), 0n);

// conversions.wast:451
assert_return(() => call($1, "i64.trunc_sat_f64_u", [float64(-3_377_699_720_527_872n)]), 0n);

// conversions.wast:454
assert_return(() => call($1, "f32.convert_i32_s", [16_777_217]), float32(1_266_679_808));

// conversions.wast:455
assert_return(() => call($1, "f32.convert_i32_s", [-16_777_217]), float32(-880_803_840));

// conversions.wast:456
assert_return(() => call($1, "f32.convert_i32_s", [16_777_219]), float32(1_266_679_810));

// conversions.wast:457
assert_return(() => call($1, "f32.convert_i32_s", [-16_777_219]), float32(-880_803_838));

// conversions.wast:459
assert_return(() => call($1, "f32.convert_i64_s", [1n]), float32(1_065_353_216));

// conversions.wast:460
assert_return(() => call($1, "f32.convert_i64_s", [-1n]), float32(-1_082_130_432));

// conversions.wast:461
assert_return(() => call($1, "f32.convert_i64_s", [0n]), float32(0));

// conversions.wast:462
assert_return(() => call($1, "f32.convert_i64_s", [9_223_372_036_854_775_807n]), float32(1_593_835_520));

// conversions.wast:463
assert_return(() => call($1, "f32.convert_i64_s", [-9_223_372_036_854_775_808n]), float32(-553_648_128));

// conversions.wast:464
assert_return(() => call($1, "f32.convert_i64_s", [314_159_265_358_979n]), float32(1_468_980_468));

// conversions.wast:466
assert_return(() => call($1, "f32.convert_i64_s", [16_777_217n]), float32(1_266_679_808));

// conversions.wast:467
assert_return(() => call($1, "f32.convert_i64_s", [-16_777_217n]), float32(-880_803_840));

// conversions.wast:468
assert_return(() => call($1, "f32.convert_i64_s", [16_777_219n]), float32(1_266_679_810));

// conversions.wast:469
assert_return(() => call($1, "f32.convert_i64_s", [-16_777_219n]), float32(-880_803_838));

// conversions.wast:471
assert_return(() => call($1, "f32.convert_i64_s", [9_223_371_212_221_054_977n]), float32(1_593_835_519));

// conversions.wast:472
assert_return(() => call($1, "f32.convert_i64_s", [-9_223_371_761_976_868_863n]), float32(-553_648_129));

// conversions.wast:473
assert_return(() => call($1, "f32.convert_i64_s", [9_007_199_791_611_905n]), float32(1_509_949_441));

// conversions.wast:474
assert_return(() => call($1, "f32.convert_i64_s", [-9_007_199_791_611_905n]), float32(-637_534_207));

// conversions.wast:476
assert_return(() => call($1, "f64.convert_i32_s", [1]), float64(4_607_182_418_800_017_408n));

// conversions.wast:477
assert_return(() => call($1, "f64.convert_i32_s", [-1]), float64(-4_616_189_618_054_758_400n));

// conversions.wast:478
assert_return(() => call($1, "f64.convert_i32_s", [0]), float64(0n));

// conversions.wast:479
assert_return(() => call($1, "f64.convert_i32_s", [2_147_483_647]), float64(4_746_794_007_244_308_480n));

// conversions.wast:480
assert_return(() => call($1, "f64.convert_i32_s", [-2_147_483_648]), float64(-4_476_578_029_606_273_024n));

// conversions.wast:481
assert_return(() => call($1, "f64.convert_i32_s", [987_654_321]), float64(4_741_568_253_304_766_464n));

// conversions.wast:483
assert_return(() => call($1, "f64.convert_i64_s", [1n]), float64(4_607_182_418_800_017_408n));

// conversions.wast:484
assert_return(() => call($1, "f64.convert_i64_s", [-1n]), float64(-4_616_189_618_054_758_400n));

// conversions.wast:485
assert_return(() => call($1, "f64.convert_i64_s", [0n]), float64(0n));

// conversions.wast:486
assert_return(() => call($1, "f64.convert_i64_s", [9_223_372_036_854_775_807n]), float64(4_890_909_195_324_358_656n));

// conversions.wast:487
assert_return(() => call($1, "f64.convert_i64_s", [-9_223_372_036_854_775_808n]), float64(-4_332_462_841_530_417_152n));

// conversions.wast:488
assert_return(() => call($1, "f64.convert_i64_s", [4_669_201_609_102_990n]), float64(4_841_535_201_405_015_694n));

// conversions.wast:490
assert_return(() => call($1, "f64.convert_i64_s", [9_007_199_254_740_993n]), float64(4_845_873_199_050_653_696n));

// conversions.wast:491
assert_return(() => call($1, "f64.convert_i64_s", [-9_007_199_254_740_993n]), float64(-4_377_498_837_804_122_112n));

// conversions.wast:492
assert_return(() => call($1, "f64.convert_i64_s", [9_007_199_254_740_995n]), float64(4_845_873_199_050_653_698n));

// conversions.wast:493
assert_return(() => call($1, "f64.convert_i64_s", [-9_007_199_254_740_995n]), float64(-4_377_498_837_804_122_110n));

// conversions.wast:495
assert_return(() => call($1, "f32.convert_i32_u", [1]), float32(1_065_353_216));

// conversions.wast:496
assert_return(() => call($1, "f32.convert_i32_u", [0]), float32(0));

// conversions.wast:497
assert_return(() => call($1, "f32.convert_i32_u", [2_147_483_647]), float32(1_325_400_064));

// conversions.wast:498
assert_return(() => call($1, "f32.convert_i32_u", [-2_147_483_648]), float32(1_325_400_064));

// conversions.wast:499
assert_return(() => call($1, "f32.convert_i32_u", [305_419_896]), float32(1_301_390_004));

// conversions.wast:500
assert_return(() => call($1, "f32.convert_i32_u", [-1]), float32(1_333_788_672));

// conversions.wast:501
assert_return(() => call($1, "f32.convert_i32_u", [-2_147_483_520]), float32(1_325_400_064));

// conversions.wast:502
assert_return(() => call($1, "f32.convert_i32_u", [-2_147_483_519]), float32(1_325_400_065));

// conversions.wast:503
assert_return(() => call($1, "f32.convert_i32_u", [-2_147_483_518]), float32(1_325_400_065));

// conversions.wast:504
assert_return(() => call($1, "f32.convert_i32_u", [-384]), float32(1_333_788_670));

// conversions.wast:505
assert_return(() => call($1, "f32.convert_i32_u", [-383]), float32(1_333_788_671));

// conversions.wast:506
assert_return(() => call($1, "f32.convert_i32_u", [-382]), float32(1_333_788_671));

// conversions.wast:508
assert_return(() => call($1, "f32.convert_i32_u", [16_777_217]), float32(1_266_679_808));

// conversions.wast:509
assert_return(() => call($1, "f32.convert_i32_u", [16_777_219]), float32(1_266_679_810));

// conversions.wast:511
assert_return(() => call($1, "f32.convert_i64_u", [1n]), float32(1_065_353_216));

// conversions.wast:512
assert_return(() => call($1, "f32.convert_i64_u", [0n]), float32(0));

// conversions.wast:513
assert_return(() => call($1, "f32.convert_i64_u", [9_223_372_036_854_775_807n]), float32(1_593_835_520));

// conversions.wast:514
assert_return(() => call($1, "f32.convert_i64_u", [-9_223_372_036_854_775_808n]), float32(1_593_835_520));

// conversions.wast:515
assert_return(() => call($1, "f32.convert_i64_u", [-1n]), float32(1_602_224_128));

// conversions.wast:517
assert_return(() => call($1, "f32.convert_i64_u", [16_777_217n]), float32(1_266_679_808));

// conversions.wast:518
assert_return(() => call($1, "f32.convert_i64_u", [16_777_219n]), float32(1_266_679_810));

// conversions.wast:520
assert_return(() => call($1, "f32.convert_i64_u", [9_007_199_791_611_905n]), float32(1_509_949_441));

// conversions.wast:521
assert_return(() => call($1, "f32.convert_i64_u", [9_223_371_761_976_868_863n]), float32(1_593_835_519));

// conversions.wast:522
assert_return(() => call($1, "f32.convert_i64_u", [-9_223_371_487_098_961_919n]), float32(1_593_835_521));

// conversions.wast:523
assert_return(() => call($1, "f32.convert_i64_u", [-1_649_267_441_663n]), float32(1_602_224_127));

// conversions.wast:525
assert_return(() => call($1, "f64.convert_i32_u", [1]), float64(4_607_182_418_800_017_408n));

// conversions.wast:526
assert_return(() => call($1, "f64.convert_i32_u", [0]), float64(0n));

// conversions.wast:527
assert_return(() => call($1, "f64.convert_i32_u", [2_147_483_647]), float64(4_746_794_007_244_308_480n));

// conversions.wast:528
assert_return(() => call($1, "f64.convert_i32_u", [-2_147_483_648]), float64(4_746_794_007_248_502_784n));

// conversions.wast:529
assert_return(() => call($1, "f64.convert_i32_u", [-1]), float64(4_751_297_606_873_776_128n));

// conversions.wast:531
assert_return(() => call($1, "f64.convert_i64_u", [1n]), float64(4_607_182_418_800_017_408n));

// conversions.wast:532
assert_return(() => call($1, "f64.convert_i64_u", [0n]), float64(0n));

// conversions.wast:533
assert_return(() => call($1, "f64.convert_i64_u", [9_223_372_036_854_775_807n]), float64(4_890_909_195_324_358_656n));

// conversions.wast:534
assert_return(() => call($1, "f64.convert_i64_u", [-9_223_372_036_854_775_808n]), float64(4_890_909_195_324_358_656n));

// conversions.wast:535
assert_return(() => call($1, "f64.convert_i64_u", [-1n]), float64(4_895_412_794_951_729_152n));

// conversions.wast:536
assert_return(() => call($1, "f64.convert_i64_u", [-9_223_372_036_854_774_784n]), float64(4_890_909_195_324_358_656n));

// conversions.wast:537
assert_return(() => call($1, "f64.convert_i64_u", [-9_223_372_036_854_774_783n]), float64(4_890_909_195_324_358_657n));

// conversions.wast:538
assert_return(() => call($1, "f64.convert_i64_u", [-9_223_372_036_854_774_782n]), float64(4_890_909_195_324_358_657n));

// conversions.wast:539
assert_return(() => call($1, "f64.convert_i64_u", [-3_072n]), float64(4_895_412_794_951_729_150n));

// conversions.wast:540
assert_return(() => call($1, "f64.convert_i64_u", [-3_071n]), float64(4_895_412_794_951_729_151n));

// conversions.wast:541
assert_return(() => call($1, "f64.convert_i64_u", [-3_070n]), float64(4_895_412_794_951_729_151n));

// conversions.wast:543
assert_return(() => call($1, "f64.convert_i64_u", [9_007_199_254_740_993n]), float64(4_845_873_199_050_653_696n));

// conversions.wast:544
assert_return(() => call($1, "f64.convert_i64_u", [9_007_199_254_740_995n]), float64(4_845_873_199_050_653_698n));

// conversions.wast:546
assert_return(() => call($1, "f64.promote_f32", [float32(0)]), float64(0n));

// conversions.wast:547
assert_return(() => call($1, "f64.promote_f32", [float32(-2_147_483_648)]), float64(-9_223_372_036_854_775_808n));

// conversions.wast:548
assert_return(() => call($1, "f64.promote_f32", [float32(1)]), float64(3_936_146_074_321_813_504n));

// conversions.wast:549
assert_return(() => call($1, "f64.promote_f32", [float32(-2_147_483_647)]), float64(-5_287_225_962_532_962_304n));

// conversions.wast:550
assert_return(() => call($1, "f64.promote_f32", [float32(1_065_353_216)]), float64(4_607_182_418_800_017_408n));

// conversions.wast:551
assert_return(() => call($1, "f64.promote_f32", [float32(-1_082_130_432)]), float64(-4_616_189_618_054_758_400n));

// conversions.wast:552
assert_return(() => call($1, "f64.promote_f32", [float32(-8_388_609)]), float64(-4_039_728_866_288_205_824n));

// conversions.wast:553
assert_return(() => call($1, "f64.promote_f32", [float32(2_139_095_039)]), float64(5_183_643_170_566_569_984n));

// conversions.wast:555
assert_return(() => call($1, "f64.promote_f32", [float32(67_108_864)]), float64(4_071_254_063_142_928_384n));

// conversions.wast:557
assert_return(() => call($1, "f64.promote_f32", [float32(2_118_632_255)]), float64(5_172_657_297_058_430_976n));

// conversions.wast:558
assert_return(() => call($1, "f64.promote_f32", [float32(2_139_095_040)]), float64(9_218_868_437_227_405_312n));

// conversions.wast:559
assert_return(() => call($1, "f64.promote_f32", [float32(-8_388_608)]), float64(-4_503_599_627_370_496n));

// conversions.wast:560
assert_return(() => call($1, "f64.promote_f32", [float32(2_143_289_344)]), NaN);

// conversions.wast:561
assert_return(() => call($1, "f64.promote_f32", [float32(2_141_192_192)]), NaN);

// conversions.wast:562
assert_return(() => call($1, "f64.promote_f32", [float32(-4_194_304)]), NaN);

// conversions.wast:563
assert_return(() => call($1, "f64.promote_f32", [float32(-6_291_456)]), NaN);

// conversions.wast:565
assert_return(() => call($1, "f32.demote_f64", [float64(0n)]), float32(0));

// conversions.wast:566
assert_return(() => call($1, "f32.demote_f64", [float64(-9_223_372_036_854_775_808n)]), float32(-2_147_483_648));

// conversions.wast:567
assert_return(() => call($1, "f32.demote_f64", [float64(1n)]), float32(0));

// conversions.wast:568
assert_return(() => call($1, "f32.demote_f64", [float64(-9_223_372_036_854_775_807n)]), float32(-2_147_483_648));

// conversions.wast:569
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_418_800_017_408n)]), float32(1_065_353_216));

// conversions.wast:570
assert_return(() => call($1, "f32.demote_f64", [float64(-4_616_189_618_054_758_400n)]), float32(-1_082_130_432));

// conversions.wast:571
assert_return(() => call($1, "f32.demote_f64", [float64(4_039_728_865_214_464_000n)]), float32(8_388_608));

// conversions.wast:572
assert_return(() => call($1, "f32.demote_f64", [float64(-5_183_643_171_640_311_808n)]), float32(-2_139_095_040));

// conversions.wast:573
assert_return(() => call($1, "f32.demote_f64", [float64(4_039_728_865_214_463_999n)]), float32(8_388_607));

// conversions.wast:574
assert_return(() => call($1, "f32.demote_f64", [float64(-5_183_643_171_640_311_809n)]), float32(-2_139_095_041));

// conversions.wast:575
assert_return(() => call($1, "f32.demote_f64", [float64(3_936_146_074_321_813_504n)]), float32(1));

// conversions.wast:576
assert_return(() => call($1, "f32.demote_f64", [float64(-5_287_225_962_532_962_304n)]), float32(-2_147_483_647));

// conversions.wast:577
assert_return(() => call($1, "f32.demote_f64", [float64(5_183_643_170_298_134_528n)]), float32(2_139_095_038));

// conversions.wast:578
assert_return(() => call($1, "f32.demote_f64", [float64(-4_039_728_866_556_641_280n)]), float32(-8_388_610));

// conversions.wast:579
assert_return(() => call($1, "f32.demote_f64", [float64(5_183_643_170_298_134_529n)]), float32(2_139_095_039));

// conversions.wast:580
assert_return(() => call($1, "f32.demote_f64", [float64(-4_039_728_866_556_641_279n)]), float32(-8_388_609));

// conversions.wast:581
assert_return(() => call($1, "f32.demote_f64", [float64(5_183_643_170_566_569_984n)]), float32(2_139_095_039));

// conversions.wast:582
assert_return(() => call($1, "f32.demote_f64", [float64(-4_039_728_866_288_205_824n)]), float32(-8_388_609));

// conversions.wast:583
assert_return(() => call($1, "f32.demote_f64", [float64(5_183_643_170_835_005_439n)]), float32(2_139_095_039));

// conversions.wast:584
assert_return(() => call($1, "f32.demote_f64", [float64(-4_039_728_866_019_770_369n)]), float32(-8_388_609));

// conversions.wast:585
assert_return(() => call($1, "f32.demote_f64", [float64(5_183_643_170_835_005_440n)]), float32(2_139_095_040));

// conversions.wast:586
assert_return(() => call($1, "f32.demote_f64", [float64(-4_039_728_866_019_770_368n)]), float32(-8_388_608));

// conversions.wast:587
assert_return(() => call($1, "f32.demote_f64", [float64(4_071_254_063_142_928_384n)]), float32(67_108_864));

// conversions.wast:588
assert_return(() => call($1, "f32.demote_f64", [float64(5_172_657_297_058_430_976n)]), float32(2_118_632_255));

// conversions.wast:589
assert_return(() => call($1, "f32.demote_f64", [float64(9_218_868_437_227_405_312n)]), float32(2_139_095_040));

// conversions.wast:590
assert_return(() => call($1, "f32.demote_f64", [float64(-4_503_599_627_370_496n)]), float32(-8_388_608));

// conversions.wast:591
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_418_800_017_409n)]), float32(1_065_353_216));

// conversions.wast:592
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_418_800_017_407n)]), float32(1_065_353_216));

// conversions.wast:593
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_419_068_452_864n)]), float32(1_065_353_216));

// conversions.wast:594
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_419_068_452_865n)]), float32(1_065_353_217));

// conversions.wast:595
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_419_605_323_775n)]), float32(1_065_353_217));

// conversions.wast:596
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_419_605_323_776n)]), float32(1_065_353_218));

// conversions.wast:597
assert_return(() => call($1, "f32.demote_f64", [float64(4_607_182_420_142_194_688n)]), float32(1_065_353_218));

// conversions.wast:598
assert_return(() => call($1, "f32.demote_f64", [float64(4_715_268_810_125_344_768n)]), float32(1_266_679_808));

// conversions.wast:599
assert_return(() => call($1, "f32.demote_f64", [float64(4_715_268_810_125_344_769n)]), float32(1_266_679_809));

// conversions.wast:600
assert_return(() => call($1, "f32.demote_f64", [float64(4_715_268_810_662_215_679n)]), float32(1_266_679_809));

// conversions.wast:601
assert_return(() => call($1, "f32.demote_f64", [float64(4_715_268_810_662_215_680n)]), float32(1_266_679_810));

// conversions.wast:602
assert_return(() => call($1, "f32.demote_f64", [float64(5_094_955_347_580_439_664n)]), float32(1_973_901_096));

// conversions.wast:603
assert_return(() => call($1, "f32.demote_f64", [float64(4_101_111_194_527_827_589n)]), float32(122_722_105));

// conversions.wast:604
assert_return(() => call($1, "f32.demote_f64", [float64(4_038_806_939_559_600_639n)]), float32(7_529_997));

// conversions.wast:605
assert_return(() => call($1, "f32.demote_f64", [float64(-4_609_830_956_808_817_310n)]), float32(-1_070_286_502));

// conversions.wast:606
assert_return(() => call($1, "f32.demote_f64", [float64(-4_108_428_833_536_224_060n)]), float32(-136_352_270));

// conversions.wast:607
assert_return(() => call($1, "f32.demote_f64", [float64(9_221_120_237_041_090_560n)]), NaN);

// conversions.wast:608
assert_return(() => call($1, "f32.demote_f64", [float64(9_219_994_337_134_247_936n)]), NaN);

// conversions.wast:609
assert_return(() => call($1, "f32.demote_f64", [float64(-2_251_799_813_685_248n)]), NaN);

// conversions.wast:610
assert_return(() => call($1, "f32.demote_f64", [float64(-3_377_699_720_527_872n)]), NaN);

// conversions.wast:611
assert_return(() => call($1, "f32.demote_f64", [float64(4_503_599_627_370_496n)]), float32(0));

// conversions.wast:612
assert_return(() => call($1, "f32.demote_f64", [float64(-9_218_868_437_227_405_312n)]), float32(-2_147_483_648));

// conversions.wast:613
assert_return(() => call($1, "f32.demote_f64", [float64(3_931_642_474_694_443_008n)]), float32(0));

// conversions.wast:614
assert_return(() => call($1, "f32.demote_f64", [float64(-5_291_729_562_160_332_800n)]), float32(-2_147_483_648));

// conversions.wast:615
assert_return(() => call($1, "f32.demote_f64", [float64(3_931_642_474_694_443_009n)]), float32(1));

// conversions.wast:616
assert_return(() => call($1, "f32.demote_f64", [float64(-5_291_729_562_160_332_799n)]), float32(-2_147_483_647));

// conversions.wast:618
assert_return(() => call($1, "f32.reinterpret_i32", [0]), float32(0));

// conversions.wast:619
assert_return(() => call($1, "f32.reinterpret_i32", [-2_147_483_648]), float32(-2_147_483_648));

// conversions.wast:620
assert_return(() => call($1, "f32.reinterpret_i32", [1]), float32(1));

// conversions.wast:621
assert_return(() => call($1, "f32.reinterpret_i32", [-1]), float32(-1));

// conversions.wast:622
assert_return(() => call($1, "f32.reinterpret_i32", [123_456_789]), float32(123_456_789));

// conversions.wast:623
assert_return(() => call($1, "f32.reinterpret_i32", [-2_147_483_647]), float32(-2_147_483_647));

// conversions.wast:624
assert_return(() => call($1, "f32.reinterpret_i32", [2_139_095_040]), float32(2_139_095_040));

// conversions.wast:625
assert_return(() => call($1, "f32.reinterpret_i32", [-8_388_608]), float32(-8_388_608));

// conversions.wast:626
assert_return(() => call($1, "f32.reinterpret_i32", [2_143_289_344]), float32(2_143_289_344));

// conversions.wast:627
assert_return(() => call($1, "f32.reinterpret_i32", [-4_194_304]), float32(-4_194_304));

// conversions.wast:628
assert_return(() => call($1, "f32.reinterpret_i32", [2_141_192_192]), float32(2_141_192_192));

// conversions.wast:629
assert_return(() => call($1, "f32.reinterpret_i32", [-6_291_456]), float32(-6_291_456));

// conversions.wast:631
assert_return(() => call($1, "f64.reinterpret_i64", [0n]), float64(0n));

// conversions.wast:632
assert_return(() => call($1, "f64.reinterpret_i64", [1n]), float64(1n));

// conversions.wast:633
assert_return(() => call($1, "f64.reinterpret_i64", [-1n]), float64(-1n));

// conversions.wast:634
assert_return(() => call($1, "f64.reinterpret_i64", [-9_223_372_036_854_775_808n]), float64(-9_223_372_036_854_775_808n));

// conversions.wast:635
assert_return(() => call($1, "f64.reinterpret_i64", [1_234_567_890n]), float64(1_234_567_890n));

// conversions.wast:636
assert_return(() => call($1, "f64.reinterpret_i64", [-9_223_372_036_854_775_807n]), float64(-9_223_372_036_854_775_807n));

// conversions.wast:637
assert_return(() => call($1, "f64.reinterpret_i64", [9_218_868_437_227_405_312n]), float64(9_218_868_437_227_405_312n));

// conversions.wast:638
assert_return(() => call($1, "f64.reinterpret_i64", [-4_503_599_627_370_496n]), float64(-4_503_599_627_370_496n));

// conversions.wast:639
assert_return(() => call($1, "f64.reinterpret_i64", [9_221_120_237_041_090_560n]), float64(9_221_120_237_041_090_560n));

// conversions.wast:640
assert_return(() => call($1, "f64.reinterpret_i64", [-2_251_799_813_685_248n]), float64(-2_251_799_813_685_248n));

// conversions.wast:641
assert_return(() => call($1, "f64.reinterpret_i64", [9_219_994_337_134_247_936n]), float64(9_219_994_337_134_247_936n));

// conversions.wast:642
assert_return(() => call($1, "f64.reinterpret_i64", [-3_377_699_720_527_872n]), float64(-3_377_699_720_527_872n));

// conversions.wast:644
assert_return(() => call($1, "i32.reinterpret_f32", [float32(0)]), 0);

// conversions.wast:645
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-2_147_483_648)]), -2_147_483_648);

// conversions.wast:646
assert_return(() => call($1, "i32.reinterpret_f32", [float32(1)]), 1);

// conversions.wast:647
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-1)]), -1);

// conversions.wast:648
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-2_147_483_647)]), -2_147_483_647);

// conversions.wast:649
assert_return(() => call($1, "i32.reinterpret_f32", [float32(1_065_353_216)]), 1_065_353_216);

// conversions.wast:650
assert_return(() => call($1, "i32.reinterpret_f32", [float32(1_078_530_010)]), 1_078_530_010);

// conversions.wast:651
assert_return(() => call($1, "i32.reinterpret_f32", [float32(2_139_095_039)]), 2_139_095_039);

// conversions.wast:652
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-8_388_609)]), -8_388_609);

// conversions.wast:653
assert_return(() => call($1, "i32.reinterpret_f32", [float32(2_139_095_040)]), 2_139_095_040);

// conversions.wast:654
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-8_388_608)]), -8_388_608);

// conversions.wast:655
assert_return(() => call($1, "i32.reinterpret_f32", [float32(2_143_289_344)]), 2_143_289_344);

// conversions.wast:656
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-4_194_304)]), -4_194_304);

// conversions.wast:657
assert_return(() => call($1, "i32.reinterpret_f32", [float32(2_141_192_192)]), 2_141_192_192);

// conversions.wast:658
assert_return(() => call($1, "i32.reinterpret_f32", [float32(-6_291_456)]), -6_291_456);

// conversions.wast:660
assert_return(() => call($1, "i64.reinterpret_f64", [float64(0n)]), 0n);

// conversions.wast:661
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-9_223_372_036_854_775_808n)]), -9_223_372_036_854_775_808n);

// conversions.wast:662
assert_return(() => call($1, "i64.reinterpret_f64", [float64(1n)]), 1n);

// conversions.wast:663
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-1n)]), -1n);

// conversions.wast:664
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-9_223_372_036_854_775_807n)]), -9_223_372_036_854_775_807n);

// conversions.wast:665
assert_return(() => call($1, "i64.reinterpret_f64", [float64(4_607_182_418_800_017_408n)]), 4_607_182_418_800_017_408n);

// conversions.wast:666
assert_return(() => call($1, "i64.reinterpret_f64", [float64(4_614_256_656_552_045_841n)]), 4_614_256_656_552_045_841n);

// conversions.wast:667
assert_return(() => call($1, "i64.reinterpret_f64", [float64(9_218_868_437_227_405_311n)]), 9_218_868_437_227_405_311n);

// conversions.wast:668
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-4_503_599_627_370_497n)]), -4_503_599_627_370_497n);

// conversions.wast:669
assert_return(() => call($1, "i64.reinterpret_f64", [float64(9_218_868_437_227_405_312n)]), 9_218_868_437_227_405_312n);

// conversions.wast:670
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-4_503_599_627_370_496n)]), -4_503_599_627_370_496n);

// conversions.wast:671
assert_return(() => call($1, "i64.reinterpret_f64", [float64(9_221_120_237_041_090_560n)]), 9_221_120_237_041_090_560n);

// conversions.wast:672
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-2_251_799_813_685_248n)]), -2_251_799_813_685_248n);

// conversions.wast:673
assert_return(() => call($1, "i64.reinterpret_f64", [float64(9_219_994_337_134_247_936n)]), 9_219_994_337_134_247_936n);

// conversions.wast:674
assert_return(() => call($1, "i64.reinterpret_f64", [float64(-3_377_699_720_527_872n)]), -3_377_699_720_527_872n);

// conversions.wast:678
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\xa7\x0b");

// conversions.wast:679
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xa8\x0b");

// conversions.wast:680
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xa9\x0b");

// conversions.wast:681
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xaa\x0b");

// conversions.wast:682
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xab\x0b");

// conversions.wast:683
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xbc\x0b");

// conversions.wast:684
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\xac\x0b");

// conversions.wast:685
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\xad\x0b");

// conversions.wast:686
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xae\x0b");

// conversions.wast:687
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xaf\x0b");

// conversions.wast:688
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xb0\x0b");

// conversions.wast:689
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xb1\x0b");

// conversions.wast:690
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xbd\x0b");

// conversions.wast:691
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xb2\x0b");

// conversions.wast:692
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xb3\x0b");

// conversions.wast:693
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xb4\x0b");

// conversions.wast:694
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xb5\x0b");

// conversions.wast:695
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xb6\x0b");

// conversions.wast:696
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xbe\x0b");

// conversions.wast:697
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xb7\x0b");

// conversions.wast:698
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x42\x00\xb8\x0b");

// conversions.wast:699
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xb9\x0b");

// conversions.wast:700
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xba\x0b");

// conversions.wast:701
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xbb\x0b");

// conversions.wast:702
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x41\x00\xbf\x0b");
