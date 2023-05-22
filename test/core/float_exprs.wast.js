
// float_exprs.wast:6
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x01\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x07\x96\x80\x80\x80\x00\x01\x12\x66\x36\x34\x2e\x6e\x6f\x5f\x63\x6f\x6e\x74\x72\x61\x63\x74\x69\x6f\x6e\x00\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa0\x0b");

// float_exprs.wast:11
assert_return(() => call($1, "f64.no_contraction", [float64(-5_077_271_481_830_706_257n), float64(7_598_224_971_858_294_334n), float64(7_009_968_021_366_006_149n)]), float64(-2_085_824_923_456_957_293n));

// float_exprs.wast:12
assert_return(() => call($1, "f64.no_contraction", [float64(4_845_207_016_438_394_692n), float64(3_163_224_970_157_846_858n), float64(3_251_145_870_828_527_841n)]), float64(3_401_457_070_760_597_396n));

// float_exprs.wast:13
assert_return(() => call($1, "f64.no_contraction", [float64(-7_287_036_749_581_965_376n), float64(7_011_538_096_610_110_295n), float64(4_140_382_893_275_160_737n)]), float64(-4_882_667_702_918_991_514n));

// float_exprs.wast:14
assert_return(() => call($1, "f64.no_contraction", [float64(4_300_281_701_552_927_458n), float64(-5_067_264_167_192_847_740n), float64(3_629_658_278_272_971_302n)]), float64(-5_374_112_845_216_813_208n));

// float_exprs.wast:15
assert_return(() => call($1, "f64.no_contraction", [float64(-8_892_220_721_357_501_123n), float64(-403_902_478_943_117_185n), float64(4_368_037_109_959_396_445n)]), float64(4_544_162_191_519_938_727n));

// float_exprs.wast:19
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\x9b\x80\x80\x80\x00\x02\x0a\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6d\x61\x00\x00\x0a\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6d\x61\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x02\x92\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa0\x0b");

// float_exprs.wast:26
assert_return(() => call($2, "f32.no_fma", [float32(2_111_029_761), float32(879_215_268), float32(1_967_953_261)]), float32(1_968_345_878));

// float_exprs.wast:27
assert_return(() => call($2, "f32.no_fma", [float32(838_240_978), float32(-1_498_374_599), float32(329_493_464)]), float32(-1_725_299_876));

// float_exprs.wast:28
assert_return(() => call($2, "f32.no_fma", [float32(1_381_446_097), float32(962_187_981), float32(1_155_576_972)]), float32(1_278_680_110));

// float_exprs.wast:29
assert_return(() => call($2, "f32.no_fma", [float32(999_635_965), float32(-891_438_677), float32(-1_072_079_083)]), float32(-956_218_518));

// float_exprs.wast:30
assert_return(() => call($2, "f32.no_fma", [float32(2_123_679_707), float32(-1_669_233_658), float32(-794_769_677)]), float32(-610_891_037));

// float_exprs.wast:31
assert_return(() => call($2, "f64.no_fma", [float64(7_118_716_943_724_900_052n), float64(6_546_073_043_412_611_735n), float64(-171_038_287_470_863_734n)]), float64(9_054_581_441_422_375_136n));

// float_exprs.wast:32
assert_return(() => call($2, "f64.no_fma", [float64(7_984_371_788_751_700_236n), float64(4_021_745_400_549_737_956n), float64(7_188_568_268_293_775_252n)]), float64(7_398_962_198_428_541_884n));

// float_exprs.wast:33
assert_return(() => call($2, "f64.no_fma", [float64(1_362_668_175_782_178_275n), float64(-61_173_977_922_585_114n), float64(5_677_031_731_722_859_914n)]), float64(-3_305_127_470_762_422_579n));

// float_exprs.wast:34
assert_return(() => call($2, "f64.no_fma", [float64(-6_353_340_117_689_715_629n), float64(-2_620_666_565_120_899_158n), float64(4_856_562_394_320_338_043n)]), float64(4_867_219_230_351_674_394n));

// float_exprs.wast:35
assert_return(() => call($2, "f64.no_fma", [float64(4_843_589_256_781_277_081n), float64(7_695_653_093_478_086_834n), float64(-1_508_305_222_937_562_872n)]), float64(7_932_313_162_666_085_329n));

// float_exprs.wast:40
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x7a\x65\x72\x6f\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x7a\x65\x72\x6f\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x00\x92\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\xa0\x0b");

// float_exprs.wast:47
assert_return(() => call($3, "f32.no_fold_add_zero", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:48
assert_return(() => call($3, "f64.no_fold_add_zero", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:49
assert_return(() => call($3, "f32.no_fold_add_zero", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:50
assert_return(() => call($3, "f64.no_fold_add_zero", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:54
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x7a\x65\x72\x6f\x5f\x73\x75\x62\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x7a\x65\x72\x6f\x5f\x73\x75\x62\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x20\x00\x93\x0b\x8e\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x20\x00\xa1\x0b");

// float_exprs.wast:61
assert_return(() => call($4, "f32.no_fold_zero_sub", [float32(0)]), float32(0));

// float_exprs.wast:62
assert_return(() => call($4, "f64.no_fold_zero_sub", [float64(0n)]), float64(0n));

// float_exprs.wast:63
assert_return(() => call($4, "f32.no_fold_zero_sub", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:64
assert_return(() => call($4, "f64.no_fold_zero_sub", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:68
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x7a\x65\x72\x6f\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x7a\x65\x72\x6f\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x00\x93\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\xa1\x0b");

// float_exprs.wast:75
assert_return(() => call($5, "f32.no_fold_sub_zero", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:76
assert_return(() => call($5, "f64.no_fold_sub_zero", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:80
let $6 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x7a\x65\x72\x6f\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x7a\x65\x72\x6f\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x00\x94\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\xa2\x0b");

// float_exprs.wast:87
assert_return(() => call($6, "f32.no_fold_mul_zero", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:88
assert_return(() => call($6, "f32.no_fold_mul_zero", [float32(-1_082_130_432)]), float32(-2_147_483_648));

// float_exprs.wast:89
assert_return(() => call($6, "f32.no_fold_mul_zero", [float32(-1_073_741_824)]), float32(-2_147_483_648));

// float_exprs.wast:90
assert_return(() => call($6, "f32.no_fold_mul_zero", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:91
assert_return(() => call($6, "f64.no_fold_mul_zero", [float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:92
assert_return(() => call($6, "f64.no_fold_mul_zero", [float64(-4_616_189_618_054_758_400n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:93
assert_return(() => call($6, "f64.no_fold_mul_zero", [float64(-4_611_686_018_427_387_904n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:94
assert_return(() => call($6, "f64.no_fold_mul_zero", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:99
let $7 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x6f\x6e\x65\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x6f\x6e\x65\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x80\x3f\x94\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa2\x0b");

// float_exprs.wast:106
assert_return(() => call($7, "f32.no_fold_mul_one", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:107
assert_return(() => call($7, "f64.no_fold_mul_one", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:111
let $8 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x7a\x65\x72\x6f\x5f\x64\x69\x76\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x7a\x65\x72\x6f\x5f\x64\x69\x76\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x20\x00\x95\x0b\x8e\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x20\x00\xa3\x0b");

// float_exprs.wast:118
assert_return(() => call($8, "f32.no_fold_zero_div", [float32(0)]), NaN);

// float_exprs.wast:119
assert_return(() => call($8, "f32.no_fold_zero_div", [float32(-2_147_483_648)]), NaN);

// float_exprs.wast:120
assert_return(() => call($8, "f32.no_fold_zero_div", [float32(2_143_289_344)]), NaN);

// float_exprs.wast:121
assert_return(() => call($8, "f32.no_fold_zero_div", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:122
assert_return(() => call($8, "f64.no_fold_zero_div", [float64(0n)]), NaN);

// float_exprs.wast:123
assert_return(() => call($8, "f64.no_fold_zero_div", [float64(-9_223_372_036_854_775_808n)]), NaN);

// float_exprs.wast:124
assert_return(() => call($8, "f64.no_fold_zero_div", [float64(9_221_120_237_041_090_560n)]), NaN);

// float_exprs.wast:125
assert_return(() => call($8, "f64.no_fold_zero_div", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:129
let $9 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6f\x6e\x65\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6f\x6e\x65\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x80\x3f\x95\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa3\x0b");

// float_exprs.wast:136
assert_return(() => call($9, "f32.no_fold_div_one", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:137
assert_return(() => call($9, "f64.no_fold_div_one", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:141
let $10 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x31\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x31\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x80\xbf\x95\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\xf0\xbf\xa3\x0b");

// float_exprs.wast:148
assert_return(() => call($10, "f32.no_fold_div_neg1", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:149
assert_return(() => call($10, "f64.no_fold_div_neg1", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:153
let $11 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x30\x5f\x73\x75\x62\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x30\x5f\x73\x75\x62\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x00\x80\x20\x00\x93\x0b\x8e\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\x20\x00\xa1\x0b");

// float_exprs.wast:160
assert_return(() => call($11, "f32.no_fold_neg0_sub", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:161
assert_return(() => call($11, "f64.no_fold_neg0_sub", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:165
let $12 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x31\x5f\x6d\x75\x6c\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x31\x5f\x6d\x75\x6c\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x80\xbf\x20\x00\x94\x0b\x8e\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\xbf\x20\x00\xa2\x0b");

// float_exprs.wast:172
assert_return(() => call($12, "f32.no_fold_neg1_mul", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:173
assert_return(() => call($12, "f64.no_fold_neg1_mul", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:177
let $13 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7f\x60\x01\x7c\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x65\x71\x5f\x73\x65\x6c\x66\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x65\x71\x5f\x73\x65\x6c\x66\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x5b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x61\x0b");

// float_exprs.wast:184
assert_return(() => call($13, "f32.no_fold_eq_self", [float32(2_143_289_344)]), 0);

// float_exprs.wast:185
assert_return(() => call($13, "f64.no_fold_eq_self", [float64(9_221_120_237_041_090_560n)]), 0);

// float_exprs.wast:189
let $14 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7f\x60\x01\x7c\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x5f\x73\x65\x6c\x66\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x5f\x73\x65\x6c\x66\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x5c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x62\x0b");

// float_exprs.wast:196
assert_return(() => call($14, "f32.no_fold_ne_self", [float32(2_143_289_344)]), 1);

// float_exprs.wast:197
assert_return(() => call($14, "f64.no_fold_ne_self", [float64(9_221_120_237_041_090_560n)]), 1);

// float_exprs.wast:201
let $15 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x73\x65\x6c\x66\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x73\x65\x6c\x66\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x93\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa1\x0b");

// float_exprs.wast:208
assert_return(() => call($15, "f32.no_fold_sub_self", [float32(2_139_095_040)]), NaN);

// float_exprs.wast:209
assert_return(() => call($15, "f32.no_fold_sub_self", [float32(2_143_289_344)]), NaN);

// float_exprs.wast:210
assert_return(() => call($15, "f64.no_fold_sub_self", [float64(9_218_868_437_227_405_312n)]), NaN);

// float_exprs.wast:211
assert_return(() => call($15, "f64.no_fold_sub_self", [float64(9_221_120_237_041_090_560n)]), NaN);

// float_exprs.wast:215
let $16 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x65\x6c\x66\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x65\x6c\x66\x00\x01\x0a\x99\x80\x80\x80\x00\x02\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\x95\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa3\x0b");

// float_exprs.wast:222
assert_return(() => call($16, "f32.no_fold_div_self", [float32(2_139_095_040)]), NaN);

// float_exprs.wast:223
assert_return(() => call($16, "f32.no_fold_div_self", [float32(2_143_289_344)]), NaN);

// float_exprs.wast:224
assert_return(() => call($16, "f32.no_fold_div_self", [float32(0)]), NaN);

// float_exprs.wast:225
assert_return(() => call($16, "f32.no_fold_div_self", [float32(-2_147_483_648)]), NaN);

// float_exprs.wast:226
assert_return(() => call($16, "f64.no_fold_div_self", [float64(9_218_868_437_227_405_312n)]), NaN);

// float_exprs.wast:227
assert_return(() => call($16, "f64.no_fold_div_self", [float64(9_221_120_237_041_090_560n)]), NaN);

// float_exprs.wast:228
assert_return(() => call($16, "f64.no_fold_div_self", [float64(0n)]), NaN);

// float_exprs.wast:229
assert_return(() => call($16, "f64.no_fold_div_self", [float64(-9_223_372_036_854_775_808n)]), NaN);

// float_exprs.wast:233
let $17 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa9\x80\x80\x80\x00\x02\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x33\x00\x00\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x33\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x40\x40\x95\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x08\x40\xa3\x0b");

// float_exprs.wast:240
assert_return(() => call($17, "f32.no_fold_div_3", [float32(-660_943_341)]), float32(-674_338_791));

// float_exprs.wast:241
assert_return(() => call($17, "f32.no_fold_div_3", [float32(-294_507_741)]), float32(-308_186_601));

// float_exprs.wast:242
assert_return(() => call($17, "f32.no_fold_div_3", [float32(-1_777_001_333)]), float32(-1_790_521_159));

// float_exprs.wast:243
assert_return(() => call($17, "f32.no_fold_div_3", [float32(-2_121_284_196)]), float32(-2_134_920_667));

// float_exprs.wast:244
assert_return(() => call($17, "f32.no_fold_div_3", [float32(-1_544_869_966)]), float32(-1_558_395_615));

// float_exprs.wast:245
assert_return(() => call($17, "f64.no_fold_div_3", [float64(-1_766_947_583_535_731_517n)]), float64(-1_773_941_406_379_183_315n));

// float_exprs.wast:246
assert_return(() => call($17, "f64.no_fold_div_3", [float64(-5_364_966_576_286_791_310n)]), float64(-5_372_079_435_636_231_945n));

// float_exprs.wast:247
assert_return(() => call($17, "f64.no_fold_div_3", [float64(674_365_394_458_900_388n)]), float64(667_250_911_628_840_899n));

// float_exprs.wast:248
assert_return(() => call($17, "f64.no_fold_div_3", [float64(-81_043_301_457_681_092n)]), float64(-88_542_136_891_635_973n));

// float_exprs.wast:249
assert_return(() => call($17, "f64.no_fold_div_3", [float64(6_476_267_216_527_259_981n)]), float64(6_468_791_534_604_471_399n));

// float_exprs.wast:253
let $18 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa1\x80\x80\x80\x00\x02\x0d\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x61\x63\x74\x6f\x72\x00\x00\x0d\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x61\x63\x74\x6f\x72\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\x94\x20\x01\x20\x02\x94\x92\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\xa2\x20\x01\x20\x02\xa2\xa0\x0b");

// float_exprs.wast:260
assert_return(() => call($18, "f32.no_factor", [float32(-744_025_687), float32(-666_757_354), float32(1_568_101_121)]), float32(-163_851_288));

// float_exprs.wast:261
assert_return(() => call($18, "f32.no_factor", [float32(-1_126_534_149), float32(1_028_017_286), float32(-1_153_931_775)]), float32(-1_199_550_047));

// float_exprs.wast:262
assert_return(() => call($18, "f32.no_factor", [float32(-1_425_852_137), float32(536_308_199), float32(2_100_177_580)]), float32(-390_951_593));

// float_exprs.wast:263
assert_return(() => call($18, "f32.no_factor", [float32(-1_610_849_454), float32(369_386_499), float32(2_061_166_438)]), float32(-615_001_944));

// float_exprs.wast:264
assert_return(() => call($18, "f32.no_factor", [float32(-1_784_851_185), float32(476_277_495), float32(1_237_750_930)]), float32(649_094_375));

// float_exprs.wast:265
assert_return(() => call($18, "f64.no_factor", [float64(2_698_691_837_980_592_503n), float64(2_529_920_934_327_896_545n), float64(-5_626_960_660_458_092_680n)]), float64(-7_534_867_394_305_950_950n));

// float_exprs.wast:266
assert_return(() => call($18, "f64.no_factor", [float64(1_626_864_102_540_432_200n), float64(-9_158_914_452_819_881_929n), float64(-8_922_243_885_936_382_144n)]), float64(0n));

// float_exprs.wast:267
assert_return(() => call($18, "f64.no_factor", [float64(-6_120_263_304_654_589_871n), float64(-5_883_197_619_972_387_690n), float64(-2_456_224_087_833_810_579n)]), float64(5_500_432_744_005_058_080n));

// float_exprs.wast:268
assert_return(() => call($18, "f64.no_factor", [float64(-5_914_266_528_854_379_639n), float64(3_439_526_350_000_314_825n), float64(-5_752_202_825_328_819_707n)]), float64(-6_919_708_613_436_968_572n));

// float_exprs.wast:269
assert_return(() => call($18, "f64.no_factor", [float64(1_871_759_566_187_673_434n), float64(2_002_968_319_587_025_494n), float64(-2_413_541_983_829_270_536n)]), float64(-5_017_466_175_740_268_717n));

// float_exprs.wast:273
let $19 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa9\x80\x80\x80\x00\x02\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x64\x69\x73\x74\x72\x69\x62\x75\x74\x65\x00\x00\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x64\x69\x73\x74\x72\x69\x62\x75\x74\x65\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x92\x20\x02\x94\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa0\x20\x02\xa2\x0b");

// float_exprs.wast:280
assert_return(() => call($19, "f32.no_distribute", [float32(-744_025_687), float32(-666_757_354), float32(1_568_101_121)]), float32(-163_851_287));

// float_exprs.wast:281
assert_return(() => call($19, "f32.no_distribute", [float32(-1_126_534_149), float32(1_028_017_286), float32(-1_153_931_775)]), float32(-1_199_550_048));

// float_exprs.wast:282
assert_return(() => call($19, "f32.no_distribute", [float32(-1_425_852_137), float32(536_308_199), float32(2_100_177_580)]), float32(-390_951_592));

// float_exprs.wast:283
assert_return(() => call($19, "f32.no_distribute", [float32(-1_610_849_454), float32(369_386_499), float32(2_061_166_438)]), float32(-615_001_945));

// float_exprs.wast:284
assert_return(() => call($19, "f32.no_distribute", [float32(-1_784_851_185), float32(476_277_495), float32(1_237_750_930)]), float32(649_094_374));

// float_exprs.wast:285
assert_return(() => call($19, "f64.no_distribute", [float64(2_698_691_837_980_592_503n), float64(2_529_920_934_327_896_545n), float64(-5_626_960_660_458_092_680n)]), float64(-7_534_867_394_305_950_949n));

// float_exprs.wast:286
assert_return(() => call($19, "f64.no_distribute", [float64(1_626_864_102_540_432_200n), float64(-9_158_914_452_819_881_929n), float64(-8_922_243_885_936_382_144n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:287
assert_return(() => call($19, "f64.no_distribute", [float64(-6_120_263_304_654_589_871n), float64(-5_883_197_619_972_387_690n), float64(-2_456_224_087_833_810_579n)]), float64(5_500_432_744_005_058_079n));

// float_exprs.wast:288
assert_return(() => call($19, "f64.no_distribute", [float64(-5_914_266_528_854_379_639n), float64(3_439_526_350_000_314_825n), float64(-5_752_202_825_328_819_707n)]), float64(-6_919_708_613_436_968_573n));

// float_exprs.wast:289
assert_return(() => call($19, "f64.no_distribute", [float64(1_871_759_566_187_673_434n), float64(2_002_968_319_587_025_494n), float64(-2_413_541_983_829_270_536n)]), float64(-5_017_466_175_740_268_718n));

// float_exprs.wast:293
let $20 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb3\x80\x80\x80\x00\x02\x16\x66\x33\x32\x2e\x6e\x6f\x5f\x72\x65\x67\x72\x6f\x75\x70\x5f\x64\x69\x76\x5f\x6d\x75\x6c\x00\x00\x16\x66\x36\x34\x2e\x6e\x6f\x5f\x72\x65\x67\x72\x6f\x75\x70\x5f\x64\x69\x76\x5f\x6d\x75\x6c\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\x95\x94\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\xa3\xa2\x0b");

// float_exprs.wast:300
assert_return(() => call($20, "f32.no_regroup_div_mul", [float32(-2_045_343_149), float32(-1_616_138_954), float32(95_319_815)]), float32(538_190_437));

// float_exprs.wast:301
assert_return(() => call($20, "f32.no_regroup_div_mul", [float32(-316_496_996), float32(-2_040_969_933), float32(-470_115_196)]), float32(-2_147_483_648));

// float_exprs.wast:302
assert_return(() => call($20, "f32.no_regroup_div_mul", [float32(-944_377_161), float32(-1_252_378_653), float32(-2_108_518_661)]), float32(-88_305_364));

// float_exprs.wast:303
assert_return(() => call($20, "f32.no_regroup_div_mul", [float32(-1_864_261_124), float32(1_685_220_483), float32(1_642_018_044)]), float32(-1_821_044_999));

// float_exprs.wast:304
assert_return(() => call($20, "f32.no_regroup_div_mul", [float32(2_011_387_707), float32(1_274_956_446), float32(-483_370_508)]), float32(-526_129_035));

// float_exprs.wast:305
assert_return(() => call($20, "f64.no_regroup_div_mul", [float64(2_703_215_631_877_943_472n), float64(-5_151_140_076_501_499_609n), float64(1_719_211_436_532_588_593n)]), float64(-4_167_066_386_822_931_155n));

// float_exprs.wast:306
assert_return(() => call($20, "f64.no_regroup_div_mul", [float64(6_126_139_291_059_848_917n), float64(2_596_039_250_849_921_421n), float64(-1_023_485_413_989_651_962n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:307
assert_return(() => call($20, "f64.no_regroup_div_mul", [float64(2_451_868_557_331_674_239n), float64(8_672_326_445_062_988_097n), float64(2_593_279_393_835_739_385n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:308
assert_return(() => call($20, "f64.no_regroup_div_mul", [float64(-2_452_484_865_509_704_078n), float64(-1_862_587_910_363_475_939n), float64(-849_820_166_470_681_186n)]), float64(-3_465_195_582_083_250_607n));

// float_exprs.wast:309
assert_return(() => call($20, "f64.no_regroup_div_mul", [float64(1_912_002_771_029_783_751n), float64(655_387_110_450_354_003n), float64(-8_385_997_883_570_788_775n)]), float64(-7_492_989_954_685_663_536n));

// float_exprs.wast:313
let $21 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb3\x80\x80\x80\x00\x02\x16\x66\x33\x32\x2e\x6e\x6f\x5f\x72\x65\x67\x72\x6f\x75\x70\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x00\x00\x16\x66\x36\x34\x2e\x6e\x6f\x5f\x72\x65\x67\x72\x6f\x75\x70\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x02\x95\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa3\x0b");

// float_exprs.wast:320
assert_return(() => call($21, "f32.no_regroup_mul_div", [float32(-2_045_343_149), float32(-1_616_138_954), float32(95_319_815)]), float32(0));

// float_exprs.wast:321
assert_return(() => call($21, "f32.no_regroup_mul_div", [float32(-316_496_996), float32(-2_040_969_933), float32(-470_115_196)]), float32(-1_886_584_716));

// float_exprs.wast:322
assert_return(() => call($21, "f32.no_regroup_mul_div", [float32(-944_377_161), float32(-1_252_378_653), float32(-2_108_518_661)]), float32(-88_305_363));

// float_exprs.wast:323
assert_return(() => call($21, "f32.no_regroup_mul_div", [float32(-1_864_261_124), float32(1_685_220_483), float32(1_642_018_044)]), float32(-1_821_044_998));

// float_exprs.wast:324
assert_return(() => call($21, "f32.no_regroup_mul_div", [float32(2_011_387_707), float32(1_274_956_446), float32(-483_370_508)]), float32(-8_388_608));

// float_exprs.wast:325
assert_return(() => call($21, "f64.no_regroup_mul_div", [float64(2_703_215_631_877_943_472n), float64(-5_151_140_076_501_499_609n), float64(1_719_211_436_532_588_593n)]), float64(-4_167_066_386_822_931_154n));

// float_exprs.wast:326
assert_return(() => call($21, "f64.no_regroup_mul_div", [float64(6_126_139_291_059_848_917n), float64(2_596_039_250_849_921_421n), float64(-1_023_485_413_989_651_962n)]), float64(-8_700_714_737_636_679_536n));

// float_exprs.wast:327
assert_return(() => call($21, "f64.no_regroup_mul_div", [float64(2_451_868_557_331_674_239n), float64(8_672_326_445_062_988_097n), float64(2_593_279_393_835_739_385n)]), float64(8_531_093_589_128_288_889n));

// float_exprs.wast:328
assert_return(() => call($21, "f64.no_regroup_mul_div", [float64(-2_452_484_865_509_704_078n), float64(-1_862_587_910_363_475_939n), float64(-849_820_166_470_681_186n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:329
assert_return(() => call($21, "f64.no_regroup_mul_div", [float64(1_912_002_771_029_783_751n), float64(655_387_110_450_354_003n), float64(-8_385_997_883_570_788_775n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:333
let $22 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x91\x80\x80\x80\x00\x02\x60\x04\x7d\x7d\x7d\x7d\x01\x7d\x60\x04\x7c\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb3\x80\x80\x80\x00\x02\x16\x66\x33\x32\x2e\x6e\x6f\x5f\x72\x65\x61\x73\x73\x6f\x63\x69\x61\x74\x65\x5f\x61\x64\x64\x00\x00\x16\x66\x36\x34\x2e\x6e\x6f\x5f\x72\x65\x61\x73\x73\x6f\x63\x69\x61\x74\x65\x5f\x61\x64\x64\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x92\x20\x02\x92\x20\x03\x92\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa0\x20\x02\xa0\x20\x03\xa0\x0b");

// float_exprs.wast:340
assert_return(() => call($22, "f32.no_reassociate_add", [float32(-709_902_610), float32(1_354_934_024), float32(-682_032_314), float32(-737_129_655)]), float32(-680_446_405));

// float_exprs.wast:341
assert_return(() => call($22, "f32.no_reassociate_add", [float32(997_006_780), float32(-1_138_652_803), float32(1_031_916_275), float32(-1_137_266_861)]), float32(1_027_365_261));

// float_exprs.wast:342
assert_return(() => call($22, "f32.no_reassociate_add", [float32(-788_603_747), float32(-732_201_357), float32(1_440_782_572), float32(1_388_583_643)]), float32(1_439_168_977));

// float_exprs.wast:343
assert_return(() => call($22, "f32.no_reassociate_add", [float32(1_460_378_878), float32(1_481_791_683), float32(-788_123_362), float32(1_493_913_729)]), float32(1_497_931_771));

// float_exprs.wast:344
assert_return(() => call($22, "f32.no_reassociate_add", [float32(1_975_099_005), float32(-174_298_746), float32(1_947_708_458), float32(-286_894_036)]), float32(1_958_779_787));

// float_exprs.wast:345
assert_return(() => call($22, "f64.no_reassociate_add", [float64(-826_806_747_288_102_490n), float64(8_424_880_666_975_634_327n), float64(8_461_713_040_394_112_626n), float64(-754_667_450_822_621_509n)]), float64(-756_973_187_284_137_862n));

// float_exprs.wast:346
assert_return(() => call($22, "f64.no_reassociate_add", [float64(2_161_744_272_815_763_681n), float64(2_160_815_018_984_030_177n), float64(-7_057_291_082_228_380_762n), float64(-7_288_189_337_951_677_689n)]), float64(-7_079_530_481_691_153_034n));

// float_exprs.wast:347
assert_return(() => call($22, "f64.no_reassociate_add", [float64(-2_630_523_865_564_522_412n), float64(6_443_786_499_090_728_432n), float64(-2_648_104_800_314_186_431n), float64(6_395_820_899_158_300_605n)]), float64(-2_630_030_812_711_980_565n));

// float_exprs.wast:348
assert_return(() => call($22, "f64.no_reassociate_add", [float64(-6_040_555_568_536_869_886n), float64(3_227_622_722_685_619_614n), float64(-5_793_534_931_422_473_631n), float64(3_439_058_911_346_459_774n)]), float64(3_437_283_564_188_778_523n));

// float_exprs.wast:349
assert_return(() => call($22, "f64.no_reassociate_add", [float64(-1_725_780_684_694_160_611n), float64(-1_849_651_500_741_000_636n), float64(7_518_944_085_377_596_897n), float64(-1_713_336_316_889_353_086n)]), float64(7_516_931_113_564_586_278n));

// float_exprs.wast:353
let $23 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x91\x80\x80\x80\x00\x02\x60\x04\x7d\x7d\x7d\x7d\x01\x7d\x60\x04\x7c\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb3\x80\x80\x80\x00\x02\x16\x66\x33\x32\x2e\x6e\x6f\x5f\x72\x65\x61\x73\x73\x6f\x63\x69\x61\x74\x65\x5f\x6d\x75\x6c\x00\x00\x16\x66\x36\x34\x2e\x6e\x6f\x5f\x72\x65\x61\x73\x73\x6f\x63\x69\x61\x74\x65\x5f\x6d\x75\x6c\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x02\x94\x20\x03\x94\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa2\x20\x03\xa2\x0b");

// float_exprs.wast:360
assert_return(() => call($23, "f32.no_reassociate_mul", [float32(97_158_612), float32(796_388_711), float32(-223_359_520), float32(603_464_324)]), float32(-1_921_017_161));

// float_exprs.wast:361
assert_return(() => call($23, "f32.no_reassociate_mul", [float32(598_526_039), float32(-222_364_286), float32(-2_128_102_491), float32(-491_999_245)]), float32(-1_142_692_738));

// float_exprs.wast:362
assert_return(() => call($23, "f32.no_reassociate_mul", [float32(666_201_298), float32(-615_998_379), float32(-1_415_234_649), float32(1_703_934_016)]), float32(1_439_591_542));

// float_exprs.wast:363
assert_return(() => call($23, "f32.no_reassociate_mul", [float32(191_948_150), float32(1_717_012_201), float32(-612_321_424), float32(-581_584_789)]), float32(1_814_709_127));

// float_exprs.wast:364
assert_return(() => call($23, "f32.no_reassociate_mul", [float32(-1_910_665_504), float32(656_878_874), float32(-1_055_105_747), float32(1_564_466_295)]), float32(355_327_948));

// float_exprs.wast:365
assert_return(() => call($23, "f64.no_reassociate_mul", [float64(-7_616_017_692_097_412_864n), float64(-153_214_797_629_960_529n), float64(-6_309_081_787_681_558_502n), float64(-1_625_097_364_418_481_841n)]), float64(7_368_793_799_369_880_819n));

// float_exprs.wast:366
assert_return(() => call($23, "f64.no_reassociate_mul", [float64(6_653_164_799_371_160_764n), float64(2_285_295_038_358_358_170n), float64(-8_663_439_404_559_279_213n), float64(-2_180_738_987_718_048_907n)]), float64(2_720_645_287_366_687_760n));

// float_exprs.wast:367
assert_return(() => call($23, "f64.no_reassociate_mul", [float64(2_352_911_459_797_566_465n), float64(-1_066_870_916_347_088_473n), float64(1_179_129_869_275_935_356n), float64(-4_218_345_959_961_701_265n)]), float64(2_873_103_656_912_958_703n));

// float_exprs.wast:368
assert_return(() => call($23, "f64.no_reassociate_mul", [float64(7_724_499_817_746_503_804n), float64(2_704_005_046_640_722_176n), float64(5_612_860_422_806_321_751n), float64(-4_718_925_978_160_827_525n)]), float64(-2_498_175_395_248_737_524n));

// float_exprs.wast:369
assert_return(() => call($23, "f64.no_reassociate_mul", [float64(3_553_622_953_022_765_407n), float64(1_044_040_287_824_900_408n), float64(-1_333_981_279_189_042_179n), float64(-7_312_648_587_269_405_843n)]), float64(576_919_682_754_813_073n));

// float_exprs.wast:373
let $24 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa9\x80\x80\x80\x00\x02\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x30\x00\x00\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x30\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x00\x95\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\xa3\x0b");

// float_exprs.wast:380
assert_return(() => call($24, "f32.no_fold_div_0", [float32(1_065_353_216)]), float32(2_139_095_040));

// float_exprs.wast:381
assert_return(() => call($24, "f32.no_fold_div_0", [float32(-1_082_130_432)]), float32(-8_388_608));

// float_exprs.wast:382
assert_return(() => call($24, "f32.no_fold_div_0", [float32(2_139_095_040)]), float32(2_139_095_040));

// float_exprs.wast:383
assert_return(() => call($24, "f32.no_fold_div_0", [float32(-8_388_608)]), float32(-8_388_608));

// float_exprs.wast:384
assert_return(() => call($24, "f32.no_fold_div_0", [float32(0)]), NaN);

// float_exprs.wast:385
assert_return(() => call($24, "f32.no_fold_div_0", [float32(-2_147_483_648)]), NaN);

// float_exprs.wast:386
assert_return(() => call($24, "f32.no_fold_div_0", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:387
assert_return(() => call($24, "f32.no_fold_div_0", [float32(2_143_289_344)]), NaN);

// float_exprs.wast:388
assert_return(() => call($24, "f64.no_fold_div_0", [float64(4_607_182_418_800_017_408n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:389
assert_return(() => call($24, "f64.no_fold_div_0", [float64(-4_616_189_618_054_758_400n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:390
assert_return(() => call($24, "f64.no_fold_div_0", [float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:391
assert_return(() => call($24, "f64.no_fold_div_0", [float64(-4_503_599_627_370_496n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:392
assert_return(() => call($24, "f64.no_fold_div_0", [float64(0n)]), NaN);

// float_exprs.wast:393
assert_return(() => call($24, "f64.no_fold_div_0", [float64(-9_223_372_036_854_775_808n)]), NaN);

// float_exprs.wast:394
assert_return(() => call($24, "f64.no_fold_div_0", [float64(9_221_120_237_041_090_560n)]), NaN);

// float_exprs.wast:395
assert_return(() => call($24, "f64.no_fold_div_0", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:399
let $25 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x30\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x30\x00\x01\x0a\xa3\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x80\x95\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\xa3\x0b");

// float_exprs.wast:406
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(1_065_353_216)]), float32(-8_388_608));

// float_exprs.wast:407
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(-1_082_130_432)]), float32(2_139_095_040));

// float_exprs.wast:408
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(2_139_095_040)]), float32(-8_388_608));

// float_exprs.wast:409
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(-8_388_608)]), float32(2_139_095_040));

// float_exprs.wast:410
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(0)]), NaN);

// float_exprs.wast:411
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(-2_147_483_648)]), NaN);

// float_exprs.wast:412
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:413
assert_return(() => call($25, "f32.no_fold_div_neg0", [float32(2_143_289_344)]), NaN);

// float_exprs.wast:414
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(4_607_182_418_800_017_408n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:415
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(-4_616_189_618_054_758_400n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:416
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(9_218_868_437_227_405_312n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:417
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(-4_503_599_627_370_496n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:418
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(0n)]), NaN);

// float_exprs.wast:419
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(-9_223_372_036_854_775_808n)]), NaN);

// float_exprs.wast:420
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(9_221_120_237_041_090_560n)]), NaN);

// float_exprs.wast:421
assert_return(() => call($25, "f64.no_fold_div_neg0", [float64(9_219_994_337_134_247_936n)]), NaN);

// float_exprs.wast:425
let $26 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x6f\x5f\x68\x79\x70\x6f\x74\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x6f\x5f\x68\x79\x70\x6f\x74\x00\x01\x0a\xa7\x80\x80\x80\x00\x02\x8e\x80\x80\x80\x00\x00\x20\x00\x20\x00\x94\x20\x01\x20\x01\x94\x92\x91\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa2\x20\x01\x20\x01\xa2\xa0\x9f\x0b");

// float_exprs.wast:434
assert_return(() => call($26, "f32.no_fold_to_hypot", [float32(392_264_092), float32(497_028_527)]), float32(497_028_710));

// float_exprs.wast:435
assert_return(() => call($26, "f32.no_fold_to_hypot", [float32(-1_671_313_784), float32(-1_977_954_584)]), float32(476_165_425));

// float_exprs.wast:436
assert_return(() => call($26, "f32.no_fold_to_hypot", [float32(-2_033_389_467), float32(-1_653_176_778)]), float32(494_307_108));

// float_exprs.wast:437
assert_return(() => call($26, "f32.no_fold_to_hypot", [float32(-1_039_288_715), float32(1_210_720_351)]), float32(1_210_720_352));

// float_exprs.wast:438
assert_return(() => call($26, "f32.no_fold_to_hypot", [float32(432_505_039), float32(-1_676_930_684)]), float32(470_544_734));

// float_exprs.wast:439
assert_return(() => call($26, "f64.no_fold_to_hypot", [float64(1_743_351_192_697_472_785n), float64(2_202_602_366_606_243_153n)]), float64(2_202_599_296_765_198_670n));

// float_exprs.wast:440
assert_return(() => call($26, "f64.no_fold_to_hypot", [float64(6_389_333_765_198_869_657n), float64(-2_769_400_700_689_494_986n)]), float64(6_453_971_336_171_062_178n));

// float_exprs.wast:441
assert_return(() => call($26, "f64.no_fold_to_hypot", [float64(2_195_337_108_264_055_819n), float64(-8_062_507_012_164_149_328n)]), float64(2_195_504_818_343_116_800n));

// float_exprs.wast:442
assert_return(() => call($26, "f64.no_fold_to_hypot", [float64(-6_960_161_850_347_721_891n), float64(1_308_532_122_426_122_043n)]), float64(2_263_210_186_506_929_210n));

// float_exprs.wast:443
assert_return(() => call($26, "f64.no_fold_to_hypot", [float64(1_591_440_107_418_864_392n), float64(-6_930_937_699_322_242_580n)]), float64(2_292_434_337_532_533_215n));

// float_exprs.wast:447
let $27 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7d\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\xa1\x80\x80\x80\x00\x01\x1d\x66\x33\x32\x2e\x6e\x6f\x5f\x61\x70\x70\x72\x6f\x78\x69\x6d\x61\x74\x65\x5f\x72\x65\x63\x69\x70\x72\x6f\x63\x61\x6c\x00\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\x20\x00\x95\x0b");

// float_exprs.wast:452
assert_return(() => call($27, "f32.no_approximate_reciprocal", [float32(-1_164_672_933)]), float32(-1_000_560_534));

// float_exprs.wast:453
assert_return(() => call($27, "f32.no_approximate_reciprocal", [float32(2_138_280_080)]), float32(2_204_223));

// float_exprs.wast:454
assert_return(() => call($27, "f32.no_approximate_reciprocal", [float32(-1_860_087_245)]), float32(-305_455_245));

// float_exprs.wast:455
assert_return(() => call($27, "f32.no_approximate_reciprocal", [float32(1_705_936_409)]), float32(423_346_609));

// float_exprs.wast:456
assert_return(() => call($27, "f32.no_approximate_reciprocal", [float32(-1_766_846_735)]), float32(-398_844_225));

// float_exprs.wast:460
let $28 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xc4\x80\x80\x80\x00\x02\x22\x66\x33\x32\x2e\x6e\x6f\x5f\x61\x70\x70\x72\x6f\x78\x69\x6d\x61\x74\x65\x5f\x72\x65\x63\x69\x70\x72\x6f\x63\x61\x6c\x5f\x73\x71\x72\x74\x00\x00\x1b\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x75\x73\x65\x5f\x72\x65\x63\x69\x70\x72\x6f\x63\x61\x6c\x5f\x73\x71\x72\x74\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8b\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\x20\x00\x91\x95\x0b\x8f\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x20\x00\x9f\xa3\x0b");

// float_exprs.wast:467
assert_return(() => call($28, "f32.no_approximate_reciprocal_sqrt", [float32(708_147_349)]), float32(1_243_088_746));

// float_exprs.wast:468
assert_return(() => call($28, "f32.no_approximate_reciprocal_sqrt", [float32(1_005_852_643)]), float32(1_094_279_611));

// float_exprs.wast:469
assert_return(() => call($28, "f32.no_approximate_reciprocal_sqrt", [float32(517_799_246)]), float32(1_338_168_541));

// float_exprs.wast:470
assert_return(() => call($28, "f32.no_approximate_reciprocal_sqrt", [float32(704_281_251)]), float32(1_245_118_689));

// float_exprs.wast:471
assert_return(() => call($28, "f32.no_approximate_reciprocal_sqrt", [float32(347_001_813)]), float32(1_423_641_701));

// float_exprs.wast:473
assert_return(() => call($28, "f64.no_fuse_reciprocal_sqrt", [float64(8_611_259_114_887_405_475n)]), float64(2_604_695_339_663_988_000n));

// float_exprs.wast:474
assert_return(() => call($28, "f64.no_fuse_reciprocal_sqrt", [float64(6_008_428_610_859_539_631n)]), float64(3_906_084_647_186_679_832n));

// float_exprs.wast:475
assert_return(() => call($28, "f64.no_fuse_reciprocal_sqrt", [float64(5_077_495_674_931_581_012n)]), float64(4_371_518_865_190_387_497n));

// float_exprs.wast:476
assert_return(() => call($28, "f64.no_fuse_reciprocal_sqrt", [float64(7_616_219_057_857_077_123n)]), float64(3_102_407_657_946_187_309n));

// float_exprs.wast:477
assert_return(() => call($28, "f64.no_fuse_reciprocal_sqrt", [float64(5_267_858_027_841_559_467n)]), float64(4_276_321_761_661_248_681n));

// float_exprs.wast:481
let $29 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7d\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\xa6\x80\x80\x80\x00\x01\x22\x66\x33\x32\x2e\x6e\x6f\x5f\x61\x70\x70\x72\x6f\x78\x69\x6d\x61\x74\x65\x5f\x73\x71\x72\x74\x5f\x72\x65\x63\x69\x70\x72\x6f\x63\x61\x6c\x00\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\x20\x00\x95\x91\x0b");

// float_exprs.wast:486
assert_return(() => call($29, "f32.no_approximate_sqrt_reciprocal", [float32(1_574_069_443)]), float32(810_003_811));

// float_exprs.wast:487
assert_return(() => call($29, "f32.no_approximate_sqrt_reciprocal", [float32(992_487_567)]), float32(1_100_869_283));

// float_exprs.wast:488
assert_return(() => call($29, "f32.no_approximate_sqrt_reciprocal", [float32(1_644_769_121)]), float32(774_822_585));

// float_exprs.wast:489
assert_return(() => call($29, "f32.no_approximate_sqrt_reciprocal", [float32(1_180_509_736)]), float32(1_007_269_771));

// float_exprs.wast:490
assert_return(() => call($29, "f32.no_approximate_sqrt_reciprocal", [float32(1_940_205_041)]), float32(627_137_240));

// float_exprs.wast:494
let $30 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xd1\x80\x80\x80\x00\x04\x11\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x66\x33\x32\x5f\x73\x00\x00\x11\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x66\x33\x32\x5f\x75\x00\x01\x11\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x66\x36\x34\x5f\x73\x00\x02\x11\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x66\x36\x34\x5f\x75\x00\x03\x0a\xad\x80\x80\x80\x00\x04\x86\x80\x80\x80\x00\x00\x20\x00\xb2\xa8\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb3\xa9\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb9\xb0\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xba\xb1\x0b");

// float_exprs.wast:505
assert_return(() => call($30, "i32.no_fold_f32_s", [16_777_216]), 16_777_216);

// float_exprs.wast:506
assert_return(() => call($30, "i32.no_fold_f32_s", [16_777_217]), 16_777_216);

// float_exprs.wast:507
assert_return(() => call($30, "i32.no_fold_f32_s", [-268_435_440]), -268_435_440);

// float_exprs.wast:509
assert_return(() => call($30, "i32.no_fold_f32_u", [16_777_216]), 16_777_216);

// float_exprs.wast:510
assert_return(() => call($30, "i32.no_fold_f32_u", [16_777_217]), 16_777_216);

// float_exprs.wast:511
assert_return(() => call($30, "i32.no_fold_f32_u", [-268_435_440]), -268_435_456);

// float_exprs.wast:513
assert_return(() => call($30, "i64.no_fold_f64_s", [9_007_199_254_740_992n]), 9_007_199_254_740_992n);

// float_exprs.wast:514
assert_return(() => call($30, "i64.no_fold_f64_s", [9_007_199_254_740_993n]), 9_007_199_254_740_992n);

// float_exprs.wast:515
assert_return(() => call($30, "i64.no_fold_f64_s", [-1_152_921_504_606_845_952n]), -1_152_921_504_606_845_952n);

// float_exprs.wast:517
assert_return(() => call($30, "i64.no_fold_f64_u", [9_007_199_254_740_992n]), 9_007_199_254_740_992n);

// float_exprs.wast:518
assert_return(() => call($30, "i64.no_fold_f64_u", [9_007_199_254_740_993n]), 9_007_199_254_740_992n);

// float_exprs.wast:519
assert_return(() => call($30, "i64.no_fold_f64_u", [-1_152_921_504_606_845_952n]), -1_152_921_504_606_846_976n);

// float_exprs.wast:523
let $31 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x73\x75\x62\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x73\x75\x62\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x92\x20\x01\x93\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa0\x20\x01\xa1\x0b");

// float_exprs.wast:530
assert_return(() => call($31, "f32.no_fold_add_sub", [float32(677_030_386), float32(-1_296_831_082)]), float32(677_380_096));

// float_exprs.wast:531
assert_return(() => call($31, "f32.no_fold_add_sub", [float32(-1_269_546_392), float32(913_921_807)]), float32(-1_269_546_384));

// float_exprs.wast:532
assert_return(() => call($31, "f32.no_fold_add_sub", [float32(-386_006_408), float32(-231_563_235)]), float32(-385_875_968));

// float_exprs.wast:533
assert_return(() => call($31, "f32.no_fold_add_sub", [float32(415_467_473), float32(602_055_819)]), float32(415_236_096));

// float_exprs.wast:534
assert_return(() => call($31, "f32.no_fold_add_sub", [float32(-1_987_316_557), float32(-1_783_639_283)]), float32(-1_979_711_488));

// float_exprs.wast:536
assert_return(() => call($31, "f64.no_fold_add_sub", [float64(-8_552_048_450_845_090_904n), float64(747_900_745_977_727_688n)]), float64(-8_552_048_450_845_147_136n));

// float_exprs.wast:537
assert_return(() => call($31, "f64.no_fold_add_sub", [float64(2_152_218_683_357_821_298n), float64(2_238_360_073_507_307_376n)]), float64(2_152_218_683_357_790_208n));

// float_exprs.wast:538
assert_return(() => call($31, "f64.no_fold_add_sub", [float64(-4_749_222_468_503_049_374n), float64(-4_627_893_818_696_389_707n)]), float64(-4_749_222_468_462_313_472n));

// float_exprs.wast:539
assert_return(() => call($31, "f64.no_fold_add_sub", [float64(-6_148_463_456_472_059_232n), float64(3_233_965_342_858_558_382n)]), float64(-6_148_463_456_245_776_384n));

// float_exprs.wast:540
assert_return(() => call($31, "f64.no_fold_add_sub", [float64(-7_403_445_777_580_867_928n), float64(-7_263_886_728_214_344_024n)]), float64(-7_403_445_776_933_715_968n));

// float_exprs.wast:544
let $32 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x61\x64\x64\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x61\x64\x64\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x93\x20\x01\x92\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa1\x20\x01\xa0\x0b");

// float_exprs.wast:551
assert_return(() => call($32, "f32.no_fold_sub_add", [float32(-1_003_938_212), float32(1_137_280_182)]), float32(-1_003_938_211));

// float_exprs.wast:552
assert_return(() => call($32, "f32.no_fold_sub_add", [float32(-2_007_921_400), float32(272_248_696)]), float32(-2_007_891_968));

// float_exprs.wast:553
assert_return(() => call($32, "f32.no_fold_sub_add", [float32(1_285_466_516), float32(1_361_849_144)]), float32(1_285_466_624));

// float_exprs.wast:554
assert_return(() => call($32, "f32.no_fold_sub_add", [float32(740_009_747), float32(-1_305_259_392)]), float32(740_007_936));

// float_exprs.wast:555
assert_return(() => call($32, "f32.no_fold_sub_add", [float32(1_041_827_798), float32(-959_052_979)]), float32(1_041_891_328));

// float_exprs.wast:557
assert_return(() => call($32, "f64.no_fold_sub_add", [float64(5_758_126_085_282_503_565n), float64(-3_449_602_469_835_675_957n)]), float64(5_758_126_085_282_503_568n));

// float_exprs.wast:558
assert_return(() => call($32, "f64.no_fold_sub_add", [float64(1_609_380_455_481_879_691n), float64(1_695_875_689_930_159_213n)]), float64(1_609_380_455_482_130_432n));

// float_exprs.wast:559
assert_return(() => call($32, "f64.no_fold_sub_add", [float64(5_738_179_408_840_599_949n), float64(-3_260_658_929_806_538_620n)]), float64(5_738_148_875_223_433_216n));

// float_exprs.wast:560
assert_return(() => call($32, "f64.no_fold_sub_add", [float64(4_492_841_470_376_833_908n), float64(-4_672_874_484_943_960_548n)]), float64(4_492_841_470_376_837_120n));

// float_exprs.wast:561
assert_return(() => call($32, "f64.no_fold_sub_add", [float64(2_955_729_038_738_127_538n), float64(-6_238_116_267_044_516_606n)]), float64(2_955_729_038_738_127_552n));

// float_exprs.wast:565
let $33 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x01\x95\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x01\xa3\x0b");

// float_exprs.wast:572
assert_return(() => call($33, "f32.no_fold_mul_div", [float32(-622_411_059), float32(674_649_243)]), float32(-622_411_060));

// float_exprs.wast:573
assert_return(() => call($33, "f32.no_fold_mul_div", [float32(-1_299_862_692), float32(178_524_966)]), float32(-1_299_862_702));

// float_exprs.wast:574
assert_return(() => call($33, "f32.no_fold_mul_div", [float32(-1_477_203_282), float32(-674_713_376)]), float32(-1_477_203_283));

// float_exprs.wast:575
assert_return(() => call($33, "f32.no_fold_mul_div", [float32(1_507_152_519), float32(-571_483_697)]), float32(1_507_152_518));

// float_exprs.wast:576
assert_return(() => call($33, "f32.no_fold_mul_div", [float32(-1_852_457_219), float32(-1_388_435_885)]), float32(-1_852_457_217));

// float_exprs.wast:578
assert_return(() => call($33, "f64.no_fold_mul_div", [float64(-8_384_620_999_239_169_510n), float64(-5_536_178_081_712_996_212n)]), float64(-8_384_620_999_239_129_538n));

// float_exprs.wast:579
assert_return(() => call($33, "f64.no_fold_mul_div", [float64(6_340_937_764_684_870_564n), float64(7_244_253_720_027_059_594n)]), float64(6_340_937_764_684_870_565n));

// float_exprs.wast:580
assert_return(() => call($33, "f64.no_fold_mul_div", [float64(-3_541_515_810_299_393_645n), float64(-7_100_492_430_444_818_884n)]), float64(-3_541_515_810_299_393_646n));

// float_exprs.wast:581
assert_return(() => call($33, "f64.no_fold_mul_div", [float64(3_862_352_046_163_709_780n), float64(531_112_307_488_385_734n)]), float64(3_862_079_437_827_029_803n));

// float_exprs.wast:582
assert_return(() => call($33, "f64.no_fold_mul_div", [float64(-1_639_708_379_754_734_380n), float64(-6_086_521_618_844_590_290n)]), float64(-1_639_708_379_754_734_379n));

// float_exprs.wast:586
let $34 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6d\x75\x6c\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6d\x75\x6c\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x95\x20\x01\x94\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x20\x01\xa2\x0b");

// float_exprs.wast:593
assert_return(() => call($34, "f32.no_fold_div_mul", [float32(-756_141_646), float32(1_315_641_462)]), float32(-756_141_647));

// float_exprs.wast:594
assert_return(() => call($34, "f32.no_fold_div_mul", [float32(-1_517_302_757), float32(-1_232_379_278)]), float32(-1_517_302_756));

// float_exprs.wast:595
assert_return(() => call($34, "f32.no_fold_div_mul", [float32(14_863_254), float32(-1_016_384_817)]), float32(14_863_367));

// float_exprs.wast:596
assert_return(() => call($34, "f32.no_fold_div_mul", [float32(-1_701_372_593), float32(-585_458_486)]), float32(-1_701_372_640));

// float_exprs.wast:597
assert_return(() => call($34, "f32.no_fold_div_mul", [float32(250_394_049), float32(1_296_755_844)]), float32(250_394_050));

// float_exprs.wast:599
assert_return(() => call($34, "f64.no_fold_div_mul", [float64(665_690_489_208_775_809n), float64(-3_786_738_909_255_138_492n)]), float64(665_690_577_722_002_880n));

// float_exprs.wast:600
assert_return(() => call($34, "f64.no_fold_div_mul", [float64(-7_829_476_376_322_207_347n), float64(4_370_684_778_829_606_254n)]), float64(-7_829_476_376_322_207_346n));

// float_exprs.wast:601
assert_return(() => call($34, "f64.no_fold_div_mul", [float64(-5_267_407_244_882_125_682n), float64(6_536_345_148_565_138_764n)]), float64(-5_267_407_244_882_125_683n));

// float_exprs.wast:602
assert_return(() => call($34, "f64.no_fold_div_mul", [float64(-5_864_120_448_061_601_947n), float64(-3_339_997_898_812_909_575n)]), float64(-5_864_120_448_061_601_948n));

// float_exprs.wast:603
assert_return(() => call($34, "f64.no_fold_div_mul", [float64(-1_822_526_290_914_484_400n), float64(9_062_205_521_150_975_866n)]), float64(-1_822_526_290_914_484_401n));

// float_exprs.wast:607
let $35 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb1\x80\x80\x80\x00\x02\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x32\x5f\x6d\x75\x6c\x32\x00\x00\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x32\x5f\x6d\x75\x6c\x32\x00\x01\x0a\xb3\x80\x80\x80\x00\x02\x90\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x40\x95\x43\x00\x00\x00\x40\x94\x0b\x98\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x40\xa3\x44\x00\x00\x00\x00\x00\x00\x00\x40\xa2\x0b");

// float_exprs.wast:614
assert_return(() => call($35, "f32.no_fold_div2_mul2", [float32(16_777_215)]), float32(16_777_216));

// float_exprs.wast:615
assert_return(() => call($35, "f64.no_fold_div2_mul2", [float64(9_007_199_254_740_991n)]), float64(9_007_199_254_740_992n));

// float_exprs.wast:619
let $36 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7c\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x07\x9a\x80\x80\x80\x00\x01\x16\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x65\x6d\x6f\x74\x65\x5f\x70\x72\x6f\x6d\x6f\x74\x65\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\xb6\xbb\x0b");

// float_exprs.wast:624
assert_return(() => call($36, "no_fold_demote_promote", [float64(-5_211_248_736_474_689_699n)]), float64(-5_211_248_746_980_966_400n));

// float_exprs.wast:625
assert_return(() => call($36, "no_fold_demote_promote", [float64(-4_998_539_922_671_170_961n)]), float64(-4_998_539_922_563_399_680n));

// float_exprs.wast:626
assert_return(() => call($36, "no_fold_demote_promote", [float64(5_090_364_081_358_261_697n)]), float64(5_090_364_081_378_951_168n));

// float_exprs.wast:627
assert_return(() => call($36, "no_fold_demote_promote", [float64(-5_010_448_804_535_265_744n)]), float64(-5_010_448_804_407_672_832n));

// float_exprs.wast:628
assert_return(() => call($36, "no_fold_demote_promote", [float64(5_076_240_020_598_306_430n)]), float64(5_076_240_020_759_642_112n));

// float_exprs.wast:633
let $37 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7d\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x9a\x80\x80\x80\x00\x01\x16\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x70\x72\x6f\x6d\x6f\x74\x65\x5f\x64\x65\x6d\x6f\x74\x65\x00\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x20\x00\xbb\xb6\x0b");

// float_exprs.wast:638
assert_return(() => call($37, "no_fold_promote_demote", [float32(2_141_192_192)]), NaN);

// float_exprs.wast:639
assert_return(() => call($37, "no_fold_promote_demote", [float32(0)]), float32(0));

// float_exprs.wast:640
assert_return(() => call($37, "no_fold_promote_demote", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:641
assert_return(() => call($37, "no_fold_promote_demote", [float32(1)]), float32(1));

// float_exprs.wast:642
assert_return(() => call($37, "no_fold_promote_demote", [float32(-2_147_483_647)]), float32(-2_147_483_647));

// float_exprs.wast:643
assert_return(() => call($37, "no_fold_promote_demote", [float32(8_388_607)]), float32(8_388_607));

// float_exprs.wast:644
assert_return(() => call($37, "no_fold_promote_demote", [float32(-2_139_095_041)]), float32(-2_139_095_041));

// float_exprs.wast:645
assert_return(() => call($37, "no_fold_promote_demote", [float32(8_388_608)]), float32(8_388_608));

// float_exprs.wast:646
assert_return(() => call($37, "no_fold_promote_demote", [float32(-2_139_095_040)]), float32(-2_139_095_040));

// float_exprs.wast:647
assert_return(() => call($37, "no_fold_promote_demote", [float32(2_139_095_039)]), float32(2_139_095_039));

// float_exprs.wast:648
assert_return(() => call($37, "no_fold_promote_demote", [float32(-8_388_609)]), float32(-8_388_609));

// float_exprs.wast:649
assert_return(() => call($37, "no_fold_promote_demote", [float32(2_139_095_040)]), float32(2_139_095_040));

// float_exprs.wast:650
assert_return(() => call($37, "no_fold_promote_demote", [float32(-8_388_608)]), float32(-8_388_608));

// float_exprs.wast:654
let $38 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7c\x7d\x01\x7d\x60\x02\x7d\x7c\x01\x7d\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb6\x80\x80\x80\x00\x02\x13\x6e\x6f\x5f\x64\x65\x6d\x6f\x74\x65\x5f\x6d\x69\x78\x65\x64\x5f\x61\x64\x64\x00\x00\x1c\x6e\x6f\x5f\x64\x65\x6d\x6f\x74\x65\x5f\x6d\x69\x78\x65\x64\x5f\x61\x64\x64\x5f\x63\x6f\x6d\x6d\x75\x74\x65\x64\x00\x01\x0a\x9d\x80\x80\x80\x00\x02\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\xbb\xa0\xb6\x0b\x89\x80\x80\x80\x00\x00\x20\x00\xbb\x20\x01\xa0\xb6\x0b");

// float_exprs.wast:661
assert_return(() => call($38, "no_demote_mixed_add", [float64(4_183_652_368_636_204_281n), float32(69_183_310)]), float32(276_467_023));

// float_exprs.wast:662
assert_return(() => call($38, "no_demote_mixed_add", [float64(4_773_927_428_111_915_216n), float32(1_387_972_204)]), float32(1_392_270_651));

// float_exprs.wast:663
assert_return(() => call($38, "no_demote_mixed_add", [float64(4_072_985_553_596_038_423n), float32(-2_092_048_445)]), float32(66_813_087));

// float_exprs.wast:664
assert_return(() => call($38, "no_demote_mixed_add", [float64(-4_706_027_341_372_750_405n), float32(822_392_741)]), float32(-1_249_483_219));

// float_exprs.wast:665
assert_return(() => call($38, "no_demote_mixed_add", [float64(-4_704_229_357_247_377_291n), float32(-1_424_854_470)]), float32(-1_246_117_221));

// float_exprs.wast:667
assert_return(() => call($38, "no_demote_mixed_add_commuted", [float32(69_183_310), float64(4_183_652_368_636_204_281n)]), float32(276_467_023));

// float_exprs.wast:668
assert_return(() => call($38, "no_demote_mixed_add_commuted", [float32(1_387_972_204), float64(4_773_927_428_111_915_216n)]), float32(1_392_270_651));

// float_exprs.wast:669
assert_return(() => call($38, "no_demote_mixed_add_commuted", [float32(-2_092_048_445), float64(4_072_985_553_596_038_423n)]), float32(66_813_087));

// float_exprs.wast:670
assert_return(() => call($38, "no_demote_mixed_add_commuted", [float32(822_392_741), float64(-4_706_027_341_372_750_405n)]), float32(-1_249_483_219));

// float_exprs.wast:671
assert_return(() => call($38, "no_demote_mixed_add_commuted", [float32(-1_424_854_470), float64(-4_704_229_357_247_377_291n)]), float32(-1_246_117_221));

// float_exprs.wast:675
let $39 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x87\x80\x80\x80\x00\x01\x60\x02\x7c\x7d\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x97\x80\x80\x80\x00\x01\x13\x6e\x6f\x5f\x64\x65\x6d\x6f\x74\x65\x5f\x6d\x69\x78\x65\x64\x5f\x73\x75\x62\x00\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\xbb\xa1\xb6\x0b");

// float_exprs.wast:680
assert_return(() => call($39, "no_demote_mixed_sub", [float64(4_979_303_437_048_015_281n), float32(1_583_535_740)]), float32(1_758_482_618));

// float_exprs.wast:681
assert_return(() => call($39, "no_demote_mixed_sub", [float64(-4_479_143_440_747_465_154n), float32(1_214_924_370)]), float32(-826_860_160));

// float_exprs.wast:682
assert_return(() => call($39, "no_demote_mixed_sub", [float64(-4_586_480_314_765_943_190n), float32(969_848_030)]), float32(-1_026_792_491));

// float_exprs.wast:683
assert_return(() => call($39, "no_demote_mixed_sub", [float64(4_364_064_588_997_139_903n), float32(472_962_692)]), float32(612_510_881));

// float_exprs.wast:684
assert_return(() => call($39, "no_demote_mixed_sub", [float64(4_673_175_763_235_896_759n), float32(1_198_952_676)]), float32(-955_466_111));

// float_exprs.wast:688
let $40 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x91\x80\x80\x80\x00\x10\x00\x00\x00\x00\x01\x01\x01\x01\x00\x00\x00\x00\x01\x01\x01\x01\x07\xc1\x84\x80\x80\x00\x10\x21\x66\x33\x32\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x00\x21\x66\x33\x32\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x01\x21\x66\x33\x32\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x02\x21\x66\x33\x32\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x03\x21\x66\x36\x34\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x04\x21\x66\x36\x34\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x05\x21\x66\x36\x34\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x06\x21\x66\x36\x34\x2e\x69\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x07\x21\x66\x33\x32\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x08\x21\x66\x33\x32\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x09\x21\x66\x33\x32\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x0a\x21\x66\x33\x32\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x0b\x21\x66\x36\x34\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x0c\x21\x66\x36\x34\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x73\x00\x0d\x21\x66\x36\x34\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x73\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x0e\x21\x66\x36\x34\x2e\x69\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x74\x72\x75\x6e\x63\x5f\x75\x5f\x63\x6f\x6e\x76\x65\x72\x74\x5f\x75\x00\x0f\x0a\xb1\x81\x80\x80\x00\x10\x86\x80\x80\x80\x00\x00\x20\x00\xa8\xb2\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xa9\xb2\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xa8\xb3\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xa9\xb3\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xaa\xb7\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xab\xb7\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xaa\xb8\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xab\xb8\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xae\xb4\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xaf\xb4\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xae\xb5\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xaf\xb5\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb0\xb9\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb1\xb9\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb0\xba\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb1\xba\x0b");

// float_exprs.wast:723
assert_return(() => call($40, "f32.i32.no_fold_trunc_s_convert_s", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:724
assert_return(() => call($40, "f32.i32.no_fold_trunc_s_convert_s", [float32(-1_077_936_128)]), float32(-1_082_130_432));

// float_exprs.wast:725
assert_return(() => call($40, "f32.i32.no_fold_trunc_u_convert_s", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:726
assert_return(() => call($40, "f32.i32.no_fold_trunc_u_convert_s", [float32(-1_090_519_040)]), float32(0));

// float_exprs.wast:727
assert_return(() => call($40, "f32.i32.no_fold_trunc_s_convert_u", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:728
assert_return(() => call($40, "f32.i32.no_fold_trunc_s_convert_u", [float32(-1_077_936_128)]), float32(1_333_788_672));

// float_exprs.wast:729
assert_return(() => call($40, "f32.i32.no_fold_trunc_u_convert_u", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:730
assert_return(() => call($40, "f32.i32.no_fold_trunc_u_convert_u", [float32(-1_090_519_040)]), float32(0));

// float_exprs.wast:732
assert_return(() => call($40, "f64.i32.no_fold_trunc_s_convert_s", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:733
assert_return(() => call($40, "f64.i32.no_fold_trunc_s_convert_s", [float64(-4_613_937_818_241_073_152n)]), float64(-4_616_189_618_054_758_400n));

// float_exprs.wast:734
assert_return(() => call($40, "f64.i32.no_fold_trunc_u_convert_s", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:735
assert_return(() => call($40, "f64.i32.no_fold_trunc_u_convert_s", [float64(-4_620_693_217_682_128_896n)]), float64(0n));

// float_exprs.wast:736
assert_return(() => call($40, "f64.i32.no_fold_trunc_s_convert_u", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:737
assert_return(() => call($40, "f64.i32.no_fold_trunc_s_convert_u", [float64(-4_613_937_818_241_073_152n)]), float64(4_751_297_606_873_776_128n));

// float_exprs.wast:738
assert_return(() => call($40, "f64.i32.no_fold_trunc_u_convert_u", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:739
assert_return(() => call($40, "f64.i32.no_fold_trunc_u_convert_u", [float64(-4_620_693_217_682_128_896n)]), float64(0n));

// float_exprs.wast:741
assert_return(() => call($40, "f32.i64.no_fold_trunc_s_convert_s", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:742
assert_return(() => call($40, "f32.i64.no_fold_trunc_s_convert_s", [float32(-1_077_936_128)]), float32(-1_082_130_432));

// float_exprs.wast:743
assert_return(() => call($40, "f32.i64.no_fold_trunc_u_convert_s", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:744
assert_return(() => call($40, "f32.i64.no_fold_trunc_u_convert_s", [float32(-1_090_519_040)]), float32(0));

// float_exprs.wast:745
assert_return(() => call($40, "f32.i64.no_fold_trunc_s_convert_u", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:746
assert_return(() => call($40, "f32.i64.no_fold_trunc_s_convert_u", [float32(-1_077_936_128)]), float32(1_602_224_128));

// float_exprs.wast:747
assert_return(() => call($40, "f32.i64.no_fold_trunc_u_convert_u", [float32(1_069_547_520)]), float32(1_065_353_216));

// float_exprs.wast:748
assert_return(() => call($40, "f32.i64.no_fold_trunc_u_convert_u", [float32(-1_090_519_040)]), float32(0));

// float_exprs.wast:750
assert_return(() => call($40, "f64.i64.no_fold_trunc_s_convert_s", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:751
assert_return(() => call($40, "f64.i64.no_fold_trunc_s_convert_s", [float64(-4_613_937_818_241_073_152n)]), float64(-4_616_189_618_054_758_400n));

// float_exprs.wast:752
assert_return(() => call($40, "f64.i64.no_fold_trunc_u_convert_s", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:753
assert_return(() => call($40, "f64.i64.no_fold_trunc_u_convert_s", [float64(-4_620_693_217_682_128_896n)]), float64(0n));

// float_exprs.wast:754
assert_return(() => call($40, "f64.i64.no_fold_trunc_s_convert_u", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:755
assert_return(() => call($40, "f64.i64.no_fold_trunc_s_convert_u", [float64(-4_613_937_818_241_073_152n)]), float64(4_895_412_794_951_729_152n));

// float_exprs.wast:756
assert_return(() => call($40, "f64.i64.no_fold_trunc_u_convert_u", [float64(4_609_434_218_613_702_656n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:757
assert_return(() => call($40, "f64.i64.no_fold_trunc_u_convert_u", [float64(-4_620_693_217_682_128_896n)]), float64(0n));

// float_exprs.wast:763
let $41 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x02\x7f\x7d\x00\x60\x01\x7f\x01\x7d\x03\x84\x80\x80\x80\x00\x03\x00\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x96\x80\x80\x80\x00\x03\x04\x69\x6e\x69\x74\x00\x00\x03\x72\x75\x6e\x00\x01\x05\x63\x68\x65\x63\x6b\x00\x02\x0a\xc5\x80\x80\x80\x00\x03\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x38\x02\x00\x0b\xa5\x80\x80\x80\x00\x01\x01\x7f\x02\x40\x03\x40\x20\x02\x20\x02\x2a\x02\x00\x20\x01\x95\x38\x02\x00\x20\x02\x41\x04\x6a\x21\x02\x20\x02\x20\x00\x49\x0d\x00\x0b\x0b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2a\x02\x00\x0b");

// float_exprs.wast:784
run(() => call($41, "init", [0, float32(1_097_963_930)]));

// float_exprs.wast:785
run(() => call($41, "init", [4, float32(1_098_068_787)]));

// float_exprs.wast:786
run(() => call($41, "init", [8, float32(1_098_173_645)]));

// float_exprs.wast:787
run(() => call($41, "init", [12, float32(1_098_278_502)]));

// float_exprs.wast:788
assert_return(() => call($41, "check", [0]), float32(1_097_963_930));

// float_exprs.wast:789
assert_return(() => call($41, "check", [4]), float32(1_098_068_787));

// float_exprs.wast:790
assert_return(() => call($41, "check", [8]), float32(1_098_173_645));

// float_exprs.wast:791
assert_return(() => call($41, "check", [12]), float32(1_098_278_502));

// float_exprs.wast:792
run(() => call($41, "run", [16, float32(1_077_936_128)]));

// float_exprs.wast:793
assert_return(() => call($41, "check", [0]), float32(1_084_297_489));

// float_exprs.wast:794
assert_return(() => call($41, "check", [4]), float32(1_084_367_394));

// float_exprs.wast:795
assert_return(() => call($41, "check", [8]), float32(1_084_437_299));

// float_exprs.wast:796
assert_return(() => call($41, "check", [12]), float32(1_084_507_204));

// float_exprs.wast:798
let $42 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x02\x7f\x7c\x00\x60\x01\x7f\x01\x7c\x03\x84\x80\x80\x80\x00\x03\x00\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\x96\x80\x80\x80\x00\x03\x04\x69\x6e\x69\x74\x00\x00\x03\x72\x75\x6e\x00\x01\x05\x63\x68\x65\x63\x6b\x00\x02\x0a\xc5\x80\x80\x80\x00\x03\x89\x80\x80\x80\x00\x00\x20\x00\x20\x01\x39\x03\x00\x0b\xa5\x80\x80\x80\x00\x01\x01\x7f\x02\x40\x03\x40\x20\x02\x20\x02\x2b\x03\x00\x20\x01\xa3\x39\x03\x00\x20\x02\x41\x08\x6a\x21\x02\x20\x02\x20\x00\x49\x0d\x00\x0b\x0b\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2b\x03\x00\x0b");

// float_exprs.wast:819
run(() => call($42, "init", [0, float64(4_624_690_162_351_420_211n)]));

// float_exprs.wast:820
run(() => call($42, "init", [8, float64(4_624_746_457_346_762_342n)]));

// float_exprs.wast:821
run(() => call($42, "init", [16, float64(4_624_802_752_342_104_474n)]));

// float_exprs.wast:822
run(() => call($42, "init", [24, float64(4_624_859_047_337_446_605n)]));

// float_exprs.wast:823
assert_return(() => call($42, "check", [0]), float64(4_624_690_162_351_420_211n));

// float_exprs.wast:824
assert_return(() => call($42, "check", [8]), float64(4_624_746_457_346_762_342n));

// float_exprs.wast:825
assert_return(() => call($42, "check", [16]), float64(4_624_802_752_342_104_474n));

// float_exprs.wast:826
assert_return(() => call($42, "check", [24]), float64(4_624_859_047_337_446_605n));

// float_exprs.wast:827
run(() => call($42, "run", [32, float64(4_613_937_818_241_073_152n)]));

// float_exprs.wast:828
assert_return(() => call($42, "check", [0]), float64(4_617_353_047_958_495_778n));

// float_exprs.wast:829
assert_return(() => call($42, "check", [8]), float64(4_617_390_577_955_390_532n));

// float_exprs.wast:830
assert_return(() => call($42, "check", [16]), float64(4_617_428_107_952_285_287n));

// float_exprs.wast:831
assert_return(() => call($42, "check", [24]), float64(4_617_465_637_949_180_041n));

// float_exprs.wast:835
let $43 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7f\x60\x02\x7c\x7c\x01\x7f\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xd1\x80\x80\x80\x00\x08\x07\x66\x33\x32\x2e\x75\x6c\x74\x00\x00\x07\x66\x33\x32\x2e\x75\x6c\x65\x00\x01\x07\x66\x33\x32\x2e\x75\x67\x74\x00\x02\x07\x66\x33\x32\x2e\x75\x67\x65\x00\x03\x07\x66\x36\x34\x2e\x75\x6c\x74\x00\x04\x07\x66\x36\x34\x2e\x75\x6c\x65\x00\x05\x07\x66\x36\x34\x2e\x75\x67\x74\x00\x06\x07\x66\x36\x34\x2e\x75\x67\x65\x00\x07\x0a\xe9\x80\x80\x80\x00\x08\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x60\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5e\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5f\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5d\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x66\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x64\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x65\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x63\x45\x0b");

// float_exprs.wast:847
assert_return(() => call($43, "f32.ult", [float32(1_077_936_128), float32(1_073_741_824)]), 0);

// float_exprs.wast:848
assert_return(() => call($43, "f32.ult", [float32(1_073_741_824), float32(1_073_741_824)]), 0);

// float_exprs.wast:849
assert_return(() => call($43, "f32.ult", [float32(1_073_741_824), float32(1_077_936_128)]), 1);

// float_exprs.wast:850
assert_return(() => call($43, "f32.ult", [float32(1_073_741_824), float32(2_143_289_344)]), 1);

// float_exprs.wast:851
assert_return(() => call($43, "f32.ule", [float32(1_077_936_128), float32(1_073_741_824)]), 0);

// float_exprs.wast:852
assert_return(() => call($43, "f32.ule", [float32(1_073_741_824), float32(1_073_741_824)]), 1);

// float_exprs.wast:853
assert_return(() => call($43, "f32.ule", [float32(1_073_741_824), float32(1_077_936_128)]), 1);

// float_exprs.wast:854
assert_return(() => call($43, "f32.ule", [float32(1_073_741_824), float32(2_143_289_344)]), 1);

// float_exprs.wast:855
assert_return(() => call($43, "f32.ugt", [float32(1_077_936_128), float32(1_073_741_824)]), 1);

// float_exprs.wast:856
assert_return(() => call($43, "f32.ugt", [float32(1_073_741_824), float32(1_073_741_824)]), 0);

// float_exprs.wast:857
assert_return(() => call($43, "f32.ugt", [float32(1_073_741_824), float32(1_077_936_128)]), 0);

// float_exprs.wast:858
assert_return(() => call($43, "f32.ugt", [float32(1_073_741_824), float32(2_143_289_344)]), 1);

// float_exprs.wast:859
assert_return(() => call($43, "f32.uge", [float32(1_077_936_128), float32(1_073_741_824)]), 1);

// float_exprs.wast:860
assert_return(() => call($43, "f32.uge", [float32(1_073_741_824), float32(1_073_741_824)]), 1);

// float_exprs.wast:861
assert_return(() => call($43, "f32.uge", [float32(1_073_741_824), float32(1_077_936_128)]), 0);

// float_exprs.wast:862
assert_return(() => call($43, "f32.uge", [float32(1_073_741_824), float32(2_143_289_344)]), 1);

// float_exprs.wast:863
assert_return(() => call($43, "f64.ult", [float64(4_613_937_818_241_073_152n), float64(4_611_686_018_427_387_904n)]), 0);

// float_exprs.wast:864
assert_return(() => call($43, "f64.ult", [float64(4_611_686_018_427_387_904n), float64(4_611_686_018_427_387_904n)]), 0);

// float_exprs.wast:865
assert_return(() => call($43, "f64.ult", [float64(4_611_686_018_427_387_904n), float64(4_613_937_818_241_073_152n)]), 1);

// float_exprs.wast:866
assert_return(() => call($43, "f64.ult", [float64(4_611_686_018_427_387_904n), float64(9_221_120_237_041_090_560n)]), 1);

// float_exprs.wast:867
assert_return(() => call($43, "f64.ule", [float64(4_613_937_818_241_073_152n), float64(4_611_686_018_427_387_904n)]), 0);

// float_exprs.wast:868
assert_return(() => call($43, "f64.ule", [float64(4_611_686_018_427_387_904n), float64(4_611_686_018_427_387_904n)]), 1);

// float_exprs.wast:869
assert_return(() => call($43, "f64.ule", [float64(4_611_686_018_427_387_904n), float64(4_613_937_818_241_073_152n)]), 1);

// float_exprs.wast:870
assert_return(() => call($43, "f64.ule", [float64(4_611_686_018_427_387_904n), float64(9_221_120_237_041_090_560n)]), 1);

// float_exprs.wast:871
assert_return(() => call($43, "f64.ugt", [float64(4_613_937_818_241_073_152n), float64(4_611_686_018_427_387_904n)]), 1);

// float_exprs.wast:872
assert_return(() => call($43, "f64.ugt", [float64(4_611_686_018_427_387_904n), float64(4_611_686_018_427_387_904n)]), 0);

// float_exprs.wast:873
assert_return(() => call($43, "f64.ugt", [float64(4_611_686_018_427_387_904n), float64(4_613_937_818_241_073_152n)]), 0);

// float_exprs.wast:874
assert_return(() => call($43, "f64.ugt", [float64(4_611_686_018_427_387_904n), float64(9_221_120_237_041_090_560n)]), 1);

// float_exprs.wast:875
assert_return(() => call($43, "f64.uge", [float64(4_613_937_818_241_073_152n), float64(4_611_686_018_427_387_904n)]), 1);

// float_exprs.wast:876
assert_return(() => call($43, "f64.uge", [float64(4_611_686_018_427_387_904n), float64(4_611_686_018_427_387_904n)]), 1);

// float_exprs.wast:877
assert_return(() => call($43, "f64.uge", [float64(4_611_686_018_427_387_904n), float64(4_613_937_818_241_073_152n)]), 0);

// float_exprs.wast:878
assert_return(() => call($43, "f64.uge", [float64(4_611_686_018_427_387_904n), float64(9_221_120_237_041_090_560n)]), 1);

// float_exprs.wast:882
let $44 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xc1\x81\x80\x80\x00\x08\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x73\x65\x6c\x65\x63\x74\x00\x00\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x73\x65\x6c\x65\x63\x74\x00\x01\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x73\x65\x6c\x65\x63\x74\x00\x02\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x73\x65\x6c\x65\x63\x74\x00\x03\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x73\x65\x6c\x65\x63\x74\x00\x04\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x73\x65\x6c\x65\x63\x74\x00\x05\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x73\x65\x6c\x65\x63\x74\x00\x06\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x73\x65\x6c\x65\x63\x74\x00\x07\x0a\x89\x81\x80\x80\x00\x08\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x5d\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x5f\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x5e\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x60\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x63\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x65\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x64\x1b\x0b\x8c\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x00\x20\x01\x66\x1b\x0b");

// float_exprs.wast:894
assert_return(() => call($44, "f32.no_fold_lt_select", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:895
assert_return(() => call($44, "f32.no_fold_lt_select", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:896
assert_return(() => call($44, "f32.no_fold_lt_select", [float32(0), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:897
assert_return(() => call($44, "f32.no_fold_lt_select", [float32(-2_147_483_648), float32(0)]), float32(0));

// float_exprs.wast:898
assert_return(() => call($44, "f32.no_fold_le_select", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:899
assert_return(() => call($44, "f32.no_fold_le_select", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:900
assert_return(() => call($44, "f32.no_fold_le_select", [float32(0), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:901
assert_return(() => call($44, "f32.no_fold_le_select", [float32(-2_147_483_648), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:902
assert_return(() => call($44, "f32.no_fold_gt_select", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:903
assert_return(() => call($44, "f32.no_fold_gt_select", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:904
assert_return(() => call($44, "f32.no_fold_gt_select", [float32(0), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:905
assert_return(() => call($44, "f32.no_fold_gt_select", [float32(-2_147_483_648), float32(0)]), float32(0));

// float_exprs.wast:906
assert_return(() => call($44, "f32.no_fold_ge_select", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:907
assert_return(() => call($44, "f32.no_fold_ge_select", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:908
assert_return(() => call($44, "f32.no_fold_ge_select", [float32(0), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:909
assert_return(() => call($44, "f32.no_fold_ge_select", [float32(-2_147_483_648), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:910
assert_return(() => call($44, "f64.no_fold_lt_select", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:911
assert_return(() => call($44, "f64.no_fold_lt_select", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:912
assert_return(() => call($44, "f64.no_fold_lt_select", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:913
assert_return(() => call($44, "f64.no_fold_lt_select", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// float_exprs.wast:914
assert_return(() => call($44, "f64.no_fold_le_select", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:915
assert_return(() => call($44, "f64.no_fold_le_select", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:916
assert_return(() => call($44, "f64.no_fold_le_select", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:917
assert_return(() => call($44, "f64.no_fold_le_select", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:918
assert_return(() => call($44, "f64.no_fold_gt_select", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:919
assert_return(() => call($44, "f64.no_fold_gt_select", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:920
assert_return(() => call($44, "f64.no_fold_gt_select", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:921
assert_return(() => call($44, "f64.no_fold_gt_select", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// float_exprs.wast:922
assert_return(() => call($44, "f64.no_fold_ge_select", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:923
assert_return(() => call($44, "f64.no_fold_ge_select", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:924
assert_return(() => call($44, "f64.no_fold_ge_select", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:925
assert_return(() => call($44, "f64.no_fold_ge_select", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:929
let $45 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xa1\x81\x80\x80\x00\x08\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x69\x66\x00\x00\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x69\x66\x00\x01\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x69\x66\x00\x02\x11\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x69\x66\x00\x03\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x69\x66\x00\x04\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x69\x66\x00\x05\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x69\x66\x00\x06\x11\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x69\x66\x00\x07\x0a\xa1\x81\x80\x80\x00\x08\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5d\x04\x7d\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5f\x04\x7d\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5e\x04\x7d\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x60\x04\x7d\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x63\x04\x7c\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x65\x04\x7c\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x64\x04\x7c\x20\x00\x05\x20\x01\x0b\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x20\x01\x66\x04\x7c\x20\x00\x05\x20\x01\x0b\x0b");

// float_exprs.wast:973
assert_return(() => call($45, "f32.no_fold_lt_if", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:974
assert_return(() => call($45, "f32.no_fold_lt_if", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:975
assert_return(() => call($45, "f32.no_fold_lt_if", [float32(0), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:976
assert_return(() => call($45, "f32.no_fold_lt_if", [float32(-2_147_483_648), float32(0)]), float32(0));

// float_exprs.wast:977
assert_return(() => call($45, "f32.no_fold_le_if", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:978
assert_return(() => call($45, "f32.no_fold_le_if", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:979
assert_return(() => call($45, "f32.no_fold_le_if", [float32(0), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:980
assert_return(() => call($45, "f32.no_fold_le_if", [float32(-2_147_483_648), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:981
assert_return(() => call($45, "f32.no_fold_gt_if", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:982
assert_return(() => call($45, "f32.no_fold_gt_if", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:983
assert_return(() => call($45, "f32.no_fold_gt_if", [float32(0), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:984
assert_return(() => call($45, "f32.no_fold_gt_if", [float32(-2_147_483_648), float32(0)]), float32(0));

// float_exprs.wast:985
assert_return(() => call($45, "f32.no_fold_ge_if", [float32(0), float32(2_143_289_344)]), float32(2_143_289_344));

// float_exprs.wast:986
assert_return(() => call($45, "f32.no_fold_ge_if", [float32(2_143_289_344), float32(0)]), float32(0));

// float_exprs.wast:987
assert_return(() => call($45, "f32.no_fold_ge_if", [float32(0), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:988
assert_return(() => call($45, "f32.no_fold_ge_if", [float32(-2_147_483_648), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:989
assert_return(() => call($45, "f64.no_fold_lt_if", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:990
assert_return(() => call($45, "f64.no_fold_lt_if", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:991
assert_return(() => call($45, "f64.no_fold_lt_if", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:992
assert_return(() => call($45, "f64.no_fold_lt_if", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// float_exprs.wast:993
assert_return(() => call($45, "f64.no_fold_le_if", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:994
assert_return(() => call($45, "f64.no_fold_le_if", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:995
assert_return(() => call($45, "f64.no_fold_le_if", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:996
assert_return(() => call($45, "f64.no_fold_le_if", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:997
assert_return(() => call($45, "f64.no_fold_gt_if", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:998
assert_return(() => call($45, "f64.no_fold_gt_if", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:999
assert_return(() => call($45, "f64.no_fold_gt_if", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1000
assert_return(() => call($45, "f64.no_fold_gt_if", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// float_exprs.wast:1001
assert_return(() => call($45, "f64.no_fold_ge_if", [float64(0n), float64(9_221_120_237_041_090_560n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:1002
assert_return(() => call($45, "f64.no_fold_ge_if", [float64(9_221_120_237_041_090_560n), float64(0n)]), float64(0n));

// float_exprs.wast:1003
assert_return(() => call($45, "f64.no_fold_ge_if", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1004
assert_return(() => call($45, "f64.no_fold_ge_if", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1008
let $46 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xf9\x81\x80\x80\x00\x08\x1c\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x00\x1c\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x01\x1c\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x02\x1c\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x03\x1c\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x04\x1c\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x05\x1c\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x06\x1c\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x73\x65\x6c\x65\x63\x74\x5f\x74\x6f\x5f\x61\x62\x73\x00\x07\x0a\xb9\x81\x80\x80\x00\x08\x90\x80\x80\x80\x00\x00\x20\x00\x8c\x20\x00\x20\x00\x43\x00\x00\x00\x00\x5d\x1b\x0b\x90\x80\x80\x80\x00\x00\x20\x00\x8c\x20\x00\x20\x00\x43\x00\x00\x00\x80\x5f\x1b\x0b\x90\x80\x80\x80\x00\x00\x20\x00\x20\x00\x8c\x20\x00\x43\x00\x00\x00\x80\x5e\x1b\x0b\x90\x80\x80\x80\x00\x00\x20\x00\x20\x00\x8c\x20\x00\x43\x00\x00\x00\x00\x60\x1b\x0b\x94\x80\x80\x80\x00\x00\x20\x00\x9a\x20\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x63\x1b\x0b\x94\x80\x80\x80\x00\x00\x20\x00\x9a\x20\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\x65\x1b\x0b\x94\x80\x80\x80\x00\x00\x20\x00\x20\x00\x9a\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\x64\x1b\x0b\x94\x80\x80\x80\x00\x00\x20\x00\x20\x00\x9a\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x66\x1b\x0b");

// float_exprs.wast:1020
assert_return(() => call($46, "f32.no_fold_lt_select_to_abs", [float32(2_141_192_192)]), float32(2_141_192_192));

// float_exprs.wast:1021
assert_return(() => call($46, "f32.no_fold_lt_select_to_abs", [float32(-4_194_304)]), float32(-4_194_304));

// float_exprs.wast:1022
assert_return(() => call($46, "f32.no_fold_lt_select_to_abs", [float32(0)]), float32(0));

// float_exprs.wast:1023
assert_return(() => call($46, "f32.no_fold_lt_select_to_abs", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1024
assert_return(() => call($46, "f32.no_fold_le_select_to_abs", [float32(2_141_192_192)]), float32(2_141_192_192));

// float_exprs.wast:1025
assert_return(() => call($46, "f32.no_fold_le_select_to_abs", [float32(-4_194_304)]), float32(-4_194_304));

// float_exprs.wast:1026
assert_return(() => call($46, "f32.no_fold_le_select_to_abs", [float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1027
assert_return(() => call($46, "f32.no_fold_le_select_to_abs", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1028
assert_return(() => call($46, "f32.no_fold_gt_select_to_abs", [float32(2_141_192_192)]), float32(-6_291_456));

// float_exprs.wast:1029
assert_return(() => call($46, "f32.no_fold_gt_select_to_abs", [float32(-4_194_304)]), float32(2_143_289_344));

// float_exprs.wast:1030
assert_return(() => call($46, "f32.no_fold_gt_select_to_abs", [float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1031
assert_return(() => call($46, "f32.no_fold_gt_select_to_abs", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1032
assert_return(() => call($46, "f32.no_fold_ge_select_to_abs", [float32(2_141_192_192)]), float32(-6_291_456));

// float_exprs.wast:1033
assert_return(() => call($46, "f32.no_fold_ge_select_to_abs", [float32(-4_194_304)]), float32(2_143_289_344));

// float_exprs.wast:1034
assert_return(() => call($46, "f32.no_fold_ge_select_to_abs", [float32(0)]), float32(0));

// float_exprs.wast:1035
assert_return(() => call($46, "f32.no_fold_ge_select_to_abs", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1036
assert_return(() => call($46, "f64.no_fold_lt_select_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(9_219_994_337_134_247_936n));

// float_exprs.wast:1037
assert_return(() => call($46, "f64.no_fold_lt_select_to_abs", [float64(-2_251_799_813_685_248n)]), float64(-2_251_799_813_685_248n));

// float_exprs.wast:1038
assert_return(() => call($46, "f64.no_fold_lt_select_to_abs", [float64(0n)]), float64(0n));

// float_exprs.wast:1039
assert_return(() => call($46, "f64.no_fold_lt_select_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1040
assert_return(() => call($46, "f64.no_fold_le_select_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(9_219_994_337_134_247_936n));

// float_exprs.wast:1041
assert_return(() => call($46, "f64.no_fold_le_select_to_abs", [float64(-2_251_799_813_685_248n)]), float64(-2_251_799_813_685_248n));

// float_exprs.wast:1042
assert_return(() => call($46, "f64.no_fold_le_select_to_abs", [float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1043
assert_return(() => call($46, "f64.no_fold_le_select_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1044
assert_return(() => call($46, "f64.no_fold_gt_select_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(-3_377_699_720_527_872n));

// float_exprs.wast:1045
assert_return(() => call($46, "f64.no_fold_gt_select_to_abs", [float64(-2_251_799_813_685_248n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:1046
assert_return(() => call($46, "f64.no_fold_gt_select_to_abs", [float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1047
assert_return(() => call($46, "f64.no_fold_gt_select_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1048
assert_return(() => call($46, "f64.no_fold_ge_select_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(-3_377_699_720_527_872n));

// float_exprs.wast:1049
assert_return(() => call($46, "f64.no_fold_ge_select_to_abs", [float64(-2_251_799_813_685_248n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:1050
assert_return(() => call($46, "f64.no_fold_ge_select_to_abs", [float64(0n)]), float64(0n));

// float_exprs.wast:1051
assert_return(() => call($46, "f64.no_fold_ge_select_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1055
let $47 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xd9\x81\x80\x80\x00\x08\x18\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x00\x18\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x01\x18\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x02\x18\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x03\x18\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x74\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x04\x18\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6c\x65\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x05\x18\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x74\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x06\x18\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x67\x65\x5f\x69\x66\x5f\x74\x6f\x5f\x61\x62\x73\x00\x07\x0a\xd1\x81\x80\x80\x00\x08\x93\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x00\x5d\x04\x7d\x20\x00\x8c\x05\x20\x00\x0b\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x80\x5f\x04\x7d\x20\x00\x8c\x05\x20\x00\x0b\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x80\x5e\x04\x7d\x20\x00\x05\x20\x00\x8c\x0b\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x00\x00\x60\x04\x7d\x20\x00\x05\x20\x00\x8c\x0b\x0b\x97\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x63\x04\x7c\x20\x00\x9a\x05\x20\x00\x0b\x0b\x97\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\x65\x04\x7c\x20\x00\x9a\x05\x20\x00\x0b\x0b\x97\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\x64\x04\x7c\x20\x00\x05\x20\x00\x9a\x0b\x0b\x97\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\x00\x00\x66\x04\x7c\x20\x00\x05\x20\x00\x9a\x0b\x0b");

// float_exprs.wast:1099
assert_return(() => call($47, "f32.no_fold_lt_if_to_abs", [float32(2_141_192_192)]), float32(2_141_192_192));

// float_exprs.wast:1100
assert_return(() => call($47, "f32.no_fold_lt_if_to_abs", [float32(-4_194_304)]), float32(-4_194_304));

// float_exprs.wast:1101
assert_return(() => call($47, "f32.no_fold_lt_if_to_abs", [float32(0)]), float32(0));

// float_exprs.wast:1102
assert_return(() => call($47, "f32.no_fold_lt_if_to_abs", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1103
assert_return(() => call($47, "f32.no_fold_le_if_to_abs", [float32(2_141_192_192)]), float32(2_141_192_192));

// float_exprs.wast:1104
assert_return(() => call($47, "f32.no_fold_le_if_to_abs", [float32(-4_194_304)]), float32(-4_194_304));

// float_exprs.wast:1105
assert_return(() => call($47, "f32.no_fold_le_if_to_abs", [float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1106
assert_return(() => call($47, "f32.no_fold_le_if_to_abs", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1107
assert_return(() => call($47, "f32.no_fold_gt_if_to_abs", [float32(2_141_192_192)]), float32(-6_291_456));

// float_exprs.wast:1108
assert_return(() => call($47, "f32.no_fold_gt_if_to_abs", [float32(-4_194_304)]), float32(2_143_289_344));

// float_exprs.wast:1109
assert_return(() => call($47, "f32.no_fold_gt_if_to_abs", [float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1110
assert_return(() => call($47, "f32.no_fold_gt_if_to_abs", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1111
assert_return(() => call($47, "f32.no_fold_ge_if_to_abs", [float32(2_141_192_192)]), float32(-6_291_456));

// float_exprs.wast:1112
assert_return(() => call($47, "f32.no_fold_ge_if_to_abs", [float32(-4_194_304)]), float32(2_143_289_344));

// float_exprs.wast:1113
assert_return(() => call($47, "f32.no_fold_ge_if_to_abs", [float32(0)]), float32(0));

// float_exprs.wast:1114
assert_return(() => call($47, "f32.no_fold_ge_if_to_abs", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1115
assert_return(() => call($47, "f64.no_fold_lt_if_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(9_219_994_337_134_247_936n));

// float_exprs.wast:1116
assert_return(() => call($47, "f64.no_fold_lt_if_to_abs", [float64(-2_251_799_813_685_248n)]), float64(-2_251_799_813_685_248n));

// float_exprs.wast:1117
assert_return(() => call($47, "f64.no_fold_lt_if_to_abs", [float64(0n)]), float64(0n));

// float_exprs.wast:1118
assert_return(() => call($47, "f64.no_fold_lt_if_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1119
assert_return(() => call($47, "f64.no_fold_le_if_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(9_219_994_337_134_247_936n));

// float_exprs.wast:1120
assert_return(() => call($47, "f64.no_fold_le_if_to_abs", [float64(-2_251_799_813_685_248n)]), float64(-2_251_799_813_685_248n));

// float_exprs.wast:1121
assert_return(() => call($47, "f64.no_fold_le_if_to_abs", [float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1122
assert_return(() => call($47, "f64.no_fold_le_if_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1123
assert_return(() => call($47, "f64.no_fold_gt_if_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(-3_377_699_720_527_872n));

// float_exprs.wast:1124
assert_return(() => call($47, "f64.no_fold_gt_if_to_abs", [float64(-2_251_799_813_685_248n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:1125
assert_return(() => call($47, "f64.no_fold_gt_if_to_abs", [float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1126
assert_return(() => call($47, "f64.no_fold_gt_if_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1127
assert_return(() => call($47, "f64.no_fold_ge_if_to_abs", [float64(9_219_994_337_134_247_936n)]), float64(-3_377_699_720_527_872n));

// float_exprs.wast:1128
assert_return(() => call($47, "f64.no_fold_ge_if_to_abs", [float64(-2_251_799_813_685_248n)]), float64(9_221_120_237_041_090_560n));

// float_exprs.wast:1129
assert_return(() => call($47, "f64.no_fold_ge_if_to_abs", [float64(0n)]), float64(0n));

// float_exprs.wast:1130
assert_return(() => call($47, "f64.no_fold_ge_if_to_abs", [float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1135
let $48 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7d\x60\x00\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb7\x80\x80\x80\x00\x02\x18\x66\x33\x32\x2e\x69\x6e\x63\x6f\x72\x72\x65\x63\x74\x5f\x63\x6f\x72\x72\x65\x63\x74\x69\x6f\x6e\x00\x00\x18\x66\x36\x34\x2e\x69\x6e\x63\x6f\x72\x72\x65\x63\x74\x5f\x63\x6f\x72\x72\x65\x63\x74\x69\x6f\x6e\x00\x01\x0a\xcd\x80\x80\x80\x00\x02\x99\x80\x80\x80\x00\x00\x43\xbe\x9f\xaa\x3f\x43\xcd\xcc\x9c\x3f\x92\x43\xbe\x9f\xaa\x3f\x93\x43\xcd\xcc\x9c\x3f\x93\x0b\xa9\x80\x80\x80\x00\x00\x44\x87\x16\xd9\xce\xf7\x53\xf5\x3f\x44\x9a\x99\x99\x99\x99\x99\xf3\x3f\xa0\x44\x87\x16\xd9\xce\xf7\x53\xf5\x3f\xa1\x44\x9a\x99\x99\x99\x99\x99\xf3\x3f\xa1\x0b");

// float_exprs.wast:1144
assert_return(() => call($48, "f32.incorrect_correction", []), float32(872_415_232));

// float_exprs.wast:1145
assert_return(() => call($48, "f64.incorrect_correction", []), float64(-4_850_376_798_678_024_192n));

// float_exprs.wast:1150
let $49 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x8d\x80\x80\x80\x00\x01\x09\x63\x61\x6c\x63\x75\x6c\x61\x74\x65\x00\x00\x0a\xce\x80\x80\x80\x00\x01\xc8\x80\x80\x80\x00\x01\x05\x7d\x43\x00\x40\x1c\x43\x21\x00\x43\x55\x55\x50\x43\x21\x01\x43\x15\xc7\xe3\x3f\x21\x02\x20\x01\x8c\x20\x00\x94\x20\x00\x20\x02\x94\x20\x01\x93\x95\x21\x03\x20\x01\x8c\x20\x00\x94\x20\x00\x20\x02\x94\x20\x01\x93\x95\x21\x04\x02\x40\x20\x03\x20\x04\x5b\x0d\x00\x00\x0b\x20\x04\x0b");

// float_exprs.wast:1167
assert_return(() => call($49, "calculate", []), float32(-1_008_109_917));

// float_exprs.wast:1169
let $50 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x07\x8d\x80\x80\x80\x00\x01\x09\x63\x61\x6c\x63\x75\x6c\x61\x74\x65\x00\x00\x0a\xda\x80\x80\x80\x00\x01\xd4\x80\x80\x80\x00\x01\x05\x7c\x44\x00\x00\x00\x00\x00\x88\x63\x40\x21\x00\x44\x4b\x06\xab\xaa\xaa\x0a\x6a\x40\x21\x01\x44\x96\xd0\xe3\xaa\xe2\x78\xfc\x3f\x21\x02\x20\x01\x9a\x20\x00\xa2\x20\x00\x20\x02\xa2\x20\x01\xa1\xa3\x21\x03\x20\x01\x9a\x20\x00\xa2\x20\x00\x20\x02\xa2\x20\x01\xa1\xa3\x21\x04\x02\x40\x20\x03\x20\x04\x61\x0d\x00\x00\x0b\x20\x04\x0b");

// float_exprs.wast:1186
assert_return(() => call($50, "calculate", []), float64(-4_576_450_154_778_751_853n));

// float_exprs.wast:1191
let $51 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7d\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x90\x80\x80\x80\x00\x01\x0c\x6c\x6c\x76\x6d\x5f\x70\x72\x32\x36\x37\x34\x36\x00\x00\x0a\x96\x80\x80\x80\x00\x01\x90\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x43\x00\x00\x00\x80\x20\x00\x93\x93\x0b");

// float_exprs.wast:1197
assert_return(() => call($51, "llvm_pr26746", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1202
let $52 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x90\x80\x80\x80\x00\x01\x0c\x6c\x6c\x76\x6d\x5f\x70\x72\x32\x37\x31\x35\x33\x00\x00\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x20\x00\x41\xff\xff\xff\xff\x00\x71\xb2\x43\x00\x00\x00\xcb\x92\x0b");

// float_exprs.wast:1208
assert_return(() => call($52, "llvm_pr27153", [33_554_434]), float32(1_270_874_112));

// float_exprs.wast:1213
let $53 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x87\x80\x80\x80\x00\x01\x60\x02\x7f\x7f\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x90\x80\x80\x80\x00\x01\x0c\x6c\x6c\x76\x6d\x5f\x70\x72\x32\x37\x30\x33\x36\x00\x00\x0a\x9b\x80\x80\x80\x00\x01\x95\x80\x80\x80\x00\x00\x20\x00\x41\xcb\xff\x87\x74\x72\xb2\x20\x01\x41\x80\x80\x90\x07\x71\xb2\x92\x0b");

// float_exprs.wast:1220
assert_return(() => call($53, "llvm_pr27036", [-25_034_805, 14_942_208]), float32(-887_488_460));

// float_exprs.wast:1230
let $54 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x97\x80\x80\x80\x00\x03\x60\x04\x7c\x7c\x7c\x7c\x01\x7c\x60\x03\x7c\x7c\x7c\x01\x7c\x60\x03\x7d\x7d\x7d\x01\x7d\x03\x84\x80\x80\x80\x00\x03\x00\x01\x02\x07\xa2\x80\x80\x80\x00\x03\x08\x74\x68\x65\x70\x61\x73\x74\x30\x00\x00\x08\x74\x68\x65\x70\x61\x73\x74\x31\x00\x01\x08\x74\x68\x65\x70\x61\x73\x74\x32\x00\x02\x0a\xb1\x80\x80\x80\x00\x03\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\x20\x03\xa2\xa3\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa1\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x02\x94\x0b");

// float_exprs.wast:1244
assert_return(() => call($54, "thepast0", [float64(9_007_199_254_740_992n), float64(4_607_182_418_800_017_407n), float64(4_611_686_018_427_387_904n), float64(4_602_678_819_172_646_912n)]), float64(9_007_199_254_740_991n));

// float_exprs.wast:1245
assert_return(() => call($54, "thepast1", [float64(4_363_988_038_922_010_624n), float64(4_607_182_418_800_017_407n), float64(4_363_988_038_922_010_624n)]), float64(-5_098_074_778_183_401_472n));

// float_exprs.wast:1246
assert_return(() => call($54, "thepast2", [float32(16_777_216), float32(1_056_964_608), float32(1_065_353_216)]), float32(8_388_608));

// float_exprs.wast:1251
let $55 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7d\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x07\x8b\x80\x80\x80\x00\x01\x07\x69\x6e\x76\x65\x72\x73\x65\x00\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\x20\x00\x95\x0b");

// float_exprs.wast:1257
assert_return(() => call($55, "inverse", [float32(1_119_879_168)]), float32(1_009_429_163));

// float_exprs.wast:1262
let $56 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa7\x80\x80\x80\x00\x02\x10\x66\x33\x32\x5f\x73\x71\x72\x74\x5f\x6d\x69\x6e\x75\x73\x5f\x32\x00\x00\x10\x66\x36\x34\x5f\x73\x71\x72\x74\x5f\x6d\x69\x6e\x75\x73\x5f\x32\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8b\x80\x80\x80\x00\x00\x20\x00\x91\x43\x00\x00\x00\x40\x93\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\x9f\x44\x00\x00\x00\x00\x00\x00\x00\x40\xa1\x0b");

// float_exprs.wast:1272
assert_return(() => call($56, "f32_sqrt_minus_2", [float32(1_082_130_432)]), float32(0));

// float_exprs.wast:1273
assert_return(() => call($56, "f64_sqrt_minus_2", [float64(4_616_189_618_054_758_400n)]), float64(0n));

// float_exprs.wast:1277
let $57 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb5\x80\x80\x80\x00\x02\x17\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x63\x69\x70\x5f\x72\x65\x63\x69\x70\x00\x00\x17\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x72\x65\x63\x69\x70\x5f\x72\x65\x63\x69\x70\x00\x01\x0a\xb3\x80\x80\x80\x00\x02\x90\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\x43\x00\x00\x80\x3f\x20\x00\x95\x95\x0b\x98\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x20\x00\xa3\xa3\x0b");

// float_exprs.wast:1285
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(-529_244_276)]), float32(-529_244_277));

// float_exprs.wast:1286
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(426_844_452)]), float32(426_844_451));

// float_exprs.wast:1287
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(535_132_276)]), float32(535_132_277));

// float_exprs.wast:1288
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(-1_041_025_855)]), float32(-1_041_025_854));

// float_exprs.wast:1289
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(1_660_734_603)]), float32(1_660_734_602));

// float_exprs.wast:1291
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1292
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(0)]), float32(0));

// float_exprs.wast:1293
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(-8_388_608)]), float32(-8_388_608));

// float_exprs.wast:1294
assert_return(() => call($57, "f32.no_fold_recip_recip", [float32(2_139_095_040)]), float32(2_139_095_040));

// float_exprs.wast:1296
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(-3_945_855_704_507_980_848n)]), float64(-3_945_855_704_507_980_847n));

// float_exprs.wast:1297
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(-4_314_651_508_250_494_493n)]), float64(-4_314_651_508_250_494_494n));

// float_exprs.wast:1298
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(5_359_183_527_603_521_526n)]), float64(5_359_183_527_603_521_525n));

// float_exprs.wast:1299
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(1_521_566_147_669_375_634n)]), float64(1_521_566_147_669_375_633n));

// float_exprs.wast:1300
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(8_671_785_631_545_870_379n)]), float64(8_671_785_631_545_870_378n));

// float_exprs.wast:1302
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1303
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(0n)]), float64(0n));

// float_exprs.wast:1304
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(-4_503_599_627_370_496n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:1305
assert_return(() => call($57, "f64.no_fold_recip_recip", [float64(9_218_868_437_227_405_312n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:1309
let $58 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xbb\x80\x80\x80\x00\x02\x1a\x66\x33\x32\x2e\x6e\x6f\x5f\x61\x6c\x67\x65\x62\x72\x61\x69\x63\x5f\x66\x61\x63\x74\x6f\x72\x69\x6e\x67\x00\x00\x1a\x66\x36\x34\x2e\x6e\x6f\x5f\x61\x6c\x67\x65\x62\x72\x61\x69\x63\x5f\x66\x61\x63\x74\x6f\x72\x69\x6e\x67\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x92\x20\x00\x20\x01\x93\x94\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa0\x20\x00\x20\x01\xa1\xa2\x0b");

// float_exprs.wast:1319
assert_return(() => call($58, "f32.no_algebraic_factoring", [float32(-1_535_659_065), float32(618_704_988)]), float32(-1_979_102_719));

// float_exprs.wast:1320
assert_return(() => call($58, "f32.no_algebraic_factoring", [float32(-879_314_082), float32(1_274_676_302)]), float32(-669_291_443));

// float_exprs.wast:1321
assert_return(() => call($58, "f32.no_algebraic_factoring", [float32(1_446_924_633), float32(-687_593_314)]), float32(-294_811_537));

// float_exprs.wast:1322
assert_return(() => call($58, "f32.no_algebraic_factoring", [float32(1_212_067_608), float32(-1_016_872_486)]), float32(1_359_874_131));

// float_exprs.wast:1323
assert_return(() => call($58, "f32.no_algebraic_factoring", [float32(-1_016_234_832), float32(-915_578_024)]), float32(-748_936_937));

// float_exprs.wast:1325
assert_return(() => call($58, "f64.no_algebraic_factoring", [float64(2_467_435_761_933_928_117n), float64(2_526_113_756_828_458_004n)]), float64(-8_778_308_674_613_008_285n));

// float_exprs.wast:1326
assert_return(() => call($58, "f64.no_algebraic_factoring", [float64(2_911_983_657_790_464_931n), float64(2_814_431_682_419_759_911n)]), float64(1_217_162_942_843_921_803n));

// float_exprs.wast:1327
assert_return(() => call($58, "f64.no_algebraic_factoring", [float64(-6_315_107_028_760_759_558n), float64(-6_275_961_107_979_239_660n)]), float64(-7_935_067_938_274_629_083n));

// float_exprs.wast:1328
assert_return(() => call($58, "f64.no_algebraic_factoring", [float64(-3_806_954_607_355_178_983n), float64(5_456_963_169_336_729_236n)]), float64(-2_916_410_668_536_120_073n));

// float_exprs.wast:1329
assert_return(() => call($58, "f64.no_algebraic_factoring", [float64(5_121_779_675_912_507_154n), float64(-4_209_457_450_533_630_825n)]), float64(5_636_689_734_063_865_714n));

// float_exprs.wast:1333
let $59 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xbb\x80\x80\x80\x00\x02\x1a\x66\x33\x32\x2e\x6e\x6f\x5f\x61\x6c\x67\x65\x62\x72\x61\x69\x63\x5f\x66\x61\x63\x74\x6f\x72\x69\x6e\x67\x00\x00\x1a\x66\x36\x34\x2e\x6e\x6f\x5f\x61\x6c\x67\x65\x62\x72\x61\x69\x63\x5f\x66\x61\x63\x74\x6f\x72\x69\x6e\x67\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x00\x94\x20\x01\x20\x01\x94\x93\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa2\x20\x01\x20\x01\xa2\xa1\x0b");

// float_exprs.wast:1343
assert_return(() => call($59, "f32.no_algebraic_factoring", [float32(684_135_946), float32(744_319_693)]), float32(-1_723_891_928));

// float_exprs.wast:1344
assert_return(() => call($59, "f32.no_algebraic_factoring", [float32(-734_037_815), float32(-798_127_067)]), float32(1_762_604_185));

// float_exprs.wast:1345
assert_return(() => call($59, "f32.no_algebraic_factoring", [float32(968_841_772), float32(-1_188_470_196)]), float32(870_712_803));

// float_exprs.wast:1346
assert_return(() => call($59, "f32.no_algebraic_factoring", [float32(697_514_723), float32(-1_460_213_363)]), float32(327_914_662));

// float_exprs.wast:1347
assert_return(() => call($59, "f32.no_algebraic_factoring", [float32(1_498_230_729), float32(-644_513_716)]), float32(-214_383_405));

// float_exprs.wast:1349
assert_return(() => call($59, "f64.no_algebraic_factoring", [float64(6_212_515_167_506_370_409n), float64(-3_098_269_182_910_573_343n)]), float64(7_818_515_589_337_550_196n));

// float_exprs.wast:1350
assert_return(() => call($59, "f64.no_algebraic_factoring", [float64(-3_223_773_933_339_535_894n), float64(-3_121_536_933_713_415_491n)]), float64(-1_626_851_587_829_411_327n));

// float_exprs.wast:1351
assert_return(() => call($59, "f64.no_algebraic_factoring", [float64(4_797_439_202_963_874_050n), float64(-4_437_100_539_138_108_698n)]), float64(4_987_747_999_326_390_045n));

// float_exprs.wast:1352
assert_return(() => call($59, "f64.no_algebraic_factoring", [float64(-3_793_184_944_415_513_422n), float64(-3_864_747_813_540_328_155n)]), float64(6_253_339_631_158_964_222n));

// float_exprs.wast:1353
assert_return(() => call($59, "f64.no_algebraic_factoring", [float64(-5_678_422_438_957_621_476n), float64(-5_679_141_980_976_730_679n)]), float64(2_473_652_960_990_319_032n));

// float_exprs.wast:1358
let $60 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x00\x60\x01\x7f\x01\x7d\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xa0\x80\x80\x80\x00\x02\x11\x66\x33\x32\x2e\x73\x69\x6d\x70\x6c\x65\x5f\x78\x34\x5f\x73\x75\x6d\x00\x00\x08\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x01\x0a\xf6\x80\x80\x80\x00\x02\xe4\x80\x80\x80\x00\x01\x08\x7d\x20\x00\x2a\x02\x00\x21\x03\x20\x00\x2a\x02\x04\x21\x04\x20\x00\x2a\x02\x08\x21\x05\x20\x00\x2a\x02\x0c\x21\x06\x20\x01\x2a\x02\x00\x21\x07\x20\x01\x2a\x02\x04\x21\x08\x20\x01\x2a\x02\x08\x21\x09\x20\x01\x2a\x02\x0c\x21\x0a\x20\x02\x20\x03\x20\x07\x92\x38\x02\x00\x20\x02\x20\x04\x20\x08\x92\x38\x02\x04\x20\x02\x20\x05\x20\x09\x92\x38\x02\x08\x20\x02\x20\x06\x20\x0a\x92\x38\x02\x0c\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2a\x02\x00\x0b\x0b\xb6\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x30\x01\x00\x00\x00\x01\x00\x00\x80\x01\x00\x00\x00\x01\x00\x00\x80\x01\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00");

// float_exprs.wast:1391
assert_return(() => call($60, "f32.simple_x4_sum", [0, 16, 32]));

// float_exprs.wast:1392
assert_return(() => call($60, "f32.load", [32]), float32(2));

// float_exprs.wast:1393
assert_return(() => call($60, "f32.load", [36]), float32(0));

// float_exprs.wast:1394
assert_return(() => call($60, "f32.load", [40]), float32(1));

// float_exprs.wast:1395
assert_return(() => call($60, "f32.load", [44]), float32(-2_147_483_647));

// float_exprs.wast:1397
let $61 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8c\x80\x80\x80\x00\x02\x60\x03\x7f\x7f\x7f\x00\x60\x01\x7f\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xa0\x80\x80\x80\x00\x02\x11\x66\x36\x34\x2e\x73\x69\x6d\x70\x6c\x65\x5f\x78\x34\x5f\x73\x75\x6d\x00\x00\x08\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x01\x0a\xf6\x80\x80\x80\x00\x02\xe4\x80\x80\x80\x00\x01\x08\x7c\x20\x00\x2b\x03\x00\x21\x03\x20\x00\x2b\x03\x08\x21\x04\x20\x00\x2b\x03\x10\x21\x05\x20\x00\x2b\x03\x18\x21\x06\x20\x01\x2b\x03\x00\x21\x07\x20\x01\x2b\x03\x08\x21\x08\x20\x01\x2b\x03\x10\x21\x09\x20\x01\x2b\x03\x18\x21\x0a\x20\x02\x20\x03\x20\x07\xa0\x39\x03\x00\x20\x02\x20\x04\x20\x08\xa0\x39\x03\x08\x20\x02\x20\x05\x20\x09\xa0\x39\x03\x10\x20\x02\x20\x06\x20\x0a\xa0\x39\x03\x18\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x2b\x03\x00\x0b\x0b\xe6\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x60\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x80\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x80\x01\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00");

// float_exprs.wast:1430
assert_return(() => call($61, "f64.simple_x4_sum", [0, 32, 64]));

// float_exprs.wast:1431
assert_return(() => call($61, "f64.load", [64]), float64(2n));

// float_exprs.wast:1432
assert_return(() => call($61, "f64.load", [72]), float64(0n));

// float_exprs.wast:1433
assert_return(() => call($61, "f64.load", [80]), float64(1n));

// float_exprs.wast:1434
assert_return(() => call($61, "f64.load", [88]), float64(-9_223_372_036_854_775_807n));

// float_exprs.wast:1439
let $62 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x87\x80\x80\x80\x00\x01\x60\x02\x7f\x7f\x01\x7d\x03\x83\x80\x80\x80\x00\x02\x00\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xa1\x80\x80\x80\x00\x02\x0d\x66\x33\x32\x2e\x6b\x61\x68\x61\x6e\x5f\x73\x75\x6d\x00\x00\x0d\x66\x33\x32\x2e\x70\x6c\x61\x69\x6e\x5f\x73\x75\x6d\x00\x01\x0a\xea\x80\x80\x80\x00\x02\xb7\x80\x80\x80\x00\x01\x03\x7d\x02\x40\x03\x40\x20\x03\x20\x00\x2a\x02\x00\x20\x04\x93\x22\x04\x92\x22\x02\x20\x03\x93\x20\x04\x93\x21\x04\x20\x00\x41\x04\x6a\x21\x00\x20\x02\x21\x03\x20\x01\x41\x7f\x6a\x22\x01\x0d\x00\x0b\x0b\x20\x02\x0b\xa8\x80\x80\x80\x00\x01\x01\x7d\x02\x40\x03\x40\x20\x02\x20\x00\x2a\x02\x00\x92\x21\x02\x20\x00\x41\x04\x6a\x21\x00\x20\x01\x41\x7f\x6a\x21\x01\x20\x01\x0d\x00\x0b\x0b\x20\x02\x0b\x0b\x87\x88\x80\x80\x00\x01\x00\x41\x00\x0b\x80\x08\xc4\xc5\x57\x24\xa5\x84\xc8\x0b\x6d\xb8\x4b\x2e\xf2\x76\x17\x1c\xca\x4a\x56\x1e\x1b\x6e\x71\x22\x5d\x17\x1e\x6e\xbf\xcd\x14\x5c\xc7\x21\x55\x51\x39\x9c\x1f\xb2\x51\xf0\xa3\x93\xd7\xc1\x2c\xae\x7e\xa8\x28\x3a\x01\x21\xf4\x0a\x58\x93\xf8\x42\x77\x9f\x83\x39\x6a\x5f\xba\xf7\x0a\xd8\x51\x6a\x34\xca\xad\xc6\x34\x0e\xd8\x26\xdc\x4c\x33\x1c\xed\x29\x90\xa8\x78\x0f\xd1\xce\x76\x31\x23\x83\xb8\x35\xe8\xf2\x44\xb0\xd3\xa1\xfc\xbb\x32\xe1\xb0\xba\x69\x44\x09\xd6\xd9\x7d\xff\x2e\xc0\x5a\x36\x14\x33\x14\x3e\xa9\xfa\x87\x6d\x8b\xbc\xce\x9d\xa7\xfd\xc4\xe9\x85\x3f\xdd\xd7\xe1\x18\xa6\x50\x26\x72\x6e\x3f\x73\x0f\xf8\x12\x93\x23\x34\x61\x76\x12\x48\xc0\x9b\x05\x93\xeb\xac\x86\xde\x94\x3e\x55\xe8\x8c\xe8\xdd\xe4\xfc\x95\x47\xbe\x56\x03\x21\x20\x4c\xe6\xbf\x7b\xf6\x7f\xd5\xba\x73\x1c\xc1\x14\x8f\xc4\x27\x96\xb3\xbd\x33\xff\x78\x41\x5f\xc0\x5a\xce\xf6\x67\x6e\x73\x9a\x17\x66\x70\x03\xf8\xce\x27\xa3\x52\xb2\x9f\x3b\xbf\xfb\xae\xed\xd3\x5a\xf8\x37\x57\xf0\xf5\x6e\xef\xb1\x4d\x70\x3d\x54\xa7\x01\x9a\x85\x08\x48\x91\xf5\x9d\x0c\x60\x87\x5b\xd9\x54\x1e\x51\x6d\x88\x8e\x08\x8c\xa5\x71\x3a\x56\x08\x67\x46\x8f\x8f\x13\x2a\x2c\xec\x2c\x1f\xb4\x62\x2b\x6f\x41\x0a\xc4\x65\x42\xa2\x31\x6b\x2c\x7d\x3e\xbb\x75\xac\x86\x97\x30\xd9\x48\xcd\x9a\x1f\x56\xc4\xc6\xe4\x12\xc0\x9d\xfb\xee\x02\x8c\xce\x1c\xf2\x1e\xa1\x78\x23\xdb\xc4\x1e\x49\x03\xd3\x71\xcc\x08\x50\xc5\xd8\x5c\xed\xd5\xb5\x65\xac\xb5\xc9\x21\xd2\xc9\x29\x76\xde\xf0\x30\x1a\x5b\x3c\xf2\x3b\xdb\x3a\x39\x82\x3a\x16\x08\x6f\xa8\xf1\xbe\x69\x69\x99\x71\xa6\x05\xd3\x14\x93\x2a\x16\xf2\x2f\x11\xc7\x7e\x20\xbb\x91\x44\xee\xf8\xe4\x01\x53\xc0\xb9\x7f\xf0\xbf\xf0\x03\x9c\x6d\xb1\xdf\xa2\x44\x01\x6d\x6b\x71\x2b\x5c\xb3\x21\x19\x46\x5e\x8f\xdb\x91\xd3\x7c\x78\x6b\xb7\x12\x00\x8f\xeb\xbd\x8a\xf5\xd4\x2e\xc4\xc1\x1e\xdf\x73\x63\x59\x47\x49\x03\x0a\xb7\xcf\x24\xcf\x9c\x0e\x44\x7a\x9e\x14\xfb\x42\xbf\x9d\x39\x30\x9e\xa0\xab\x2f\xd1\xae\x9e\x6a\x83\x43\xe3\x55\x7d\x85\xbf\x63\x8a\xf8\x96\x10\x1f\xfe\x6d\xe7\x22\x1b\xe1\x69\x46\x8a\x44\xc8\xc8\xf9\x0c\x2b\x19\x07\xa5\x02\x3e\xf2\x30\x10\x9a\x85\x8a\x5f\xef\x81\x45\xa0\x77\xb1\x03\x10\x73\x4b\xae\x98\x9d\x47\xbf\x9a\x2d\x3a\xd5\x0f\x03\x66\xe3\x3d\x53\xd9\x40\xce\x1f\x6f\x32\x2f\x21\x2b\x23\x21\x6c\x62\xd4\xa7\x3e\xa8\xce\x28\x31\x2d\x00\x3d\x67\x5e\xaf\xa0\xcf\x2e\xd2\xb9\x6b\x84\xeb\x69\x08\x3c\x62\x36\xbe\x12\xfd\x36\x7f\x88\x3e\xad\xbc\x0b\xc0\x41\xc4\x50\xb6\xe3\x50\x31\xe8\xce\xe2\x96\x65\x55\x9c\x16\x46\xe6\xb0\x2d\x3a\xe8\x81\x05\xb0\xbf\x34\xf7\xbc\x10\x1c\xfb\xcc\x3c\xf1\x85\x97\x42\x9f\xeb\x14\x8d\x3c\xbf\xd7\x17\x88\x49\x9d\x8b\x2b\xb2\x3a\x83\xd1\x4f\x04\x9e\xa1\x0f\xad\x08\x9d\x54\xaf\xd1\x82\xc3\xec\x32\x2f\x02\x8f\x05\x21\x2d\xa2\xb7\xe4\xf4\x6f\x2e\x81\x2b\x0b\x9c\xfc\xcb\xfe\x74\x02\xf9\xdb\xf4\xf3\xea\x00\xa8\xec\xd1\x99\x74\x26\xdd\xd6\x34\xd5\x25\xb1\x46\xdd\x9c\xaa\x71\xf5\x60\xb0\x88\xc8\xe0\x0b\x59\x5a\x25\x4f\x29\x66\xf9\xe3\x2e\xfe\xe9\xda\xe5\x18\x4f\x27\x62\xf4\xce\xa4\x21\x95\x74\xc7\x57\x64\x27\x9a\x4c\xfd\x54\x7d\x61\xce\xc3\xac\x87\x46\x9c\xfa\xff\x09\xca\x79\x97\x67\x24\x74\xca\xd4\x21\x83\x26\x25\x19\x12\x37\x64\x19\xe5\x65\xe0\x74\x75\x8e\xdd\xc8\xef\x74\xc7\xd8\x21\x2b\x79\x04\x51\x46\x65\x60\x03\x5d\xfa\xd8\xf4\x65\xa4\x9e\x5d\x23\xda\xd7\x8a\x92\x80\xa4\xde\x78\x3c\xf1\x57\x42\x6d\xcd\xc9\x2f\xd5\xa4\x9e\xab\x40\xf4\xcb\x1b\xd7\xa3\xca\xfc\xeb\xa7\x01\xb2\x9a\x69\x4e\x46\x9b\x18\x4e\xdd\x79\xa7\xaa\xa6\x52\x39\x1e\xef\x30\xcc\x9b\xbd\x5b\xee\x4c\x21\x6d\x30\x00\x72\xb0\x46\x5f\x08\xcf\xc5\xb9\xe0\x3e\xc2\xb3\x0c\xdc\x8e\x64\xde\x19\x42\x79\xcf\x43\xea\x43\x5d\x8e\x88\xf7\xab\x15\xdc\x3f\xc8\x67\x20\xdb\xb8\x64\xb1\x47\x1f\xde\xf2\xcb\x3f\x59\x9f\xd8\x46\x90\xdc\xae\x2f\x22\xf9\xe2\x31\x89\xd9\x9c\x1c\x4c\xd3\xa9\x4a\x57\x84\x9c\x9f\xea\x2c\x3c\xae\x3c\xc3\x1e\x8b\xe5\x4e\x17\x01\x25\xdb\x34\x46\x5f\x15\xea\x05\x0c\x7c\xd9\x45\x8c\x19\xd0\x73\x8a\x96\x16\xdd\x44\xf9\x05\xb7\x5b\x71\xb0\xe6\x21\x36\x5f\x75\x89\x91\x73\x75\xab\x7d\xae\xd3\x73\xec\x37\xc6\xea\x55\x75\xef\xea\xab\x8b\x7b\x11\xdc\x6d\x1a\xb2\x6a\xc4\x25\xcf\xaa\xe3\x9f\x49\x49\x89\xcb\x37\x9b\x0a\xa7\x01\x60\x70\xdc\xb7\xc8\x83\xe1\x42\xf5\xbe\xad\x62\x94\xad\x8d\xa1");

// float_exprs.wast:1530
assert_return(() => call($62, "f32.kahan_sum", [0, 256]), float32(-209_187_571));

// float_exprs.wast:1531
assert_return(() => call($62, "f32.plain_sum", [0, 256]), float32(-212_854_243));

// float_exprs.wast:1533
let $63 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x87\x80\x80\x80\x00\x01\x60\x02\x7f\x7f\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x00\x05\x84\x80\x80\x80\x00\x01\x01\x01\x01\x07\xa1\x80\x80\x80\x00\x02\x0d\x66\x36\x34\x2e\x6b\x61\x68\x61\x6e\x5f\x73\x75\x6d\x00\x00\x0d\x66\x36\x34\x2e\x70\x6c\x61\x69\x6e\x5f\x73\x75\x6d\x00\x01\x0a\xea\x80\x80\x80\x00\x02\xb7\x80\x80\x80\x00\x01\x03\x7c\x02\x40\x03\x40\x20\x03\x20\x00\x2b\x03\x00\x20\x04\xa1\x22\x04\xa0\x22\x02\x20\x03\xa1\x20\x04\xa1\x21\x04\x20\x00\x41\x08\x6a\x21\x00\x20\x02\x21\x03\x20\x01\x41\x7f\x6a\x22\x01\x0d\x00\x0b\x0b\x20\x02\x0b\xa8\x80\x80\x80\x00\x01\x01\x7c\x02\x40\x03\x40\x20\x02\x20\x00\x2b\x03\x00\xa0\x21\x02\x20\x00\x41\x08\x6a\x21\x00\x20\x01\x41\x7f\x6a\x21\x01\x20\x01\x0d\x00\x0b\x0b\x20\x02\x0b\x0b\x87\x90\x80\x80\x00\x01\x00\x41\x00\x0b\x80\x10\x13\x05\x84\x42\x5d\xa2\x2c\xc6\x43\xdb\x55\xa9\xcd\xda\x55\xe3\x73\xfc\x58\xd6\xba\xd5\x00\xfd\x83\x35\x42\x88\x8b\x13\x5d\x38\x4a\x47\x0d\x72\x73\xa1\x1a\xef\xc4\x45\x17\x57\xd8\xc9\x46\xe0\x8d\x6c\xe1\x37\x70\xc8\x83\x5b\x55\x5e\x5a\x2d\x73\x1e\x56\xc8\xe1\x6d\x69\x14\x78\x0a\x8a\x5a\x64\x3a\x09\xc7\xa8\x87\xc5\xf0\xd3\x5d\xe6\x03\xfc\x93\xbe\x26\xca\xd6\xa9\x91\x60\xbd\xb0\xed\xae\xf7\x30\x7e\x92\x3a\x6f\xa7\x59\x8e\xaa\x7d\xbf\x67\x58\x2a\x54\xf8\x4e\xfe\xed\x35\x58\xa6\x51\xbf\x42\xe5\x4b\x66\x27\x24\x6d\x7f\x42\x2d\x28\x92\x18\xec\x08\xae\xe7\x55\xda\xb1\xa6\x65\xa5\x72\x50\x47\x1b\xb8\xa9\x54\xd7\xa6\x06\x5b\x0f\x42\x58\x83\x8a\x17\x82\xc6\x10\x43\xa0\xc0\x2e\x6d\xbc\x5a\x85\x53\x72\x7f\xad\x44\xbc\x30\x3c\x55\xb2\x24\x9a\x74\x3a\x9e\xe1\xd8\x0f\x70\xfc\xa9\x3a\xcd\x93\x4b\xec\xe3\x7e\xdd\x5d\x27\xcd\xf8\xa0\x9d\x1c\x11\xc0\x57\x2e\xfd\xc8\x13\x32\xcc\x3a\x1a\x7d\xa3\x41\x55\xed\xc3\x82\x49\x2a\x04\x1e\xef\x73\xb9\x2e\x2e\xe3\x5f\xf4\xdf\xe6\xb2\x33\x0c\x39\x3f\x6f\x44\x6a\x03\xc1\x42\xb9\xfa\xb1\xc8\xed\xa5\x58\x99\x7f\xed\xb4\x72\x9e\x79\xeb\xfb\x43\x82\x45\xaa\xbb\x95\xd2\xff\x28\x9e\xf6\xa1\xad\x95\xd6\x55\x95\x0d\x6f\x60\x11\xc7\x78\x3e\x49\xf2\x7e\x48\xf4\xa2\x71\xd0\x13\x8e\xb3\xde\x99\x52\xe3\x45\x74\xea\x76\x0e\x1b\x2a\xc8\xee\x14\x01\xc4\x50\x5b\x36\x3c\xef\xba\x72\xa2\xa6\x08\xf8\x7b\x36\x9d\xf9\xef\x0b\xc7\x56\x2d\x5c\xf0\x9d\x5d\xde\xfc\xb8\xad\x0f\x64\x0e\x97\x15\x32\x26\xc2\x31\xe6\x05\x1e\xef\xcb\x17\x1b\x6d\x15\x0b\x74\x5d\xd3\x2e\xf8\x6b\x86\xb4\xba\x73\x52\x53\x99\xa9\x76\x20\x45\xc9\x40\x80\x6b\x14\xed\xa1\xfa\x80\x46\xe6\x26\xd2\xe6\x98\xc4\x57\xbf\xc4\x1c\xa4\x90\x7a\x36\x94\x14\xba\x15\x89\x6e\xe6\x9c\x37\x8c\xf4\xde\x12\x22\x5d\xa1\x79\x50\x67\x0d\x3d\x7a\xe9\xd4\xaa\x2e\x7f\x2a\x7a\x30\x3d\xea\x5d\x12\x48\xfe\xe1\x18\xcd\xa4\x57\xa2\x87\x3e\xb6\x9a\x8b\xdb\xda\x9d\x78\x9c\xcf\x8d\xb1\x4f\x90\xb4\x34\xe0\x9d\xf6\xca\xfe\x4c\x3b\x78\x6d\x0a\x5c\x18\x9f\x61\xb9\xdd\xb4\xe0\x0f\x76\xe0\x1b\x69\x0d\x5e\x58\x73\x70\x5e\x0e\x2d\xa1\x7d\xff\x20\xeb\x91\x34\x92\xac\x38\x72\x2a\x1f\x8e\x71\x2e\x6a\xf1\xaf\xc7\x27\x70\xd9\xc4\x57\xf7\xd2\x3c\x1d\xb8\xf0\xf0\x64\xcf\xdc\xae\xbe\xa3\xcc\x3e\x22\x7d\x4e\x69\x21\x63\x17\xed\x03\x02\x54\x9a\x0f\x50\x4e\x13\x5a\x35\xa1\x22\xa4\xdf\x86\xc2\x74\x79\x16\xb8\x69\x69\xa0\x52\x5d\x11\x64\xbd\x5b\x93\xfc\x69\xa0\xf4\x13\xd0\x81\x51\xdd\xfa\x0c\x15\xc3\x7a\xc9\x62\x7a\xa9\x1d\xc9\xe6\x5a\xb3\x5b\x97\x02\x3c\x64\x22\x12\x3c\x22\x90\x64\x2d\x30\x54\x4c\xb4\xa1\x22\x09\x57\x22\x5e\x8e\x38\x2b\x02\xa8\xae\xf6\xbe\x0d\x2b\xf2\x03\xad\xfa\x10\x01\x71\x77\x2a\x30\x02\x95\xf6\x00\x3e\xd0\xc4\x8d\x34\x19\x50\x21\x0a\xbc\x50\xda\x3c\x30\xd6\x3a\x31\x94\x8d\x3a\xfe\xef\x14\x57\x9d\x4b\x93\x00\x96\x24\x0c\x6f\xfd\xbc\x23\x76\x02\x6c\xeb\x52\x72\x80\x11\x7e\x80\x3a\x13\x12\x38\x1d\x38\x49\x95\x40\x27\x8a\x44\x7b\xe8\xdc\x6d\x8c\x8c\x8e\x3c\xb5\xb3\x18\x0e\xf6\x08\x1a\x84\x41\x35\xff\x8b\xb8\x93\x40\xea\xe1\x51\x1d\x89\xa5\x8d\x42\x68\x29\xea\x2f\xc1\x7a\x52\xeb\x90\x5d\x4d\xd6\x80\xe3\xd7\x75\x48\xce\xed\xd3\x01\x1c\x8d\x5b\xa5\x94\x0d\x78\xcf\xf1\x06\x13\x2f\x98\x02\xa4\x6d\x2e\x6c\xf2\xd5\x74\x29\x89\x4c\xf9\x03\xf5\xc7\x18\xad\x7a\xf0\x68\xf8\x5c\xd6\x59\x87\x6e\xd6\x3f\x06\xbe\x86\x20\xe3\x41\x91\x22\xf3\x6e\x8b\xf0\x68\x1c\x57\xa7\xfc\xb0\x7c\x9e\x99\x0b\x96\x1a\x89\x5f\xe6\x0d\x7c\x08\x51\xa0\xa2\x67\x9a\x47\x00\x93\x6b\xf9\x28\xf0\x68\xdb\x62\xf1\xe0\x65\x2c\x53\x33\xe0\xa7\xca\x11\x42\x30\xf6\xaf\x01\xc1\x65\x3d\x32\x01\x6f\xab\x2e\xbe\xd3\x8b\xbe\x14\xc3\xff\xec\xfb\xf0\xf9\xc5\x0c\x05\x6f\x01\x09\x6b\xe3\x34\x31\x0c\x1f\x66\xa6\x42\xbc\x1a\x87\x49\x16\x16\x8c\xb0\x90\x0d\x34\x8c\x0a\xe1\x09\x5e\x10\xa4\x6b\x56\xcc\xf0\xc9\xbb\xdc\xb8\x5c\xce\xf6\xcc\x8d\x75\x7e\xb3\x07\x88\x04\x2f\xb4\x5e\xc9\xe3\x4a\x23\x73\x19\x62\x6c\x9a\x03\x76\x44\x86\x9c\x60\xfc\xdb\x72\x8f\x27\xa0\xdd\xb3\xc5\xda\xff\xf9\xec\x6a\xb1\x7b\xd3\xcf\x50\x37\xc9\x7a\x78\x0c\xe4\x3a\xb6\xf5\xe6\xf4\x98\x6e\x42\x7d\x35\x73\x8b\x45\xc0\x56\x97\xcd\x6d\xce\xcf\xad\x31\xb3\xc3\x54\xfa\xef\xd5\xc0\xf4\x6a\x5f\x54\xe7\x49\x3e\x33\x0a\x30\x38\xfd\xd9\x05\xff\xa5\x3f\x57\x46\x14\xb5\x91\x17\xca\x6b\x98\x23\x7a\x65\xb3\x6c\x02\xb4\xcc\x79\x5d\x58\xd8\xb3\xd5\x94\xae\xf4\x6d\x75\x65\xf7\x92\xbf\x7e\x47\x4c\x3c\xee\xdb\xac\xf1\x32\x5d\xfb\x6f\x41\x1c\x34\xc8\x83\x4f\xc2\x58\x01\xbe\x05\x3e\x66\x16\xa6\x04\x6d\x5d\x4f\x86\x09\x27\x82\x25\x12\xcd\x3a\xcd\xce\x6b\xbc\xca\xac\x28\x9b\xee\x6a\x25\x86\x9e\x45\x70\xc6\xd2\xbd\x3b\x7d\x42\xe5\x27\xaf\xc7\x1d\xf4\x81\xc8\xb3\x76\x8a\xa8\x36\xa3\xae\x2a\xe6\x18\xe1\x36\x22\xad\xf6\x25\x72\xb0\x39\x8b\x01\x9a\x22\x7b\x84\xc3\x2d\x5f\x72\xa4\x98\xac\x15\x70\xe7\xd4\x18\xe2\x7d\xd2\x30\x7c\x33\x08\xcd\xca\xc4\x22\x85\x88\x75\x81\xc6\x4a\x74\x58\x8d\xe0\xe8\xac\xc5\xab\x75\x5a\xf4\x28\x12\xf0\x18\x45\x52\xf2\x97\xb2\x93\x41\x6f\x8d\x7f\xdb\x70\xfb\xa3\x5d\x1f\xa7\x8d\x98\x20\x2b\x22\x9f\x3a\x01\xb5\x8b\x1b\xd2\xcb\x14\x03\x0e\x14\x14\xd2\x19\x5a\x1f\xce\x5e\xcd\x81\x79\x15\x01\xca\xde\x73\x74\x8c\x56\x20\x9f\x77\x2d\x25\x16\xf6\x61\x51\x1d\xa4\x8e\x9b\x98\xa5\xc6\xec\xa8\x45\x57\x82\x59\x78\x0d\x90\xb4\xdf\x51\xb0\xc3\x82\x94\xcc\xb3\x53\x09\x15\x6d\x96\x6c\x3a\x40\x47\xb7\x4a\x7a\x05\x2f\xa1\x1e\x8c\x9d\xa0\x20\x88\xfb\x52\xb7\x9f\xf3\xf3\xbb\x5f\xe7\x8a\x61\xa7\x21\xb1\xac\xfa\x09\xaa\xa4\x6c\xbc\x24\x80\xba\x2a\xe9\x65\xff\x70\xff\xcc\xfa\x65\x87\x76\xf3\xc5\x15\xce\xcb\xe8\x42\x31\x00\x0c\x91\x57\xd9\xe0\x9d\x35\x54\x24\xad\xa4\xd8\xf9\x08\x67\x63\xc8\xcf\x81\xdd\x90\xa2\xd7\xc4\x07\x4a\xe6\x10\x6f\x67\xe7\x27\xd4\x23\x59\x18\xf2\xa8\x9d\x5f\xd8\x94\x30\xaa\x54\x86\x4f\x87\x9d\x82\xb5\x26\xca\xa6\x96\xbf\xcf\x55\xf9\x9d\x37\x01\x19\x48\x43\xc5\x94\x6c\xf3\x74\x97\x58\x4c\x3c\x9d\x08\xe8\x04\xc2\x58\x30\x76\xe1\xa0\xf8\xea\xe9\xc5\xae\xcf\x78\x9e\xa9\x0c\xac\xb3\x44\x42\xe0\xbc\x5d\x1b\x9c\x49\x58\x4a\x1c\x19\x49\xc1\x3a\xea\xf5\xeb\x3b\x81\xa9\x4b\x70\x0c\xcc\x9e\x1a\xd3\x2f\xb7\x52\x2f\x20\x3b\xeb\x64\x51\x1d\xa0\x2d\xb2\x3e\xbe\x13\x85\x48\x92\x32\x2e\xdb\x5c\xa1\xe7\x8c\x45\x91\x35\x01\x0a\x93\xc2\xeb\x09\xce\xf3\xd2\x22\x24\xd0\x8c\xcc\x1d\x9d\x38\xc8\x4d\xe3\x82\xcc\x64\x15\x06\x2d\xe7\x01\x2f\xab\xbb\xb5\x04\x4c\x92\x1c\x7a\xd6\x3f\xe8\x5f\x31\x15\x0c\xdc\xe4\x31\xb4\xc4\x25\x3e\x2a\xaa\x00\x9e\xc8\xe5\x21\x7a\x7f\x29\xf1\xc0\xaf\x1d\x5e\xe8\x63\x39\xad\xf8\x7e\x6c\xc8\xc5\x7f\xc2\xa8\x97\x27\x0a\xd9\xf4\x21\x6a\xea\x03\x09\xfb\xf7\x96\x3b\x83\x79\x5f\x7c\x4b\x30\x9f\x56\x35\xde\xb4\x73\xd4\x95\xf0\x14\xc3\x74\x2f\x0d\xa3\x1d\x4e\x8d\x31\x24\xb3\x1a\x84\x85\x62\x5a\x7b\x3c\x14\x39\x17\xe6\x6d\xeb\x37\xc2\x00\x58\x5b\x0b\xe3\x3c\x8a\x62\xe1\xf8\x35\x4b\x56\xe2\x87\x60\x8b\xbe\xa7\x38\x91\x77\x54\xa9\x5a\x24\x25\x90\x9f\xa5\x42\x77\xf3\x5c\x39\xdf\xff\x74\x07\x76\xa1\xcd\x1f\x62\x0b\x81\x81\x68\xaf\x05\xc1\xc0\x7f\x26\xee\xc0\x91\xa3\x6a\x7d\x29\x61\x45\x27\xe5\x57\x88\xdc\x0d\x97\x04\x1a\x33\xa9\x44\x8a\xda\x02\x10\x45\x3f\x8e\x55\xa6\x76\x8c\x4d\xe3\xf1\x89\x83\xc8\xd0\xf8\x9b\x50\x77\x9f\x47\xdf\x4c\x9c\x66\x0d\xaa\x18\xb8\x5f\x4f\xc4\x01\xce\xdc\x84\xac\x46\x9e\x69\xe1\x76\x45\x6b\x61\x89\xe4\x5d\x94\xbb\x11\x83\x9f\x78\xd8\x0a\xd2\xf5\x7e\x5d\x43\xea\xbc\x10\xf1\x3a\xc9\xe2\x64\xfb\x53\x65\xd0\xc7\xb4\xa7\xfb\xd4\x05\x53\x25\xd0\xcd\x29\x88\x00\x56\x25\x24\x7d\x5d\xb4\xf3\x41\x9f\xe9\xb5\xf7\xae\x64\x2c\xe3\xc9\x6d\xd5\x84\x3a\x72\x12\xb8\x7a\xd9\x1b\x09\xe8\x38\xda\x26\x4f\x04\xce\x03\x71\x6e\x8a\x44\x7b\x5c\x81\x59\x9c\xd2\xe4\xc3\xba\x59\xa6\xe5\x28\xa7\x8f\x9a\xe4\xd5\x4e\xb9\xca\x7f\xcb\x75\xb8\x2b\x43\x3e\xb3\x15\x46\xb1\xa5\xbc\x9d\x9e\x38\x15\xf1\xbd\x1b\x21\xaa\xf1\x82\x00\x95\xfc\xa7\x77\x47\x39\xa7\x33\x43\x92\xd7\x52\x40\x4b\x06\x81\x8a\xa0\xbd\xf1\x6b\x99\x84\x42\x5b\xe2\x3b\xc5\x5e\x12\x5c\x28\x4d\xb6\x0e\x4e\xc8\x5c\xe8\x01\x8a\xc5\xe7\xe4\x9d\x42\xee\x5d\x9c\xc4\xeb\xeb\x68\x09\x27\x92\x95\x9a\x11\x54\x73\xc4\x12\x80\xfb\x7d\xfe\xc5\x08\x60\x7f\x36\x41\xe0\x10\xba\xd6\x2b\x6c\xf1\xb4\x17\xfe\x26\x34\xe3\x4b\xf8\xa8\xe3\x91\xbe\x4f\x2a\xfc\xda\x81\xb8\xe7\xfe\xd5\x26\x50\x47\xf3\x1a\x65\x32\x81\xe0\x05\xb8\x4f\x32\x31\x26\x00\x4a\x53\x97\xc2\xc3\x0e\x2e\xa1\x26\x54\xab\x05\x8e\x56\x2f\x7d\xaf\x22\x84\x68\xa5\x8b\x97\xf6\xa4\xfd\xa8\xcc\x75\x41\x96\x86\xfd\x27\x3d\x29\x86\x8d\x7f\x4c\xd4\x8e\x73\x41\xf4\x1e\xe2\xdd\x58\x27\x97\xce\x9c\x94\xcf\x7a\x04\x2f\xdc\xed");

// float_exprs.wast:1581
assert_return(() => call($63, "f64.kahan_sum", [0, 256]), float64(9_105_671_289_202_277_512n));

// float_exprs.wast:1582
assert_return(() => call($63, "f64.plain_sum", [0, 256]), float64(9_105_671_289_202_539_655n));

// float_exprs.wast:1586
let $64 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x5f\x73\x75\x62\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x5f\x73\x75\x62\x00\x01\x0a\x9b\x80\x80\x80\x00\x02\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x93\x8c\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa1\x9a\x0b");

// float_exprs.wast:1594
assert_return(() => call($64, "f32.no_fold_neg_sub", [float32(-2_147_483_648), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1595
assert_return(() => call($64, "f32.no_fold_neg_sub", [float32(0), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1596
assert_return(() => call($64, "f32.no_fold_neg_sub", [float32(-2_147_483_648), float32(0)]), float32(0));

// float_exprs.wast:1597
assert_return(() => call($64, "f32.no_fold_neg_sub", [float32(0), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1599
assert_return(() => call($64, "f64.no_fold_neg_sub", [float64(-9_223_372_036_854_775_808n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1600
assert_return(() => call($64, "f64.no_fold_neg_sub", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1601
assert_return(() => call($64, "f64.no_fold_neg_sub", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// float_exprs.wast:1602
assert_return(() => call($64, "f64.no_fold_neg_sub", [float64(0n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1606
let $65 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x5f\x61\x64\x64\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x5f\x61\x64\x64\x00\x01\x0a\x9b\x80\x80\x80\x00\x02\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x92\x8c\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa0\x9a\x0b");

// float_exprs.wast:1614
assert_return(() => call($65, "f32.no_fold_neg_add", [float32(-2_147_483_648), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1615
assert_return(() => call($65, "f32.no_fold_neg_add", [float32(0), float32(-2_147_483_648)]), float32(-2_147_483_648));

// float_exprs.wast:1616
assert_return(() => call($65, "f32.no_fold_neg_add", [float32(-2_147_483_648), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1617
assert_return(() => call($65, "f32.no_fold_neg_add", [float32(0), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1619
assert_return(() => call($65, "f64.no_fold_neg_add", [float64(-9_223_372_036_854_775_808n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1620
assert_return(() => call($65, "f64.no_fold_neg_add", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1621
assert_return(() => call($65, "f64.no_fold_neg_add", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1622
assert_return(() => call($65, "f64.no_fold_neg_add", [float64(0n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1626
let $66 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb5\x80\x80\x80\x00\x02\x17\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x6e\x65\x67\x5f\x6e\x65\x67\x00\x00\x17\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x6e\x65\x67\x5f\x6e\x65\x67\x00\x01\x0a\x9d\x80\x80\x80\x00\x02\x89\x80\x80\x80\x00\x00\x20\x00\x8c\x20\x01\x8c\x92\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x9a\x20\x01\x9a\xa0\x0b");

// float_exprs.wast:1634
assert_return(() => call($66, "f32.no_fold_add_neg_neg", [float32(-2_147_483_648), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1635
assert_return(() => call($66, "f32.no_fold_add_neg_neg", [float32(0), float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1636
assert_return(() => call($66, "f32.no_fold_add_neg_neg", [float32(-2_147_483_648), float32(0)]), float32(0));

// float_exprs.wast:1637
assert_return(() => call($66, "f32.no_fold_add_neg_neg", [float32(0), float32(0)]), float32(-2_147_483_648));

// float_exprs.wast:1639
assert_return(() => call($66, "f64.no_fold_add_neg_neg", [float64(-9_223_372_036_854_775_808n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1640
assert_return(() => call($66, "f64.no_fold_add_neg_neg", [float64(0n), float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1641
assert_return(() => call($66, "f64.no_fold_add_neg_neg", [float64(-9_223_372_036_854_775_808n), float64(0n)]), float64(0n));

// float_exprs.wast:1642
assert_return(() => call($66, "f64.no_fold_add_neg_neg", [float64(0n), float64(0n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1646
let $67 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x6e\x65\x67\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x6e\x65\x67\x00\x01\x0a\x9b\x80\x80\x80\x00\x02\x88\x80\x80\x80\x00\x00\x20\x00\x8c\x20\x00\x92\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x9a\x20\x00\xa0\x0b");

// float_exprs.wast:1654
assert_return(() => call($67, "f32.no_fold_add_neg", [float32(0)]), float32(0));

// float_exprs.wast:1655
assert_return(() => call($67, "f32.no_fold_add_neg", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1656
assert_return(() => call($67, "f32.no_fold_add_neg", [float32(2_139_095_040)]), NaN);

// float_exprs.wast:1657
assert_return(() => call($67, "f32.no_fold_add_neg", [float32(-8_388_608)]), NaN);

// float_exprs.wast:1659
assert_return(() => call($67, "f64.no_fold_add_neg", [float64(0n)]), float64(0n));

// float_exprs.wast:1660
assert_return(() => call($67, "f64.no_fold_add_neg", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1661
assert_return(() => call($67, "f64.no_fold_add_neg", [float64(9_218_868_437_227_405_312n)]), NaN);

// float_exprs.wast:1662
assert_return(() => call($67, "f64.no_fold_add_neg", [float64(-4_503_599_627_370_496n)]), NaN);

// float_exprs.wast:1666
let $68 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb3\x80\x80\x80\x00\x02\x16\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x36\x78\x5f\x76\x69\x61\x5f\x61\x64\x64\x00\x00\x16\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x36\x78\x5f\x76\x69\x61\x5f\x61\x64\x64\x00\x01\x0a\xb1\x80\x80\x80\x00\x02\x93\x80\x80\x80\x00\x00\x20\x00\x20\x00\x92\x20\x00\x92\x20\x00\x92\x20\x00\x92\x20\x00\x92\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa0\x20\x00\xa0\x20\x00\xa0\x20\x00\xa0\x20\x00\xa0\x0b");

// float_exprs.wast:1680
assert_return(() => call($68, "f32.no_fold_6x_via_add", [float32(-248_724_218)]), float32(-226_389_051));

// float_exprs.wast:1681
assert_return(() => call($68, "f32.no_fold_6x_via_add", [float32(-1_721_109_546)]), float32(-1_699_776_799));

// float_exprs.wast:1682
assert_return(() => call($68, "f32.no_fold_6x_via_add", [float32(419_462_401)]), float32(440_449_921));

// float_exprs.wast:1683
assert_return(() => call($68, "f32.no_fold_6x_via_add", [float32(-1_339_491_814)]), float32(-1_317_177_562));

// float_exprs.wast:1684
assert_return(() => call($68, "f32.no_fold_6x_via_add", [float32(-411_035_323)]), float32(-390_060_569));

// float_exprs.wast:1686
assert_return(() => call($68, "f64.no_fold_6x_via_add", [float64(-4_309_081_858_386_493_466n)]), float64(-4_297_391_366_814_531_622n));

// float_exprs.wast:1687
assert_return(() => call($68, "f64.no_fold_6x_via_add", [float64(-7_022_610_029_164_385_868n)]), float64(-7_010_976_477_572_513_978n));

// float_exprs.wast:1688
assert_return(() => call($68, "f64.no_fold_6x_via_add", [float64(-3_391_333_941_044_614_478n)]), float64(-3_380_044_086_567_530_491n));

// float_exprs.wast:1689
assert_return(() => call($68, "f64.no_fold_6x_via_add", [float64(7_991_451_501_228_919_438n)]), float64(8_003_319_959_635_773_419n));

// float_exprs.wast:1690
assert_return(() => call($68, "f64.no_fold_6x_via_add", [float64(-3_559_817_214_342_053_846n)]), float64(-3_548_064_838_093_787_105n));

// float_exprs.wast:1695
let $69 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xad\x80\x80\x80\x00\x02\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x64\x69\x76\x00\x00\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x64\x69\x76\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x95\x20\x02\x95\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x20\x02\xa3\x0b");

// float_exprs.wast:1703
assert_return(() => call($69, "f32.no_fold_div_div", [float32(-419_725_036), float32(-1_208_098_039), float32(-993_649_720)]), float32(-383_526_370));

// float_exprs.wast:1704
assert_return(() => call($69, "f32.no_fold_div_div", [float32(485_052_055), float32(1_996_083_391), float32(-2_018_350_584)]), float32(-2_147_483_648));

// float_exprs.wast:1705
assert_return(() => call($69, "f32.no_fold_div_div", [float32(1_430_470_604), float32(186_144_382), float32(1_953_564_780)]), float32(2_139_095_040));

// float_exprs.wast:1706
assert_return(() => call($69, "f32.no_fold_div_div", [float32(-1_193_148_403), float32(-36_833_866), float32(-1_439_008_346)]), float32(-1_883_190_214));

// float_exprs.wast:1707
assert_return(() => call($69, "f32.no_fold_div_div", [float32(1_458_407_223), float32(1_537_931_089), float32(-33_977_952)]), float32(-2_147_460_296));

// float_exprs.wast:1709
assert_return(() => call($69, "f64.no_fold_div_div", [float64(6_128_077_243_319_875_447n), float64(7_240_092_044_185_667_120n), float64(-8_134_271_578_721_864_674n)]), float64(-2_210_593_891_645_096_446n));

// float_exprs.wast:1710
assert_return(() => call($69, "f64.no_fold_div_div", [float64(-1_050_810_706_012_978_081n), float64(4_478_922_858_584_402_707n), float64(6_032_094_754_408_482_817n)]), float64(-2_348_273_726_160_916_847n));

// float_exprs.wast:1711
assert_return(() => call($69, "f64.no_fold_div_div", [float64(-4_603_480_888_482_565_337n), float64(-650_001_454_671_340_565n), float64(5_375_701_731_263_473_827n)]), float64(44_472_927n));

// float_exprs.wast:1712
assert_return(() => call($69, "f64.no_fold_div_div", [float64(-899_455_629_398_594_276n), float64(911_654_786_857_739_111n), float64(8_937_284_546_802_896_640n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:1713
assert_return(() => call($69, "f64.no_fold_div_div", [float64(-8_611_036_605_595_348_103n), float64(1_924_400_690_116_523_912n), float64(-5_237_810_032_541_680_805n)]), float64(3_916_014_548_332_337_260n));

// float_exprs.wast:1719
let $70 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x91\x80\x80\x80\x00\x02\x60\x04\x7d\x7d\x7d\x7d\x01\x7d\x60\x04\x7c\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x73\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x64\x69\x76\x73\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x95\x20\x02\x20\x03\x95\x94\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x20\x02\x20\x03\xa3\xa2\x0b");

// float_exprs.wast:1727
assert_return(() => call($70, "f32.no_fold_mul_divs", [float32(-1_990_049_313), float32(301_403_678), float32(331_350_955), float32(-1_043_669_831)]), float32(148_760_966));

// float_exprs.wast:1728
assert_return(() => call($70, "f32.no_fold_mul_divs", [float32(-225_992_399), float32(1_276_265_036), float32(930_821_438), float32(1_044_692_964)]), float32(-552_104_622));

// float_exprs.wast:1729
assert_return(() => call($70, "f32.no_fold_mul_divs", [float32(-797_986_927), float32(-746_686_689), float32(-833_661_814), float32(-996_792_680)]), float32(1_176_926_862));

// float_exprs.wast:1730
assert_return(() => call($70, "f32.no_fold_mul_divs", [float32(-159_730_594), float32(787_270_424), float32(932_959_293), float32(1_724_950_821)]), float32(-8_388_608));

// float_exprs.wast:1731
assert_return(() => call($70, "f32.no_fold_mul_divs", [float32(622_783_177), float32(-1_617_324_527), float32(307_759_154), float32(768_171_421)]), float32(-1_450_305_832));

// float_exprs.wast:1733
assert_return(() => call($70, "f64.no_fold_mul_divs", [float64(-8_303_683_515_181_991_150n), float64(-6_701_684_694_034_543_777n), float64(-2_150_906_768_476_888_032n), float64(5_444_961_058_358_534_642n)]), float64(-4_590_417_466_149_327_125n));

// float_exprs.wast:1734
assert_return(() => call($70, "f64.no_fold_mul_divs", [float64(-4_097_298_744_420_200_536n), float64(468_238_185_841_254_727n), float64(-2_983_184_816_080_301_738n), float64(-2_509_246_387_524_496_044n)]), float64(-4_503_599_627_370_496n));

// float_exprs.wast:1735
assert_return(() => call($70, "f64.no_fold_mul_divs", [float64(-3_226_363_731_280_349_887n), float64(-3_748_806_255_160_083_000n), float64(-5_243_119_915_434_376_959n), float64(-1_315_639_942_224_082_070n)]), float64(1_202_126_128_702_318_245n));

// float_exprs.wast:1736
assert_return(() => call($70, "f64.no_fold_mul_divs", [float64(-4_031_774_675_728_166_851n), float64(-6_177_416_079_223_180_417n), float64(298_707_625_567_048_656n), float64(5_613_107_161_545_919_917n)]), float64(0n));

// float_exprs.wast:1737
assert_return(() => call($70, "f64.no_fold_mul_divs", [float64(4_529_089_342_618_677_929n), float64(3_361_245_300_043_094_097n), float64(1_815_899_012_046_749_567n), float64(-3_028_347_569_357_999_226n)]), float64(-7_827_710_772_124_110_401n));

// float_exprs.wast:1741
let $71 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xaf\x80\x80\x80\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x64\x69\x76\x73\x00\x00\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x64\x69\x76\x73\x00\x01\x0a\xa5\x80\x80\x80\x00\x02\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\x95\x20\x01\x20\x02\x95\x92\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\xa3\x20\x01\x20\x02\xa3\xa0\x0b");

// float_exprs.wast:1749
assert_return(() => call($71, "f32.no_fold_add_divs", [float32(1_136_439_096), float32(-1_121_692_937), float32(-20_114_906)]), float32(-2_073_328_421));

// float_exprs.wast:1750
assert_return(() => call($71, "f32.no_fold_add_divs", [float32(-1_604_893_452), float32(-1_485_518_817), float32(-686_062_266)]), float32(264_862_203));

// float_exprs.wast:1751
assert_return(() => call($71, "f32.no_fold_add_divs", [float32(-1_464_782_332), float32(530_019_033), float32(-671_713_323)]), float32(272_108_594));

// float_exprs.wast:1752
assert_return(() => call($71, "f32.no_fold_add_divs", [float32(-1_929_179_496), float32(245_111_369), float32(-342_963_863)]), float32(0));

// float_exprs.wast:1753
assert_return(() => call($71, "f32.no_fold_add_divs", [float32(982_471_119), float32(1_045_692_415), float32(37_216_954)]), float32(2_073_319_791));

// float_exprs.wast:1755
assert_return(() => call($71, "f64.no_fold_add_divs", [float64(-2_676_158_747_940_507_338n), float64(6_564_157_675_451_289_455n), float64(8_712_254_759_989_822_359n)]), float64(2_458_462_832_069_881_218n));

// float_exprs.wast:1756
assert_return(() => call($71, "f64.no_fold_add_divs", [float64(-4_376_899_203_454_880_333n), float64(4_634_122_757_084_803_708n), float64(-8_921_846_685_577_199_381n)]), float64(9_152_039_358_940_941_283n));

// float_exprs.wast:1757
assert_return(() => call($71, "f64.no_fold_add_divs", [float64(-8_967_095_370_413_498_994n), float64(214_573_661_502_224_386n), float64(6_877_551_490_107_761_946n)]), float64(0n));

// float_exprs.wast:1758
assert_return(() => call($71, "f64.no_fold_add_divs", [float64(6_019_502_660_029_506_228n), float64(-3_130_231_039_890_715_375n), float64(4_039_967_192_182_502_935n)]), float64(-2_563_218_763_283_574_316n));

// float_exprs.wast:1759
assert_return(() => call($71, "f64.no_fold_add_divs", [float64(-7_891_076_856_888_421_775n), float64(1_207_418_919_037_494_573n), float64(4_296_330_408_727_545_598n)]), float64(-7_580_232_606_811_204_061n));

// float_exprs.wast:1763
let $72 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb5\x80\x80\x80\x00\x02\x17\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x71\x72\x74\x5f\x73\x71\x75\x61\x72\x65\x00\x00\x17\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x71\x72\x74\x5f\x73\x71\x75\x61\x72\x65\x00\x01\x0a\x9b\x80\x80\x80\x00\x02\x88\x80\x80\x80\x00\x00\x20\x00\x20\x00\x94\x91\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa2\x9f\x0b");

// float_exprs.wast:1771
assert_return(() => call($72, "f32.no_fold_sqrt_square", [float32(-1_632_740_981)]), float32(514_742_673));

// float_exprs.wast:1772
assert_return(() => call($72, "f32.no_fold_sqrt_square", [float32(-1_688_699_662)]), float32(458_819_801));

// float_exprs.wast:1773
assert_return(() => call($72, "f32.no_fold_sqrt_square", [float32(-1_670_438_722)]), float32(477_049_564));

// float_exprs.wast:1774
assert_return(() => call($72, "f32.no_fold_sqrt_square", [float32(347_235_385)]), float32(0));

// float_exprs.wast:1775
assert_return(() => call($72, "f32.no_fold_sqrt_square", [float32(1_978_715_378)]), float32(2_139_095_040));

// float_exprs.wast:1777
assert_return(() => call($72, "f64.no_fold_sqrt_square", [float64(2_225_189_009_770_021_885n)]), float64(2_225_189_011_649_283_571n));

// float_exprs.wast:1778
assert_return(() => call($72, "f64.no_fold_sqrt_square", [float64(-6_929_695_613_935_710_845n)]), float64(2_293_676_422_919_064_961n));

// float_exprs.wast:1779
assert_return(() => call($72, "f64.no_fold_sqrt_square", [float64(-6_961_979_587_947_696_610n)]), float64(2_261_392_448_906_973_069n));

// float_exprs.wast:1780
assert_return(() => call($72, "f64.no_fold_sqrt_square", [float64(-7_390_259_329_159_903_888n)]), float64(0n));

// float_exprs.wast:1781
assert_return(() => call($72, "f64.no_fold_sqrt_square", [float64(8_465_406_758_332_488_378n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:1785
let $73 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb1\x80\x80\x80\x00\x02\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x73\x71\x72\x74\x73\x00\x00\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x73\x71\x72\x74\x73\x00\x01\x0a\x9d\x80\x80\x80\x00\x02\x89\x80\x80\x80\x00\x00\x20\x00\x91\x20\x01\x91\x94\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x9f\x20\x01\x9f\xa2\x0b");

// float_exprs.wast:1793
assert_return(() => call($73, "f32.no_fold_mul_sqrts", [float32(24_047_316), float32(-1_777_145_579)]), NaN);

// float_exprs.wast:1794
assert_return(() => call($73, "f32.no_fold_mul_sqrts", [float32(295_749_258), float32(803_416_494)]), float32(549_395_357));

// float_exprs.wast:1795
assert_return(() => call($73, "f32.no_fold_mul_sqrts", [float32(329_708_528), float32(1_120_042_892)]), float32(724_841_268));

// float_exprs.wast:1796
assert_return(() => call($73, "f32.no_fold_mul_sqrts", [float32(1_916_535_951), float32(994_115_420)]), float32(1_455_324_620));

// float_exprs.wast:1797
assert_return(() => call($73, "f32.no_fold_mul_sqrts", [float32(598_482_176), float32(990_534_933)]), float32(794_443_079));

// float_exprs.wast:1799
assert_return(() => call($73, "f64.no_fold_mul_sqrts", [float64(-7_472_297_219_557_110_338n), float64(-4_648_847_603_553_977_494n)]), NaN);

// float_exprs.wast:1800
assert_return(() => call($73, "f64.no_fold_mul_sqrts", [float64(1_712_959_863_583_927_241n), float64(2_792_003_944_717_853_898n)]), float64(2_252_469_008_297_979_510n));

// float_exprs.wast:1801
assert_return(() => call($73, "f64.no_fold_mul_sqrts", [float64(4_208_351_758_938_831_157n), float64(497_361_189_565_243_603n)]), float64(2_352_856_462_697_312_748n));

// float_exprs.wast:1802
assert_return(() => call($73, "f64.no_fold_mul_sqrts", [float64(2_976_792_199_849_816_182n), float64(2_030_444_188_042_608_984n)]), float64(2_503_613_111_125_550_255n));

// float_exprs.wast:1803
assert_return(() => call($73, "f64.no_fold_mul_sqrts", [float64(4_717_634_334_691_577_101n), float64(6_919_598_687_070_693_285n)]), float64(5_818_898_567_902_921_651n));

// float_exprs.wast:1807
let $74 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb1\x80\x80\x80\x00\x02\x15\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x71\x72\x74\x73\x00\x00\x15\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x73\x71\x72\x74\x73\x00\x01\x0a\x9d\x80\x80\x80\x00\x02\x89\x80\x80\x80\x00\x00\x20\x00\x91\x20\x01\x91\x95\x0b\x89\x80\x80\x80\x00\x00\x20\x00\x9f\x20\x01\x9f\xa3\x0b");

// float_exprs.wast:1815
assert_return(() => call($74, "f32.no_fold_div_sqrts", [float32(-866_167_587), float32(-1_561_478_217)]), NaN);

// float_exprs.wast:1816
assert_return(() => call($74, "f32.no_fold_div_sqrts", [float32(1_339_867_611), float32(1_296_568_207)]), float32(1_086_203_643));

// float_exprs.wast:1817
assert_return(() => call($74, "f32.no_fold_div_sqrts", [float32(65_679_161), float32(1_196_795_110)]), float32(498_959_746));

// float_exprs.wast:1818
assert_return(() => call($74, "f32.no_fold_div_sqrts", [float32(1_566_143_010), float32(816_694_667)]), float32(1_439_333_972));

// float_exprs.wast:1819
assert_return(() => call($74, "f32.no_fold_div_sqrts", [float32(130_133_331), float32(208_189_588)]), float32(1_025_844_032));

// float_exprs.wast:1821
assert_return(() => call($74, "f64.no_fold_div_sqrts", [float64(-7_816_830_599_921_856_153n), float64(-5_455_613_808_789_854_953n)]), NaN);

// float_exprs.wast:1822
assert_return(() => call($74, "f64.no_fold_div_sqrts", [float64(1_966_780_663_211_935_584n), float64(7_043_916_066_229_883_379n)]), float64(2_068_364_230_648_818_889n));

// float_exprs.wast:1823
assert_return(() => call($74, "f64.no_fold_div_sqrts", [float64(6_965_599_900_716_272_009n), float64(4_118_781_927_977_980_600n)]), float64(6_030_491_425_828_883_991n));

// float_exprs.wast:1824
assert_return(() => call($74, "f64.no_fold_div_sqrts", [float64(962_551_478_168_675_351n), float64(5_918_292_176_617_055_751n)]), float64(2_129_092_583_060_403_799n));

// float_exprs.wast:1825
assert_return(() => call($74, "f64.no_fold_div_sqrts", [float64(1_056_821_405_580_891_413n), float64(8_865_548_665_903_786_673n)]), float64(702_724_841_785_532_050n));

// float_exprs.wast:1829
let $75 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb7\x80\x80\x80\x00\x02\x18\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x73\x71\x72\x74\x5f\x64\x69\x76\x00\x00\x18\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x73\x71\x72\x74\x5f\x64\x69\x76\x00\x01\x0a\xa1\x80\x80\x80\x00\x02\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x91\x94\x20\x01\x95\x0b\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x9f\xa2\x20\x01\xa3\x0b");

// float_exprs.wast:1837
assert_return(() => call($75, "f32.no_fold_mul_sqrt_div", [float32(-394_636_315), float32(1_843_416_431)]), float32(-8_388_608));

// float_exprs.wast:1838
assert_return(() => call($75, "f32.no_fold_mul_sqrt_div", [float32(-2_084_020_338), float32(256_302_916)]), float32(-2_147_483_648));

// float_exprs.wast:1839
assert_return(() => call($75, "f32.no_fold_mul_sqrt_div", [float32(1_312_995_444), float32(2_371_494)]), float32(1_849_105_549));

// float_exprs.wast:1840
assert_return(() => call($75, "f32.no_fold_mul_sqrt_div", [float32(-718_429_399), float32(2_010_442_638)]), float32(-1_190_747_875));

// float_exprs.wast:1841
assert_return(() => call($75, "f32.no_fold_mul_sqrt_div", [float32(-1_010_269_438), float32(1_124_488_329)]), float32(-1_039_505_674));

// float_exprs.wast:1843
assert_return(() => call($75, "f64.no_fold_mul_sqrt_div", [float64(7_751_219_282_814_906_463n), float64(8_023_732_701_704_228_537n)]), float64(9_218_868_437_227_405_312n));

// float_exprs.wast:1844
assert_return(() => call($75, "f64.no_fold_mul_sqrt_div", [float64(-8_338_215_759_639_944_533n), float64(1_595_930_056_995_453_707n)]), float64(-9_223_372_036_854_775_808n));

// float_exprs.wast:1845
assert_return(() => call($75, "f64.no_fold_mul_sqrt_div", [float64(2_695_209_648_295_623_224n), float64(7_133_480_874_314_061_811n)]), float64(1_432_338_140_829_931_582n));

// float_exprs.wast:1846
assert_return(() => call($75, "f64.no_fold_mul_sqrt_div", [float64(-3_030_219_817_760_217_403n), float64(2_434_442_666_062_773_630n)]), float64(-1_944_153_893_811_433_138n));

// float_exprs.wast:1847
assert_return(() => call($75, "f64.no_fold_mul_sqrt_div", [float64(5_076_901_024_782_455_083n), float64(8_399_438_310_541_178_654n)]), float64(3_180_744_754_328_846_996n));

// float_exprs.wast:1852
let $76 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xcd\x80\x80\x80\x00\x02\x23\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6c\x75\x73\x68\x5f\x69\x6e\x74\x65\x72\x6d\x65\x64\x69\x61\x74\x65\x5f\x73\x75\x62\x6e\x6f\x72\x6d\x61\x6c\x00\x00\x23\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6c\x75\x73\x68\x5f\x69\x6e\x74\x65\x72\x6d\x65\x64\x69\x61\x74\x65\x5f\x73\x75\x62\x6e\x6f\x72\x6d\x61\x6c\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x02\x94\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa2\x0b");

// float_exprs.wast:1860
assert_return(() => call($76, "f32.no_flush_intermediate_subnormal", [float32(8_388_608), float32(872_415_232), float32(1_258_291_200)]), float32(8_388_608));

// float_exprs.wast:1861
assert_return(() => call($76, "f64.no_flush_intermediate_subnormal", [float64(4_503_599_627_370_496n), float64(4_372_995_238_176_751_616n), float64(4_841_369_599_423_283_200n)]), float64(4_503_599_627_370_496n));

// float_exprs.wast:1866
let $77 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x93\x80\x80\x80\x00\x03\x60\x02\x7d\x7d\x01\x7f\x60\x02\x7c\x7c\x01\x7f\x60\x02\x7c\x7d\x01\x7d\x03\x88\x80\x80\x80\x00\x07\x00\x00\x00\x01\x01\x01\x02\x07\xff\x80\x80\x80\x00\x07\x0f\x66\x33\x32\x2e\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x65\x71\x00\x00\x0f\x66\x33\x32\x2e\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x6c\x65\x00\x01\x0f\x66\x33\x32\x2e\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x6c\x74\x00\x02\x0f\x66\x36\x34\x2e\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x65\x71\x00\x03\x0f\x66\x36\x34\x2e\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x6c\x65\x00\x04\x0f\x66\x36\x34\x2e\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x6c\x74\x00\x05\x0f\x72\x65\x63\x6f\x64\x69\x6e\x67\x5f\x64\x65\x6d\x6f\x74\x65\x00\x06\x0a\xe8\x80\x80\x80\x00\x07\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x00\x5b\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x00\x5f\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x00\x5d\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x00\x61\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x00\x65\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x00\x63\x0b\x88\x80\x80\x80\x00\x00\x20\x00\xb6\x20\x01\x94\x0b");

// float_exprs.wast:1889
assert_return(() => call($77, "f32.recoding_eq", [float32(-8_388_608), float32(1_077_936_128)]), 1);

// float_exprs.wast:1890
assert_return(() => call($77, "f32.recoding_le", [float32(-8_388_608), float32(1_077_936_128)]), 1);

// float_exprs.wast:1891
assert_return(() => call($77, "f32.recoding_lt", [float32(-8_388_608), float32(1_077_936_128)]), 0);

// float_exprs.wast:1893
assert_return(() => call($77, "f32.recoding_eq", [float32(0), float32(1_065_353_216)]), 1);

// float_exprs.wast:1894
assert_return(() => call($77, "f32.recoding_le", [float32(0), float32(1_065_353_216)]), 1);

// float_exprs.wast:1895
assert_return(() => call($77, "f32.recoding_lt", [float32(0), float32(1_065_353_216)]), 0);

// float_exprs.wast:1897
assert_return(() => call($77, "f64.recoding_eq", [float64(-4_503_599_627_370_496n), float64(4_613_937_818_241_073_152n)]), 1);

// float_exprs.wast:1898
assert_return(() => call($77, "f64.recoding_le", [float64(-4_503_599_627_370_496n), float64(4_613_937_818_241_073_152n)]), 1);

// float_exprs.wast:1899
assert_return(() => call($77, "f64.recoding_lt", [float64(-4_503_599_627_370_496n), float64(4_613_937_818_241_073_152n)]), 0);

// float_exprs.wast:1901
assert_return(() => call($77, "f64.recoding_eq", [float64(0n), float64(4_607_182_418_800_017_408n)]), 1);

// float_exprs.wast:1902
assert_return(() => call($77, "f64.recoding_le", [float64(0n), float64(4_607_182_418_800_017_408n)]), 1);

// float_exprs.wast:1903
assert_return(() => call($77, "f64.recoding_lt", [float64(0n), float64(4_607_182_418_800_017_408n)]), 0);

// float_exprs.wast:1905
assert_return(() => call($77, "recoding_demote", [float64(4_014_054_135_371_399_168n), float32(1_150_853_120)]), float32(46_548_238));

// float_exprs.wast:1910
let $78 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7f\x60\x03\x7c\x7c\x7c\x01\x7f\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xc1\x80\x80\x80\x00\x02\x1d\x66\x33\x32\x2e\x6e\x6f\x5f\x65\x78\x74\x65\x6e\x64\x65\x64\x5f\x70\x72\x65\x63\x69\x73\x69\x6f\x6e\x5f\x64\x69\x76\x00\x00\x1d\x66\x36\x34\x2e\x6e\x6f\x5f\x65\x78\x74\x65\x6e\x64\x65\x64\x5f\x70\x72\x65\x63\x69\x73\x69\x6f\x6e\x5f\x64\x69\x76\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x95\x20\x02\x5b\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x20\x02\x61\x0b");

// float_exprs.wast:1918
assert_return(() => call($78, "f32.no_extended_precision_div", [float32(1_077_936_128), float32(1_088_421_888), float32(1_054_567_863)]), 1);

// float_exprs.wast:1919
assert_return(() => call($78, "f64.no_extended_precision_div", [float64(4_613_937_818_241_073_152n), float64(4_619_567_317_775_286_272n), float64(4_601_392_076_421_969_627n)]), 1);

// float_exprs.wast:1926
let $79 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb5\x80\x80\x80\x00\x02\x17\x66\x33\x32\x2e\x6e\x6f\x5f\x64\x69\x73\x74\x72\x69\x62\x75\x74\x65\x5f\x65\x78\x61\x63\x74\x00\x00\x17\x66\x36\x34\x2e\x6e\x6f\x5f\x64\x69\x73\x74\x72\x69\x62\x75\x74\x65\x5f\x65\x78\x61\x63\x74\x00\x01\x0a\xb9\x80\x80\x80\x00\x02\x93\x80\x80\x80\x00\x00\x43\x00\x00\x00\xc1\x20\x00\x94\x43\x00\x00\x00\x41\x20\x00\x94\x92\x0b\x9b\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x20\xc0\x20\x00\xa2\x44\x00\x00\x00\x00\x00\x00\x20\x40\x20\x00\xa2\xa0\x0b");

// float_exprs.wast:1934
assert_return(() => call($79, "f32.no_distribute_exact", [float32(-2_147_483_648)]), float32(0));

// float_exprs.wast:1935
assert_return(() => call($79, "f64.no_distribute_exact", [float64(-9_223_372_036_854_775_808n)]), float64(0n));

// float_exprs.wast:1940
let $80 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa9\x80\x80\x80\x00\x06\x60\x01\x7d\x01\x7d\x60\x04\x7d\x7d\x7d\x7d\x01\x7d\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x60\x04\x7c\x7c\x7c\x7c\x01\x7c\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x8b\x80\x80\x80\x00\x0a\x00\x01\x02\x02\x01\x03\x04\x05\x05\x04\x07\xb5\x81\x80\x80\x00\x0a\x08\x66\x33\x32\x2e\x73\x71\x72\x74\x00\x00\x0f\x66\x33\x32\x2e\x78\x6b\x63\x64\x5f\x73\x71\x72\x74\x5f\x32\x00\x01\x0f\x66\x33\x32\x2e\x78\x6b\x63\x64\x5f\x73\x71\x72\x74\x5f\x33\x00\x02\x0f\x66\x33\x32\x2e\x78\x6b\x63\x64\x5f\x73\x71\x72\x74\x5f\x35\x00\x03\x16\x66\x33\x32\x2e\x78\x6b\x63\x64\x5f\x62\x65\x74\x74\x65\x72\x5f\x73\x71\x72\x74\x5f\x35\x00\x04\x08\x66\x36\x34\x2e\x73\x71\x72\x74\x00\x05\x0f\x66\x36\x34\x2e\x78\x6b\x63\x64\x5f\x73\x71\x72\x74\x5f\x32\x00\x06\x0f\x66\x36\x34\x2e\x78\x6b\x63\x64\x5f\x73\x71\x72\x74\x5f\x33\x00\x07\x0f\x66\x36\x34\x2e\x78\x6b\x63\x64\x5f\x73\x71\x72\x74\x5f\x35\x00\x08\x16\x66\x36\x34\x2e\x78\x6b\x63\x64\x5f\x62\x65\x74\x74\x65\x72\x5f\x73\x71\x72\x74\x5f\x35\x00\x09\x0a\xb1\x81\x80\x80\x00\x0a\x85\x80\x80\x80\x00\x00\x20\x00\x91\x0b\x90\x80\x80\x80\x00\x00\x20\x00\x20\x01\x95\x20\x02\x20\x03\x20\x02\x93\x95\x92\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x94\x20\x02\x95\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x95\x20\x02\x20\x00\x95\x92\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\x94\x92\x20\x03\x20\x01\x20\x02\x94\x93\x95\x0b\x85\x80\x80\x80\x00\x00\x20\x00\x9f\x0b\x90\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x20\x02\x20\x03\x20\x02\xa1\xa3\xa0\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa2\x20\x02\xa3\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x20\x02\x20\x00\xa3\xa0\x0b\x93\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\xa2\xa0\x20\x03\x20\x01\x20\x02\xa2\xa1\xa3\x0b");

// float_exprs.wast:1972
assert_return(() => call($80, "f32.sqrt", [float32(1_073_741_824)]), float32(1_068_827_891));

// float_exprs.wast:1973
assert_return(() => call($80, "f32.xkcd_sqrt_2", [float32(1_077_936_128), float32(1_084_227_584), float32(1_078_530_011), float32(1_088_421_888)]), float32(1_068_827_946));

// float_exprs.wast:1974
assert_return(() => call($80, "f32.sqrt", [float32(1_077_936_128)]), float32(1_071_494_103));

// float_exprs.wast:1975
assert_return(() => call($80, "f32.xkcd_sqrt_3", [float32(1_073_741_824), float32(1_076_754_516), float32(1_078_530_011)]), float32(1_071_481_194));

// float_exprs.wast:1976
assert_return(() => call($80, "f32.sqrt", [float32(1_084_227_584)]), float32(1_074_731_965));

// float_exprs.wast:1977
assert_return(() => call($80, "f32.xkcd_sqrt_5", [float32(1_073_741_824), float32(1_076_754_516), float32(1_077_936_128)]), float32(1_074_730_668));

// float_exprs.wast:1978
assert_return(() => call($80, "f32.xkcd_better_sqrt_5", [float32(1_095_761_920), float32(1_082_130_432), float32(1_078_530_011), float32(1_103_101_952)]), float32(1_074_731_965));

// float_exprs.wast:1980
assert_return(() => call($80, "f64.sqrt", [float64(4_611_686_018_427_387_904n)]), float64(4_609_047_870_845_172_685n));

// float_exprs.wast:1981
assert_return(() => call($80, "f64.xkcd_sqrt_2", [float64(4_613_937_818_241_073_152n), float64(4_617_315_517_961_601_024n), float64(4_614_256_656_552_045_848n), float64(4_619_567_317_775_286_272n)]), float64(4_609_047_900_099_118_431n));

// float_exprs.wast:1982
assert_return(() => call($80, "f64.sqrt", [float64(4_613_937_818_241_073_152n)]), float64(4_610_479_282_544_200_874n));

// float_exprs.wast:1983
assert_return(() => call($80, "f64.xkcd_sqrt_3", [float64(4_611_686_018_427_387_904n), float64(4_613_303_445_314_885_481n), float64(4_614_256_656_552_045_848n)]), float64(4_610_472_352_185_749_397n));

// float_exprs.wast:1984
assert_return(() => call($80, "f64.sqrt", [float64(4_617_315_517_961_601_024n)]), float64(4_612_217_596_255_138_984n));

// float_exprs.wast:1985
assert_return(() => call($80, "f64.xkcd_sqrt_5", [float64(4_611_686_018_427_387_904n), float64(4_613_303_445_314_885_481n), float64(4_613_937_818_241_073_152n)]), float64(4_612_216_900_234_722_254n));

// float_exprs.wast:1986
assert_return(() => call($80, "f64.xkcd_better_sqrt_5", [float64(4_623_507_967_449_235_456n), float64(4_616_189_618_054_758_400n), float64(4_614_256_656_552_045_848n), float64(4_627_448_617_123_184_640n)]), float64(4_612_217_595_876_713_891n));

// float_exprs.wast:1991
let $81 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa9\x80\x80\x80\x00\x02\x11\x66\x33\x32\x2e\x63\x6f\x6d\x70\x75\x74\x65\x5f\x72\x61\x64\x69\x78\x00\x00\x11\x66\x36\x34\x2e\x63\x6f\x6d\x70\x75\x74\x65\x5f\x72\x61\x64\x69\x78\x00\x01\x0a\xa5\x81\x80\x80\x00\x02\xc3\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x00\x92\x22\x00\x43\x00\x00\x80\x3f\x92\x20\x00\x93\x43\x00\x00\x80\xbf\x92\x43\x00\x00\x00\x00\x5b\x0d\x00\x0b\x03\x40\x20\x00\x20\x01\x43\x00\x00\x80\x3f\x92\x22\x01\x92\x20\x00\x93\x20\x01\x93\x43\x00\x00\x00\x00\x5c\x0d\x00\x0b\x20\x01\x0b\xd7\x80\x80\x80\x00\x00\x03\x40\x20\x00\x20\x00\xa0\x22\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa0\x20\x00\xa1\x44\x00\x00\x00\x00\x00\x00\xf0\xbf\xa0\x44\x00\x00\x00\x00\x00\x00\x00\x00\x61\x0d\x00\x0b\x03\x40\x20\x00\x20\x01\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa0\x22\x01\xa0\x20\x00\xa1\x20\x01\xa1\x44\x00\x00\x00\x00\x00\x00\x00\x00\x62\x0d\x00\x0b\x20\x01\x0b");

// float_exprs.wast:2069
assert_return(() => call($81, "f32.compute_radix", [float32(1_065_353_216), float32(1_065_353_216)]), float32(1_073_741_824));

// float_exprs.wast:2070
assert_return(() => call($81, "f64.compute_radix", [float64(4_607_182_418_800_017_408n), float64(4_607_182_418_800_017_408n)]), float64(4_611_686_018_427_387_904n));

// float_exprs.wast:2075
let $82 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xb7\x80\x80\x80\x00\x02\x18\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x31\x5f\x6d\x75\x6c\x5f\x61\x64\x64\x00\x00\x18\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x31\x5f\x6d\x75\x6c\x5f\x61\x64\x64\x00\x01\x0a\xaf\x80\x80\x80\x00\x02\x90\x80\x80\x80\x00\x00\x20\x00\x43\x00\x00\x80\x3f\x93\x20\x01\x94\x20\x01\x92\x0b\x94\x80\x80\x80\x00\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa1\x20\x01\xa2\x20\x01\xa0\x0b");

// float_exprs.wast:2083
assert_return(() => call($82, "f32.no_fold_sub1_mul_add", [float32(796_917_760), float32(1_065_353_216)]), float32(0));

// float_exprs.wast:2084
assert_return(() => call($82, "f64.no_fold_sub1_mul_add", [float64(4_318_952_042_648_305_664n), float64(4_607_182_418_800_017_408n)]), float64(0n));

// float_exprs.wast:2089
let $83 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7f\x60\x03\x7c\x7c\x7c\x01\x7f\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\x89\x81\x80\x80\x00\x04\x1f\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x6c\x65\x5f\x6d\x6f\x6e\x6f\x74\x6f\x6e\x69\x63\x69\x74\x79\x00\x00\x1f\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x67\x65\x5f\x6d\x6f\x6e\x6f\x74\x6f\x6e\x69\x63\x69\x74\x79\x00\x01\x1f\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x6c\x65\x5f\x6d\x6f\x6e\x6f\x74\x6f\x6e\x69\x63\x69\x74\x79\x00\x02\x1f\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x61\x64\x64\x5f\x67\x65\x5f\x6d\x6f\x6e\x6f\x74\x6f\x6e\x69\x63\x69\x74\x79\x00\x03\x0a\xc9\x80\x80\x80\x00\x04\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\x92\x20\x01\x20\x02\x92\x5f\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\x92\x20\x01\x20\x02\x92\x60\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\xa0\x20\x01\x20\x02\xa0\x65\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x02\xa0\x20\x01\x20\x02\xa0\x66\x0b");

// float_exprs.wast:2103
assert_return(() => call($83, "f32.no_fold_add_le_monotonicity", [float32(0), float32(0), float32(2_143_289_344)]), 0);

// float_exprs.wast:2104
assert_return(() => call($83, "f32.no_fold_add_le_monotonicity", [float32(2_139_095_040), float32(-8_388_608), float32(2_139_095_040)]), 0);

// float_exprs.wast:2105
assert_return(() => call($83, "f64.no_fold_add_le_monotonicity", [float64(0n), float64(0n), float64(9_221_120_237_041_090_560n)]), 0);

// float_exprs.wast:2106
assert_return(() => call($83, "f64.no_fold_add_le_monotonicity", [float64(9_218_868_437_227_405_312n), float64(-4_503_599_627_370_496n), float64(9_218_868_437_227_405_312n)]), 0);

// float_exprs.wast:2110
let $84 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7f\x60\x02\x7c\x7c\x01\x7f\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xe9\x80\x80\x80\x00\x08\x0a\x66\x33\x32\x2e\x6e\x6f\x74\x5f\x6c\x74\x00\x00\x0a\x66\x33\x32\x2e\x6e\x6f\x74\x5f\x6c\x65\x00\x01\x0a\x66\x33\x32\x2e\x6e\x6f\x74\x5f\x67\x74\x00\x02\x0a\x66\x33\x32\x2e\x6e\x6f\x74\x5f\x67\x65\x00\x03\x0a\x66\x36\x34\x2e\x6e\x6f\x74\x5f\x6c\x74\x00\x04\x0a\x66\x36\x34\x2e\x6e\x6f\x74\x5f\x6c\x65\x00\x05\x0a\x66\x36\x34\x2e\x6e\x6f\x74\x5f\x67\x74\x00\x06\x0a\x66\x36\x34\x2e\x6e\x6f\x74\x5f\x67\x65\x00\x07\x0a\xe9\x80\x80\x80\x00\x08\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5d\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5f\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5e\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x60\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x63\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x65\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x64\x45\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x66\x45\x0b");

// float_exprs.wast:2136
assert_return(() => call($84, "f32.not_lt", [float32(2_143_289_344), float32(0)]), 1);

// float_exprs.wast:2137
assert_return(() => call($84, "f32.not_le", [float32(2_143_289_344), float32(0)]), 1);

// float_exprs.wast:2138
assert_return(() => call($84, "f32.not_gt", [float32(2_143_289_344), float32(0)]), 1);

// float_exprs.wast:2139
assert_return(() => call($84, "f32.not_ge", [float32(2_143_289_344), float32(0)]), 1);

// float_exprs.wast:2140
assert_return(() => call($84, "f64.not_lt", [float64(9_221_120_237_041_090_560n), float64(0n)]), 1);

// float_exprs.wast:2141
assert_return(() => call($84, "f64.not_le", [float64(9_221_120_237_041_090_560n), float64(0n)]), 1);

// float_exprs.wast:2142
assert_return(() => call($84, "f64.not_gt", [float64(9_221_120_237_041_090_560n), float64(0n)]), 1);

// float_exprs.wast:2143
assert_return(() => call($84, "f64.not_ge", [float64(9_221_120_237_041_090_560n), float64(0n)]), 1);

// float_exprs.wast:2149
let $85 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7d\x60\x00\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\x9d\x80\x80\x80\x00\x02\x0b\x66\x33\x32\x2e\x65\x70\x73\x69\x6c\x6f\x6e\x00\x00\x0b\x66\x36\x34\x2e\x65\x70\x73\x69\x6c\x6f\x6e\x00\x01\x0a\xdd\x80\x80\x80\x00\x02\x9f\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\x43\x00\x00\x40\x40\x43\x00\x00\x80\x40\x43\x00\x00\x40\x40\x95\x43\x00\x00\x80\x3f\x93\x94\x93\x0b\xb3\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x44\x00\x00\x00\x00\x00\x00\x08\x40\x44\x00\x00\x00\x00\x00\x00\x10\x40\x44\x00\x00\x00\x00\x00\x00\x08\x40\xa3\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa1\xa2\xa1\x0b");

// float_exprs.wast:2157
assert_return(() => call($85, "f32.epsilon", []), float32(-1_275_068_416));

// float_exprs.wast:2158
assert_return(() => call($85, "f64.epsilon", []), float64(4_372_995_238_176_751_616n));

// float_exprs.wast:2164
let $86 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x01\x7d\x60\x00\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\x9d\x80\x80\x80\x00\x02\x0b\x66\x33\x32\x2e\x65\x70\x73\x69\x6c\x6f\x6e\x00\x00\x0b\x66\x36\x34\x2e\x65\x70\x73\x69\x6c\x6f\x6e\x00\x01\x0a\xef\x80\x80\x80\x00\x02\xaa\x80\x80\x80\x00\x01\x02\x7d\x43\x00\x00\x80\x3f\x21\x00\x03\x40\x20\x00\x22\x01\x43\x00\x00\x00\x3f\x94\x22\x00\x43\x00\x00\x80\x3f\x92\x43\x00\x00\x80\x3f\x5e\x0d\x00\x0b\x20\x01\x0b\xba\x80\x80\x80\x00\x01\x02\x7c\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x21\x00\x03\x40\x20\x00\x22\x01\x44\x00\x00\x00\x00\x00\x00\xe0\x3f\xa2\x22\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa0\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x64\x0d\x00\x0b\x20\x01\x0b");

// float_exprs.wast:2212
assert_return(() => call($86, "f32.epsilon", []), float32(872_415_232));

// float_exprs.wast:2213
assert_return(() => call($86, "f64.epsilon", []), float64(4_372_995_238_176_751_616n));

// float_exprs.wast:2218
let $87 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7f\x60\x02\x7c\x7c\x01\x7f\x03\x89\x80\x80\x80\x00\x08\x00\x00\x00\x00\x01\x01\x01\x01\x07\xb9\x81\x80\x80\x00\x08\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x6c\x74\x00\x00\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x6c\x65\x00\x01\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x67\x74\x00\x02\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x67\x65\x00\x03\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x6c\x74\x00\x04\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x6c\x65\x00\x05\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x67\x74\x00\x06\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x74\x72\x69\x63\x68\x6f\x74\x6f\x6d\x79\x5f\x67\x65\x00\x07\x0a\x91\x81\x80\x80\x00\x08\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5d\x20\x00\x20\x01\x60\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5f\x20\x00\x20\x01\x5e\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x5e\x20\x00\x20\x01\x5f\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x60\x20\x00\x20\x01\x5d\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x63\x20\x00\x20\x01\x66\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x65\x20\x00\x20\x01\x64\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x64\x20\x00\x20\x01\x65\x72\x0b\x8d\x80\x80\x80\x00\x00\x20\x00\x20\x01\x66\x20\x00\x20\x01\x63\x72\x0b");

// float_exprs.wast:2238
assert_return(() => call($87, "f32.no_trichotomy_lt", [float32(0), float32(2_143_289_344)]), 0);

// float_exprs.wast:2239
assert_return(() => call($87, "f32.no_trichotomy_le", [float32(0), float32(2_143_289_344)]), 0);

// float_exprs.wast:2240
assert_return(() => call($87, "f32.no_trichotomy_gt", [float32(0), float32(2_143_289_344)]), 0);

// float_exprs.wast:2241
assert_return(() => call($87, "f32.no_trichotomy_ge", [float32(0), float32(2_143_289_344)]), 0);

// float_exprs.wast:2242
assert_return(() => call($87, "f64.no_trichotomy_lt", [float64(0n), float64(9_221_120_237_041_090_560n)]), 0);

// float_exprs.wast:2243
assert_return(() => call($87, "f64.no_trichotomy_le", [float64(0n), float64(9_221_120_237_041_090_560n)]), 0);

// float_exprs.wast:2244
assert_return(() => call($87, "f64.no_trichotomy_gt", [float64(0n), float64(9_221_120_237_041_090_560n)]), 0);

// float_exprs.wast:2245
assert_return(() => call($87, "f64.no_trichotomy_ge", [float64(0n), float64(9_221_120_237_041_090_560n)]), 0);

// float_exprs.wast:2250
let $88 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x97\x80\x80\x80\x00\x04\x60\x02\x7f\x7f\x01\x7f\x60\x01\x7f\x01\x7f\x60\x02\x7e\x7e\x01\x7e\x60\x01\x7e\x01\x7e\x03\x94\x80\x80\x80\x00\x13\x00\x00\x01\x02\x02\x03\x01\x01\x01\x01\x01\x01\x03\x03\x03\x03\x03\x03\x01\x07\xee\x83\x80\x80\x00\x13\x1d\x66\x33\x32\x2e\x61\x72\x69\x74\x68\x6d\x65\x74\x69\x63\x5f\x6e\x61\x6e\x5f\x62\x69\x74\x70\x61\x74\x74\x65\x72\x6e\x00\x00\x1c\x66\x33\x32\x2e\x63\x61\x6e\x6f\x6e\x69\x63\x61\x6c\x5f\x6e\x61\x6e\x5f\x62\x69\x74\x70\x61\x74\x74\x65\x72\x6e\x00\x01\x20\x66\x33\x32\x2e\x6e\x6f\x6e\x61\x72\x69\x74\x68\x6d\x65\x74\x69\x63\x5f\x6e\x61\x6e\x5f\x62\x69\x74\x70\x61\x74\x74\x65\x72\x6e\x00\x02\x1d\x66\x36\x34\x2e\x61\x72\x69\x74\x68\x6d\x65\x74\x69\x63\x5f\x6e\x61\x6e\x5f\x62\x69\x74\x70\x61\x74\x74\x65\x72\x6e\x00\x03\x1c\x66\x36\x34\x2e\x63\x61\x6e\x6f\x6e\x69\x63\x61\x6c\x5f\x6e\x61\x6e\x5f\x62\x69\x74\x70\x61\x74\x74\x65\x72\x6e\x00\x04\x20\x66\x36\x34\x2e\x6e\x6f\x6e\x61\x72\x69\x74\x68\x6d\x65\x74\x69\x63\x5f\x6e\x61\x6e\x5f\x62\x69\x74\x70\x61\x74\x74\x65\x72\x6e\x00\x05\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x7a\x65\x72\x6f\x00\x06\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x30\x5f\x73\x75\x62\x00\x07\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x6f\x6e\x65\x00\x08\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x31\x5f\x6d\x75\x6c\x00\x09\x13\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6f\x6e\x65\x00\x0a\x14\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x31\x00\x0b\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x73\x75\x62\x5f\x7a\x65\x72\x6f\x00\x0c\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x30\x5f\x73\x75\x62\x00\x0d\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6d\x75\x6c\x5f\x6f\x6e\x65\x00\x0e\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x6e\x65\x67\x31\x5f\x6d\x75\x6c\x00\x0f\x13\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6f\x6e\x65\x00\x10\x14\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x64\x69\x76\x5f\x6e\x65\x67\x31\x00\x11\x16\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x70\x72\x6f\x6d\x6f\x74\x65\x5f\x64\x65\x6d\x6f\x74\x65\x00\x12\x0a\xe5\x83\x80\x80\x00\x13\x91\x80\x80\x80\x00\x00\x20\x00\xbe\x20\x01\xbe\x95\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x91\x80\x80\x80\x00\x00\x20\x00\xbe\x20\x01\xbe\x95\xbc\x41\xff\xff\xff\xff\x07\x71\x0b\x87\x80\x80\x80\x00\x00\x20\x00\xbe\x8c\xbc\x0b\x96\x80\x80\x80\x00\x00\x20\x00\xbf\x20\x01\xbf\xa3\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x96\x80\x80\x80\x00\x00\x20\x00\xbf\x20\x01\xbf\xa3\xbd\x42\xff\xff\xff\xff\xff\xff\xff\xff\xff\x00\x83\x0b\x87\x80\x80\x80\x00\x00\x20\x00\xbf\x9a\xbd\x0b\x93\x80\x80\x80\x00\x00\x20\x00\xbe\x43\x00\x00\x00\x00\x93\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x93\x80\x80\x80\x00\x00\x43\x00\x00\x00\x80\x20\x00\xbe\x93\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x93\x80\x80\x80\x00\x00\x20\x00\xbe\x43\x00\x00\x80\x3f\x94\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x93\x80\x80\x80\x00\x00\x43\x00\x00\x80\xbf\x20\x00\xbe\x94\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x93\x80\x80\x80\x00\x00\x20\x00\xbe\x43\x00\x00\x80\x3f\x95\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x93\x80\x80\x80\x00\x00\x20\x00\xbe\x43\x00\x00\x80\xbf\x95\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b\x9c\x80\x80\x80\x00\x00\x20\x00\xbf\x44\x00\x00\x00\x00\x00\x00\x00\x00\xa1\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x9c\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\x00\x80\x20\x00\xbf\xa1\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x9c\x80\x80\x80\x00\x00\x20\x00\xbf\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa2\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x9c\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\xbf\x20\x00\xbf\xa2\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x9c\x80\x80\x80\x00\x00\x20\x00\xbf\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa3\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x9c\x80\x80\x80\x00\x00\x20\x00\xbf\x44\x00\x00\x00\x00\x00\x00\xf0\xbf\xa3\xbd\x42\x80\x80\x80\x80\x80\x80\x80\xfc\xff\x00\x83\x0b\x8f\x80\x80\x80\x00\x00\x20\x00\xbe\xbb\xb6\xbc\x41\x80\x80\x80\xfe\x07\x71\x0b");

// float_exprs.wast:2329
assert_return(() => call($88, "f32.arithmetic_nan_bitpattern", [2_139_107_856, 2_139_107_856]), 2_143_289_344);

// float_exprs.wast:2330
assert_return(() => call($88, "f32.canonical_nan_bitpattern", [0, 0]), 2_143_289_344);

// float_exprs.wast:2331
assert_return(() => call($88, "f32.canonical_nan_bitpattern", [2_143_289_344, 2_143_289_344]), 2_143_289_344);

// float_exprs.wast:2332
assert_return(() => call($88, "f32.canonical_nan_bitpattern", [-4_194_304, 2_143_289_344]), 2_143_289_344);

// float_exprs.wast:2333
assert_return(() => call($88, "f32.canonical_nan_bitpattern", [2_143_289_344, -4_194_304]), 2_143_289_344);

// float_exprs.wast:2334
assert_return(() => call($88, "f32.canonical_nan_bitpattern", [-4_194_304, -4_194_304]), 2_143_289_344);

// float_exprs.wast:2335
assert_return(() => call($88, "f32.nonarithmetic_nan_bitpattern", [2_143_302_160]), -4_181_488);

// float_exprs.wast:2336
assert_return(() => call($88, "f32.nonarithmetic_nan_bitpattern", [-4_181_488]), 2_143_302_160);

// float_exprs.wast:2337
assert_return(() => call($88, "f32.nonarithmetic_nan_bitpattern", [2_139_107_856]), -8_375_792);

// float_exprs.wast:2338
assert_return(() => call($88, "f32.nonarithmetic_nan_bitpattern", [-8_375_792]), 2_139_107_856);

// float_exprs.wast:2339
assert_return(() => call($88, "f64.arithmetic_nan_bitpattern", [9_218_868_437_227_418_128n, 9_218_868_437_227_418_128n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2340
assert_return(() => call($88, "f64.canonical_nan_bitpattern", [0n, 0n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2341
assert_return(() => call($88, "f64.canonical_nan_bitpattern", [9_221_120_237_041_090_560n, 9_221_120_237_041_090_560n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2342
assert_return(() => call($88, "f64.canonical_nan_bitpattern", [-2_251_799_813_685_248n, 9_221_120_237_041_090_560n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2343
assert_return(() => call($88, "f64.canonical_nan_bitpattern", [9_221_120_237_041_090_560n, -2_251_799_813_685_248n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2344
assert_return(() => call($88, "f64.canonical_nan_bitpattern", [-2_251_799_813_685_248n, -2_251_799_813_685_248n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2345
assert_return(() => call($88, "f64.nonarithmetic_nan_bitpattern", [9_221_120_237_041_103_376n]), -2_251_799_813_672_432n);

// float_exprs.wast:2346
assert_return(() => call($88, "f64.nonarithmetic_nan_bitpattern", [-2_251_799_813_672_432n]), 9_221_120_237_041_103_376n);

// float_exprs.wast:2347
assert_return(() => call($88, "f64.nonarithmetic_nan_bitpattern", [9_218_868_437_227_418_128n]), -4_503_599_627_357_680n);

// float_exprs.wast:2348
assert_return(() => call($88, "f64.nonarithmetic_nan_bitpattern", [-4_503_599_627_357_680n]), 9_218_868_437_227_418_128n);

// float_exprs.wast:2349
assert_return(() => call($88, "f32.no_fold_sub_zero", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2350
assert_return(() => call($88, "f32.no_fold_neg0_sub", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2351
assert_return(() => call($88, "f32.no_fold_mul_one", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2352
assert_return(() => call($88, "f32.no_fold_neg1_mul", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2353
assert_return(() => call($88, "f32.no_fold_div_one", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2354
assert_return(() => call($88, "f32.no_fold_div_neg1", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2355
assert_return(() => call($88, "f64.no_fold_sub_zero", [9_219_994_337_134_247_936n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2356
assert_return(() => call($88, "f64.no_fold_neg0_sub", [9_219_994_337_134_247_936n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2357
assert_return(() => call($88, "f64.no_fold_mul_one", [9_219_994_337_134_247_936n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2358
assert_return(() => call($88, "f64.no_fold_neg1_mul", [9_219_994_337_134_247_936n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2359
assert_return(() => call($88, "f64.no_fold_div_one", [9_219_994_337_134_247_936n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2360
assert_return(() => call($88, "f64.no_fold_div_neg1", [9_219_994_337_134_247_936n]), 9_221_120_237_041_090_560n);

// float_exprs.wast:2361
assert_return(() => call($88, "no_fold_promote_demote", [2_141_192_192]), 2_143_289_344);

// float_exprs.wast:2366
let $89 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x01\x60\x08\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x00\x07\xb2\x80\x80\x80\x00\x02\x13\x64\x6f\x74\x5f\x70\x72\x6f\x64\x75\x63\x74\x5f\x65\x78\x61\x6d\x70\x6c\x65\x00\x00\x18\x77\x69\x74\x68\x5f\x62\x69\x6e\x61\x72\x79\x5f\x73\x75\x6d\x5f\x63\x6f\x6c\x6c\x61\x70\x73\x65\x00\x01\x0a\xbd\x80\x80\x80\x00\x02\x99\x80\x80\x80\x00\x00\x20\x00\x20\x04\xa2\x20\x01\x20\x05\xa2\xa0\x20\x02\x20\x06\xa2\xa0\x20\x03\x20\x07\xa2\xa0\x0b\x99\x80\x80\x80\x00\x00\x20\x00\x20\x04\xa2\x20\x01\x20\x05\xa2\xa0\x20\x02\x20\x06\xa2\x20\x03\x20\x07\xa2\xa0\xa0\x0b");

// float_exprs.wast:2389
assert_return(() => call($89, "dot_product_example", [float64(4_719_355_144_821_538_816n), float64(4_607_182_418_800_017_408n), float64(-4_616_189_618_054_758_400n), float64(4_725_141_118_604_279_808n), float64(4_720_637_518_976_909_312n), float64(4_607_182_418_800_017_408n), float64(-4_616_189_618_054_758_400n), float64(-4_508_520_491_660_607_488n)]), float64(4_611_686_018_427_387_904n));

// float_exprs.wast:2393
assert_return(() => call($89, "with_binary_sum_collapse", [float64(4_719_355_144_821_538_816n), float64(4_607_182_418_800_017_408n), float64(-4_616_189_618_054_758_400n), float64(4_725_141_118_604_279_808n), float64(4_720_637_518_976_909_312n), float64(4_607_182_418_800_017_408n), float64(-4_616_189_618_054_758_400n), float64(-4_508_520_491_660_607_488n)]), float64(4_611_686_018_427_387_904n));

// float_exprs.wast:2400
let $90 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa7\x80\x80\x80\x00\x02\x10\x66\x33\x32\x2e\x63\x6f\x6e\x74\x72\x61\x63\x74\x32\x66\x6d\x61\x00\x00\x10\x66\x36\x34\x2e\x63\x6f\x6e\x74\x72\x61\x63\x74\x32\x66\x6d\x61\x00\x01\x0a\xa7\x80\x80\x80\x00\x02\x8e\x80\x80\x80\x00\x00\x20\x00\x20\x00\x94\x20\x01\x20\x01\x94\x93\x91\x0b\x8e\x80\x80\x80\x00\x00\x20\x00\x20\x00\xa2\x20\x01\x20\x01\xa2\xa1\x9f\x0b");

// float_exprs.wast:2411
assert_return(() => call($90, "f32.contract2fma", [float32(1_065_353_216), float32(1_065_353_216)]), float32(0));

// float_exprs.wast:2412
assert_return(() => call($90, "f32.contract2fma", [float32(1_066_192_077), float32(1_066_192_077)]), float32(0));

// float_exprs.wast:2413
assert_return(() => call($90, "f32.contract2fma", [float32(1_067_030_937), float32(1_067_030_937)]), float32(0));

// float_exprs.wast:2414
assert_return(() => call($90, "f64.contract2fma", [float64(4_607_182_418_800_017_408n), float64(4_607_182_418_800_017_408n)]), float64(0n));

// float_exprs.wast:2415
assert_return(() => call($90, "f64.contract2fma", [float64(4_607_632_778_762_754_458n), float64(4_607_632_778_762_754_458n)]), float64(0n));

// float_exprs.wast:2416
assert_return(() => call($90, "f64.contract2fma", [float64(4_608_083_138_725_491_507n), float64(4_608_083_138_725_491_507n)]), float64(0n));

// float_exprs.wast:2421
let $91 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xbf\x80\x80\x80\x00\x02\x1c\x66\x33\x32\x2e\x64\x69\x76\x69\x73\x69\x6f\x6e\x5f\x62\x79\x5f\x73\x6d\x61\x6c\x6c\x5f\x6e\x75\x6d\x62\x65\x72\x00\x00\x1c\x66\x36\x34\x2e\x64\x69\x76\x69\x73\x69\x6f\x6e\x5f\x62\x79\x5f\x73\x6d\x61\x6c\x6c\x5f\x6e\x75\x6d\x62\x65\x72\x00\x01\x0a\x9f\x80\x80\x80\x00\x02\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\x95\x93\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\xa3\xa1\x0b");

// float_exprs.wast:2430
assert_return(() => call($91, "f32.division_by_small_number", [float32(1_289_068_416), float32(1_203_982_336), float32(980_151_802)]), float32(1_230_570_368));

// float_exprs.wast:2431
assert_return(() => call($91, "f64.division_by_small_number", [float64(4_727_288_602_252_279_808n), float64(4_681_608_360_884_174_848n), float64(4_561_440_258_104_740_754n)]), float64(4_695_882_709_507_797_376n));

// float_exprs.wast:2436
let $92 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x02\x60\x03\x7d\x7d\x7d\x01\x7d\x60\x03\x7c\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa7\x80\x80\x80\x00\x02\x10\x66\x33\x32\x2e\x67\x6f\x6c\x64\x65\x6e\x5f\x72\x61\x74\x69\x6f\x00\x00\x10\x66\x36\x34\x2e\x67\x6f\x6c\x64\x65\x6e\x5f\x72\x61\x74\x69\x6f\x00\x01\x0a\xa1\x80\x80\x80\x00\x02\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\x91\x92\x94\x0b\x8b\x80\x80\x80\x00\x00\x20\x00\x20\x01\x20\x02\x9f\xa0\xa2\x0b");

// float_exprs.wast:2443
assert_return(() => call($92, "f32.golden_ratio", [float32(1_056_964_608), float32(1_065_353_216), float32(1_084_227_584)]), float32(1_070_537_661));

// float_exprs.wast:2444
assert_return(() => call($92, "f64.golden_ratio", [float64(4_602_678_819_172_646_912n), float64(4_607_182_418_800_017_408n), float64(4_617_315_517_961_601_024n)]), float64(4_609_965_796_441_453_736n));

// float_exprs.wast:2449
let $93 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x01\x7d\x01\x7d\x60\x01\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xa7\x80\x80\x80\x00\x02\x10\x66\x33\x32\x2e\x73\x69\x6c\x76\x65\x72\x5f\x6d\x65\x61\x6e\x73\x00\x00\x10\x66\x36\x34\x2e\x73\x69\x6c\x76\x65\x72\x5f\x6d\x65\x61\x6e\x73\x00\x01\x0a\xc1\x80\x80\x80\x00\x02\x97\x80\x80\x80\x00\x00\x43\x00\x00\x00\x3f\x20\x00\x20\x00\x20\x00\x94\x43\x00\x00\x80\x40\x92\x91\x92\x94\x0b\x9f\x80\x80\x80\x00\x00\x44\x00\x00\x00\x00\x00\x00\xe0\x3f\x20\x00\x20\x00\x20\x00\xa2\x44\x00\x00\x00\x00\x00\x00\x10\x40\xa0\x9f\xa0\xa2\x0b");

// float_exprs.wast:2462
assert_return(() => call($93, "f32.silver_means", [float32(0)]), float32(1_065_353_216));

// float_exprs.wast:2463
assert_return(() => call($93, "f32.silver_means", [float32(1_065_353_216)]), float32(1_070_537_661));

// float_exprs.wast:2464
assert_return(() => call($93, "f32.silver_means", [float32(1_073_741_824)]), float32(1_075_479_162));

// float_exprs.wast:2465
assert_return(() => call($93, "f32.silver_means", [float32(1_077_936_128)]), float32(1_079_206_061));

// float_exprs.wast:2466
assert_return(() => call($93, "f32.silver_means", [float32(1_082_130_432)]), float32(1_082_625_502));

// float_exprs.wast:2467
assert_return(() => call($93, "f32.silver_means", [float32(1_084_227_584)]), float32(1_084_631_458));

// float_exprs.wast:2468
assert_return(() => call($93, "f64.silver_means", [float64(0n)]), float64(4_607_182_418_800_017_408n));

// float_exprs.wast:2469
assert_return(() => call($93, "f64.silver_means", [float64(4_607_182_418_800_017_408n)]), float64(4_609_965_796_441_453_736n));

// float_exprs.wast:2470
assert_return(() => call($93, "f64.silver_means", [float64(4_611_686_018_427_387_904n)]), float64(4_612_618_744_449_965_542n));

// float_exprs.wast:2471
assert_return(() => call($93, "f64.silver_means", [float64(4_613_937_818_241_073_152n)]), float64(4_614_619_608_365_706_490n));

// float_exprs.wast:2472
assert_return(() => call($93, "f64.silver_means", [float64(4_616_189_618_054_758_400n)]), float64(4_616_455_406_968_633_940n));

// float_exprs.wast:2473
assert_return(() => call($93, "f64.silver_means", [float64(4_617_315_517_961_601_024n)]), float64(4_617_532_346_471_836_922n));

// float_exprs.wast:2478
let $94 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x87\x80\x80\x80\x00\x01\x60\x02\x7c\x7c\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x07\x8e\x80\x80\x80\x00\x01\x0a\x70\x6f\x69\x6e\x74\x5f\x66\x6f\x75\x72\x00\x00\x0a\x97\x80\x80\x80\x00\x01\x91\x80\x80\x80\x00\x00\x20\x00\x20\x01\xa3\x44\x9a\x99\x99\x99\x99\x99\xd9\x3f\x63\x0b");

// float_exprs.wast:2483
assert_return(() => call($94, "point_four", [float64(4_616_189_618_054_758_400n), float64(4_621_819_117_588_971_520n)]), 0);

// float_exprs.wast:2488
let $95 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x86\x80\x80\x80\x00\x01\x60\x01\x7f\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x74\x61\x75\x00\x00\x0a\xce\x81\x80\x80\x00\x01\xc8\x81\x80\x80\x00\x01\x04\x7c\x44\x00\x00\x00\x00\x00\x00\x00\x00\x21\x01\x02\x40\x20\x00\x41\x01\x48\x0d\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x21\x02\x44\x00\x00\x00\x00\x00\x00\x00\x00\x21\x03\x03\x40\x20\x01\x20\x02\x44\x00\x00\x00\x00\x00\x00\x20\x40\x20\x03\x44\x00\x00\x00\x00\x00\x00\x20\x40\xa2\x22\x04\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa0\xa3\x44\x00\x00\x00\x00\x00\x00\x10\x40\x20\x04\x44\x00\x00\x00\x00\x00\x00\x10\x40\xa0\xa3\xa1\x44\x00\x00\x00\x00\x00\x00\x00\x40\x20\x04\x44\x00\x00\x00\x00\x00\x00\x14\x40\xa0\xa3\xa1\x44\x00\x00\x00\x00\x00\x00\x00\x40\x20\x04\x44\x00\x00\x00\x00\x00\x00\x18\x40\xa0\xa3\xa1\xa2\xa0\x21\x01\x20\x03\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa0\x21\x03\x20\x02\x44\x00\x00\x00\x00\x00\x00\xb0\x3f\xa2\x21\x02\x20\x00\x41\x7f\x6a\x22\x00\x0d\x00\x0b\x0b\x20\x01\x0b");

// float_exprs.wast:2553
assert_return(() => call($95, "tau", [10]), float64(4_618_760_256_179_416_340n));

// float_exprs.wast:2554
assert_return(() => call($95, "tau", [11]), float64(4_618_760_256_179_416_344n));

// float_exprs.wast:2558
let $96 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8d\x80\x80\x80\x00\x02\x60\x02\x7d\x7d\x01\x7d\x60\x02\x7c\x7c\x01\x7c\x03\x83\x80\x80\x80\x00\x02\x00\x01\x07\xbd\x80\x80\x80\x00\x02\x1b\x66\x33\x32\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x61\x6c\x5f\x69\x6e\x63\x00\x00\x1b\x66\x36\x34\x2e\x6e\x6f\x5f\x66\x6f\x6c\x64\x5f\x63\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x61\x6c\x5f\x69\x6e\x63\x00\x01\x0a\xbd\x80\x80\x80\x00\x02\x95\x80\x80\x80\x00\x00\x20\x00\x20\x00\x43\x00\x00\x80\x3f\x92\x20\x01\x43\x00\x00\x00\x00\x5d\x1b\x0b\x9d\x80\x80\x80\x00\x00\x20\x00\x20\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\xa0\x20\x01\x44\x00\x00\x00\x00\x00\x00\x00\x00\x63\x1b\x0b");

// float_exprs.wast:2569
assert_return(() => call($96, "f32.no_fold_conditional_inc", [float32(-2_147_483_648), float32(-1_082_130_432)]), float32(-2_147_483_648));

// float_exprs.wast:2570
assert_return(() => call($96, "f64.no_fold_conditional_inc", [float64(-9_223_372_036_854_775_808n), float64(-4_616_189_618_054_758_400n)]), float64(-9_223_372_036_854_775_808n));
