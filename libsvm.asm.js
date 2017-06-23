Module["asm"] =  (function(global, env, buffer) {
'almost asm';


  var Int8View = global.Int8Array;
  var HEAP8 = new Int8View(buffer);
  var Int16View = global.Int16Array;
  var HEAP16 = new Int16View(buffer);
  var Int32View = global.Int32Array;
  var HEAP32 = new Int32View(buffer);
  var Uint8View = global.Uint8Array;
  var HEAPU8 = new Uint8View(buffer);
  var Uint16View = global.Uint16Array;
  var HEAPU16 = new Uint16View(buffer);
  var Uint32View = global.Uint32Array;
  var HEAPU32 = new Uint32View(buffer);
  var Float32View = global.Float32Array;
  var HEAPF32 = new Float32View(buffer);
  var Float64View = global.Float64Array;
  var HEAPF64 = new Float64View(buffer);
  var byteLength = global.byteLength;

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiii=env.invoke_viiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_diii=env.invoke_diii;
  var ___syscall221=env.___syscall221;
  var _pthread_key_create=env._pthread_key_create;
  var ___syscall6=env.___syscall6;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ___buildEnvironment=env.___buildEnvironment;
  var ___setErrNo=env.___setErrNo;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___resumeException=env.___resumeException;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var __exit=env.__exit;
  var _pthread_getspecific=env._pthread_getspecific;
  var ___syscall91=env.___syscall91;
  var _pthread_once=env._pthread_once;
  var _getenv=env._getenv;
  var ___map_file=env.___map_file;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var _pthread_setspecific=env._pthread_setspecific;
  var ___lock=env.___lock;
  var _abort=env._abort;
  var ___syscall5=env.___syscall5;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___syscall140=env.___syscall140;
  var _exit=env._exit;
  var ___syscall145=env.___syscall145;
  var ___syscall146=env.___syscall146;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

function _emscripten_replace_memory(newBuffer) {
  if ((byteLength(newBuffer) & 0xffffff || byteLength(newBuffer) <= 0xffffff) || byteLength(newBuffer) > 0x80000000) return false;
  HEAP8 = new Int8View(newBuffer);
  HEAP16 = new Int16View(newBuffer);
  HEAP32 = new Int32View(newBuffer);
  HEAPU8 = new Uint8View(newBuffer);
  HEAPU16 = new Uint16View(newBuffer);
  HEAPU32 = new Uint32View(newBuffer);
  HEAPF32 = new Float32View(newBuffer);
  HEAPF64 = new Float64View(newBuffer);
  buffer = newBuffer;
  return true;
}

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function _print_null($s) {
 $s = $s|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _exit_with_help() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 _exit(1);
 // unreachable;
}
function _parse_command_line($input_command,$param) {
 $input_command = $input_command|0;
 $param = $param|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $C = 0, $arrayidx12 = 0, $arrayidx61 = 0, $arrayidx65 = 0, $arrayidx70 = 0, $cache_size = 0, $call14 = 0, $call17 = 0, $call2 = 0, $call20 = 0;
 var $call23 = 0.0, $call26 = 0.0, $call29 = 0.0, $call32 = 0.0, $call35 = 0.0, $call38 = 0.0, $call42 = 0.0, $call45 = 0, $call48 = 0, $call54 = 0, $call59 = 0, $call62 = 0, $call66 = 0.0, $call7 = 0, $call74 = 0, $cmp = 0, $cmp3 = 0, $cmp75 = 0, $cmp8 = 0, $coef0 = 0;
 var $command = 0, $conv13 = 0, $curr$0 = 0, $degree = 0, $eps = 0, $gamma = 0, $inc = 0, $kernel_type = 0, $mul = 0, $mul58 = 0, $nr_weight = 0, $nu = 0, $p = 0, $print_func$0 = 0, $print_func$1 = 0, $print_func$2 = 0, $probability = 0, $shrinking = 0, $sub = 0, $sub69 = 0;
 var $vararg_buffer = 0, $weight = 0, $weight_label = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $vararg_buffer = sp;
 $command = sp + 8|0;
 (_strcpy($command,$input_command)|0);
 $call2 = (_strtok($command,2460)|0);
 store4($param,0);
 $kernel_type = ((($param)) + 4|0);
 store4($kernel_type,2);
 $degree = ((($param)) + 8|0);
 store4($degree,3);
 $gamma = ((($param)) + 16|0);
 $coef0 = ((($param)) + 24|0);
 $nu = ((($param)) + 72|0);
 ; store8($gamma,i64_const(0,0),8); store8($gamma+8|0,i64_const(0,0),8);
 stored($nu,0.5);
 $cache_size = ((($param)) + 32|0);
 stored($cache_size,100.0);
 $C = ((($param)) + 48|0);
 stored($C,1.0);
 $eps = ((($param)) + 40|0);
 stored($eps,0.001);
 $p = ((($param)) + 80|0);
 stored($p,0.10000000000000001);
 $shrinking = ((($param)) + 88|0);
 store4($shrinking,1);
 $probability = ((($param)) + 92|0);
 store4($probability,0);
 $nr_weight = ((($param)) + 56|0);
 store4($nr_weight,0);
 $weight_label = ((($param)) + 60|0);
 store4($weight_label,0);
 $weight = ((($param)) + 64|0);
 store4($weight,0);
 $cmp = ($call2|0)==(0|0);
 if ($cmp) {
  STACKTOP = sp;return;
 }
 $curr$0 = $call2;$print_func$0 = 0;
 L4: while(1) {
  $0 = load1($curr$0);
  $cmp3 = ($0<<24>>24)==(45);
  if (!($cmp3)) {
   $print_func$2 = $print_func$0;
   label = 22;
   break;
  }
  $call7 = (_strtok(0,2460)|0);
  $cmp8 = ($call7|0)==(0|0);
  if ($cmp8) {
   label = 5;
   break;
  }
  $arrayidx12 = ((($curr$0)) + 1|0);
  $1 = load1($arrayidx12);
  $conv13 = $1 << 24 >> 24;
  do {
   switch ($conv13|0) {
   case 115:  {
    $call14 = (_atoi($call7)|0);
    store4($param,$call14);
    $print_func$1 = $print_func$0;
    break;
   }
   case 116:  {
    $call17 = (_atoi($call7)|0);
    store4($kernel_type,$call17);
    $print_func$1 = $print_func$0;
    break;
   }
   case 100:  {
    $call20 = (_atoi($call7)|0);
    store4($degree,$call20);
    $print_func$1 = $print_func$0;
    break;
   }
   case 103:  {
    $call23 = (+_atof($call7));
    stored($gamma,$call23);
    $print_func$1 = $print_func$0;
    break;
   }
   case 114:  {
    $call26 = (+_atof($call7));
    stored($coef0,$call26);
    $print_func$1 = $print_func$0;
    break;
   }
   case 110:  {
    $call29 = (+_atof($call7));
    stored($nu,$call29);
    $print_func$1 = $print_func$0;
    break;
   }
   case 109:  {
    $call32 = (+_atof($call7));
    stored($cache_size,$call32);
    $print_func$1 = $print_func$0;
    break;
   }
   case 99:  {
    $call35 = (+_atof($call7));
    stored($C,$call35);
    $print_func$1 = $print_func$0;
    break;
   }
   case 101:  {
    $call38 = (+_atof($call7));
    stored($eps,$call38);
    $print_func$1 = $print_func$0;
    break;
   }
   case 113:  {
    $print_func$1 = 20;
    break;
   }
   case 112:  {
    $call42 = (+_atof($call7));
    stored($p,$call42);
    $print_func$1 = $print_func$0;
    break;
   }
   case 104:  {
    $call45 = (_atoi($call7)|0);
    store4($shrinking,$call45);
    $print_func$1 = $print_func$0;
    break;
   }
   case 98:  {
    $call48 = (_atoi($call7)|0);
    store4($probability,$call48);
    $print_func$1 = $print_func$0;
    break;
   }
   case 119:  {
    $2 = load4($nr_weight);
    $inc = (($2) + 1)|0;
    store4($nr_weight,$inc);
    $3 = load4($weight_label);
    $mul = $inc << 2;
    $call54 = (_realloc($3,$mul)|0);
    store4($weight_label,$call54);
    $4 = load4($weight);
    $5 = load4($nr_weight);
    $mul58 = $5 << 3;
    $call59 = (_realloc($4,$mul58)|0);
    store4($weight,$call59);
    $arrayidx61 = ((($curr$0)) + 2|0);
    $call62 = (_atoi($arrayidx61)|0);
    $6 = load4($weight_label);
    $7 = load4($nr_weight);
    $sub = (($7) + -1)|0;
    $arrayidx65 = (($6) + ($sub<<2)|0);
    store4($arrayidx65,$call62);
    $call66 = (+_atof($call7));
    $8 = load4($nr_weight);
    $sub69 = (($8) + -1)|0;
    $arrayidx70 = (($call59) + ($sub69<<3)|0);
    stored($arrayidx70,$call66);
    $print_func$1 = $print_func$0;
    break;
   }
   default: {
    label = 20;
    break L4;
   }
   }
  } while(0);
  $call74 = (_strtok(0,2460)|0);
  $cmp75 = ($call74|0)==(0|0);
  if ($cmp75) {
   $print_func$2 = $print_func$1;
   label = 22;
   break;
  } else {
   $curr$0 = $call74;$print_func$0 = $print_func$1;
  }
 }
 if ((label|0) == 5) {
  _exit_with_help();
  // unreachable;
 }
 else if ((label|0) == 20) {
  $9 = load4(1452);
  store4($vararg_buffer,$conv13);
  (_fprintf($9,2464,$vararg_buffer)|0);
  _exit_with_help();
  // unreachable;
 }
 else if ((label|0) == 22) {
  _svm_set_print_string_function($print_func$2);
  STACKTOP = sp;return;
 }
}
function _add_instance($prob,$features,$nb_dimensions,$y,$i) {
 $prob = $prob|0;
 $features = $features|0;
 $nb_dimensions = $nb_dimensions|0;
 $y = +$y;
 $i = $i|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $add = 0, $arrayidx11 = 0, $arrayidx2 = 0, $cmp14 = 0, $exitcond = 0, $index = 0, $index9 = 0, $j$015 = 0, $value = 0, $y10 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp14 = ($nb_dimensions|0)>(0);
 $0 = ((($prob)) + 8|0);
 $1 = load4($0);
 $2 = (($1) + ($i<<2)|0);
 $3 = load4($2);
 if ($cmp14) {
  $j$015 = 0;
  while(1) {
   $add = (($j$015) + 1)|0;
   $index = (($3) + ($j$015<<4)|0);
   store4($index,$add);
   $arrayidx2 = (($features) + ($j$015<<3)|0);
   $5 = loadd($arrayidx2);
   $value = (((($3) + ($j$015<<4)|0)) + 8|0);
   stored($value,$5);
   $exitcond = ($add|0)==($nb_dimensions|0);
   if ($exitcond) {
    break;
   } else {
    $j$015 = $add;
   }
  }
 }
 $index9 = (($3) + ($nb_dimensions<<4)|0);
 store4($index9,-1);
 $y10 = ((($prob)) + 4|0);
 $4 = load4($y10);
 $arrayidx11 = (($4) + ($i<<3)|0);
 stored($arrayidx11,$y);
 return;
}
function _serialize_model($model) {
 $model = $model|0;
 var $add = 0, $arrayidx = 0, $call = 0, $call1 = 0, $call3 = 0, $call5 = 0, $cmp = 0, $retval$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_svm_save_model(2485,$model)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
  $retval$0 = 0;
  return ($retval$0|0);
 }
 $call1 = (_fopen(2485,3658)|0);
 (_fseek($call1,0,2)|0);
 $call3 = (_ftell($call1)|0);
 (_fseek($call1,0,0)|0);
 $add = (($call3) + 1)|0;
 $call5 = (_malloc($add)|0);
 (_fread($call5,$call3,1,$call1)|0);
 (_fclose($call1)|0);
 $arrayidx = (($call5) + ($call3)|0);
 store1($arrayidx,0);
 $retval$0 = $call5;
 return ($retval$0|0);
}
function _deserialize_model($serialized) {
 $serialized = $serialized|0;
 var $call = 0, $call3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_fopen(2485,3272)|0);
 (_fputs($serialized,$call)|0);
 (_fclose($call)|0);
 $call3 = (_svm_load_model(2485)|0);
 return ($call3|0);
}
function _create_svm_nodes($nb_features,$nb_dimensions) {
 $nb_features = $nb_features|0;
 $nb_dimensions = $nb_dimensions|0;
 var $add = 0, $add$ptr = 0, $arrayidx = 0, $call = 0, $call2 = 0, $call5 = 0, $call9 = 0, $cmp = 0, $cmp16 = 0, $i$017 = 0, $inc = 0, $mul = 0, $mul12 = 0, $mul4 = 0, $mul7 = 0, $mul8 = 0, $x = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_malloc(12)|0);
 store4($call,$nb_features);
 $mul = $nb_features << 3;
 $call2 = (_malloc($mul)|0);
 $y = ((($call)) + 4|0);
 store4($y,$call2);
 $mul4 = $nb_features << 2;
 $call5 = (_malloc($mul4)|0);
 $x = ((($call)) + 8|0);
 store4($x,$call5);
 $add = (($nb_dimensions) + 1)|0;
 $mul7 = $add << 4;
 $mul8 = Math_imul($mul7, $nb_features)|0;
 $call9 = (_malloc($mul8)|0);
 $cmp16 = ($nb_features|0)>(0);
 if ($cmp16) {
  $i$017 = 0;
 } else {
  return ($call|0);
 }
 while(1) {
  $mul12 = Math_imul($i$017, $add)|0;
  $add$ptr = (($call9) + ($mul12<<4)|0);
  $arrayidx = (($call5) + ($i$017<<2)|0);
  store4($arrayidx,$add$ptr);
  $inc = (($i$017) + 1)|0;
  $cmp = ($inc|0)<($nb_features|0);
  if ($cmp) {
   $i$017 = $inc;
  } else {
   break;
  }
 }
 return ($call|0);
}
function _svm_free_model($model) {
 $model = $model|0;
 var $model$addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $model$addr = sp;
 store4($model$addr,$model);
 _svm_free_and_destroy_model($model$addr);
 STACKTOP = sp;return;
}
function _libsvm_train_problem($prob,$command) {
 $prob = $prob|0;
 $command = $command|0;
 var $$off = 0, $0 = 0, $1 = 0, $2 = 0.0, $call = 0, $cmp3 = 0, $param = 0, $switch = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $param = sp;
 _parse_command_line($command,$param);
 $0 = load4($param);
 $1 = ((($param)) + 16|0);
 $2 = loadd($1);
 $cmp3 = $2 == 0.0;
 $$off = (($0) + -3)|0;
 $switch = ($$off>>>0)<(2);
 if ($switch) {
  if ($cmp3) {
   stored($1,0.10000000000000001);
  }
 } else {
  if ($cmp3) {
   stored($1,0.5);
  }
 }
 $call = (_svm_train($prob,$param)|0);
 _svm_destroy_param($param);
 STACKTOP = sp;return ($call|0);
}
function _libsvm_cross_validation($prob,$command,$kFold,$target) {
 $prob = $prob|0;
 $command = $command|0;
 $kFold = $kFold|0;
 $target = $target|0;
 var $param = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $param = sp;
 _parse_command_line($command,$param);
 _svm_cross_validation($prob,$param,$kFold,$target);
 _svm_destroy_param($param);
 STACKTOP = sp;return;
}
function _free_problem($prob) {
 $prob = $prob|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $cmp = 0, $x = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $y = ((($prob)) + 4|0);
 $0 = load4($y);
 _free($0);
 $1 = load4($prob);
 $cmp = ($1|0)>(0);
 $x = ((($prob)) + 8|0);
 if ($cmp) {
  $2 = load4($x);
  $3 = load4($2);
  _free($3);
 }
 $4 = load4($x);
 _free($4);
 _free($prob);
 return;
}
function _libsvm_predict_one($model,$data,$size) {
 $model = $model|0;
 $data = $data|0;
 $size = $size|0;
 var $0 = 0.0, $add = 0, $add1 = 0, $arrayidx2 = 0, $call = 0, $call6 = 0.0, $cmp15 = 0, $exitcond = 0, $i$016 = 0, $index = 0, $index5 = 0, $mul = 0, $value = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $add = $size << 4;
 $mul = (($add) + 16)|0;
 $call = (_malloc($mul)|0);
 $cmp15 = ($size|0)>(0);
 if ($cmp15) {
  $i$016 = 0;
  while(1) {
   $add1 = (($i$016) + 1)|0;
   $index = (($call) + ($i$016<<4)|0);
   store4($index,$add1);
   $arrayidx2 = (($data) + ($i$016<<3)|0);
   $0 = loadd($arrayidx2);
   $value = (((($call) + ($i$016<<4)|0)) + 8|0);
   stored($value,$0);
   $exitcond = ($add1|0)==($size|0);
   if ($exitcond) {
    break;
   } else {
    $i$016 = $add1;
   }
  }
 }
 $index5 = (($call) + ($size<<4)|0);
 store4($index5,-1);
 $call6 = (+_svm_predict($model,$call));
 _free($call);
 return (+$call6);
}
function _libsvm_train($data,$labels,$nb_features,$nb_dimensions,$command) {
 $data = $data|0;
 $labels = $labels|0;
 $nb_features = $nb_features|0;
 $nb_dimensions = $nb_dimensions|0;
 $command = $command|0;
 var $$off$i = 0, $0 = 0, $1 = 0, $2 = 0.0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0.0, $add$i = 0, $add$ptr$i = 0, $add$us = 0, $add6$us = 0, $arrayidx$i = 0, $arrayidx15 = 0, $arrayidx15$us = 0, $arrayidx16 = 0, $arrayidx16$us = 0;
 var $arrayidx7$us = 0, $call$i = 0, $call$i24 = 0, $call2$i = 0, $call5$i = 0, $call9$i = 0, $cmp16$i = 0, $cmp225 = 0, $cmp3$i = 0, $exitcond = 0, $exitcond30 = 0, $exitcond31 = 0, $exitcond32 = 0, $i$017$i = 0, $i$028 = 0, $i$028$us = 0, $inc$i = 0, $inc18 = 0, $inc18$us = 0, $index$us = 0;
 var $index14 = 0, $index14$us = 0, $j$026$us = 0, $mul$i = 0, $mul$us = 0, $mul12$i = 0, $mul4$i = 0, $mul7$i = 0, $mul8$i = 0, $param$i = 0, $switch$i = 0, $value$us = 0, $x$i = 0, $y$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $param$i = sp;
 $call$i = (_malloc(12)|0);
 store4($call$i,$nb_features);
 $mul$i = $nb_features << 3;
 $call2$i = (_malloc($mul$i)|0);
 $y$i = ((($call$i)) + 4|0);
 store4($y$i,$call2$i);
 $mul4$i = $nb_features << 2;
 $call5$i = (_malloc($mul4$i)|0);
 $x$i = ((($call$i)) + 8|0);
 store4($x$i,$call5$i);
 $add$i = (($nb_dimensions) + 1)|0;
 $mul7$i = $nb_features << 4;
 $mul8$i = Math_imul($mul7$i, $add$i)|0;
 $call9$i = (_malloc($mul8$i)|0);
 $cmp16$i = ($nb_features|0)>(0);
 L1: do {
  if ($cmp16$i) {
   $i$017$i = 0;
   while(1) {
    $mul12$i = Math_imul($i$017$i, $add$i)|0;
    $add$ptr$i = (($call9$i) + ($mul12$i<<4)|0);
    $arrayidx$i = (($call5$i) + ($i$017$i<<2)|0);
    store4($arrayidx$i,$add$ptr$i);
    $inc$i = (($i$017$i) + 1)|0;
    $exitcond32 = ($inc$i|0)==($nb_features|0);
    if ($exitcond32) {
     break;
    } else {
     $i$017$i = $inc$i;
    }
   }
   if ($cmp16$i) {
    $cmp225 = ($nb_dimensions|0)>(0);
    if ($cmp225) {
     $i$028$us = 0;
    } else {
     $i$028 = 0;
     while(1) {
      $4 = (($call5$i) + ($i$028<<2)|0);
      $5 = load4($4);
      $index14 = (($5) + ($nb_dimensions<<4)|0);
      store4($index14,-1);
      $arrayidx15 = (($labels) + ($i$028<<3)|0);
      $6 = loadd($arrayidx15);
      $arrayidx16 = (($call2$i) + ($i$028<<3)|0);
      stored($arrayidx16,$6);
      $inc18 = (($i$028) + 1)|0;
      $exitcond31 = ($inc18|0)==($nb_features|0);
      if ($exitcond31) {
       break L1;
      } else {
       $i$028 = $inc18;
      }
     }
    }
    while(1) {
     $0 = (($call5$i) + ($i$028$us<<2)|0);
     $1 = load4($0);
     $mul$us = Math_imul($i$028$us, $nb_dimensions)|0;
     $j$026$us = 0;
     while(1) {
      $add$us = (($j$026$us) + 1)|0;
      $index$us = (($1) + ($j$026$us<<4)|0);
      store4($index$us,$add$us);
      $add6$us = (($j$026$us) + ($mul$us))|0;
      $arrayidx7$us = (($data) + ($add6$us<<3)|0);
      $2 = loadd($arrayidx7$us);
      $value$us = (((($1) + ($j$026$us<<4)|0)) + 8|0);
      stored($value$us,$2);
      $exitcond = ($add$us|0)==($nb_dimensions|0);
      if ($exitcond) {
       break;
      } else {
       $j$026$us = $add$us;
      }
     }
     $index14$us = (($1) + ($nb_dimensions<<4)|0);
     store4($index14$us,-1);
     $arrayidx15$us = (($labels) + ($i$028$us<<3)|0);
     $3 = loadd($arrayidx15$us);
     $arrayidx16$us = (($call2$i) + ($i$028$us<<3)|0);
     stored($arrayidx16$us,$3);
     $inc18$us = (($i$028$us) + 1)|0;
     $exitcond30 = ($inc18$us|0)==($nb_features|0);
     if ($exitcond30) {
      break;
     } else {
      $i$028$us = $inc18$us;
     }
    }
   }
  }
 } while(0);
 _parse_command_line($command,$param$i);
 $7 = load4($param$i);
 $8 = ((($param$i)) + 16|0);
 $9 = loadd($8);
 $cmp3$i = $9 == 0.0;
 $$off$i = (($7) + -3)|0;
 $switch$i = ($$off$i>>>0)<(2);
 if ($switch$i) {
  if (!($cmp3$i)) {
   $call$i24 = (_svm_train($call$i,$param$i)|0);
   _svm_destroy_param($param$i);
   STACKTOP = sp;return ($call$i24|0);
  }
  stored($8,0.10000000000000001);
  $call$i24 = (_svm_train($call$i,$param$i)|0);
  _svm_destroy_param($param$i);
  STACKTOP = sp;return ($call$i24|0);
 } else {
  if (!($cmp3$i)) {
   $call$i24 = (_svm_train($call$i,$param$i)|0);
   _svm_destroy_param($param$i);
   STACKTOP = sp;return ($call$i24|0);
  }
  stored($8,0.5);
  $call$i24 = (_svm_train($call$i,$param$i)|0);
  _svm_destroy_param($param$i);
  STACKTOP = sp;return ($call$i24|0);
 }
 return (0)|0;
}
function _get_svr_epsilon($model) {
 $model = $model|0;
 var $0 = 0.0, $p = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $p = ((($model)) + 80|0);
 $0 = loadd($p);
 return (+$0);
}
function __ZNK6Kernel10swap_indexEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0.0, $5 = 0.0, $arrayidx = 0, $arrayidx3 = 0, $arrayidx5 = 0, $arrayidx7 = 0, $tobool = 0, $x = 0, $x_square = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $x = ((($this)) + 12|0);
 $0 = load4($x);
 $arrayidx = (($0) + ($i<<2)|0);
 $arrayidx3 = (($0) + ($j<<2)|0);
 $1 = load4($arrayidx);
 $2 = load4($arrayidx3);
 store4($arrayidx,$2);
 store4($arrayidx3,$1);
 $x_square = ((($this)) + 16|0);
 $3 = load4($x_square);
 $tobool = ($3|0)==(0|0);
 $arrayidx5 = (($3) + ($i<<3)|0);
 $arrayidx7 = (($3) + ($j<<3)|0);
 if ($tobool) {
  return;
 }
 $4 = loadd($arrayidx5);
 $5 = loadd($arrayidx7);
 stored($arrayidx5,$5);
 stored($arrayidx7,$4);
 return;
}
function __ZN6KernelD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $isnull = 0, $isnull2 = 0, $x = 0, $x_square = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1240));
 $x = ((($this)) + 12|0);
 $0 = load4($x);
 $isnull = ($0|0)==(0|0);
 if (!($isnull)) {
  __ZdaPv($0);
 }
 $x_square = ((($this)) + 16|0);
 $1 = load4($x_square);
 $isnull2 = ($1|0)==(0|0);
 if ($isnull2) {
  return;
 }
 __ZdaPv($1);
 return;
}
function __ZN6KernelD0Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $isnull$i = 0, $isnull2$i = 0, $x$i = 0, $x_square$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1240));
 $x$i = ((($this)) + 12|0);
 $0 = load4($x$i);
 $isnull$i = ($0|0)==(0|0);
 if (!($isnull$i)) {
  __ZdaPv($0);
 }
 $x_square$i = ((($this)) + 16|0);
 $1 = load4($x_square$i);
 $isnull2$i = ($1|0)==(0|0);
 if ($isnull2$i) {
  __ZdlPv($this);
  return;
 }
 __ZdaPv($1);
 __ZdlPv($this);
 return;
}
function __ZN6SolverD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN6SolverD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZN6Solver18select_working_setERiS0_($this,$out_i,$out_j) {
 $this = $this|0;
 $out_i = $out_i|0;
 $out_j = $out_j|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0, $23 = Math_fround(0), $24 = 0, $25 = 0.0;
 var $26 = 0, $27 = 0.0, $28 = 0.0, $29 = 0, $3 = 0, $30 = Math_fround(0), $4 = 0, $5 = 0, $6 = 0.0, $7 = 0, $8 = 0.0, $9 = 0, $G = 0, $G39 = 0, $Gmax$081 = 0.0, $Gmax$1 = 0.0, $Gmax2$076 = 0.0, $Gmax2$1 = 0.0, $Gmax2$2 = 0.0, $Gmax2$3 = 0.0;
 var $Gmax_idx$0$lcssa87 = 0, $Gmax_idx$080 = 0, $Gmax_idx$1 = 0, $Gmin_idx$074 = 0, $Gmin_idx$1 = 0, $Gmin_idx$3 = 0, $Gmin_idx$5 = 0, $Q = 0, $QD = 0, $Q_i$0 = 0, $active_size = 0, $add = 0.0, $add100 = 0.0, $add109 = 0.0, $add109$ = 0.0, $add129 = 0.0, $add53 = 0.0, $alpha_status$i = 0, $alpha_status$i66 = 0, $arrayidx = 0;
 var $arrayidx$i = 0, $arrayidx$i67 = 0, $arrayidx106 = 0, $arrayidx14 = 0, $arrayidx33 = 0, $arrayidx4 = 0, $arrayidx40 = 0, $arrayidx50 = 0, $arrayidx52 = 0, $arrayidx55 = 0, $arrayidx58 = 0, $arrayidx81 = 0, $arrayidx97 = 0, $arrayidx99 = 0, $call25 = 0, $cmp = 0, $cmp$i = 0, $cmp$i65 = 0, $cmp$i68 = 0, $cmp$i71 = 0;
 var $cmp110 = 0, $cmp120 = 0, $cmp130 = 0, $cmp131 = 0, $cmp15 = 0, $cmp2 = 0, $cmp22 = 0, $cmp29 = 0, $cmp2972 = 0, $cmp35 = 0, $cmp43$inv = 0, $cmp48 = 0, $cmp5 = 0, $cmp62 = 0, $cmp71 = 0, $cmp78 = 0, $cmp86$inv = 0, $cmp92 = 0, $conv104 = 0.0, $conv107 = 0.0;
 var $conv57 = 0.0, $conv59 = 0.0, $eps = 0, $inc = 0, $inc127 = 0, $j$075 = 0, $mul = 0.0, $mul105 = 0.0, $mul108 = 0.0, $mul112 = 0.0, $mul60 = 0.0, $mul64 = 0.0, $obj_diff$0 = 0.0, $obj_diff94$0 = 0.0, $obj_diff_min$073 = 0.0, $obj_diff_min$1 = 0.0, $obj_diff_min$3 = 0.0, $obj_diff_min$5 = 0.0, $or$cond = 0, $retval$0 = 0;
 var $sub = 0.0, $sub113 = 0.0, $sub61 = 0.0, $sub61$ = 0.0, $sub65 = 0.0, $sub82 = 0.0, $sub85 = 0.0, $t$079 = 0, $vtable = 0, $y = 0, $y32 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $active_size = ((($this)) + 4|0);
 $0 = load4($active_size);
 $cmp78 = ($0|0)>(0);
 if (!($cmp78)) {
  $retval$0 = 1;
  return ($retval$0|0);
 }
 $y = ((($this)) + 8|0);
 $1 = load4($y);
 $alpha_status$i = ((($this)) + 16|0);
 $2 = load4($alpha_status$i);
 $G = ((($this)) + 12|0);
 $Gmax$081 = -inf;$Gmax_idx$080 = -1;$t$079 = 0;
 while(1) {
  $arrayidx = (($1) + ($t$079)|0);
  $3 = load1($arrayidx);
  $cmp2 = ($3<<24>>24)==(1);
  $arrayidx$i = (($2) + ($t$079)|0);
  $4 = load1($arrayidx$i);
  if ($cmp2) {
   $cmp$i = ($4<<24>>24)==(1);
   if ($cmp$i) {
    $Gmax$1 = $Gmax$081;$Gmax_idx$1 = $Gmax_idx$080;
   } else {
    $5 = load4($G);
    $arrayidx4 = (($5) + ($t$079<<3)|0);
    $6 = loadd($arrayidx4);
    $sub = -$6;
    $cmp5 = !($Gmax$081 <= $sub);
    if ($cmp5) {
     $Gmax$1 = $Gmax$081;$Gmax_idx$1 = $Gmax_idx$080;
    } else {
     $Gmax$1 = $sub;$Gmax_idx$1 = $t$079;
    }
   }
  } else {
   $cmp$i71 = ($4<<24>>24)==(0);
   if ($cmp$i71) {
    $Gmax$1 = $Gmax$081;$Gmax_idx$1 = $Gmax_idx$080;
   } else {
    $7 = load4($G);
    $arrayidx14 = (($7) + ($t$079<<3)|0);
    $8 = loadd($arrayidx14);
    $cmp15 = !($8 >= $Gmax$081);
    if ($cmp15) {
     $Gmax$1 = $Gmax$081;$Gmax_idx$1 = $Gmax_idx$080;
    } else {
     $Gmax$1 = $8;$Gmax_idx$1 = $t$079;
    }
   }
  }
  $inc = (($t$079) + 1)|0;
  $cmp = ($inc|0)<($0|0);
  if ($cmp) {
   $Gmax$081 = $Gmax$1;$Gmax_idx$080 = $Gmax_idx$1;$t$079 = $inc;
  } else {
   break;
  }
 }
 $cmp22 = ($Gmax_idx$1|0)==(-1);
 if ($cmp22) {
  $11 = $0;$Gmax_idx$0$lcssa87 = -1;$Q_i$0 = 0;
 } else {
  $Q = ((($this)) + 24|0);
  $9 = load4($Q);
  $vtable = load4($9);
  $10 = load4($vtable);
  $call25 = (FUNCTION_TABLE_iiii[$10 & 15]($9,$Gmax_idx$1,$0)|0);
  $$pre = load4($active_size);
  $11 = $$pre;$Gmax_idx$0$lcssa87 = $Gmax_idx$1;$Q_i$0 = $call25;
 }
 $cmp2972 = ($11|0)>(0);
 if (!($cmp2972)) {
  $retval$0 = 1;
  return ($retval$0|0);
 }
 $y32 = ((($this)) + 8|0);
 $12 = load4($y32);
 $alpha_status$i66 = ((($this)) + 16|0);
 $13 = load4($alpha_status$i66);
 $G39 = ((($this)) + 12|0);
 $QD = ((($this)) + 28|0);
 $arrayidx55 = (($12) + ($Gmax_idx$0$lcssa87)|0);
 $Gmax2$076 = -inf;$Gmin_idx$074 = -1;$j$075 = 0;$obj_diff_min$073 = inf;
 while(1) {
  $arrayidx33 = (($12) + ($j$075)|0);
  $15 = load1($arrayidx33);
  $cmp35 = ($15<<24>>24)==(1);
  $arrayidx$i67 = (($13) + ($j$075)|0);
  $16 = load1($arrayidx$i67);
  if ($cmp35) {
   $cmp$i68 = ($16<<24>>24)==(0);
   if ($cmp$i68) {
    $Gmax2$3 = $Gmax2$076;$Gmin_idx$5 = $Gmin_idx$074;$obj_diff_min$5 = $obj_diff_min$073;
   } else {
    $17 = load4($G39);
    $arrayidx40 = (($17) + ($j$075<<3)|0);
    $18 = loadd($arrayidx40);
    $add = $Gmax$1 + $18;
    $cmp43$inv = $18 >= $Gmax2$076;
    $Gmax2$1 = $cmp43$inv ? $18 : $Gmax2$076;
    $cmp48 = $add > 0.0;
    if ($cmp48) {
     $19 = load4($QD);
     $arrayidx50 = (($19) + ($Gmax_idx$0$lcssa87<<3)|0);
     $20 = loadd($arrayidx50);
     $arrayidx52 = (($19) + ($j$075<<3)|0);
     $21 = loadd($arrayidx52);
     $add53 = $20 + $21;
     $22 = load1($arrayidx55);
     $conv57 = (+($22<<24>>24));
     $mul = $conv57 * 2.0;
     $arrayidx58 = (($Q_i$0) + ($j$075<<2)|0);
     $23 = loadf($arrayidx58);
     $conv59 = +$23;
     $mul60 = $mul * $conv59;
     $sub61 = $add53 - $mul60;
     $cmp62 = $sub61 > 0.0;
     $mul64 = $add * $add;
     $sub65 = -$mul64;
     $sub61$ = $cmp62 ? $sub61 : 9.9999999999999998E-13;
     $obj_diff$0 = $sub65 / $sub61$;
     $cmp71 = !($obj_diff$0 <= $obj_diff_min$073);
     $obj_diff_min$1 = $cmp71 ? $obj_diff_min$073 : $obj_diff$0;
     $Gmin_idx$1 = $cmp71 ? $Gmin_idx$074 : $j$075;
     $Gmax2$3 = $Gmax2$1;$Gmin_idx$5 = $Gmin_idx$1;$obj_diff_min$5 = $obj_diff_min$1;
    } else {
     $Gmax2$3 = $Gmax2$1;$Gmin_idx$5 = $Gmin_idx$074;$obj_diff_min$5 = $obj_diff_min$073;
    }
   }
  } else {
   $cmp$i65 = ($16<<24>>24)==(1);
   if ($cmp$i65) {
    $Gmax2$3 = $Gmax2$076;$Gmin_idx$5 = $Gmin_idx$074;$obj_diff_min$5 = $obj_diff_min$073;
   } else {
    $24 = load4($G39);
    $arrayidx81 = (($24) + ($j$075<<3)|0);
    $25 = loadd($arrayidx81);
    $sub82 = $Gmax$1 - $25;
    $sub85 = -$25;
    $cmp86$inv = $Gmax2$076 <= $sub85;
    $Gmax2$2 = $cmp86$inv ? $sub85 : $Gmax2$076;
    $cmp92 = $sub82 > 0.0;
    if ($cmp92) {
     $26 = load4($QD);
     $arrayidx97 = (($26) + ($Gmax_idx$0$lcssa87<<3)|0);
     $27 = loadd($arrayidx97);
     $arrayidx99 = (($26) + ($j$075<<3)|0);
     $28 = loadd($arrayidx99);
     $add100 = $27 + $28;
     $29 = load1($arrayidx55);
     $conv104 = (+($29<<24>>24));
     $mul105 = $conv104 * 2.0;
     $arrayidx106 = (($Q_i$0) + ($j$075<<2)|0);
     $30 = loadf($arrayidx106);
     $conv107 = +$30;
     $mul108 = $mul105 * $conv107;
     $add109 = $add100 + $mul108;
     $cmp110 = $add109 > 0.0;
     $mul112 = $sub82 * $sub82;
     $sub113 = -$mul112;
     $add109$ = $cmp110 ? $add109 : 9.9999999999999998E-13;
     $obj_diff94$0 = $sub113 / $add109$;
     $cmp120 = !($obj_diff94$0 <= $obj_diff_min$073);
     $obj_diff_min$3 = $cmp120 ? $obj_diff_min$073 : $obj_diff94$0;
     $Gmin_idx$3 = $cmp120 ? $Gmin_idx$074 : $j$075;
     $Gmax2$3 = $Gmax2$2;$Gmin_idx$5 = $Gmin_idx$3;$obj_diff_min$5 = $obj_diff_min$3;
    } else {
     $Gmax2$3 = $Gmax2$2;$Gmin_idx$5 = $Gmin_idx$074;$obj_diff_min$5 = $obj_diff_min$073;
    }
   }
  }
  $inc127 = (($j$075) + 1)|0;
  $cmp29 = ($inc127|0)<($11|0);
  if ($cmp29) {
   $Gmax2$076 = $Gmax2$3;$Gmin_idx$074 = $Gmin_idx$5;$j$075 = $inc127;$obj_diff_min$073 = $obj_diff_min$5;
  } else {
   break;
  }
 }
 $add129 = $Gmax$1 + $Gmax2$3;
 $eps = ((($this)) + 32|0);
 $14 = loadd($eps);
 $cmp130 = $add129 < $14;
 $cmp131 = ($Gmin_idx$5|0)==(-1);
 $or$cond = $cmp131 | $cmp130;
 if ($or$cond) {
  $retval$0 = 1;
  return ($retval$0|0);
 }
 store4($out_i,$Gmax_idx$0$lcssa87);
 store4($out_j,$Gmin_idx$5);
 $retval$0 = 0;
 return ($retval$0|0);
}
function __ZN6Solver13calculate_rhoEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $G = 0, $active_size = 0, $add = 0.0, $add31 = 0.0, $alpha_status$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx3 = 0, $cmp = 0, $cmp$i26 = 0, $cmp$i27 = 0, $cmp$i32 = 0, $cmp$i34 = 0;
 var $cmp17 = 0, $cmp27 = 0, $cmp36 = 0, $cmp7 = 0, $cond$i = 0.0, $cond$i28 = 0.0, $cond$i33 = 0.0, $cond$i35 = 0.0, $conv2 = 0.0, $conv29 = 0.0, $div = 0.0, $div32 = 0.0, $i$041 = 0, $inc = 0, $inc26 = 0, $lb$0$lcssa47 = 0.0, $lb$039 = 0.0, $lb$1 = 0.0, $mul = 0.0, $nr_free$037 = 0;
 var $nr_free$1 = 0, $r$0 = 0.0, $sum_free$040 = 0.0, $sum_free$1 = 0.0, $ub$0$lcssa46 = 0.0, $ub$038 = 0.0, $ub$1 = 0.0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $active_size = ((($this)) + 4|0);
 $0 = load4($active_size);
 $cmp36 = ($0|0)>(0);
 if ($cmp36) {
  $y = ((($this)) + 8|0);
  $1 = load4($y);
  $G = ((($this)) + 12|0);
  $2 = load4($G);
  $alpha_status$i = ((($this)) + 16|0);
  $3 = load4($alpha_status$i);
  $i$041 = 0;$lb$039 = -inf;$nr_free$037 = 0;$sum_free$040 = 0.0;$ub$038 = inf;
  while(1) {
   $arrayidx = (($1) + ($i$041)|0);
   $4 = load1($arrayidx);
   $conv2 = (+($4<<24>>24));
   $arrayidx3 = (($2) + ($i$041<<3)|0);
   $5 = loadd($arrayidx3);
   $mul = $conv2 * $5;
   $arrayidx$i = (($3) + ($i$041)|0);
   $6 = load1($arrayidx$i);
   L5: do {
    switch ($6<<24>>24) {
    case 1:  {
     $cmp7 = ($4<<24>>24)==(-1);
     if ($cmp7) {
      $cmp$i34 = $ub$038 < $mul;
      $cond$i35 = $cmp$i34 ? $ub$038 : $mul;
      $lb$1 = $lb$039;$nr_free$1 = $nr_free$037;$sum_free$1 = $sum_free$040;$ub$1 = $cond$i35;
      break L5;
     } else {
      $cmp$i32 = $lb$039 > $mul;
      $cond$i33 = $cmp$i32 ? $lb$039 : $mul;
      $lb$1 = $cond$i33;$nr_free$1 = $nr_free$037;$sum_free$1 = $sum_free$040;$ub$1 = $ub$038;
      break L5;
     }
     break;
    }
    case 0:  {
     $cmp17 = ($4<<24>>24)==(1);
     if ($cmp17) {
      $cmp$i27 = $ub$038 < $mul;
      $cond$i28 = $cmp$i27 ? $ub$038 : $mul;
      $lb$1 = $lb$039;$nr_free$1 = $nr_free$037;$sum_free$1 = $sum_free$040;$ub$1 = $cond$i28;
      break L5;
     } else {
      $cmp$i26 = $lb$039 > $mul;
      $cond$i = $cmp$i26 ? $lb$039 : $mul;
      $lb$1 = $cond$i;$nr_free$1 = $nr_free$037;$sum_free$1 = $sum_free$040;$ub$1 = $ub$038;
      break L5;
     }
     break;
    }
    default: {
     $inc = (($nr_free$037) + 1)|0;
     $add = $sum_free$040 + $mul;
     $lb$1 = $lb$039;$nr_free$1 = $inc;$sum_free$1 = $add;$ub$1 = $ub$038;
    }
    }
   } while(0);
   $inc26 = (($i$041) + 1)|0;
   $cmp = ($inc26|0)<($0|0);
   if ($cmp) {
    $i$041 = $inc26;$lb$039 = $lb$1;$nr_free$037 = $nr_free$1;$sum_free$040 = $sum_free$1;$ub$038 = $ub$1;
   } else {
    break;
   }
  }
  $cmp27 = ($nr_free$1|0)>(0);
  if ($cmp27) {
   $conv29 = (+($nr_free$1|0));
   $div = $sum_free$1 / $conv29;
   $r$0 = $div;
   return (+$r$0);
  } else {
   $lb$0$lcssa47 = $lb$1;$ub$0$lcssa46 = $ub$1;
  }
 } else {
  $lb$0$lcssa47 = -inf;$ub$0$lcssa46 = inf;
 }
 $add31 = $ub$0$lcssa46 + $lb$0$lcssa47;
 $div32 = $add31 * 0.5;
 $r$0 = $div32;
 return (+$r$0);
}
function __ZN6Solver12do_shrinkingEv($this) {
 $this = $this|0;
 var $$pre = 0, $$pre85 = 0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0.0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0.0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0.0, $34 = 0, $35 = 0.0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0.0;
 var $43 = 0.0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0.0, $49 = 0.0, $5 = 0, $50 = 0, $51 = 0.0, $52 = 0.0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0.0, $58 = 0.0, $59 = 0, $6 = 0.0, $7 = 0;
 var $8 = 0.0, $9 = 0, $G$i48 = 0, $G13 = 0, $G_bar$i = 0, $Gmax1$0$lcssa = 0.0, $Gmax1$081 = 0.0, $Gmax1$1 = 0.0, $Gmax1$187 = 0.0, $Gmax1$2 = 0.0, $Gmax2$0$lcssa = 0.0, $Gmax2$082 = 0.0, $Gmax2$1 = 0.0, $Gmax2$189 = 0.0, $Gmax2$2 = 0.0, $Q$i = 0, $active_set$i = 0, $active_size = 0, $add = 0.0, $alpha$i = 0;
 var $alpha_status$i = 0, $alpha_status$i$i43 = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i$i44 = 0, $arrayidx$i31 = 0, $arrayidx$i37 = 0, $arrayidx$i46 = 0, $arrayidx10$i = 0, $arrayidx12$i = 0, $arrayidx13$i = 0, $arrayidx13$i41 = 0, $arrayidx13$i57 = 0, $arrayidx14 = 0, $arrayidx15$i = 0, $arrayidx16$i = 0, $arrayidx18$i = 0, $arrayidx18$i42 = 0, $arrayidx18$i60 = 0;
 var $arrayidx19$i = 0, $arrayidx21$i = 0, $arrayidx24 = 0, $arrayidx3$i = 0, $arrayidx3$i40 = 0, $arrayidx3$i49 = 0, $arrayidx36 = 0, $arrayidx4 = 0, $arrayidx4$i = 0, $arrayidx6$i = 0, $arrayidx7$i = 0, $arrayidx9$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i35 = 0, $cmp$i38 = 0, $cmp$i47 = 0, $cmp$i70 = 0, $cmp15 = 0, $cmp15$i = 0;
 var $cmp15$i58 = 0, $cmp19$i = 0, $cmp19$i62 = 0, $cmp2 = 0, $cmp23$i = 0, $cmp23$i64 = 0, $cmp26$inv = 0, $cmp37 = 0, $cmp4$i = 0, $cmp4$i52 = 0, $cmp45 = 0, $cmp46 = 0, $cmp5$inv = 0, $cmp53 = 0, $cmp5374 = 0, $cmp59 = 0, $cmp5972 = 0, $cmp78 = 0, $cmp8$i = 0, $cmp8$i54 = 0;
 var $dec66 = 0, $dec6671 = 0, $eps = 0, $i$079 = 0, $i$175 = 0, $inc = 0, $inc69 = 0, $l = 0, $mul = 0.0, $p$i = 0, $sub = 0.0, $sub$i = 0.0, $sub$i50 = 0.0, $sub25 = 0.0, $unshrink = 0, $vararg_buffer = 0, $vfn$i = 0, $vtable$i = 0, $y = 0, $y$i45 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $active_size = ((($this)) + 4|0);
 $0 = load4($active_size);
 $cmp78 = ($0|0)>(0);
 if ($cmp78) {
  $y = ((($this)) + 8|0);
  $1 = load4($y);
  $alpha_status$i = ((($this)) + 16|0);
  $2 = load4($alpha_status$i);
  $G13 = ((($this)) + 12|0);
  $Gmax1$081 = -inf;$Gmax2$082 = -inf;$i$079 = 0;
  while(1) {
   $arrayidx = (($1) + ($i$079)|0);
   $3 = load1($arrayidx);
   $cmp2 = ($3<<24>>24)==(1);
   $arrayidx$i = (($2) + ($i$079)|0);
   $4 = load1($arrayidx$i);
   $cmp$i = ($4<<24>>24)==(1);
   do {
    if ($cmp2) {
     if ($cmp$i) {
      $Gmax1$187 = $Gmax1$081;
     } else {
      $5 = load4($G13);
      $arrayidx4 = (($5) + ($i$079<<3)|0);
      $6 = loadd($arrayidx4);
      $sub = -$6;
      $cmp5$inv = $Gmax1$081 <= $sub;
      $Gmax1$1 = $cmp5$inv ? $sub : $Gmax1$081;
      $cmp$i35 = ($4<<24>>24)==(0);
      if ($cmp$i35) {
       $Gmax1$2 = $Gmax1$1;$Gmax2$2 = $Gmax2$082;
       break;
      } else {
       $Gmax1$187 = $Gmax1$1;
      }
     }
     $7 = load4($G13);
     $arrayidx14 = (($7) + ($i$079<<3)|0);
     $8 = loadd($arrayidx14);
     $cmp15 = !($8 >= $Gmax2$082);
     if ($cmp15) {
      $Gmax1$2 = $Gmax1$187;$Gmax2$2 = $Gmax2$082;
     } else {
      $Gmax1$2 = $Gmax1$187;$Gmax2$2 = $8;
     }
    } else {
     if ($cmp$i) {
      $Gmax2$189 = $Gmax2$082;
     } else {
      $9 = load4($G13);
      $arrayidx24 = (($9) + ($i$079<<3)|0);
      $10 = loadd($arrayidx24);
      $sub25 = -$10;
      $cmp26$inv = $Gmax2$082 <= $sub25;
      $Gmax2$1 = $cmp26$inv ? $sub25 : $Gmax2$082;
      $cmp$i70 = ($4<<24>>24)==(0);
      if ($cmp$i70) {
       $Gmax1$2 = $Gmax1$081;$Gmax2$2 = $Gmax2$1;
       break;
      } else {
       $Gmax2$189 = $Gmax2$1;
      }
     }
     $11 = load4($G13);
     $arrayidx36 = (($11) + ($i$079<<3)|0);
     $12 = loadd($arrayidx36);
     $cmp37 = !($12 >= $Gmax1$081);
     if ($cmp37) {
      $Gmax1$2 = $Gmax1$081;$Gmax2$2 = $Gmax2$189;
     } else {
      $Gmax1$2 = $12;$Gmax2$2 = $Gmax2$189;
     }
    }
   } while(0);
   $inc = (($i$079) + 1)|0;
   $cmp = ($inc|0)<($0|0);
   if ($cmp) {
    $Gmax1$081 = $Gmax1$2;$Gmax2$082 = $Gmax2$2;$i$079 = $inc;
   } else {
    $Gmax1$0$lcssa = $Gmax1$2;$Gmax2$0$lcssa = $Gmax2$2;
    break;
   }
  }
 } else {
  $Gmax1$0$lcssa = -inf;$Gmax2$0$lcssa = -inf;
 }
 $unshrink = ((($this)) + 72|0);
 $13 = load1($unshrink);
 $cmp45 = ($13<<24>>24)==(0);
 if ($cmp45) {
  $add = $Gmax1$0$lcssa + $Gmax2$0$lcssa;
  $eps = ((($this)) + 32|0);
  $14 = loadd($eps);
  $mul = $14 * 10.0;
  $cmp46 = !($add <= $mul);
  if ($cmp46) {
   $16 = $0;
  } else {
   store1($unshrink,1);
   __ZN6Solver20reconstruct_gradientEv($this);
   $l = ((($this)) + 68|0);
   $15 = load4($l);
   store4($active_size,$15);
   __ZL4infoPKcz(2515,$vararg_buffer);
   $$pre = load4($active_size);
   $16 = $$pre;
  }
 } else {
  $16 = $0;
 }
 $cmp5374 = ($16|0)>(0);
 if (!($cmp5374)) {
  STACKTOP = sp;return;
 }
 $alpha_status$i$i43 = ((($this)) + 16|0);
 $y$i45 = ((($this)) + 8|0);
 $G$i48 = ((($this)) + 12|0);
 $Q$i = ((($this)) + 24|0);
 $alpha$i = ((($this)) + 20|0);
 $p$i = ((($this)) + 56|0);
 $active_set$i = ((($this)) + 60|0);
 $G_bar$i = ((($this)) + 64|0);
 $27 = $16;$i$175 = 0;
 while(1) {
  $17 = load4($alpha_status$i$i43);
  $arrayidx$i$i44 = (($17) + ($i$175)|0);
  $18 = load1($arrayidx$i$i44);
  L27: do {
   switch ($18<<24>>24) {
   case 1:  {
    $19 = load4($y$i45);
    $arrayidx$i46 = (($19) + ($i$175)|0);
    $20 = load1($arrayidx$i46);
    $cmp$i47 = ($20<<24>>24)==(1);
    $21 = load4($G$i48);
    $arrayidx3$i49 = (($21) + ($i$175<<3)|0);
    $22 = loadd($arrayidx3$i49);
    $sub$i50 = -$22;
    if ($cmp$i47) {
     $cmp4$i52 = $Gmax1$0$lcssa < $sub$i50;
     if ($cmp4$i52) {
      $30 = $19;$32 = $21;
      label = 25;
      break L27;
     } else {
      $59 = $27;
      break L27;
     }
    } else {
     $cmp8$i54 = $Gmax2$0$lcssa < $sub$i50;
     if ($cmp8$i54) {
      $30 = $19;$32 = $21;
      label = 25;
      break L27;
     } else {
      $59 = $27;
      break L27;
     }
    }
    break;
   }
   case 0:  {
    $23 = load4($y$i45);
    $arrayidx13$i57 = (($23) + ($i$175)|0);
    $24 = load1($arrayidx13$i57);
    $cmp15$i58 = ($24<<24>>24)==(1);
    $25 = load4($G$i48);
    $arrayidx18$i60 = (($25) + ($i$175<<3)|0);
    $26 = loadd($arrayidx18$i60);
    if ($cmp15$i58) {
     $cmp19$i62 = $26 > $Gmax2$0$lcssa;
     if ($cmp19$i62) {
      $30 = $23;$32 = $25;
      label = 25;
      break L27;
     } else {
      $59 = $27;
      break L27;
     }
    } else {
     $cmp23$i64 = $26 > $Gmax1$0$lcssa;
     if ($cmp23$i64) {
      $30 = $23;$32 = $25;
      label = 25;
      break L27;
     } else {
      $59 = $27;
      break L27;
     }
    }
    break;
   }
   default: {
    $59 = $27;
   }
   }
  } while(0);
  L36: do {
   if ((label|0) == 25) {
    label = 0;
    $dec6671 = (($27) + -1)|0;
    store4($active_size,$dec6671);
    $cmp5972 = ($dec6671|0)>($i$175|0);
    if ($cmp5972) {
     $28 = $dec6671;
     L38: while(1) {
      $arrayidx$i$i = (($17) + ($28)|0);
      $29 = load1($arrayidx$i$i);
      L40: do {
       switch ($29<<24>>24) {
       case 1:  {
        $arrayidx$i37 = (($30) + ($28)|0);
        $31 = load1($arrayidx$i37);
        $cmp$i38 = ($31<<24>>24)==(1);
        $arrayidx3$i40 = (($32) + ($28<<3)|0);
        $33 = loadd($arrayidx3$i40);
        $sub$i = -$33;
        if ($cmp$i38) {
         $cmp4$i = $Gmax1$0$lcssa < $sub$i;
         if ($cmp4$i) {
          break L40;
         } else {
          break L38;
         }
        } else {
         $cmp8$i = $Gmax2$0$lcssa < $sub$i;
         if ($cmp8$i) {
          break L40;
         } else {
          break L38;
         }
        }
        break;
       }
       case 0:  {
        $arrayidx13$i41 = (($30) + ($28)|0);
        $34 = load1($arrayidx13$i41);
        $cmp15$i = ($34<<24>>24)==(1);
        $arrayidx18$i42 = (($32) + ($28<<3)|0);
        $35 = loadd($arrayidx18$i42);
        if ($cmp15$i) {
         $cmp19$i = $35 > $Gmax2$0$lcssa;
         if ($cmp19$i) {
          break L40;
         } else {
          break L38;
         }
        } else {
         $cmp23$i = $35 > $Gmax1$0$lcssa;
         if ($cmp23$i) {
          break L40;
         } else {
          break L38;
         }
        }
        break;
       }
       default: {
        break L38;
       }
       }
      } while(0);
      $dec66 = (($28) + -1)|0;
      store4($active_size,$dec66);
      $cmp59 = ($dec66|0)>($i$175|0);
      if ($cmp59) {
       $28 = $dec66;
      } else {
       $59 = $dec66;
       break L36;
      }
     }
     $36 = load4($Q$i);
     $vtable$i = load4($36);
     $vfn$i = ((($vtable$i)) + 8|0);
     $37 = load4($vfn$i);
     FUNCTION_TABLE_viii[$37 & 7]($36,$i$175,$28);
     $38 = load4($y$i45);
     $arrayidx$i31 = (($38) + ($i$175)|0);
     $arrayidx3$i = (($38) + ($28)|0);
     $39 = load1($arrayidx$i31);
     $40 = load1($arrayidx3$i);
     store1($arrayidx$i31,$40);
     store1($arrayidx3$i,$39);
     $41 = load4($G$i48);
     $arrayidx4$i = (($41) + ($i$175<<3)|0);
     $arrayidx6$i = (($41) + ($28<<3)|0);
     $42 = loadd($arrayidx4$i);
     $43 = loadd($arrayidx6$i);
     stored($arrayidx4$i,$43);
     stored($arrayidx6$i,$42);
     $44 = load4($alpha_status$i$i43);
     $arrayidx7$i = (($44) + ($i$175)|0);
     $arrayidx9$i = (($44) + ($28)|0);
     $45 = load1($arrayidx7$i);
     $46 = load1($arrayidx9$i);
     store1($arrayidx7$i,$46);
     store1($arrayidx9$i,$45);
     $47 = load4($alpha$i);
     $arrayidx10$i = (($47) + ($i$175<<3)|0);
     $arrayidx12$i = (($47) + ($28<<3)|0);
     $48 = loadd($arrayidx10$i);
     $49 = loadd($arrayidx12$i);
     stored($arrayidx10$i,$49);
     stored($arrayidx12$i,$48);
     $50 = load4($p$i);
     $arrayidx13$i = (($50) + ($i$175<<3)|0);
     $arrayidx15$i = (($50) + ($28<<3)|0);
     $51 = loadd($arrayidx13$i);
     $52 = loadd($arrayidx15$i);
     stored($arrayidx13$i,$52);
     stored($arrayidx15$i,$51);
     $53 = load4($active_set$i);
     $arrayidx16$i = (($53) + ($i$175<<2)|0);
     $arrayidx18$i = (($53) + ($28<<2)|0);
     $54 = load4($arrayidx16$i);
     $55 = load4($arrayidx18$i);
     store4($arrayidx16$i,$55);
     store4($arrayidx18$i,$54);
     $56 = load4($G_bar$i);
     $arrayidx19$i = (($56) + ($i$175<<3)|0);
     $arrayidx21$i = (($56) + ($28<<3)|0);
     $57 = loadd($arrayidx19$i);
     $58 = loadd($arrayidx21$i);
     stored($arrayidx19$i,$58);
     stored($arrayidx21$i,$57);
     $$pre85 = load4($active_size);
     $59 = $$pre85;
    } else {
     $59 = $dec6671;
    }
   }
  } while(0);
  $inc69 = (($i$175) + 1)|0;
  $cmp53 = ($inc69|0)<($59|0);
  if ($cmp53) {
   $27 = $59;$i$175 = $inc69;
  } else {
   break;
  }
 }
 STACKTOP = sp;return;
}
function __ZN6Solver20reconstruct_gradientEv($this) {
 $this = $this|0;
 var $$pre = 0, $$pre55 = 0, $$pre56 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0.0, $18 = Math_fround(0), $19 = 0, $2 = 0, $20 = 0.0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0.0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = Math_fround(0), $33 = 0.0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0, $9 = 0;
 var $G = 0, $G46 = 0, $G78 = 0, $G_bar = 0, $Q = 0, $Q63 = 0, $active_size = 0, $add = 0.0, $add48 = 0.0, $add80 = 0.0, $alpha = 0, $alpha68 = 0, $alpha_status$i = 0, $alpha_status$i33 = 0, $alpha_status$i36 = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i34 = 0, $arrayidx$i37 = 0, $arrayidx43 = 0;
 var $arrayidx44 = 0, $arrayidx47 = 0, $arrayidx5 = 0, $arrayidx6 = 0, $arrayidx69 = 0, $arrayidx75 = 0, $arrayidx79 = 0, $call36 = 0, $call67 = 0, $cmp = 0, $cmp$i = 0, $cmp$i35 = 0, $cmp$i38 = 0, $cmp18 = 0, $cmp28 = 0, $cmp33 = 0, $cmp3342 = 0, $cmp39 = 0, $cmp3940 = 0, $cmp452 = 0;
 var $cmp58 = 0, $cmp5846 = 0, $cmp73 = 0, $cmp7344 = 0, $cmp9 = 0, $cmp948 = 0, $conv = 0.0, $conv76 = 0.0, $exitcond = 0, $i$043 = 0, $i$147 = 0, $inc = 0, $inc12 = 0, $inc12$nr_free$0 = 0, $inc15 = 0, $inc51 = 0, $inc54 = 0, $inc82 = 0, $inc86 = 0, $j$053 = 0;
 var $j$150 = 0, $j$241 = 0, $j$345 = 0, $l = 0, $mul = 0, $mul22 = 0, $mul24 = 0, $mul27 = 0, $mul45 = 0.0, $mul77 = 0.0, $nr_free$0$lcssa = 0, $nr_free$049 = 0, $p = 0, $sub = 0, $vararg_buffer = 0, $vtable = 0, $vtable64 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $active_size = ((($this)) + 4|0);
 $0 = load4($active_size);
 $l = ((($this)) + 68|0);
 $1 = load4($l);
 $cmp = ($0|0)==($1|0);
 if ($cmp) {
  STACKTOP = sp;return;
 }
 $cmp452 = ($0|0)<($1|0);
 if ($cmp452) {
  $G_bar = ((($this)) + 64|0);
  $2 = load4($G_bar);
  $p = ((($this)) + 56|0);
  $3 = load4($p);
  $G = ((($this)) + 12|0);
  $4 = load4($G);
  $j$053 = $0;
  while(1) {
   $arrayidx = (($2) + ($j$053<<3)|0);
   $6 = loadd($arrayidx);
   $arrayidx5 = (($3) + ($j$053<<3)|0);
   $7 = loadd($arrayidx5);
   $add = $6 + $7;
   $arrayidx6 = (($4) + ($j$053<<3)|0);
   stored($arrayidx6,$add);
   $inc = (($j$053) + 1)|0;
   $exitcond = ($inc|0)==($1|0);
   if ($exitcond) {
    break;
   } else {
    $j$053 = $inc;
   }
  }
 }
 $cmp948 = ($0|0)>(0);
 if ($cmp948) {
  $alpha_status$i = ((($this)) + 16|0);
  $5 = load4($alpha_status$i);
  $j$150 = 0;$nr_free$049 = 0;
  while(1) {
   $arrayidx$i = (($5) + ($j$150)|0);
   $8 = load1($arrayidx$i);
   $cmp$i = ($8<<24>>24)==(2);
   $inc12 = $cmp$i&1;
   $inc12$nr_free$0 = (($inc12) + ($nr_free$049))|0;
   $inc15 = (($j$150) + 1)|0;
   $cmp9 = ($inc15|0)<($0|0);
   if ($cmp9) {
    $j$150 = $inc15;$nr_free$049 = $inc12$nr_free$0;
   } else {
    $nr_free$0$lcssa = $inc12$nr_free$0;
    break;
   }
  }
 } else {
  $nr_free$0$lcssa = 0;
 }
 $mul = $nr_free$0$lcssa << 1;
 $cmp18 = ($mul|0)<($0|0);
 if ($cmp18) {
  __ZL4infoPKcz(2517,$vararg_buffer);
  $$pre = load4($l);
  $$pre55 = load4($active_size);
  $10 = $$pre55;$9 = $$pre;
 } else {
  $10 = $0;$9 = $1;
 }
 $mul22 = Math_imul($9, $nr_free$0$lcssa)|0;
 $mul24 = $10 << 1;
 $sub = (($9) - ($10))|0;
 $mul27 = Math_imul($mul24, $sub)|0;
 $cmp28 = ($mul22|0)>($mul27|0);
 if (!($cmp28)) {
  $cmp5846 = ($10|0)>(0);
  if (!($cmp5846)) {
   STACKTOP = sp;return;
  }
  $alpha_status$i36 = ((($this)) + 16|0);
  $Q63 = ((($this)) + 24|0);
  $alpha68 = ((($this)) + 20|0);
  $G78 = ((($this)) + 12|0);
  $26 = $9;$35 = $10;$i$147 = 0;
  while(1) {
   $22 = load4($alpha_status$i36);
   $arrayidx$i37 = (($22) + ($i$147)|0);
   $23 = load1($arrayidx$i37);
   $cmp$i38 = ($23<<24>>24)==(2);
   if ($cmp$i38) {
    $24 = load4($Q63);
    $vtable64 = load4($24);
    $25 = load4($vtable64);
    $call67 = (FUNCTION_TABLE_iiii[$25 & 15]($24,$i$147,$26)|0);
    $27 = load4($alpha68);
    $arrayidx69 = (($27) + ($i$147<<3)|0);
    $28 = loadd($arrayidx69);
    $29 = load4($active_size);
    $30 = load4($l);
    $cmp7344 = ($29|0)<($30|0);
    if ($cmp7344) {
     $31 = load4($G78);
     $j$345 = $29;
     while(1) {
      $arrayidx75 = (($call67) + ($j$345<<2)|0);
      $32 = loadf($arrayidx75);
      $conv76 = +$32;
      $mul77 = $28 * $conv76;
      $arrayidx79 = (($31) + ($j$345<<3)|0);
      $33 = loadd($arrayidx79);
      $add80 = $33 + $mul77;
      stored($arrayidx79,$add80);
      $inc82 = (($j$345) + 1)|0;
      $cmp73 = ($inc82|0)<($30|0);
      if ($cmp73) {
       $j$345 = $inc82;
      } else {
       $34 = $29;$36 = $30;
       break;
      }
     }
    } else {
     $34 = $29;$36 = $30;
    }
   } else {
    $34 = $35;$36 = $26;
   }
   $inc86 = (($i$147) + 1)|0;
   $cmp58 = ($inc86|0)<($34|0);
   if ($cmp58) {
    $26 = $36;$35 = $34;$i$147 = $inc86;
   } else {
    break;
   }
  }
  STACKTOP = sp;return;
 }
 $cmp3342 = ($9|0)>($10|0);
 if (!($cmp3342)) {
  STACKTOP = sp;return;
 }
 $Q = ((($this)) + 24|0);
 $alpha_status$i33 = ((($this)) + 16|0);
 $alpha = ((($this)) + 20|0);
 $G46 = ((($this)) + 12|0);
 $13 = $10;$i$043 = $10;
 while(1) {
  $11 = load4($Q);
  $vtable = load4($11);
  $12 = load4($vtable);
  $call36 = (FUNCTION_TABLE_iiii[$12 & 15]($11,$i$043,$13)|0);
  $14 = load4($active_size);
  $cmp3940 = ($14|0)>(0);
  if ($cmp3940) {
   $$pre56 = load4($alpha_status$i33);
   $j$241 = 0;
   while(1) {
    $arrayidx$i34 = (($$pre56) + ($j$241)|0);
    $15 = load1($arrayidx$i34);
    $cmp$i35 = ($15<<24>>24)==(2);
    if ($cmp$i35) {
     $16 = load4($alpha);
     $arrayidx43 = (($16) + ($j$241<<3)|0);
     $17 = loadd($arrayidx43);
     $arrayidx44 = (($call36) + ($j$241<<2)|0);
     $18 = loadf($arrayidx44);
     $conv = +$18;
     $mul45 = $17 * $conv;
     $19 = load4($G46);
     $arrayidx47 = (($19) + ($i$043<<3)|0);
     $20 = loadd($arrayidx47);
     $add48 = $20 + $mul45;
     stored($arrayidx47,$add48);
    }
    $inc51 = (($j$241) + 1)|0;
    $cmp39 = ($inc51|0)<($14|0);
    if ($cmp39) {
     $j$241 = $inc51;
    } else {
     break;
    }
   }
  }
  $inc54 = (($i$043) + 1)|0;
  $21 = load4($l);
  $cmp33 = ($inc54|0)<($21|0);
  if ($cmp33) {
   $13 = $14;$i$043 = $inc54;
  } else {
   break;
  }
 }
 STACKTOP = sp;return;
}
function __ZL4infoPKcz($fmt,$varargs) {
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $0 = 0, $ap = 0, $buf = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1040|0;
 $buf = sp + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 (_vsprintf($buf,$fmt,$ap)|0);
 $0 = load4(1288);
 FUNCTION_TABLE_vi[$0 & 31]($buf);
 STACKTOP = sp;return;
}
function __ZL19print_string_stdoutPKc($s) {
 $s = $s|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(1824);
 (_fputs($s,$0)|0);
 (_fflush($0)|0);
 return;
}
function __ZN9Solver_NUD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZN9Solver_NU18select_working_setERiS0_($this,$out_i,$out_j) {
 $this = $this|0;
 $out_i = $out_i|0;
 $out_j = $out_j|0;
 var $$pr = 0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0.0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0.0, $32 = 0, $33 = 0.0, $34 = 0.0, $35 = Math_fround(0), $36 = 0, $37 = 0.0, $38 = 0, $39 = 0.0, $4 = 0, $40 = 0.0, $41 = Math_fround(0), $42 = 0, $43 = 0;
 var $44 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $Gmaxn$0$lcssa102108113 = 0.0, $Gmaxn$091 = 0.0, $Gmaxn$1 = 0.0, $Gmaxn2$0$lcssa = 0.0, $Gmaxn2$083 = 0.0, $Gmaxn2$1 = 0.0, $Gmaxn2$2 = 0.0, $Gmaxn_idx$0$lcssa101109112 = 0, $Gmaxn_idx$089 = 0, $Gmaxn_idx$1 = 0, $Gmaxp$0$lcssa104106115 = 0.0, $Gmaxp$093 = 0.0, $Gmaxp$1 = 0.0, $Gmaxp2$0$lcssa = 0.0;
 var $Gmaxp2$085 = 0.0, $Gmaxp2$1 = 0.0, $Gmaxp2$2 = 0.0, $Gmaxp_idx$0$Gmaxn_idx$0 = 0, $Gmaxp_idx$0$lcssa103 = 0, $Gmaxp_idx$0$lcssa103107114 = 0, $Gmaxp_idx$092 = 0, $Gmaxp_idx$1 = 0, $Gmin_idx$0$lcssa = 0, $Gmin_idx$081 = 0, $Gmin_idx$1 = 0, $Gmin_idx$3 = 0, $Gmin_idx$5 = 0, $Q_in$0$ph = 0, $Q_ip$0 = 0, $add = 0.0, $add103 = 0.0, $add127 = 0.0, $add128 = 0.0, $add61 = 0.0;
 var $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i73 = 0, $arrayidx100 = 0, $arrayidx102 = 0, $arrayidx104 = 0, $arrayidx135 = 0, $arrayidx14 = 0, $arrayidx4 = 0, $arrayidx41 = 0, $arrayidx48 = 0, $arrayidx58 = 0, $arrayidx60 = 0, $arrayidx62 = 0, $arrayidx84 = 0, $call25 = 0, $call33 = 0, $cmp = 0, $cmp$i = 0, $cmp$i71 = 0;
 var $cmp$i74 = 0, $cmp$i75 = 0, $cmp$i78 = 0, $cmp108 = 0, $cmp118 = 0, $cmp130 = 0, $cmp131 = 0, $cmp137 = 0, $cmp15 = 0, $cmp2 = 0, $cmp22 = 0, $cmp27 = 0, $cmp37 = 0, $cmp3780 = 0, $cmp43 = 0, $cmp5 = 0, $cmp51$inv = 0, $cmp56 = 0, $cmp65 = 0, $cmp74 = 0;
 var $cmp88 = 0, $cmp89$inv = 0, $cmp95 = 0, $cond$i = 0.0, $conv106 = 0.0, $conv63 = 0.0, $inc = 0, $inc125 = 0, $j$084 = 0, $mul = Math_fround(0), $mul105 = Math_fround(0), $mul110 = 0.0, $mul67 = 0.0, $obj_diff$0 = 0.0, $obj_diff97$0 = 0.0, $obj_diff_min$082 = 0.0, $obj_diff_min$1 = 0.0, $obj_diff_min$3 = 0.0, $obj_diff_min$5 = 0.0, $or$cond = 0;
 var $retval$0 = 0, $sub = 0.0, $sub107 = 0.0, $sub107$ = 0.0, $sub111 = 0.0, $sub64 = 0.0, $sub64$ = 0.0, $sub68 = 0.0, $sub85 = 0.0, $sub88 = 0.0, $t$090 = 0, $vtable = 0, $vtable30 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = load4($0);
 $cmp88 = ($1|0)>(0);
 if ($cmp88) {
  $2 = ((($this)) + 8|0);
  $3 = load4($2);
  $4 = ((($this)) + 16|0);
  $5 = load4($4);
  $6 = ((($this)) + 12|0);
  $Gmaxn$091 = -inf;$Gmaxn_idx$089 = -1;$Gmaxp$093 = -inf;$Gmaxp_idx$092 = -1;$t$090 = 0;
  while(1) {
   $arrayidx = (($3) + ($t$090)|0);
   $7 = load1($arrayidx);
   $cmp2 = ($7<<24>>24)==(1);
   $arrayidx$i = (($5) + ($t$090)|0);
   $8 = load1($arrayidx$i);
   if ($cmp2) {
    $cmp$i = ($8<<24>>24)==(1);
    if ($cmp$i) {
     $Gmaxn$1 = $Gmaxn$091;$Gmaxn_idx$1 = $Gmaxn_idx$089;$Gmaxp$1 = $Gmaxp$093;$Gmaxp_idx$1 = $Gmaxp_idx$092;
    } else {
     $9 = load4($6);
     $arrayidx4 = (($9) + ($t$090<<3)|0);
     $10 = loadd($arrayidx4);
     $sub = -$10;
     $cmp5 = !($Gmaxp$093 <= $sub);
     if ($cmp5) {
      $Gmaxn$1 = $Gmaxn$091;$Gmaxn_idx$1 = $Gmaxn_idx$089;$Gmaxp$1 = $Gmaxp$093;$Gmaxp_idx$1 = $Gmaxp_idx$092;
     } else {
      $Gmaxn$1 = $Gmaxn$091;$Gmaxn_idx$1 = $Gmaxn_idx$089;$Gmaxp$1 = $sub;$Gmaxp_idx$1 = $t$090;
     }
    }
   } else {
    $cmp$i78 = ($8<<24>>24)==(0);
    if ($cmp$i78) {
     $Gmaxn$1 = $Gmaxn$091;$Gmaxn_idx$1 = $Gmaxn_idx$089;$Gmaxp$1 = $Gmaxp$093;$Gmaxp_idx$1 = $Gmaxp_idx$092;
    } else {
     $11 = load4($6);
     $arrayidx14 = (($11) + ($t$090<<3)|0);
     $12 = loadd($arrayidx14);
     $cmp15 = !($12 >= $Gmaxn$091);
     if ($cmp15) {
      $Gmaxn$1 = $Gmaxn$091;$Gmaxn_idx$1 = $Gmaxn_idx$089;$Gmaxp$1 = $Gmaxp$093;$Gmaxp_idx$1 = $Gmaxp_idx$092;
     } else {
      $Gmaxn$1 = $12;$Gmaxn_idx$1 = $t$090;$Gmaxp$1 = $Gmaxp$093;$Gmaxp_idx$1 = $Gmaxp_idx$092;
     }
    }
   }
   $inc = (($t$090) + 1)|0;
   $cmp = ($inc|0)<($1|0);
   if ($cmp) {
    $Gmaxn$091 = $Gmaxn$1;$Gmaxn_idx$089 = $Gmaxn_idx$1;$Gmaxp$093 = $Gmaxp$1;$Gmaxp_idx$092 = $Gmaxp_idx$1;$t$090 = $inc;
   } else {
    break;
   }
  }
  $cmp22 = ($Gmaxp_idx$1|0)==(-1);
  if ($cmp22) {
   $Gmaxp_idx$0$lcssa103 = -1;$Q_ip$0 = 0;
  } else {
   $13 = ((($this)) + 24|0);
   $14 = load4($13);
   $vtable = load4($14);
   $15 = load4($vtable);
   $call25 = (FUNCTION_TABLE_iiii[$15 & 15]($14,$Gmaxp_idx$1,$1)|0);
   $Gmaxp_idx$0$lcssa103 = $Gmaxp_idx$1;$Q_ip$0 = $call25;
  }
  $cmp27 = ($Gmaxn_idx$1|0)==(-1);
  if ($cmp27) {
   $Q_in$0$ph = 0;
  } else {
   $16 = ((($this)) + 24|0);
   $17 = load4($16);
   $vtable30 = load4($17);
   $18 = load4($vtable30);
   $19 = load4($0);
   $call33 = (FUNCTION_TABLE_iiii[$18 & 15]($17,$Gmaxn_idx$1,$19)|0);
   $Q_in$0$ph = $call33;
  }
  $$pr = load4($0);
  $cmp3780 = ($$pr|0)>(0);
  if ($cmp3780) {
   $20 = ((($this)) + 8|0);
   $21 = load4($20);
   $22 = ((($this)) + 16|0);
   $23 = load4($22);
   $24 = ((($this)) + 12|0);
   $25 = ((($this)) + 28|0);
   $Gmaxn2$083 = -inf;$Gmaxp2$085 = -inf;$Gmin_idx$081 = -1;$j$084 = 0;$obj_diff_min$082 = inf;
   while(1) {
    $arrayidx41 = (($21) + ($j$084)|0);
    $28 = load1($arrayidx41);
    $cmp43 = ($28<<24>>24)==(1);
    $arrayidx$i73 = (($23) + ($j$084)|0);
    $29 = load1($arrayidx$i73);
    if ($cmp43) {
     $cmp$i74 = ($29<<24>>24)==(0);
     if ($cmp$i74) {
      $Gmaxn2$2 = $Gmaxn2$083;$Gmaxp2$2 = $Gmaxp2$085;$Gmin_idx$5 = $Gmin_idx$081;$obj_diff_min$5 = $obj_diff_min$082;
     } else {
      $30 = load4($24);
      $arrayidx48 = (($30) + ($j$084<<3)|0);
      $31 = loadd($arrayidx48);
      $add = $Gmaxp$1 + $31;
      $cmp51$inv = $31 >= $Gmaxp2$085;
      $Gmaxp2$1 = $cmp51$inv ? $31 : $Gmaxp2$085;
      $cmp56 = $add > 0.0;
      if ($cmp56) {
       $32 = load4($25);
       $arrayidx58 = (($32) + ($Gmaxp_idx$0$lcssa103<<3)|0);
       $33 = loadd($arrayidx58);
       $arrayidx60 = (($32) + ($j$084<<3)|0);
       $34 = loadd($arrayidx60);
       $add61 = $33 + $34;
       $arrayidx62 = (($Q_ip$0) + ($j$084<<2)|0);
       $35 = loadf($arrayidx62);
       $mul = Math_fround($35 * Math_fround(2.0));
       $conv63 = +$mul;
       $sub64 = $add61 - $conv63;
       $cmp65 = $sub64 > 0.0;
       $mul67 = $add * $add;
       $sub68 = -$mul67;
       $sub64$ = $cmp65 ? $sub64 : 9.9999999999999998E-13;
       $obj_diff$0 = $sub68 / $sub64$;
       $cmp74 = !($obj_diff$0 <= $obj_diff_min$082);
       $Gmin_idx$1 = $cmp74 ? $Gmin_idx$081 : $j$084;
       $obj_diff_min$1 = $cmp74 ? $obj_diff_min$082 : $obj_diff$0;
       $Gmaxn2$2 = $Gmaxn2$083;$Gmaxp2$2 = $Gmaxp2$1;$Gmin_idx$5 = $Gmin_idx$1;$obj_diff_min$5 = $obj_diff_min$1;
      } else {
       $Gmaxn2$2 = $Gmaxn2$083;$Gmaxp2$2 = $Gmaxp2$1;$Gmin_idx$5 = $Gmin_idx$081;$obj_diff_min$5 = $obj_diff_min$082;
      }
     }
    } else {
     $cmp$i71 = ($29<<24>>24)==(1);
     if ($cmp$i71) {
      $Gmaxn2$2 = $Gmaxn2$083;$Gmaxp2$2 = $Gmaxp2$085;$Gmin_idx$5 = $Gmin_idx$081;$obj_diff_min$5 = $obj_diff_min$082;
     } else {
      $36 = load4($24);
      $arrayidx84 = (($36) + ($j$084<<3)|0);
      $37 = loadd($arrayidx84);
      $sub85 = $Gmaxn$1 - $37;
      $sub88 = -$37;
      $cmp89$inv = $Gmaxn2$083 <= $sub88;
      $Gmaxn2$1 = $cmp89$inv ? $sub88 : $Gmaxn2$083;
      $cmp95 = $sub85 > 0.0;
      if ($cmp95) {
       $38 = load4($25);
       $arrayidx100 = (($38) + ($Gmaxn_idx$1<<3)|0);
       $39 = loadd($arrayidx100);
       $arrayidx102 = (($38) + ($j$084<<3)|0);
       $40 = loadd($arrayidx102);
       $add103 = $39 + $40;
       $arrayidx104 = (($Q_in$0$ph) + ($j$084<<2)|0);
       $41 = loadf($arrayidx104);
       $mul105 = Math_fround($41 * Math_fround(2.0));
       $conv106 = +$mul105;
       $sub107 = $add103 - $conv106;
       $cmp108 = $sub107 > 0.0;
       $mul110 = $sub85 * $sub85;
       $sub111 = -$mul110;
       $sub107$ = $cmp108 ? $sub107 : 9.9999999999999998E-13;
       $obj_diff97$0 = $sub111 / $sub107$;
       $cmp118 = !($obj_diff97$0 <= $obj_diff_min$082);
       $Gmin_idx$3 = $cmp118 ? $Gmin_idx$081 : $j$084;
       $obj_diff_min$3 = $cmp118 ? $obj_diff_min$082 : $obj_diff97$0;
       $Gmaxn2$2 = $Gmaxn2$1;$Gmaxp2$2 = $Gmaxp2$085;$Gmin_idx$5 = $Gmin_idx$3;$obj_diff_min$5 = $obj_diff_min$3;
      } else {
       $Gmaxn2$2 = $Gmaxn2$1;$Gmaxp2$2 = $Gmaxp2$085;$Gmin_idx$5 = $Gmin_idx$081;$obj_diff_min$5 = $obj_diff_min$082;
      }
     }
    }
    $inc125 = (($j$084) + 1)|0;
    $cmp37 = ($inc125|0)<($$pr|0);
    if ($cmp37) {
     $Gmaxn2$083 = $Gmaxn2$2;$Gmaxp2$085 = $Gmaxp2$2;$Gmin_idx$081 = $Gmin_idx$5;$j$084 = $inc125;$obj_diff_min$082 = $obj_diff_min$5;
    } else {
     $Gmaxn$0$lcssa102108113 = $Gmaxn$1;$Gmaxn2$0$lcssa = $Gmaxn2$2;$Gmaxn_idx$0$lcssa101109112 = $Gmaxn_idx$1;$Gmaxp$0$lcssa104106115 = $Gmaxp$1;$Gmaxp2$0$lcssa = $Gmaxp2$2;$Gmaxp_idx$0$lcssa103107114 = $Gmaxp_idx$0$lcssa103;$Gmin_idx$0$lcssa = $Gmin_idx$5;
     break;
    }
   }
  } else {
   $Gmaxn$0$lcssa102108113 = $Gmaxn$1;$Gmaxn2$0$lcssa = -inf;$Gmaxn_idx$0$lcssa101109112 = $Gmaxn_idx$1;$Gmaxp$0$lcssa104106115 = $Gmaxp$1;$Gmaxp2$0$lcssa = -inf;$Gmaxp_idx$0$lcssa103107114 = $Gmaxp_idx$0$lcssa103;$Gmin_idx$0$lcssa = -1;
  }
 } else {
  $Gmaxn$0$lcssa102108113 = -inf;$Gmaxn2$0$lcssa = -inf;$Gmaxn_idx$0$lcssa101109112 = -1;$Gmaxp$0$lcssa104106115 = -inf;$Gmaxp2$0$lcssa = -inf;$Gmaxp_idx$0$lcssa103107114 = -1;$Gmin_idx$0$lcssa = -1;
 }
 $add127 = $Gmaxp$0$lcssa104106115 + $Gmaxp2$0$lcssa;
 $add128 = $Gmaxn$0$lcssa102108113 + $Gmaxn2$0$lcssa;
 $cmp$i75 = $add127 > $add128;
 $cond$i = $cmp$i75 ? $add127 : $add128;
 $26 = ((($this)) + 32|0);
 $27 = loadd($26);
 $cmp130 = $cond$i < $27;
 $cmp131 = ($Gmin_idx$0$lcssa|0)==(-1);
 $or$cond = $cmp131 | $cmp130;
 if ($or$cond) {
  $retval$0 = 1;
  return ($retval$0|0);
 }
 $42 = ((($this)) + 8|0);
 $43 = load4($42);
 $arrayidx135 = (($43) + ($Gmin_idx$0$lcssa)|0);
 $44 = load1($arrayidx135);
 $cmp137 = ($44<<24>>24)==(1);
 $Gmaxp_idx$0$Gmaxn_idx$0 = $cmp137 ? $Gmaxp_idx$0$lcssa103107114 : $Gmaxn_idx$0$lcssa101109112;
 store4($out_i,$Gmaxp_idx$0$Gmaxn_idx$0);
 store4($out_j,$Gmin_idx$0$lcssa);
 $retval$0 = 0;
 return ($retval$0|0);
}
function __ZN9Solver_NU13calculate_rhoEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0.0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $add = 0.0, $add31 = 0.0, $add40 = 0.0, $add48 = 0.0, $add51 = 0.0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx19 = 0, $arrayidx4 = 0, $cmp = 0, $cmp$i = 0, $cmp$i35 = 0, $cmp$i38 = 0, $cmp$i39 = 0, $cmp$i41 = 0, $cmp$i45 = 0, $cmp$i46 = 0, $cmp2 = 0, $cmp36 = 0, $cmp43 = 0;
 var $cmp48 = 0, $cond$i = 0.0, $cond$i40 = 0.0, $cond$i42 = 0.0, $cond$i47 = 0.0, $conv38 = 0.0, $conv45 = 0.0, $div = 0.0, $div41 = 0.0, $div46 = 0.0, $div49 = 0.0, $div52 = 0.0, $div53 = 0.0, $i$057 = 0, $inc = 0, $inc28 = 0, $inc35 = 0, $lb1$0$lcssa71 = 0.0, $lb1$053 = 0.0, $lb1$1 = 0.0;
 var $lb2$0$lcssa72 = 0.0, $lb2$0$lcssa73 = 0.0, $lb2$054 = 0.0, $lb2$1 = 0.0, $nr_free1$049 = 0, $nr_free1$1 = 0, $nr_free2$0$lcssa66 = 0, $nr_free2$0$lcssa67 = 0, $nr_free2$050 = 0, $nr_free2$1 = 0, $r = 0, $r1$0 = 0.0, $r2$0 = 0.0, $si = 0, $sub = 0.0, $sum_free1$055 = 0.0, $sum_free1$1 = 0.0, $sum_free2$0$lcssa74 = 0.0, $sum_free2$0$lcssa75 = 0.0, $sum_free2$056 = 0.0;
 var $sum_free2$1 = 0.0, $ub1$0$lcssa68 = 0.0, $ub1$051 = 0.0, $ub1$1 = 0.0, $ub2$0$lcssa69 = 0.0, $ub2$0$lcssa70 = 0.0, $ub2$052 = 0.0, $ub2$1 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = load4($0);
 $cmp48 = ($1|0)>(0);
 if ($cmp48) {
  $2 = ((($this)) + 8|0);
  $3 = load4($2);
  $4 = ((($this)) + 16|0);
  $5 = load4($4);
  $6 = ((($this)) + 12|0);
  $i$057 = 0;$lb1$053 = -inf;$lb2$054 = -inf;$nr_free1$049 = 0;$nr_free2$050 = 0;$sum_free1$055 = 0.0;$sum_free2$056 = 0.0;$ub1$051 = inf;$ub2$052 = inf;
  while(1) {
   $arrayidx = (($3) + ($i$057)|0);
   $7 = load1($arrayidx);
   $cmp2 = ($7<<24>>24)==(1);
   $arrayidx$i = (($5) + ($i$057)|0);
   $8 = load1($arrayidx$i);
   $cmp$i = ($8<<24>>24)==(1);
   do {
    if ($cmp2) {
     if ($cmp$i) {
      $9 = load4($6);
      $arrayidx4 = (($9) + ($i$057<<3)|0);
      $10 = loadd($arrayidx4);
      $cmp$i46 = $lb1$053 > $10;
      $cond$i47 = $cmp$i46 ? $lb1$053 : $10;
      $lb1$1 = $cond$i47;$lb2$1 = $lb2$054;$nr_free1$1 = $nr_free1$049;$nr_free2$1 = $nr_free2$050;$sum_free1$1 = $sum_free1$055;$sum_free2$1 = $sum_free2$056;$ub1$1 = $ub1$051;$ub2$1 = $ub2$052;
      break;
     }
     $cmp$i45 = ($8<<24>>24)==(0);
     $11 = load4($6);
     $12 = (($11) + ($i$057<<3)|0);
     $13 = loadd($12);
     if ($cmp$i45) {
      $cmp$i41 = $ub1$051 < $13;
      $cond$i42 = $cmp$i41 ? $ub1$051 : $13;
      $lb1$1 = $lb1$053;$lb2$1 = $lb2$054;$nr_free1$1 = $nr_free1$049;$nr_free2$1 = $nr_free2$050;$sum_free1$1 = $sum_free1$055;$sum_free2$1 = $sum_free2$056;$ub1$1 = $cond$i42;$ub2$1 = $ub2$052;
      break;
     } else {
      $inc = (($nr_free1$049) + 1)|0;
      $add = $sum_free1$055 + $13;
      $lb1$1 = $lb1$053;$lb2$1 = $lb2$054;$nr_free1$1 = $inc;$nr_free2$1 = $nr_free2$050;$sum_free1$1 = $add;$sum_free2$1 = $sum_free2$056;$ub1$1 = $ub1$051;$ub2$1 = $ub2$052;
      break;
     }
    } else {
     if ($cmp$i) {
      $14 = load4($6);
      $arrayidx19 = (($14) + ($i$057<<3)|0);
      $15 = loadd($arrayidx19);
      $cmp$i39 = $lb2$054 > $15;
      $cond$i40 = $cmp$i39 ? $lb2$054 : $15;
      $lb1$1 = $lb1$053;$lb2$1 = $cond$i40;$nr_free1$1 = $nr_free1$049;$nr_free2$1 = $nr_free2$050;$sum_free1$1 = $sum_free1$055;$sum_free2$1 = $sum_free2$056;$ub1$1 = $ub1$051;$ub2$1 = $ub2$052;
      break;
     }
     $cmp$i38 = ($8<<24>>24)==(0);
     $16 = load4($6);
     $17 = (($16) + ($i$057<<3)|0);
     $18 = loadd($17);
     if ($cmp$i38) {
      $cmp$i35 = $ub2$052 < $18;
      $cond$i = $cmp$i35 ? $ub2$052 : $18;
      $lb1$1 = $lb1$053;$lb2$1 = $lb2$054;$nr_free1$1 = $nr_free1$049;$nr_free2$1 = $nr_free2$050;$sum_free1$1 = $sum_free1$055;$sum_free2$1 = $sum_free2$056;$ub1$1 = $ub1$051;$ub2$1 = $cond$i;
      break;
     } else {
      $inc28 = (($nr_free2$050) + 1)|0;
      $add31 = $sum_free2$056 + $18;
      $lb1$1 = $lb1$053;$lb2$1 = $lb2$054;$nr_free1$1 = $nr_free1$049;$nr_free2$1 = $inc28;$sum_free1$1 = $sum_free1$055;$sum_free2$1 = $add31;$ub1$1 = $ub1$051;$ub2$1 = $ub2$052;
      break;
     }
    }
   } while(0);
   $inc35 = (($i$057) + 1)|0;
   $cmp = ($inc35|0)<($1|0);
   if ($cmp) {
    $i$057 = $inc35;$lb1$053 = $lb1$1;$lb2$054 = $lb2$1;$nr_free1$049 = $nr_free1$1;$nr_free2$050 = $nr_free2$1;$sum_free1$055 = $sum_free1$1;$sum_free2$056 = $sum_free2$1;$ub1$051 = $ub1$1;$ub2$052 = $ub2$1;
   } else {
    break;
   }
  }
  $cmp36 = ($nr_free1$1|0)>(0);
  if ($cmp36) {
   $conv38 = (+($nr_free1$1|0));
   $div = $sum_free1$1 / $conv38;
   $lb2$0$lcssa72 = $lb2$1;$nr_free2$0$lcssa66 = $nr_free2$1;$r1$0 = $div;$sum_free2$0$lcssa74 = $sum_free2$1;$ub2$0$lcssa69 = $ub2$1;
  } else {
   $lb1$0$lcssa71 = $lb1$1;$lb2$0$lcssa73 = $lb2$1;$nr_free2$0$lcssa67 = $nr_free2$1;$sum_free2$0$lcssa75 = $sum_free2$1;$ub1$0$lcssa68 = $ub1$1;$ub2$0$lcssa70 = $ub2$1;
   label = 17;
  }
 } else {
  $lb1$0$lcssa71 = -inf;$lb2$0$lcssa73 = -inf;$nr_free2$0$lcssa67 = 0;$sum_free2$0$lcssa75 = 0.0;$ub1$0$lcssa68 = inf;$ub2$0$lcssa70 = inf;
  label = 17;
 }
 if ((label|0) == 17) {
  $add40 = $ub1$0$lcssa68 + $lb1$0$lcssa71;
  $div41 = $add40 * 0.5;
  $lb2$0$lcssa72 = $lb2$0$lcssa73;$nr_free2$0$lcssa66 = $nr_free2$0$lcssa67;$r1$0 = $div41;$sum_free2$0$lcssa74 = $sum_free2$0$lcssa75;$ub2$0$lcssa69 = $ub2$0$lcssa70;
 }
 $cmp43 = ($nr_free2$0$lcssa66|0)>(0);
 if ($cmp43) {
  $conv45 = (+($nr_free2$0$lcssa66|0));
  $div46 = $sum_free2$0$lcssa74 / $conv45;
  $r2$0 = $div46;
  $add51 = $r1$0 + $r2$0;
  $div52 = $add51 * 0.5;
  $si = ((($this)) + 76|0);
  $19 = load4($si);
  $r = ((($19)) + 32|0);
  stored($r,$div52);
  $sub = $r1$0 - $r2$0;
  $div53 = $sub * 0.5;
  return (+$div53);
 } else {
  $add48 = $ub2$0$lcssa69 + $lb2$0$lcssa72;
  $div49 = $add48 * 0.5;
  $r2$0 = $div49;
  $add51 = $r1$0 + $r2$0;
  $div52 = $add51 * 0.5;
  $si = ((($this)) + 76|0);
  $19 = load4($si);
  $r = ((($19)) + 32|0);
  stored($r,$div52);
  $sub = $r1$0 - $r2$0;
  $div53 = $sub * 0.5;
  return (+$div53);
 }
 return +(0.0);
}
function __ZN9Solver_NU12do_shrinkingEv($this) {
 $this = $this|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0.0, $36 = 0, $37 = 0, $38 = 0, $39 = 0.0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0.0, $47 = 0, $48 = 0.0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0.0, $56 = 0.0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0.0;
 var $62 = 0.0, $63 = 0, $64 = 0.0, $65 = 0.0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0.0, $71 = 0.0, $72 = 0, $8 = 0, $9 = 0, $Gmax1$0$lcssa = 0.0, $Gmax1$075 = 0.0, $Gmax1$1 = 0.0, $Gmax1$186 = 0.0, $Gmax1$187 = 0.0, $Gmax2$0$lcssa = 0.0;
 var $Gmax2$076 = 0.0, $Gmax2$1 = 0.0, $Gmax3$0$lcssa = 0.0, $Gmax3$077 = 0.0, $Gmax3$1 = 0.0, $Gmax4$0$lcssa = 0.0, $Gmax4$078 = 0.0, $Gmax4$1 = 0.0, $Gmax4$188 = 0.0, $Gmax4$189 = 0.0, $add = 0.0, $add47 = 0.0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i$i45 = 0, $arrayidx$i35 = 0, $arrayidx$i40 = 0, $arrayidx$i46 = 0, $arrayidx10$i = 0;
 var $arrayidx12$i = 0, $arrayidx13$i = 0, $arrayidx13$i43 = 0, $arrayidx13$i55 = 0, $arrayidx15$i = 0, $arrayidx16$i = 0, $arrayidx18$i = 0, $arrayidx18$i44 = 0, $arrayidx18$i57 = 0, $arrayidx19$i = 0, $arrayidx21$i = 0, $arrayidx24 = 0, $arrayidx29 = 0, $arrayidx3$i = 0, $arrayidx3$i42 = 0, $arrayidx3$i48 = 0, $arrayidx4 = 0, $arrayidx4$i = 0, $arrayidx6$i = 0, $arrayidx7$i = 0;
 var $arrayidx9$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i39 = 0, $cmp$i41 = 0, $cmp$i47 = 0, $cmp$i65 = 0, $cmp13 = 0, $cmp15$i = 0, $cmp15$i56 = 0, $cmp19$i = 0, $cmp19$i59 = 0, $cmp2 = 0, $cmp23$i = 0, $cmp23$i61 = 0, $cmp26 = 0, $cmp30 = 0, $cmp38 = 0, $cmp4$i = 0, $cmp4$i51 = 0;
 var $cmp46 = 0, $cmp49 = 0, $cmp5 = 0, $cmp56 = 0, $cmp5670 = 0, $cmp62 = 0, $cmp6268 = 0, $cmp74 = 0, $cmp8$i = 0, $cmp8$i53 = 0, $cond$i = 0.0, $dec69 = 0, $dec6967 = 0, $i$079 = 0, $i$171 = 0, $inc = 0, $inc72 = 0, $mul = 0.0, $sub = 0.0, $sub$i = 0.0;
 var $sub$i49 = 0.0, $vfn$i = 0, $vtable$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($this)) + 4|0);
 $1 = load4($0);
 $cmp74 = ($1|0)>(0);
 if ($cmp74) {
  $2 = ((($this)) + 16|0);
  $3 = load4($2);
  $4 = ((($this)) + 8|0);
  $5 = ((($this)) + 12|0);
  $Gmax1$075 = -inf;$Gmax2$076 = -inf;$Gmax3$077 = -inf;$Gmax4$078 = -inf;$i$079 = 0;
  while(1) {
   $arrayidx$i = (($3) + ($i$079)|0);
   $6 = load1($arrayidx$i);
   $cmp$i = ($6<<24>>24)==(1);
   if ($cmp$i) {
    $Gmax1$186 = $Gmax1$075;$Gmax4$188 = $Gmax4$078;
    label = 10;
   } else {
    $7 = load4($4);
    $arrayidx = (($7) + ($i$079)|0);
    $8 = load1($arrayidx);
    $cmp2 = ($8<<24>>24)==(1);
    $9 = load4($5);
    $arrayidx4 = (($9) + ($i$079<<3)|0);
    $10 = loadd($arrayidx4);
    $sub = -$10;
    if ($cmp2) {
     $cmp5 = $Gmax1$075 < $sub;
     if ($cmp5) {
      $Gmax1$1 = $sub;$Gmax4$1 = $Gmax4$078;
     } else {
      $Gmax1$1 = $Gmax1$075;$Gmax4$1 = $Gmax4$078;
     }
    } else {
     $cmp13 = $Gmax4$078 < $sub;
     if ($cmp13) {
      $Gmax1$1 = $Gmax1$075;$Gmax4$1 = $sub;
     } else {
      $Gmax1$1 = $Gmax1$075;$Gmax4$1 = $Gmax4$078;
     }
    }
    $cmp$i39 = ($6<<24>>24)==(0);
    if ($cmp$i39) {
     $Gmax1$187 = $Gmax1$1;$Gmax2$1 = $Gmax2$076;$Gmax3$1 = $Gmax3$077;$Gmax4$189 = $Gmax4$1;
    } else {
     $Gmax1$186 = $Gmax1$1;$Gmax4$188 = $Gmax4$1;
     label = 10;
    }
   }
   do {
    if ((label|0) == 10) {
     label = 0;
     $11 = load4($4);
     $arrayidx24 = (($11) + ($i$079)|0);
     $12 = load1($arrayidx24);
     $cmp26 = ($12<<24>>24)==(1);
     $13 = load4($5);
     $arrayidx29 = (($13) + ($i$079<<3)|0);
     $14 = loadd($arrayidx29);
     if ($cmp26) {
      $cmp30 = $14 > $Gmax2$076;
      if (!($cmp30)) {
       $Gmax1$187 = $Gmax1$186;$Gmax2$1 = $Gmax2$076;$Gmax3$1 = $Gmax3$077;$Gmax4$189 = $Gmax4$188;
       break;
      }
      $Gmax1$187 = $Gmax1$186;$Gmax2$1 = $14;$Gmax3$1 = $Gmax3$077;$Gmax4$189 = $Gmax4$188;
      break;
     } else {
      $cmp38 = $14 > $Gmax3$077;
      if (!($cmp38)) {
       $Gmax1$187 = $Gmax1$186;$Gmax2$1 = $Gmax2$076;$Gmax3$1 = $Gmax3$077;$Gmax4$189 = $Gmax4$188;
       break;
      }
      $Gmax1$187 = $Gmax1$186;$Gmax2$1 = $Gmax2$076;$Gmax3$1 = $14;$Gmax4$189 = $Gmax4$188;
      break;
     }
    }
   } while(0);
   $inc = (($i$079) + 1)|0;
   $cmp = ($inc|0)<($1|0);
   if ($cmp) {
    $Gmax1$075 = $Gmax1$187;$Gmax2$076 = $Gmax2$1;$Gmax3$077 = $Gmax3$1;$Gmax4$078 = $Gmax4$189;$i$079 = $inc;
   } else {
    $Gmax1$0$lcssa = $Gmax1$187;$Gmax2$0$lcssa = $Gmax2$1;$Gmax3$0$lcssa = $Gmax3$1;$Gmax4$0$lcssa = $Gmax4$189;
    break;
   }
  }
 } else {
  $Gmax1$0$lcssa = -inf;$Gmax2$0$lcssa = -inf;$Gmax3$0$lcssa = -inf;$Gmax4$0$lcssa = -inf;
 }
 $15 = ((($this)) + 72|0);
 $16 = load1($15);
 $cmp46 = ($16<<24>>24)==(0);
 if ($cmp46) {
  $add = $Gmax1$0$lcssa + $Gmax2$0$lcssa;
  $add47 = $Gmax3$0$lcssa + $Gmax4$0$lcssa;
  $cmp$i65 = $add > $add47;
  $cond$i = $cmp$i65 ? $add : $add47;
  $17 = ((($this)) + 32|0);
  $18 = loadd($17);
  $mul = $18 * 10.0;
  $cmp49 = !($cond$i <= $mul);
  if ($cmp49) {
   $21 = $1;
  } else {
   store1($15,1);
   __ZN6Solver20reconstruct_gradientEv($this);
   $19 = ((($this)) + 68|0);
   $20 = load4($19);
   store4($0,$20);
   $21 = $20;
  }
 } else {
  $21 = $1;
 }
 $cmp5670 = ($21|0)>(0);
 if (!($cmp5670)) {
  return;
 }
 $22 = ((($this)) + 16|0);
 $23 = ((($this)) + 8|0);
 $24 = ((($this)) + 12|0);
 $25 = ((($this)) + 24|0);
 $26 = ((($this)) + 20|0);
 $27 = ((($this)) + 56|0);
 $28 = ((($this)) + 60|0);
 $29 = ((($this)) + 64|0);
 $40 = $21;$i$171 = 0;
 while(1) {
  $30 = load4($22);
  $arrayidx$i$i45 = (($30) + ($i$171)|0);
  $31 = load1($arrayidx$i$i45);
  L31: do {
   switch ($31<<24>>24) {
   case 1:  {
    $32 = load4($23);
    $arrayidx$i46 = (($32) + ($i$171)|0);
    $33 = load1($arrayidx$i46);
    $cmp$i47 = ($33<<24>>24)==(1);
    $34 = load4($24);
    $arrayidx3$i48 = (($34) + ($i$171<<3)|0);
    $35 = loadd($arrayidx3$i48);
    $sub$i49 = -$35;
    if ($cmp$i47) {
     $cmp4$i51 = $Gmax1$0$lcssa < $sub$i49;
     if ($cmp4$i51) {
      $43 = $32;$45 = $34;
      label = 28;
      break L31;
     } else {
      $72 = $40;
      break L31;
     }
    } else {
     $cmp8$i53 = $Gmax4$0$lcssa < $sub$i49;
     if ($cmp8$i53) {
      $43 = $32;$45 = $34;
      label = 28;
      break L31;
     } else {
      $72 = $40;
      break L31;
     }
    }
    break;
   }
   case 0:  {
    $36 = load4($23);
    $arrayidx13$i55 = (($36) + ($i$171)|0);
    $37 = load1($arrayidx13$i55);
    $cmp15$i56 = ($37<<24>>24)==(1);
    $38 = load4($24);
    $arrayidx18$i57 = (($38) + ($i$171<<3)|0);
    $39 = loadd($arrayidx18$i57);
    if ($cmp15$i56) {
     $cmp19$i59 = $39 > $Gmax2$0$lcssa;
     if ($cmp19$i59) {
      $43 = $36;$45 = $38;
      label = 28;
      break L31;
     } else {
      $72 = $40;
      break L31;
     }
    } else {
     $cmp23$i61 = $39 > $Gmax3$0$lcssa;
     if ($cmp23$i61) {
      $43 = $36;$45 = $38;
      label = 28;
      break L31;
     } else {
      $72 = $40;
      break L31;
     }
    }
    break;
   }
   default: {
    $72 = $40;
   }
   }
  } while(0);
  L40: do {
   if ((label|0) == 28) {
    label = 0;
    $dec6967 = (($40) + -1)|0;
    store4($0,$dec6967);
    $cmp6268 = ($dec6967|0)>($i$171|0);
    if ($cmp6268) {
     $41 = $dec6967;
     L42: while(1) {
      $arrayidx$i$i = (($30) + ($41)|0);
      $42 = load1($arrayidx$i$i);
      L44: do {
       switch ($42<<24>>24) {
       case 1:  {
        $arrayidx$i40 = (($43) + ($41)|0);
        $44 = load1($arrayidx$i40);
        $cmp$i41 = ($44<<24>>24)==(1);
        $arrayidx3$i42 = (($45) + ($41<<3)|0);
        $46 = loadd($arrayidx3$i42);
        $sub$i = -$46;
        if ($cmp$i41) {
         $cmp4$i = $Gmax1$0$lcssa < $sub$i;
         if ($cmp4$i) {
          break L44;
         } else {
          break L42;
         }
        } else {
         $cmp8$i = $Gmax4$0$lcssa < $sub$i;
         if ($cmp8$i) {
          break L44;
         } else {
          break L42;
         }
        }
        break;
       }
       case 0:  {
        $arrayidx13$i43 = (($43) + ($41)|0);
        $47 = load1($arrayidx13$i43);
        $cmp15$i = ($47<<24>>24)==(1);
        $arrayidx18$i44 = (($45) + ($41<<3)|0);
        $48 = loadd($arrayidx18$i44);
        if ($cmp15$i) {
         $cmp19$i = $48 > $Gmax2$0$lcssa;
         if ($cmp19$i) {
          break L44;
         } else {
          break L42;
         }
        } else {
         $cmp23$i = $48 > $Gmax3$0$lcssa;
         if ($cmp23$i) {
          break L44;
         } else {
          break L42;
         }
        }
        break;
       }
       default: {
        break L42;
       }
       }
      } while(0);
      $dec69 = (($41) + -1)|0;
      store4($0,$dec69);
      $cmp62 = ($dec69|0)>($i$171|0);
      if ($cmp62) {
       $41 = $dec69;
      } else {
       $72 = $dec69;
       break L40;
      }
     }
     $49 = load4($25);
     $vtable$i = load4($49);
     $vfn$i = ((($vtable$i)) + 8|0);
     $50 = load4($vfn$i);
     FUNCTION_TABLE_viii[$50 & 7]($49,$i$171,$41);
     $51 = load4($23);
     $arrayidx$i35 = (($51) + ($i$171)|0);
     $arrayidx3$i = (($51) + ($41)|0);
     $52 = load1($arrayidx$i35);
     $53 = load1($arrayidx3$i);
     store1($arrayidx$i35,$53);
     store1($arrayidx3$i,$52);
     $54 = load4($24);
     $arrayidx4$i = (($54) + ($i$171<<3)|0);
     $arrayidx6$i = (($54) + ($41<<3)|0);
     $55 = loadd($arrayidx4$i);
     $56 = loadd($arrayidx6$i);
     stored($arrayidx4$i,$56);
     stored($arrayidx6$i,$55);
     $57 = load4($22);
     $arrayidx7$i = (($57) + ($i$171)|0);
     $arrayidx9$i = (($57) + ($41)|0);
     $58 = load1($arrayidx7$i);
     $59 = load1($arrayidx9$i);
     store1($arrayidx7$i,$59);
     store1($arrayidx9$i,$58);
     $60 = load4($26);
     $arrayidx10$i = (($60) + ($i$171<<3)|0);
     $arrayidx12$i = (($60) + ($41<<3)|0);
     $61 = loadd($arrayidx10$i);
     $62 = loadd($arrayidx12$i);
     stored($arrayidx10$i,$62);
     stored($arrayidx12$i,$61);
     $63 = load4($27);
     $arrayidx13$i = (($63) + ($i$171<<3)|0);
     $arrayidx15$i = (($63) + ($41<<3)|0);
     $64 = loadd($arrayidx13$i);
     $65 = loadd($arrayidx15$i);
     stored($arrayidx13$i,$65);
     stored($arrayidx15$i,$64);
     $66 = load4($28);
     $arrayidx16$i = (($66) + ($i$171<<2)|0);
     $arrayidx18$i = (($66) + ($41<<2)|0);
     $67 = load4($arrayidx16$i);
     $68 = load4($arrayidx18$i);
     store4($arrayidx16$i,$68);
     store4($arrayidx18$i,$67);
     $69 = load4($29);
     $arrayidx19$i = (($69) + ($i$171<<3)|0);
     $arrayidx21$i = (($69) + ($41<<3)|0);
     $70 = loadd($arrayidx19$i);
     $71 = loadd($arrayidx21$i);
     stored($arrayidx19$i,$71);
     stored($arrayidx21$i,$70);
     $$pre = load4($0);
     $72 = $$pre;
    } else {
     $72 = $dec6967;
    }
   }
  } while(0);
  $inc72 = (($i$171) + 1)|0;
  $cmp56 = ($inc72|0)<($72|0);
  if ($cmp56) {
   $40 = $72;$i$171 = $inc72;
  } else {
   break;
  }
 }
 return;
}
function __ZN5Cache8get_dataEiPPfi($this,$index,$data,$len) {
 $this = $this|0;
 $index = $index|0;
 $data = $data|0;
 $len = $len|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $add = 0, $arrayidx = 0, $call = 0, $cmp = 0, $cmp5 = 0, $cmp526 = 0, $data11 = 0, $data17$phi$trans$insert = 0, $data6 = 0, $head = 0, $len$addr$0 = 0, $len2 = 0, $len7 = 0, $lru_head$i = 0, $mul = 0, $next = 0, $next$i = 0, $next$i17 = 0, $next$i19 = 0;
 var $next2$i = 0, $next2$i21 = 0, $next5$i = 0, $size = 0, $sub = 0, $sub14 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $head = ((($this)) + 8|0);
 $0 = load4($head);
 $arrayidx = (($0) + ($index<<4)|0);
 $len2 = (((($0) + ($index<<4)|0)) + 12|0);
 $1 = load4($len2);
 $tobool = ($1|0)==(0);
 if (!($tobool)) {
  $next$i = (((($0) + ($index<<4)|0)) + 4|0);
  $2 = load4($next$i);
  $3 = load4($arrayidx);
  $next2$i = ((($3)) + 4|0);
  store4($next2$i,$2);
  $4 = load4($next$i);
  store4($4,$3);
 }
 $sub = (($len) - ($1))|0;
 $cmp = ($sub|0)>(0);
 if (!($cmp)) {
  $data17$phi$trans$insert = (((($0) + ($index<<4)|0)) + 8|0);
  $$pre = load4($data17$phi$trans$insert);
  $19 = $$pre;$len$addr$0 = $len;
  $lru_head$i = ((($this)) + 12|0);
  $next$i17 = (((($0) + ($index<<4)|0)) + 4|0);
  store4($next$i17,$lru_head$i);
  $17 = load4($lru_head$i);
  store4($arrayidx,$17);
  $next5$i = ((($17)) + 4|0);
  store4($next5$i,$arrayidx);
  $18 = load4($next$i17);
  store4($18,$arrayidx);
  store4($data,$19);
  return ($len$addr$0|0);
 }
 $size = ((($this)) + 4|0);
 $5 = load4($size);
 $cmp526 = ($5|0)<($sub|0);
 if ($cmp526) {
  $next = ((($this)) + 16|0);
  while(1) {
   $6 = load4($next);
   $next$i19 = ((($6)) + 4|0);
   $7 = load4($next$i19);
   $8 = load4($6);
   $next2$i21 = ((($8)) + 4|0);
   store4($next2$i21,$7);
   $9 = load4($next$i19);
   store4($9,$8);
   $data6 = ((($6)) + 8|0);
   $10 = load4($data6);
   _free($10);
   $len7 = ((($6)) + 12|0);
   $11 = load4($len7);
   $12 = load4($size);
   $add = (($12) + ($11))|0;
   store4($size,$add);
   store4($data6,0);
   store4($len7,0);
   $cmp5 = ($add|0)<($sub|0);
   if (!($cmp5)) {
    break;
   }
  }
 }
 $data11 = (((($0) + ($index<<4)|0)) + 8|0);
 $13 = load4($data11);
 $mul = $len << 2;
 $call = (_realloc($13,$mul)|0);
 store4($data11,$call);
 $14 = load4($size);
 $sub14 = (($14) - ($sub))|0;
 store4($size,$sub14);
 $15 = load4($len2);
 store4($len2,$len);
 $16 = $call;
 $19 = $16;$len$addr$0 = $15;
 $lru_head$i = ((($this)) + 12|0);
 $next$i17 = (((($0) + ($index<<4)|0)) + 4|0);
 store4($next$i17,$lru_head$i);
 $17 = load4($lru_head$i);
 store4($arrayidx,$17);
 $next5$i = ((($17)) + 4|0);
 store4($next5$i,$arrayidx);
 $18 = load4($next$i17);
 store4($18,$arrayidx);
 store4($data,$19);
 return ($len$addr$0|0);
}
function __ZN5Cache10swap_indexEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $arrayidx26 = 0, $arrayidx34 = 0, $arrayidx53 = 0, $arrayidx55 = 0, $cmp = 0, $cmp41 = 0, $cmp45 = 0, $cmp4539 = 0, $cmp47 = 0;
 var $cmp50 = 0, $data = 0, $data18 = 0, $data52 = 0, $data56 = 0, $h$0 = 0, $h$038 = 0, $h$040 = 0, $head = 0, $i$j = 0, $j$i = 0, $len = 0, $len21 = 0, $len24 = 0, $len46 = 0, $len8 = 0, $lru_head$i = 0, $lru_head$i17 = 0, $lru_head$pre$phiZ2D = 0, $next = 0;
 var $next$i = 0, $next$i11 = 0, $next$i15 = 0, $next$i18 = 0, $next$i23 = 0, $next2$i = 0, $next2$i13 = 0, $next2$i25 = 0, $next5$i = 0, $next5$i21 = 0, $next62 = 0, $prev$i = 0, $prev$i24 = 0, $size = 0, $tobool = 0, $tobool28 = 0, $tobool36 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($i|0)==($j|0);
 if ($cmp) {
  return;
 }
 $head = ((($this)) + 8|0);
 $0 = load4($head);
 $len = (((($0) + ($i<<4)|0)) + 12|0);
 $1 = load4($len);
 $tobool = ($1|0)==(0);
 if (!($tobool)) {
  $next$i = (((($0) + ($i<<4)|0)) + 4|0);
  $2 = load4($next$i);
  $prev$i = (($0) + ($i<<4)|0);
  $3 = load4($prev$i);
  $next2$i = ((($3)) + 4|0);
  store4($next2$i,$2);
  $4 = load4($next$i);
  store4($4,$3);
 }
 $len8 = (((($0) + ($j<<4)|0)) + 12|0);
 $5 = load4($len8);
 $tobool9 = ($5|0)==(0);
 if (!($tobool9)) {
  $next$i23 = (((($0) + ($j<<4)|0)) + 4|0);
  $6 = load4($next$i23);
  $prev$i24 = (($0) + ($j<<4)|0);
  $7 = load4($prev$i24);
  $next2$i25 = ((($7)) + 4|0);
  store4($next2$i25,$6);
  $8 = load4($next$i23);
  store4($8,$7);
 }
 $data = (((($0) + ($i<<4)|0)) + 8|0);
 $data18 = (((($0) + ($j<<4)|0)) + 8|0);
 $9 = load4($data);
 $10 = load4($data18);
 store4($data,$10);
 store4($data18,$9);
 $11 = load4($head);
 $len21 = (((($11) + ($i<<4)|0)) + 12|0);
 $len24 = (((($11) + ($j<<4)|0)) + 12|0);
 $12 = load4($len21);
 $13 = load4($len24);
 store4($len21,$13);
 store4($len24,$12);
 $14 = load4($len21);
 $tobool28 = ($14|0)==(0);
 if (!($tobool28)) {
  $arrayidx26 = (($11) + ($i<<4)|0);
  $lru_head$i17 = ((($this)) + 12|0);
  $next$i18 = (((($11) + ($i<<4)|0)) + 4|0);
  store4($next$i18,$lru_head$i17);
  $15 = load4($lru_head$i17);
  store4($arrayidx26,$15);
  $next5$i21 = ((($15)) + 4|0);
  store4($next5$i21,$arrayidx26);
  $16 = load4($next$i18);
  store4($16,$arrayidx26);
 }
 $tobool36 = ($12|0)==(0);
 if ($tobool36) {
  $$pre = ((($this)) + 12|0);
  $lru_head$pre$phiZ2D = $$pre;
 } else {
  $arrayidx34 = (($11) + ($j<<4)|0);
  $lru_head$i = ((($this)) + 12|0);
  $next$i15 = (((($11) + ($j<<4)|0)) + 4|0);
  store4($next$i15,$lru_head$i);
  $17 = load4($lru_head$i);
  store4($arrayidx34,$17);
  $next5$i = ((($17)) + 4|0);
  store4($next5$i,$arrayidx34);
  $18 = load4($next$i15);
  store4($18,$arrayidx34);
  $lru_head$pre$phiZ2D = $lru_head$i;
 }
 $cmp41 = ($i|0)>($j|0);
 $j$i = $cmp41 ? $j : $i;
 $i$j = $cmp41 ? $i : $j;
 $next = ((($this)) + 16|0);
 $h$038 = load4($next);
 $cmp4539 = ($h$038|0)==($lru_head$pre$phiZ2D|0);
 if ($cmp4539) {
  return;
 }
 $size = ((($this)) + 4|0);
 $h$040 = $h$038;
 while(1) {
  $len46 = ((($h$040)) + 12|0);
  $19 = load4($len46);
  $cmp47 = ($19|0)>($j$i|0);
  do {
   if ($cmp47) {
    $cmp50 = ($19|0)>($i$j|0);
    if ($cmp50) {
     $data52 = ((($h$040)) + 8|0);
     $20 = load4($data52);
     $arrayidx53 = (($20) + ($j$i<<2)|0);
     $arrayidx55 = (($20) + ($i$j<<2)|0);
     $21 = load4($arrayidx53);
     $22 = load4($arrayidx55);
     store4($arrayidx53,$22);
     store4($arrayidx55,$21);
     break;
    } else {
     $next$i11 = ((($h$040)) + 4|0);
     $23 = load4($next$i11);
     $24 = load4($h$040);
     $next2$i13 = ((($24)) + 4|0);
     store4($next2$i13,$23);
     $25 = load4($next$i11);
     store4($25,$24);
     $data56 = ((($h$040)) + 8|0);
     $26 = load4($data56);
     _free($26);
     $27 = load4($len46);
     $28 = load4($size);
     $add = (($28) + ($27))|0;
     store4($size,$add);
     store4($data56,0);
     store4($len46,0);
     break;
    }
   }
  } while(0);
  $next62 = ((($h$040)) + 4|0);
  $h$0 = load4($next62);
  $cmp45 = ($h$0|0)==($lru_head$pre$phiZ2D|0);
  if ($cmp45) {
   break;
  } else {
   $h$040 = $h$0;
  }
 }
 return;
}
function __ZN6KernelC2EiPKP8svm_nodeRK13svm_parameter($this,$l,$x_,$param) {
 $this = $this|0;
 $l = $l|0;
 $x_ = $x_|0;
 $param = $param|0;
 var $$arith = 0, $$arith13 = 0, $$overflow = 0, $$overflow14 = 0, $$sink$index = 0, $$sink$index5 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0.0, $12 = 0.0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0.0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $add$i = 0.0, $arrayidx = 0, $arrayidx25 = 0, $call = 0, $call$i14 = 0, $cmp = 0, $cmp10$i = 0, $cmp15$i = 0, $cmp1520$i = 0, $cmp152027$i = 0, $cmp1727 = 0, $cmp2$i = 0, $cmp2$i24 = 0, $cmp5$i = 0, $coef0 = 0, $coef05 = 0, $degree = 0;
 var $degree3 = 0, $exitcond = 0, $gamma = 0, $gamma4 = 0, $i$028 = 0, $inc = 0, $incdec$ptr$i = 0, $incdec$ptr12$i = 0, $incdec$ptr14$i = 0, $incdec$ptr7$i = 0, $kernel_function14$repack = 0, $kernel_function14$repack11 = 0, $kernel_type = 0, $kernel_type2 = 0, $mul$i = 0.0, $mul$i13 = 0, $px$addr$0$ph$ph28$i = 0, $px$addr$0$ph21$i = 0, $py$addr$0$ph$ph29$i = 0, $py$addr$0$ph22$i = 0;
 var $py$addr$016$i25 = 0, $sum$0$ph$ph$lcssa$i = 0.0, $sum$0$ph$ph30$i = 0.0, $value$i = 0, $value6$i = 0, $x = 0, $x_square = 0, $x_square26 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1240));
 $kernel_type = ((($this)) + 20|0);
 $kernel_type2 = ((($param)) + 4|0);
 $0 = load4($kernel_type2);
 store4($kernel_type,$0);
 $degree = ((($this)) + 24|0);
 $degree3 = ((($param)) + 8|0);
 $1 = load4($degree3);
 store4($degree,$1);
 $gamma = ((($this)) + 32|0);
 $gamma4 = ((($param)) + 16|0);
 $2 = loadd($gamma4);
 stored($gamma,$2);
 $coef0 = ((($this)) + 40|0);
 $coef05 = ((($param)) + 24|0);
 $3 = loadd($coef05);
 stored($coef0,$3);
 switch ($0|0) {
 case 0:  {
  $$sink$index = (2);$$sink$index5 = 0;
  label = 6;
  break;
 }
 case 1:  {
  $$sink$index = (1);$$sink$index5 = 0;
  label = 6;
  break;
 }
 case 2:  {
  $$sink$index = (3);$$sink$index5 = 0;
  label = 6;
  break;
 }
 case 3:  {
  $$sink$index = (4);$$sink$index5 = 0;
  label = 6;
  break;
 }
 case 4:  {
  $$sink$index = (5);$$sink$index5 = 0;
  label = 6;
  break;
 }
 default: {
 }
 }
 if ((label|0) == 6) {
  $kernel_function14$repack = ((($this)) + 4|0);
  store4($kernel_function14$repack,$$sink$index);
  $kernel_function14$repack11 = ((($this)) + 8|0);
  store4($kernel_function14$repack11,$$sink$index5);
 }
 $x = ((($this)) + 12|0);
 $$arith13 = $l<<2;
 $$overflow14 = ($l>>>0)>(1073741823);
 $4 = $$overflow14 ? -1 : $$arith13;
 $call$i14 = (__Znaj($4)|0);
 store4($x,$call$i14);
 $mul$i13 = $l << 2;
 _memcpy(($call$i14|0),($x_|0),($mul$i13|0))|0;
 $cmp = ($0|0)==(2);
 if (!($cmp)) {
  $x_square26 = ((($this)) + 16|0);
  store4($x_square26,0);
  return;
 }
 $$arith = $l<<3;
 $$overflow = ($l>>>0)>(536870911);
 $5 = $$overflow ? -1 : $$arith;
 $call = (__Znaj($5)|0);
 $x_square = ((($this)) + 16|0);
 store4($x_square,$call);
 $cmp1727 = ($l|0)>(0);
 if ($cmp1727) {
  $i$028 = 0;
 } else {
  return;
 }
 while(1) {
  $arrayidx = (($call$i14) + ($i$028<<2)|0);
  $6 = load4($arrayidx);
  $7 = load4($6);
  $cmp152027$i = ($7|0)==(-1);
  L17: do {
   if ($cmp152027$i) {
    $sum$0$ph$ph$lcssa$i = 0.0;
   } else {
    $16 = $7;$px$addr$0$ph$ph28$i = $6;$py$addr$0$ph$ph29$i = $6;$sum$0$ph$ph30$i = 0.0;
    while(1) {
     $9 = $16;$px$addr$0$ph21$i = $px$addr$0$ph$ph28$i;$py$addr$0$ph22$i = $py$addr$0$ph$ph29$i;
     L20: while(1) {
      $8 = load4($py$addr$0$ph22$i);
      $cmp2$i24 = ($8|0)==(-1);
      if ($cmp2$i24) {
       $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
       break L17;
      } else {
       $10 = $8;$py$addr$016$i25 = $py$addr$0$ph22$i;
      }
      while(1) {
       $cmp5$i = ($9|0)==($10|0);
       if ($cmp5$i) {
        break L20;
       }
       $cmp10$i = ($9|0)>($10|0);
       if (!($cmp10$i)) {
        break;
       }
       $incdec$ptr12$i = ((($py$addr$016$i25)) + 16|0);
       $14 = load4($incdec$ptr12$i);
       $cmp2$i = ($14|0)==(-1);
       if ($cmp2$i) {
        $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
        break L17;
       } else {
        $10 = $14;$py$addr$016$i25 = $incdec$ptr12$i;
       }
      }
      $incdec$ptr14$i = ((($px$addr$0$ph21$i)) + 16|0);
      $15 = load4($incdec$ptr14$i);
      $cmp15$i = ($15|0)==(-1);
      if ($cmp15$i) {
       $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
       break L17;
      } else {
       $9 = $15;$px$addr$0$ph21$i = $incdec$ptr14$i;$py$addr$0$ph22$i = $py$addr$016$i25;
      }
     }
     $value$i = ((($px$addr$0$ph21$i)) + 8|0);
     $11 = loadd($value$i);
     $value6$i = ((($py$addr$016$i25)) + 8|0);
     $12 = loadd($value6$i);
     $mul$i = $11 * $12;
     $add$i = $sum$0$ph$ph30$i + $mul$i;
     $incdec$ptr$i = ((($px$addr$0$ph21$i)) + 16|0);
     $incdec$ptr7$i = ((($py$addr$016$i25)) + 16|0);
     $13 = load4($incdec$ptr$i);
     $cmp1520$i = ($13|0)==(-1);
     if ($cmp1520$i) {
      $sum$0$ph$ph$lcssa$i = $add$i;
      break;
     } else {
      $16 = $13;$px$addr$0$ph$ph28$i = $incdec$ptr$i;$py$addr$0$ph$ph29$i = $incdec$ptr7$i;$sum$0$ph$ph30$i = $add$i;
     }
    }
   }
  } while(0);
  $arrayidx25 = (($call) + ($i$028<<3)|0);
  stored($arrayidx25,$sum$0$ph$ph$lcssa$i);
  $inc = (($i$028) + 1)|0;
  $exitcond = ($inc|0)==($l|0);
  if ($exitcond) {
   break;
  } else {
   $i$028 = $inc;
  }
 }
 return;
}
function __ZNK6Kernel18kernel_precomputedEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0.0, $4 = 0.0, $arrayidx = 0, $arrayidx3 = 0, $conv = 0, $value = 0, $value6 = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $x = ((($this)) + 12|0);
 $0 = load4($x);
 $arrayidx = (($0) + ($i<<2)|0);
 $1 = load4($arrayidx);
 $arrayidx3 = (($0) + ($j<<2)|0);
 $2 = load4($arrayidx3);
 $value = ((($2)) + 8|0);
 $3 = loadd($value);
 $conv = (~~(($3)));
 $value6 = (((($1) + ($conv<<4)|0)) + 8|0);
 $4 = loadd($value6);
 return (+$4);
}
function __ZNK6Kernel14kernel_sigmoidEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0.0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0.0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $add = 0.0, $add$i = 0.0, $arrayidx = 0, $arrayidx3 = 0, $call4 = 0.0;
 var $cmp10$i = 0, $cmp15$i = 0, $cmp1520$i = 0, $cmp152027$i = 0, $cmp2$i = 0, $cmp2$i10 = 0, $cmp5$i = 0, $coef0 = 0, $gamma = 0, $incdec$ptr$i = 0, $incdec$ptr12$i = 0, $incdec$ptr14$i = 0, $incdec$ptr7$i = 0, $mul = 0.0, $mul$i = 0.0, $px$addr$0$ph$ph28$i = 0, $px$addr$0$ph21$i = 0, $py$addr$0$ph$ph29$i = 0, $py$addr$0$ph22$i = 0, $py$addr$016$i11 = 0;
 var $sum$0$ph$ph$lcssa$i = 0.0, $sum$0$ph$ph30$i = 0.0, $value$i = 0, $value6$i = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $gamma = ((($this)) + 32|0);
 $0 = loadd($gamma);
 $x = ((($this)) + 12|0);
 $1 = load4($x);
 $arrayidx = (($1) + ($i<<2)|0);
 $2 = load4($arrayidx);
 $3 = load4($2);
 $cmp152027$i = ($3|0)==(-1);
 L1: do {
  if ($cmp152027$i) {
   $sum$0$ph$ph$lcssa$i = 0.0;
  } else {
   $arrayidx3 = (($1) + ($j<<2)|0);
   $4 = load4($arrayidx3);
   $14 = $3;$px$addr$0$ph$ph28$i = $2;$py$addr$0$ph$ph29$i = $4;$sum$0$ph$ph30$i = 0.0;
   while(1) {
    $6 = $14;$px$addr$0$ph21$i = $px$addr$0$ph$ph28$i;$py$addr$0$ph22$i = $py$addr$0$ph$ph29$i;
    L5: while(1) {
     $5 = load4($py$addr$0$ph22$i);
     $cmp2$i10 = ($5|0)==(-1);
     if ($cmp2$i10) {
      $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
      break L1;
     } else {
      $7 = $5;$py$addr$016$i11 = $py$addr$0$ph22$i;
     }
     while(1) {
      $cmp5$i = ($6|0)==($7|0);
      if ($cmp5$i) {
       break L5;
      }
      $cmp10$i = ($6|0)>($7|0);
      if (!($cmp10$i)) {
       break;
      }
      $incdec$ptr12$i = ((($py$addr$016$i11)) + 16|0);
      $11 = load4($incdec$ptr12$i);
      $cmp2$i = ($11|0)==(-1);
      if ($cmp2$i) {
       $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
       break L1;
      } else {
       $7 = $11;$py$addr$016$i11 = $incdec$ptr12$i;
      }
     }
     $incdec$ptr14$i = ((($px$addr$0$ph21$i)) + 16|0);
     $12 = load4($incdec$ptr14$i);
     $cmp15$i = ($12|0)==(-1);
     if ($cmp15$i) {
      $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
      break L1;
     } else {
      $6 = $12;$px$addr$0$ph21$i = $incdec$ptr14$i;$py$addr$0$ph22$i = $py$addr$016$i11;
     }
    }
    $value$i = ((($px$addr$0$ph21$i)) + 8|0);
    $8 = loadd($value$i);
    $value6$i = ((($py$addr$016$i11)) + 8|0);
    $9 = loadd($value6$i);
    $mul$i = $8 * $9;
    $add$i = $sum$0$ph$ph30$i + $mul$i;
    $incdec$ptr$i = ((($px$addr$0$ph21$i)) + 16|0);
    $incdec$ptr7$i = ((($py$addr$016$i11)) + 16|0);
    $10 = load4($incdec$ptr$i);
    $cmp1520$i = ($10|0)==(-1);
    if ($cmp1520$i) {
     $sum$0$ph$ph$lcssa$i = $add$i;
     break;
    } else {
     $14 = $10;$px$addr$0$ph$ph28$i = $incdec$ptr$i;$py$addr$0$ph$ph29$i = $incdec$ptr7$i;$sum$0$ph$ph30$i = $add$i;
    }
   }
  }
 } while(0);
 $mul = $0 * $sum$0$ph$ph$lcssa$i;
 $coef0 = ((($this)) + 40|0);
 $13 = loadd($coef0);
 $add = $mul + $13;
 $call4 = (+_tanh($add));
 return (+$call4);
}
function __ZNK6Kernel10kernel_rbfEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0.0, $1 = 0, $10 = 0, $11 = 0.0, $12 = 0.0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $17 = 0, $2 = 0.0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0.0, $add$i = 0.0;
 var $arrayidx = 0, $arrayidx3 = 0, $arrayidx4 = 0, $arrayidx6 = 0, $call9 = 0.0, $cmp10$i = 0, $cmp15$i = 0, $cmp1520$i = 0, $cmp152027$i = 0, $cmp2$i = 0, $cmp2$i12 = 0, $cmp5$i = 0, $gamma = 0, $incdec$ptr$i = 0, $incdec$ptr12$i = 0, $incdec$ptr14$i = 0, $incdec$ptr7$i = 0, $mul = 0.0, $mul$i = 0.0, $mul8 = 0.0;
 var $px$addr$0$ph$ph28$i = 0, $px$addr$0$ph21$i = 0, $py$addr$0$ph$ph29$i = 0, $py$addr$0$ph22$i = 0, $py$addr$016$i13 = 0, $sub7 = 0.0, $sum$0$ph$ph$lcssa$i = 0.0, $sum$0$ph$ph30$i = 0.0, $value$i = 0, $value6$i = 0, $x = 0, $x_square = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $gamma = ((($this)) + 32|0);
 $0 = loadd($gamma);
 $x_square = ((($this)) + 16|0);
 $1 = load4($x_square);
 $arrayidx = (($1) + ($i<<3)|0);
 $2 = loadd($arrayidx);
 $arrayidx3 = (($1) + ($j<<3)|0);
 $3 = loadd($arrayidx3);
 $add = $2 + $3;
 $x = ((($this)) + 12|0);
 $4 = load4($x);
 $arrayidx4 = (($4) + ($i<<2)|0);
 $5 = load4($arrayidx4);
 $6 = load4($5);
 $cmp152027$i = ($6|0)==(-1);
 L1: do {
  if ($cmp152027$i) {
   $sum$0$ph$ph$lcssa$i = 0.0;
  } else {
   $arrayidx6 = (($4) + ($j<<2)|0);
   $7 = load4($arrayidx6);
   $17 = $6;$px$addr$0$ph$ph28$i = $5;$py$addr$0$ph$ph29$i = $7;$sum$0$ph$ph30$i = 0.0;
   while(1) {
    $9 = $17;$px$addr$0$ph21$i = $px$addr$0$ph$ph28$i;$py$addr$0$ph22$i = $py$addr$0$ph$ph29$i;
    L5: while(1) {
     $8 = load4($py$addr$0$ph22$i);
     $cmp2$i12 = ($8|0)==(-1);
     if ($cmp2$i12) {
      $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
      break L1;
     } else {
      $10 = $8;$py$addr$016$i13 = $py$addr$0$ph22$i;
     }
     while(1) {
      $cmp5$i = ($9|0)==($10|0);
      if ($cmp5$i) {
       break L5;
      }
      $cmp10$i = ($9|0)>($10|0);
      if (!($cmp10$i)) {
       break;
      }
      $incdec$ptr12$i = ((($py$addr$016$i13)) + 16|0);
      $14 = load4($incdec$ptr12$i);
      $cmp2$i = ($14|0)==(-1);
      if ($cmp2$i) {
       $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
       break L1;
      } else {
       $10 = $14;$py$addr$016$i13 = $incdec$ptr12$i;
      }
     }
     $incdec$ptr14$i = ((($px$addr$0$ph21$i)) + 16|0);
     $15 = load4($incdec$ptr14$i);
     $cmp15$i = ($15|0)==(-1);
     if ($cmp15$i) {
      $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
      break L1;
     } else {
      $9 = $15;$px$addr$0$ph21$i = $incdec$ptr14$i;$py$addr$0$ph22$i = $py$addr$016$i13;
     }
    }
    $value$i = ((($px$addr$0$ph21$i)) + 8|0);
    $11 = loadd($value$i);
    $value6$i = ((($py$addr$016$i13)) + 8|0);
    $12 = loadd($value6$i);
    $mul$i = $11 * $12;
    $add$i = $sum$0$ph$ph30$i + $mul$i;
    $incdec$ptr$i = ((($px$addr$0$ph21$i)) + 16|0);
    $incdec$ptr7$i = ((($py$addr$016$i13)) + 16|0);
    $13 = load4($incdec$ptr$i);
    $cmp1520$i = ($13|0)==(-1);
    if ($cmp1520$i) {
     $sum$0$ph$ph$lcssa$i = $add$i;
     break;
    } else {
     $17 = $13;$px$addr$0$ph$ph28$i = $incdec$ptr$i;$py$addr$0$ph$ph29$i = $incdec$ptr7$i;$sum$0$ph$ph30$i = $add$i;
    }
   }
  }
 } while(0);
 $mul = $sum$0$ph$ph$lcssa$i * 2.0;
 $sub7 = $add - $mul;
 $16 = $0 * $sub7;
 $mul8 = -$16;
 $call9 = (+_exp($mul8));
 return (+$call9);
}
function __ZNK6Kernel13kernel_linearEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0, $add$i = 0.0, $arrayidx = 0, $arrayidx3 = 0, $cmp10$i = 0, $cmp15$i = 0, $cmp1520$i = 0, $cmp152027$i = 0;
 var $cmp2$i = 0, $cmp2$i10 = 0, $cmp5$i = 0, $incdec$ptr$i = 0, $incdec$ptr12$i = 0, $incdec$ptr14$i = 0, $incdec$ptr7$i = 0, $mul$i = 0.0, $px$addr$0$ph$ph28$i = 0, $px$addr$0$ph21$i = 0, $py$addr$0$ph$ph29$i = 0, $py$addr$0$ph22$i = 0, $py$addr$016$i11 = 0, $sum$0$ph$ph$lcssa$i = 0.0, $sum$0$ph$ph30$i = 0.0, $value$i = 0, $value6$i = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $x = ((($this)) + 12|0);
 $0 = load4($x);
 $arrayidx = (($0) + ($i<<2)|0);
 $1 = load4($arrayidx);
 $2 = load4($1);
 $cmp152027$i = ($2|0)==(-1);
 if ($cmp152027$i) {
  $sum$0$ph$ph$lcssa$i = 0.0;
  return (+$sum$0$ph$ph$lcssa$i);
 }
 $arrayidx3 = (($0) + ($j<<2)|0);
 $3 = load4($arrayidx3);
 $12 = $2;$px$addr$0$ph$ph28$i = $1;$py$addr$0$ph$ph29$i = $3;$sum$0$ph$ph30$i = 0.0;
 L4: while(1) {
  $5 = $12;$px$addr$0$ph21$i = $px$addr$0$ph$ph28$i;$py$addr$0$ph22$i = $py$addr$0$ph$ph29$i;
  L6: while(1) {
   $4 = load4($py$addr$0$ph22$i);
   $cmp2$i10 = ($4|0)==(-1);
   if ($cmp2$i10) {
    $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
    label = 10;
    break L4;
   } else {
    $6 = $4;$py$addr$016$i11 = $py$addr$0$ph22$i;
   }
   while(1) {
    $cmp5$i = ($5|0)==($6|0);
    if ($cmp5$i) {
     break L6;
    }
    $cmp10$i = ($5|0)>($6|0);
    if (!($cmp10$i)) {
     break;
    }
    $incdec$ptr12$i = ((($py$addr$016$i11)) + 16|0);
    $10 = load4($incdec$ptr12$i);
    $cmp2$i = ($10|0)==(-1);
    if ($cmp2$i) {
     $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
     label = 10;
     break L4;
    } else {
     $6 = $10;$py$addr$016$i11 = $incdec$ptr12$i;
    }
   }
   $incdec$ptr14$i = ((($px$addr$0$ph21$i)) + 16|0);
   $11 = load4($incdec$ptr14$i);
   $cmp15$i = ($11|0)==(-1);
   if ($cmp15$i) {
    $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
    label = 10;
    break L4;
   } else {
    $5 = $11;$px$addr$0$ph21$i = $incdec$ptr14$i;$py$addr$0$ph22$i = $py$addr$016$i11;
   }
  }
  $value$i = ((($px$addr$0$ph21$i)) + 8|0);
  $7 = loadd($value$i);
  $value6$i = ((($py$addr$016$i11)) + 8|0);
  $8 = loadd($value6$i);
  $mul$i = $7 * $8;
  $add$i = $sum$0$ph$ph30$i + $mul$i;
  $incdec$ptr$i = ((($px$addr$0$ph21$i)) + 16|0);
  $incdec$ptr7$i = ((($py$addr$016$i11)) + 16|0);
  $9 = load4($incdec$ptr$i);
  $cmp1520$i = ($9|0)==(-1);
  if ($cmp1520$i) {
   $sum$0$ph$ph$lcssa$i = $add$i;
   label = 10;
   break;
  } else {
   $12 = $9;$px$addr$0$ph$ph28$i = $incdec$ptr$i;$py$addr$0$ph$ph29$i = $incdec$ptr7$i;$sum$0$ph$ph30$i = $add$i;
  }
 }
 if ((label|0) == 10) {
  return (+$sum$0$ph$ph$lcssa$i);
 }
 return +(0.0);
}
function __ZNK6Kernel11kernel_polyEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0.0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $add = 0.0, $add$i = 0.0, $arrayidx = 0, $arrayidx3 = 0;
 var $cmp$i = 0, $cmp10$i = 0, $cmp11$i = 0, $cmp15$i = 0, $cmp1520$i = 0, $cmp152027$i = 0, $cmp2$i = 0, $cmp2$i11 = 0, $cmp3$i = 0, $cmp5$i = 0, $coef0 = 0, $degree = 0, $div10$i = 0, $gamma = 0, $incdec$ptr$i = 0, $incdec$ptr12$i = 0, $incdec$ptr14$i = 0, $incdec$ptr7$i = 0, $mul = 0.0, $mul$i = 0.0;
 var $mul$i1 = 0.0, $mul$ret$0$i = 0.0, $mul4$i = 0.0, $px$addr$0$ph$ph28$i = 0, $px$addr$0$ph21$i = 0, $py$addr$0$ph$ph29$i = 0, $py$addr$0$ph22$i = 0, $py$addr$016$i12 = 0, $rem9$i = 0, $ret$0$lcssa$i = 0.0, $ret$013$i = 0.0, $sum$0$ph$ph$lcssa$i = 0.0, $sum$0$ph$ph30$i = 0.0, $t$014$i = 0, $tmp$012$i = 0.0, $value$i = 0, $value6$i = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $gamma = ((($this)) + 32|0);
 $0 = loadd($gamma);
 $x = ((($this)) + 12|0);
 $1 = load4($x);
 $arrayidx = (($1) + ($i<<2)|0);
 $2 = load4($arrayidx);
 $3 = load4($2);
 $cmp152027$i = ($3|0)==(-1);
 L1: do {
  if ($cmp152027$i) {
   $sum$0$ph$ph$lcssa$i = 0.0;
  } else {
   $arrayidx3 = (($1) + ($j<<2)|0);
   $4 = load4($arrayidx3);
   $15 = $3;$px$addr$0$ph$ph28$i = $2;$py$addr$0$ph$ph29$i = $4;$sum$0$ph$ph30$i = 0.0;
   while(1) {
    $6 = $15;$px$addr$0$ph21$i = $px$addr$0$ph$ph28$i;$py$addr$0$ph22$i = $py$addr$0$ph$ph29$i;
    L5: while(1) {
     $5 = load4($py$addr$0$ph22$i);
     $cmp2$i11 = ($5|0)==(-1);
     if ($cmp2$i11) {
      $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
      break L1;
     } else {
      $7 = $5;$py$addr$016$i12 = $py$addr$0$ph22$i;
     }
     while(1) {
      $cmp5$i = ($6|0)==($7|0);
      if ($cmp5$i) {
       break L5;
      }
      $cmp10$i = ($6|0)>($7|0);
      if (!($cmp10$i)) {
       break;
      }
      $incdec$ptr12$i = ((($py$addr$016$i12)) + 16|0);
      $11 = load4($incdec$ptr12$i);
      $cmp2$i = ($11|0)==(-1);
      if ($cmp2$i) {
       $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
       break L1;
      } else {
       $7 = $11;$py$addr$016$i12 = $incdec$ptr12$i;
      }
     }
     $incdec$ptr14$i = ((($px$addr$0$ph21$i)) + 16|0);
     $12 = load4($incdec$ptr14$i);
     $cmp15$i = ($12|0)==(-1);
     if ($cmp15$i) {
      $sum$0$ph$ph$lcssa$i = $sum$0$ph$ph30$i;
      break L1;
     } else {
      $6 = $12;$px$addr$0$ph21$i = $incdec$ptr14$i;$py$addr$0$ph22$i = $py$addr$016$i12;
     }
    }
    $value$i = ((($px$addr$0$ph21$i)) + 8|0);
    $8 = loadd($value$i);
    $value6$i = ((($py$addr$016$i12)) + 8|0);
    $9 = loadd($value6$i);
    $mul$i = $8 * $9;
    $add$i = $sum$0$ph$ph30$i + $mul$i;
    $incdec$ptr$i = ((($px$addr$0$ph21$i)) + 16|0);
    $incdec$ptr7$i = ((($py$addr$016$i12)) + 16|0);
    $10 = load4($incdec$ptr$i);
    $cmp1520$i = ($10|0)==(-1);
    if ($cmp1520$i) {
     $sum$0$ph$ph$lcssa$i = $add$i;
     break;
    } else {
     $15 = $10;$px$addr$0$ph$ph28$i = $incdec$ptr$i;$py$addr$0$ph$ph29$i = $incdec$ptr7$i;$sum$0$ph$ph30$i = $add$i;
    }
   }
  }
 } while(0);
 $degree = ((($this)) + 24|0);
 $13 = load4($degree);
 $cmp11$i = ($13|0)>(0);
 if (!($cmp11$i)) {
  $ret$0$lcssa$i = 1.0;
  return (+$ret$0$lcssa$i);
 }
 $mul = $0 * $sum$0$ph$ph$lcssa$i;
 $coef0 = ((($this)) + 40|0);
 $14 = loadd($coef0);
 $add = $mul + $14;
 $ret$013$i = 1.0;$t$014$i = $13;$tmp$012$i = $add;
 while(1) {
  $rem9$i = $t$014$i & 1;
  $cmp3$i = ($rem9$i|0)!=(0);
  $mul$i1 = $ret$013$i * $tmp$012$i;
  $mul$ret$0$i = $cmp3$i ? $mul$i1 : $ret$013$i;
  $mul4$i = $tmp$012$i * $tmp$012$i;
  $div10$i = $t$014$i >>> 1;
  $cmp$i = ($div10$i|0)==(0);
  if ($cmp$i) {
   $ret$0$lcssa$i = $mul$ret$0$i;
   break;
  } else {
   $ret$013$i = $mul$ret$0$i;$t$014$i = $div10$i;$tmp$012$i = $mul4$i;
  }
 }
 return (+$ret$0$lcssa$i);
}
function __ZN6Kernel10k_functionEPK8svm_nodeS2_RK13svm_parameter($x,$y,$param) {
 $x = $x|0;
 $y = $y|0;
 $param = $param|0;
 var $$pre$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $17 = 0.0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0.0, $23 = 0, $24 = 0, $25 = 0.0;
 var $26 = 0.0, $27 = 0, $28 = 0.0, $29 = 0.0, $3 = 0, $30 = 0, $31 = 0, $32 = 0.0, $33 = 0, $34 = 0.0, $35 = 0, $36 = 0.0, $37 = 0.0, $38 = 0.0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0.0;
 var $44 = 0.0, $45 = 0, $46 = 0, $47 = 0, $48 = 0.0, $49 = 0.0, $5 = 0, $50 = 0.0, $51 = 0, $52 = 0, $53 = 0, $6 = 0.0, $7 = 0.0, $8 = 0, $9 = 0, $add = 0.0, $add$i = 0.0, $add$i63 = 0.0, $add$i98 = 0.0, $add27 = 0.0;
 var $add37 = 0.0, $add47 = 0.0, $add59 = 0.0, $call53 = 0.0, $call60 = 0.0, $cmp = 0, $cmp$i = 0, $cmp10$i = 0, $cmp10$i104 = 0, $cmp10$i69 = 0, $cmp11$i = 0, $cmp15$i = 0, $cmp15$i110 = 0, $cmp15$i75 = 0, $cmp1520$i = 0, $cmp1520$i102 = 0, $cmp1520$i67 = 0, $cmp152027$i = 0, $cmp152027$i46 = 0, $cmp152027$i81 = 0;
 var $cmp16 = 0, $cmp163 = 0, $cmp163176 = 0, $cmp2$i = 0, $cmp2$i144 = 0, $cmp2$i56 = 0, $cmp2$i56186 = 0, $cmp2$i91 = 0, $cmp2$i91148 = 0, $cmp3$i = 0, $cmp32 = 0, $cmp42 = 0, $cmp42153 = 0, $cmp5$i = 0, $cmp5$i58 = 0, $cmp5$i93 = 0, $cmp6 = 0, $cmp9 = 0, $coef0 = 0, $coef058 = 0;
 var $conv = 0, $degree = 0, $div10$i = 0, $gamma = 0, $gamma50 = 0, $gamma55 = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i64 = 0, $incdec$ptr$i99 = 0, $incdec$ptr12$i = 0, $incdec$ptr12$i106 = 0, $incdec$ptr12$i71 = 0, $incdec$ptr13 = 0, $incdec$ptr14$i = 0, $incdec$ptr14$i108 = 0, $incdec$ptr14$i73 = 0, $incdec$ptr28 = 0, $incdec$ptr38 = 0, $incdec$ptr48 = 0;
 var $incdec$ptr7$i = 0, $incdec$ptr7$i100 = 0, $incdec$ptr7$i65 = 0, $kernel_type = 0, $mul = 0.0, $mul$i = 0.0, $mul$i62 = 0.0, $mul$i79 = 0.0, $mul$i97 = 0.0, $mul$ret$0$i = 0.0, $mul11 = 0.0, $mul20 = 0.0, $mul20$pn = 0.0, $mul26 = 0.0, $mul36 = 0.0, $mul4$i = 0.0, $mul46 = 0.0, $mul52 = 0.0, $mul57 = 0.0, $px$addr$0$ph$ph28$i = 0;
 var $px$addr$0$ph$ph28$i49 = 0, $px$addr$0$ph$ph28$i84 = 0, $px$addr$0$ph21$i = 0, $px$addr$0$ph21$i52 = 0, $px$addr$0$ph21$i87 = 0, $py$addr$0$ph$ph29$i = 0, $py$addr$0$ph$ph29$i48 = 0, $py$addr$0$ph$ph29$i83 = 0, $py$addr$0$ph22$i = 0, $py$addr$0$ph22$i51 = 0, $py$addr$0$ph22$i86 = 0, $py$addr$016$i145 = 0, $py$addr$016$i54187 = 0, $py$addr$016$i89149 = 0, $rem9$i = 0, $ret$013$i = 0.0, $retval$0 = 0.0, $sub = 0.0, $sum$0$ph$be = 0.0, $sum$0$ph$ph$lcssa$i112 = 0.0;
 var $sum$0$ph$ph$lcssa$i77 = 0.0, $sum$0$ph$ph30$i = 0.0, $sum$0$ph$ph30$i47 = 0.0, $sum$0$ph$ph30$i82 = 0.0, $sum$0$ph181 = 0.0, $sum$0165 = 0.0, $sum$1$lcssa = 0.0, $sum$1160 = 0.0, $sum$2$lcssa = 0.0, $sum$2155 = 0.0, $t$014$i = 0, $tmp$012$i = 0.0, $value = 0, $value$i = 0, $value$i60 = 0, $value$i95 = 0, $value10 = 0, $value18 = 0, $value24 = 0, $value34 = 0;
 var $value44 = 0, $value6$i = 0, $value6$i61 = 0, $value6$i96 = 0, $value62 = 0, $value63 = 0, $x$addr$0$ph$be = 0, $x$addr$0$ph180 = 0, $x$addr$0164 = 0, $x$addr$1159 = 0, $y$addr$0$ph$lcssa224 = 0, $y$addr$0$ph177 = 0, $y$addr$1154 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $kernel_type = ((($param)) + 4|0);
 $0 = load4($kernel_type);
 switch ($0|0) {
 case 0:  {
  $2 = load4($x);
  $cmp152027$i = ($2|0)==(-1);
  if ($cmp152027$i) {
   $retval$0 = 0.0;
   return (+$retval$0);
  } else {
   $51 = $2;$px$addr$0$ph$ph28$i = $x;$py$addr$0$ph$ph29$i = $y;$sum$0$ph$ph30$i = 0.0;
  }
  L5: while(1) {
   $4 = $51;$px$addr$0$ph21$i = $px$addr$0$ph$ph28$i;$py$addr$0$ph22$i = $py$addr$0$ph$ph29$i;
   L7: while(1) {
    $3 = load4($py$addr$0$ph22$i);
    $cmp2$i144 = ($3|0)==(-1);
    if ($cmp2$i144) {
     $retval$0 = $sum$0$ph$ph30$i;
     label = 43;
     break L5;
    } else {
     $5 = $3;$py$addr$016$i145 = $py$addr$0$ph22$i;
    }
    while(1) {
     $cmp5$i = ($4|0)==($5|0);
     if ($cmp5$i) {
      break L7;
     }
     $cmp10$i = ($4|0)>($5|0);
     if (!($cmp10$i)) {
      break;
     }
     $incdec$ptr12$i = ((($py$addr$016$i145)) + 16|0);
     $9 = load4($incdec$ptr12$i);
     $cmp2$i = ($9|0)==(-1);
     if ($cmp2$i) {
      $retval$0 = $sum$0$ph$ph30$i;
      label = 43;
      break L5;
     } else {
      $5 = $9;$py$addr$016$i145 = $incdec$ptr12$i;
     }
    }
    $incdec$ptr14$i = ((($px$addr$0$ph21$i)) + 16|0);
    $10 = load4($incdec$ptr14$i);
    $cmp15$i = ($10|0)==(-1);
    if ($cmp15$i) {
     $retval$0 = $sum$0$ph$ph30$i;
     label = 43;
     break L5;
    } else {
     $4 = $10;$px$addr$0$ph21$i = $incdec$ptr14$i;$py$addr$0$ph22$i = $py$addr$016$i145;
    }
   }
   $value$i = ((($px$addr$0$ph21$i)) + 8|0);
   $6 = loadd($value$i);
   $value6$i = ((($py$addr$016$i145)) + 8|0);
   $7 = loadd($value6$i);
   $mul$i = $6 * $7;
   $add$i = $sum$0$ph$ph30$i + $mul$i;
   $incdec$ptr$i = ((($px$addr$0$ph21$i)) + 16|0);
   $incdec$ptr7$i = ((($py$addr$016$i145)) + 16|0);
   $8 = load4($incdec$ptr$i);
   $cmp1520$i = ($8|0)==(-1);
   if ($cmp1520$i) {
    $retval$0 = $add$i;
    label = 43;
    break;
   } else {
    $51 = $8;$px$addr$0$ph$ph28$i = $incdec$ptr$i;$py$addr$0$ph$ph29$i = $incdec$ptr7$i;$sum$0$ph$ph30$i = $add$i;
   }
  }
  if ((label|0) == 43) {
   return (+$retval$0);
  }
  break;
 }
 case 1:  {
  $gamma = ((($param)) + 16|0);
  $11 = loadd($gamma);
  $12 = load4($x);
  $cmp152027$i81 = ($12|0)==(-1);
  L21: do {
   if ($cmp152027$i81) {
    $sum$0$ph$ph$lcssa$i112 = 0.0;
   } else {
    $52 = $12;$px$addr$0$ph$ph28$i84 = $x;$py$addr$0$ph$ph29$i83 = $y;$sum$0$ph$ph30$i82 = 0.0;
    while(1) {
     $14 = $52;$px$addr$0$ph21$i87 = $px$addr$0$ph$ph28$i84;$py$addr$0$ph22$i86 = $py$addr$0$ph$ph29$i83;
     L24: while(1) {
      $13 = load4($py$addr$0$ph22$i86);
      $cmp2$i91148 = ($13|0)==(-1);
      if ($cmp2$i91148) {
       $sum$0$ph$ph$lcssa$i112 = $sum$0$ph$ph30$i82;
       break L21;
      } else {
       $15 = $13;$py$addr$016$i89149 = $py$addr$0$ph22$i86;
      }
      while(1) {
       $cmp5$i93 = ($14|0)==($15|0);
       if ($cmp5$i93) {
        break L24;
       }
       $cmp10$i104 = ($14|0)>($15|0);
       if (!($cmp10$i104)) {
        break;
       }
       $incdec$ptr12$i106 = ((($py$addr$016$i89149)) + 16|0);
       $19 = load4($incdec$ptr12$i106);
       $cmp2$i91 = ($19|0)==(-1);
       if ($cmp2$i91) {
        $sum$0$ph$ph$lcssa$i112 = $sum$0$ph$ph30$i82;
        break L21;
       } else {
        $15 = $19;$py$addr$016$i89149 = $incdec$ptr12$i106;
       }
      }
      $incdec$ptr14$i108 = ((($px$addr$0$ph21$i87)) + 16|0);
      $20 = load4($incdec$ptr14$i108);
      $cmp15$i110 = ($20|0)==(-1);
      if ($cmp15$i110) {
       $sum$0$ph$ph$lcssa$i112 = $sum$0$ph$ph30$i82;
       break L21;
      } else {
       $14 = $20;$px$addr$0$ph21$i87 = $incdec$ptr14$i108;$py$addr$0$ph22$i86 = $py$addr$016$i89149;
      }
     }
     $value$i95 = ((($px$addr$0$ph21$i87)) + 8|0);
     $16 = loadd($value$i95);
     $value6$i96 = ((($py$addr$016$i89149)) + 8|0);
     $17 = loadd($value6$i96);
     $mul$i97 = $16 * $17;
     $add$i98 = $sum$0$ph$ph30$i82 + $mul$i97;
     $incdec$ptr$i99 = ((($px$addr$0$ph21$i87)) + 16|0);
     $incdec$ptr7$i100 = ((($py$addr$016$i89149)) + 16|0);
     $18 = load4($incdec$ptr$i99);
     $cmp1520$i102 = ($18|0)==(-1);
     if ($cmp1520$i102) {
      $sum$0$ph$ph$lcssa$i112 = $add$i98;
      break;
     } else {
      $52 = $18;$px$addr$0$ph$ph28$i84 = $incdec$ptr$i99;$py$addr$0$ph$ph29$i83 = $incdec$ptr7$i100;$sum$0$ph$ph30$i82 = $add$i98;
     }
    }
   }
  } while(0);
  $degree = ((($param)) + 8|0);
  $21 = load4($degree);
  $cmp11$i = ($21|0)>(0);
  if (!($cmp11$i)) {
   $retval$0 = 1.0;
   return (+$retval$0);
  }
  $mul = $11 * $sum$0$ph$ph$lcssa$i112;
  $coef0 = ((($param)) + 24|0);
  $22 = loadd($coef0);
  $add = $mul + $22;
  $ret$013$i = 1.0;$t$014$i = $21;$tmp$012$i = $add;
  while(1) {
   $rem9$i = $t$014$i & 1;
   $cmp3$i = ($rem9$i|0)!=(0);
   $mul$i79 = $ret$013$i * $tmp$012$i;
   $mul$ret$0$i = $cmp3$i ? $mul$i79 : $ret$013$i;
   $mul4$i = $tmp$012$i * $tmp$012$i;
   $div10$i = $t$014$i >>> 1;
   $cmp$i = ($div10$i|0)==(0);
   if ($cmp$i) {
    $retval$0 = $mul$ret$0$i;
    break;
   } else {
    $ret$013$i = $mul$ret$0$i;$t$014$i = $div10$i;$tmp$012$i = $mul4$i;
   }
  }
  return (+$retval$0);
  break;
 }
 case 2:  {
  $1 = load4($x);
  $cmp163176 = ($1|0)==(-1);
  L40: do {
   if ($cmp163176) {
    $sum$1$lcssa = 0.0;$y$addr$0$ph$lcssa224 = $y;
   } else {
    $$pre$pre = $1;$sum$0$ph181 = 0.0;$x$addr$0$ph180 = $x;$y$addr$0$ph177 = $y;
    while(1) {
     $24 = load4($y$addr$0$ph177);
     $cmp6 = ($24|0)==(-1);
     if ($cmp6) {
      $sum$1160 = $sum$0$ph181;$x$addr$1159 = $x$addr$0$ph180;
      break;
     } else {
      $23 = $$pre$pre;$sum$0165 = $sum$0$ph181;$x$addr$0164 = $x$addr$0$ph180;
     }
     while(1) {
      $cmp9 = ($23|0)==($24|0);
      if ($cmp9) {
       label = 23;
       break;
      }
      $cmp16 = ($23|0)>($24|0);
      if ($cmp16) {
       label = 27;
       break;
      }
      $value24 = ((($x$addr$0164)) + 8|0);
      $29 = loadd($value24);
      $mul26 = $29 * $29;
      $add27 = $sum$0165 + $mul26;
      $incdec$ptr28 = ((($x$addr$0164)) + 16|0);
      $30 = load4($incdec$ptr28);
      $cmp = ($30|0)==(-1);
      if ($cmp) {
       $sum$1$lcssa = $add27;$y$addr$0$ph$lcssa224 = $y$addr$0$ph177;
       break L40;
      } else {
       $23 = $30;$sum$0165 = $add27;$x$addr$0164 = $incdec$ptr28;
      }
     }
     if ((label|0) == 23) {
      label = 0;
      $value = ((($x$addr$0164)) + 8|0);
      $25 = loadd($value);
      $value10 = ((($y$addr$0$ph177)) + 8|0);
      $26 = loadd($value10);
      $sub = $25 - $26;
      $mul11 = $sub * $sub;
      $incdec$ptr = ((($x$addr$0164)) + 16|0);
      $mul20$pn = $mul11;$x$addr$0$ph$be = $incdec$ptr;
     }
     else if ((label|0) == 27) {
      label = 0;
      $value18 = ((($y$addr$0$ph177)) + 8|0);
      $28 = loadd($value18);
      $mul20 = $28 * $28;
      $mul20$pn = $mul20;$x$addr$0$ph$be = $x$addr$0164;
     }
     $sum$0$ph$be = $sum$0165 + $mul20$pn;
     $incdec$ptr13 = ((($y$addr$0$ph177)) + 16|0);
     $27 = load4($x$addr$0$ph$be);
     $cmp163 = ($27|0)==(-1);
     if ($cmp163) {
      $sum$1$lcssa = $sum$0$ph$be;$y$addr$0$ph$lcssa224 = $incdec$ptr13;
      break L40;
     } else {
      $$pre$pre = $27;$sum$0$ph181 = $sum$0$ph$be;$x$addr$0$ph180 = $x$addr$0$ph$be;$y$addr$0$ph177 = $incdec$ptr13;
     }
    }
    while(1) {
     $value34 = ((($x$addr$1159)) + 8|0);
     $32 = loadd($value34);
     $mul36 = $32 * $32;
     $add37 = $sum$1160 + $mul36;
     $incdec$ptr38 = ((($x$addr$1159)) + 16|0);
     $33 = load4($incdec$ptr38);
     $cmp32 = ($33|0)==(-1);
     if ($cmp32) {
      $sum$1$lcssa = $add37;$y$addr$0$ph$lcssa224 = $y$addr$0$ph177;
      break;
     } else {
      $sum$1160 = $add37;$x$addr$1159 = $incdec$ptr38;
     }
    }
   }
  } while(0);
  $31 = load4($y$addr$0$ph$lcssa224);
  $cmp42153 = ($31|0)==(-1);
  if ($cmp42153) {
   $sum$2$lcssa = $sum$1$lcssa;
  } else {
   $sum$2155 = $sum$1$lcssa;$y$addr$1154 = $y$addr$0$ph$lcssa224;
   while(1) {
    $value44 = ((($y$addr$1154)) + 8|0);
    $34 = loadd($value44);
    $mul46 = $34 * $34;
    $add47 = $sum$2155 + $mul46;
    $incdec$ptr48 = ((($y$addr$1154)) + 16|0);
    $35 = load4($incdec$ptr48);
    $cmp42 = ($35|0)==(-1);
    if ($cmp42) {
     $sum$2$lcssa = $add47;
     break;
    } else {
     $sum$2155 = $add47;$y$addr$1154 = $incdec$ptr48;
    }
   }
  }
  $gamma50 = ((($param)) + 16|0);
  $36 = loadd($gamma50);
  $37 = $sum$2$lcssa * $36;
  $mul52 = -$37;
  $call53 = (+_exp($mul52));
  $retval$0 = $call53;
  return (+$retval$0);
  break;
 }
 case 3:  {
  $gamma55 = ((($param)) + 16|0);
  $38 = loadd($gamma55);
  $39 = load4($x);
  $cmp152027$i46 = ($39|0)==(-1);
  L60: do {
   if ($cmp152027$i46) {
    $sum$0$ph$ph$lcssa$i77 = 0.0;
   } else {
    $53 = $39;$px$addr$0$ph$ph28$i49 = $x;$py$addr$0$ph$ph29$i48 = $y;$sum$0$ph$ph30$i47 = 0.0;
    while(1) {
     $41 = $53;$px$addr$0$ph21$i52 = $px$addr$0$ph$ph28$i49;$py$addr$0$ph22$i51 = $py$addr$0$ph$ph29$i48;
     L63: while(1) {
      $40 = load4($py$addr$0$ph22$i51);
      $cmp2$i56186 = ($40|0)==(-1);
      if ($cmp2$i56186) {
       $sum$0$ph$ph$lcssa$i77 = $sum$0$ph$ph30$i47;
       break L60;
      } else {
       $42 = $40;$py$addr$016$i54187 = $py$addr$0$ph22$i51;
      }
      while(1) {
       $cmp5$i58 = ($41|0)==($42|0);
       if ($cmp5$i58) {
        break L63;
       }
       $cmp10$i69 = ($41|0)>($42|0);
       if (!($cmp10$i69)) {
        break;
       }
       $incdec$ptr12$i71 = ((($py$addr$016$i54187)) + 16|0);
       $46 = load4($incdec$ptr12$i71);
       $cmp2$i56 = ($46|0)==(-1);
       if ($cmp2$i56) {
        $sum$0$ph$ph$lcssa$i77 = $sum$0$ph$ph30$i47;
        break L60;
       } else {
        $42 = $46;$py$addr$016$i54187 = $incdec$ptr12$i71;
       }
      }
      $incdec$ptr14$i73 = ((($px$addr$0$ph21$i52)) + 16|0);
      $47 = load4($incdec$ptr14$i73);
      $cmp15$i75 = ($47|0)==(-1);
      if ($cmp15$i75) {
       $sum$0$ph$ph$lcssa$i77 = $sum$0$ph$ph30$i47;
       break L60;
      } else {
       $41 = $47;$px$addr$0$ph21$i52 = $incdec$ptr14$i73;$py$addr$0$ph22$i51 = $py$addr$016$i54187;
      }
     }
     $value$i60 = ((($px$addr$0$ph21$i52)) + 8|0);
     $43 = loadd($value$i60);
     $value6$i61 = ((($py$addr$016$i54187)) + 8|0);
     $44 = loadd($value6$i61);
     $mul$i62 = $43 * $44;
     $add$i63 = $sum$0$ph$ph30$i47 + $mul$i62;
     $incdec$ptr$i64 = ((($px$addr$0$ph21$i52)) + 16|0);
     $incdec$ptr7$i65 = ((($py$addr$016$i54187)) + 16|0);
     $45 = load4($incdec$ptr$i64);
     $cmp1520$i67 = ($45|0)==(-1);
     if ($cmp1520$i67) {
      $sum$0$ph$ph$lcssa$i77 = $add$i63;
      break;
     } else {
      $53 = $45;$px$addr$0$ph$ph28$i49 = $incdec$ptr$i64;$py$addr$0$ph$ph29$i48 = $incdec$ptr7$i65;$sum$0$ph$ph30$i47 = $add$i63;
     }
    }
   }
  } while(0);
  $mul57 = $38 * $sum$0$ph$ph$lcssa$i77;
  $coef058 = ((($param)) + 24|0);
  $48 = loadd($coef058);
  $add59 = $mul57 + $48;
  $call60 = (+_tanh($add59));
  $retval$0 = $call60;
  return (+$retval$0);
  break;
 }
 case 4:  {
  $value62 = ((($y)) + 8|0);
  $49 = loadd($value62);
  $conv = (~~(($49)));
  $value63 = (((($x) + ($conv<<4)|0)) + 8|0);
  $50 = loadd($value63);
  $retval$0 = $50;
  return (+$retval$0);
  break;
 }
 default: {
  $retval$0 = 0.0;
  return (+$retval$0);
 }
 }
 return +(0.0);
}
function __ZN6Solver5SolveEiRK7QMatrixPKdPKaPddddPNS_12SolutionInfoEi($this,$l,$Q,$p_,$y_,$alpha_,$Cp,$Cn,$eps,$si,$shrinking) {
 $this = $this|0;
 $l = $l|0;
 $Q = $Q|0;
 $p_ = $p_|0;
 $y_ = $y_|0;
 $alpha_ = $alpha_|0;
 $Cp = +$Cp;
 $Cn = +$Cn;
 $eps = +$eps;
 $si = $si|0;
 $shrinking = $shrinking|0;
 var $$arith = 0, $$arith8 = 0, $$overflow = 0, $$overflow9 = 0, $$pre = 0, $$pre283 = 0, $$pre284 = 0, $$pre285 = 0, $$pre286 = 0, $$pre287 = 0, $$pre288 = 0.0, $$sink$i = 0, $$sink$i197 = 0, $$sink$i209 = 0, $$sink$i300 = 0, $$sink5$i = 0, $$sink5$i198 = 0, $$sink5$i210 = 0, $$sink5$i301 = 0, $0 = 0;
 var $1 = 0, $10 = 0.0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = Math_fround(0), $107 = 0.0, $108 = Math_fround(0), $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0.0;
 var $117 = 0.0, $118 = 0.0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0.0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0.0;
 var $18 = 0, $19 = 0, $2 = 0, $20 = 0.0, $21 = Math_fround(0), $22 = 0.0, $23 = Math_fround(0), $24 = 0.0, $25 = 0, $26 = 0, $27 = 0.0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0.0, $40 = 0, $41 = 0.0, $42 = 0, $43 = 0, $44 = 0.0, $45 = 0, $46 = 0.0, $47 = 0.0, $48 = 0, $49 = Math_fround(0), $5 = 0, $50 = 0, $51 = 0, $52 = 0.0, $53 = 0;
 var $54 = 0.0, $55 = 0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0.0, $60 = 0.0, $61 = 0.0, $62 = 0, $63 = 0.0, $64 = 0.0, $65 = 0.0, $66 = 0.0, $67 = 0.0, $68 = 0.0, $69 = 0.0, $7 = 0, $70 = 0.0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0.0, $77 = 0.0, $78 = 0, $79 = 0, $8 = 0.0, $80 = 0.0, $81 = 0, $82 = 0, $83 = 0.0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = Math_fround(0), $9 = 0;
 var $90 = Math_fround(0), $91 = 0, $92 = 0.0, $93 = 0, $94 = 0, $95 = 0, $96 = Math_fround(0), $97 = 0.0, $98 = Math_fround(0), $99 = 0.0, $Cn$sink$i$i = 0, $Cn$sink$i$i194 = 0, $Cn$sink$i$i206 = 0, $Cn$sink$i$i297 = 0, $Cn$sink$i$us = 0, $Cn$sink$i222 = 0, $Cn$sink$i228 = 0, $Cn5 = 0, $Cp4 = 0, $G = 0;
 var $G_bar = 0, $Q3 = 0, $QD = 0, $active_set = 0, $active_size = 0, $add$us = 0.0, $add127 = 0.0, $add131 = 0.0, $add147 = 0.0, $add150 = 0.0, $add194 = 0.0, $add224 = 0.0, $add230 = 0.0, $add295 = 0.0, $add298 = 0.0, $add338 = 0.0, $add376 = 0.0, $add405 = 0.0, $add407 = 0.0, $add62$us = 0.0;
 var $add74 = 0, $alpha = 0, $alpha_status = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i$i190 = 0, $arrayidx$i169$us = 0, $arrayidx$i172$us = 0, $arrayidx$i174$us = 0, $arrayidx$i180 = 0, $arrayidx$i185 = 0, $arrayidx$i188 = 0, $arrayidx$i212 = 0, $arrayidx$i215 = 0, $arrayidx$i218 = 0, $arrayidx$i224 = 0, $arrayidx112 = 0, $arrayidx114 = 0, $arrayidx136 = 0;
 var $arrayidx138 = 0, $arrayidx215 = 0, $arrayidx217 = 0, $arrayidx25 = 0, $arrayidx27 = 0, $arrayidx289 = 0, $arrayidx29 = 0, $arrayidx292 = 0, $arrayidx297 = 0, $arrayidx320 = 0, $arrayidx324 = 0, $arrayidx333 = 0, $arrayidx337 = 0, $arrayidx358 = 0, $arrayidx362 = 0, $arrayidx371 = 0, $arrayidx375 = 0, $arrayidx400 = 0, $arrayidx402 = 0, $arrayidx404 = 0;
 var $arrayidx41$us = 0, $arrayidx418 = 0, $arrayidx420 = 0, $arrayidx421 = 0, $arrayidx45$us = 0, $arrayidx47$us = 0, $arrayidx57$us = 0, $arrayidx61$us = 0, $call = 0, $call$i = 0, $call$i166 = 0, $call$i167 = 0, $call104 = 0, $call108 = 0, $call18 = 0, $call19 = 0, $call314 = 0, $call352 = 0, $call39$us = 0, $call394 = 0.0;
 var $call7 = 0, $call8 = 0, $call88 = 0, $call94 = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i191 = 0, $cmp$i$i203 = 0, $cmp$i$i296 = 0, $cmp$i170$us = 0, $cmp$i173$us$not = 0, $cmp$i175$us = 0, $cmp$i177 = 0, $cmp$i181 = 0, $cmp$i186 = 0, $cmp$i195 = 0, $cmp$i207 = 0, $cmp$i213 = 0, $cmp$i216 = 0, $cmp$i219 = 0;
 var $cmp$i225 = 0, $cmp$i298 = 0, $cmp121 = 0, $cmp132 = 0, $cmp151 = 0, $cmp155 = 0, $cmp165 = 0, $cmp175 = 0, $cmp179 = 0, $cmp190 = 0, $cmp210 = 0, $cmp231 = 0, $cmp235 = 0, $cmp246 = 0, $cmp254 = 0, $cmp258 = 0, $cmp265 = 0, $cmp269 = 0, $cmp286 = 0, $cmp286239 = 0;
 var $cmp310 = 0, $cmp348 = 0, $cmp383 = 0, $cmp386 = 0, $cmp5$i = 0, $cmp5$i196 = 0, $cmp5$i208 = 0, $cmp5$i299 = 0, $cmp70 = 0, $cmp75 = 0, $cmp75249 = 0, $cmp76 = 0, $cmp89 = 0, $cmp95 = 0, $cond = 0, $cond$i = 0, $cond$i178 = 0, $conv$us = 0.0, $conv130 = 0.0, $conv290 = 0.0;
 var $conv293 = 0.0, $conv321 = 0.0, $conv334 = 0.0, $conv359 = 0.0, $conv372 = 0.0, $conv58$us = 0.0, $counter$0250 = 0, $counter$1 = 0, $counter$2 = 0, $dec = 0, $div = 0.0, $div219 = 0.0, $eps6 = 0, $exitcond = 0, $exitcond272 = 0, $exitcond273 = 0, $exitcond274 = 0, $exitcond275 = 0, $exitcond276 = 0, $exitcond277 = 0;
 var $exitcond278 = 0, $exitcond279 = 0, $exitcond280 = 0, $exitcond281 = 0, $exitcond282 = 0, $exitcond282302 = 0, $i20$0262 = 0, $i20$1258$us = 0, $i395$0238 = 0, $i412$0235 = 0, $i84 = 0, $i9$0264 = 0, $inc = 0, $inc16 = 0, $inc300 = 0, $inc303 = 0, $inc31 = 0, $inc327 = 0, $inc340 = 0, $inc365 = 0;
 var $inc378 = 0, $inc409 = 0, $inc423 = 0, $inc49$us = 0, $inc64$us = 0, $inc68$us = 0, $inc99 = 0, $isnull = 0, $isnull428 = 0, $isnull432 = 0, $isnull436 = 0, $isnull440 = 0, $isnull444 = 0, $isnull448 = 0, $iter$0233 = 0, $iter$0251 = 0, $j$0254$us = 0, $j$1256$us = 0, $j85 = 0, $k$0240 = 0;
 var $k305$0244 = 0, $k305$1242 = 0, $k305$2248 = 0, $k305$3246 = 0, $l2 = 0, $mul$i = 0, $mul$us = 0.0, $mul129 = Math_fround(0), $mul291 = 0.0, $mul294 = 0.0, $mul322 = 0.0, $mul335 = 0.0, $mul360 = 0.0, $mul373 = 0.0, $mul406 = 0.0, $mul59$us = 0.0, $mul71 = 0, $p = 0, $phitmp = 0.0, $quad_coef$0 = 0.0;
 var $quad_coef200$0 = 0.0, $rho = 0, $sub = 0.0, $sub139 = 0.0, $sub144 = 0.0, $sub169 = 0.0, $sub174 = 0.0, $sub183 = 0.0, $sub209 = 0.0, $sub218 = 0.0, $sub227 = 0.0, $sub239 = 0.0, $sub262 = 0.0, $sub280 = 0.0, $sub283 = 0.0, $sub325 = 0.0, $sub363 = 0.0, $tobool = 0, $unshrink = 0, $upper_bound_n = 0;
 var $upper_bound_p = 0, $v$0237 = 0.0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer3 = 0, $vararg_buffer5 = 0, $vfn = 0, $vfn393 = 0, $vfn81 = 0, $vfn87 = 0, $vfn93 = 0, $vtable = 0, $vtable101 = 0, $vtable105 = 0, $vtable312 = 0, $vtable350 = 0, $vtable37$us = 0, $vtable392 = 0, $vtable80 = 0, $vtable86 = 0;
 var $vtable92 = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer5 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $i84 = sp + 32|0;
 $j85 = sp + 28|0;
 $l2 = ((($this)) + 68|0);
 store4($l2,$l);
 $Q3 = ((($this)) + 24|0);
 store4($Q3,$Q);
 $vtable = load4($Q);
 $vfn = ((($vtable)) + 4|0);
 $0 = load4($vfn);
 $call = (FUNCTION_TABLE_ii[$0 & 7]($Q)|0);
 $QD = ((($this)) + 28|0);
 store4($QD,$call);
 $p = ((($this)) + 56|0);
 $$arith8 = $l<<3;
 $$overflow9 = ($l>>>0)>(536870911);
 $1 = $$overflow9 ? -1 : $$arith8;
 $call$i = (__Znaj($1)|0);
 store4($p,$call$i);
 $mul$i = $l << 3;
 _memcpy(($call$i|0),($p_|0),($mul$i|0))|0;
 $y = ((($this)) + 8|0);
 $2 = ($l|0)>(-1);
 $3 = $2 ? $l : -1;
 $call$i166 = (__Znaj($3)|0);
 store4($y,$call$i166);
 _memcpy(($call$i166|0),($y_|0),($l|0))|0;
 $alpha = ((($this)) + 20|0);
 $call$i167 = (__Znaj($1)|0);
 store4($alpha,$call$i167);
 _memcpy(($call$i167|0),($alpha_|0),($mul$i|0))|0;
 $Cp4 = ((($this)) + 40|0);
 stored($Cp4,$Cp);
 $Cn5 = ((($this)) + 48|0);
 stored($Cn5,$Cn);
 $eps6 = ((($this)) + 32|0);
 stored($eps6,$eps);
 $unshrink = ((($this)) + 72|0);
 store1($unshrink,0);
 $call7 = (__Znaj($3)|0);
 $alpha_status = ((($this)) + 16|0);
 store4($alpha_status,$call7);
 $cmp265 = ($l|0)>(0);
 if ($cmp265) {
  $4 = loadd($call$i167);
  $5 = load1($call$i166);
  $cmp$i$i296 = ($5<<24>>24)>(0);
  $Cn$sink$i$i297 = $cmp$i$i296 ? $Cp4 : $Cn5;
  $6 = loadd($Cn$sink$i$i297);
  $cmp$i298 = !($4 >= $6);
  $cmp5$i299 = $4 <= 0.0;
  $$sink$i300 = $cmp5$i299 ? 0 : 2;
  $$sink5$i301 = $cmp$i298 ? $$sink$i300 : 1;
  store1($call7,$$sink5$i301);
  $exitcond282302 = ($l|0)==(1);
  if (!($exitcond282302)) {
   $inc303 = 1;
   while(1) {
    $$pre = load4($alpha);
    $$pre283 = load4($y);
    $$pre284 = load4($alpha_status);
    $arrayidx$i = (($$pre) + ($inc303<<3)|0);
    $8 = loadd($arrayidx$i);
    $arrayidx$i$i = (($$pre283) + ($inc303)|0);
    $9 = load1($arrayidx$i$i);
    $cmp$i$i = ($9<<24>>24)>(0);
    $Cn$sink$i$i = $cmp$i$i ? $Cp4 : $Cn5;
    $10 = loadd($Cn$sink$i$i);
    $cmp$i = !($8 >= $10);
    $cmp5$i = $8 <= 0.0;
    $$sink$i = $cmp5$i ? 0 : 2;
    $$sink5$i = $cmp$i ? $$sink$i : 1;
    $11 = (($$pre284) + ($inc303)|0);
    store1($11,$$sink5$i);
    $inc = (($inc303) + 1)|0;
    $exitcond282 = ($inc|0)==($l|0);
    if ($exitcond282) {
     break;
    } else {
     $inc303 = $inc;
    }
   }
  }
 }
 $$arith = $l<<2;
 $$overflow = ($l>>>0)>(1073741823);
 $7 = $$overflow ? -1 : $$arith;
 $call8 = (__Znaj($7)|0);
 $active_set = ((($this)) + 60|0);
 store4($active_set,$call8);
 if ($cmp265) {
  $i9$0264 = 0;
  while(1) {
   $arrayidx = (($call8) + ($i9$0264<<2)|0);
   store4($arrayidx,$i9$0264);
   $inc16 = (($i9$0264) + 1)|0;
   $exitcond281 = ($inc16|0)==($l|0);
   if ($exitcond281) {
    break;
   } else {
    $i9$0264 = $inc16;
   }
  }
 }
 $active_size = ((($this)) + 4|0);
 store4($active_size,$l);
 $call18 = (__Znaj($1)|0);
 $G = ((($this)) + 12|0);
 store4($G,$call18);
 $call19 = (__Znaj($1)|0);
 $G_bar = ((($this)) + 64|0);
 store4($G_bar,$call19);
 if ($cmp265) {
  $12 = load4($p);
  $i20$0262 = 0;
  while(1) {
   $arrayidx25 = (($12) + ($i20$0262<<3)|0);
   $27 = loadd($arrayidx25);
   $arrayidx27 = (($call18) + ($i20$0262<<3)|0);
   stored($arrayidx27,$27);
   $arrayidx29 = (($call19) + ($i20$0262<<3)|0);
   stored($arrayidx29,0.0);
   $inc31 = (($i20$0262) + 1)|0;
   $exitcond280 = ($inc31|0)==($l|0);
   if ($exitcond280) {
    break;
   } else {
    $i20$0262 = $inc31;
   }
  }
  if ($cmp265) {
   $$pre285 = load4($alpha_status);
   $13 = $$pre285;$i20$1258$us = 0;
   while(1) {
    $arrayidx$i169$us = (($13) + ($i20$1258$us)|0);
    $14 = load1($arrayidx$i169$us);
    $cmp$i170$us = ($14<<24>>24)==(0);
    if ($cmp$i170$us) {
     $130 = $13;
    } else {
     $vtable37$us = load4($Q);
     $15 = load4($vtable37$us);
     $call39$us = (FUNCTION_TABLE_iiii[$15 & 15]($Q,$i20$1258$us,$l)|0);
     $16 = load4($alpha);
     $arrayidx41$us = (($16) + ($i20$1258$us<<3)|0);
     $17 = loadd($arrayidx41$us);
     $18 = load4($G);
     $j$0254$us = 0;
     while(1) {
      $arrayidx45$us = (($call39$us) + ($j$0254$us<<2)|0);
      $23 = loadf($arrayidx45$us);
      $conv$us = +$23;
      $mul$us = $17 * $conv$us;
      $arrayidx47$us = (($18) + ($j$0254$us<<3)|0);
      $24 = loadd($arrayidx47$us);
      $add$us = $24 + $mul$us;
      stored($arrayidx47$us,$add$us);
      $inc49$us = (($j$0254$us) + 1)|0;
      $exitcond277 = ($inc49$us|0)==($l|0);
      if ($exitcond277) {
       break;
      } else {
       $j$0254$us = $inc49$us;
      }
     }
     $25 = load4($alpha_status);
     $arrayidx$i172$us = (($25) + ($i20$1258$us)|0);
     $26 = load1($arrayidx$i172$us);
     $cmp$i173$us$not = ($26<<24>>24)==(1);
     if ($cmp$i173$us$not) {
      $$pre286 = load4($y);
      $$pre287 = load4($G_bar);
      $arrayidx$i174$us = (($$pre286) + ($i20$1258$us)|0);
      $j$1256$us = 0;
      while(1) {
       $19 = load1($arrayidx$i174$us);
       $cmp$i175$us = ($19<<24>>24)>(0);
       $Cn$sink$i$us = $cmp$i175$us ? $Cp4 : $Cn5;
       $20 = loadd($Cn$sink$i$us);
       $arrayidx57$us = (($call39$us) + ($j$1256$us<<2)|0);
       $21 = loadf($arrayidx57$us);
       $conv58$us = +$21;
       $mul59$us = $20 * $conv58$us;
       $arrayidx61$us = (($$pre287) + ($j$1256$us<<3)|0);
       $22 = loadd($arrayidx61$us);
       $add62$us = $22 + $mul59$us;
       stored($arrayidx61$us,$add62$us);
       $inc64$us = (($j$1256$us) + 1)|0;
       $exitcond278 = ($inc64$us|0)==($l|0);
       if ($exitcond278) {
        $130 = $25;
        break;
       } else {
        $j$1256$us = $inc64$us;
       }
      }
     } else {
      $130 = $25;
     }
    }
    $inc68$us = (($i20$1258$us) + 1)|0;
    $exitcond279 = ($inc68$us|0)==($l|0);
    if ($exitcond279) {
     break;
    } else {
     $13 = $130;$i20$1258$us = $inc68$us;
    }
   }
  }
 }
 $cmp70 = ($l|0)>(21474836);
 $mul71 = ($l*100)|0;
 $cond = $cmp70 ? 2147483647 : $mul71;
 $28 = ($cond|0)>(10000000);
 $cond$i = $28 ? $cond : 10000000;
 $cmp$i177 = ($l|0)<(1000);
 $cond$i178 = $cmp$i177 ? $l : 1000;
 $cmp75249 = ($cond$i|0)>(0);
 L28: do {
  if ($cmp75249) {
   $add74 = (($cond$i178) + 1)|0;
   $tobool = ($shrinking|0)==(0);
   $counter$0250 = $add74;$iter$0251 = 0;
   while(1) {
    $dec = (($counter$0250) + -1)|0;
    $cmp76 = ($dec|0)==(0);
    if ($cmp76) {
     if (!($tobool)) {
      $vtable80 = load4($this);
      $vfn81 = ((($vtable80)) + 16|0);
      $29 = load4($vfn81);
      FUNCTION_TABLE_vi[$29 & 31]($this);
     }
     __ZL4infoPKcz(4230,$vararg_buffer);
     $counter$1 = $cond$i178;
    } else {
     $counter$1 = $dec;
    }
    $vtable86 = load4($this);
    $vfn87 = ((($vtable86)) + 8|0);
    $30 = load4($vfn87);
    $call88 = (FUNCTION_TABLE_iiii[$30 & 15]($this,$i84,$j85)|0);
    $cmp89 = ($call88|0)==(0);
    if ($cmp89) {
     $counter$2 = $counter$1;
    } else {
     __ZN6Solver20reconstruct_gradientEv($this);
     store4($active_size,$l);
     __ZL4infoPKcz(2515,$vararg_buffer1);
     $vtable92 = load4($this);
     $vfn93 = ((($vtable92)) + 8|0);
     $31 = load4($vfn93);
     $call94 = (FUNCTION_TABLE_iiii[$31 & 15]($this,$i84,$j85)|0);
     $cmp95 = ($call94|0)==(0);
     if ($cmp95) {
      $counter$2 = 1;
     } else {
      break;
     }
    }
    $inc99 = (($iter$0251) + 1)|0;
    $vtable101 = load4($Q);
    $32 = load4($vtable101);
    $33 = load4($i84);
    $34 = load4($active_size);
    $call104 = (FUNCTION_TABLE_iiii[$32 & 15]($Q,$33,$34)|0);
    $vtable105 = load4($Q);
    $35 = load4($vtable105);
    $36 = load4($j85);
    $37 = load4($active_size);
    $call108 = (FUNCTION_TABLE_iiii[$35 & 15]($Q,$36,$37)|0);
    $38 = load4($i84);
    $39 = load4($y);
    $arrayidx$i224 = (($39) + ($38)|0);
    $40 = load1($arrayidx$i224);
    $cmp$i225 = ($40<<24>>24)>(0);
    $Cn$sink$i228 = $cmp$i225 ? $Cp4 : $Cn5;
    $41 = loadd($Cn$sink$i228);
    $42 = load4($j85);
    $arrayidx$i218 = (($39) + ($42)|0);
    $43 = load1($arrayidx$i218);
    $cmp$i219 = ($43<<24>>24)>(0);
    $Cn$sink$i222 = $cmp$i219 ? $Cp4 : $Cn5;
    $44 = loadd($Cn$sink$i222);
    $45 = load4($alpha);
    $arrayidx112 = (($45) + ($38<<3)|0);
    $46 = loadd($arrayidx112);
    $arrayidx114 = (($45) + ($42<<3)|0);
    $47 = loadd($arrayidx114);
    $cmp121 = ($40<<24>>24)==($43<<24>>24);
    $48 = (($call104) + ($42<<2)|0);
    $49 = loadf($48);
    $50 = load4($QD);
    $mul129 = Math_fround($49 * Math_fround(2.0));
    $51 = (($50) + ($38<<3)|0);
    $52 = loadd($51);
    $53 = (($50) + ($42<<3)|0);
    $54 = loadd($53);
    $add127 = $52 + $54;
    $conv130 = +$mul129;
    do {
     if ($cmp121) {
      $sub209 = $add127 - $conv130;
      $cmp210 = !($sub209 <= 0.0);
      $quad_coef200$0 = $cmp210 ? $sub209 : 9.9999999999999998E-13;
      $62 = load4($G);
      $arrayidx215 = (($62) + ($38<<3)|0);
      $63 = loadd($arrayidx215);
      $arrayidx217 = (($62) + ($42<<3)|0);
      $64 = loadd($arrayidx217);
      $sub218 = $63 - $64;
      $div219 = $sub218 / $quad_coef200$0;
      $add224 = $46 + $47;
      $sub227 = $46 - $div219;
      stored($arrayidx112,$sub227);
      $65 = loadd($arrayidx114);
      $add230 = $65 + $div219;
      stored($arrayidx114,$add230);
      $cmp231 = $add224 > $41;
      if ($cmp231) {
       $66 = loadd($arrayidx112);
       $cmp235 = $66 > $41;
       if ($cmp235) {
        $sub239 = $add224 - $41;
        stored($arrayidx112,$41);
        stored($arrayidx114,$sub239);
       }
      } else {
       $cmp246 = $add230 < 0.0;
       if ($cmp246) {
        stored($arrayidx114,0.0);
        stored($arrayidx112,$add224);
       }
      }
      $cmp254 = $add224 > $44;
      if ($cmp254) {
       $67 = loadd($arrayidx114);
       $cmp258 = $67 > $44;
       if (!($cmp258)) {
        $91 = $62;
        break;
       }
       $sub262 = $add224 - $44;
       stored($arrayidx114,$44);
       stored($arrayidx112,$sub262);
       $91 = $62;
       break;
      } else {
       $68 = loadd($arrayidx112);
       $cmp269 = $68 < 0.0;
       if (!($cmp269)) {
        $91 = $62;
        break;
       }
       stored($arrayidx112,0.0);
       stored($arrayidx114,$add224);
       $91 = $62;
       break;
      }
     } else {
      $add131 = $conv130 + $add127;
      $cmp132 = !($add131 <= 0.0);
      $quad_coef$0 = $cmp132 ? $add131 : 9.9999999999999998E-13;
      $55 = load4($G);
      $arrayidx136 = (($55) + ($38<<3)|0);
      $56 = loadd($arrayidx136);
      $sub = -$56;
      $arrayidx138 = (($55) + ($42<<3)|0);
      $57 = loadd($arrayidx138);
      $sub139 = $sub - $57;
      $div = $sub139 / $quad_coef$0;
      $sub144 = $46 - $47;
      $add147 = $46 + $div;
      stored($arrayidx112,$add147);
      $58 = loadd($arrayidx114);
      $add150 = $58 + $div;
      stored($arrayidx114,$add150);
      $cmp151 = $sub144 > 0.0;
      if ($cmp151) {
       $cmp155 = $add150 < 0.0;
       if ($cmp155) {
        stored($arrayidx114,0.0);
        stored($arrayidx112,$sub144);
       }
      } else {
       $59 = loadd($arrayidx112);
       $cmp165 = $59 < 0.0;
       if ($cmp165) {
        stored($arrayidx112,0.0);
        $sub169 = -$sub144;
        stored($arrayidx114,$sub169);
       }
      }
      $sub174 = $41 - $44;
      $cmp175 = $sub144 > $sub174;
      if ($cmp175) {
       $60 = loadd($arrayidx112);
       $cmp179 = $60 > $41;
       if (!($cmp179)) {
        $91 = $55;
        break;
       }
       $sub183 = $41 - $sub144;
       stored($arrayidx112,$41);
       stored($arrayidx114,$sub183);
       $91 = $55;
       break;
      } else {
       $61 = loadd($arrayidx114);
       $cmp190 = $61 > $44;
       if (!($cmp190)) {
        $91 = $55;
        break;
       }
       stored($arrayidx114,$44);
       $add194 = $44 + $sub144;
       stored($arrayidx112,$add194);
       $91 = $55;
       break;
      }
     }
    } while(0);
    $69 = loadd($arrayidx112);
    $sub280 = $69 - $46;
    $70 = loadd($arrayidx114);
    $sub283 = $70 - $47;
    $71 = load4($active_size);
    $cmp286239 = ($71|0)>(0);
    if ($cmp286239) {
     $k$0240 = 0;
     while(1) {
      $arrayidx289 = (($call104) + ($k$0240<<2)|0);
      $89 = loadf($arrayidx289);
      $conv290 = +$89;
      $mul291 = $sub280 * $conv290;
      $arrayidx292 = (($call108) + ($k$0240<<2)|0);
      $90 = loadf($arrayidx292);
      $conv293 = +$90;
      $mul294 = $sub283 * $conv293;
      $add295 = $mul291 + $mul294;
      $arrayidx297 = (($91) + ($k$0240<<3)|0);
      $92 = loadd($arrayidx297);
      $add298 = $92 + $add295;
      stored($arrayidx297,$add298);
      $inc300 = (($k$0240) + 1)|0;
      $cmp286 = ($inc300|0)<($71|0);
      if ($cmp286) {
       $k$0240 = $inc300;
      } else {
       break;
      }
     }
     $$pre288 = loadd($arrayidx112);
     $77 = $$pre288;
    } else {
     $77 = $69;
    }
    $72 = load4($alpha_status);
    $arrayidx$i215 = (($72) + ($38)|0);
    $73 = load1($arrayidx$i215);
    $cmp$i216 = ($73<<24>>24)==(1);
    $arrayidx$i212 = (($72) + ($42)|0);
    $74 = load1($arrayidx$i212);
    $cmp$i213 = ($74<<24>>24)==(1);
    $75 = load1($arrayidx$i224);
    $cmp$i$i203 = ($75<<24>>24)>(0);
    $Cn$sink$i$i206 = $cmp$i$i203 ? $Cp4 : $Cn5;
    $76 = loadd($Cn$sink$i$i206);
    $cmp$i207 = !($77 >= $76);
    $cmp5$i208 = $77 <= 0.0;
    $$sink$i209 = $cmp5$i208 ? 0 : 2;
    $$sink5$i210 = $cmp$i207 ? $$sink$i209 : 1;
    store1($arrayidx$i215,$$sink5$i210);
    $78 = load4($j85);
    $79 = load4($alpha);
    $arrayidx$i188 = (($79) + ($78<<3)|0);
    $80 = loadd($arrayidx$i188);
    $81 = load4($y);
    $arrayidx$i$i190 = (($81) + ($78)|0);
    $82 = load1($arrayidx$i$i190);
    $cmp$i$i191 = ($82<<24>>24)>(0);
    $Cn$sink$i$i194 = $cmp$i$i191 ? $Cp4 : $Cn5;
    $83 = loadd($Cn$sink$i$i194);
    $cmp$i195 = !($80 >= $83);
    $84 = load4($alpha_status);
    $cmp5$i196 = $80 <= 0.0;
    $$sink$i197 = $cmp5$i196 ? 0 : 2;
    $$sink5$i198 = $cmp$i195 ? $$sink$i197 : 1;
    $85 = (($84) + ($78)|0);
    store1($85,$$sink5$i198);
    $86 = load4($i84);
    $87 = load4($alpha_status);
    $arrayidx$i185 = (($87) + ($86)|0);
    $88 = load1($arrayidx$i185);
    $cmp$i186 = ($88<<24>>24)==(1);
    $cmp310 = $cmp$i216 ^ $cmp$i186;
    do {
     if ($cmp310) {
      $vtable312 = load4($Q);
      $93 = load4($vtable312);
      $call314 = (FUNCTION_TABLE_iiii[$93 & 15]($Q,$86,$l)|0);
      if ($cmp$i216) {
       if (!($cmp265)) {
        break;
       }
       $95 = load4($G_bar);
       $k305$0244 = 0;
       while(1) {
        $arrayidx320 = (($call314) + ($k305$0244<<2)|0);
        $96 = loadf($arrayidx320);
        $conv321 = +$96;
        $mul322 = $41 * $conv321;
        $arrayidx324 = (($95) + ($k305$0244<<3)|0);
        $97 = loadd($arrayidx324);
        $sub325 = $97 - $mul322;
        stored($arrayidx324,$sub325);
        $inc327 = (($k305$0244) + 1)|0;
        $exitcond274 = ($inc327|0)==($l|0);
        if ($exitcond274) {
         break;
        } else {
         $k305$0244 = $inc327;
        }
       }
      } else {
       if (!($cmp265)) {
        break;
       }
       $94 = load4($G_bar);
       $k305$1242 = 0;
       while(1) {
        $arrayidx333 = (($call314) + ($k305$1242<<2)|0);
        $98 = loadf($arrayidx333);
        $conv334 = +$98;
        $mul335 = $41 * $conv334;
        $arrayidx337 = (($94) + ($k305$1242<<3)|0);
        $99 = loadd($arrayidx337);
        $add338 = $99 + $mul335;
        stored($arrayidx337,$add338);
        $inc340 = (($k305$1242) + 1)|0;
        $exitcond273 = ($inc340|0)==($l|0);
        if ($exitcond273) {
         break;
        } else {
         $k305$1242 = $inc340;
        }
       }
      }
     }
    } while(0);
    $100 = load4($j85);
    $101 = load4($alpha_status);
    $arrayidx$i180 = (($101) + ($100)|0);
    $102 = load1($arrayidx$i180);
    $cmp$i181 = ($102<<24>>24)==(1);
    $cmp348 = $cmp$i213 ^ $cmp$i181;
    do {
     if ($cmp348) {
      $vtable350 = load4($Q);
      $103 = load4($vtable350);
      $call352 = (FUNCTION_TABLE_iiii[$103 & 15]($Q,$100,$l)|0);
      if ($cmp$i213) {
       if (!($cmp265)) {
        break;
       }
       $105 = load4($G_bar);
       $k305$2248 = 0;
       while(1) {
        $arrayidx358 = (($call352) + ($k305$2248<<2)|0);
        $106 = loadf($arrayidx358);
        $conv359 = +$106;
        $mul360 = $44 * $conv359;
        $arrayidx362 = (($105) + ($k305$2248<<3)|0);
        $107 = loadd($arrayidx362);
        $sub363 = $107 - $mul360;
        stored($arrayidx362,$sub363);
        $inc365 = (($k305$2248) + 1)|0;
        $exitcond276 = ($inc365|0)==($l|0);
        if ($exitcond276) {
         break;
        } else {
         $k305$2248 = $inc365;
        }
       }
      } else {
       if (!($cmp265)) {
        break;
       }
       $104 = load4($G_bar);
       $k305$3246 = 0;
       while(1) {
        $arrayidx371 = (($call352) + ($k305$3246<<2)|0);
        $108 = loadf($arrayidx371);
        $conv372 = +$108;
        $mul373 = $44 * $conv372;
        $arrayidx375 = (($104) + ($k305$3246<<3)|0);
        $109 = loadd($arrayidx375);
        $add376 = $109 + $mul373;
        stored($arrayidx375,$add376);
        $inc378 = (($k305$3246) + 1)|0;
        $exitcond275 = ($inc378|0)==($l|0);
        if ($exitcond275) {
         break;
        } else {
         $k305$3246 = $inc378;
        }
       }
      }
     }
    } while(0);
    $cmp75 = ($inc99|0)<($cond$i|0);
    if ($cmp75) {
     $counter$0250 = $counter$2;$iter$0251 = $inc99;
    } else {
     $iter$0233 = $inc99;
     break L28;
    }
   }
   $iter$0233 = $iter$0251;
  } else {
   $iter$0233 = 0;
  }
 } while(0);
 $cmp383 = ($iter$0233|0)<($cond$i|0);
 if (!($cmp383)) {
  $110 = load4($active_size);
  $cmp386 = ($110|0)<($l|0);
  if ($cmp386) {
   __ZN6Solver20reconstruct_gradientEv($this);
   store4($active_size,$l);
   __ZL4infoPKcz(2515,$vararg_buffer3);
  }
  $111 = load4(1452);
  (_fwrite(2572,44,1,$111)|0);
 }
 $vtable392 = load4($this);
 $vfn393 = ((($vtable392)) + 12|0);
 $112 = load4($vfn393);
 $call394 = (+FUNCTION_TABLE_di[$112 & 3]($this));
 $rho = ((($si)) + 8|0);
 stored($rho,$call394);
 if ($cmp265) {
  $113 = load4($alpha);
  $114 = load4($G);
  $115 = load4($p);
  $i395$0238 = 0;$v$0237 = 0.0;
  while(1) {
   $arrayidx400 = (($113) + ($i395$0238<<3)|0);
   $116 = loadd($arrayidx400);
   $arrayidx402 = (($114) + ($i395$0238<<3)|0);
   $117 = loadd($arrayidx402);
   $arrayidx404 = (($115) + ($i395$0238<<3)|0);
   $118 = loadd($arrayidx404);
   $add405 = $117 + $118;
   $mul406 = $116 * $add405;
   $add407 = $v$0237 + $mul406;
   $inc409 = (($i395$0238) + 1)|0;
   $exitcond272 = ($inc409|0)==($l|0);
   if ($exitcond272) {
    break;
   } else {
    $i395$0238 = $inc409;$v$0237 = $add407;
   }
  }
  $phitmp = $add407 * 0.5;
  stored($si,$phitmp);
  if ($cmp265) {
   $119 = load4($alpha);
   $120 = load4($active_set);
   $i412$0235 = 0;
   while(1) {
    $arrayidx418 = (($119) + ($i412$0235<<3)|0);
    $122 = loadd($arrayidx418);
    $arrayidx420 = (($120) + ($i412$0235<<2)|0);
    $123 = load4($arrayidx420);
    $arrayidx421 = (($alpha_) + ($123<<3)|0);
    stored($arrayidx421,$122);
    $inc423 = (($i412$0235) + 1)|0;
    $exitcond = ($inc423|0)==($l|0);
    if ($exitcond) {
     break;
    } else {
     $i412$0235 = $inc423;
    }
   }
  }
 } else {
  stored($si,0.0);
 }
 $upper_bound_p = ((($si)) + 16|0);
 stored($upper_bound_p,$Cp);
 $upper_bound_n = ((($si)) + 24|0);
 stored($upper_bound_n,$Cn);
 store4($vararg_buffer5,$iter$0233);
 __ZL4infoPKcz(2617,$vararg_buffer5);
 $121 = load4($p);
 $isnull = ($121|0)==(0|0);
 if (!($isnull)) {
  __ZdaPv($121);
 }
 $124 = load4($y);
 $isnull428 = ($124|0)==(0|0);
 if (!($isnull428)) {
  __ZdaPv($124);
 }
 $125 = load4($alpha);
 $isnull432 = ($125|0)==(0|0);
 if (!($isnull432)) {
  __ZdaPv($125);
 }
 $126 = load4($alpha_status);
 $isnull436 = ($126|0)==(0|0);
 if (!($isnull436)) {
  __ZdaPv($126);
 }
 $127 = load4($active_set);
 $isnull440 = ($127|0)==(0|0);
 if (!($isnull440)) {
  __ZdaPv($127);
 }
 $128 = load4($G);
 $isnull444 = ($128|0)==(0|0);
 if (!($isnull444)) {
  __ZdaPv($128);
 }
 $129 = load4($G_bar);
 $isnull448 = ($129|0)==(0|0);
 if ($isnull448) {
  STACKTOP = sp;return;
 }
 __ZdaPv($129);
 STACKTOP = sp;return;
}
function _svm_train($prob,$param) {
 $prob = $prob|0;
 $param = $param|0;
 var $$off = 0, $$off295 = 0, $$pr = 0, $$pre = 0, $$pre503 = 0, $$pre504 = 0, $$pre505 = 0, $$pre506 = 0, $$pre507 = 0, $$pre509 = 0, $$pre511 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0.0, $102 = 0.0, $103 = 0.0, $104 = 0.0, $105 = 0.0;
 var $106 = 0.0, $107 = 0.0, $108 = 0.0, $109 = 0.0, $11 = 0, $110 = 0.0, $111 = 0.0, $112 = 0.0, $113 = 0.0, $114 = 0.0, $115 = 0, $116 = 0, $117 = 0.0, $118 = 0, $119 = 0, $12 = 0.0, $120 = 0.0, $121 = 0, $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0.0, $129 = 0, $13 = 0, $130 = 0.0, $131 = 0.0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0;
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0.0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0.0, $159 = 0, $16 = 0;
 var $160 = 0, $161 = 0, $162 = 0, $163 = 0.0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0.0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0;
 var $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0.0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0.0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0.0, $38 = 0.0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0.0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0.0, $59 = 0.0, $6 = 0.0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0.0, $69 = 0, $7 = 0.0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0.0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0.0, $82 = 0, $83 = 0, $84 = 0.0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0.0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0.0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $C = 0, $C$i = 0, $SV = 0, $SV359 = 0;
 var $add = 0, $add$i = 0.0, $add$i$i = 0.0, $add$i309 = 0, $add112$i$i = 0.0, $add117$i$i = 0.0, $add120$i$i = 0.0, $add120$lcssa$i$i = 0.0, $add120$us$i$i = 0.0, $add122$i$i = 0.0, $add122$lcssa$i$i = 0.0, $add122$us$i$i = 0.0, $add128$us$i$i = 0.0, $add135$us$i$i = 0.0, $add137$us$i$i = 0.0, $add154$i$i = 0.0, $add154$us$i$i = 0.0, $add156 = 0, $add164 = 0, $add176 = 0;
 var $add18$i = 0, $add188 = 0, $add191 = 0, $add2$i$i = 0.0, $add21$i = 0.0, $add21$i312 = 0, $add213 = 0, $add23$i$i = 0.0, $add232 = 0, $add238 = 0, $add29$i$i = 0.0, $add3$i$i = 0.0, $add31$i$i = 0.0, $add340 = 0, $add373 = 0, $add391 = 0, $add4$i$i = 0.0, $add415 = 0, $add433$us = 0, $add453 = 0;
 var $add453$us = 0, $add459 = 0, $add459$us = 0, $add5$i$i = 0.0, $add54$i$i = 0.0, $add61$i$i = 0.0, $add69$i$i = 0.0, $add7$i$i = 0.0, $add81$i$i = 0.0, $add82$i$i = 0.0, $add85$i$i = 0.0, $add90$i$i = 0.0, $add91$i$i = 0.0, $alpha438$us = 0, $alpha458 = 0, $alpha483 = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i303 = 0, $arrayidx101$i = 0;
 var $arrayidx102 = 0, $arrayidx102$i = 0, $arrayidx103 = 0, $arrayidx11$i = 0, $arrayidx113 = 0, $arrayidx114$i = 0, $arrayidx115$i = 0, $arrayidx116 = 0, $arrayidx117 = 0, $arrayidx12$i = 0, $arrayidx125$i = 0, $arrayidx126$us$i$i = 0, $arrayidx129$i = 0, $arrayidx131$us$i$i = 0, $arrayidx135$i = 0, $arrayidx136$i = 0, $arrayidx138$i = 0, $arrayidx14$i = 0, $arrayidx14$i$i = 0, $arrayidx160 = 0;
 var $arrayidx161 = 0, $arrayidx162 = 0, $arrayidx163 = 0, $arrayidx177 = 0, $arrayidx177555 = 0, $arrayidx179 = 0, $arrayidx181 = 0, $arrayidx189 = 0, $arrayidx19$sink$i$i = 0, $arrayidx192 = 0, $arrayidx195 = 0, $arrayidx2$i = 0, $arrayidx203 = 0, $arrayidx204 = 0, $arrayidx205 = 0, $arrayidx207 = 0, $arrayidx208$pre$phiZ2D = 0, $arrayidx209 = 0, $arrayidx21$i$i = 0, $arrayidx214 = 0;
 var $arrayidx219 = 0, $arrayidx233 = 0, $arrayidx239 = 0, $arrayidx24 = 0, $arrayidx265 = 0, $arrayidx267 = 0, $arrayidx286 = 0, $arrayidx311 = 0, $arrayidx313 = 0, $arrayidx314 = 0, $arrayidx316 = 0, $arrayidx335386 = 0, $arrayidx339 = 0, $arrayidx341 = 0, $arrayidx351 = 0, $arrayidx352 = 0, $arrayidx366 = 0, $arrayidx369 = 0, $arrayidx371 = 0, $arrayidx372 = 0;
 var $arrayidx376 = 0, $arrayidx390 = 0, $arrayidx392 = 0, $arrayidx40$i = 0, $arrayidx407 = 0, $arrayidx41$i = 0, $arrayidx41$i561 = 0, $arrayidx421 = 0, $arrayidx423 = 0, $arrayidx423$us = 0, $arrayidx425 = 0, $arrayidx427 = 0, $arrayidx427$us = 0, $arrayidx428 = 0, $arrayidx43 = 0, $arrayidx43$i = 0, $arrayidx434$us = 0, $arrayidx439$us = 0, $arrayidx442$us = 0, $arrayidx444$us = 0;
 var $arrayidx449 = 0, $arrayidx449$us = 0, $arrayidx454 = 0, $arrayidx454$us = 0, $arrayidx46$i = 0, $arrayidx46$i563 = 0, $arrayidx460 = 0, $arrayidx460$us = 0, $arrayidx462 = 0, $arrayidx462$us = 0, $arrayidx464 = 0, $arrayidx464$us = 0, $arrayidx47 = 0, $arrayidx48$i = 0, $arrayidx49 = 0, $arrayidx52$i$i = 0, $arrayidx54 = 0, $arrayidx56 = 0, $arrayidx58$i = 0, $arrayidx59$i = 0;
 var $arrayidx61$i = 0, $arrayidx64$i = 0, $arrayidx66$i = 0, $arrayidx75$i = 0, $arrayidx80 = 0, $arrayidx81 = 0, $arrayidx82 = 0, $arrayidx86$i$i = 0, $arrayidx88$i = 0, $arrayidx89$i = 0, $arrayidx91 = 0, $call = 0, $call$i = 0, $call$i$i = 0, $call$i299 = 0, $call10$i$i = 0.0, $call120$i = 0, $call121$i = 0, $call124 = 0, $call130$i = 0;
 var $call134$us$i$i = 0.0, $call135 = 0, $call136$us$i$i = 0.0, $call14 = 0, $call145 = 0, $call15$i = 0.0, $call150 = 0, $call168 = 0, $call172 = 0, $call18 = 0, $call260 = 0, $call275 = 0, $call28$i$i = 0.0, $call297 = 0, $call3$i = 0, $call30$i$i = 0.0, $call303 = 0, $call31 = 0, $call32$i = 0, $call325 = 0;
 var $call327 = 0, $call33 = 0, $call35$i = 0, $call358 = 0, $call361 = 0, $call37 = 0, $call382 = 0, $call398 = 0, $call405 = 0, $call405551 = 0, $call5$i = 0.0, $call58$i$i = 0.0, $call68 = 0, $call68$i$i = 0.0, $call7 = 0, $call74 = 0, $call87 = 0, $call9$i = 0.0, $call9$i307 = 0, $call95$i$i = 0.0;
 var $call97$i$i = 0.0, $cmp$i = 0, $cmp$i301 = 0, $cmp$i301415 = 0, $cmp$i354 = 0, $cmp1$i$i = 0, $cmp1$i109$i = 0, $cmp100 = 0, $cmp104 = 0, $cmp109$i = 0, $cmp110 = 0, $cmp112$i436 = 0, $cmp118$i$i = 0, $cmp118$us$i$i = 0, $cmp12$i = 0, $cmp129$us$i$i = 0, $cmp132$i434 = 0, $cmp15$i$i = 0, $cmp153 = 0, $cmp155$i$i = 0;
 var $cmp155$us$i$i = 0, $cmp158 = 0, $cmp158447 = 0, $cmp160$i$i = 0, $cmp166$i$i = 0, $cmp167$i$i = 0, $cmp17$i = 0, $cmp174411 = 0, $cmp186413 = 0, $cmp221 = 0, $cmp23 = 0, $cmp23343 = 0, $cmp24$i$i = 0, $cmp241 = 0, $cmp263 = 0, $cmp263408 = 0, $cmp281 = 0, $cmp281405 = 0, $cmp309 = 0, $cmp330 = 0;
 var $cmp330393 = 0, $cmp336 = 0, $cmp336387 = 0, $cmp37$i = 0, $cmp37$i420 = 0, $cmp37$i565 = 0, $cmp385 = 0, $cmp385380 = 0, $cmp40 = 0, $cmp402 = 0, $cmp402552 = 0, $cmp412374 = 0, $cmp417370 = 0, $cmp431364 = 0, $cmp45 = 0, $cmp451367 = 0, $cmp451367$us = 0, $cmp47$i$i = 0, $cmp480 = 0, $cmp480362 = 0;
 var $cmp55$i = 0, $cmp55$i$i = 0, $cmp55$i424 = 0, $cmp69 = 0, $cmp7$i = 0, $cmp72$i428 = 0, $cmp76$i = 0, $cmp77467 = 0, $cmp82$i = 0, $cmp83$i = 0, $cmp86$i440 = 0, $cmp89 = 0, $cmp89465 = 0, $cmp94$i = 0, $cmp96 = 0, $cmp96$i$i = 0, $cmp96463 = 0, $cmp98$i$i = 0, $cmp99$i438 = 0, $conv$i = 0.0;
 var $conv$i315 = 0.0, $conv27$i = 0.0, $count = 0, $count$0$i$lcssa = 0, $count$0$i350 = 0, $count$1$i = 0, $div = 0, $div$div6$i$i = 0.0, $div$i = 0.0, $div$i$i = 0.0, $div$i311 = 0, $div108$i$i = 0.0, $div114$i$i = 0.0, $div158$i$i = 0.0, $div158$us$i$i = 0.0, $div24$i = 0, $div273 = 0, $div28$i = 0.0, $div479 = 0, $div6$i$i = 0.0;
 var $div62$i$i = 0.0, $div66$i$i = 0.0, $div70$i$i = 0.0, $div74$i$i = 0.0, $div9$i$i = 0.0, $exitcond = 0, $exitcond$i$i = 0, $exitcond187$i$i = 0, $exitcond188$i$i = 0, $exitcond189$i$i = 0, $exitcond484 = 0, $exitcond485 = 0, $exitcond486 = 0, $exitcond489 = 0, $exitcond490 = 0, $exitcond491 = 0, $exitcond491558 = 0, $exitcond492 = 0, $exitcond493 = 0, $exitcond494 = 0;
 var $exitcond495 = 0, $exitcond496 = 0, $exitcond497 = 0, $exitcond498 = 0, $exitcond499 = 0, $exitcond500 = 0, $exitcond502 = 0, $free_sv = 0, $fval$0164$i$i = 0.0, $fval$1$i$i = 0.0, $fval$2160$i$i = 0.0, $fval$3$i$i = 0.0, $g1$0$lcssa$i$i = 0.0, $g1$0145$i$i = 0.0, $g2$0$lcssa$i$i = 0.0, $g2$0146$i$i = 0.0, $h11$0$lcssa$i$i = 0.0, $h11$0148$i$i = 0.0, $h21$0$lcssa$i$i = 0.0, $h21$0144$i$i = 0.0;
 var $h22$0$lcssa$i$i = 0.0, $h22$0147$i$i = 0.0, $i$0$i300416 = 0, $i$0$i356 = 0, $i$0168$i$i = 0, $i$0344 = 0, $i$1 = 0, $i$1$i306418 = 0, $i$1$i349 = 0, $i$1$ph = 0, $i$1163$i$i = 0, $i$2$i442 = 0, $i$2149$i$i = 0, $i$3155$us$i$i = 0, $i75$0468 = 0, $i75$10381 = 0, $i75$12376 = 0, $i75$13363 = 0, $i75$1466 = 0, $i75$2464 = 0;
 var $i75$4453 = 0, $i75$5409 = 0, $i75$6406 = 0, $i75$7401 = 0, $i75$8395 = 0, $i75$9385 = 0, $inc = 0, $inc$i = 0, $inc$i$i = 0, $inc$i304 = 0, $inc104$i = 0, $inc108 = 0, $inc117$i = 0, $inc121 = 0, $inc14$i = 0, $inc145$i = 0, $inc150$us$i$i = 0, $inc164$i$i = 0, $inc183 = 0, $inc183559 = 0;
 var $inc197 = 0, $inc227 = 0, $inc23$i = 0, $inc247 = 0, $inc251 = 0, $inc253 = 0, $inc269 = 0, $inc288 = 0, $inc29 = 0, $inc318 = 0, $inc348 = 0, $inc354 = 0, $inc375 = 0, $inc379 = 0, $inc394 = 0, $inc409 = 0, $inc409553 = 0, $inc44$i$i = 0, $inc443$us = 0, $inc447$us = 0;
 var $inc463 = 0, $inc463$us = 0, $inc467 = 0, $inc467$us = 0, $inc469 = 0, $inc469$us = 0, $inc471 = 0, $inc471$us = 0, $inc485 = 0, $inc49$i = 0, $inc49$i566 = 0, $inc57 = 0, $inc67$i = 0, $inc69$i = 0, $inc77$i = 0, $inc78$i = 0, $inc80$i = 0, $inc84 = 0, $inc91$i = 0, $inc93 = 0;
 var $inc93$i$i = 0, $indvars$iv487 = 0, $indvars$iv487$in = 0, $iter$0159$i$i = 0, $j$0$ph = 0, $j155$0448 = 0, $j25$1$i425 = 0, $j25$2$i429 = 0, $j25$3$i441 = 0, $j25$4$i439 = 0, $j25$5$i437 = 0, $j25$6$i435 = 0, $j333$0390 = 0, $j414$0372 = 0, $j414$0372$us = 0, $j98$0$lcssa = 0, $j98$0458 = 0, $k$0$i$lcssa = 0, $k$1$i$lcssa = 0, $k$1$i426 = 0;
 var $k$1414 = 0, $k$2444 = 0, $k$3446 = 0, $k429$0366$us = 0, $k429$1369 = 0, $k429$1369$us = 0, $l30 = 0, $l356 = 0, $label = 0, $label$i = 0, $label261 = 0, $label66 = 0, $mae$0$i355 = 0.0, $mae$1$i$lcssa = 0.0, $mae$1$i348 = 0.0, $mae$2$i = 0.0, $mul = 0, $mul$i = 0, $mul$i$i = 0, $mul101$i$i = 0.0;
 var $mul102$i$i = 0.0, $mul104$i$i = 0.0, $mul105$i$i = 0.0, $mul111$i$i = 0.0, $mul115$i$i = 0.0, $mul116$i$i = 0.0, $mul118 = 0.0, $mul119$i$i = 0.0, $mul119$us$i$i = 0.0, $mul121$i$i = 0.0, $mul121$us$i$i = 0.0, $mul127$us$i$i = 0.0, $mul132$sink$us$i$i = 0.0, $mul132$sink$v$us$i$i = 0.0, $mul133 = 0, $mul134 = 0, $mul143$i = 0.0, $mul144 = 0, $mul152$i$i = 0.0, $mul152$us$i$i = 0.0;
 var $mul153$i$i = 0.0, $mul153$us$i$i = 0.0, $mul16$i = 0.0, $mul167 = 0, $mul171 = 0, $mul20$i = 0, $mul22$i$i = 0.0, $mul23$i = 0, $mul259 = 0, $mul27$sink$i$i = 0.0, $mul27$sink$v$i$i = 0.0, $mul272 = 0, $mul274 = 0, $mul31$i = 0, $mul32 = 0, $mul324 = 0, $mul34$i = 0, $mul357 = 0, $mul381 = 0, $mul397 = 0;
 var $mul404 = 0, $mul478360 = 0, $mul53$i$i = 0.0, $mul67 = 0, $mul7$i = 0.0, $mul76$i$i = 0.0, $mul79$i$i = 0.0, $mul8$i = 0.0, $mul80$i$i = 0.0, $mul84$i$i = 0.0, $mul86 = 0, $mul89$i$i = 0.0, $nSV = 0, $nSV22$0$lcssa = 0, $nSV22$0345 = 0, $nSV22$1 = 0, $nSV328 = 0, $nSV332$0$lcssa = 0, $nSV332$0389 = 0, $nSV332$1 = 0;
 var $n_count$0$i$lcssa = 0, $n_count$0$i431 = 0, $n_count$1$i = 0, $newf$0$lcssa$lcssa$i$i = 0.0, $newf$0156$us$i$i = 0.0, $newf$1$us$i$i = 0.0, $not$cmp26 = 0, $not$cmp76$i = 0, $nr_class = 0, $nr_class258 = 0, $nr_class65 = 0, $nr_weight = 0, $nr_weight$i = 0, $or$cond = 0, $or$cond1$i = 0, $or$cond2$i = 0, $p$0$i$i = 0.0, $p$0452 = 0, $p$1$lcssa = 0, $p$1449 = 0;
 var $p$2384 = 0, $p$3 = 0, $p$4375 = 0, $p$5371 = 0, $p$5371$us = 0, $p_count$0$i$lcssa = 0, $p_count$0$i430 = 0, $p_count$1$i = 0, $prior0$0$lcssa$i$i = 0.0, $prior0$0169$i$i = 0.0, $prior0$1$i$i = 0.0, $prior1$0$lcssa$i$i = 0.0, $prior1$0170$i$i = 0.0, $prior1$1$i$i = 0.0, $probA = 0, $probA136$0 = 0, $probA298 = 0, $probA321 = 0, $probB = 0, $probB137$0 = 0;
 var $probB304 = 0, $probB322 = 0, $probability = 0, $probability$i = 0, $probability$i314 = 0, $probability138 = 0, $q$0$i$i = 0.0, $q$0365$us = 0, $q$1$us = 0, $q$2368 = 0, $q$2368$us = 0, $q$3 = 0, $q$3$us = 0, $rem$i = 0, $rho = 0, $rho19 = 0, $rho276 = 0, $rho284 = 0, $start = 0, $stepsize$0$lcssa138$i$i = 0.0;
 var $stepsize$0139$i$i = 0.0, $stepsize$0158$i$i = 0.0, $stepsize$0158$us$i$i = 0.0, $sub = 0, $sub$i = 0.0, $sub$i$i = 0.0, $sub$i308 = 0, $sub$sink$i$i = 0.0, $sub103$i$i = 0.0, $sub106$i$i = 0.0, $sub107$i$i = 0.0, $sub113$i$i = 0.0, $sub133$sink$us$i$i = 0.0, $sub133$us$i$i = 0.0, $sub141$us$i$i = 0.0, $sub26$i = 0, $sub271 = 0, $sub27108$i = 0, $sub28$i = 0, $sub35$i$i = 0.0;
 var $sub387 = 0, $sub401 = 0, $sub441$us = 0, $sub477359 = 0, $sub57$i$i = 0.0, $sub87$i$i = 0.0, $sub_prob = 0, $subparam$i = 0, $subprob$i = 0, $sv_coef = 0, $sv_coef399 = 0, $sv_indices = 0, $sv_indices362 = 0, $switch = 0, $switch296 = 0, $tobool = 0, $tobool139 = 0, $tobool200 = 0, $tobool215 = 0, $tobool234 = 0;
 var $tobool291 = 0, $tobool367 = 0, $tobool435$us = 0, $tobool455 = 0, $tobool455$us = 0, $total_sv$0$lcssa = 0, $total_sv$0394 = 0, $total_sv$1$lcssa = 0, $total_sv$1388 = 0, $total_sv$2 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer6 = 0, $vararg_buffer8 = 0, $weight = 0, $weight$i = 0, $weight_label = 0, $weight_label$i = 0;
 var $x = 0, $x$i = 0, $x169 = 0, $x79 = 0, $y = 0, $y$i = 0, $y$i313 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $vararg_buffer10 = sp + 232|0;
 $vararg_buffer8 = sp + 224|0;
 $vararg_buffer6 = sp + 216|0;
 $vararg_buffer3 = sp + 208|0;
 $vararg_buffer1 = sp + 200|0;
 $vararg_buffer = sp + 192|0;
 $subprob$i = sp + 96|0;
 $subparam$i = sp;
 $nr_class65 = sp + 260|0;
 $label66 = sp + 256|0;
 $start = sp + 252|0;
 $count = sp + 248|0;
 $sub_prob = sp + 236|0;
 $call = (_malloc(144)|0);
 ; store8($call,load8($param,8),8); store8($call+8 | 0,load8($param+8 | 0,8),8); store8($call+16 | 0,load8($param+16 | 0,8),8); store8($call+24 | 0,load8($param+24 | 0,8),8); store8($call+32 | 0,load8($param+32 | 0,8),8); store8($call+40 | 0,load8($param+40 | 0,8),8); store8($call+48 | 0,load8($param+48 | 0,8),8); store8($call+56 | 0,load8($param+56 | 0,8),8); store8($call+64 | 0,load8($param+64 | 0,8),8); store8($call+72 | 0,load8($param+72 | 0,8),8); store8($call+80 | 0,load8($param+80 | 0,8),8); store8($call+88 | 0,load8($param+88 | 0,8),8);
 $free_sv = ((($call)) + 136|0);
 store4($free_sv,0);
 $0 = load4($param);
 $$off = (($0) + -2)|0;
 $switch = ($$off>>>0)<(3);
 if ($switch) {
  $nr_class = ((($call)) + 96|0);
  store4($nr_class,2);
  $label = ((($call)) + 128|0);
  store4($label,0);
  $nSV = ((($call)) + 132|0);
  store4($nSV,0);
  $probA = ((($call)) + 116|0);
  store4($probA,0);
  $probB = ((($call)) + 120|0);
  store4($probB,0);
  $call7 = (_malloc(4)|0);
  $sv_coef = ((($call)) + 108|0);
  store4($sv_coef,$call7);
  $probability = ((($param)) + 92|0);
  $1 = load4($probability);
  $tobool = ($1|0)!=(0);
  $$off295 = (($0) + -3)|0;
  $switch296 = ($$off295>>>0)<(2);
  $or$cond = $tobool & $switch296;
  if ($or$cond) {
   $call14 = (_malloc(8)|0);
   store4($probA,$call14);
   $2 = load4($prob);
   $mul$i = $2 << 3;
   $call$i = (_malloc($mul$i)|0);
   ; store8($subprob$i,load8($param,8),8); store8($subprob$i+8 | 0,load8($param+8 | 0,8),8); store8($subprob$i+16 | 0,load8($param+16 | 0,8),8); store8($subprob$i+24 | 0,load8($param+24 | 0,8),8); store8($subprob$i+32 | 0,load8($param+32 | 0,8),8); store8($subprob$i+40 | 0,load8($param+40 | 0,8),8); store8($subprob$i+48 | 0,load8($param+48 | 0,8),8); store8($subprob$i+56 | 0,load8($param+56 | 0,8),8); store8($subprob$i+64 | 0,load8($param+64 | 0,8),8); store8($subprob$i+72 | 0,load8($param+72 | 0,8),8); store8($subprob$i+80 | 0,load8($param+80 | 0,8),8); store8($subprob$i+88 | 0,load8($param+88 | 0,8),8);
   $probability$i = ((($subprob$i)) + 92|0);
   store4($probability$i,0);
   _svm_cross_validation($prob,$subprob$i,5,$call$i);
   $3 = load4($prob);
   $cmp$i354 = ($3|0)>(0);
   if ($cmp$i354) {
    $y$i = ((($prob)) + 4|0);
    $4 = load4($y$i);
    $i$0$i356 = 0;$mae$0$i355 = 0.0;
    while(1) {
     $arrayidx$i = (($4) + ($i$0$i356<<3)|0);
     $5 = loadd($arrayidx$i);
     $arrayidx2$i = (($call$i) + ($i$0$i356<<3)|0);
     $6 = loadd($arrayidx2$i);
     $sub$i = $5 - $6;
     stored($arrayidx2$i,$sub$i);
     $call5$i = (+Math_abs((+$sub$i)));
     $add$i = $mae$0$i355 + $call5$i;
     $inc$i = (($i$0$i356) + 1)|0;
     $cmp$i = ($inc$i|0)<($3|0);
     if ($cmp$i) {
      $i$0$i356 = $inc$i;$mae$0$i355 = $add$i;
     } else {
      break;
     }
    }
    $conv$i = (+($3|0));
    $div$i = $add$i / $conv$i;
    if ($cmp$i354) {
     $mul7$i = $div$i * 2.0;
     $mul8$i = $div$i * $mul7$i;
     $call9$i = (+Math_sqrt((+$mul8$i)));
     $mul16$i = $call9$i * 5.0;
     $count$0$i350 = 0;$i$1$i349 = 0;$mae$1$i348 = 0.0;
     while(1) {
      $arrayidx14$i = (($call$i) + ($i$1$i349<<3)|0);
      $7 = loadd($arrayidx14$i);
      $call15$i = (+Math_abs((+$7)));
      $cmp17$i = $call15$i > $mul16$i;
      $add21$i = $mae$1$i348 + $call15$i;
      $mae$2$i = $cmp17$i ? $mae$1$i348 : $add21$i;
      $add18$i = $cmp17$i&1;
      $count$1$i = (($add18$i) + ($count$0$i350))|0;
      $inc23$i = (($i$1$i349) + 1)|0;
      $cmp12$i = ($inc23$i|0)<($3|0);
      if ($cmp12$i) {
       $count$0$i350 = $count$1$i;$i$1$i349 = $inc23$i;$mae$1$i348 = $mae$2$i;
      } else {
       $count$0$i$lcssa = $count$1$i;$mae$1$i$lcssa = $mae$2$i;
       break;
      }
     }
    } else {
     $count$0$i$lcssa = 0;$mae$1$i$lcssa = 0.0;
    }
   } else {
    $count$0$i$lcssa = 0;$mae$1$i$lcssa = 0.0;
   }
   $sub26$i = (($3) - ($count$0$i$lcssa))|0;
   $conv27$i = (+($sub26$i|0));
   $div28$i = $mae$1$i$lcssa / $conv27$i;
   stored($vararg_buffer,$div28$i);
   __ZL4infoPKcz(2653,$vararg_buffer);
   _free($call$i);
   $8 = load4($probA);
   stored($8,$div28$i);
  }
  __ZL13svm_train_onePK11svm_problemPK13svm_parameterdd($subprob$i,$prob,$param,0.0,0.0);
  $call18 = (_malloc(8)|0);
  $rho = ((($call)) + 112|0);
  store4($rho,$call18);
  $rho19 = ((($subprob$i)) + 8|0);
  $9 = loadd($rho19);
  stored($call18,$9);
  $10 = load4($prob);
  $cmp23343 = ($10|0)>(0);
  $11 = load4($subprob$i);
  if ($cmp23343) {
   $i$0344 = 0;$nSV22$0345 = 0;
   while(1) {
    $arrayidx24 = (($11) + ($i$0344<<3)|0);
    $12 = loadd($arrayidx24);
    $not$cmp26 = ($12 == $12) & (0.0 == 0.0) &($12 != 0.0);
    $inc = $not$cmp26&1;
    $nSV22$1 = (($inc) + ($nSV22$0345))|0;
    $inc29 = (($i$0344) + 1)|0;
    $cmp23 = ($inc29|0)<($10|0);
    if ($cmp23) {
     $i$0344 = $inc29;$nSV22$0345 = $nSV22$1;
    } else {
     $nSV22$0$lcssa = $nSV22$1;
     break;
    }
   }
  } else {
   $nSV22$0$lcssa = 0;
  }
  $l30 = ((($call)) + 100|0);
  store4($l30,$nSV22$0$lcssa);
  $mul = $nSV22$0$lcssa << 2;
  $call31 = (_malloc($mul)|0);
  $SV = ((($call)) + 104|0);
  store4($SV,$call31);
  $mul32 = $nSV22$0$lcssa << 3;
  $call33 = (_malloc($mul32)|0);
  $13 = load4($sv_coef);
  store4($13,$call33);
  $call37 = (_malloc($mul)|0);
  $sv_indices = ((($call)) + 124|0);
  store4($sv_indices,$call37);
  $x = ((($prob)) + 8|0);
  $14 = $10;$i$1$ph = 0;$j$0$ph = 0;
  L19: while(1) {
   $i$1 = $i$1$ph;
   while(1) {
    $cmp40 = ($i$1|0)<($14|0);
    if (!($cmp40)) {
     break L19;
    }
    $arrayidx43 = (($11) + ($i$1<<3)|0);
    $15 = loadd($arrayidx43);
    $cmp45 = ($15 != $15) | (0.0 != 0.0) |($15 == 0.0);
    $add = (($i$1) + 1)|0;
    if ($cmp45) {
     $i$1 = $add;
    } else {
     break;
    }
   }
   $16 = load4($x);
   $arrayidx47 = (($16) + ($i$1<<2)|0);
   $17 = load4($arrayidx47);
   $18 = load4($SV);
   $arrayidx49 = (($18) + ($j$0$ph<<2)|0);
   store4($arrayidx49,$17);
   $19 = load4($sv_coef);
   $20 = load4($19);
   $arrayidx54 = (($20) + ($j$0$ph<<3)|0);
   stored($arrayidx54,$15);
   $21 = load4($sv_indices);
   $arrayidx56 = (($21) + ($j$0$ph<<2)|0);
   store4($arrayidx56,$add);
   $inc57 = (($j$0$ph) + 1)|0;
   $$pre509 = load4($prob);
   $14 = $$pre509;$i$1$ph = $add;$j$0$ph = $inc57;
  }
  _free($11);
  STACKTOP = sp;return ($call|0);
 }
 $22 = load4($prob);
 store4($label66,0);
 store4($start,0);
 store4($count,0);
 $mul67 = $22 << 2;
 $call68 = (_malloc($mul67)|0);
 __ZL17svm_group_classesPK11svm_problemPiPS2_S3_S3_S2_($prob,$nr_class65,$label66,$start,$count,$call68);
 $23 = load4($nr_class65);
 $cmp69 = ($23|0)==(1);
 if ($cmp69) {
  __ZL4infoPKcz(2775,$vararg_buffer1);
 }
 $call74 = (_malloc($mul67)|0);
 $cmp77467 = ($22|0)>(0);
 if ($cmp77467) {
  $x79 = ((($prob)) + 8|0);
  $24 = load4($x79);
  $i75$0468 = 0;
  while(1) {
   $arrayidx80 = (($call68) + ($i75$0468<<2)|0);
   $25 = load4($arrayidx80);
   $arrayidx81 = (($24) + ($25<<2)|0);
   $26 = load4($arrayidx81);
   $arrayidx82 = (($call74) + ($i75$0468<<2)|0);
   store4($arrayidx82,$26);
   $inc84 = (($i75$0468) + 1)|0;
   $exitcond502 = ($inc84|0)==($22|0);
   if ($exitcond502) {
    break;
   } else {
    $i75$0468 = $inc84;
   }
  }
 }
 $mul86 = $23 << 3;
 $call87 = (_malloc($mul86)|0);
 $cmp89465 = ($23|0)>(0);
 if ($cmp89465) {
  $C = ((($param)) + 48|0);
  $27 = loadd($C);
  $i75$1466 = 0;
  while(1) {
   $arrayidx91 = (($call87) + ($i75$1466<<3)|0);
   stored($arrayidx91,$27);
   $inc93 = (($i75$1466) + 1)|0;
   $cmp89 = ($inc93|0)<($23|0);
   if ($cmp89) {
    $i75$1466 = $inc93;
   } else {
    break;
   }
  }
 }
 $nr_weight = ((($param)) + 56|0);
 $28 = load4($nr_weight);
 $cmp96463 = ($28|0)>(0);
 if ($cmp96463) {
  $weight_label = ((($param)) + 60|0);
  $29 = load4(1452);
  $weight = ((($param)) + 64|0);
  $30 = load4($label66);
  $182 = $28;$i75$2464 = 0;
  while(1) {
   L45: do {
    if ($cmp89465) {
     $31 = load4($weight_label);
     $arrayidx102 = (($31) + ($i75$2464<<2)|0);
     $32 = load4($arrayidx102);
     $j98$0458 = 0;
     while(1) {
      $arrayidx103 = (($30) + ($j98$0458<<2)|0);
      $33 = load4($arrayidx103);
      $cmp104 = ($32|0)==($33|0);
      if ($cmp104) {
       $j98$0$lcssa = $j98$0458;
       break L45;
      }
      $inc108 = (($j98$0458) + 1)|0;
      $cmp100 = ($inc108|0)<($23|0);
      if ($cmp100) {
       $j98$0458 = $inc108;
      } else {
       $j98$0$lcssa = $inc108;
       break;
      }
     }
    } else {
     $j98$0$lcssa = 0;
    }
   } while(0);
   $cmp110 = ($j98$0$lcssa|0)==($23|0);
   if ($cmp110) {
    $34 = load4($weight_label);
    $arrayidx113 = (($34) + ($i75$2464<<2)|0);
    $35 = load4($arrayidx113);
    store4($vararg_buffer3,$35);
    (_fprintf($29,2842,$vararg_buffer3)|0);
    $$pre = load4($nr_weight);
    $39 = $$pre;
   } else {
    $36 = load4($weight);
    $arrayidx116 = (($36) + ($i75$2464<<3)|0);
    $37 = loadd($arrayidx116);
    $arrayidx117 = (($call87) + ($j98$0$lcssa<<3)|0);
    $38 = loadd($arrayidx117);
    $mul118 = $37 * $38;
    stored($arrayidx117,$mul118);
    $39 = $182;
   }
   $inc121 = (($i75$2464) + 1)|0;
   $cmp96 = ($inc121|0)<($39|0);
   if ($cmp96) {
    $182 = $39;$i75$2464 = $inc121;
   } else {
    break;
   }
  }
 }
 $call124 = (_malloc($22)|0);
 if ($cmp77467) {
  _memset(($call124|0),0,($22|0))|0;
 }
 $sub = (($23) + -1)|0;
 $mul133 = Math_imul($sub, $23)|0;
 $div = (($mul133|0) / 2)&-1;
 $mul134 = $div << 4;
 $call135 = (_malloc($mul134)|0);
 $probability138 = ((($param)) + 92|0);
 $40 = load4($probability138);
 $tobool139 = ($40|0)==(0);
 if ($tobool139) {
  $176 = 0;$177 = 0;$probA136$0 = 0;$probB137$0 = 0;
 } else {
  $mul144 = $div << 3;
  $call145 = (_malloc($mul144)|0);
  $call150 = (_malloc($mul144)|0);
  $176 = $call145;$177 = $call150;$probA136$0 = $call145;$probB137$0 = $call150;
 }
 if ($cmp89465) {
  $41 = load4($start);
  $42 = load4($count);
  $x169 = ((($sub_prob)) + 8|0);
  $y = ((($sub_prob)) + 4|0);
  $x$i = ((($subprob$i)) + 8|0);
  $y$i313 = ((($subprob$i)) + 4|0);
  $probability$i314 = ((($subparam$i)) + 92|0);
  $C$i = ((($subparam$i)) + 48|0);
  $nr_weight$i = ((($subparam$i)) + 56|0);
  $weight_label$i = ((($subparam$i)) + 60|0);
  $weight$i = ((($subparam$i)) + 64|0);
  $43 = load4($nr_class65);
  $45 = $23;$i75$4453 = 0;$p$0452 = 0;
  while(1) {
   $add156 = (($i75$4453) + 1)|0;
   $cmp158447 = ($add156|0)<($45|0);
   if ($cmp158447) {
    $arrayidx160 = (($41) + ($i75$4453<<2)|0);
    $arrayidx162 = (($42) + ($i75$4453<<2)|0);
    $arrayidx207 = (($call87) + ($i75$4453<<3)|0);
    $j155$0448 = $add156;$p$1449 = $p$0452;
    while(1) {
     $46 = load4($arrayidx160);
     $arrayidx161 = (($41) + ($j155$0448<<2)|0);
     $47 = load4($arrayidx161);
     $48 = load4($arrayidx162);
     $arrayidx163 = (($42) + ($j155$0448<<2)|0);
     $49 = load4($arrayidx163);
     $add164 = (($49) + ($48))|0;
     store4($sub_prob,$add164);
     $mul167 = $add164 << 2;
     $call168 = (_malloc($mul167)|0);
     store4($x169,$call168);
     $mul171 = $add164 << 3;
     $call172 = (_malloc($mul171)|0);
     store4($y,$call172);
     $cmp174411 = ($48|0)>(0);
     if ($cmp174411) {
      $arrayidx177555 = (($call74) + ($46<<2)|0);
      $50 = load4($arrayidx177555);
      store4($call168,$50);
      $51 = load4($y);
      stored($51,1.0);
      $exitcond491558 = ($48|0)==(1);
      if (!($exitcond491558)) {
       $inc183559 = 1;
       while(1) {
        $$pre503 = load4($x169);
        $add176 = (($inc183559) + ($46))|0;
        $arrayidx177 = (($call74) + ($add176<<2)|0);
        $52 = load4($arrayidx177);
        $arrayidx179 = (($$pre503) + ($inc183559<<2)|0);
        store4($arrayidx179,$52);
        $53 = load4($y);
        $arrayidx181 = (($53) + ($inc183559<<3)|0);
        stored($arrayidx181,1.0);
        $inc183 = (($inc183559) + 1)|0;
        $exitcond491 = ($inc183|0)==($48|0);
        if ($exitcond491) {
         break;
        } else {
         $inc183559 = $inc183;
        }
       }
      }
     }
     $cmp186413 = ($49|0)>(0);
     if ($cmp186413) {
      $k$1414 = 0;
      while(1) {
       $add188 = (($k$1414) + ($47))|0;
       $arrayidx189 = (($call74) + ($add188<<2)|0);
       $54 = load4($arrayidx189);
       $55 = load4($x169);
       $add191 = (($k$1414) + ($48))|0;
       $arrayidx192 = (($55) + ($add191<<2)|0);
       store4($arrayidx192,$54);
       $56 = load4($y);
       $arrayidx195 = (($56) + ($add191<<3)|0);
       stored($arrayidx195,-1.0);
       $inc197 = (($k$1414) + 1)|0;
       $exitcond492 = ($inc197|0)==($49|0);
       if ($exitcond492) {
        break;
       } else {
        $k$1414 = $inc197;
       }
      }
     }
     $57 = load4($probability138);
     $tobool200 = ($57|0)==(0);
     if ($tobool200) {
      $$pre511 = (($call87) + ($j155$0448<<3)|0);
      $arrayidx208$pre$phiZ2D = $$pre511;
     } else {
      $58 = loadd($arrayidx207);
      $arrayidx203 = (($call87) + ($j155$0448<<3)|0);
      $59 = loadd($arrayidx203);
      $arrayidx204 = (($probA136$0) + ($p$1449<<3)|0);
      $arrayidx205 = (($probB137$0) + ($p$1449<<3)|0);
      $call$i299 = (_malloc($mul167)|0);
      $call3$i = (_malloc($mul171)|0);
      $cmp$i301415 = ($add164|0)>(0);
      if ($cmp$i301415) {
       $i$0$i300416 = 0;
       while(1) {
        $arrayidx$i303 = (($call$i299) + ($i$0$i300416<<2)|0);
        store4($arrayidx$i303,$i$0$i300416);
        $inc$i304 = (($i$0$i300416) + 1)|0;
        $cmp$i301 = ($inc$i304|0)<($add164|0);
        if ($cmp$i301) {
         $i$0$i300416 = $inc$i304;
        } else {
         break;
        }
       }
       if ($cmp$i301415) {
        $i$1$i306418 = 0;
        while(1) {
         $call9$i307 = (_rand()|0);
         $60 = load4($sub_prob);
         $sub$i308 = (($60) - ($i$1$i306418))|0;
         $rem$i = (($call9$i307|0) % ($sub$i308|0))&-1;
         $add$i309 = (($rem$i) + ($i$1$i306418))|0;
         $arrayidx11$i = (($call$i299) + ($i$1$i306418<<2)|0);
         $arrayidx12$i = (($call$i299) + ($add$i309<<2)|0);
         $61 = load4($arrayidx11$i);
         $62 = load4($arrayidx12$i);
         store4($arrayidx11$i,$62);
         store4($arrayidx12$i,$61);
         $inc14$i = (($i$1$i306418) + 1)|0;
         $cmp7$i = ($inc14$i|0)<($60|0);
         if ($cmp7$i) {
          $i$1$i306418 = $inc14$i;
         } else {
          $63 = $60;$i$2$i442 = 0;
          break;
         }
        }
       } else {
        $63 = $add164;$i$2$i442 = 0;
       }
      } else {
       $63 = $add164;$i$2$i442 = 0;
      }
      while(1) {
       $mul20$i = Math_imul($i$2$i442, $63)|0;
       $div$i311 = (($mul20$i|0) / 5)&-1;
       $add21$i312 = (($i$2$i442) + 1)|0;
       $mul23$i = Math_imul($add21$i312, $63)|0;
       $div24$i = (($mul23$i|0) / 5)&-1;
       $sub27108$i = (($div$i311) - ($div24$i))|0;
       $sub28$i = (($63) + ($sub27108$i))|0;
       store4($subprob$i,$sub28$i);
       $mul31$i = $sub28$i << 2;
       $call32$i = (_malloc($mul31$i)|0);
       store4($x$i,$call32$i);
       $mul34$i = $sub28$i << 3;
       $call35$i = (_malloc($mul34$i)|0);
       store4($y$i313,$call35$i);
       $cmp37$i420 = ($mul20$i|0)>(4);
       do {
        if ($cmp37$i420) {
         $64 = load4($x169);
         $65 = load4($call$i299);
         $arrayidx41$i561 = (($64) + ($65<<2)|0);
         $66 = load4($arrayidx41$i561);
         store4($call32$i,$66);
         $67 = load4($y);
         $arrayidx46$i563 = (($67) + ($65<<3)|0);
         $68 = loadd($arrayidx46$i563);
         $69 = load4($y$i313);
         stored($69,$68);
         $cmp37$i565 = ($mul20$i|0)>(9);
         if ($cmp37$i565) {
          $inc49$i566 = 1;
         } else {
          $183 = $69;$k$0$i$lcssa = 1;
          break;
         }
         while(1) {
          $$pre504 = load4($x$i);
          $70 = load4($x169);
          $arrayidx40$i = (($call$i299) + ($inc49$i566<<2)|0);
          $71 = load4($arrayidx40$i);
          $arrayidx41$i = (($70) + ($71<<2)|0);
          $72 = load4($arrayidx41$i);
          $arrayidx43$i = (($$pre504) + ($inc49$i566<<2)|0);
          store4($arrayidx43$i,$72);
          $73 = load4($y);
          $arrayidx46$i = (($73) + ($71<<3)|0);
          $74 = loadd($arrayidx46$i);
          $75 = load4($y$i313);
          $arrayidx48$i = (($75) + ($inc49$i566<<3)|0);
          stored($arrayidx48$i,$74);
          $inc49$i = (($inc49$i566) + 1)|0;
          $cmp37$i = ($inc49$i|0)<($div$i311|0);
          if ($cmp37$i) {
           $inc49$i566 = $inc49$i;
          } else {
           $183 = $75;$k$0$i$lcssa = $inc49$i;
           break;
          }
         }
        } else {
         $183 = $call35$i;$k$0$i$lcssa = 0;
        }
       } while(0);
       $cmp55$i424 = ($div24$i|0)<($63|0);
       if ($cmp55$i424) {
        $j25$1$i425 = $div24$i;$k$1$i426 = $k$0$i$lcssa;
        while(1) {
         $76 = load4($x169);
         $arrayidx58$i = (($call$i299) + ($j25$1$i425<<2)|0);
         $77 = load4($arrayidx58$i);
         $arrayidx59$i = (($76) + ($77<<2)|0);
         $78 = load4($arrayidx59$i);
         $79 = load4($x$i);
         $arrayidx61$i = (($79) + ($k$1$i426<<2)|0);
         store4($arrayidx61$i,$78);
         $80 = load4($y);
         $arrayidx64$i = (($80) + ($77<<3)|0);
         $81 = loadd($arrayidx64$i);
         $82 = load4($y$i313);
         $arrayidx66$i = (($82) + ($k$1$i426<<3)|0);
         stored($arrayidx66$i,$81);
         $inc67$i = (($k$1$i426) + 1)|0;
         $inc69$i = (($j25$1$i425) + 1)|0;
         $cmp55$i = ($inc69$i|0)<($63|0);
         if ($cmp55$i) {
          $j25$1$i425 = $inc69$i;$k$1$i426 = $inc67$i;
         } else {
          $83 = $82;$k$1$i$lcssa = $inc67$i;
          break;
         }
        }
       } else {
        $83 = $183;$k$1$i$lcssa = $k$0$i$lcssa;
       }
       $cmp72$i428 = ($k$1$i$lcssa|0)>(0);
       if ($cmp72$i428) {
        $j25$2$i429 = 0;$n_count$0$i431 = 0;$p_count$0$i430 = 0;
        while(1) {
         $arrayidx75$i = (($83) + ($j25$2$i429<<3)|0);
         $84 = loadd($arrayidx75$i);
         $cmp76$i = $84 > 0.0;
         $inc77$i = $cmp76$i&1;
         $p_count$1$i = (($inc77$i) + ($p_count$0$i430))|0;
         $not$cmp76$i = $cmp76$i ^ 1;
         $inc78$i = $not$cmp76$i&1;
         $n_count$1$i = (($inc78$i) + ($n_count$0$i431))|0;
         $inc80$i = (($j25$2$i429) + 1)|0;
         $exitcond493 = ($inc80$i|0)==($k$1$i$lcssa|0);
         if ($exitcond493) {
          $n_count$0$i$lcssa = $n_count$1$i;$p_count$0$i$lcssa = $p_count$1$i;
          break;
         } else {
          $j25$2$i429 = $inc80$i;$n_count$0$i431 = $n_count$1$i;$p_count$0$i430 = $p_count$1$i;
         }
        }
       } else {
        $n_count$0$i$lcssa = 0;$p_count$0$i$lcssa = 0;
       }
       $cmp82$i = ($p_count$0$i$lcssa|0)==(0);
       $85 = $n_count$0$i$lcssa | $p_count$0$i$lcssa;
       $86 = ($85|0)==(0);
       L103: do {
        if ($86) {
         $cmp86$i440 = ($div$i311|0)<($div24$i|0);
         if ($cmp86$i440) {
          $j25$3$i441 = $div$i311;
         } else {
          break;
         }
         while(1) {
          $arrayidx88$i = (($call$i299) + ($j25$3$i441<<2)|0);
          $87 = load4($arrayidx88$i);
          $arrayidx89$i = (($call3$i) + ($87<<3)|0);
          stored($arrayidx89$i,0.0);
          $inc91$i = (($j25$3$i441) + 1)|0;
          $exitcond497 = ($inc91$i|0)==($div24$i|0);
          if ($exitcond497) {
           break;
          } else {
           $j25$3$i441 = $inc91$i;
          }
         }
        } else {
         $cmp83$i = ($n_count$0$i$lcssa|0)==(0);
         $cmp94$i = ($p_count$0$i$lcssa|0)>(0);
         $or$cond1$i = $cmp94$i & $cmp83$i;
         if ($or$cond1$i) {
          $cmp99$i438 = ($div$i311|0)<($div24$i|0);
          if ($cmp99$i438) {
           $j25$4$i439 = $div$i311;
          } else {
           break;
          }
          while(1) {
           $arrayidx101$i = (($call$i299) + ($j25$4$i439<<2)|0);
           $88 = load4($arrayidx101$i);
           $arrayidx102$i = (($call3$i) + ($88<<3)|0);
           stored($arrayidx102$i,1.0);
           $inc104$i = (($j25$4$i439) + 1)|0;
           $exitcond496 = ($inc104$i|0)==($div24$i|0);
           if ($exitcond496) {
            break L103;
           } else {
            $j25$4$i439 = $inc104$i;
           }
          }
         }
         $cmp109$i = ($n_count$0$i$lcssa|0)>(0);
         $or$cond2$i = $cmp82$i & $cmp109$i;
         if ($or$cond2$i) {
          $cmp112$i436 = ($div$i311|0)<($div24$i|0);
          if ($cmp112$i436) {
           $j25$5$i437 = $div$i311;
          } else {
           break;
          }
          while(1) {
           $arrayidx114$i = (($call$i299) + ($j25$5$i437<<2)|0);
           $89 = load4($arrayidx114$i);
           $arrayidx115$i = (($call3$i) + ($89<<3)|0);
           stored($arrayidx115$i,-1.0);
           $inc117$i = (($j25$5$i437) + 1)|0;
           $exitcond495 = ($inc117$i|0)==($div24$i|0);
           if ($exitcond495) {
            break L103;
           } else {
            $j25$5$i437 = $inc117$i;
           }
          }
         }
         ; store8($subparam$i,load8($param,8),8); store8($subparam$i+8 | 0,load8($param+8 | 0,8),8); store8($subparam$i+16 | 0,load8($param+16 | 0,8),8); store8($subparam$i+24 | 0,load8($param+24 | 0,8),8); store8($subparam$i+32 | 0,load8($param+32 | 0,8),8); store8($subparam$i+40 | 0,load8($param+40 | 0,8),8); store8($subparam$i+48 | 0,load8($param+48 | 0,8),8); store8($subparam$i+56 | 0,load8($param+56 | 0,8),8); store8($subparam$i+64 | 0,load8($param+64 | 0,8),8); store8($subparam$i+72 | 0,load8($param+72 | 0,8),8); store8($subparam$i+80 | 0,load8($param+80 | 0,8),8); store8($subparam$i+88 | 0,load8($param+88 | 0,8),8);
         store4($probability$i314,0);
         stored($C$i,1.0);
         store4($nr_weight$i,2);
         $call120$i = (_malloc(8)|0);
         store4($weight_label$i,$call120$i);
         $call121$i = (_malloc(16)|0);
         store4($weight$i,$call121$i);
         store4($call120$i,1);
         $arrayidx125$i = ((($call120$i)) + 4|0);
         store4($arrayidx125$i,-1);
         stored($call121$i,$58);
         $arrayidx129$i = ((($call121$i)) + 8|0);
         stored($arrayidx129$i,$59);
         $call130$i = (_svm_train($subprob$i,$subparam$i)|0);
         $cmp132$i434 = ($div$i311|0)<($div24$i|0);
         if ($cmp132$i434) {
          $label$i = ((($call130$i)) + 128|0);
          $j25$6$i435 = $div$i311;
          while(1) {
           $90 = load4($x169);
           $arrayidx135$i = (($call$i299) + ($j25$6$i435<<2)|0);
           $91 = load4($arrayidx135$i);
           $arrayidx136$i = (($90) + ($91<<2)|0);
           $92 = load4($arrayidx136$i);
           $arrayidx138$i = (($call3$i) + ($91<<3)|0);
           (+_svm_predict_values($call130$i,$92,$arrayidx138$i));
           $93 = load4($label$i);
           $94 = load4($93);
           $conv$i315 = (+($94|0));
           $95 = loadd($arrayidx138$i);
           $mul143$i = $conv$i315 * $95;
           stored($arrayidx138$i,$mul143$i);
           $inc145$i = (($j25$6$i435) + 1)|0;
           $exitcond494 = ($inc145$i|0)==($div24$i|0);
           if ($exitcond494) {
            label = 76;
            break;
           } else {
            $j25$6$i435 = $inc145$i;
           }
          }
         } else {
          $cmp1$i$i = ($call130$i|0)==(0|0);
          if (!($cmp1$i$i)) {
           label = 76;
          }
         }
         if ((label|0) == 76) {
          label = 0;
          _svm_free_model_content($call130$i);
          _free($call130$i);
         }
         $96 = load4($weight_label$i);
         _free($96);
         $97 = load4($weight$i);
         _free($97);
        }
       } while(0);
       $98 = load4($x$i);
       _free($98);
       $99 = load4($y$i313);
       _free($99);
       $$pr = load4($sub_prob);
       $exitcond498 = ($add21$i312|0)==(5);
       if ($exitcond498) {
        break;
       } else {
        $63 = $$pr;$i$2$i442 = $add21$i312;
       }
      }
      $100 = load4($y);
      $cmp167$i$i = ($$pr|0)>(0);
      if ($cmp167$i$i) {
       $i$0168$i$i = 0;$prior0$0169$i$i = 0.0;$prior1$0170$i$i = 0.0;
       while(1) {
        $arrayidx$i$i = (($100) + ($i$0168$i$i<<3)|0);
        $101 = loadd($arrayidx$i$i);
        $cmp1$i109$i = $101 > 0.0;
        $add$i$i = $prior1$0170$i$i + 1.0;
        $add2$i$i = $prior0$0169$i$i + 1.0;
        $prior0$1$i$i = $cmp1$i109$i ? $prior0$0169$i$i : $add2$i$i;
        $prior1$1$i$i = $cmp1$i109$i ? $add$i$i : $prior1$0170$i$i;
        $inc$i$i = (($i$0168$i$i) + 1)|0;
        $exitcond189$i$i = ($inc$i$i|0)==($$pr|0);
        if ($exitcond189$i$i) {
         $prior0$0$lcssa$i$i = $prior0$1$i$i;$prior1$0$lcssa$i$i = $prior1$1$i$i;
         break;
        } else {
         $i$0168$i$i = $inc$i$i;$prior0$0169$i$i = $prior0$1$i$i;$prior1$0170$i$i = $prior1$1$i$i;
        }
       }
      } else {
       $prior0$0$lcssa$i$i = 0.0;$prior1$0$lcssa$i$i = 0.0;
      }
      $add3$i$i = $prior1$0$lcssa$i$i + 1.0;
      $add4$i$i = $prior1$0$lcssa$i$i + 2.0;
      $div$i$i = $add3$i$i / $add4$i$i;
      $add5$i$i = $prior0$0$lcssa$i$i + 2.0;
      $div6$i$i = 1.0 / $add5$i$i;
      $mul$i$i = $$pr << 3;
      $call$i$i = (_malloc($mul$i$i)|0);
      stored($arrayidx204,0.0);
      $add7$i$i = $prior0$0$lcssa$i$i + 1.0;
      $div9$i$i = $add7$i$i / $add3$i$i;
      $call10$i$i = (+_log($div9$i$i));
      stored($arrayidx205,$call10$i$i);
      if ($cmp167$i$i) {
       $102 = loadd($arrayidx204);
       $fval$0164$i$i = 0.0;$i$1163$i$i = 0;
       while(1) {
        $arrayidx14$i$i = (($100) + ($i$1163$i$i<<3)|0);
        $103 = loadd($arrayidx14$i$i);
        $cmp15$i$i = $103 > 0.0;
        $div$div6$i$i = $cmp15$i$i ? $div$i$i : $div6$i$i;
        $arrayidx19$sink$i$i = (($call$i$i) + ($i$1163$i$i<<3)|0);
        stored($arrayidx19$sink$i$i,$div$div6$i$i);
        $arrayidx21$i$i = (($call3$i) + ($i$1163$i$i<<3)|0);
        $104 = loadd($arrayidx21$i$i);
        $mul22$i$i = $102 * $104;
        $add23$i$i = $call10$i$i + $mul22$i$i;
        $cmp24$i$i = !($add23$i$i >= 0.0);
        $sub$i$i = -$add23$i$i;
        $sub35$i$i = $div$div6$i$i + -1.0;
        $sub$sink$i$i = $cmp24$i$i ? $add23$i$i : $sub$i$i;
        $mul27$sink$v$i$i = $cmp24$i$i ? $sub35$i$i : $div$div6$i$i;
        $mul27$sink$i$i = $add23$i$i * $mul27$sink$v$i$i;
        $call28$i$i = (+_exp($sub$sink$i$i));
        $add29$i$i = $call28$i$i + 1.0;
        $call30$i$i = (+_log($add29$i$i));
        $add31$i$i = $call30$i$i + $mul27$sink$i$i;
        $fval$1$i$i = $fval$0164$i$i + $add31$i$i;
        $inc44$i$i = (($i$1163$i$i) + 1)|0;
        $exitcond188$i$i = ($inc44$i$i|0)==($$pr|0);
        if ($exitcond188$i$i) {
         $107 = $call10$i$i;$fval$2160$i$i = $fval$1$i$i;$iter$0159$i$i = 0;
         break;
        } else {
         $fval$0164$i$i = $fval$1$i$i;$i$1163$i$i = $inc44$i$i;
        }
       }
      } else {
       $107 = $call10$i$i;$fval$2160$i$i = 0.0;$iter$0159$i$i = 0;
      }
      while(1) {
       if ($cmp167$i$i) {
        $105 = loadd($arrayidx204);
        $g1$0145$i$i = 0.0;$g2$0146$i$i = 0.0;$h11$0148$i$i = 9.9999999999999998E-13;$h21$0144$i$i = 0.0;$h22$0147$i$i = 9.9999999999999998E-13;$i$2149$i$i = 0;
        while(1) {
         $arrayidx52$i$i = (($call3$i) + ($i$2149$i$i<<3)|0);
         $106 = loadd($arrayidx52$i$i);
         $mul53$i$i = $105 * $106;
         $add54$i$i = $107 + $mul53$i$i;
         $cmp55$i$i = !($add54$i$i >= 0.0);
         if ($cmp55$i$i) {
          $call68$i$i = (+_exp($add54$i$i));
          $add69$i$i = $call68$i$i + 1.0;
          $div70$i$i = 1.0 / $add69$i$i;
          $div74$i$i = $call68$i$i / $add69$i$i;
          $p$0$i$i = $div70$i$i;$q$0$i$i = $div74$i$i;
         } else {
          $sub57$i$i = -$add54$i$i;
          $call58$i$i = (+_exp($sub57$i$i));
          $add61$i$i = $call58$i$i + 1.0;
          $div62$i$i = $call58$i$i / $add61$i$i;
          $div66$i$i = 1.0 / $add61$i$i;
          $p$0$i$i = $div62$i$i;$q$0$i$i = $div66$i$i;
         }
         $mul76$i$i = $q$0$i$i * $p$0$i$i;
         $mul79$i$i = $106 * $106;
         $mul80$i$i = $mul79$i$i * $mul76$i$i;
         $add81$i$i = $h11$0148$i$i + $mul80$i$i;
         $add82$i$i = $h22$0147$i$i + $mul76$i$i;
         $mul84$i$i = $106 * $mul76$i$i;
         $add85$i$i = $h21$0144$i$i + $mul84$i$i;
         $arrayidx86$i$i = (($call$i$i) + ($i$2149$i$i<<3)|0);
         $108 = loadd($arrayidx86$i$i);
         $sub87$i$i = $108 - $p$0$i$i;
         $mul89$i$i = $106 * $sub87$i$i;
         $add90$i$i = $g1$0145$i$i + $mul89$i$i;
         $add91$i$i = $g2$0146$i$i + $sub87$i$i;
         $inc93$i$i = (($i$2149$i$i) + 1)|0;
         $exitcond$i$i = ($inc93$i$i|0)==($$pr|0);
         if ($exitcond$i$i) {
          $g1$0$lcssa$i$i = $add90$i$i;$g2$0$lcssa$i$i = $add91$i$i;$h11$0$lcssa$i$i = $add81$i$i;$h21$0$lcssa$i$i = $add85$i$i;$h22$0$lcssa$i$i = $add82$i$i;
          break;
         } else {
          $g1$0145$i$i = $add90$i$i;$g2$0146$i$i = $add91$i$i;$h11$0148$i$i = $add81$i$i;$h21$0144$i$i = $add85$i$i;$h22$0147$i$i = $add82$i$i;$i$2149$i$i = $inc93$i$i;
         }
        }
       } else {
        $g1$0$lcssa$i$i = 0.0;$g2$0$lcssa$i$i = 0.0;$h11$0$lcssa$i$i = 9.9999999999999998E-13;$h21$0$lcssa$i$i = 0.0;$h22$0$lcssa$i$i = 9.9999999999999998E-13;
       }
       $call95$i$i = (+Math_abs((+$g1$0$lcssa$i$i)));
       $cmp96$i$i = $call95$i$i < 1.0000000000000001E-5;
       if ($cmp96$i$i) {
        $call97$i$i = (+Math_abs((+$g2$0$lcssa$i$i)));
        $cmp98$i$i = $call97$i$i < 1.0000000000000001E-5;
        if ($cmp98$i$i) {
         label = 104;
         break;
        }
       }
       $mul101$i$i = $h22$0$lcssa$i$i * $h11$0$lcssa$i$i;
       $mul102$i$i = $h21$0$lcssa$i$i * $h21$0$lcssa$i$i;
       $sub103$i$i = $mul101$i$i - $mul102$i$i;
       $mul104$i$i = $g1$0$lcssa$i$i * $h22$0$lcssa$i$i;
       $mul105$i$i = $h21$0$lcssa$i$i * $g2$0$lcssa$i$i;
       $sub106$i$i = $mul104$i$i - $mul105$i$i;
       $sub107$i$i = -$sub106$i$i;
       $div108$i$i = $sub107$i$i / $sub103$i$i;
       $109 = $h21$0$lcssa$i$i * $g1$0$lcssa$i$i;
       $mul111$i$i = $g2$0$lcssa$i$i * $h11$0$lcssa$i$i;
       $add112$i$i = $mul111$i$i - $109;
       $sub113$i$i = -$add112$i$i;
       $div114$i$i = $sub113$i$i / $sub103$i$i;
       $mul115$i$i = $g1$0$lcssa$i$i * $div108$i$i;
       $mul116$i$i = $g2$0$lcssa$i$i * $div114$i$i;
       $add117$i$i = $mul115$i$i + $mul116$i$i;
       $110 = loadd($arrayidx204);
       L150: do {
        if ($cmp167$i$i) {
         $stepsize$0158$us$i$i = 1.0;
         while(1) {
          $mul119$us$i$i = $div108$i$i * $stepsize$0158$us$i$i;
          $add120$us$i$i = $110 + $mul119$us$i$i;
          $mul121$us$i$i = $div114$i$i * $stepsize$0158$us$i$i;
          $add122$us$i$i = $107 + $mul121$us$i$i;
          $i$3155$us$i$i = 0;$newf$0156$us$i$i = 0.0;
          while(1) {
           $arrayidx126$us$i$i = (($call3$i) + ($i$3155$us$i$i<<3)|0);
           $111 = loadd($arrayidx126$us$i$i);
           $mul127$us$i$i = $add120$us$i$i * $111;
           $add128$us$i$i = $add122$us$i$i + $mul127$us$i$i;
           $cmp129$us$i$i = !($add128$us$i$i >= 0.0);
           $arrayidx131$us$i$i = (($call$i$i) + ($i$3155$us$i$i<<3)|0);
           $112 = loadd($arrayidx131$us$i$i);
           $sub133$us$i$i = -$add128$us$i$i;
           $sub141$us$i$i = $112 + -1.0;
           $sub133$sink$us$i$i = $cmp129$us$i$i ? $add128$us$i$i : $sub133$us$i$i;
           $mul132$sink$v$us$i$i = $cmp129$us$i$i ? $sub141$us$i$i : $112;
           $mul132$sink$us$i$i = $add128$us$i$i * $mul132$sink$v$us$i$i;
           $call134$us$i$i = (+_exp($sub133$sink$us$i$i));
           $add135$us$i$i = $call134$us$i$i + 1.0;
           $call136$us$i$i = (+_log($add135$us$i$i));
           $add137$us$i$i = $call136$us$i$i + $mul132$sink$us$i$i;
           $newf$1$us$i$i = $newf$0156$us$i$i + $add137$us$i$i;
           $inc150$us$i$i = (($i$3155$us$i$i) + 1)|0;
           $exitcond187$i$i = ($inc150$us$i$i|0)==($$pr|0);
           if ($exitcond187$i$i) {
            break;
           } else {
            $i$3155$us$i$i = $inc150$us$i$i;$newf$0156$us$i$i = $newf$1$us$i$i;
           }
          }
          $mul152$us$i$i = $stepsize$0158$us$i$i * 1.0E-4;
          $mul153$us$i$i = $add117$i$i * $mul152$us$i$i;
          $add154$us$i$i = $fval$2160$i$i + $mul153$us$i$i;
          $cmp155$us$i$i = $newf$1$us$i$i < $add154$us$i$i;
          if ($cmp155$us$i$i) {
           $add120$lcssa$i$i = $add120$us$i$i;$add122$lcssa$i$i = $add122$us$i$i;$newf$0$lcssa$lcssa$i$i = $newf$1$us$i$i;$stepsize$0$lcssa138$i$i = $stepsize$0158$us$i$i;
           label = 99;
           break L150;
          }
          $div158$us$i$i = $stepsize$0158$us$i$i * 0.5;
          $cmp118$us$i$i = !($div158$us$i$i >= 1.0E-10);
          if ($cmp118$us$i$i) {
           $184 = $107;$fval$3$i$i = $fval$2160$i$i;$stepsize$0139$i$i = $div158$us$i$i;
           break;
          } else {
           $stepsize$0158$us$i$i = $div158$us$i$i;
          }
         }
        } else {
         $stepsize$0158$i$i = 1.0;
         while(1) {
          $mul152$i$i = $stepsize$0158$i$i * 1.0E-4;
          $mul153$i$i = $add117$i$i * $mul152$i$i;
          $add154$i$i = $fval$2160$i$i + $mul153$i$i;
          $cmp155$i$i = $add154$i$i > 0.0;
          if ($cmp155$i$i) {
           break;
          }
          $div158$i$i = $stepsize$0158$i$i * 0.5;
          $cmp118$i$i = !($div158$i$i >= 1.0E-10);
          if ($cmp118$i$i) {
           $184 = $107;$fval$3$i$i = $fval$2160$i$i;$stepsize$0139$i$i = $div158$i$i;
           break L150;
          } else {
           $stepsize$0158$i$i = $div158$i$i;
          }
         }
         $mul121$i$i = $div114$i$i * $stepsize$0158$i$i;
         $add122$i$i = $107 + $mul121$i$i;
         $mul119$i$i = $div108$i$i * $stepsize$0158$i$i;
         $add120$i$i = $110 + $mul119$i$i;
         $add120$lcssa$i$i = $add120$i$i;$add122$lcssa$i$i = $add122$i$i;$newf$0$lcssa$lcssa$i$i = 0.0;$stepsize$0$lcssa138$i$i = $stepsize$0158$i$i;
         label = 99;
        }
       } while(0);
       if ((label|0) == 99) {
        label = 0;
        stored($arrayidx204,$add120$lcssa$i$i);
        stored($arrayidx205,$add122$lcssa$i$i);
        $184 = $add122$lcssa$i$i;$fval$3$i$i = $newf$0$lcssa$lcssa$i$i;$stepsize$0139$i$i = $stepsize$0$lcssa138$i$i;
       }
       $cmp160$i$i = $stepsize$0139$i$i < 1.0E-10;
       if ($cmp160$i$i) {
        label = 102;
        break;
       }
       $inc164$i$i = (($iter$0159$i$i) + 1)|0;
       $cmp47$i$i = ($inc164$i$i|0)<(100);
       if ($cmp47$i$i) {
        $107 = $184;$fval$2160$i$i = $fval$3$i$i;$iter$0159$i$i = $inc164$i$i;
       } else {
        label = 105;
        break;
       }
      }
      if ((label|0) == 102) {
       label = 0;
       __ZL4infoPKcz(2900,$vararg_buffer6);
       label = 104;
      }
      if ((label|0) == 104) {
       label = 0;
       $cmp166$i$i = ($iter$0159$i$i|0)>(99);
       if ($cmp166$i$i) {
        label = 105;
       }
      }
      if ((label|0) == 105) {
       label = 0;
       __ZL4infoPKcz(2954,$vararg_buffer8);
      }
      _free($call$i$i);
      _free($call3$i);
      _free($call$i299);
      $arrayidx208$pre$phiZ2D = $arrayidx203;
     }
     $113 = loadd($arrayidx207);
     $114 = loadd($arrayidx208$pre$phiZ2D);
     __ZL13svm_train_onePK11svm_problemPK13svm_parameterdd($subprob$i,$sub_prob,$param,$113,$114);
     $arrayidx209 = (($call135) + ($p$1449<<4)|0);
     ; store8($arrayidx209,load8($subprob$i,8),8); store8($arrayidx209+8 | 0,load8($subprob$i+8 | 0,8),8);
     if ($cmp174411) {
      $k$2444 = 0;
      while(1) {
       $add213 = (($k$2444) + ($46))|0;
       $arrayidx214 = (($call124) + ($add213)|0);
       $115 = load1($arrayidx214);
       $tobool215 = ($115<<24>>24)==(0);
       do {
        if ($tobool215) {
         $116 = load4($arrayidx209);
         $arrayidx219 = (($116) + ($k$2444<<3)|0);
         $117 = loadd($arrayidx219);
         $cmp221 = ($117 != $117) | (0.0 != 0.0) |($117 == 0.0);
         if ($cmp221) {
          break;
         }
         store1($arrayidx214,1);
        }
       } while(0);
       $inc227 = (($k$2444) + 1)|0;
       $exitcond499 = ($inc227|0)==($48|0);
       if ($exitcond499) {
        break;
       } else {
        $k$2444 = $inc227;
       }
      }
     }
     if ($cmp186413) {
      $k$3446 = 0;
      while(1) {
       $add232 = (($k$3446) + ($47))|0;
       $arrayidx233 = (($call124) + ($add232)|0);
       $118 = load1($arrayidx233);
       $tobool234 = ($118<<24>>24)==(0);
       do {
        if ($tobool234) {
         $119 = load4($arrayidx209);
         $add238 = (($k$3446) + ($48))|0;
         $arrayidx239 = (($119) + ($add238<<3)|0);
         $120 = loadd($arrayidx239);
         $cmp241 = ($120 != $120) | (0.0 != 0.0) |($120 == 0.0);
         if ($cmp241) {
          break;
         }
         store1($arrayidx233,1);
        }
       } while(0);
       $inc247 = (($k$3446) + 1)|0;
       $exitcond500 = ($inc247|0)==($49|0);
       if ($exitcond500) {
        break;
       } else {
        $k$3446 = $inc247;
       }
      }
     }
     $121 = load4($x169);
     _free($121);
     $122 = load4($y);
     _free($122);
     $inc251 = (($p$1449) + 1)|0;
     $inc253 = (($j155$0448) + 1)|0;
     $cmp158 = ($inc253|0)<($43|0);
     if ($cmp158) {
      $j155$0448 = $inc253;$p$1449 = $inc251;
     } else {
      $44 = $43;$p$1$lcssa = $inc251;
      break;
     }
    }
   } else {
    $44 = $45;$p$1$lcssa = $p$0452;
   }
   $cmp153 = ($add156|0)<($44|0);
   if ($cmp153) {
    $45 = $44;$i75$4453 = $add156;$p$0452 = $p$1$lcssa;
   } else {
    $123 = $44;
    break;
   }
  }
 } else {
  $123 = $23;
 }
 $nr_class258 = ((($call)) + 96|0);
 store4($nr_class258,$123);
 $mul259 = $123 << 2;
 $call260 = (_malloc($mul259)|0);
 $label261 = ((($call)) + 128|0);
 store4($label261,$call260);
 $cmp263408 = ($123|0)>(0);
 if ($cmp263408) {
  $124 = load4($label66);
  $125 = load4($nr_class65);
  $i75$5409 = 0;
  while(1) {
   $arrayidx265 = (($124) + ($i75$5409<<2)|0);
   $126 = load4($arrayidx265);
   $arrayidx267 = (($call260) + ($i75$5409<<2)|0);
   store4($arrayidx267,$126);
   $inc269 = (($i75$5409) + 1)|0;
   $cmp263 = ($inc269|0)<($125|0);
   if ($cmp263) {
    $i75$5409 = $inc269;
   } else {
    $127 = $125;
    break;
   }
  }
 } else {
  $127 = $123;
 }
 $sub271 = (($127) + -1)|0;
 $mul272 = Math_imul($sub271, $127)|0;
 $div273 = (($mul272|0) / 2)&-1;
 $mul274 = $div273 << 3;
 $call275 = (_malloc($mul274)|0);
 $rho276 = ((($call)) + 112|0);
 store4($rho276,$call275);
 $cmp281405 = ($mul272|0)>(1);
 if ($cmp281405) {
  $i75$6406 = 0;
  while(1) {
   $rho284 = (((($call135) + ($i75$6406<<4)|0)) + 8|0);
   $128 = loadd($rho284);
   $arrayidx286 = (($call275) + ($i75$6406<<3)|0);
   stored($arrayidx286,$128);
   $inc288 = (($i75$6406) + 1)|0;
   $cmp281 = ($inc288|0)<($div273|0);
   if ($cmp281) {
    $i75$6406 = $inc288;
   } else {
    break;
   }
  }
 }
 $129 = load4($probability138);
 $tobool291 = ($129|0)==(0);
 if ($tobool291) {
  $probA321 = ((($call)) + 116|0);
  store4($probA321,0);
  $probB322 = ((($call)) + 120|0);
  store4($probB322,0);
 } else {
  $call297 = (_malloc($mul274)|0);
  $probA298 = ((($call)) + 116|0);
  store4($probA298,$call297);
  $call303 = (_malloc($mul274)|0);
  $probB304 = ((($call)) + 120|0);
  store4($probB304,$call303);
  if ($cmp281405) {
   $i75$7401 = 0;
   while(1) {
    $arrayidx311 = (($probA136$0) + ($i75$7401<<3)|0);
    $130 = loadd($arrayidx311);
    $arrayidx313 = (($call297) + ($i75$7401<<3)|0);
    stored($arrayidx313,$130);
    $arrayidx314 = (($probB137$0) + ($i75$7401<<3)|0);
    $131 = loadd($arrayidx314);
    $arrayidx316 = (($call303) + ($i75$7401<<3)|0);
    stored($arrayidx316,$131);
    $inc318 = (($i75$7401) + 1)|0;
    $cmp309 = ($inc318|0)<($div273|0);
    if ($cmp309) {
     $i75$7401 = $inc318;
    } else {
     break;
    }
   }
  }
 }
 $mul324 = $127 << 2;
 $call325 = (_malloc($mul324)|0);
 $call327 = (_malloc($mul324)|0);
 $nSV328 = ((($call)) + 132|0);
 store4($nSV328,$call327);
 $cmp330393 = ($127|0)>(0);
 if ($cmp330393) {
  $132 = load4($count);
  $133 = load4($start);
  $134 = load4($nr_class65);
  $i75$8395 = 0;$total_sv$0394 = 0;
  while(1) {
   $arrayidx335386 = (($132) + ($i75$8395<<2)|0);
   $135 = load4($arrayidx335386);
   $cmp336387 = ($135|0)>(0);
   if ($cmp336387) {
    $arrayidx339 = (($133) + ($i75$8395<<2)|0);
    $136 = load4($arrayidx339);
    $j333$0390 = 0;$nSV332$0389 = 0;$total_sv$1388 = $total_sv$0394;
    while(1) {
     $add340 = (($136) + ($j333$0390))|0;
     $arrayidx341 = (($call124) + ($add340)|0);
     $137 = load1($arrayidx341);
     $138 = $137&255;
     $total_sv$2 = (($138) + ($total_sv$1388))|0;
     $nSV332$1 = (($138) + ($nSV332$0389))|0;
     $inc348 = (($j333$0390) + 1)|0;
     $cmp336 = ($inc348|0)<($135|0);
     if ($cmp336) {
      $j333$0390 = $inc348;$nSV332$0389 = $nSV332$1;$total_sv$1388 = $total_sv$2;
     } else {
      $nSV332$0$lcssa = $nSV332$1;$total_sv$1$lcssa = $total_sv$2;
      break;
     }
    }
   } else {
    $nSV332$0$lcssa = 0;$total_sv$1$lcssa = $total_sv$0394;
   }
   $arrayidx351 = (($call327) + ($i75$8395<<2)|0);
   store4($arrayidx351,$nSV332$0$lcssa);
   $arrayidx352 = (($call325) + ($i75$8395<<2)|0);
   store4($arrayidx352,$nSV332$0$lcssa);
   $inc354 = (($i75$8395) + 1)|0;
   $cmp330 = ($inc354|0)<($134|0);
   if ($cmp330) {
    $i75$8395 = $inc354;$total_sv$0394 = $total_sv$1$lcssa;
   } else {
    $144 = $134;$total_sv$0$lcssa = $total_sv$1$lcssa;
    break;
   }
  }
 } else {
  $144 = $127;$total_sv$0$lcssa = 0;
 }
 store4($vararg_buffer10,$total_sv$0$lcssa);
 __ZL4infoPKcz(3018,$vararg_buffer10);
 $l356 = ((($call)) + 100|0);
 store4($l356,$total_sv$0$lcssa);
 $mul357 = $total_sv$0$lcssa << 2;
 $call358 = (_malloc($mul357)|0);
 $SV359 = ((($call)) + 104|0);
 store4($SV359,$call358);
 $call361 = (_malloc($mul357)|0);
 $sv_indices362 = ((($call)) + 124|0);
 store4($sv_indices362,$call361);
 if ($cmp77467) {
  $i75$9385 = 0;$p$2384 = 0;
  while(1) {
   $arrayidx366 = (($call124) + ($i75$9385)|0);
   $139 = load1($arrayidx366);
   $tobool367 = ($139<<24>>24)==(0);
   if ($tobool367) {
    $p$3 = $p$2384;
   } else {
    $arrayidx369 = (($call74) + ($i75$9385<<2)|0);
    $140 = load4($arrayidx369);
    $141 = load4($SV359);
    $arrayidx371 = (($141) + ($p$2384<<2)|0);
    store4($arrayidx371,$140);
    $arrayidx372 = (($call68) + ($i75$9385<<2)|0);
    $142 = load4($arrayidx372);
    $add373 = (($142) + 1)|0;
    $143 = load4($sv_indices362);
    $inc375 = (($p$2384) + 1)|0;
    $arrayidx376 = (($143) + ($p$2384<<2)|0);
    store4($arrayidx376,$add373);
    $p$3 = $inc375;
   }
   $inc379 = (($i75$9385) + 1)|0;
   $exitcond490 = ($inc379|0)==($22|0);
   if ($exitcond490) {
    break;
   } else {
    $i75$9385 = $inc379;$p$2384 = $p$3;
   }
  }
 }
 $mul381 = $144 << 2;
 $call382 = (_malloc($mul381)|0);
 store4($call382,0);
 $cmp385380 = ($144|0)>(1);
 if ($cmp385380) {
  $146 = 0;$i75$10381 = 1;
  while(1) {
   $sub387 = (($i75$10381) + -1)|0;
   $arrayidx390 = (($call325) + ($sub387<<2)|0);
   $145 = load4($arrayidx390);
   $add391 = (($145) + ($146))|0;
   $arrayidx392 = (($call382) + ($i75$10381<<2)|0);
   store4($arrayidx392,$add391);
   $inc394 = (($i75$10381) + 1)|0;
   $cmp385 = ($inc394|0)<($144|0);
   if ($cmp385) {
    $146 = $add391;$i75$10381 = $inc394;
   } else {
    break;
   }
  }
 }
 $mul397 = (($mul381) + -4)|0;
 $call398 = (_malloc($mul397)|0);
 $sv_coef399 = ((($call)) + 108|0);
 store4($sv_coef399,$call398);
 if ($cmp385380) {
  $mul404 = $total_sv$0$lcssa << 3;
  $sub401 = (($144) + -1)|0;
  $call405551 = (_malloc($mul404)|0);
  store4($call398,$call405551);
  $cmp402552 = ($sub401|0)>(1);
  if ($cmp402552) {
   $inc409553 = 1;
   while(1) {
    $$pre505 = load4($sv_coef399);
    $call405 = (_malloc($mul404)|0);
    $arrayidx407 = (($$pre505) + ($inc409553<<2)|0);
    store4($arrayidx407,$call405);
    $inc409 = (($inc409553) + 1)|0;
    $cmp402 = ($inc409|0)<($sub401|0);
    if ($cmp402) {
     $inc409553 = $inc409;
    } else {
     break;
    }
   }
  }
  $$pre506 = load4($nr_class65);
  $147 = $$pre506;
 } else {
  $147 = $144;
 }
 $cmp412374 = ($147|0)>(0);
 L236: do {
  if ($cmp412374) {
   $148 = load4($start);
   $149 = load4($count);
   $i75$12376 = 0;$indvars$iv487$in = $147;$p$4375 = 0;
   while(1) {
    $indvars$iv487 = (($indvars$iv487$in) + -1)|0;
    $add415 = (($i75$12376) + 1)|0;
    $cmp417370 = ($add415|0)<($147|0);
    if (!($cmp417370)) {
     $178 = $149;
     break L236;
    }
    $arrayidx421 = (($148) + ($i75$12376<<2)|0);
    $151 = load4($arrayidx421);
    $arrayidx425 = (($149) + ($i75$12376<<2)|0);
    $152 = load4($arrayidx425);
    $arrayidx428 = (($call382) + ($i75$12376<<2)|0);
    $153 = load4($arrayidx428);
    $cmp431364 = ($152|0)>(0);
    if ($cmp431364) {
     $j414$0372$us = $add415;$p$5371$us = $p$4375;
     while(1) {
      $arrayidx423$us = (($148) + ($j414$0372$us<<2)|0);
      $154 = load4($arrayidx423$us);
      $arrayidx427$us = (($149) + ($j414$0372$us<<2)|0);
      $155 = load4($arrayidx427$us);
      $alpha438$us = (($call135) + ($p$5371$us<<4)|0);
      $sub441$us = (($j414$0372$us) + -1)|0;
      $k429$0366$us = 0;$q$0365$us = $153;
      while(1) {
       $add433$us = (($k429$0366$us) + ($151))|0;
       $arrayidx434$us = (($call124) + ($add433$us)|0);
       $161 = load1($arrayidx434$us);
       $tobool435$us = ($161<<24>>24)==(0);
       if ($tobool435$us) {
        $q$1$us = $q$0365$us;
       } else {
        $162 = load4($alpha438$us);
        $arrayidx439$us = (($162) + ($k429$0366$us<<3)|0);
        $163 = loadd($arrayidx439$us);
        $164 = load4($sv_coef399);
        $arrayidx442$us = (($164) + ($sub441$us<<2)|0);
        $165 = load4($arrayidx442$us);
        $inc443$us = (($q$0365$us) + 1)|0;
        $arrayidx444$us = (($165) + ($q$0365$us<<3)|0);
        stored($arrayidx444$us,$163);
        $q$1$us = $inc443$us;
       }
       $inc447$us = (($k429$0366$us) + 1)|0;
       $exitcond485 = ($inc447$us|0)==($152|0);
       if ($exitcond485) {
        break;
       } else {
        $k429$0366$us = $inc447$us;$q$0365$us = $q$1$us;
       }
      }
      $cmp451367$us = ($155|0)>(0);
      if ($cmp451367$us) {
       $arrayidx449$us = (($call382) + ($j414$0372$us<<2)|0);
       $166 = load4($arrayidx449$us);
       $k429$1369$us = 0;$q$2368$us = $166;
       while(1) {
        $add453$us = (($k429$1369$us) + ($154))|0;
        $arrayidx454$us = (($call124) + ($add453$us)|0);
        $156 = load1($arrayidx454$us);
        $tobool455$us = ($156<<24>>24)==(0);
        if ($tobool455$us) {
         $q$3$us = $q$2368$us;
        } else {
         $157 = load4($alpha438$us);
         $add459$us = (($k429$1369$us) + ($152))|0;
         $arrayidx460$us = (($157) + ($add459$us<<3)|0);
         $158 = loadd($arrayidx460$us);
         $159 = load4($sv_coef399);
         $arrayidx462$us = (($159) + ($i75$12376<<2)|0);
         $160 = load4($arrayidx462$us);
         $inc463$us = (($q$2368$us) + 1)|0;
         $arrayidx464$us = (($160) + ($q$2368$us<<3)|0);
         stored($arrayidx464$us,$158);
         $q$3$us = $inc463$us;
        }
        $inc467$us = (($k429$1369$us) + 1)|0;
        $exitcond486 = ($inc467$us|0)==($155|0);
        if ($exitcond486) {
         break;
        } else {
         $k429$1369$us = $inc467$us;$q$2368$us = $q$3$us;
        }
       }
      }
      $inc469$us = (($p$5371$us) + 1)|0;
      $inc471$us = (($j414$0372$us) + 1)|0;
      $exitcond489 = ($inc471$us|0)==($147|0);
      if ($exitcond489) {
       break;
      } else {
       $j414$0372$us = $inc471$us;$p$5371$us = $inc469$us;
      }
     }
    } else {
     $j414$0372 = $add415;$p$5371 = $p$4375;
     while(1) {
      $arrayidx423 = (($148) + ($j414$0372<<2)|0);
      $167 = load4($arrayidx423);
      $arrayidx427 = (($149) + ($j414$0372<<2)|0);
      $168 = load4($arrayidx427);
      $cmp451367 = ($168|0)>(0);
      if ($cmp451367) {
       $arrayidx449 = (($call382) + ($j414$0372<<2)|0);
       $169 = load4($arrayidx449);
       $alpha458 = (($call135) + ($p$5371<<4)|0);
       $k429$1369 = 0;$q$2368 = $169;
       while(1) {
        $add453 = (($k429$1369) + ($167))|0;
        $arrayidx454 = (($call124) + ($add453)|0);
        $170 = load1($arrayidx454);
        $tobool455 = ($170<<24>>24)==(0);
        if ($tobool455) {
         $q$3 = $q$2368;
        } else {
         $171 = load4($alpha458);
         $add459 = (($k429$1369) + ($152))|0;
         $arrayidx460 = (($171) + ($add459<<3)|0);
         $172 = loadd($arrayidx460);
         $173 = load4($sv_coef399);
         $arrayidx462 = (($173) + ($i75$12376<<2)|0);
         $174 = load4($arrayidx462);
         $inc463 = (($q$2368) + 1)|0;
         $arrayidx464 = (($174) + ($q$2368<<3)|0);
         stored($arrayidx464,$172);
         $q$3 = $inc463;
        }
        $inc467 = (($k429$1369) + 1)|0;
        $exitcond = ($inc467|0)==($168|0);
        if ($exitcond) {
         break;
        } else {
         $k429$1369 = $inc467;$q$2368 = $q$3;
        }
       }
      }
      $inc469 = (($p$5371) + 1)|0;
      $inc471 = (($j414$0372) + 1)|0;
      $exitcond484 = ($inc471|0)==($147|0);
      if ($exitcond484) {
       break;
      } else {
       $j414$0372 = $inc471;$p$5371 = $inc469;
      }
     }
    }
    $150 = (($p$4375) + ($indvars$iv487))|0;
    if ($cmp417370) {
     $i75$12376 = $add415;$indvars$iv487$in = $indvars$iv487;$p$4375 = $150;
    } else {
     $178 = $149;
     break;
    }
   }
  } else {
   $$pre507 = load4($count);
   $178 = $$pre507;
  }
 } while(0);
 $175 = load4($label66);
 _free($175);
 _free($176);
 _free($177);
 _free($178);
 _free($call68);
 $179 = load4($start);
 _free($179);
 _free($call74);
 _free($call87);
 _free($call124);
 $180 = load4($nr_class65);
 $sub477359 = (($180) + -1)|0;
 $mul478360 = Math_imul($sub477359, $180)|0;
 $cmp480362 = ($mul478360|0)>(1);
 if ($cmp480362) {
  $div479 = (($mul478360|0) / 2)&-1;
  $i75$13363 = 0;
  while(1) {
   $alpha483 = (($call135) + ($i75$13363<<4)|0);
   $181 = load4($alpha483);
   _free($181);
   $inc485 = (($i75$13363) + 1)|0;
   $cmp480 = ($inc485|0)<($div479|0);
   if ($cmp480) {
    $i75$13363 = $inc485;
   } else {
    break;
   }
  }
 }
 _free($call135);
 _free($call325);
 _free($call382);
 STACKTOP = sp;return ($call|0);
}
function _svm_cross_validation($prob,$param,$nr_fold,$target) {
 $prob = $prob|0;
 $param = $param|0;
 $nr_fold = $nr_fold|0;
 $target = $target|0;
 var $$off$i = 0, $$pre = 0, $$pre238 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0.0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0.0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0.0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $8 = 0, $9 = 0, $add = 0, $add116 = 0, $add135 = 0, $add157 = 0, $add25 = 0;
 var $add27 = 0, $add30 = 0, $add45$us = 0, $add53$us = 0, $add68 = 0, $add83$us = 0, $add85$us = 0, $add89$us = 0, $arrayidx115 = 0, $arrayidx117 = 0, $arrayidx124 = 0, $arrayidx136 = 0, $arrayidx137 = 0, $arrayidx146 = 0, $arrayidx158 = 0, $arrayidx173 = 0, $arrayidx174 = 0, $arrayidx174245 = 0, $arrayidx176 = 0, $arrayidx179 = 0;
 var $arrayidx179247 = 0, $arrayidx181 = 0, $arrayidx190 = 0, $arrayidx191 = 0, $arrayidx193 = 0, $arrayidx196 = 0, $arrayidx198 = 0, $arrayidx20214 = 0, $arrayidx218 = 0, $arrayidx219 = 0, $arrayidx222 = 0, $arrayidx231 = 0, $arrayidx232 = 0, $arrayidx235 = 0, $arrayidx26 = 0, $arrayidx28 = 0, $arrayidx31 = 0, $arrayidx41$us = 0, $arrayidx46$us = 0, $arrayidx67 = 0;
 var $arrayidx69 = 0, $arrayidx79$us = 0, $arrayidx80$us = 0, $arrayidx95$promoted$us = 0, $arrayidx95$us = 0, $c$0218 = 0, $c$1210$us = 0, $c$2206$us = 0, $call = 0, $call10$i = 0, $call11 = 0, $call11$i = 0.0, $call13 = 0, $call132 = 0, $call165 = 0, $call168 = 0, $call203 = 0, $call213 = 0, $call220 = 0.0, $call23 = 0;
 var $call4 = 0, $cmp = 0, $cmp1$i = 0, $cmp110 = 0, $cmp122225 = 0, $cmp142 = 0, $cmp14219 = 0, $cmp142221 = 0, $cmp152 = 0, $cmp152196 = 0, $cmp17 = 0, $cmp170186 = 0, $cmp17217 = 0, $cmp187189 = 0, $cmp21 = 0, $cmp21215 = 0, $cmp215192 = 0, $cmp228194 = 0, $cmp39$us = 0, $cmp39212 = 0;
 var $cmp62 = 0, $cmp62207 = 0, $cmp62207240 = 0, $cmp74$us = 0, $cmp77$us = 0, $cmp8 = 0, $cmp92200$us = 0, $count = 0, $div$i = 0, $div$us = 0, $div145 = 0, $div50$us = 0, $div82$us = 0, $div88$us = 0, $exitcond = 0, $exitcond229 = 0, $exitcond230 = 0, $exitcond231 = 0, $exitcond234 = 0, $exitcond236 = 0;
 var $exitcond237 = 0, $exitcond249 = 0, $i$1216 = 0, $i$2213$us = 0, $i$3208 = 0, $i$4204$us = 0, $i$5199 = 0, $i$6226 = 0, $i$7224 = 0, $i$8222 = 0, $i$9197 = 0, $inc106$us = 0, $inc119 = 0, $inc126 = 0, $inc139 = 0, $inc148 = 0, $inc182 = 0, $inc182250 = 0, $inc199 = 0, $inc201 = 0;
 var $inc224 = 0, $inc237 = 0, $inc33 = 0, $inc36 = 0, $inc55$us = 0, $inc71 = 0, $j159$1190 = 0, $j159$2193 = 0, $j159$3195 = 0, $k$0$lcssa = 0, $k$1191 = 0, $label = 0, $mul = 0, $mul$i = 0, $mul144 = 0, $mul164 = 0, $mul167 = 0, $mul212 = 0, $mul3 = 0, $mul47$us = 0;
 var $mul49$us = 0, $mul81$us = 0, $mul87$us = 0, $mul9$i = 0, $mul9$sink$i = 0, $nr_class = 0, $nr_class$i = 0, $nr_class1$i = 0, $nr_fold$addr$0 = 0, $or$cond = 0, $probability = 0, $rem = 0, $rem134 = 0, $scevgep = 0, $scevgep233 = 0, $start = 0, $sub = 0, $sub$i = 0, $sub112 = 0, $sub133 = 0;
 var $sub160179 = 0, $sub161 = 0, $sub51$us = 0, $sub64 = 0, $switch = 0, $switch$i = 0, $switch180 = 0, $tobool = 0, $x = 0, $x217 = 0, $y = 0, $y194 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $nr_class = sp + 20|0;
 $start = sp + 8|0;
 $label = sp + 4|0;
 $count = sp;
 $0 = load4($prob);
 $mul = $0 << 2;
 $call = (_malloc($mul)|0);
 $cmp = ($0|0)<($nr_fold|0);
 if ($cmp) {
  $1 = load4(1452);
  (_fwrite(3134,100,1,$1)|0);
  $nr_fold$addr$0 = $0;
 } else {
  $nr_fold$addr$0 = $nr_fold;
 }
 $add = $nr_fold$addr$0 << 2;
 $mul3 = (($add) + 4)|0;
 $call4 = (_malloc($mul3)|0);
 $2 = load4($param);
 $switch = ($2>>>0)<(2);
 $cmp8 = ($nr_fold$addr$0|0)<($0|0);
 $or$cond = $cmp8 & $switch;
 if ($or$cond) {
  store4($start,0);
  store4($label,0);
  store4($count,0);
  __ZL17svm_group_classesPK11svm_problemPiPS2_S3_S3_S2_($prob,$nr_class,$label,$start,$count,$call);
  $call11 = (_malloc($add)|0);
  $call13 = (_malloc($mul)|0);
  $cmp14219 = ($0|0)>(0);
  if ($cmp14219) {
   _memcpy(($call13|0),($call|0),($mul|0))|0;
  }
  $3 = load4($nr_class);
  $cmp17217 = ($3|0)>(0);
  if ($cmp17217) {
   $4 = load4($count);
   $5 = load4($start);
   $c$0218 = 0;
   while(1) {
    $arrayidx20214 = (($4) + ($c$0218<<2)|0);
    $6 = load4($arrayidx20214);
    $cmp21215 = ($6|0)>(0);
    if ($cmp21215) {
     $arrayidx26 = (($5) + ($c$0218<<2)|0);
     $i$1216 = 0;
     while(1) {
      $call23 = (_rand()|0);
      $15 = load4($arrayidx20214);
      $sub = (($15) - ($i$1216))|0;
      $rem = (($call23|0) % ($sub|0))&-1;
      $add25 = (($rem) + ($i$1216))|0;
      $16 = load4($arrayidx26);
      $add27 = (($add25) + ($16))|0;
      $arrayidx28 = (($call13) + ($add27<<2)|0);
      $add30 = (($16) + ($i$1216))|0;
      $arrayidx31 = (($call13) + ($add30<<2)|0);
      $17 = load4($arrayidx28);
      $18 = load4($arrayidx31);
      store4($arrayidx28,$18);
      store4($arrayidx31,$17);
      $inc33 = (($i$1216) + 1)|0;
      $cmp21 = ($inc33|0)<($15|0);
      if ($cmp21) {
       $i$1216 = $inc33;
      } else {
       break;
      }
     }
    }
    $inc36 = (($c$0218) + 1)|0;
    $cmp17 = ($inc36|0)<($3|0);
    if ($cmp17) {
     $c$0218 = $inc36;
    } else {
     break;
    }
   }
  }
  $cmp39212 = ($nr_fold$addr$0|0)>(0);
  do {
   if ($cmp39212) {
    $7 = load4($count);
    if ($cmp17217) {
     $i$2213$us = 0;
     while(1) {
      $arrayidx41$us = (($call11) + ($i$2213$us<<2)|0);
      store4($arrayidx41$us,0);
      $add45$us = (($i$2213$us) + 1)|0;
      $14 = 0;$c$1210$us = 0;
      while(1) {
       $arrayidx46$us = (($7) + ($c$1210$us<<2)|0);
       $13 = load4($arrayidx46$us);
       $mul47$us = Math_imul($13, $add45$us)|0;
       $div$us = (($mul47$us|0) / ($nr_fold$addr$0|0))&-1;
       $mul49$us = Math_imul($13, $i$2213$us)|0;
       $div50$us = (($mul49$us|0) / ($nr_fold$addr$0|0))&-1;
       $sub51$us = (($div$us) - ($div50$us))|0;
       $add53$us = (($sub51$us) + ($14))|0;
       $inc55$us = (($c$1210$us) + 1)|0;
       $exitcond234 = ($inc55$us|0)==($3|0);
       if ($exitcond234) {
        break;
       } else {
        $14 = $add53$us;$c$1210$us = $inc55$us;
       }
      }
      store4($arrayidx41$us,$add53$us);
      $cmp39$us = ($add45$us|0)<($nr_fold$addr$0|0);
      if ($cmp39$us) {
       $i$2213$us = $add45$us;
      } else {
       break;
      }
     }
     store4($call4,0);
     $cmp62207 = ($nr_fold$addr$0|0)<(1);
     if ($cmp62207) {
      $cmp62207240 = 1;
      break;
     } else {
      $30 = 0;$i$3208 = 1;
     }
    } else {
     $8 = ($0|0)<($nr_fold|0);
     $9 = $8 ? $0 : $nr_fold;
     $10 = $9 << 2;
     $11 = $10 ^ -4;
     $12 = (-4 - ($11))|0;
     _memset(($call11|0),0,($12|0))|0;
     store4($call4,0);
     $30 = 0;$i$3208 = 1;
    }
    while(1) {
     $sub64 = (($i$3208) + -1)|0;
     $arrayidx67 = (($call11) + ($sub64<<2)|0);
     $29 = load4($arrayidx67);
     $add68 = (($29) + ($30))|0;
     $arrayidx69 = (($call4) + ($i$3208<<2)|0);
     store4($arrayidx69,$add68);
     $inc71 = (($i$3208) + 1)|0;
     $cmp62 = ($i$3208|0)<($nr_fold$addr$0|0);
     if ($cmp62) {
      $30 = $add68;$i$3208 = $inc71;
     } else {
      $cmp62207240 = 0;
      break;
     }
    }
   } else {
    store4($call4,0);
    $cmp62207240 = 1;
   }
  } while(0);
  if ($cmp17217) {
   $19 = load4($start);
   $20 = load4($count);
   if ($cmp39212) {
    $c$2206$us = 0;
    while(1) {
     $arrayidx79$us = (($19) + ($c$2206$us<<2)|0);
     $21 = load4($arrayidx79$us);
     $arrayidx80$us = (($20) + ($c$2206$us<<2)|0);
     $22 = load4($arrayidx80$us);
     $i$4204$us = 0;
     while(1) {
      $mul81$us = Math_imul($22, $i$4204$us)|0;
      $div82$us = (($mul81$us|0) / ($nr_fold$addr$0|0))&-1;
      $add83$us = (($div82$us) + ($21))|0;
      $add85$us = (($i$4204$us) + 1)|0;
      $mul87$us = Math_imul($22, $add85$us)|0;
      $div88$us = (($mul87$us|0) / ($nr_fold$addr$0|0))&-1;
      $add89$us = (($div88$us) + ($21))|0;
      $cmp92200$us = ($add83$us|0)<($add89$us|0);
      if ($cmp92200$us) {
       $arrayidx95$us = (($call4) + ($i$4204$us<<2)|0);
       $arrayidx95$promoted$us = load4($arrayidx95$us);
       $23 = (($arrayidx95$promoted$us) + ($div88$us))|0;
       $24 = $arrayidx95$promoted$us << 2;
       $scevgep = (($call) + ($24)|0);
       $25 = $add83$us << 2;
       $scevgep233 = (($call13) + ($25)|0);
       $26 = (($div88$us) - ($div82$us))|0;
       $27 = $26 << 2;
       _memcpy(($scevgep|0),($scevgep233|0),($27|0))|0;
       $28 = (($23) - ($div82$us))|0;
       store4($arrayidx95$us,$28);
      }
      $cmp77$us = ($add85$us|0)<($nr_fold$addr$0|0);
      if ($cmp77$us) {
       $i$4204$us = $add85$us;
      } else {
       break;
      }
     }
     $inc106$us = (($c$2206$us) + 1)|0;
     $cmp74$us = ($inc106$us|0)<($3|0);
     if ($cmp74$us) {
      $c$2206$us = $inc106$us;
     } else {
      break;
     }
    }
   }
  }
  store4($call4,0);
  if (!($cmp62207240)) {
   $32 = 0;$i$5199 = 1;
   while(1) {
    $sub112 = (($i$5199) + -1)|0;
    $arrayidx115 = (($call11) + ($sub112<<2)|0);
    $31 = load4($arrayidx115);
    $add116 = (($31) + ($32))|0;
    $arrayidx117 = (($call4) + ($i$5199<<2)|0);
    store4($arrayidx117,$add116);
    $inc119 = (($i$5199) + 1)|0;
    $cmp110 = ($i$5199|0)<($nr_fold$addr$0|0);
    if ($cmp110) {
     $32 = $add116;$i$5199 = $inc119;
    } else {
     break;
    }
   }
  }
  $33 = load4($start);
  _free($33);
  $34 = load4($label);
  _free($34);
  $35 = load4($count);
  _free($35);
  _free($call13);
  _free($call11);
 } else {
  $cmp122225 = ($0|0)>(0);
  if ($cmp122225) {
   $i$6226 = 0;
   while(1) {
    $arrayidx124 = (($call) + ($i$6226<<2)|0);
    store4($arrayidx124,$i$6226);
    $inc126 = (($i$6226) + 1)|0;
    $exitcond237 = ($inc126|0)==($0|0);
    if ($exitcond237) {
     break;
    } else {
     $i$6226 = $inc126;
    }
   }
   if ($cmp122225) {
    $i$7224 = 0;
    while(1) {
     $call132 = (_rand()|0);
     $sub133 = (($0) - ($i$7224))|0;
     $rem134 = (($call132|0) % ($sub133|0))&-1;
     $add135 = (($rem134) + ($i$7224))|0;
     $arrayidx136 = (($call) + ($i$7224<<2)|0);
     $arrayidx137 = (($call) + ($add135<<2)|0);
     $36 = load4($arrayidx136);
     $37 = load4($arrayidx137);
     store4($arrayidx136,$37);
     store4($arrayidx137,$36);
     $inc139 = (($i$7224) + 1)|0;
     $exitcond236 = ($inc139|0)==($0|0);
     if ($exitcond236) {
      break;
     } else {
      $i$7224 = $inc139;
     }
    }
   }
  }
  $cmp142221 = ($nr_fold$addr$0|0)<(0);
  if ($cmp142221) {
   _free($call4);
   _free($call);
   STACKTOP = sp;return;
  } else {
   $i$8222 = 0;
   while(1) {
    $mul144 = Math_imul($i$8222, $0)|0;
    $div145 = (($mul144|0) / ($nr_fold$addr$0|0))&-1;
    $arrayidx146 = (($call4) + ($i$8222<<2)|0);
    store4($arrayidx146,$div145);
    $inc148 = (($i$8222) + 1)|0;
    $cmp142 = ($i$8222|0)<($nr_fold$addr$0|0);
    if ($cmp142) {
     $i$8222 = $inc148;
    } else {
     break;
    }
   }
  }
 }
 $cmp152196 = ($nr_fold$addr$0|0)>(0);
 if (!($cmp152196)) {
  _free($call4);
  _free($call);
  STACKTOP = sp;return;
 }
 $x = ((($start)) + 8|0);
 $y = ((($start)) + 4|0);
 $probability = ((($param)) + 92|0);
 $x217 = ((($prob)) + 8|0);
 $y194 = ((($prob)) + 4|0);
 $$pre = load4($call4);
 $39 = $$pre;$i$9197 = 0;
 while(1) {
  $add157 = (($i$9197) + 1)|0;
  $arrayidx158 = (($call4) + ($add157<<2)|0);
  $38 = load4($arrayidx158);
  $sub160179 = (($39) - ($38))|0;
  $sub161 = (($sub160179) + ($0))|0;
  store4($start,$sub161);
  $mul164 = $sub161 << 2;
  $call165 = (_malloc($mul164)|0);
  store4($x,$call165);
  $mul167 = $sub161 << 3;
  $call168 = (_malloc($mul167)|0);
  store4($y,$call168);
  $cmp170186 = ($39|0)>(0);
  if ($cmp170186) {
   $40 = load4($x217);
   $41 = load4($call);
   $arrayidx174245 = (($40) + ($41<<2)|0);
   $42 = load4($arrayidx174245);
   store4($call165,$42);
   $43 = load4($y194);
   $arrayidx179247 = (($43) + ($41<<3)|0);
   $44 = loadd($arrayidx179247);
   $45 = load4($y);
   stored($45,$44);
   $exitcond249 = ($39|0)==(1);
   if ($exitcond249) {
    $k$0$lcssa = $39;
   } else {
    $inc182250 = 1;
    while(1) {
     $$pre238 = load4($x);
     $46 = load4($x217);
     $arrayidx173 = (($call) + ($inc182250<<2)|0);
     $47 = load4($arrayidx173);
     $arrayidx174 = (($46) + ($47<<2)|0);
     $48 = load4($arrayidx174);
     $arrayidx176 = (($$pre238) + ($inc182250<<2)|0);
     store4($arrayidx176,$48);
     $49 = load4($y194);
     $arrayidx179 = (($49) + ($47<<3)|0);
     $50 = loadd($arrayidx179);
     $51 = load4($y);
     $arrayidx181 = (($51) + ($inc182250<<3)|0);
     stored($arrayidx181,$50);
     $inc182 = (($inc182250) + 1)|0;
     $exitcond = ($inc182|0)==($39|0);
     if ($exitcond) {
      $k$0$lcssa = $39;
      break;
     } else {
      $inc182250 = $inc182;
     }
    }
   }
  } else {
   $k$0$lcssa = 0;
  }
  $cmp187189 = ($38|0)<($0|0);
  if ($cmp187189) {
   $j159$1190 = $38;$k$1191 = $k$0$lcssa;
   while(1) {
    $52 = load4($x217);
    $arrayidx190 = (($call) + ($j159$1190<<2)|0);
    $53 = load4($arrayidx190);
    $arrayidx191 = (($52) + ($53<<2)|0);
    $54 = load4($arrayidx191);
    $55 = load4($x);
    $arrayidx193 = (($55) + ($k$1191<<2)|0);
    store4($arrayidx193,$54);
    $56 = load4($y194);
    $arrayidx196 = (($56) + ($53<<3)|0);
    $57 = loadd($arrayidx196);
    $58 = load4($y);
    $arrayidx198 = (($58) + ($k$1191<<3)|0);
    stored($arrayidx198,$57);
    $inc199 = (($k$1191) + 1)|0;
    $inc201 = (($j159$1190) + 1)|0;
    $exitcond229 = ($inc201|0)==($0|0);
    if ($exitcond229) {
     break;
    } else {
     $j159$1190 = $inc201;$k$1191 = $inc199;
    }
   }
  }
  $call203 = (_svm_train($start,$param)|0);
  $59 = load4($probability);
  $tobool = ($59|0)==(0);
  if ($tobool) {
   label = 46;
  } else {
   $60 = load4($param);
   $switch180 = ($60>>>0)<(2);
   if ($switch180) {
    $nr_class$i = ((($call203)) + 96|0);
    $61 = load4($nr_class$i);
    $mul212 = $61 << 3;
    $call213 = (_malloc($mul212)|0);
    $cmp215192 = ($39|0)<($38|0);
    if ($cmp215192) {
     $j159$2193 = $39;
     while(1) {
      $62 = load4($x217);
      $arrayidx218 = (($call) + ($j159$2193<<2)|0);
      $63 = load4($arrayidx218);
      $arrayidx219 = (($62) + ($63<<2)|0);
      $64 = load4($arrayidx219);
      $call220 = (+_svm_predict_probability($call203,$64,$call213));
      $arrayidx222 = (($target) + ($63<<3)|0);
      stored($arrayidx222,$call220);
      $inc224 = (($j159$2193) + 1)|0;
      $exitcond230 = ($inc224|0)==($38|0);
      if ($exitcond230) {
       break;
      } else {
       $j159$2193 = $inc224;
      }
     }
    }
    _free($call213);
   } else {
    label = 46;
   }
  }
  if ((label|0) == 46) {
   label = 0;
   $cmp228194 = ($39|0)<($38|0);
   if ($cmp228194) {
    $nr_class1$i = ((($call203)) + 96|0);
    $j159$3195 = $39;
    while(1) {
     $65 = load4($x217);
     $arrayidx231 = (($call) + ($j159$3195<<2)|0);
     $66 = load4($arrayidx231);
     $arrayidx232 = (($65) + ($66<<2)|0);
     $67 = load4($arrayidx232);
     $68 = load4($nr_class1$i);
     $69 = load4($call203);
     $$off$i = (($69) + -2)|0;
     $switch$i = ($$off$i>>>0)<(3);
     if ($switch$i) {
      $mul9$sink$i = 8;
     } else {
      $sub$i = (($68) + -1)|0;
      $mul$i = Math_imul($sub$i, $68)|0;
      $div$i = (($mul$i|0) / 2)&-1;
      $mul9$i = $div$i << 3;
      $mul9$sink$i = $mul9$i;
     }
     $call10$i = (_malloc($mul9$sink$i)|0);
     $call11$i = (+_svm_predict_values($call203,$67,$call10$i));
     _free($call10$i);
     $arrayidx235 = (($target) + ($66<<3)|0);
     stored($arrayidx235,$call11$i);
     $inc237 = (($j159$3195) + 1)|0;
     $exitcond231 = ($inc237|0)==($38|0);
     if ($exitcond231) {
      break;
     } else {
      $j159$3195 = $inc237;
     }
    }
   }
  }
  $cmp1$i = ($call203|0)==(0|0);
  if (!($cmp1$i)) {
   _svm_free_model_content($call203);
   _free($call203);
  }
  $70 = load4($x);
  _free($70);
  $71 = load4($y);
  _free($71);
  $cmp152 = ($add157|0)<($nr_fold$addr$0|0);
  if ($cmp152) {
   $39 = $38;$i$9197 = $add157;
  } else {
   break;
  }
 }
 _free($call4);
 _free($call);
 STACKTOP = sp;return;
}
function __ZL13svm_train_onePK11svm_problemPK13svm_parameterdd($agg$result,$prob,$param,$Cp,$Cn) {
 $agg$result = $agg$result|0;
 $prob = $prob|0;
 $param = $param|0;
 $Cp = +$Cp;
 $Cn = +$Cn;
 var $$arith = 0, $$arith19 = 0, $$arith23 = 0, $$arith27 = 0, $$arith31 = 0, $$overflow = 0, $$overflow20 = 0, $$overflow24 = 0, $$overflow28 = 0, $$overflow32 = 0, $$pre$i = 0.0, $$sink$i = 0, $$sink$i38 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0.0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0.0, $22 = 0, $23 = 0.0, $24 = 0, $25 = 0.0, $26 = 0.0, $27 = 0.0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0.0, $32 = 0.0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0.0, $39 = 0.0, $4 = 0, $40 = 0.0, $41 = 0.0, $42 = 0, $43 = 0.0, $44 = 0.0, $45 = 0.0, $46 = 0.0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0.0;
 var $51 = 0, $52 = 0.0, $53 = 0.0, $54 = 0.0, $55 = 0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0.0, $60 = 0.0, $61 = 0, $62 = 0.0, $63 = 0.0, $64 = 0.0, $65 = 0.0, $66 = 0, $67 = 0.0, $7 = 0.0, $8 = 0;
 var $9 = 0.0, $C$i = 0, $C2$i = 0, $add$i = 0.0, $add$i121 = 0, $add$i89 = 0, $add14$i = 0.0, $add29$i = 0, $add35$i = 0.0, $add35$i134 = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i122 = 0, $arrayidx$i36 = 0, $arrayidx$i64 = 0, $arrayidx$i86 = 0, $arrayidx10$i = 0, $arrayidx10$i123 = 0, $arrayidx12$i = 0, $arrayidx13$i = 0;
 var $arrayidx13$i125 = 0, $arrayidx15$i = 0, $arrayidx16$i = 0, $arrayidx16$i126 = 0, $arrayidx16$i90 = 0, $arrayidx18$i = 0, $arrayidx20$i = 0, $arrayidx22$i = 0, $arrayidx28$i = 0, $arrayidx29$i = 0, $arrayidx3$i = 0, $arrayidx30$i = 0, $arrayidx32$i = 0, $arrayidx32$i97 = 0, $arrayidx34$i = 0, $arrayidx36$i = 0, $arrayidx38$i = 0, $arrayidx48$i = 0, $arrayidx5$i = 0, $arrayidx5$i37 = 0;
 var $arrayidx52$i = 0, $arrayidx7$i = 0, $arrayidx7$i87 = 0, $arrayidx8 = 0, $arrayidx8$i = 0, $arrayidx9$i = 0, $call = 0, $call$i = 0, $call$i114 = 0, $call$i34 = 0, $call$i60 = 0, $call$i84 = 0, $call2$i = 0, $call2$i61 = 0, $call29$i = 0, $call3$i = 0, $call34$i = 0.0, $call4$i = 0, $call5$i = 0, $call6 = 0.0;
 var $call6$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i$i119 = 0, $cmp$i73$i = 0, $cmp13 = 0, $cmp14$i = 0, $cmp145 = 0, $cmp15$i = 0, $cmp18 = 0, $cmp20$i = 0, $cmp2143$i = 0, $cmp4$i = 0, $cmp45$i = 0, $cmp51$i = 0, $cmp6$i = 0, $cmp6$i68 = 0, $cmp64$i = 0, $cmp65$i = 0, $cmp7 = 0;
 var $cmp83$i = 0, $cmp9 = 0, $cond$i$i = 0.0, $cond$i$i120 = 0.0, $cond$i74$i = 0.0, $cond$i74$sink$i = 0.0, $conv$i = 0.0, $conv$i104 = 0.0, $conv$i115 = 0.0, $conv$i41 = 0.0, $conv$i62 = 0.0, $conv11$i = 0.0, $conv31$i = 0.0, $conv4$i = 0, $conv4$sink$i = 0, $conv50$i = 0.0, $div$i = 0.0, $div$i105 = 0.0, $div$i117 = 0.0, $div$i43 = 0.0;
 var $div42$i = 0.0, $div51$i = 0.0, $div57$i = 0.0, $div59$i = 0.0, $eps$i = 0, $eps$i130 = 0, $eps$i45 = 0, $eps$i71 = 0, $eps$i94 = 0, $exitcond$i = 0, $exitcond$i135 = 0, $exitcond$i48 = 0, $exitcond$i66 = 0, $exitcond$i98 = 0, $exitcond53$i = 0, $exitcond54$i = 0, $exitcond66$i = 0, $exitcond68$i = 0, $exitcond86$i = 0, $exitcond87$i = 0;
 var $i$0148 = 0, $i$046$i = 0, $i$052$i = 0, $i$065$i = 0, $i$066$i = 0, $i$084$i = 0, $i$1$i = 0, $i$1$in$i = 0, $i$149$i = 0, $i$162$i = 0, $i$164$i = 0, $i$182$i = 0, $i$247$i = 0, $i$376$i = 0, $inc = 0, $inc$i = 0, $inc$i127 = 0, $inc$i39 = 0, $inc$i65 = 0, $inc$i91 = 0;
 var $inc15 = 0, $inc18$i = 0, $inc20 = 0, $inc24 = 0, $inc27$i = 0, $inc35$i = 0, $inc37$i = 0, $inc40$i = 0, $inc55$i = 0, $mul = 0, $mul$i = 0.0, $mul$i113 = 0, $mul$i42 = 0.0, $mul$i63 = 0.0, $mul$i83 = 0, $mul33$i = 0.0, $mul40$i = 0.0, $mul53$i = 0.0, $mul58$i = 0.0, $mul7$i = 0.0;
 var $mul8$i = 0.0, $nBSV$0$lcssa = 0, $nBSV$0147 = 0, $nBSV$1 = 0, $nSV$0$lcssa = 0, $nSV$0146 = 0, $nSV$1 = 0, $nu$i = 0, $nu$i116 = 0, $nu2$i = 0, $p$i = 0, $r$i = 0, $r41$i = 0, $ref$tmp$i111 = 0, $rho = 0, $rho$i = 0, $rho27 = 0, $s$i110 = 0, $shrinking$i = 0, $shrinking$i131 = 0;
 var $shrinking$i46 = 0, $shrinking$i72 = 0, $shrinking$i95 = 0, $si = 0, $si2$i$i = 0, $si2$i$i132 = 0, $sub$i = 0.0, $sub$i124 = 0.0, $sub$i70 = 0.0, $sub$i88 = 0.0, $sub$sink$i = 0.0, $sub14$i = 0.0, $sub24$i = 0.0, $sub28$i = 0.0, $sub31$i = 0.0, $sub37$i = 0.0, $sum$067$i = 0.0, $sum_alpha$0$lcssa$i = 0.0, $sum_alpha$0$lcssa$i103 = 0.0, $sum_alpha$050$i = 0.0;
 var $sum_alpha$063$i = 0.0, $sum_neg$080$i = 0.0, $sum_neg$1$i = 0.0, $sum_pos$081$i = 0.0, $sum_pos$1$i = 0.0, $upper_bound_n = 0, $upper_bound_n$i = 0, $upper_bound_p = 0, $upper_bound_p$i = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer10 = 0, $vararg_buffer14 = 0, $vararg_buffer4 = 0, $vararg_buffer7 = 0, $vararg_ptr13 = 0, $vararg_ptr17 = 0, $y = 0, $y12$i = 0, $y3$i = 0;
 var $y4$i = 0, $y6$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $vararg_buffer14 = sp + 248|0;
 $vararg_buffer10 = sp + 232|0;
 $vararg_buffer7 = sp + 224|0;
 $vararg_buffer4 = sp + 216|0;
 $vararg_buffer1 = sp + 208|0;
 $vararg_buffer = sp + 200|0;
 $s$i110 = sp + 120|0;
 $ref$tmp$i111 = sp + 40|0;
 $si = sp;
 $0 = load4($prob);
 $mul = $0 << 3;
 $call = (_malloc($mul)|0);
 $1 = load4($param);
 switch ($1|0) {
 case 0:  {
  $$arith31 = $0<<3;
  $$overflow32 = ($0>>>0)>(536870911);
  $2 = $$overflow32 ? -1 : $$arith31;
  $call$i = (__Znaj($2)|0);
  $3 = ($0|0)>(-1);
  $4 = $3 ? $0 : -1;
  $call2$i = (__Znaj($4)|0);
  $cmp51$i = ($0|0)>(0);
  if ($cmp51$i) {
   $y4$i = ((($prob)) + 4|0);
   $5 = load4($y4$i);
   $i$052$i = 0;
   while(1) {
    $arrayidx$i = (($call) + ($i$052$i<<3)|0);
    stored($arrayidx$i,0.0);
    $arrayidx3$i = (($call$i) + ($i$052$i<<3)|0);
    stored($arrayidx3$i,-1.0);
    $arrayidx5$i = (($5) + ($i$052$i<<3)|0);
    $6 = loadd($arrayidx5$i);
    $cmp6$i = $6 > 0.0;
    $arrayidx7$i = (($call2$i) + ($i$052$i)|0);
    $$sink$i = $cmp6$i ? 1 : -1;
    store1($arrayidx7$i,$$sink$i);
    $inc$i = (($i$052$i) + 1)|0;
    $exitcond54$i = ($inc$i|0)==($0|0);
    if ($exitcond54$i) {
     break;
    } else {
     $i$052$i = $inc$i;
    }
   }
  }
  store4($s$i110,(1268));
  __ZN5SVC_QC2ERK11svm_problemRK13svm_parameterPKa($ref$tmp$i111,$prob,$param,$call2$i);
  $eps$i = ((($param)) + 40|0);
  $7 = loadd($eps$i);
  $shrinking$i = ((($param)) + 88|0);
  $8 = load4($shrinking$i);
  __ZN6Solver5SolveEiRK7QMatrixPKdPKaPddddPNS_12SolutionInfoEi($s$i110,$0,$ref$tmp$i111,$call$i,$call2$i,$call,$Cp,$Cn,$7,$si,$8);
  __ZN5SVC_QD2Ev($ref$tmp$i111);
  if ($cmp51$i) {
   $i$149$i = 0;$sum_alpha$050$i = 0.0;
   while(1) {
    $arrayidx16$i = (($call) + ($i$149$i<<3)|0);
    $9 = loadd($arrayidx16$i);
    $add$i = $sum_alpha$050$i + $9;
    $inc18$i = (($i$149$i) + 1)|0;
    $exitcond53$i = ($inc18$i|0)==($0|0);
    if ($exitcond53$i) {
     $sum_alpha$0$lcssa$i = $add$i;
     break;
    } else {
     $i$149$i = $inc18$i;$sum_alpha$050$i = $add$i;
    }
   }
  } else {
   $sum_alpha$0$lcssa$i = 0.0;
  }
  $cmp20$i = $Cp == $Cn;
  if ($cmp20$i) {
   $10 = load4($prob);
   $conv$i = (+($10|0));
   $mul$i = $conv$i * $Cp;
   $div$i = $sum_alpha$0$lcssa$i / $mul$i;
   stored($vararg_buffer,$div$i);
   __ZL4infoPKcz(3034,$vararg_buffer);
  }
  if ($cmp51$i) {
   $i$247$i = 0;
   while(1) {
    $arrayidx29$i = (($call2$i) + ($i$247$i)|0);
    $11 = load1($arrayidx29$i);
    $conv31$i = (+($11<<24>>24));
    $arrayidx32$i = (($call) + ($i$247$i<<3)|0);
    $12 = loadd($arrayidx32$i);
    $mul33$i = $12 * $conv31$i;
    stored($arrayidx32$i,$mul33$i);
    $inc35$i = (($i$247$i) + 1)|0;
    $exitcond$i = ($inc35$i|0)==($0|0);
    if ($exitcond$i) {
     break;
    } else {
     $i$247$i = $inc35$i;
    }
   }
  }
  __ZdaPv($call$i);
  __ZdaPv($call2$i);
  break;
 }
 case 1:  {
  $nu2$i = ((($param)) + 72|0);
  $13 = loadd($nu2$i);
  $14 = ($0|0)>(-1);
  $15 = $14 ? $0 : -1;
  $call$i34 = (__Znaj($15)|0);
  $cmp83$i = ($0|0)>(0);
  if ($cmp83$i) {
   $y3$i = ((($prob)) + 4|0);
   $16 = load4($y3$i);
   $i$084$i = 0;
   while(1) {
    $arrayidx$i36 = (($16) + ($i$084$i<<3)|0);
    $17 = loadd($arrayidx$i36);
    $cmp4$i = $17 > 0.0;
    $arrayidx5$i37 = (($call$i34) + ($i$084$i)|0);
    $$sink$i38 = $cmp4$i ? 1 : -1;
    store1($arrayidx5$i37,$$sink$i38);
    $inc$i39 = (($i$084$i) + 1)|0;
    $exitcond87$i = ($inc$i39|0)==($0|0);
    if ($exitcond87$i) {
     break;
    } else {
     $i$084$i = $inc$i39;
    }
   }
   $conv$i41 = (+($0|0));
   $mul$i42 = $13 * $conv$i41;
   $div$i43 = $mul$i42 * 0.5;
   $i$182$i = 0;$sum_neg$080$i = $div$i43;$sum_pos$081$i = $div$i43;
   while(1) {
    $arrayidx13$i = (($call$i34) + ($i$182$i)|0);
    $18 = load1($arrayidx13$i);
    $cmp15$i = ($18<<24>>24)==(1);
    if ($cmp15$i) {
     $cmp$i$i = $sum_pos$081$i > 1.0;
     $cond$i$i = $cmp$i$i ? 1.0 : $sum_pos$081$i;
     $sub$i = $sum_pos$081$i - $cond$i$i;
     $cond$i74$sink$i = $cond$i$i;$sum_neg$1$i = $sum_neg$080$i;$sum_pos$1$i = $sub$i;
    } else {
     $cmp$i73$i = $sum_neg$080$i > 1.0;
     $cond$i74$i = $cmp$i73$i ? 1.0 : $sum_neg$080$i;
     $sub24$i = $sum_neg$080$i - $cond$i74$i;
     $cond$i74$sink$i = $cond$i74$i;$sum_neg$1$i = $sub24$i;$sum_pos$1$i = $sum_pos$081$i;
    }
    $19 = (($call) + ($i$182$i<<3)|0);
    stored($19,$cond$i74$sink$i);
    $inc27$i = (($i$182$i) + 1)|0;
    $exitcond86$i = ($inc27$i|0)==($0|0);
    if ($exitcond86$i) {
     break;
    } else {
     $i$182$i = $inc27$i;$sum_neg$080$i = $sum_neg$1$i;$sum_pos$081$i = $sum_pos$1$i;
    }
   }
  }
  $$arith27 = $0<<3;
  $$overflow28 = ($0>>>0)>(536870911);
  $20 = $$overflow28 ? -1 : $$arith27;
  $call29$i = (__Znaj($20)|0);
  if ($cmp83$i) {
   _memset(($call29$i|0),0,($mul|0))|0;
  }
  store4($s$i110,(1300));
  __ZN5SVC_QC2ERK11svm_problemRK13svm_parameterPKa($ref$tmp$i111,$prob,$param,$call$i34);
  $eps$i45 = ((($param)) + 40|0);
  $21 = loadd($eps$i45);
  $shrinking$i46 = ((($param)) + 88|0);
  $22 = load4($shrinking$i46);
  $si2$i$i = ((($s$i110)) + 76|0);
  store4($si2$i$i,$si);
  __ZN6Solver5SolveEiRK7QMatrixPKdPKaPddddPNS_12SolutionInfoEi($s$i110,$0,$ref$tmp$i111,$call29$i,$call$i34,$call,1.0,1.0,$21,$si,$22);
  __ZN5SVC_QD2Ev($ref$tmp$i111);
  $r41$i = ((($si)) + 32|0);
  $23 = loadd($r41$i);
  $div42$i = 1.0 / $23;
  stored($vararg_buffer1,$div42$i);
  __ZL4infoPKcz(3043,$vararg_buffer1);
  if ($cmp83$i) {
   $i$376$i = 0;
   while(1) {
    $arrayidx48$i = (($call$i34) + ($i$376$i)|0);
    $24 = load1($arrayidx48$i);
    $conv50$i = (+($24<<24>>24));
    $div51$i = $conv50$i / $23;
    $arrayidx52$i = (($call) + ($i$376$i<<3)|0);
    $25 = loadd($arrayidx52$i);
    $mul53$i = $25 * $div51$i;
    stored($arrayidx52$i,$mul53$i);
    $inc55$i = (($i$376$i) + 1)|0;
    $exitcond$i48 = ($inc55$i|0)==($0|0);
    if ($exitcond$i48) {
     break;
    } else {
     $i$376$i = $inc55$i;
    }
   }
  }
  $rho$i = ((($si)) + 8|0);
  $26 = loadd($rho$i);
  $div57$i = $26 / $23;
  stored($rho$i,$div57$i);
  $mul58$i = $23 * $23;
  $27 = loadd($si);
  $div59$i = $27 / $mul58$i;
  stored($si,$div59$i);
  $upper_bound_p$i = ((($si)) + 16|0);
  stored($upper_bound_p$i,$div42$i);
  $upper_bound_n$i = ((($si)) + 24|0);
  stored($upper_bound_n$i,$div42$i);
  __ZdaPv($call$i34);
  __ZdaPv($call29$i);
  break;
 }
 case 2:  {
  $$arith23 = $0<<3;
  $$overflow24 = ($0>>>0)>(536870911);
  $28 = $$overflow24 ? -1 : $$arith23;
  $call$i60 = (__Znaj($28)|0);
  $29 = ($0|0)>(-1);
  $30 = $29 ? $0 : -1;
  $call2$i61 = (__Znaj($30)|0);
  $nu$i = ((($param)) + 72|0);
  $31 = loadd($nu$i);
  $conv$i62 = (+($0|0));
  $mul$i63 = $conv$i62 * $31;
  $conv4$i = (~~(($mul$i63)));
  $cmp45$i = ($conv4$i|0)>(0);
  if ($cmp45$i) {
   $i$046$i = 0;
   while(1) {
    $arrayidx$i64 = (($call) + ($i$046$i<<3)|0);
    stored($arrayidx$i64,1.0);
    $inc$i65 = (($i$046$i) + 1)|0;
    $exitcond$i66 = ($inc$i65|0)==($conv4$i|0);
    if ($exitcond$i66) {
     break;
    } else {
     $i$046$i = $inc$i65;
    }
   }
  }
  $cmp6$i68 = ($conv4$i|0)<($0|0);
  if ($cmp6$i68) {
   $conv11$i = (+($conv4$i|0));
   $sub$i70 = $mul$i63 - $conv11$i;
   $conv4$sink$i = $conv4$i;$sub$sink$i = $sub$i70;
   label = 29;
  } else {
   $i$1$in$i = $conv4$i;
   label = 30;
  }
  while(1) {
   if ((label|0) == 29) {
    label = 0;
    $arrayidx12$i = (($call) + ($conv4$sink$i<<3)|0);
    stored($arrayidx12$i,$sub$sink$i);
    $i$1$in$i = $conv4$sink$i;
    label = 30;
    continue;
   }
   else if ((label|0) == 30) {
    label = 0;
    $i$1$i = (($i$1$in$i) + 1)|0;
    $cmp14$i = ($i$1$i|0)<($0|0);
    if ($cmp14$i) {
     $conv4$sink$i = $i$1$i;$sub$sink$i = 0.0;
     label = 29;
     continue;
    } else {
     break;
    }
   }
  }
  $cmp2143$i = ($0|0)>(0);
  if ($cmp2143$i) {
   _memset(($call$i60|0),0,($mul|0))|0;
   _memset(($call2$i61|0),1,($0|0))|0;
  }
  store4($s$i110,(1268));
  __ZN11ONE_CLASS_QC2ERK11svm_problemRK13svm_parameter($ref$tmp$i111,$prob,$param);
  $eps$i71 = ((($param)) + 40|0);
  $32 = loadd($eps$i71);
  $shrinking$i72 = ((($param)) + 88|0);
  $33 = load4($shrinking$i72);
  __ZN6Solver5SolveEiRK7QMatrixPKdPKaPddddPNS_12SolutionInfoEi($s$i110,$0,$ref$tmp$i111,$call$i60,$call2$i61,$call,1.0,1.0,$32,$si,$33);
  __ZN11ONE_CLASS_QD2Ev($ref$tmp$i111);
  __ZdaPv($call$i60);
  __ZdaPv($call2$i61);
  break;
 }
 case 3:  {
  $mul$i83 = $0 << 1;
  $$arith19 = $mul$i83<<3;
  $$overflow20 = ($mul$i83>>>0)>(536870911);
  $34 = $$overflow20 ? -1 : $$arith19;
  $call$i84 = (__Znaj($34)|0);
  $call3$i = (__Znaj($34)|0);
  $35 = ($0|0)<(0);
  $36 = $35 ? -1 : $mul$i83;
  $call5$i = (__Znaj($36)|0);
  $cmp64$i = ($0|0)>(0);
  if ($cmp64$i) {
   $p$i = ((($param)) + 80|0);
   $y6$i = ((($prob)) + 4|0);
   $37 = load4($y6$i);
   $$pre$i = loadd($p$i);
   $i$065$i = 0;
   while(1) {
    $arrayidx$i86 = (($call$i84) + ($i$065$i<<3)|0);
    stored($arrayidx$i86,0.0);
    $arrayidx7$i87 = (($37) + ($i$065$i<<3)|0);
    $38 = loadd($arrayidx7$i87);
    $sub$i88 = $$pre$i - $38;
    $arrayidx8$i = (($call3$i) + ($i$065$i<<3)|0);
    stored($arrayidx8$i,$sub$i88);
    $arrayidx9$i = (($call5$i) + ($i$065$i)|0);
    store1($arrayidx9$i,1);
    $add$i89 = (($i$065$i) + ($0))|0;
    $arrayidx10$i = (($call$i84) + ($add$i89<<3)|0);
    stored($arrayidx10$i,0.0);
    $39 = loadd($arrayidx7$i87);
    $add14$i = $$pre$i + $39;
    $arrayidx16$i90 = (($call3$i) + ($add$i89<<3)|0);
    stored($arrayidx16$i90,$add14$i);
    $arrayidx18$i = (($call5$i) + ($add$i89)|0);
    store1($arrayidx18$i,-1);
    $inc$i91 = (($i$065$i) + 1)|0;
    $exitcond66$i = ($inc$i91|0)==($0|0);
    if ($exitcond66$i) {
     break;
    } else {
     $i$065$i = $inc$i91;
    }
   }
  }
  store4($s$i110,(1268));
  __ZN5SVR_QC2ERK11svm_problemRK13svm_parameter($ref$tmp$i111,$prob,$param);
  $C$i = ((($param)) + 48|0);
  $40 = loadd($C$i);
  $eps$i94 = ((($param)) + 40|0);
  $41 = loadd($eps$i94);
  $shrinking$i95 = ((($param)) + 88|0);
  $42 = load4($shrinking$i95);
  __ZN6Solver5SolveEiRK7QMatrixPKdPKaPddddPNS_12SolutionInfoEi($s$i110,$mul$i83,$ref$tmp$i111,$call3$i,$call5$i,$call$i84,$40,$40,$41,$si,$42);
  __ZN5SVR_QD2Ev($ref$tmp$i111);
  if ($cmp64$i) {
   $i$162$i = 0;$sum_alpha$063$i = 0.0;
   while(1) {
    $arrayidx28$i = (($call$i84) + ($i$162$i<<3)|0);
    $43 = loadd($arrayidx28$i);
    $add29$i = (($i$162$i) + ($0))|0;
    $arrayidx30$i = (($call$i84) + ($add29$i<<3)|0);
    $44 = loadd($arrayidx30$i);
    $sub31$i = $43 - $44;
    $arrayidx32$i97 = (($call) + ($i$162$i<<3)|0);
    stored($arrayidx32$i97,$sub31$i);
    $call34$i = (+Math_abs((+$sub31$i)));
    $add35$i = $sum_alpha$063$i + $call34$i;
    $inc37$i = (($i$162$i) + 1)|0;
    $exitcond$i98 = ($inc37$i|0)==($0|0);
    if ($exitcond$i98) {
     $sum_alpha$0$lcssa$i103 = $add35$i;
     break;
    } else {
     $i$162$i = $inc37$i;$sum_alpha$063$i = $add35$i;
    }
   }
  } else {
   $sum_alpha$0$lcssa$i103 = 0.0;
  }
  $45 = loadd($C$i);
  $conv$i104 = (+($0|0));
  $mul40$i = $conv$i104 * $45;
  $div$i105 = $sum_alpha$0$lcssa$i103 / $mul40$i;
  stored($vararg_buffer4,$div$i105);
  __ZL4infoPKcz(3034,$vararg_buffer4);
  __ZdaPv($call$i84);
  __ZdaPv($call3$i);
  __ZdaPv($call5$i);
  break;
 }
 case 4:  {
  $C2$i = ((($param)) + 48|0);
  $46 = loadd($C2$i);
  $mul$i113 = $0 << 1;
  $$arith = $mul$i113<<3;
  $$overflow = ($mul$i113>>>0)>(536870911);
  $47 = $$overflow ? -1 : $$arith;
  $call$i114 = (__Znaj($47)|0);
  $call4$i = (__Znaj($47)|0);
  $48 = ($0|0)<(0);
  $49 = $48 ? -1 : $mul$i113;
  $call6$i = (__Znaj($49)|0);
  $cmp65$i = ($0|0)>(0);
  if ($cmp65$i) {
   $conv$i115 = (+($0|0));
   $nu$i116 = ((($param)) + 72|0);
   $50 = loadd($nu$i116);
   $mul7$i = $46 * $50;
   $mul8$i = $conv$i115 * $mul7$i;
   $div$i117 = $mul8$i * 0.5;
   $y12$i = ((($prob)) + 4|0);
   $51 = load4($y12$i);
   $i$066$i = 0;$sum$067$i = $div$i117;
   while(1) {
    $cmp$i$i119 = $sum$067$i < $46;
    $cond$i$i120 = $cmp$i$i119 ? $sum$067$i : $46;
    $add$i121 = (($i$066$i) + ($0))|0;
    $arrayidx$i122 = (($call$i114) + ($add$i121<<3)|0);
    stored($arrayidx$i122,$cond$i$i120);
    $arrayidx10$i123 = (($call$i114) + ($i$066$i<<3)|0);
    stored($arrayidx10$i123,$cond$i$i120);
    $sub$i124 = $sum$067$i - $cond$i$i120;
    $arrayidx13$i125 = (($51) + ($i$066$i<<3)|0);
    $52 = loadd($arrayidx13$i125);
    $sub14$i = -$52;
    $arrayidx15$i = (($call4$i) + ($i$066$i<<3)|0);
    stored($arrayidx15$i,$sub14$i);
    $arrayidx16$i126 = (($call6$i) + ($i$066$i)|0);
    store1($arrayidx16$i126,1);
    $53 = loadd($arrayidx13$i125);
    $arrayidx20$i = (($call4$i) + ($add$i121<<3)|0);
    stored($arrayidx20$i,$53);
    $arrayidx22$i = (($call6$i) + ($add$i121)|0);
    store1($arrayidx22$i,-1);
    $inc$i127 = (($i$066$i) + 1)|0;
    $exitcond68$i = ($inc$i127|0)==($0|0);
    if ($exitcond68$i) {
     break;
    } else {
     $i$066$i = $inc$i127;$sum$067$i = $sub$i124;
    }
   }
  }
  store4($s$i110,(1300));
  __ZN5SVR_QC2ERK11svm_problemRK13svm_parameter($ref$tmp$i111,$prob,$param);
  $eps$i130 = ((($param)) + 40|0);
  $54 = loadd($eps$i130);
  $shrinking$i131 = ((($param)) + 88|0);
  $55 = load4($shrinking$i131);
  $si2$i$i132 = ((($s$i110)) + 76|0);
  store4($si2$i$i132,$si);
  __ZN6Solver5SolveEiRK7QMatrixPKdPKaPddddPNS_12SolutionInfoEi($s$i110,$mul$i113,$ref$tmp$i111,$call4$i,$call6$i,$call$i114,$46,$46,$54,$si,$55);
  __ZN5SVR_QD2Ev($ref$tmp$i111);
  $r$i = ((($si)) + 32|0);
  $56 = loadd($r$i);
  $sub28$i = -$56;
  stored($vararg_buffer7,$sub28$i);
  __ZL4infoPKcz(3051,$vararg_buffer7);
  if ($cmp65$i) {
   $i$164$i = 0;
   while(1) {
    $arrayidx34$i = (($call$i114) + ($i$164$i<<3)|0);
    $57 = loadd($arrayidx34$i);
    $add35$i134 = (($i$164$i) + ($0))|0;
    $arrayidx36$i = (($call$i114) + ($add35$i134<<3)|0);
    $58 = loadd($arrayidx36$i);
    $sub37$i = $57 - $58;
    $arrayidx38$i = (($call) + ($i$164$i<<3)|0);
    stored($arrayidx38$i,$sub37$i);
    $inc40$i = (($i$164$i) + 1)|0;
    $exitcond$i135 = ($inc40$i|0)==($0|0);
    if ($exitcond$i135) {
     break;
    } else {
     $i$164$i = $inc40$i;
    }
   }
  }
  __ZdaPv($call$i114);
  __ZdaPv($call4$i);
  __ZdaPv($call6$i);
  break;
 }
 default: {
 }
 }
 $59 = loadd($si);
 $rho = ((($si)) + 8|0);
 $60 = loadd($rho);
 stored($vararg_buffer10,$59);
 $vararg_ptr13 = ((($vararg_buffer10)) + 8|0);
 stored($vararg_ptr13,$60);
 __ZL4infoPKcz(3065,$vararg_buffer10);
 $61 = load4($prob);
 $cmp145 = ($61|0)>(0);
 if (!($cmp145)) {
  $nBSV$0$lcssa = 0;$nSV$0$lcssa = 0;
  store4($vararg_buffer14,$nSV$0$lcssa);
  $vararg_ptr17 = ((($vararg_buffer14)) + 4|0);
  store4($vararg_ptr17,$nBSV$0$lcssa);
  __ZL4infoPKcz(3085,$vararg_buffer14);
  store4($agg$result,$call);
  $64 = loadd($rho);
  $rho27 = ((($agg$result)) + 8|0);
  stored($rho27,$64);
  STACKTOP = sp;return;
 }
 $y = ((($prob)) + 4|0);
 $upper_bound_p = ((($si)) + 16|0);
 $62 = loadd($upper_bound_p);
 $upper_bound_n = ((($si)) + 24|0);
 $63 = loadd($upper_bound_n);
 $i$0148 = 0;$nBSV$0147 = 0;$nSV$0146 = 0;
 while(1) {
  $arrayidx = (($call) + ($i$0148<<3)|0);
  $65 = loadd($arrayidx);
  $call6 = (+Math_abs((+$65)));
  $cmp7 = ($65 != $65) | (0.0 != 0.0) |($65 == 0.0);
  do {
   if ($cmp7) {
    $nBSV$1 = $nBSV$0147;$nSV$1 = $nSV$0146;
   } else {
    $inc = (($nSV$0146) + 1)|0;
    $66 = load4($y);
    $arrayidx8 = (($66) + ($i$0148<<3)|0);
    $67 = loadd($arrayidx8);
    $cmp9 = $67 > 0.0;
    if ($cmp9) {
     $cmp13 = !($call6 >= $62);
     if ($cmp13) {
      $nBSV$1 = $nBSV$0147;$nSV$1 = $inc;
      break;
     }
     $inc15 = (($nBSV$0147) + 1)|0;
     $nBSV$1 = $inc15;$nSV$1 = $inc;
     break;
    } else {
     $cmp18 = !($call6 >= $63);
     if ($cmp18) {
      $nBSV$1 = $nBSV$0147;$nSV$1 = $inc;
      break;
     }
     $inc20 = (($nBSV$0147) + 1)|0;
     $nBSV$1 = $inc20;$nSV$1 = $inc;
     break;
    }
   }
  } while(0);
  $inc24 = (($i$0148) + 1)|0;
  $cmp = ($inc24|0)<($61|0);
  if ($cmp) {
   $i$0148 = $inc24;$nBSV$0147 = $nBSV$1;$nSV$0146 = $nSV$1;
  } else {
   $nBSV$0$lcssa = $nBSV$1;$nSV$0$lcssa = $nSV$1;
   break;
  }
 }
 store4($vararg_buffer14,$nSV$0$lcssa);
 $vararg_ptr17 = ((($vararg_buffer14)) + 4|0);
 store4($vararg_ptr17,$nBSV$0$lcssa);
 __ZL4infoPKcz(3085,$vararg_buffer14);
 store4($agg$result,$call);
 $64 = loadd($rho);
 $rho27 = ((($agg$result)) + 8|0);
 stored($rho27,$64);
 STACKTOP = sp;return;
}
function __ZL17svm_group_classesPK11svm_problemPiPS2_S3_S3_S2_($prob,$nr_class_ret,$label_ret,$start_ret,$count_ret,$perm) {
 $prob = $prob|0;
 $nr_class_ret = $nr_class_ret|0;
 $label_ret = $label_ret|0;
 $start_ret = $start_ret|0;
 $count_ret = $count_ret|0;
 $perm = $perm|0;
 var $$lcssa119 = 0, $$lcssa87117 = 0, $$sink = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0.0, $20 = 0, $21 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add88 = 0, $arrayidx = 0, $arrayidx11 = 0, $arrayidx13 = 0, $arrayidx24 = 0, $arrayidx25 = 0, $arrayidx35 = 0, $arrayidx41 = 0, $arrayidx45 = 0, $arrayidx63 = 0, $arrayidx64 = 0, $arrayidx71 = 0, $arrayidx72 = 0, $arrayidx73 = 0;
 var $arrayidx87 = 0, $arrayidx89 = 0, $arrayidx9 = 0, $call = 0, $call20 = 0, $call22 = 0, $call3 = 0, $call5 = 0, $call56 = 0, $cmp10 = 0, $cmp14 = 0, $cmp16 = 0, $cmp31 = 0, $cmp33 = 0, $cmp36 = 0, $cmp46 = 0, $cmp5992 = 0, $cmp7 = 0, $cmp796 = 0, $cmp98 = 0;
 var $conv = 0, $count$0$lcssa118 = 0, $count$099 = 0, $count$1 = 0, $count$2 = 0, $exitcond = 0, $exitcond112 = 0, $exitcond113 = 0, $exitcond114 = 0, $exitcond115 = 0, $i$0101 = 0, $i$195 = 0, $i$293 = 0, $i$391 = 0, $i$489 = 0, $inc = 0, $inc12 = 0, $inc26 = 0, $inc29 = 0, $inc52 = 0;
 var $inc66 = 0, $inc76 = 0, $inc78 = 0, $inc91 = 0, $j$086 = 0, $j$097 = 0, $label$0100 = 0, $label$1 = 0, $label$2 = 0, $max_nr_class$0103 = 0, $max_nr_class$1 = 0, $max_nr_class$2 = 0, $mul18 = 0, $mul19 = 0, $mul4 = 0, $mul55 = 0, $nr_class$0$lcssa120 = 0, $nr_class$0102 = 0, $nr_class$1 = 0, $sub = 0;
 var $sub84 = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($prob);
 $call = (_malloc(64)|0);
 $call3 = (_malloc(64)|0);
 $mul4 = $0 << 2;
 $call5 = (_malloc($mul4)|0);
 $cmp98 = ($0|0)>(0);
 if ($cmp98) {
  $y = ((($prob)) + 4|0);
  $5 = $call;$6 = $call3;$count$099 = $call3;$i$0101 = 0;$label$0100 = $call;$max_nr_class$0103 = 16;$nr_class$0102 = 0;
  while(1) {
   $1 = load4($y);
   $arrayidx = (($1) + ($i$0101<<3)|0);
   $2 = loadd($arrayidx);
   $conv = (~~(($2)));
   $cmp796 = ($nr_class$0102|0)>(0);
   L5: do {
    if ($cmp796) {
     $j$097 = 0;
     while(1) {
      $arrayidx9 = (($label$0100) + ($j$097<<2)|0);
      $3 = load4($arrayidx9);
      $cmp10 = ($conv|0)==($3|0);
      if ($cmp10) {
       break;
      }
      $inc12 = (($j$097) + 1)|0;
      $cmp7 = ($inc12|0)<($nr_class$0102|0);
      if ($cmp7) {
       $j$097 = $inc12;
      } else {
       $j$086 = $inc12;
       break L5;
      }
     }
     $arrayidx11 = (($count$099) + ($j$097<<2)|0);
     $4 = load4($arrayidx11);
     $inc = (($4) + 1)|0;
     store4($arrayidx11,$inc);
     $j$086 = $j$097;
    } else {
     $j$086 = 0;
    }
   } while(0);
   $arrayidx13 = (($call5) + ($i$0101<<2)|0);
   store4($arrayidx13,$j$086);
   $cmp14 = ($j$086|0)==($nr_class$0102|0);
   if ($cmp14) {
    $cmp16 = ($nr_class$0102|0)==($max_nr_class$0103|0);
    $mul19 = $max_nr_class$0103 << 3;
    if ($cmp16) {
     $mul18 = $max_nr_class$0103 << 1;
     $call20 = (_realloc($5,$mul19)|0);
     $call22 = (_realloc($6,$mul19)|0);
     $20 = $call22;$21 = $call20;$count$1 = $call22;$label$1 = $call20;$max_nr_class$1 = $mul18;
    } else {
     $20 = $6;$21 = $5;$count$1 = $count$099;$label$1 = $label$0100;$max_nr_class$1 = $max_nr_class$0103;
    }
    $arrayidx24 = (($label$1) + ($nr_class$0102<<2)|0);
    store4($arrayidx24,$conv);
    $arrayidx25 = (($count$1) + ($nr_class$0102<<2)|0);
    store4($arrayidx25,1);
    $inc26 = (($nr_class$0102) + 1)|0;
    $18 = $20;$19 = $21;$count$2 = $count$1;$label$2 = $label$1;$max_nr_class$2 = $max_nr_class$1;$nr_class$1 = $inc26;
   } else {
    $18 = $6;$19 = $5;$count$2 = $count$099;$label$2 = $label$0100;$max_nr_class$2 = $max_nr_class$0103;$nr_class$1 = $nr_class$0102;
   }
   $inc29 = (($i$0101) + 1)|0;
   $exitcond115 = ($inc29|0)==($0|0);
   if ($exitcond115) {
    break;
   } else {
    $5 = $19;$6 = $18;$count$099 = $count$2;$i$0101 = $inc29;$label$0100 = $label$2;$max_nr_class$0103 = $max_nr_class$2;$nr_class$0102 = $nr_class$1;
   }
  }
  $cmp31 = ($nr_class$1|0)==(2);
  if ($cmp31) {
   $7 = load4($label$2);
   $cmp33 = ($7|0)==(-1);
   if ($cmp33) {
    $arrayidx35 = ((($label$2)) + 4|0);
    $8 = load4($arrayidx35);
    $cmp36 = ($8|0)==(1);
    if ($cmp36) {
     store4($label$2,1);
     store4($arrayidx35,-1);
     $arrayidx41 = ((($count$2)) + 4|0);
     $9 = load4($count$2);
     $10 = load4($arrayidx41);
     store4($count$2,$10);
     store4($arrayidx41,$9);
     if ($cmp98) {
      $i$195 = 0;
      while(1) {
       $arrayidx45 = (($call5) + ($i$195<<2)|0);
       $11 = load4($arrayidx45);
       $cmp46 = ($11|0)==(0);
       $$sink = $cmp46&1;
       store4($arrayidx45,$$sink);
       $inc52 = (($i$195) + 1)|0;
       $exitcond114 = ($inc52|0)==($0|0);
       if ($exitcond114) {
        $$lcssa119 = $19;$$lcssa87117 = $18;$count$0$lcssa118 = $count$2;$nr_class$0$lcssa120 = $nr_class$1;
        break;
       } else {
        $i$195 = $inc52;
       }
      }
     } else {
      $$lcssa119 = $19;$$lcssa87117 = $18;$count$0$lcssa118 = $count$2;$nr_class$0$lcssa120 = 2;
     }
    } else {
     $$lcssa119 = $19;$$lcssa87117 = $18;$count$0$lcssa118 = $count$2;$nr_class$0$lcssa120 = 2;
    }
   } else {
    $$lcssa119 = $19;$$lcssa87117 = $18;$count$0$lcssa118 = $count$2;$nr_class$0$lcssa120 = 2;
   }
  } else {
   $$lcssa119 = $19;$$lcssa87117 = $18;$count$0$lcssa118 = $count$2;$nr_class$0$lcssa120 = $nr_class$1;
  }
 } else {
  $$lcssa119 = $call;$$lcssa87117 = $call3;$count$0$lcssa118 = $call3;$nr_class$0$lcssa120 = 0;
 }
 $mul55 = $nr_class$0$lcssa120 << 2;
 $call56 = (_malloc($mul55)|0);
 store4($call56,0);
 $cmp5992 = ($nr_class$0$lcssa120|0)>(1);
 if ($cmp5992) {
  $13 = 0;$i$293 = 1;
  while(1) {
   $sub = (($i$293) + -1)|0;
   $arrayidx63 = (($count$0$lcssa118) + ($sub<<2)|0);
   $12 = load4($arrayidx63);
   $add = (($12) + ($13))|0;
   $arrayidx64 = (($call56) + ($i$293<<2)|0);
   store4($arrayidx64,$add);
   $inc66 = (($i$293) + 1)|0;
   $exitcond113 = ($inc66|0)==($nr_class$0$lcssa120|0);
   if ($exitcond113) {
    break;
   } else {
    $13 = $add;$i$293 = $inc66;
   }
  }
 }
 if ($cmp98) {
  $i$391 = 0;
  while(1) {
   $arrayidx71 = (($call5) + ($i$391<<2)|0);
   $14 = load4($arrayidx71);
   $arrayidx72 = (($call56) + ($14<<2)|0);
   $15 = load4($arrayidx72);
   $arrayidx73 = (($perm) + ($15<<2)|0);
   store4($arrayidx73,$i$391);
   $inc76 = (($15) + 1)|0;
   store4($arrayidx72,$inc76);
   $inc78 = (($i$391) + 1)|0;
   $exitcond112 = ($inc78|0)==($0|0);
   if ($exitcond112) {
    break;
   } else {
    $i$391 = $inc78;
   }
  }
 }
 store4($call56,0);
 if ($cmp5992) {
  $17 = 0;$i$489 = 1;
 } else {
  store4($nr_class_ret,$nr_class$0$lcssa120);
  store4($label_ret,$$lcssa119);
  store4($start_ret,$call56);
  store4($count_ret,$$lcssa87117);
  _free($call5);
  return;
 }
 while(1) {
  $sub84 = (($i$489) + -1)|0;
  $arrayidx87 = (($count$0$lcssa118) + ($sub84<<2)|0);
  $16 = load4($arrayidx87);
  $add88 = (($16) + ($17))|0;
  $arrayidx89 = (($call56) + ($i$489<<2)|0);
  store4($arrayidx89,$add88);
  $inc91 = (($i$489) + 1)|0;
  $exitcond = ($inc91|0)==($nr_class$0$lcssa120|0);
  if ($exitcond) {
   break;
  } else {
   $17 = $add88;$i$489 = $inc91;
  }
 }
 store4($nr_class_ret,$nr_class$0$lcssa120);
 store4($label_ret,$$lcssa119);
 store4($start_ret,$call56);
 store4($count_ret,$$lcssa87117);
 _free($call5);
 return;
}
function _svm_predict_values($model,$x,$dec_values) {
 $model = $model|0;
 $x = $x|0;
 $dec_values = $dec_values|0;
 var $$off = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0.0, $27 = 0, $28 = 0.0, $29 = 0.0, $3 = 0, $30 = 0, $31 = 0.0, $32 = 0.0, $33 = 0, $34 = 0, $35 = 0.0, $36 = 0.0, $37 = 0.0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $5 = 0.0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0, $SV = 0, $SV29 = 0, $add = 0.0, $add100 = 0.0, $add100$us = 0.0, $add47 = 0, $add64 = 0, $add83$us = 0, $add88$us = 0.0, $add95 = 0, $add95$us = 0, $arrayidx10 = 0, $arrayidx105 = 0, $arrayidx105$us = 0, $arrayidx107 = 0;
 var $arrayidx107$us = 0, $arrayidx11 = 0, $arrayidx111 = 0, $arrayidx114 = 0, $arrayidx114$sink1 = 0, $arrayidx114$sink1$us = 0, $arrayidx114$us = 0, $arrayidx127 = 0, $arrayidx128 = 0, $arrayidx135 = 0, $arrayidx30 = 0, $arrayidx33 = 0, $arrayidx46 = 0, $arrayidx48 = 0, $arrayidx69 = 0, $arrayidx70 = 0, $arrayidx70$us = 0, $arrayidx72 = 0, $arrayidx74 = 0, $arrayidx74$us = 0;
 var $arrayidx77$us$phi$trans$insert = 0, $arrayidx79 = 0, $arrayidx84$us = 0, $arrayidx86$us = 0, $arrayidx96 = 0, $arrayidx96$us = 0, $arrayidx98 = 0, $arrayidx98$us = 0, $call = 0.0, $call25 = 0, $call32 = 0.0, $call38 = 0, $call53 = 0, $cmp109 = 0, $cmp109$us = 0, $cmp129 = 0, $cmp16 = 0, $cmp18 = 0, $cmp27138 = 0, $cmp41136 = 0;
 var $cmp55134 = 0, $cmp66127 = 0, $cmp81119 = 0, $cmp9 = 0, $cmp9112 = 0, $cmp93123 = 0, $cmp93123$us = 0, $conv = 0.0, $conv136 = 0.0, $exitcond = 0, $exitcond141 = 0, $exitcond142 = 0, $exitcond143 = 0, $exitcond144 = 0, $exitcond147 = 0, $exitcond148 = 0, $exitcond150 = 0, $exitcond151 = 0, $i$0114 = 0, $i$1139 = 0;
 var $i$2137 = 0, $i$4133 = 0, $i$5$vote_max_idx$0 = 0, $i$5116 = 0, $inc = 0, $inc102 = 0, $inc102$us = 0, $inc115 = 0, $inc115$us = 0, $inc116 = 0, $inc116$us = 0, $inc118 = 0, $inc118$us = 0, $inc133 = 0, $inc35 = 0, $inc50 = 0, $inc90$us = 0, $indvars$iv145 = 0, $indvars$iv145$in = 0, $j$0128 = 0;
 var $j$0128$us = 0, $k$0121$us = 0, $k$1125 = 0, $k$1125$us = 0, $l = 0, $l23 = 0, $label = 0, $mul = 0.0, $mul24 = 0, $mul37 = 0, $mul87$us = 0.0, $mul99 = 0.0, $mul99$us = 0.0, $nSV = 0, $nSV71 = 0, $nr_class21 = 0, $p$0132 = 0, $p$1$lcssa = 0, $p$1129 = 0, $p$1129$us = 0;
 var $retval$0 = 0.0, $retval$1 = 0.0, $rho = 0, $rho104 = 0, $sub = 0.0, $sub106 = 0.0, $sub106$us = 0.0, $sub43 = 0, $sum$0$lcssa = 0.0, $sum$0113 = 0.0, $sum68$0120$us = 0.0, $sum68$1$lcssa = 0.0, $sum68$1$lcssa$us = 0.0, $sum68$1124 = 0.0, $sum68$1124$us = 0.0, $sv_coef75 = 0, $sv_coef8 = 0, $switch = 0, $vote_max_idx$0$lcssa = 0, $vote_max_idx$0117 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($model);
 $$off = (($0) + -2)|0;
 $switch = ($$off>>>0)<(3);
 if ($switch) {
  $sv_coef8 = ((($model)) + 108|0);
  $1 = load4($sv_coef8);
  $2 = load4($1);
  $l = ((($model)) + 100|0);
  $3 = load4($l);
  $cmp9112 = ($3|0)>(0);
  if ($cmp9112) {
   $SV = ((($model)) + 104|0);
   $4 = load4($SV);
   $i$0114 = 0;$sum$0113 = 0.0;
   while(1) {
    $arrayidx10 = (($2) + ($i$0114<<3)|0);
    $5 = loadd($arrayidx10);
    $arrayidx11 = (($4) + ($i$0114<<2)|0);
    $6 = load4($arrayidx11);
    $call = (+__ZN6Kernel10k_functionEPK8svm_nodeS2_RK13svm_parameter($x,$6,$model));
    $mul = $5 * $call;
    $add = $sum$0113 + $mul;
    $inc = (($i$0114) + 1)|0;
    $cmp9 = ($inc|0)<($3|0);
    if ($cmp9) {
     $i$0114 = $inc;$sum$0113 = $add;
    } else {
     $sum$0$lcssa = $add;
     break;
    }
   }
  } else {
   $sum$0$lcssa = 0.0;
  }
  $rho = ((($model)) + 112|0);
  $7 = load4($rho);
  $8 = loadd($7);
  $sub = $sum$0$lcssa - $8;
  stored($dec_values,$sub);
  $cmp16 = ($0|0)==(2);
  $cmp18 = $sub > 0.0;
  $conv = $cmp18 ? 1.0 : -1.0;
  $retval$0 = $cmp16 ? $conv : $sub;
  $retval$1 = $retval$0;
  return (+$retval$1);
 }
 $nr_class21 = ((($model)) + 96|0);
 $9 = load4($nr_class21);
 $l23 = ((($model)) + 100|0);
 $10 = load4($l23);
 $mul24 = $10 << 3;
 $call25 = (_malloc($mul24)|0);
 $cmp27138 = ($10|0)>(0);
 if ($cmp27138) {
  $SV29 = ((($model)) + 104|0);
  $11 = load4($SV29);
  $i$1139 = 0;
  while(1) {
   $arrayidx30 = (($11) + ($i$1139<<2)|0);
   $12 = load4($arrayidx30);
   $call32 = (+__ZN6Kernel10k_functionEPK8svm_nodeS2_RK13svm_parameter($x,$12,$model));
   $arrayidx33 = (($call25) + ($i$1139<<3)|0);
   stored($arrayidx33,$call32);
   $inc35 = (($i$1139) + 1)|0;
   $exitcond151 = ($inc35|0)==($10|0);
   if ($exitcond151) {
    break;
   } else {
    $i$1139 = $inc35;
   }
  }
 }
 $mul37 = $9 << 2;
 $call38 = (_malloc($mul37)|0);
 store4($call38,0);
 $cmp41136 = ($9|0)>(1);
 if ($cmp41136) {
  $nSV = ((($model)) + 132|0);
  $13 = load4($nSV);
  $15 = 0;$i$2137 = 1;
  while(1) {
   $sub43 = (($i$2137) + -1)|0;
   $arrayidx46 = (($13) + ($sub43<<2)|0);
   $14 = load4($arrayidx46);
   $add47 = (($14) + ($15))|0;
   $arrayidx48 = (($call38) + ($i$2137<<2)|0);
   store4($arrayidx48,$add47);
   $inc50 = (($i$2137) + 1)|0;
   $exitcond150 = ($inc50|0)==($9|0);
   if ($exitcond150) {
    break;
   } else {
    $15 = $add47;$i$2137 = $inc50;
   }
  }
 }
 $call53 = (_malloc($mul37)|0);
 $cmp55134 = ($9|0)>(0);
 if ($cmp55134) {
  _memset(($call53|0),0,($mul37|0))|0;
  $nSV71 = ((($model)) + 132|0);
  $sv_coef75 = ((($model)) + 108|0);
  $rho104 = ((($model)) + 112|0);
  $i$4133 = 0;$indvars$iv145$in = $9;$p$0132 = 0;
  while(1) {
   $indvars$iv145 = (($indvars$iv145$in) + -1)|0;
   $add64 = (($i$4133) + 1)|0;
   $cmp66127 = ($add64|0)<($9|0);
   do {
    if ($cmp66127) {
     $arrayidx69 = (($call38) + ($i$4133<<2)|0);
     $18 = load4($arrayidx69);
     $19 = load4($nSV71);
     $arrayidx72 = (($19) + ($i$4133<<2)|0);
     $20 = load4($arrayidx72);
     $21 = load4($sv_coef75);
     $arrayidx79 = (($21) + ($i$4133<<2)|0);
     $22 = load4($arrayidx79);
     $cmp81119 = ($20|0)>(0);
     $23 = load4($rho104);
     $arrayidx111 = (($call53) + ($i$4133<<2)|0);
     if ($cmp81119) {
      $30 = $22;$j$0128$us = $add64;$p$1129$us = $p$0132;
     } else {
      $j$0128 = $add64;$p$1129 = $p$0132;
      while(1) {
       $arrayidx70 = (($call38) + ($j$0128<<2)|0);
       $33 = load4($arrayidx70);
       $arrayidx74 = (($19) + ($j$0128<<2)|0);
       $34 = load4($arrayidx74);
       $cmp93123 = ($34|0)>(0);
       if ($cmp93123) {
        $k$1125 = 0;$sum68$1124 = 0.0;
        while(1) {
         $add95 = (($k$1125) + ($33))|0;
         $arrayidx96 = (($22) + ($add95<<3)|0);
         $35 = loadd($arrayidx96);
         $arrayidx98 = (($call25) + ($add95<<3)|0);
         $36 = loadd($arrayidx98);
         $mul99 = $35 * $36;
         $add100 = $sum68$1124 + $mul99;
         $inc102 = (($k$1125) + 1)|0;
         $exitcond141 = ($inc102|0)==($34|0);
         if ($exitcond141) {
          $sum68$1$lcssa = $add100;
          break;
         } else {
          $k$1125 = $inc102;$sum68$1124 = $add100;
         }
        }
       } else {
        $sum68$1$lcssa = 0.0;
       }
       $arrayidx105 = (($23) + ($p$1129<<3)|0);
       $37 = loadd($arrayidx105);
       $sub106 = $sum68$1$lcssa - $37;
       $arrayidx107 = (($dec_values) + ($p$1129<<3)|0);
       stored($arrayidx107,$sub106);
       $cmp109 = $sub106 > 0.0;
       $arrayidx114 = (($call53) + ($j$0128<<2)|0);
       $arrayidx114$sink1 = $cmp109 ? $arrayidx111 : $arrayidx114;
       $38 = load4($arrayidx114$sink1);
       $inc115 = (($38) + 1)|0;
       store4($arrayidx114$sink1,$inc115);
       $inc116 = (($p$1129) + 1)|0;
       $inc118 = (($j$0128) + 1)|0;
       $exitcond142 = ($inc118|0)==($9|0);
       if ($exitcond142) {
        break;
       } else {
        $j$0128 = $inc118;$p$1129 = $inc116;
       }
      }
      $17 = (($p$0132) + ($indvars$iv145))|0;
      $p$1$lcssa = $17;
      break;
     }
     while(1) {
      $arrayidx70$us = (($call38) + ($j$0128$us<<2)|0);
      $24 = load4($arrayidx70$us);
      $arrayidx74$us = (($19) + ($j$0128$us<<2)|0);
      $25 = load4($arrayidx74$us);
      $k$0121$us = 0;$sum68$0120$us = 0.0;
      while(1) {
       $add83$us = (($k$0121$us) + ($18))|0;
       $arrayidx84$us = (($30) + ($add83$us<<3)|0);
       $31 = loadd($arrayidx84$us);
       $arrayidx86$us = (($call25) + ($add83$us<<3)|0);
       $32 = loadd($arrayidx86$us);
       $mul87$us = $31 * $32;
       $add88$us = $sum68$0120$us + $mul87$us;
       $inc90$us = (($k$0121$us) + 1)|0;
       $exitcond143 = ($inc90$us|0)==($20|0);
       if ($exitcond143) {
        break;
       } else {
        $k$0121$us = $inc90$us;$sum68$0120$us = $add88$us;
       }
      }
      $cmp93123$us = ($25|0)>(0);
      if ($cmp93123$us) {
       $k$1125$us = 0;$sum68$1124$us = $add88$us;
       while(1) {
        $add95$us = (($k$1125$us) + ($24))|0;
        $arrayidx96$us = (($22) + ($add95$us<<3)|0);
        $28 = loadd($arrayidx96$us);
        $arrayidx98$us = (($call25) + ($add95$us<<3)|0);
        $29 = loadd($arrayidx98$us);
        $mul99$us = $28 * $29;
        $add100$us = $sum68$1124$us + $mul99$us;
        $inc102$us = (($k$1125$us) + 1)|0;
        $exitcond144 = ($inc102$us|0)==($25|0);
        if ($exitcond144) {
         $sum68$1$lcssa$us = $add100$us;
         break;
        } else {
         $k$1125$us = $inc102$us;$sum68$1124$us = $add100$us;
        }
       }
      } else {
       $sum68$1$lcssa$us = $add88$us;
      }
      $arrayidx105$us = (($23) + ($p$1129$us<<3)|0);
      $26 = loadd($arrayidx105$us);
      $sub106$us = $sum68$1$lcssa$us - $26;
      $arrayidx107$us = (($dec_values) + ($p$1129$us<<3)|0);
      stored($arrayidx107$us,$sub106$us);
      $cmp109$us = $sub106$us > 0.0;
      $arrayidx114$us = (($call53) + ($j$0128$us<<2)|0);
      $arrayidx114$sink1$us = $cmp109$us ? $arrayidx111 : $arrayidx114$us;
      $27 = load4($arrayidx114$sink1$us);
      $inc115$us = (($27) + 1)|0;
      store4($arrayidx114$sink1$us,$inc115$us);
      $inc118$us = (($j$0128$us) + 1)|0;
      $exitcond147 = ($inc118$us|0)==($9|0);
      if ($exitcond147) {
       break;
      }
      $inc116$us = (($p$1129$us) + 1)|0;
      $arrayidx77$us$phi$trans$insert = (($21) + ($j$0128$us<<2)|0);
      $$pre = load4($arrayidx77$us$phi$trans$insert);
      $30 = $$pre;$j$0128$us = $inc118$us;$p$1129$us = $inc116$us;
     }
     $16 = (($p$0132) + ($indvars$iv145))|0;
     $p$1$lcssa = $16;
    } else {
     $p$1$lcssa = $p$0132;
    }
   } while(0);
   $exitcond148 = ($add64|0)==($9|0);
   if ($exitcond148) {
    break;
   } else {
    $i$4133 = $add64;$indvars$iv145$in = $indvars$iv145;$p$0132 = $p$1$lcssa;
   }
  }
 }
 if ($cmp41136) {
  $i$5116 = 1;$vote_max_idx$0117 = 0;
  while(1) {
   $arrayidx127 = (($call53) + ($i$5116<<2)|0);
   $39 = load4($arrayidx127);
   $arrayidx128 = (($call53) + ($vote_max_idx$0117<<2)|0);
   $40 = load4($arrayidx128);
   $cmp129 = ($39|0)>($40|0);
   $i$5$vote_max_idx$0 = $cmp129 ? $i$5116 : $vote_max_idx$0117;
   $inc133 = (($i$5116) + 1)|0;
   $exitcond = ($inc133|0)==($9|0);
   if ($exitcond) {
    $vote_max_idx$0$lcssa = $i$5$vote_max_idx$0;
    break;
   } else {
    $i$5116 = $inc133;$vote_max_idx$0117 = $i$5$vote_max_idx$0;
   }
  }
 } else {
  $vote_max_idx$0$lcssa = 0;
 }
 _free($call25);
 _free($call38);
 _free($call53);
 $label = ((($model)) + 128|0);
 $41 = load4($label);
 $arrayidx135 = (($41) + ($vote_max_idx$0$lcssa<<2)|0);
 $42 = load4($arrayidx135);
 $conv136 = (+($42|0));
 $retval$1 = $conv136;
 return (+$retval$1);
}
function _svm_free_model_content($model_ptr) {
 $model_ptr = $model_ptr|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $SV = 0;
 var $SV10 = 0, $arrayidx8 = 0, $cmp = 0, $cmp2 = 0, $cmp6 = 0, $cmp627 = 0, $cmp630 = 0, $free_sv = 0, $inc = 0, $inc31 = 0, $l = 0, $label = 0, $nSV = 0, $nr_class = 0, $probA = 0, $probB = 0, $rho = 0, $sub = 0, $sub29 = 0, $sv_coef = 0;
 var $sv_indices = 0, $tobool = 0, $tobool4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $free_sv = ((($model_ptr)) + 136|0);
 $0 = load4($free_sv);
 $tobool = ($0|0)==(0);
 if (!($tobool)) {
  $l = ((($model_ptr)) + 100|0);
  $1 = load4($l);
  $cmp = ($1|0)>(0);
  if ($cmp) {
   $SV = ((($model_ptr)) + 104|0);
   $2 = load4($SV);
   $cmp2 = ($2|0)==(0|0);
   if (!($cmp2)) {
    $3 = load4($2);
    _free($3);
   }
  }
 }
 $sv_coef = ((($model_ptr)) + 108|0);
 $4 = load4($sv_coef);
 $tobool4 = ($4|0)==(0|0);
 if (!($tobool4)) {
  $nr_class = ((($model_ptr)) + 96|0);
  $5 = load4($nr_class);
  $cmp627 = ($5|0)>(1);
  if ($cmp627) {
   $6 = load4($4);
   _free($6);
   $7 = load4($nr_class);
   $sub29 = (($7) + -1)|0;
   $cmp630 = ($sub29|0)>(1);
   if ($cmp630) {
    $inc31 = 1;
    while(1) {
     $$pre = load4($sv_coef);
     $arrayidx8 = (($$pre) + ($inc31<<2)|0);
     $8 = load4($arrayidx8);
     _free($8);
     $inc = (($inc31) + 1)|0;
     $9 = load4($nr_class);
     $sub = (($9) + -1)|0;
     $cmp6 = ($inc|0)<($sub|0);
     if ($cmp6) {
      $inc31 = $inc;
     } else {
      break;
     }
    }
   }
  }
 }
 $SV10 = ((($model_ptr)) + 104|0);
 $10 = load4($SV10);
 _free($10);
 store4($SV10,0);
 $11 = load4($sv_coef);
 _free($11);
 store4($sv_coef,0);
 $rho = ((($model_ptr)) + 112|0);
 $12 = load4($rho);
 _free($12);
 store4($rho,0);
 $label = ((($model_ptr)) + 128|0);
 $13 = load4($label);
 _free($13);
 store4($label,0);
 $probA = ((($model_ptr)) + 116|0);
 $14 = load4($probA);
 _free($14);
 store4($probA,0);
 $probB = ((($model_ptr)) + 120|0);
 $15 = load4($probB);
 _free($15);
 store4($probB,0);
 $sv_indices = ((($model_ptr)) + 124|0);
 $16 = load4($sv_indices);
 _free($16);
 store4($sv_indices,0);
 $nSV = ((($model_ptr)) + 132|0);
 $17 = load4($nSV);
 _free($17);
 store4($nSV,0);
 return;
}
function __ZN5SVC_QC2ERK11svm_problemRK13svm_parameterPKa($this,$prob,$param,$y_) {
 $this = $this|0;
 $prob = $prob|0;
 $param = $param|0;
 $y_ = $y_|0;
 var $$arith = 0, $$elt = 0, $$elt13 = 0, $$overflow = 0, $$unpack = 0, $$unpack14 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $QD = 0, $arrayidx = 0, $cache = 0, $cache_size = 0, $call = 0, $call$i = 0, $call$i15 = 0, $call13 = 0.0, $call9 = 0, $cmp = 0, $cmp$i$i = 0, $cmp17 = 0, $cond$i$i = 0, $conv = 0, $div$i = 0, $div5$i = 0, $head$i = 0, $i$018 = 0, $inc = 0, $lru_head12$i = 0;
 var $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $mul = 0.0, $mul9$i = 0, $next$i = 0, $size$i = 0, $sub$i = 0, $vtable = 0, $x = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($prob);
 $x = ((($prob)) + 8|0);
 $1 = load4($x);
 __ZN6KernelC2EiPKP8svm_nodeRK13svm_parameter($this,$0,$1,$param);
 store4($this,(1384));
 $2 = load4($prob);
 $3 = ($2|0)>(-1);
 $4 = $3 ? $2 : -1;
 $call$i15 = (__Znaj($4)|0);
 $y = ((($this)) + 48|0);
 store4($y,$call$i15);
 _memcpy(($call$i15|0),($y_|0),($2|0))|0;
 $call = (__Znwj(28)|0);
 $cache_size = ((($param)) + 32|0);
 $5 = loadd($cache_size);
 $mul = $5 * 1048576.0;
 $conv = (~~(($mul)));
 store4($call,$2);
 $size$i = ((($call)) + 4|0);
 $call$i = (_calloc($2,16)|0);
 $head$i = ((($call)) + 8|0);
 store4($head$i,$call$i);
 $div$i = $conv >>> 2;
 $6 = $2 << 2;
 $div5$i = $6 & 1073741820;
 $sub$i = (($div$i) - ($div5$i))|0;
 $mul9$i = $2 << 1;
 $cmp$i$i = ($sub$i|0)>($mul9$i|0);
 $cond$i$i = $cmp$i$i ? $sub$i : $mul9$i;
 store4($size$i,$cond$i$i);
 $lru_head12$i = ((($call)) + 12|0);
 store4($lru_head12$i,$lru_head12$i);
 $next$i = ((($call)) + 16|0);
 store4($next$i,$lru_head12$i);
 $cache = ((($this)) + 52|0);
 store4($cache,$call);
 $$arith = $2<<3;
 $$overflow = ($2>>>0)>(536870911);
 $7 = $$overflow ? -1 : $$arith;
 $call9 = (__Znaj($7)|0);
 $QD = ((($this)) + 56|0);
 store4($QD,$call9);
 $cmp17 = ($2|0)>(0);
 if (!($cmp17)) {
  return;
 }
 $$elt = ((($this)) + 4|0);
 $$elt13 = ((($this)) + 8|0);
 $i$018 = 0;
 while(1) {
  $$unpack = load4($$elt);
  $$unpack14 = load4($$elt13);
  $memptr$adj$shifted = $$unpack14 >> 1;
  $8 = (($this) + ($memptr$adj$shifted)|0);
  $9 = $$unpack14 & 1;
  $memptr$isvirtual = ($9|0)==(0);
  if ($memptr$isvirtual) {
   $memptr$nonvirtualfn = $$unpack;
   $11 = $memptr$nonvirtualfn;
  } else {
   $vtable = load4($8);
   $10 = (($vtable) + ($$unpack)|0);
   $memptr$virtualfn = load4($10);
   $11 = $memptr$virtualfn;
  }
  $call13 = (+FUNCTION_TABLE_diii[$11 & 7]($8,$i$018,$i$018));
  $12 = load4($QD);
  $arrayidx = (($12) + ($i$018<<3)|0);
  stored($arrayidx,$call13);
  $inc = (($i$018) + 1)|0;
  $13 = load4($prob);
  $cmp = ($inc|0)<($13|0);
  if ($cmp) {
   $i$018 = $inc;
  } else {
   break;
  }
 }
 return;
}
function __ZN5SVC_QD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $QD = 0, $cache = 0, $cmp$i = 0, $cmp5$i = 0, $data$i = 0, $h$0$i = 0, $h$04$i = 0, $h$06$i = 0, $head$i = 0, $isnull = 0, $isnull$i = 0, $isnull2 = 0, $isnull2$i = 0;
 var $isnull5 = 0, $lru_head$i = 0, $next$i = 0, $next3$i = 0, $x$i = 0, $x_square$i = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1384));
 $y = ((($this)) + 48|0);
 $0 = load4($y);
 $isnull = ($0|0)==(0|0);
 if (!($isnull)) {
  __ZdaPv($0);
 }
 $cache = ((($this)) + 52|0);
 $1 = load4($cache);
 $isnull2 = ($1|0)==(0|0);
 if (!($isnull2)) {
  $lru_head$i = ((($1)) + 12|0);
  $next$i = ((($1)) + 16|0);
  $h$04$i = load4($next$i);
  $cmp5$i = ($h$04$i|0)==($lru_head$i|0);
  if (!($cmp5$i)) {
   $h$06$i = $h$04$i;
   while(1) {
    $data$i = ((($h$06$i)) + 8|0);
    $2 = load4($data$i);
    _free($2);
    $next3$i = ((($h$06$i)) + 4|0);
    $h$0$i = load4($next3$i);
    $cmp$i = ($h$0$i|0)==($lru_head$i|0);
    if ($cmp$i) {
     break;
    } else {
     $h$06$i = $h$0$i;
    }
   }
  }
  $head$i = ((($1)) + 8|0);
  $3 = load4($head$i);
  _free($3);
  __ZdlPv($1);
 }
 $QD = ((($this)) + 56|0);
 $4 = load4($QD);
 $isnull5 = ($4|0)==(0|0);
 if (!($isnull5)) {
  __ZdaPv($4);
 }
 store4($this,(1240));
 $x$i = ((($this)) + 12|0);
 $5 = load4($x$i);
 $isnull$i = ($5|0)==(0|0);
 if (!($isnull$i)) {
  __ZdaPv($5);
 }
 $x_square$i = ((($this)) + 16|0);
 $6 = load4($x_square$i);
 $isnull2$i = ($6|0)==(0|0);
 if ($isnull2$i) {
  return;
 }
 __ZdaPv($6);
 return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __ZN11ONE_CLASS_QC2ERK11svm_problemRK13svm_parameter($this,$prob,$param) {
 $this = $this|0;
 $prob = $prob|0;
 $param = $param|0;
 var $$arith = 0, $$elt = 0, $$elt12 = 0, $$overflow = 0, $$unpack = 0, $$unpack13 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $QD = 0, $arrayidx = 0;
 var $cache = 0, $cache_size = 0, $call = 0, $call$i = 0, $call11 = 0.0, $call7 = 0, $cmp = 0, $cmp$i$i = 0, $cmp15 = 0, $cond$i$i = 0, $conv = 0, $div$i = 0, $div5$i = 0, $head$i = 0, $i$016 = 0, $inc = 0, $lru_head12$i = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0;
 var $memptr$virtualfn = 0, $mul = 0.0, $mul9$i = 0, $next$i = 0, $size$i = 0, $sub$i = 0, $vtable = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($prob);
 $x = ((($prob)) + 8|0);
 $1 = load4($x);
 __ZN6KernelC2EiPKP8svm_nodeRK13svm_parameter($this,$0,$1,$param);
 store4($this,(1356));
 $call = (__Znwj(28)|0);
 $2 = load4($prob);
 $cache_size = ((($param)) + 32|0);
 $3 = loadd($cache_size);
 $mul = $3 * 1048576.0;
 $conv = (~~(($mul)));
 store4($call,$2);
 $size$i = ((($call)) + 4|0);
 $call$i = (_calloc($2,16)|0);
 $head$i = ((($call)) + 8|0);
 store4($head$i,$call$i);
 $div$i = $conv >>> 2;
 $4 = $2 << 2;
 $div5$i = $4 & 1073741820;
 $sub$i = (($div$i) - ($div5$i))|0;
 $mul9$i = $2 << 1;
 $cmp$i$i = ($sub$i|0)>($mul9$i|0);
 $cond$i$i = $cmp$i$i ? $sub$i : $mul9$i;
 store4($size$i,$cond$i$i);
 $lru_head12$i = ((($call)) + 12|0);
 store4($lru_head12$i,$lru_head12$i);
 $next$i = ((($call)) + 16|0);
 store4($next$i,$lru_head12$i);
 $cache = ((($this)) + 48|0);
 store4($cache,$call);
 $$arith = $2<<3;
 $$overflow = ($2>>>0)>(536870911);
 $5 = $$overflow ? -1 : $$arith;
 $call7 = (__Znaj($5)|0);
 $QD = ((($this)) + 52|0);
 store4($QD,$call7);
 $cmp15 = ($2|0)>(0);
 if (!($cmp15)) {
  return;
 }
 $$elt = ((($this)) + 4|0);
 $$elt12 = ((($this)) + 8|0);
 $i$016 = 0;
 while(1) {
  $$unpack = load4($$elt);
  $$unpack13 = load4($$elt12);
  $memptr$adj$shifted = $$unpack13 >> 1;
  $6 = (($this) + ($memptr$adj$shifted)|0);
  $7 = $$unpack13 & 1;
  $memptr$isvirtual = ($7|0)==(0);
  if ($memptr$isvirtual) {
   $memptr$nonvirtualfn = $$unpack;
   $9 = $memptr$nonvirtualfn;
  } else {
   $vtable = load4($6);
   $8 = (($vtable) + ($$unpack)|0);
   $memptr$virtualfn = load4($8);
   $9 = $memptr$virtualfn;
  }
  $call11 = (+FUNCTION_TABLE_diii[$9 & 7]($6,$i$016,$i$016));
  $10 = load4($QD);
  $arrayidx = (($10) + ($i$016<<3)|0);
  stored($arrayidx,$call11);
  $inc = (($i$016) + 1)|0;
  $11 = load4($prob);
  $cmp = ($inc|0)<($11|0);
  if ($cmp) {
   $i$016 = $inc;
  } else {
   break;
  }
 }
 return;
}
function __ZN11ONE_CLASS_QD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $QD = 0, $cache = 0, $cmp$i = 0, $cmp5$i = 0, $data$i = 0, $h$0$i = 0, $h$04$i = 0, $h$06$i = 0, $head$i = 0, $isnull = 0, $isnull$i = 0, $isnull2 = 0, $isnull2$i = 0, $lru_head$i = 0;
 var $next$i = 0, $next3$i = 0, $x$i = 0, $x_square$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1356));
 $cache = ((($this)) + 48|0);
 $0 = load4($cache);
 $isnull = ($0|0)==(0|0);
 if (!($isnull)) {
  $lru_head$i = ((($0)) + 12|0);
  $next$i = ((($0)) + 16|0);
  $h$04$i = load4($next$i);
  $cmp5$i = ($h$04$i|0)==($lru_head$i|0);
  if (!($cmp5$i)) {
   $h$06$i = $h$04$i;
   while(1) {
    $data$i = ((($h$06$i)) + 8|0);
    $1 = load4($data$i);
    _free($1);
    $next3$i = ((($h$06$i)) + 4|0);
    $h$0$i = load4($next3$i);
    $cmp$i = ($h$0$i|0)==($lru_head$i|0);
    if ($cmp$i) {
     break;
    } else {
     $h$06$i = $h$0$i;
    }
   }
  }
  $head$i = ((($0)) + 8|0);
  $2 = load4($head$i);
  _free($2);
  __ZdlPv($0);
 }
 $QD = ((($this)) + 52|0);
 $3 = load4($QD);
 $isnull2 = ($3|0)==(0|0);
 if (!($isnull2)) {
  __ZdaPv($3);
 }
 store4($this,(1240));
 $x$i = ((($this)) + 12|0);
 $4 = load4($x$i);
 $isnull$i = ($4|0)==(0|0);
 if (!($isnull$i)) {
  __ZdaPv($4);
 }
 $x_square$i = ((($this)) + 16|0);
 $5 = load4($x_square$i);
 $isnull2$i = ($5|0)==(0|0);
 if ($isnull2$i) {
  return;
 }
 __ZdaPv($5);
 return;
}
function __ZN5SVR_QC2ERK11svm_problemRK13svm_parameter($this,$prob,$param) {
 $this = $this|0;
 $prob = $prob|0;
 $param = $param|0;
 var $$arith = 0, $$arith2 = 0, $$arith6 = 0, $$elt = 0, $$elt18 = 0, $$overflow = 0, $$overflow3 = 0, $$overflow7 = 0, $$pre = 0, $$unpack = 0, $$unpack19 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $QD = 0, $add = 0, $add28 = 0, $add39 = 0, $arrayidx = 0, $arrayidx23 = 0, $arrayidx25 = 0;
 var $arrayidx29 = 0, $arrayidx34 = 0, $arrayidx40 = 0, $arrayidx51 = 0, $buffer = 0, $cache = 0, $cache_size = 0, $call = 0, $call$i = 0, $call10 = 0, $call14 = 0, $call18 = 0, $call32 = 0.0, $call44 = 0, $call49 = 0, $cmp = 0, $cmp$i$i = 0, $cmp22 = 0, $cond$i$i = 0, $conv = 0;
 var $div$i = 0, $div5$i = 0, $head$i = 0, $inc = 0, $index = 0, $k$023 = 0, $l3 = 0, $lru_head12$i = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $mul = 0.0, $mul42 = 0, $mul9$i = 0, $next$i = 0, $next_buffer = 0, $sign = 0, $size$i = 0, $sub$i = 0;
 var $vtable = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($prob);
 $x = ((($prob)) + 8|0);
 $1 = load4($x);
 __ZN6KernelC2EiPKP8svm_nodeRK13svm_parameter($this,$0,$1,$param);
 store4($this,(1328));
 $2 = load4($prob);
 $l3 = ((($this)) + 48|0);
 store4($l3,$2);
 $call = (__Znwj(28)|0);
 $cache_size = ((($param)) + 32|0);
 $3 = loadd($cache_size);
 $mul = $3 * 1048576.0;
 $conv = (~~(($mul)));
 store4($call,$2);
 $size$i = ((($call)) + 4|0);
 $call$i = (_calloc($2,16)|0);
 $head$i = ((($call)) + 8|0);
 store4($head$i,$call$i);
 $div$i = $conv >>> 2;
 $4 = $2 << 2;
 $div5$i = $4 & 1073741820;
 $sub$i = (($div$i) - ($div5$i))|0;
 $mul9$i = $2 << 1;
 $cmp$i$i = ($sub$i|0)>($mul9$i|0);
 $cond$i$i = $cmp$i$i ? $sub$i : $mul9$i;
 store4($size$i,$cond$i$i);
 $lru_head12$i = ((($call)) + 12|0);
 store4($lru_head12$i,$lru_head12$i);
 $next$i = ((($call)) + 16|0);
 store4($next$i,$lru_head12$i);
 $cache = ((($this)) + 52|0);
 store4($cache,$call);
 $$arith6 = $mul9$i<<3;
 $$overflow7 = ($mul9$i>>>0)>(536870911);
 $5 = $$overflow7 ? -1 : $$arith6;
 $call10 = (__Znaj($5)|0);
 $QD = ((($this)) + 76|0);
 store4($QD,$call10);
 $6 = ($2|0)<(0);
 $7 = $6 ? -1 : $mul9$i;
 $call14 = (__Znaj($7)|0);
 $sign = ((($this)) + 56|0);
 store4($sign,$call14);
 $$arith2 = $mul9$i<<2;
 $$overflow3 = ($mul9$i>>>0)>(1073741823);
 $8 = $$overflow3 ? -1 : $$arith2;
 $call18 = (__Znaj($8)|0);
 $index = ((($this)) + 60|0);
 store4($index,$call18);
 $cmp22 = ($2|0)>(0);
 if (!($cmp22)) {
  $9 = $2;
  $mul42 = $9 << 1;
  $$arith = $mul42<<2;
  $$overflow = ($mul42>>>0)>(1073741823);
  $10 = $$overflow ? -1 : $$arith;
  $call44 = (__Znaj($10)|0);
  $buffer = ((($this)) + 68|0);
  store4($buffer,$call44);
  $call49 = (__Znaj($10)|0);
  $arrayidx51 = ((($this)) + 72|0);
  store4($arrayidx51,$call49);
  $next_buffer = ((($this)) + 64|0);
  store4($next_buffer,0);
  return;
 }
 $$elt = ((($this)) + 4|0);
 $$elt18 = ((($this)) + 8|0);
 $11 = $call14;$k$023 = 0;
 while(1) {
  $arrayidx = (($11) + ($k$023)|0);
  store1($arrayidx,1);
  $12 = load4($sign);
  $13 = load4($l3);
  $add = (($13) + ($k$023))|0;
  $arrayidx23 = (($12) + ($add)|0);
  store1($arrayidx23,-1);
  $14 = load4($index);
  $arrayidx25 = (($14) + ($k$023<<2)|0);
  store4($arrayidx25,$k$023);
  $15 = load4($l3);
  $add28 = (($15) + ($k$023))|0;
  $arrayidx29 = (($14) + ($add28<<2)|0);
  store4($arrayidx29,$k$023);
  $$unpack = load4($$elt);
  $$unpack19 = load4($$elt18);
  $memptr$adj$shifted = $$unpack19 >> 1;
  $16 = (($this) + ($memptr$adj$shifted)|0);
  $17 = $$unpack19 & 1;
  $memptr$isvirtual = ($17|0)==(0);
  if ($memptr$isvirtual) {
   $memptr$nonvirtualfn = $$unpack;
   $19 = $memptr$nonvirtualfn;
  } else {
   $vtable = load4($16);
   $18 = (($vtable) + ($$unpack)|0);
   $memptr$virtualfn = load4($18);
   $19 = $memptr$virtualfn;
  }
  $call32 = (+FUNCTION_TABLE_diii[$19 & 7]($16,$k$023,$k$023));
  $20 = load4($QD);
  $arrayidx34 = (($20) + ($k$023<<3)|0);
  stored($arrayidx34,$call32);
  $21 = load4($l3);
  $add39 = (($21) + ($k$023))|0;
  $arrayidx40 = (($20) + ($add39<<3)|0);
  stored($arrayidx40,$call32);
  $inc = (($k$023) + 1)|0;
  $cmp = ($inc|0)<($21|0);
  if (!($cmp)) {
   $9 = $21;
   break;
  }
  $$pre = load4($sign);
  $11 = $$pre;$k$023 = $inc;
 }
 $mul42 = $9 << 1;
 $$arith = $mul42<<2;
 $$overflow = ($mul42>>>0)>(1073741823);
 $10 = $$overflow ? -1 : $$arith;
 $call44 = (__Znaj($10)|0);
 $buffer = ((($this)) + 68|0);
 store4($buffer,$call44);
 $call49 = (__Znaj($10)|0);
 $arrayidx51 = ((($this)) + 72|0);
 store4($arrayidx51,$call49);
 $next_buffer = ((($this)) + 64|0);
 store4($next_buffer,0);
 return;
}
function __ZN5SVR_QD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $QD = 0, $arrayidx = 0, $arrayidx12 = 0, $cache = 0, $cmp$i = 0, $cmp5$i = 0, $data$i = 0, $h$0$i = 0, $h$04$i = 0, $h$06$i = 0;
 var $head$i = 0, $index = 0, $isnull = 0, $isnull$i = 0, $isnull13 = 0, $isnull16 = 0, $isnull2 = 0, $isnull2$i = 0, $isnull5 = 0, $isnull8 = 0, $lru_head$i = 0, $next$i = 0, $next3$i = 0, $sign = 0, $x$i = 0, $x_square$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1328));
 $cache = ((($this)) + 52|0);
 $0 = load4($cache);
 $isnull = ($0|0)==(0|0);
 if (!($isnull)) {
  $lru_head$i = ((($0)) + 12|0);
  $next$i = ((($0)) + 16|0);
  $h$04$i = load4($next$i);
  $cmp5$i = ($h$04$i|0)==($lru_head$i|0);
  if (!($cmp5$i)) {
   $h$06$i = $h$04$i;
   while(1) {
    $data$i = ((($h$06$i)) + 8|0);
    $1 = load4($data$i);
    _free($1);
    $next3$i = ((($h$06$i)) + 4|0);
    $h$0$i = load4($next3$i);
    $cmp$i = ($h$0$i|0)==($lru_head$i|0);
    if ($cmp$i) {
     break;
    } else {
     $h$06$i = $h$0$i;
    }
   }
  }
  $head$i = ((($0)) + 8|0);
  $2 = load4($head$i);
  _free($2);
  __ZdlPv($0);
 }
 $sign = ((($this)) + 56|0);
 $3 = load4($sign);
 $isnull2 = ($3|0)==(0|0);
 if (!($isnull2)) {
  __ZdaPv($3);
 }
 $index = ((($this)) + 60|0);
 $4 = load4($index);
 $isnull5 = ($4|0)==(0|0);
 if (!($isnull5)) {
  __ZdaPv($4);
 }
 $arrayidx = ((($this)) + 68|0);
 $5 = load4($arrayidx);
 $isnull8 = ($5|0)==(0|0);
 if (!($isnull8)) {
  __ZdaPv($5);
 }
 $arrayidx12 = ((($this)) + 72|0);
 $6 = load4($arrayidx12);
 $isnull13 = ($6|0)==(0|0);
 if (!($isnull13)) {
  __ZdaPv($6);
 }
 $QD = ((($this)) + 76|0);
 $7 = load4($QD);
 $isnull16 = ($7|0)==(0|0);
 if (!($isnull16)) {
  __ZdaPv($7);
 }
 store4($this,(1240));
 $x$i = ((($this)) + 12|0);
 $8 = load4($x$i);
 $isnull$i = ($8|0)==(0|0);
 if (!($isnull$i)) {
  __ZdaPv($8);
 }
 $x_square$i = ((($this)) + 16|0);
 $9 = load4($x_square$i);
 $isnull2$i = ($9|0)==(0|0);
 if ($isnull2$i) {
  return;
 }
 __ZdaPv($9);
 return;
}
function __ZNK5SVR_Q5get_QEii($this,$i,$len) {
 $this = $this|0;
 $i = $i|0;
 $len = $len|0;
 var $$elt = 0, $$elt15 = 0, $$pre = 0, $$unpack = 0, $$unpack16 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = Math_fround(0), $2 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arrayidx = 0, $arrayidx10 = 0, $arrayidx16 = 0, $arrayidx19 = 0, $arrayidx20 = 0, $arrayidx22 = 0, $arrayidx6 = 0, $arrayidx7 = 0, $cache = 0, $call = 0, $call5 = 0.0, $cmp = 0, $cmp1217 = 0, $cmp4 = 0, $cmp419 = 0, $conv = Math_fround(0);
 var $conv14 = Math_fround(0), $conv17 = Math_fround(0), $data = 0, $exitcond = 0, $inc = 0, $inc24 = 0, $index = 0, $j$020 = 0, $j$118 = 0, $l = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $mul = Math_fround(0), $mul21 = Math_fround(0), $next_buffer = 0, $or$cond = 0, $sign = 0, $sub = 0;
 var $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $data = sp;
 $index = ((($this)) + 60|0);
 $0 = load4($index);
 $arrayidx = (($0) + ($i<<2)|0);
 $1 = load4($arrayidx);
 $cache = ((($this)) + 52|0);
 $2 = load4($cache);
 $l = ((($this)) + 48|0);
 $3 = load4($l);
 $call = (__ZN5Cache8get_dataEiPPfi($2,$1,$data,$3)|0);
 $4 = load4($l);
 $cmp = ($call|0)<($4|0);
 $cmp419 = ($4|0)>(0);
 $or$cond = $cmp & $cmp419;
 if ($or$cond) {
  $$elt = ((($this)) + 4|0);
  $$elt15 = ((($this)) + 8|0);
  $5 = load4($data);
  $j$020 = 0;
  while(1) {
   $$unpack = load4($$elt);
   $$unpack16 = load4($$elt15);
   $memptr$adj$shifted = $$unpack16 >> 1;
   $6 = (($this) + ($memptr$adj$shifted)|0);
   $7 = $$unpack16 & 1;
   $memptr$isvirtual = ($7|0)==(0);
   if ($memptr$isvirtual) {
    $memptr$nonvirtualfn = $$unpack;
    $9 = $memptr$nonvirtualfn;
   } else {
    $vtable = load4($6);
    $8 = (($vtable) + ($$unpack)|0);
    $memptr$virtualfn = load4($8);
    $9 = $memptr$virtualfn;
   }
   $call5 = (+FUNCTION_TABLE_diii[$9 & 7]($6,$1,$j$020));
   $conv = Math_fround($call5);
   $arrayidx6 = (($5) + ($j$020<<2)|0);
   storef($arrayidx6,$conv);
   $inc = (($j$020) + 1)|0;
   $10 = load4($l);
   $cmp4 = ($inc|0)<($10|0);
   if ($cmp4) {
    $j$020 = $inc;
   } else {
    break;
   }
  }
 }
 $next_buffer = ((($this)) + 64|0);
 $11 = load4($next_buffer);
 $arrayidx7 = (((($this)) + 68|0) + ($11<<2)|0);
 $12 = load4($arrayidx7);
 $sub = (1 - ($11))|0;
 store4($next_buffer,$sub);
 $sign = ((($this)) + 56|0);
 $13 = load4($sign);
 $cmp1217 = ($len|0)>(0);
 if (!($cmp1217)) {
  STACKTOP = sp;return ($12|0);
 }
 $arrayidx10 = (($13) + ($i)|0);
 $14 = load1($arrayidx10);
 $conv14 = (Math_fround(($14<<24>>24)));
 $15 = load4($data);
 $$pre = load4($index);
 $j$118 = 0;
 while(1) {
  $arrayidx16 = (($13) + ($j$118)|0);
  $16 = load1($arrayidx16);
  $conv17 = (Math_fround(($16<<24>>24)));
  $mul = Math_fround($conv14 * $conv17);
  $arrayidx19 = (($$pre) + ($j$118<<2)|0);
  $17 = load4($arrayidx19);
  $arrayidx20 = (($15) + ($17<<2)|0);
  $18 = loadf($arrayidx20);
  $mul21 = Math_fround($mul * $18);
  $arrayidx22 = (($12) + ($j$118<<2)|0);
  storef($arrayidx22,$mul21);
  $inc24 = (($j$118) + 1)|0;
  $exitcond = ($inc24|0)==($len|0);
  if ($exitcond) {
   break;
  } else {
   $j$118 = $inc24;
  }
 }
 STACKTOP = sp;return ($12|0);
}
function __ZNK5SVR_Q6get_QDEv($this) {
 $this = $this|0;
 var $0 = 0, $QD = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $QD = ((($this)) + 76|0);
 $0 = load4($QD);
 return ($0|0);
}
function __ZNK5SVR_Q10swap_indexEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $QD = 0, $arrayidx = 0, $arrayidx3 = 0, $arrayidx4 = 0, $arrayidx6 = 0, $arrayidx7 = 0, $arrayidx9 = 0, $index = 0, $sign = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sign = ((($this)) + 56|0);
 $0 = load4($sign);
 $arrayidx = (($0) + ($i)|0);
 $arrayidx3 = (($0) + ($j)|0);
 $1 = load1($arrayidx);
 $2 = load1($arrayidx3);
 store1($arrayidx,$2);
 store1($arrayidx3,$1);
 $index = ((($this)) + 60|0);
 $3 = load4($index);
 $arrayidx4 = (($3) + ($i<<2)|0);
 $arrayidx6 = (($3) + ($j<<2)|0);
 $4 = load4($arrayidx4);
 $5 = load4($arrayidx6);
 store4($arrayidx4,$5);
 store4($arrayidx6,$4);
 $QD = ((($this)) + 76|0);
 $6 = load4($QD);
 $arrayidx7 = (($6) + ($i<<3)|0);
 $arrayidx9 = (($6) + ($j<<3)|0);
 $7 = loadd($arrayidx7);
 $8 = loadd($arrayidx9);
 stored($arrayidx7,$8);
 stored($arrayidx9,$7);
 return;
}
function __ZN5SVR_QD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN5SVR_QD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNK11ONE_CLASS_Q5get_QEii($this,$i,$len) {
 $this = $this|0;
 $i = $i|0;
 $len = $len|0;
 var $$elt = 0, $$elt9 = 0, $$pre = 0, $$unpack = 0, $$unpack10 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $arrayidx = 0, $cache = 0, $call = 0, $call3 = 0.0, $cmp = 0, $conv = Math_fround(0), $data = 0, $exitcond = 0;
 var $inc = 0, $j$012 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $data = sp;
 $cache = ((($this)) + 48|0);
 $0 = load4($cache);
 $call = (__ZN5Cache8get_dataEiPPfi($0,$i,$data,$len)|0);
 $cmp = ($call|0)<($len|0);
 if (!($cmp)) {
  $$pre = load4($data);
  $6 = $$pre;
  STACKTOP = sp;return ($6|0);
 }
 $$elt = ((($this)) + 4|0);
 $$elt9 = ((($this)) + 8|0);
 $1 = load4($data);
 $j$012 = $call;
 while(1) {
  $$unpack = load4($$elt);
  $$unpack10 = load4($$elt9);
  $memptr$adj$shifted = $$unpack10 >> 1;
  $2 = (($this) + ($memptr$adj$shifted)|0);
  $3 = $$unpack10 & 1;
  $memptr$isvirtual = ($3|0)==(0);
  if ($memptr$isvirtual) {
   $memptr$nonvirtualfn = $$unpack;
   $5 = $memptr$nonvirtualfn;
  } else {
   $vtable = load4($2);
   $4 = (($vtable) + ($$unpack)|0);
   $memptr$virtualfn = load4($4);
   $5 = $memptr$virtualfn;
  }
  $call3 = (+FUNCTION_TABLE_diii[$5 & 7]($2,$i,$j$012));
  $conv = Math_fround($call3);
  $arrayidx = (($1) + ($j$012<<2)|0);
  storef($arrayidx,$conv);
  $inc = (($j$012) + 1)|0;
  $exitcond = ($inc|0)==($len|0);
  if ($exitcond) {
   $6 = $1;
   break;
  } else {
   $j$012 = $inc;
  }
 }
 STACKTOP = sp;return ($6|0);
}
function __ZNK11ONE_CLASS_Q6get_QDEv($this) {
 $this = $this|0;
 var $0 = 0, $QD = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $QD = ((($this)) + 52|0);
 $0 = load4($QD);
 return ($0|0);
}
function __ZNK11ONE_CLASS_Q10swap_indexEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0.0, $9 = 0.0, $QD = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx3 = 0, $arrayidx3$i = 0, $arrayidx5$i = 0, $arrayidx7$i = 0, $cache = 0, $tobool$i = 0, $x$i = 0;
 var $x_square$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cache = ((($this)) + 48|0);
 $0 = load4($cache);
 __ZN5Cache10swap_indexEii($0,$i,$j);
 $x$i = ((($this)) + 12|0);
 $1 = load4($x$i);
 $arrayidx$i = (($1) + ($i<<2)|0);
 $arrayidx3$i = (($1) + ($j<<2)|0);
 $2 = load4($arrayidx$i);
 $3 = load4($arrayidx3$i);
 store4($arrayidx$i,$3);
 store4($arrayidx3$i,$2);
 $x_square$i = ((($this)) + 16|0);
 $4 = load4($x_square$i);
 $tobool$i = ($4|0)==(0|0);
 $arrayidx5$i = (($4) + ($i<<3)|0);
 $arrayidx7$i = (($4) + ($j<<3)|0);
 if (!($tobool$i)) {
  $5 = loadd($arrayidx5$i);
  $6 = loadd($arrayidx7$i);
  stored($arrayidx5$i,$6);
  stored($arrayidx7$i,$5);
 }
 $QD = ((($this)) + 52|0);
 $7 = load4($QD);
 $arrayidx = (($7) + ($i<<3)|0);
 $arrayidx3 = (($7) + ($j<<3)|0);
 $8 = loadd($arrayidx);
 $9 = loadd($arrayidx3);
 stored($arrayidx,$9);
 stored($arrayidx3,$8);
 return;
}
function __ZN11ONE_CLASS_QD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN11ONE_CLASS_QD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNK5SVC_Q5get_QEii($this,$i,$len) {
 $this = $this|0;
 $i = $i|0;
 $len = $len|0;
 var $$elt = 0, $$elt11 = 0, $$pre = 0, $$unpack = 0, $$unpack12 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arrayidx = 0, $arrayidx10 = 0, $arrayidx4 = 0, $cache = 0, $call = 0;
 var $call7 = 0.0, $cmp = 0, $conv = 0, $conv5 = 0, $conv6 = 0.0, $conv9 = Math_fround(0), $data = 0, $exitcond = 0, $inc = 0, $j$014 = 0, $memptr$adj$shifted = 0, $memptr$isvirtual = 0, $memptr$nonvirtualfn = 0, $memptr$virtualfn = 0, $mul = 0, $mul8 = 0.0, $vtable = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $data = sp;
 $cache = ((($this)) + 52|0);
 $0 = load4($cache);
 $call = (__ZN5Cache8get_dataEiPPfi($0,$i,$data,$len)|0);
 $cmp = ($call|0)<($len|0);
 if (!($cmp)) {
  $$pre = load4($data);
  $9 = $$pre;
  STACKTOP = sp;return ($9|0);
 }
 $y = ((($this)) + 48|0);
 $$elt = ((($this)) + 4|0);
 $$elt11 = ((($this)) + 8|0);
 $1 = load4($data);
 $j$014 = $call;
 while(1) {
  $2 = load4($y);
  $arrayidx = (($2) + ($i)|0);
  $3 = load1($arrayidx);
  $conv = $3 << 24 >> 24;
  $arrayidx4 = (($2) + ($j$014)|0);
  $4 = load1($arrayidx4);
  $conv5 = $4 << 24 >> 24;
  $mul = Math_imul($conv5, $conv)|0;
  $conv6 = (+($mul|0));
  $$unpack = load4($$elt);
  $$unpack12 = load4($$elt11);
  $memptr$adj$shifted = $$unpack12 >> 1;
  $5 = (($this) + ($memptr$adj$shifted)|0);
  $6 = $$unpack12 & 1;
  $memptr$isvirtual = ($6|0)==(0);
  if ($memptr$isvirtual) {
   $memptr$nonvirtualfn = $$unpack;
   $8 = $memptr$nonvirtualfn;
  } else {
   $vtable = load4($5);
   $7 = (($vtable) + ($$unpack)|0);
   $memptr$virtualfn = load4($7);
   $8 = $memptr$virtualfn;
  }
  $call7 = (+FUNCTION_TABLE_diii[$8 & 7]($5,$i,$j$014));
  $mul8 = $conv6 * $call7;
  $conv9 = Math_fround($mul8);
  $arrayidx10 = (($1) + ($j$014<<2)|0);
  storef($arrayidx10,$conv9);
  $inc = (($j$014) + 1)|0;
  $exitcond = ($inc|0)==($len|0);
  if ($exitcond) {
   $9 = $1;
   break;
  } else {
   $j$014 = $inc;
  }
 }
 STACKTOP = sp;return ($9|0);
}
function __ZNK5SVC_Q6get_QDEv($this) {
 $this = $this|0;
 var $0 = 0, $QD = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $QD = ((($this)) + 56|0);
 $0 = load4($QD);
 return ($0|0);
}
function __ZNK5SVC_Q10swap_indexEii($this,$i,$j) {
 $this = $this|0;
 $i = $i|0;
 $j = $j|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0.0, $12 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0, $QD = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx3 = 0, $arrayidx3$i = 0, $arrayidx4 = 0, $arrayidx5$i = 0;
 var $arrayidx6 = 0, $arrayidx7$i = 0, $cache = 0, $tobool$i = 0, $x$i = 0, $x_square$i = 0, $y = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cache = ((($this)) + 52|0);
 $0 = load4($cache);
 __ZN5Cache10swap_indexEii($0,$i,$j);
 $x$i = ((($this)) + 12|0);
 $1 = load4($x$i);
 $arrayidx$i = (($1) + ($i<<2)|0);
 $arrayidx3$i = (($1) + ($j<<2)|0);
 $2 = load4($arrayidx$i);
 $3 = load4($arrayidx3$i);
 store4($arrayidx$i,$3);
 store4($arrayidx3$i,$2);
 $x_square$i = ((($this)) + 16|0);
 $4 = load4($x_square$i);
 $tobool$i = ($4|0)==(0|0);
 $arrayidx5$i = (($4) + ($i<<3)|0);
 $arrayidx7$i = (($4) + ($j<<3)|0);
 if (!($tobool$i)) {
  $5 = loadd($arrayidx5$i);
  $6 = loadd($arrayidx7$i);
  stored($arrayidx5$i,$6);
  stored($arrayidx7$i,$5);
 }
 $y = ((($this)) + 48|0);
 $7 = load4($y);
 $arrayidx = (($7) + ($i)|0);
 $arrayidx3 = (($7) + ($j)|0);
 $8 = load1($arrayidx);
 $9 = load1($arrayidx3);
 store1($arrayidx,$9);
 store1($arrayidx3,$8);
 $QD = ((($this)) + 56|0);
 $10 = load4($QD);
 $arrayidx4 = (($10) + ($i<<3)|0);
 $arrayidx6 = (($10) + ($j<<3)|0);
 $11 = loadd($arrayidx4);
 $12 = loadd($arrayidx6);
 stored($arrayidx4,$12);
 stored($arrayidx6,$11);
 return;
}
function __ZN5SVC_QD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN5SVC_QD2Ev($this);
 __ZdlPv($this);
 return;
}
function _svm_predict_probability($model,$x,$prob_estimates) {
 $model = $model|0;
 $x = $x|0;
 $prob_estimates = $prob_estimates|0;
 var $$off$i = 0, $$pre = 0.0, $$sink$i = 0.0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0.0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0;
 var $24 = 0, $25 = 0.0, $26 = 0.0, $27 = 0.0, $28 = 0.0, $29 = 0.0, $3 = 0, $30 = 0.0, $31 = 0, $32 = 0.0, $33 = 0, $34 = 0.0, $35 = 0, $36 = 0.0, $37 = 0, $38 = 0.0, $39 = 0, $4 = 0, $40 = 0, $41 = 0.0;
 var $42 = 0.0, $43 = 0.0, $44 = 0.0, $45 = 0.0, $46 = 0, $47 = 0.0, $48 = 0.0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $add = 0, $add$i = 0.0, $add$i75 = 0.0, $add$i75106 = 0.0;
 var $add105$us$i$us = 0.0, $add107$us$i$us = 0.0, $add108$us$i$us = 0.0, $add119$us$i$us = 0.0, $add36$i = 0.0, $add5$i = 0.0, $add65$us$i$us = 0.0, $add72$us$i$us = 0.0, $add94$us$i$us = 0.0, $add99$us$i$us = 0.0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx10$i = 0, $arrayidx115$us$i$us = 0, $arrayidx117$us$i$us = 0, $arrayidx124$us$i$us = 0, $arrayidx14$i = 0, $arrayidx141$i = 0, $arrayidx15$i = 0, $arrayidx15$i104 = 0;
 var $arrayidx21 = 0, $arrayidx21$i = 0, $arrayidx22$i = 0, $arrayidx22$i107 = 0, $arrayidx23 = 0, $arrayidx24$i = 0, $arrayidx25 = 0, $arrayidx29$i = 0, $arrayidx30 = 0, $arrayidx30$i = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx36 = 0, $arrayidx39$i = 0, $arrayidx40$i = 0, $arrayidx43$i = 0, $arrayidx47 = 0, $arrayidx49 = 0, $arrayidx51 = 0, $arrayidx55 = 0;
 var $arrayidx56 = 0, $arrayidx56$us$i$us = 0, $arrayidx60$us$i$us = 0, $arrayidx61$us$i$us = 0, $arrayidx62$us$i$us = 0, $arrayidx66 = 0, $arrayidx69$us$i$us = 0, $arrayidx70 = 0, $arrayidx79$i$us = 0, $arrayidx8$i = 0, $arrayidx92$us$i$us = 0, $arrayidx95$us$i$us = 0, $arrayidx96$us$i$us = 0, $arrayidx98$us$i$us = 0, $call = 0, $call$i = 0.0, $call1$i = 0, $call10$i = 0, $call11 = 0, $call11$i = 0.0;
 var $call14 = 0, $call3$i = 0, $call4$i = 0.0, $call4$sink$i = 0.0, $call7$i = 0, $call81$i$us = 0.0, $cmp$i = 0, $cmp$i67 = 0, $cmp$i68 = 0, $cmp12154$i = 0, $cmp1289 = 0, $cmp1982 = 0, $cmp27156$i = 0, $cmp4 = 0, $cmp44 = 0, $cmp51$i = 0, $cmp51$i$us = 0, $cmp51151$i = 0, $cmp5379 = 0, $cmp57 = 0;
 var $cmp6 = 0, $cmp82$i$us = 0, $cmp86$i = 0, $cmp86$i$us = 0, $cond$i = 0.0, $cond$i$i = 0, $cond$i69 = 0.0, $conv = 0.0, $conv$i = 0.0, $div = 0, $div$i = 0, $div$i74 = 0.0, $div109$us$i$us = 0.0, $div111$us$i$us = 0.0, $div121$us$i$us = 0.0, $div125$us$i$us = 0.0, $div5$i = 0.0, $div6$i = 0.0, $div97$us$i$us = 0.0, $exitcond = 0;
 var $exitcond$i = 0, $exitcond161$i$us = 0, $exitcond162$i$us = 0, $exitcond163$i$us = 0, $exitcond164$i$us = 0, $exitcond165$i$us = 0, $exitcond166$i = 0, $exitcond166$i109 = 0, $exitcond167$i = 0, $exitcond168$i = 0, $exitcond94 = 0, $exitcond95 = 0, $exitcond96 = 0, $exitcond97 = 0, $i$090 = 0, $i$187 = 0, $i$280 = 0, $i$378 = 0, $inc = 0, $inc$i = 0;
 var $inc$i110 = 0, $inc127$us$i$us = 0, $inc130$us$i$us = 0, $inc133$i = 0, $inc133$i$us = 0, $inc143$i = 0, $inc37 = 0, $inc39 = 0, $inc45$i = 0, $inc61 = 0, $inc67$us$i$us = 0, $inc68 = 0, $inc74$us$i$us = 0, $inc84$i$us = 0, $indvars$iv = 0, $indvars$iv$i = 0, $indvars$iv$next = 0, $indvars$iv$next$i = 0, $iter$0152$i = 0, $iter$0152$i$us = 0;
 var $j$084 = 0, $j$1157$i = 0, $j$2137$us$i$us = 0, $j$3147$us$i$us = 0, $k$088 = 0, $k$1$lcssa = 0, $k$183 = 0, $label = 0, $max_error$0143$i$us = 0.0, $max_error$1$i$us = 0.0, $mul = 0, $mul$i = 0.0, $mul$i71 = 0, $mul10 = 0, $mul102$us$i$us = 0.0, $mul104$us$i$us = 0.0, $mul106$us$i$us = 0.0, $mul118$us$i$us = 0.0, $mul13 = 0, $mul18$i = 0.0;
 var $mul18$i105 = 0.0, $mul2$i = 0, $mul33$i = 0.0, $mul41$i = 0.0, $mul63$us$i$us = 0.0, $mul71$us$i$us = 0.0, $mul8 = 0, $mul9$i = 0, $mul9$sink$i = 0, $nr_class1$i = 0, $nr_class7 = 0, $pQp$0139$us$i$us = 0.0, $pQp$1149$us$i$us = 0.0, $probA = 0, $probB = 0, $prob_max_idx$0$lcssa = 0, $prob_max_idx$081 = 0, $prob_max_idx$1 = 0, $retval$0 = 0.0, $sub = 0;
 var $sub$i = 0.0, $sub$i70 = 0, $sub34 = 0.0, $sub80$i$us = 0.0, $switch = 0, $switch$i = 0, $t$1140$us$i$us = 0, $t$2144$i$us = 0, $t$3150$us$i$us = 0, $t$4135$i = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = load4($model);
 $switch = ($0>>>0)<(2);
 if ($switch) {
  $probA = ((($model)) + 116|0);
  $1 = load4($probA);
  $cmp4 = ($1|0)==(0|0);
  if (!($cmp4)) {
   $probB = ((($model)) + 120|0);
   $2 = load4($probB);
   $cmp6 = ($2|0)==(0|0);
   if (!($cmp6)) {
    $nr_class7 = ((($model)) + 96|0);
    $3 = load4($nr_class7);
    $sub = (($3) + -1)|0;
    $mul = Math_imul($sub, $3)|0;
    $div = (($mul|0) / 2)&-1;
    $mul8 = $div << 3;
    $call = (_malloc($mul8)|0);
    (+_svm_predict_values($model,$x,$call));
    $mul10 = $3 << 2;
    $call11 = (_malloc($mul10)|0);
    $cmp1289 = ($3|0)>(0);
    if ($cmp1289) {
     $mul13 = $3 << 3;
     $i$090 = 0;
     while(1) {
      $call14 = (_malloc($mul13)|0);
      $arrayidx = (($call11) + ($i$090<<2)|0);
      store4($arrayidx,$call14);
      $inc = (($i$090) + 1)|0;
      $exitcond97 = ($inc|0)==($3|0);
      if ($exitcond97) {
       break;
      } else {
       $i$090 = $inc;
      }
     }
     if ($cmp1289) {
      $i$187 = 0;$indvars$iv = $sub;$k$088 = 0;
      while(1) {
       $add = (($i$187) + 1)|0;
       $cmp1982 = ($add|0)<($3|0);
       if ($cmp1982) {
        $5 = load4($probA);
        $6 = load4($probB);
        $arrayidx30 = (($call11) + ($i$187<<2)|0);
        $7 = load4($arrayidx30);
        $j$084 = $add;$k$183 = $k$088;
        while(1) {
         $arrayidx21 = (($call) + ($k$183<<3)|0);
         $8 = loadd($arrayidx21);
         $arrayidx23 = (($5) + ($k$183<<3)|0);
         $9 = loadd($arrayidx23);
         $arrayidx25 = (($6) + ($k$183<<3)|0);
         $10 = loadd($arrayidx25);
         $mul$i = $8 * $9;
         $add$i = $mul$i + $10;
         $cmp$i = !($add$i >= 0.0);
         if ($cmp$i) {
          $call4$i = (+_exp($add$i));
          $$sink$i = 1.0;$call4$sink$i = $call4$i;
         } else {
          $sub$i = -$add$i;
          $call$i = (+_exp($sub$i));
          $$sink$i = $call$i;$call4$sink$i = $call$i;
         }
         $add5$i = $call4$sink$i + 1.0;
         $div6$i = $$sink$i / $add5$i;
         $cmp$i67 = $div6$i > 9.9999999999999995E-8;
         $cond$i = $cmp$i67 ? $div6$i : 9.9999999999999995E-8;
         $cmp$i68 = $cond$i < 0.99999990000000005;
         $cond$i69 = $cmp$i68 ? $cond$i : 0.99999990000000005;
         $arrayidx31 = (($7) + ($j$084<<3)|0);
         stored($arrayidx31,$cond$i69);
         $sub34 = 1.0 - $cond$i69;
         $arrayidx35 = (($call11) + ($j$084<<2)|0);
         $11 = load4($arrayidx35);
         $arrayidx36 = (($11) + ($i$187<<3)|0);
         stored($arrayidx36,$sub34);
         $inc37 = (($k$183) + 1)|0;
         $inc39 = (($j$084) + 1)|0;
         $exitcond95 = ($inc39|0)==($3|0);
         if ($exitcond95) {
          break;
         } else {
          $j$084 = $inc39;$k$183 = $inc37;
         }
        }
        $4 = (($k$088) + ($indvars$iv))|0;
        $k$1$lcssa = $4;
       } else {
        $k$1$lcssa = $k$088;
       }
       $indvars$iv$next = (($indvars$iv) + -1)|0;
       $exitcond96 = ($add|0)==($3|0);
       if ($exitcond96) {
        break;
       } else {
        $i$187 = $add;$indvars$iv = $indvars$iv$next;$k$088 = $k$1$lcssa;
       }
      }
      $cmp44 = ($3|0)==(2);
      if ($cmp44) {
       $12 = load4($call11);
       $arrayidx47 = ((($12)) + 8|0);
       $13 = loadd($arrayidx47);
       stored($prob_estimates,$13);
       $arrayidx49 = ((($call11)) + 4|0);
       $14 = load4($arrayidx49);
       $15 = loadd($14);
       $arrayidx51 = ((($prob_estimates)) + 8|0);
       stored($arrayidx51,$15);
       $i$280 = 1;$prob_max_idx$081 = 0;
       label = 46;
      } else {
       label = 18;
      }
     } else {
      label = 18;
     }
    } else {
     label = 18;
    }
    if ((label|0) == 18) {
     $16 = ($3|0)>(100);
     $cond$i$i = $16 ? $3 : 100;
     $call1$i = (_malloc($mul10)|0);
     $mul2$i = $3 << 3;
     $call3$i = (_malloc($mul2$i)|0);
     $conv$i = (+($3|0));
     $div$i74 = 0.0050000000000000001 / $conv$i;
     L26: do {
      if ($cmp1289) {
       $div5$i = 1.0 / $conv$i;
       $indvars$iv$i = 0;
       while(1) {
        $arrayidx$i = (($prob_estimates) + ($indvars$iv$i<<3)|0);
        stored($arrayidx$i,$div5$i);
        $call7$i = (_malloc($mul2$i)|0);
        $arrayidx8$i = (($call1$i) + ($indvars$iv$i<<2)|0);
        store4($arrayidx8$i,$call7$i);
        $arrayidx10$i = (($call7$i) + ($indvars$iv$i<<3)|0);
        stored($arrayidx10$i,0.0);
        $cmp12154$i = ($indvars$iv$i|0)>(0);
        if ($cmp12154$i) {
         $31 = load4($call11);
         $arrayidx15$i104 = (($31) + ($indvars$iv$i<<3)|0);
         $32 = loadd($arrayidx15$i104);
         $mul18$i105 = $32 * $32;
         $add$i75106 = $mul18$i105 + 0.0;
         stored($arrayidx10$i,$add$i75106);
         $33 = load4($call1$i);
         $arrayidx22$i107 = (($33) + ($indvars$iv$i<<3)|0);
         $34 = loadd($arrayidx22$i107);
         stored($call7$i,$34);
         $exitcond166$i109 = ($indvars$iv$i|0)==(1);
         if (!($exitcond166$i109)) {
          $inc$i110 = 1;
          while(1) {
           $$pre = loadd($arrayidx10$i);
           $arrayidx14$i = (($call11) + ($inc$i110<<2)|0);
           $35 = load4($arrayidx14$i);
           $arrayidx15$i = (($35) + ($indvars$iv$i<<3)|0);
           $36 = loadd($arrayidx15$i);
           $mul18$i = $36 * $36;
           $add$i75 = $mul18$i + $$pre;
           stored($arrayidx10$i,$add$i75);
           $arrayidx21$i = (($call1$i) + ($inc$i110<<2)|0);
           $37 = load4($arrayidx21$i);
           $arrayidx22$i = (($37) + ($indvars$iv$i<<3)|0);
           $38 = loadd($arrayidx22$i);
           $arrayidx24$i = (($call7$i) + ($inc$i110<<3)|0);
           stored($arrayidx24$i,$38);
           $inc$i = (($inc$i110) + 1)|0;
           $exitcond166$i = ($inc$i|0)==($indvars$iv$i|0);
           if ($exitcond166$i) {
            break;
           } else {
            $inc$i110 = $inc$i;
           }
          }
         }
        }
        $indvars$iv$next$i = (($indvars$iv$i) + 1)|0;
        $cmp27156$i = ($indvars$iv$next$i|0)<($3|0);
        if ($cmp27156$i) {
         $arrayidx39$i = (($call11) + ($indvars$iv$i<<2)|0);
         $39 = load4($arrayidx39$i);
         $j$1157$i = $indvars$iv$next$i;
         while(1) {
          $arrayidx29$i = (($call11) + ($j$1157$i<<2)|0);
          $40 = load4($arrayidx29$i);
          $arrayidx30$i = (($40) + ($indvars$iv$i<<3)|0);
          $41 = loadd($arrayidx30$i);
          $mul33$i = $41 * $41;
          $42 = loadd($arrayidx10$i);
          $add36$i = $mul33$i + $42;
          stored($arrayidx10$i,$add36$i);
          $43 = loadd($arrayidx30$i);
          $arrayidx40$i = (($39) + ($j$1157$i<<3)|0);
          $44 = loadd($arrayidx40$i);
          $45 = $43 * $44;
          $mul41$i = -$45;
          $arrayidx43$i = (($call7$i) + ($j$1157$i<<3)|0);
          stored($arrayidx43$i,$mul41$i);
          $inc45$i = (($j$1157$i) + 1)|0;
          $exitcond167$i = ($inc45$i|0)==($3|0);
          if ($exitcond167$i) {
           break;
          } else {
           $j$1157$i = $inc45$i;
          }
         }
        }
        $exitcond168$i = ($indvars$iv$next$i|0)==($3|0);
        if ($exitcond168$i) {
         break;
        } else {
         $indvars$iv$i = $indvars$iv$next$i;
        }
       }
       $cmp51151$i = ($cond$i$i|0)>(0);
       if ($cmp51151$i) {
        $iter$0152$i$us = 0;
        while(1) {
         $pQp$0139$us$i$us = 0.0;$t$1140$us$i$us = 0;
         while(1) {
          $arrayidx56$us$i$us = (($call3$i) + ($t$1140$us$i$us<<3)|0);
          stored($arrayidx56$us$i$us,0.0);
          $arrayidx60$us$i$us = (($call1$i) + ($t$1140$us$i$us<<2)|0);
          $17 = load4($arrayidx60$us$i$us);
          $20 = 0.0;$j$2137$us$i$us = 0;
          while(1) {
           $arrayidx61$us$i$us = (($17) + ($j$2137$us$i$us<<3)|0);
           $18 = loadd($arrayidx61$us$i$us);
           $arrayidx62$us$i$us = (($prob_estimates) + ($j$2137$us$i$us<<3)|0);
           $19 = loadd($arrayidx62$us$i$us);
           $mul63$us$i$us = $18 * $19;
           $add65$us$i$us = $20 + $mul63$us$i$us;
           $inc67$us$i$us = (($j$2137$us$i$us) + 1)|0;
           $exitcond161$i$us = ($inc67$us$i$us|0)==($3|0);
           if ($exitcond161$i$us) {
            break;
           } else {
            $20 = $add65$us$i$us;$j$2137$us$i$us = $inc67$us$i$us;
           }
          }
          stored($arrayidx56$us$i$us,$add65$us$i$us);
          $arrayidx69$us$i$us = (($prob_estimates) + ($t$1140$us$i$us<<3)|0);
          $21 = loadd($arrayidx69$us$i$us);
          $mul71$us$i$us = $add65$us$i$us * $21;
          $add72$us$i$us = $pQp$0139$us$i$us + $mul71$us$i$us;
          $inc74$us$i$us = (($t$1140$us$i$us) + 1)|0;
          $exitcond162$i$us = ($inc74$us$i$us|0)==($3|0);
          if ($exitcond162$i$us) {
           $max_error$0143$i$us = 0.0;$t$2144$i$us = 0;
           break;
          } else {
           $pQp$0139$us$i$us = $add72$us$i$us;$t$1140$us$i$us = $inc74$us$i$us;
          }
         }
         while(1) {
          $arrayidx79$i$us = (($call3$i) + ($t$2144$i$us<<3)|0);
          $22 = loadd($arrayidx79$i$us);
          $sub80$i$us = $22 - $add72$us$i$us;
          $call81$i$us = (+Math_abs((+$sub80$i$us)));
          $cmp82$i$us = $call81$i$us > $max_error$0143$i$us;
          $max_error$1$i$us = $cmp82$i$us ? $call81$i$us : $max_error$0143$i$us;
          $inc84$i$us = (($t$2144$i$us) + 1)|0;
          $exitcond163$i$us = ($inc84$i$us|0)==($3|0);
          if ($exitcond163$i$us) {
           break;
          } else {
           $max_error$0143$i$us = $max_error$1$i$us;$t$2144$i$us = $inc84$i$us;
          }
         }
         $cmp86$i$us = $max_error$1$i$us < $div$i74;
         if ($cmp86$i$us) {
          break L26;
         } else {
          $pQp$1149$us$i$us = $add72$us$i$us;$t$3150$us$i$us = 0;
         }
         while(1) {
          $arrayidx92$us$i$us = (($call3$i) + ($t$3150$us$i$us<<3)|0);
          $23 = loadd($arrayidx92$us$i$us);
          $add94$us$i$us = $pQp$1149$us$i$us - $23;
          $arrayidx95$us$i$us = (($call1$i) + ($t$3150$us$i$us<<2)|0);
          $24 = load4($arrayidx95$us$i$us);
          $arrayidx96$us$i$us = (($24) + ($t$3150$us$i$us<<3)|0);
          $25 = loadd($arrayidx96$us$i$us);
          $div97$us$i$us = $add94$us$i$us / $25;
          $arrayidx98$us$i$us = (($prob_estimates) + ($t$3150$us$i$us<<3)|0);
          $26 = loadd($arrayidx98$us$i$us);
          $add99$us$i$us = $26 + $div97$us$i$us;
          stored($arrayidx98$us$i$us,$add99$us$i$us);
          $27 = loadd($arrayidx96$us$i$us);
          $mul102$us$i$us = $div97$us$i$us * $27;
          $mul104$us$i$us = $23 * 2.0;
          $add105$us$i$us = $mul104$us$i$us + $mul102$us$i$us;
          $mul106$us$i$us = $div97$us$i$us * $add105$us$i$us;
          $add108$us$i$us = $div97$us$i$us + 1.0;
          $j$3147$us$i$us = 0;
          while(1) {
           $arrayidx115$us$i$us = (($call3$i) + ($j$3147$us$i$us<<3)|0);
           $28 = loadd($arrayidx115$us$i$us);
           $arrayidx117$us$i$us = (($24) + ($j$3147$us$i$us<<3)|0);
           $29 = loadd($arrayidx117$us$i$us);
           $mul118$us$i$us = $div97$us$i$us * $29;
           $add119$us$i$us = $28 + $mul118$us$i$us;
           $div121$us$i$us = $add119$us$i$us / $add108$us$i$us;
           stored($arrayidx115$us$i$us,$div121$us$i$us);
           $arrayidx124$us$i$us = (($prob_estimates) + ($j$3147$us$i$us<<3)|0);
           $30 = loadd($arrayidx124$us$i$us);
           $div125$us$i$us = $30 / $add108$us$i$us;
           stored($arrayidx124$us$i$us,$div125$us$i$us);
           $inc127$us$i$us = (($j$3147$us$i$us) + 1)|0;
           $exitcond164$i$us = ($inc127$us$i$us|0)==($3|0);
           if ($exitcond164$i$us) {
            break;
           } else {
            $j$3147$us$i$us = $inc127$us$i$us;
           }
          }
          $add107$us$i$us = $pQp$1149$us$i$us + $mul106$us$i$us;
          $div109$us$i$us = $add107$us$i$us / $add108$us$i$us;
          $div111$us$i$us = $div109$us$i$us / $add108$us$i$us;
          $inc130$us$i$us = (($t$3150$us$i$us) + 1)|0;
          $exitcond165$i$us = ($inc130$us$i$us|0)==($3|0);
          if ($exitcond165$i$us) {
           break;
          } else {
           $pQp$1149$us$i$us = $div111$us$i$us;$t$3150$us$i$us = $inc130$us$i$us;
          }
         }
         $inc133$i$us = (($iter$0152$i$us) + 1)|0;
         $cmp51$i$us = ($inc133$i$us|0)<($cond$i$i|0);
         if ($cmp51$i$us) {
          $iter$0152$i$us = $inc133$i$us;
         } else {
          label = 41;
          break;
         }
        }
       } else {
        label = 41;
       }
      } else {
       $cmp86$i = $div$i74 > 0.0;
       $iter$0152$i = 0;
       while(1) {
        if ($cmp86$i) {
         break L26;
        }
        $inc133$i = (($iter$0152$i) + 1)|0;
        $cmp51$i = ($inc133$i|0)<($cond$i$i|0);
        if ($cmp51$i) {
         $iter$0152$i = $inc133$i;
        } else {
         label = 41;
         break;
        }
       }
      }
     } while(0);
     if ((label|0) == 41) {
      __ZL4infoPKcz(3235,$vararg_buffer);
     }
     if ($cmp1289) {
      $t$4135$i = 0;
      while(1) {
       $arrayidx141$i = (($call1$i) + ($t$4135$i<<2)|0);
       $46 = load4($arrayidx141$i);
       _free($46);
       $inc143$i = (($t$4135$i) + 1)|0;
       $exitcond$i = ($inc143$i|0)==($3|0);
       if ($exitcond$i) {
        break;
       } else {
        $t$4135$i = $inc143$i;
       }
      }
     }
     _free($call1$i);
     _free($call3$i);
     $cmp5379 = ($3|0)>(1);
     if ($cmp5379) {
      $i$280 = 1;$prob_max_idx$081 = 0;
      label = 46;
     } else {
      $prob_max_idx$0$lcssa = 0;
     }
    }
    if ((label|0) == 46) {
     while(1) {
      label = 0;
      $arrayidx55 = (($prob_estimates) + ($i$280<<3)|0);
      $47 = loadd($arrayidx55);
      $arrayidx56 = (($prob_estimates) + ($prob_max_idx$081<<3)|0);
      $48 = loadd($arrayidx56);
      $cmp57 = $47 > $48;
      $prob_max_idx$1 = $cmp57 ? $i$280 : $prob_max_idx$081;
      $inc61 = (($i$280) + 1)|0;
      $exitcond94 = ($inc61|0)==($3|0);
      if ($exitcond94) {
       $prob_max_idx$0$lcssa = $prob_max_idx$1;
       break;
      } else {
       $i$280 = $inc61;$prob_max_idx$081 = $prob_max_idx$1;
       label = 46;
      }
     }
    }
    if ($cmp1289) {
     $i$378 = 0;
     while(1) {
      $arrayidx66 = (($call11) + ($i$378<<2)|0);
      $49 = load4($arrayidx66);
      _free($49);
      $inc68 = (($i$378) + 1)|0;
      $exitcond = ($inc68|0)==($3|0);
      if ($exitcond) {
       break;
      } else {
       $i$378 = $inc68;
      }
     }
    }
    _free($call);
    _free($call11);
    $label = ((($model)) + 128|0);
    $50 = load4($label);
    $arrayidx70 = (($50) + ($prob_max_idx$0$lcssa<<2)|0);
    $51 = load4($arrayidx70);
    $conv = (+($51|0));
    $retval$0 = $conv;
    STACKTOP = sp;return (+$retval$0);
   }
  }
 }
 $nr_class1$i = ((($model)) + 96|0);
 $52 = load4($nr_class1$i);
 $$off$i = (($0) + -2)|0;
 $switch$i = ($$off$i>>>0)<(3);
 if ($switch$i) {
  $mul9$sink$i = 8;
 } else {
  $sub$i70 = (($52) + -1)|0;
  $mul$i71 = Math_imul($sub$i70, $52)|0;
  $div$i = (($mul$i71|0) / 2)&-1;
  $mul9$i = $div$i << 3;
  $mul9$sink$i = $mul9$i;
 }
 $call10$i = (_malloc($mul9$sink$i)|0);
 $call11$i = (+_svm_predict_values($model,$x,$call10$i));
 _free($call10$i);
 $retval$0 = $call11$i;
 STACKTOP = sp;return (+$retval$0);
}
function _svm_get_nr_class($model) {
 $model = $model|0;
 var $0 = 0, $nr_class = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $nr_class = ((($model)) + 96|0);
 $0 = load4($nr_class);
 return ($0|0);
}
function _svm_predict($model,$x) {
 $model = $model|0;
 $x = $x|0;
 var $$off = 0, $0 = 0, $1 = 0, $call10 = 0, $call11 = 0.0, $div = 0, $mul = 0, $mul9 = 0, $mul9$sink = 0, $nr_class1 = 0, $sub = 0, $switch = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $nr_class1 = ((($model)) + 96|0);
 $0 = load4($nr_class1);
 $1 = load4($model);
 $$off = (($1) + -2)|0;
 $switch = ($$off>>>0)<(3);
 if ($switch) {
  $mul9$sink = 8;
 } else {
  $sub = (($0) + -1)|0;
  $mul = Math_imul($sub, $0)|0;
  $div = (($mul|0) / 2)&-1;
  $mul9 = $div << 3;
  $mul9$sink = $mul9;
 }
 $call10 = (_malloc($mul9$sink)|0);
 $call11 = (+_svm_predict_values($model,$x,$call10));
 _free($call10);
 return (+$call11);
}
function _svm_free_and_destroy_model($model_ptr_ptr) {
 $model_ptr_ptr = $model_ptr_ptr|0;
 var $0 = 0, $1 = 0, $cmp = 0, $cmp1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($model_ptr_ptr|0)==(0|0);
 if ($cmp) {
  return;
 }
 $0 = load4($model_ptr_ptr);
 $cmp1 = ($0|0)==(0|0);
 if ($cmp1) {
  return;
 }
 _svm_free_model_content($0);
 $1 = load4($model_ptr_ptr);
 _free($1);
 store4($model_ptr_ptr,0);
 return;
}
function _svm_get_svm_type($model) {
 $model = $model|0;
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($model);
 return ($0|0);
}
function _svm_get_labels($model,$label) {
 $model = $model|0;
 $label = $label|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $arrayidx = 0, $arrayidx4 = 0, $cmp = 0, $cmp2 = 0, $cmp27 = 0, $i$08 = 0, $inc = 0, $label1 = 0, $nr_class = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $label1 = ((($model)) + 128|0);
 $0 = load4($label1);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  return;
 }
 $nr_class = ((($model)) + 96|0);
 $1 = load4($nr_class);
 $cmp27 = ($1|0)>(0);
 if ($cmp27) {
  $i$08 = 0;
 } else {
  return;
 }
 while(1) {
  $arrayidx = (($0) + ($i$08<<2)|0);
  $2 = load4($arrayidx);
  $arrayidx4 = (($label) + ($i$08<<2)|0);
  store4($arrayidx4,$2);
  $inc = (($i$08) + 1)|0;
  $3 = load4($nr_class);
  $cmp2 = ($inc|0)<($3|0);
  if ($cmp2) {
   $i$08 = $inc;
  } else {
   break;
  }
 }
 return;
}
function _svm_get_sv_indices($model,$indices) {
 $model = $model|0;
 $indices = $indices|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $arrayidx = 0, $arrayidx3 = 0, $cmp = 0, $cmp1 = 0, $cmp17 = 0, $i$08 = 0, $inc = 0, $l = 0, $sv_indices = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sv_indices = ((($model)) + 124|0);
 $0 = load4($sv_indices);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  return;
 }
 $l = ((($model)) + 100|0);
 $1 = load4($l);
 $cmp17 = ($1|0)>(0);
 if ($cmp17) {
  $i$08 = 0;
 } else {
  return;
 }
 while(1) {
  $arrayidx = (($0) + ($i$08<<2)|0);
  $2 = load4($arrayidx);
  $arrayidx3 = (($indices) + ($i$08<<2)|0);
  store4($arrayidx3,$2);
  $inc = (($i$08) + 1)|0;
  $3 = load4($l);
  $cmp1 = ($inc|0)<($3|0);
  if ($cmp1) {
   $i$08 = $inc;
  } else {
   break;
  }
 }
 return;
}
function _svm_get_nr_sv($model) {
 $model = $model|0;
 var $0 = 0, $l = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $l = ((($model)) + 100|0);
 $0 = load4($l);
 return ($0|0);
}
function _svm_save_model($model_file_name,$model) {
 $model_file_name = $model_file_name|0;
 $model = $model|0;
 var $$ = 0, $$off = 0, $$pr = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0.0, $2 = 0, $20 = 0, $21 = 0, $22 = 0.0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0.0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0.0, $33 = 0, $34 = 0.0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0.0;
 var $41 = 0.0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0.0, $SV114 = 0, $arrayidx = 0, $arrayidx105 = 0, $arrayidx125$us = 0, $arrayidx126$us = 0, $arrayidx131 = 0, $arrayidx131$us = 0, $arrayidx39 = 0, $arrayidx51 = 0, $arrayidx70 = 0, $arrayidx8 = 0, $arrayidx89 = 0;
 var $call = 0, $call1 = 0, $call146 = 0, $call149 = 0, $call3 = 0, $cmp = 0, $cmp101123 = 0, $cmp11 = 0, $cmp117121 = 0, $cmp122116 = 0, $cmp133 = 0, $cmp133$us = 0, $cmp136 = 0, $cmp136$us = 0, $cmp136119 = 0, $cmp136119$us = 0, $cmp147 = 0, $cmp38 = 0, $cmp38131 = 0, $cmp47129 = 0;
 var $cmp66 = 0, $cmp85 = 0, $coef0 = 0, $conv = 0, $conv$us = 0, $degree = 0, $div = 0, $exitcond = 0, $exitcond135 = 0, $exitcond136 = 0, $exitcond137 = 0, $exitcond138 = 0, $gamma = 0, $i$0132 = 0, $i115$0122 = 0, $i115$0122$us = 0, $i45$0130 = 0, $i61$0128 = 0, $i80$0126 = 0, $i99$0124 = 0;
 var $inc = 0, $inc108 = 0, $inc129$us = 0, $inc143 = 0, $inc143$us = 0, $inc54 = 0, $inc73 = 0, $inc92 = 0, $incdec$ptr = 0, $incdec$ptr$us = 0, $j$0117$us = 0, $kernel_type = 0, $l34 = 0, $label = 0, $mul = 0, $nSV = 0, $not$cmp150 = 0, $nr_class33 = 0, $old_locale$0 = 0, $p$0120 = 0;
 var $p$0120$us = 0, $probA = 0, $probB = 0, $rho = 0, $sub = 0, $sv_coef113 = 0, $switch = 0, $tobool = 0, $tobool42 = 0, $tobool58 = 0, $tobool77 = 0, $tobool96 = 0, $value = 0, $value$us = 0, $value138 = 0, $value138$us = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer10 = 0, $vararg_buffer13 = 0;
 var $vararg_buffer16 = 0, $vararg_buffer19 = 0, $vararg_buffer22 = 0, $vararg_buffer25 = 0, $vararg_buffer28 = 0, $vararg_buffer31 = 0, $vararg_buffer34 = 0, $vararg_buffer38 = 0, $vararg_buffer4 = 0, $vararg_buffer41 = 0, $vararg_buffer44 = 0, $vararg_buffer47 = 0, $vararg_buffer7 = 0, $vararg_ptr37 = 0, $vararg_ptr50 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0;
 $vararg_buffer47 = sp + 136|0;
 $vararg_buffer44 = sp + 128|0;
 $vararg_buffer41 = sp + 120|0;
 $vararg_buffer38 = sp + 112|0;
 $vararg_buffer34 = sp + 96|0;
 $vararg_buffer31 = sp + 88|0;
 $vararg_buffer28 = sp + 80|0;
 $vararg_buffer25 = sp + 72|0;
 $vararg_buffer22 = sp + 64|0;
 $vararg_buffer19 = sp + 56|0;
 $vararg_buffer16 = sp + 48|0;
 $vararg_buffer13 = sp + 40|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer4 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $call = (_fopen($model_file_name,3272)|0);
 $cmp = ($call|0)==(0|0);
 if ($cmp) {
  STACKTOP = sp;return -1;
 }
 $call1 = (_setlocale(6,0)|0);
 $tobool = ($call1|0)==(0|0);
 if ($tobool) {
  $old_locale$0 = 0;
 } else {
  $call3 = (___strdup($call1)|0);
  $old_locale$0 = $call3;
 }
 (_setlocale(6,6534)|0);
 $0 = load4($model);
 $arrayidx = (1404 + ($0<<2)|0);
 $1 = load4($arrayidx);
 store4($vararg_buffer,$1);
 (_fprintf($call,3274,$vararg_buffer)|0);
 $kernel_type = ((($model)) + 4|0);
 $2 = load4($kernel_type);
 $arrayidx8 = (1428 + ($2<<2)|0);
 $3 = load4($arrayidx8);
 store4($vararg_buffer1,$3);
 (_fprintf($call,3287,$vararg_buffer1)|0);
 $4 = load4($kernel_type);
 $cmp11 = ($4|0)==(1);
 if ($cmp11) {
  $degree = ((($model)) + 8|0);
  $5 = load4($degree);
  store4($vararg_buffer4,$5);
  (_fprintf($call,3303,$vararg_buffer4)|0);
  $$pre = load4($kernel_type);
  $6 = $$pre;
 } else {
  $6 = $4;
 }
 $$off = (($6) + -1)|0;
 $switch = ($$off>>>0)<(3);
 if ($switch) {
  $gamma = ((($model)) + 16|0);
  $7 = loadd($gamma);
  stored($vararg_buffer7,$7);
  (_fprintf($call,3314,$vararg_buffer7)|0);
  $$pr = load4($kernel_type);
  $8 = $$pr;
 } else {
  $8 = $6;
 }
 switch ($8|0) {
 case 3: case 1:  {
  $coef0 = ((($model)) + 24|0);
  $9 = loadd($coef0);
  stored($vararg_buffer10,$9);
  (_fprintf($call,3324,$vararg_buffer10)|0);
  break;
 }
 default: {
 }
 }
 $nr_class33 = ((($model)) + 96|0);
 $10 = load4($nr_class33);
 $l34 = ((($model)) + 100|0);
 $11 = load4($l34);
 store4($vararg_buffer13,$10);
 (_fprintf($call,3334,$vararg_buffer13)|0);
 store4($vararg_buffer16,$11);
 (_fprintf($call,3347,$vararg_buffer16)|0);
 (_fwrite(3360,3,1,$call)|0);
 $sub = (($10) + -1)|0;
 $mul = Math_imul($sub, $10)|0;
 $div = (($mul|0) / 2)&-1;
 $cmp38131 = ($mul|0)>(1);
 if ($cmp38131) {
  $rho = ((($model)) + 112|0);
  $i$0132 = 0;
  while(1) {
   $13 = load4($rho);
   $arrayidx39 = (($13) + ($i$0132<<3)|0);
   $14 = loadd($arrayidx39);
   stored($vararg_buffer19,$14);
   (_fprintf($call,3364,$vararg_buffer19)|0);
   $inc = (($i$0132) + 1)|0;
   $cmp38 = ($inc|0)<($div|0);
   if ($cmp38) {
    $i$0132 = $inc;
   } else {
    break;
   }
  }
 }
 (_fputc(10,$call)|0);
 $label = ((($model)) + 128|0);
 $12 = load4($label);
 $tobool42 = ($12|0)==(0|0);
 if (!($tobool42)) {
  (_fwrite(3368,5,1,$call)|0);
  $cmp47129 = ($10|0)>(0);
  if ($cmp47129) {
   $i45$0130 = 0;
   while(1) {
    $15 = load4($label);
    $arrayidx51 = (($15) + ($i45$0130<<2)|0);
    $16 = load4($arrayidx51);
    store4($vararg_buffer22,$16);
    (_fprintf($call,3374,$vararg_buffer22)|0);
    $inc54 = (($i45$0130) + 1)|0;
    $exitcond138 = ($inc54|0)==($10|0);
    if ($exitcond138) {
     break;
    } else {
     $i45$0130 = $inc54;
    }
   }
  }
  (_fputc(10,$call)|0);
 }
 $probA = ((($model)) + 116|0);
 $17 = load4($probA);
 $tobool58 = ($17|0)==(0|0);
 if (!($tobool58)) {
  (_fwrite(3378,5,1,$call)|0);
  if ($cmp38131) {
   $i61$0128 = 0;
   while(1) {
    $18 = load4($probA);
    $arrayidx70 = (($18) + ($i61$0128<<3)|0);
    $19 = loadd($arrayidx70);
    stored($vararg_buffer25,$19);
    (_fprintf($call,3364,$vararg_buffer25)|0);
    $inc73 = (($i61$0128) + 1)|0;
    $cmp66 = ($inc73|0)<($div|0);
    if ($cmp66) {
     $i61$0128 = $inc73;
    } else {
     break;
    }
   }
  }
  (_fputc(10,$call)|0);
 }
 $probB = ((($model)) + 120|0);
 $20 = load4($probB);
 $tobool77 = ($20|0)==(0|0);
 if (!($tobool77)) {
  (_fwrite(3384,5,1,$call)|0);
  if ($cmp38131) {
   $i80$0126 = 0;
   while(1) {
    $21 = load4($probB);
    $arrayidx89 = (($21) + ($i80$0126<<3)|0);
    $22 = loadd($arrayidx89);
    stored($vararg_buffer28,$22);
    (_fprintf($call,3364,$vararg_buffer28)|0);
    $inc92 = (($i80$0126) + 1)|0;
    $cmp85 = ($inc92|0)<($div|0);
    if ($cmp85) {
     $i80$0126 = $inc92;
    } else {
     break;
    }
   }
  }
  (_fputc(10,$call)|0);
 }
 $nSV = ((($model)) + 132|0);
 $23 = load4($nSV);
 $tobool96 = ($23|0)==(0|0);
 if (!($tobool96)) {
  (_fwrite(3390,5,1,$call)|0);
  $cmp101123 = ($10|0)>(0);
  if ($cmp101123) {
   $i99$0124 = 0;
   while(1) {
    $24 = load4($nSV);
    $arrayidx105 = (($24) + ($i99$0124<<2)|0);
    $25 = load4($arrayidx105);
    store4($vararg_buffer31,$25);
    (_fprintf($call,3374,$vararg_buffer31)|0);
    $inc108 = (($i99$0124) + 1)|0;
    $exitcond137 = ($inc108|0)==($10|0);
    if ($exitcond137) {
     break;
    } else {
     $i99$0124 = $inc108;
    }
   }
  }
  (_fputc(10,$call)|0);
 }
 (_fwrite(3396,3,1,$call)|0);
 $sv_coef113 = ((($model)) + 108|0);
 $26 = load4($sv_coef113);
 $SV114 = ((($model)) + 104|0);
 $27 = load4($SV114);
 $cmp117121 = ($11|0)>(0);
 L49: do {
  if ($cmp117121) {
   $cmp122116 = ($10|0)>(1);
   if ($cmp122116) {
    $i115$0122$us = 0;
   } else {
    $i115$0122 = 0;
    while(1) {
     $arrayidx131 = (($27) + ($i115$0122<<2)|0);
     $37 = load4($arrayidx131);
     $38 = load4($kernel_type);
     $cmp133 = ($38|0)==(4);
     if ($cmp133) {
      $value = ((($37)) + 8|0);
      $40 = loadd($value);
      $conv = (~~(($40)));
      store4($vararg_buffer44,$conv);
      (_fprintf($call,3409,$vararg_buffer44)|0);
     } else {
      $39 = load4($37);
      $cmp136119 = ($39|0)==(-1);
      if (!($cmp136119)) {
       $42 = $39;$p$0120 = $37;
       while(1) {
        $value138 = ((($p$0120)) + 8|0);
        $41 = loadd($value138);
        store4($vararg_buffer47,$42);
        $vararg_ptr50 = ((($vararg_buffer47)) + 8|0);
        stored($vararg_ptr50,$41);
        (_fprintf($call,3400,$vararg_buffer47)|0);
        $incdec$ptr = ((($p$0120)) + 16|0);
        $43 = load4($incdec$ptr);
        $cmp136 = ($43|0)==(-1);
        if ($cmp136) {
         break;
        } else {
         $42 = $43;$p$0120 = $incdec$ptr;
        }
       }
      }
     }
     (_fputc(10,$call)|0);
     $inc143 = (($i115$0122) + 1)|0;
     $exitcond136 = ($inc143|0)==($11|0);
     if ($exitcond136) {
      break L49;
     } else {
      $i115$0122 = $inc143;
     }
    }
   }
   while(1) {
    $j$0117$us = 0;
    while(1) {
     $arrayidx125$us = (($26) + ($j$0117$us<<2)|0);
     $33 = load4($arrayidx125$us);
     $arrayidx126$us = (($33) + ($i115$0122$us<<3)|0);
     $34 = loadd($arrayidx126$us);
     stored($vararg_buffer41,$34);
     (_fprintf($call,3415,$vararg_buffer41)|0);
     $inc129$us = (($j$0117$us) + 1)|0;
     $exitcond = ($inc129$us|0)==($sub|0);
     if ($exitcond) {
      break;
     } else {
      $j$0117$us = $inc129$us;
     }
    }
    $arrayidx131$us = (($27) + ($i115$0122$us<<2)|0);
    $31 = load4($arrayidx131$us);
    $36 = load4($kernel_type);
    $cmp133$us = ($36|0)==(4);
    if ($cmp133$us) {
     $value$us = ((($31)) + 8|0);
     $32 = loadd($value$us);
     $conv$us = (~~(($32)));
     store4($vararg_buffer38,$conv$us);
     (_fprintf($call,3409,$vararg_buffer38)|0);
    } else {
     $35 = load4($31);
     $cmp136119$us = ($35|0)==(-1);
     if (!($cmp136119$us)) {
      $29 = $35;$p$0120$us = $31;
      while(1) {
       $value138$us = ((($p$0120$us)) + 8|0);
       $28 = loadd($value138$us);
       store4($vararg_buffer34,$29);
       $vararg_ptr37 = ((($vararg_buffer34)) + 8|0);
       stored($vararg_ptr37,$28);
       (_fprintf($call,3400,$vararg_buffer34)|0);
       $incdec$ptr$us = ((($p$0120$us)) + 16|0);
       $30 = load4($incdec$ptr$us);
       $cmp136$us = ($30|0)==(-1);
       if ($cmp136$us) {
        break;
       } else {
        $29 = $30;$p$0120$us = $incdec$ptr$us;
       }
      }
     }
    }
    (_fputc(10,$call)|0);
    $inc143$us = (($i115$0122$us) + 1)|0;
    $exitcond135 = ($inc143$us|0)==($11|0);
    if ($exitcond135) {
     break;
    } else {
     $i115$0122$us = $inc143$us;
    }
   }
  }
 } while(0);
 (_setlocale(6,$old_locale$0)|0);
 _free($old_locale$0);
 $call146 = (_ferror($call)|0);
 $cmp147 = ($call146|0)==(0);
 if ($cmp147) {
  $call149 = (_fclose($call)|0);
  $not$cmp150 = ($call149|0)!=(0);
  $$ = $not$cmp150 << 31 >> 31;
  STACKTOP = sp;return ($$|0);
 } else {
  STACKTOP = sp;return -1;
 }
 return (0)|0;
}
function __Z17read_model_headerP8_IO_FILEP9svm_model($fp,$model) {
 $fp = $fp|0;
 $model = $model|0;
 var $$pre = 0, $$pre144 = 0, $$pre145 = 0, $$pre146 = 0, $$pre147 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $arrayidx134 = 0, $arrayidx165 = 0, $arrayidx200 = 0, $arrayidx235 = 0, $arrayidx266 = 0, $call = 0, $call101 = 0;
 var $call109 = 0, $call113 = 0, $call121 = 0, $call127 = 0, $call130 = 0, $call135 = 0, $call135185 = 0, $call151 = 0, $call157 = 0, $call16 = 0, $call16$1 = 0, $call16$2 = 0, $call16$3 = 0, $call16$4 = 0, $call166 = 0, $call166181 = 0, $call182 = 0, $call192 = 0, $call201 = 0, $call201177 = 0;
 var $call217 = 0, $call227 = 0, $call236 = 0, $call236173 = 0, $call252 = 0, $call258 = 0, $call26 = 0, $call267 = 0, $call267169 = 0, $call283 = 0, $call288 = 0, $call3 = 0, $call31 = 0, $call44 = 0, $call44$1 = 0, $call44$2 = 0, $call44$3 = 0, $call44$4 = 0, $call61 = 0, $call65 = 0;
 var $call73 = 0, $call77 = 0, $call8 = 0, $call85 = 0, $call89 = 0, $call97 = 0, $cmd = 0, $cmp = 0, $cmp102 = 0, $cmp110 = 0, $cmp114 = 0, $cmp122 = 0, $cmp130 = 0, $cmp130126 = 0, $cmp131 = 0, $cmp136 = 0, $cmp136186 = 0, $cmp152 = 0, $cmp160 = 0, $cmp160124 = 0;
 var $cmp167 = 0, $cmp167182 = 0, $cmp17 = 0, $cmp17$1 = 0, $cmp17$2 = 0, $cmp17$3 = 0, $cmp17$4 = 0, $cmp183 = 0, $cmp195 = 0, $cmp195122 = 0, $cmp202 = 0, $cmp202178 = 0, $cmp218 = 0, $cmp230 = 0, $cmp230120 = 0, $cmp237 = 0, $cmp237174 = 0, $cmp253 = 0, $cmp261 = 0, $cmp261118 = 0;
 var $cmp268 = 0, $cmp268170 = 0, $cmp27 = 0, $cmp284 = 0, $cmp32 = 0, $cmp4 = 0, $cmp45 = 0, $cmp45$1 = 0, $cmp45$2 = 0, $cmp45$3 = 0, $cmp45$4 = 0, $cmp62 = 0, $cmp66 = 0, $cmp74 = 0, $cmp78 = 0, $cmp86 = 0, $cmp9 = 0, $cmp90 = 0, $cmp98 = 0, $coef0 = 0;
 var $degree = 0, $div = 0, $div190 = 0, $div225 = 0, $gamma = 0, $i$0129$lcssa = 0, $i37$0128$lcssa = 0, $inc142 = 0, $inc142187 = 0, $inc173 = 0, $inc173183 = 0, $inc208 = 0, $inc208179 = 0, $inc243 = 0, $inc243175 = 0, $inc274 = 0, $inc274171 = 0, $kernel_type = 0, $l = 0, $label = 0;
 var $mul = 0, $mul126 = 0, $mul156 = 0, $mul189 = 0, $mul191 = 0, $mul224 = 0, $mul226 = 0, $mul257 = 0, $nSV = 0, $nr_class = 0, $nr_weight = 0, $probA = 0, $probB = 0, $retval$8 = 0, $rho = 0, $sub = 0, $sub188 = 0, $sub223 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0;
 var $vararg_buffer10 = 0, $vararg_buffer13 = 0, $vararg_buffer16 = 0, $vararg_buffer19 = 0, $vararg_buffer22 = 0, $vararg_buffer25 = 0, $vararg_buffer28 = 0, $vararg_buffer31 = 0, $vararg_buffer34 = 0, $vararg_buffer37 = 0, $vararg_buffer4 = 0, $vararg_buffer40 = 0, $vararg_buffer43 = 0, $vararg_buffer46 = 0, $vararg_buffer49 = 0, $vararg_buffer52 = 0, $vararg_buffer55 = 0, $vararg_buffer7 = 0, $weight = 0, $weight_label = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0;
 $vararg_buffer55 = sp + 152|0;
 $vararg_buffer52 = sp + 144|0;
 $vararg_buffer49 = sp + 136|0;
 $vararg_buffer46 = sp + 128|0;
 $vararg_buffer43 = sp + 120|0;
 $vararg_buffer40 = sp + 112|0;
 $vararg_buffer37 = sp + 104|0;
 $vararg_buffer34 = sp + 96|0;
 $vararg_buffer31 = sp + 88|0;
 $vararg_buffer28 = sp + 80|0;
 $vararg_buffer25 = sp + 72|0;
 $vararg_buffer22 = sp + 64|0;
 $vararg_buffer19 = sp + 56|0;
 $vararg_buffer16 = sp + 48|0;
 $vararg_buffer13 = sp + 40|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer4 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $cmd = sp + 156|0;
 $nr_weight = ((($model)) + 56|0);
 store4($nr_weight,0);
 $weight_label = ((($model)) + 60|0);
 store4($weight_label,0);
 $weight = ((($model)) + 64|0);
 store4($weight,0);
 store4($vararg_buffer,$cmd);
 $call130 = (_fscanf($fp,3506,$vararg_buffer)|0);
 $cmp131 = ($call130|0)==(1);
 if (!($cmp131)) {
  $retval$8 = 0;
  STACKTOP = sp;return ($retval$8|0);
 }
 $kernel_type = ((($model)) + 4|0);
 $degree = ((($model)) + 8|0);
 $gamma = ((($model)) + 16|0);
 $coef0 = ((($model)) + 24|0);
 $nr_class = ((($model)) + 96|0);
 $l = ((($model)) + 100|0);
 $rho = ((($model)) + 112|0);
 $label = ((($model)) + 128|0);
 $probA = ((($model)) + 116|0);
 $probB = ((($model)) + 120|0);
 $nSV = ((($model)) + 132|0);
 L4: while(1) {
  $call3 = (_strcmp($cmd,3511)|0);
  $cmp4 = ($call3|0)==(0);
  L6: do {
   if ($cmp4) {
    store4($vararg_buffer1,$cmd);
    $call8 = (_fscanf($fp,3506,$vararg_buffer1)|0);
    $cmp9 = ($call8|0)==(1);
    if (!($cmp9)) {
     $retval$8 = 0;
     label = 52;
     break L4;
    }
    $call16 = (_strcmp(3464,$cmd)|0);
    $cmp17 = ($call16|0)==(0);
    if ($cmp17) {
     $i$0129$lcssa = 0;
    } else {
     $call16$1 = (_strcmp(3470,$cmd)|0);
     $cmp17$1 = ($call16$1|0)==(0);
     if ($cmp17$1) {
      $i$0129$lcssa = 1;
     } else {
      $call16$2 = (_strcmp(3477,$cmd)|0);
      $cmp17$2 = ($call16$2|0)==(0);
      if ($cmp17$2) {
       $i$0129$lcssa = 2;
      } else {
       $call16$3 = (_strcmp(3487,$cmd)|0);
       $cmp17$3 = ($call16$3|0)==(0);
       if ($cmp17$3) {
        $i$0129$lcssa = 3;
       } else {
        $call16$4 = (_strcmp(3499,$cmd)|0);
        $cmp17$4 = ($call16$4|0)==(0);
        if ($cmp17$4) {
         $i$0129$lcssa = 4;
        } else {
         label = 60;
         break L4;
        }
       }
      }
     }
    }
    store4($model,$i$0129$lcssa);
   } else {
    $call26 = (_strcmp($cmd,3520)|0);
    $cmp27 = ($call26|0)==(0);
    if ($cmp27) {
     store4($vararg_buffer4,$cmd);
     $call31 = (_fscanf($fp,3506,$vararg_buffer4)|0);
     $cmp32 = ($call31|0)==(1);
     if (!($cmp32)) {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
     $call44 = (_strcmp(3422,$cmd)|0);
     $cmp45 = ($call44|0)==(0);
     if ($cmp45) {
      $i37$0128$lcssa = 0;
     } else {
      $call44$1 = (_strcmp(3429,$cmd)|0);
      $cmp45$1 = ($call44$1|0)==(0);
      if ($cmp45$1) {
       $i37$0128$lcssa = 1;
      } else {
       $call44$2 = (_strcmp(3440,$cmd)|0);
       $cmp45$2 = ($call44$2|0)==(0);
       if ($cmp45$2) {
        $i37$0128$lcssa = 2;
       } else {
        $call44$3 = (_strcmp(3444,$cmd)|0);
        $cmp45$3 = ($call44$3|0)==(0);
        if ($cmp45$3) {
         $i37$0128$lcssa = 3;
        } else {
         $call44$4 = (_strcmp(3452,$cmd)|0);
         $cmp45$4 = ($call44$4|0)==(0);
         if ($cmp45$4) {
          $i37$0128$lcssa = 4;
         } else {
          label = 56;
          break L4;
         }
        }
       }
      }
     }
     store4($kernel_type,$i37$0128$lcssa);
     break;
    }
    $call61 = (_strcmp($cmd,3532)|0);
    $cmp62 = ($call61|0)==(0);
    if ($cmp62) {
     store4($vararg_buffer7,$degree);
     $call65 = (_fscanf($fp,3539,$vararg_buffer7)|0);
     $cmp66 = ($call65|0)==(1);
     if ($cmp66) {
      break;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
    }
    $call73 = (_strcmp($cmd,3542)|0);
    $cmp74 = ($call73|0)==(0);
    if ($cmp74) {
     store4($vararg_buffer10,$gamma);
     $call77 = (_fscanf($fp,3548,$vararg_buffer10)|0);
     $cmp78 = ($call77|0)==(1);
     if ($cmp78) {
      break;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
    }
    $call85 = (_strcmp($cmd,3552)|0);
    $cmp86 = ($call85|0)==(0);
    if ($cmp86) {
     store4($vararg_buffer13,$coef0);
     $call89 = (_fscanf($fp,3548,$vararg_buffer13)|0);
     $cmp90 = ($call89|0)==(1);
     if ($cmp90) {
      break;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
    }
    $call97 = (_strcmp($cmd,3558)|0);
    $cmp98 = ($call97|0)==(0);
    if ($cmp98) {
     store4($vararg_buffer16,$nr_class);
     $call101 = (_fscanf($fp,3539,$vararg_buffer16)|0);
     $cmp102 = ($call101|0)==(1);
     if ($cmp102) {
      break;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
    }
    $call109 = (_strcmp($cmd,3567)|0);
    $cmp110 = ($call109|0)==(0);
    if ($cmp110) {
     store4($vararg_buffer19,$l);
     $call113 = (_fscanf($fp,3539,$vararg_buffer19)|0);
     $cmp114 = ($call113|0)==(1);
     if ($cmp114) {
      break;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
    }
    $call121 = (_strcmp($cmd,3360)|0);
    $cmp122 = ($call121|0)==(0);
    if ($cmp122) {
     $0 = load4($nr_class);
     $sub = (($0) + -1)|0;
     $mul = Math_imul($sub, $0)|0;
     $div = (($mul|0) / 2)&-1;
     $mul126 = $div << 3;
     $call127 = (_malloc($mul126)|0);
     store4($rho,$call127);
     $cmp130126 = ($mul|0)>(1);
     if (!($cmp130126)) {
      break;
     }
     store4($vararg_buffer25,$call127);
     $call135185 = (_fscanf($fp,3548,$vararg_buffer25)|0);
     $cmp136186 = ($call135185|0)==(1);
     if ($cmp136186) {
      $inc142187 = 1;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
     while(1) {
      $cmp130 = ($inc142187|0)<($div|0);
      if (!($cmp130)) {
       break L6;
      }
      $$pre147 = load4($rho);
      $arrayidx134 = (($$pre147) + ($inc142187<<3)|0);
      store4($vararg_buffer28,$arrayidx134);
      $call135 = (_fscanf($fp,3548,$vararg_buffer28)|0);
      $cmp136 = ($call135|0)==(1);
      $inc142 = (($inc142187) + 1)|0;
      if ($cmp136) {
       $inc142187 = $inc142;
      } else {
       $retval$8 = 0;
       label = 52;
       break L4;
      }
     }
    }
    $call151 = (_strcmp($cmd,3368)|0);
    $cmp152 = ($call151|0)==(0);
    if ($cmp152) {
     $1 = load4($nr_class);
     $mul156 = $1 << 2;
     $call157 = (_malloc($mul156)|0);
     store4($label,$call157);
     $cmp160124 = ($1|0)>(0);
     if (!($cmp160124)) {
      break;
     }
     store4($vararg_buffer31,$call157);
     $call166181 = (_fscanf($fp,3539,$vararg_buffer31)|0);
     $cmp167182 = ($call166181|0)==(1);
     if ($cmp167182) {
      $inc173183 = 1;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
     while(1) {
      $cmp160 = ($inc173183|0)<($1|0);
      if (!($cmp160)) {
       break L6;
      }
      $$pre146 = load4($label);
      $arrayidx165 = (($$pre146) + ($inc173183<<2)|0);
      store4($vararg_buffer34,$arrayidx165);
      $call166 = (_fscanf($fp,3539,$vararg_buffer34)|0);
      $cmp167 = ($call166|0)==(1);
      $inc173 = (($inc173183) + 1)|0;
      if ($cmp167) {
       $inc173183 = $inc173;
      } else {
       $retval$8 = 0;
       label = 52;
       break L4;
      }
     }
    }
    $call182 = (_strcmp($cmd,3378)|0);
    $cmp183 = ($call182|0)==(0);
    if ($cmp183) {
     $2 = load4($nr_class);
     $sub188 = (($2) + -1)|0;
     $mul189 = Math_imul($sub188, $2)|0;
     $div190 = (($mul189|0) / 2)&-1;
     $mul191 = $div190 << 3;
     $call192 = (_malloc($mul191)|0);
     store4($probA,$call192);
     $cmp195122 = ($mul189|0)>(1);
     if (!($cmp195122)) {
      break;
     }
     store4($vararg_buffer37,$call192);
     $call201177 = (_fscanf($fp,3548,$vararg_buffer37)|0);
     $cmp202178 = ($call201177|0)==(1);
     if ($cmp202178) {
      $inc208179 = 1;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
     while(1) {
      $cmp195 = ($inc208179|0)<($div190|0);
      if (!($cmp195)) {
       break L6;
      }
      $$pre145 = load4($probA);
      $arrayidx200 = (($$pre145) + ($inc208179<<3)|0);
      store4($vararg_buffer40,$arrayidx200);
      $call201 = (_fscanf($fp,3548,$vararg_buffer40)|0);
      $cmp202 = ($call201|0)==(1);
      $inc208 = (($inc208179) + 1)|0;
      if ($cmp202) {
       $inc208179 = $inc208;
      } else {
       $retval$8 = 0;
       label = 52;
       break L4;
      }
     }
    }
    $call217 = (_strcmp($cmd,3384)|0);
    $cmp218 = ($call217|0)==(0);
    if ($cmp218) {
     $3 = load4($nr_class);
     $sub223 = (($3) + -1)|0;
     $mul224 = Math_imul($sub223, $3)|0;
     $div225 = (($mul224|0) / 2)&-1;
     $mul226 = $div225 << 3;
     $call227 = (_malloc($mul226)|0);
     store4($probB,$call227);
     $cmp230120 = ($mul224|0)>(1);
     if (!($cmp230120)) {
      break;
     }
     store4($vararg_buffer43,$call227);
     $call236173 = (_fscanf($fp,3548,$vararg_buffer43)|0);
     $cmp237174 = ($call236173|0)==(1);
     if ($cmp237174) {
      $inc243175 = 1;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
     while(1) {
      $cmp230 = ($inc243175|0)<($div225|0);
      if (!($cmp230)) {
       break L6;
      }
      $$pre144 = load4($probB);
      $arrayidx235 = (($$pre144) + ($inc243175<<3)|0);
      store4($vararg_buffer46,$arrayidx235);
      $call236 = (_fscanf($fp,3548,$vararg_buffer46)|0);
      $cmp237 = ($call236|0)==(1);
      $inc243 = (($inc243175) + 1)|0;
      if ($cmp237) {
       $inc243175 = $inc243;
      } else {
       $retval$8 = 0;
       label = 52;
       break L4;
      }
     }
    }
    $call252 = (_strcmp($cmd,3390)|0);
    $cmp253 = ($call252|0)==(0);
    if (!($cmp253)) {
     label = 49;
     break L4;
    }
    $4 = load4($nr_class);
    $mul257 = $4 << 2;
    $call258 = (_malloc($mul257)|0);
    store4($nSV,$call258);
    $cmp261118 = ($4|0)>(0);
    if ($cmp261118) {
     store4($vararg_buffer49,$call258);
     $call267169 = (_fscanf($fp,3539,$vararg_buffer49)|0);
     $cmp268170 = ($call267169|0)==(1);
     if ($cmp268170) {
      $inc274171 = 1;
     } else {
      $retval$8 = 0;
      label = 52;
      break L4;
     }
     while(1) {
      $cmp261 = ($inc274171|0)<($4|0);
      if (!($cmp261)) {
       break L6;
      }
      $$pre = load4($nSV);
      $arrayidx266 = (($$pre) + ($inc274171<<2)|0);
      store4($vararg_buffer52,$arrayidx266);
      $call267 = (_fscanf($fp,3539,$vararg_buffer52)|0);
      $cmp268 = ($call267|0)==(1);
      $inc274 = (($inc274171) + 1)|0;
      if ($cmp268) {
       $inc274171 = $inc274;
      } else {
       $retval$8 = 0;
       label = 52;
       break L4;
      }
     }
    }
   }
  } while(0);
  store4($vararg_buffer22,$cmd);
  $call = (_fscanf($fp,3506,$vararg_buffer22)|0);
  $cmp = ($call|0)==(1);
  if (!($cmp)) {
   $retval$8 = 0;
   label = 52;
   break;
  }
 }
 if ((label|0) == 49) {
  $call283 = (_strcmp($cmd,3576)|0);
  $cmp284 = ($call283|0)==(0);
  if ($cmp284) {
   L96: while(1) {
    $call288 = (_getc($fp)|0);
    switch ($call288|0) {
    case 10: case -1:  {
     $retval$8 = 1;
     break L96;
     break;
    }
    default: {
    }
    }
   }
   STACKTOP = sp;return ($retval$8|0);
  } else {
   $5 = load4(1452);
   store4($vararg_buffer55,$cmd);
   (_fprintf($5,3579,$vararg_buffer55)|0);
   $retval$8 = 0;
   STACKTOP = sp;return ($retval$8|0);
  }
 }
 else if ((label|0) == 52) {
  STACKTOP = sp;return ($retval$8|0);
 }
 else if ((label|0) == 56) {
  $6 = load4(1452);
  (_fwrite(3613,25,1,$6)|0);
  $retval$8 = 0;
  STACKTOP = sp;return ($retval$8|0);
 }
 else if ((label|0) == 60) {
  $7 = load4(1452);
  (_fwrite(3639,18,1,$7)|0);
  $retval$8 = 0;
  STACKTOP = sp;return ($retval$8|0);
 }
 return (0)|0;
}
function _svm_load_model($model_file_name) {
 $model_file_name = $model_file_name|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $SV = 0, $add = 0, $arrayidx = 0, $arrayidx48 = 0, $arrayidx48$us = 0, $arrayidx50 = 0, $arrayidx50$us = 0, $arrayidx55 = 0, $arrayidx55$us = 0, $arrayidx62$us = 0, $arrayidx63$us = 0, $call = 0, $call1 = 0, $call15 = 0, $call16 = 0, $call17 = 0, $call1786 = 0, $call22 = 0, $call3 = 0, $call31 = 0;
 var $call34 = 0, $call3497 = 0, $call38 = 0, $call42 = 0, $call51 = 0, $call51$us = 0, $call52 = 0.0, $call52$us = 0.0, $call59$us = 0, $call6 = 0, $call60$us = 0.0, $call69 = 0, $call69$us = 0, $call6975 = 0, $call6975$us = 0, $call6979 = 0, $call6979$us = 0, $call7 = 0, $call70 = 0, $call70$us = 0;
 var $call7076 = 0, $call7076$us = 0, $call7080 = 0, $call7080$us = 0, $call74 = 0, $call74$us = 0, $call76 = 0.0, $call76$us = 0.0, $call87 = 0, $call89 = 0, $cmp = 0, $cmp18 = 0, $cmp1887 = 0, $cmp23 = 0, $cmp3284 = 0, $cmp39 = 0, $cmp5773 = 0, $cmp71 = 0, $cmp71$us = 0, $cmp7177 = 0;
 var $cmp7177$us = 0, $cmp88 = 0, $cmp90 = 0, $elements$0$lcssa = 0, $elements$088 = 0, $elements$1 = 0, $endptr = 0, $exitcond = 0, $exitcond91 = 0, $exitcond92 = 0, $exitcond93 = 0, $exitcond9398 = 0, $free_sv = 0, $i$182 = 0, $i$182$us = 0, $inc = 0, $inc36 = 0, $inc3699 = 0, $inc65$us = 0, $inc78 = 0;
 var $inc78$us = 0, $inc80 = 0, $inc80$us = 0, $inc84 = 0, $inc84$us = 0, $index = 0, $index$us = 0, $index82 = 0, $index82$us = 0, $j$083 = 0, $j$083$us = 0, $j$1$lcssa = 0, $j$1$lcssa$us = 0, $j$178 = 0, $j$178$us = 0, $k$074$us = 0, $l = 0, $label = 0, $mul30 = 0, $mul33 = 0;
 var $mul37 = 0, $mul41 = 0, $nSV = 0, $nr_class = 0, $old_locale$0 = 0, $retval$0 = 0, $retval$2 = 0, $rho = 0, $sub = 0, $sv_coef = 0, $tobool = 0, $value = 0, $value$us = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $endptr = sp;
 $call = (_fopen($model_file_name,3658)|0);
 $cmp = ($call|0)==(0|0);
 if ($cmp) {
  $retval$2 = 0;
  STACKTOP = sp;return ($retval$2|0);
 }
 $call1 = (_setlocale(6,0)|0);
 $tobool = ($call1|0)==(0|0);
 if ($tobool) {
  $old_locale$0 = 0;
 } else {
  $call3 = (___strdup($call1)|0);
  $old_locale$0 = $call3;
 }
 (_setlocale(6,6534)|0);
 $call6 = (_malloc(144)|0);
 $rho = ((($call6)) + 112|0);
 ; store8($rho,i64_const(0,0),8); store8($rho+8|0,i64_const(0,0),8); store8($rho+16|0,i64_const(0,0),8);
 $call7 = (__Z17read_model_headerP8_IO_FILEP9svm_model($call,$call6)|0);
 if (!($call7)) {
  $nSV = ((($call6)) + 132|0);
  $label = ((($call6)) + 128|0);
  $0 = load4(1452);
  (_fwrite(3661,35,1,$0)|0);
  (_setlocale(6,$old_locale$0)|0);
  _free($old_locale$0);
  $1 = load4($rho);
  _free($1);
  $2 = load4($label);
  _free($2);
  $3 = load4($nSV);
  _free($3);
  _free($call6);
  $retval$2 = 0;
  STACKTOP = sp;return ($retval$2|0);
 }
 $call15 = (_ftell($call)|0);
 store4(7088,1024);
 $call16 = (_malloc(1024)|0);
 store4(7092,$call16);
 $call1786 = (__ZL8readlineP8_IO_FILE($call)|0);
 $cmp1887 = ($call1786|0)==(0|0);
 if ($cmp1887) {
  $elements$0$lcssa = 0;
 } else {
  $elements$088 = 0;
  while(1) {
   $4 = load4(7092);
   (_strtok($4,3697)|0);
   $elements$1 = $elements$088;
   while(1) {
    $call22 = (_strtok(0,3697)|0);
    $cmp23 = ($call22|0)==(0|0);
    $inc = (($elements$1) + 1)|0;
    if ($cmp23) {
     break;
    } else {
     $elements$1 = $inc;
    }
   }
   $call17 = (__ZL8readlineP8_IO_FILE($call)|0);
   $cmp18 = ($call17|0)==(0|0);
   if ($cmp18) {
    $elements$0$lcssa = $elements$1;
    break;
   } else {
    $elements$088 = $elements$1;
   }
  }
 }
 $l = ((($call6)) + 100|0);
 $5 = load4($l);
 $add = (($5) + ($elements$0$lcssa))|0;
 (_fseek($call,$call15,0)|0);
 $nr_class = ((($call6)) + 96|0);
 $6 = load4($nr_class);
 $sub = (($6) + -1)|0;
 $7 = load4($l);
 $mul30 = $sub << 2;
 $call31 = (_malloc($mul30)|0);
 $sv_coef = ((($call6)) + 108|0);
 store4($sv_coef,$call31);
 $cmp3284 = ($6|0)>(1);
 if ($cmp3284) {
  $mul33 = $7 << 3;
  $call3497 = (_malloc($mul33)|0);
  store4($call31,$call3497);
  $exitcond9398 = ($sub|0)==(1);
  if (!($exitcond9398)) {
   $inc3699 = 1;
   while(1) {
    $$pre = load4($sv_coef);
    $call34 = (_malloc($mul33)|0);
    $arrayidx = (($$pre) + ($inc3699<<2)|0);
    store4($arrayidx,$call34);
    $inc36 = (($inc3699) + 1)|0;
    $exitcond93 = ($inc36|0)==($sub|0);
    if ($exitcond93) {
     break;
    } else {
     $inc3699 = $inc36;
    }
   }
  }
 }
 $mul37 = $7 << 2;
 $call38 = (_malloc($mul37)|0);
 $SV = ((($call6)) + 104|0);
 store4($SV,$call38);
 $cmp39 = ($7|0)>(0);
 L23: do {
  if ($cmp39) {
   $mul41 = $add << 4;
   $call42 = (_malloc($mul41)|0);
   $cmp5773 = ($sub|0)>(1);
   if ($cmp5773) {
    $i$182$us = 0;$j$083$us = 0;
   } else {
    $i$182 = 0;$j$083 = 0;
    while(1) {
     (__ZL8readlineP8_IO_FILE($call)|0);
     $arrayidx48 = (($call42) + ($j$083<<4)|0);
     $14 = load4($SV);
     $arrayidx50 = (($14) + ($i$182<<2)|0);
     store4($arrayidx50,$arrayidx48);
     $15 = load4(7092);
     $call51 = (_strtok($15,3699)|0);
     $call52 = (+_strtod($call51,$endptr));
     $16 = load4($sv_coef);
     $17 = load4($16);
     $arrayidx55 = (($17) + ($i$182<<3)|0);
     stored($arrayidx55,$call52);
     $call6975 = (_strtok(0,3697)|0);
     $call7076 = (_strtok(0,3699)|0);
     $cmp7177 = ($call7076|0)==(0|0);
     if ($cmp7177) {
      $j$1$lcssa = $j$083;
     } else {
      $call6979 = $call6975;$call7080 = $call7076;$j$178 = $j$083;
      while(1) {
       $call74 = (_strtol($call6979,$endptr,10)|0);
       $index = (($call42) + ($j$178<<4)|0);
       store4($index,$call74);
       $call76 = (+_strtod($call7080,$endptr));
       $value = (((($call42) + ($j$178<<4)|0)) + 8|0);
       stored($value,$call76);
       $inc78 = (($j$178) + 1)|0;
       $call69 = (_strtok(0,3697)|0);
       $call70 = (_strtok(0,3699)|0);
       $cmp71 = ($call70|0)==(0|0);
       if ($cmp71) {
        $j$1$lcssa = $inc78;
        break;
       } else {
        $call6979 = $call69;$call7080 = $call70;$j$178 = $inc78;
       }
      }
     }
     $inc80 = (($j$1$lcssa) + 1)|0;
     $index82 = (($call42) + ($j$1$lcssa<<4)|0);
     store4($index82,-1);
     $inc84 = (($i$182) + 1)|0;
     $exitcond92 = ($inc84|0)==($7|0);
     if ($exitcond92) {
      break L23;
     } else {
      $i$182 = $inc84;$j$083 = $inc80;
     }
    }
   }
   while(1) {
    (__ZL8readlineP8_IO_FILE($call)|0);
    $arrayidx48$us = (($call42) + ($j$083$us<<4)|0);
    $8 = load4($SV);
    $arrayidx50$us = (($8) + ($i$182$us<<2)|0);
    store4($arrayidx50$us,$arrayidx48$us);
    $9 = load4(7092);
    $call51$us = (_strtok($9,3699)|0);
    $call52$us = (+_strtod($call51$us,$endptr));
    $10 = load4($sv_coef);
    $11 = load4($10);
    $arrayidx55$us = (($11) + ($i$182$us<<3)|0);
    stored($arrayidx55$us,$call52$us);
    $k$074$us = 1;
    while(1) {
     $call59$us = (_strtok(0,3699)|0);
     $call60$us = (+_strtod($call59$us,$endptr));
     $12 = load4($sv_coef);
     $arrayidx62$us = (($12) + ($k$074$us<<2)|0);
     $13 = load4($arrayidx62$us);
     $arrayidx63$us = (($13) + ($i$182$us<<3)|0);
     stored($arrayidx63$us,$call60$us);
     $inc65$us = (($k$074$us) + 1)|0;
     $exitcond = ($inc65$us|0)==($sub|0);
     if ($exitcond) {
      break;
     } else {
      $k$074$us = $inc65$us;
     }
    }
    $call6975$us = (_strtok(0,3697)|0);
    $call7076$us = (_strtok(0,3699)|0);
    $cmp7177$us = ($call7076$us|0)==(0|0);
    if ($cmp7177$us) {
     $j$1$lcssa$us = $j$083$us;
    } else {
     $call6979$us = $call6975$us;$call7080$us = $call7076$us;$j$178$us = $j$083$us;
     while(1) {
      $call74$us = (_strtol($call6979$us,$endptr,10)|0);
      $index$us = (($call42) + ($j$178$us<<4)|0);
      store4($index$us,$call74$us);
      $call76$us = (+_strtod($call7080$us,$endptr));
      $value$us = (((($call42) + ($j$178$us<<4)|0)) + 8|0);
      stored($value$us,$call76$us);
      $inc78$us = (($j$178$us) + 1)|0;
      $call69$us = (_strtok(0,3697)|0);
      $call70$us = (_strtok(0,3699)|0);
      $cmp71$us = ($call70$us|0)==(0|0);
      if ($cmp71$us) {
       $j$1$lcssa$us = $inc78$us;
       break;
      } else {
       $call6979$us = $call69$us;$call7080$us = $call70$us;$j$178$us = $inc78$us;
      }
     }
    }
    $inc80$us = (($j$1$lcssa$us) + 1)|0;
    $index82$us = (($call42) + ($j$1$lcssa$us<<4)|0);
    store4($index82$us,-1);
    $inc84$us = (($i$182$us) + 1)|0;
    $exitcond91 = ($inc84$us|0)==($7|0);
    if ($exitcond91) {
     break;
    } else {
     $i$182$us = $inc84$us;$j$083$us = $inc80$us;
    }
   }
  }
 } while(0);
 $18 = load4(7092);
 _free($18);
 (_setlocale(6,$old_locale$0)|0);
 _free($old_locale$0);
 $call87 = (_ferror($call)|0);
 $cmp88 = ($call87|0)==(0);
 if ($cmp88) {
  $call89 = (_fclose($call)|0);
  $cmp90 = ($call89|0)==(0);
  if ($cmp90) {
   $free_sv = ((($call6)) + 136|0);
   store4($free_sv,1);
   $retval$0 = $call6;
  } else {
   $retval$0 = 0;
  }
 } else {
  $retval$0 = 0;
 }
 $retval$2 = $retval$0;
 STACKTOP = sp;return ($retval$2|0);
}
function __ZL8readlineP8_IO_FILE($input) {
 $input = $input|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $add$ptr = 0, $call = 0, $call$i$i = 0, $call3 = 0, $call4 = 0, $call5 = 0, $cmp = 0, $cmp2 = 0, $cmp6 = 0, $mul = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(7092);
 $1 = load4(7088);
 $call = (_fgets($0,$1,$input)|0);
 $cmp = ($call|0)==(0|0);
 if ($cmp) {
  $retval$0 = 0;
  return ($retval$0|0);
 }
 while(1) {
  $2 = load4(7092);
  $call$i$i = (_strrchr($2,10)|0);
  $cmp2 = ($call$i$i|0)==(0|0);
  if (!($cmp2)) {
   $retval$0 = $2;
   label = 5;
   break;
  }
  $3 = load4(7088);
  $mul = $3 << 1;
  store4(7088,$mul);
  $call3 = (_realloc($2,$mul)|0);
  store4(7092,$call3);
  $call4 = (_strlen($call3)|0);
  $add$ptr = (($call3) + ($call4)|0);
  $4 = load4(7088);
  $sub = (($4) - ($call4))|0;
  $call5 = (_fgets($add$ptr,$sub,$input)|0);
  $cmp6 = ($call5|0)==(0|0);
  if ($cmp6) {
   break;
  }
 }
 if ((label|0) == 5) {
  return ($retval$0|0);
 }
 $$pre = load4(7092);
 $retval$0 = $$pre;
 return ($retval$0|0);
}
function _svm_destroy_param($param) {
 $param = $param|0;
 var $0 = 0, $1 = 0, $weight = 0, $weight_label = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $weight_label = ((($param)) + 60|0);
 $0 = load4($weight_label);
 _free($0);
 $weight = ((($param)) + 64|0);
 $1 = load4($weight);
 _free($1);
 return;
}
function _svm_set_print_string_function($print_func) {
 $print_func = $print_func|0;
 var $$sink = 0, $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($print_func|0)==(0|0);
 $$sink = $cmp ? 6 : $print_func;
 store4(1288,$$sink);
 return;
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $call2 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $call = (_dummy($0)|0);
 store4($vararg_buffer,$call);
 $call1 = (___syscall6(6,($vararg_buffer|0))|0);
 $call2 = (___syscall_ret($call1)|0);
 STACKTOP = sp;return ($call2|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr32 = 0, $buf8 = 0, $buf_size = 0, $call = 0, $call40 = 0;
 var $call7 = 0, $call741 = 0, $call746 = 0, $cmp = 0, $cmp12 = 0, $cmp17 = 0, $cmp24 = 0, $cmp42 = 0, $cnt$0 = 0, $dec = 0, $fd = 0, $incdec$ptr = 0, $iov$043 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0, $iov_len19 = 0, $iov_len23 = 0, $iov_len3 = 0, $iov_len36 = 0;
 var $iovcnt$045 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$044 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $sub28 = 0, $sub37 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend14 = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = load4($wbase);
 store4($iovs,$0);
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($1) - ($0))|0;
 store4($iov_len,$sub$ptr$sub);
 $iov_base2 = ((($iovs)) + 8|0);
 store4($iov_base2,$buf);
 $iov_len3 = ((($iovs)) + 12|0);
 store4($iov_len3,$len);
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd = ((($f)) + 60|0);
 $2 = load4($fd);
 $3 = $iovs;
 store4($vararg_buffer,$2);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$3);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,2);
 $call40 = (___syscall146(146,($vararg_buffer|0))|0);
 $call741 = (___syscall_ret($call40)|0);
 $cmp42 = ($add|0)==($call741|0);
 L1: do {
  if ($cmp42) {
   label = 3;
  } else {
   $call746 = $call741;$iov$043 = $iovs;$iovcnt$045 = 2;$rem$044 = $add;
   while(1) {
    $cmp12 = ($call746|0)<(0);
    if ($cmp12) {
     break;
    }
    $sub21 = (($rem$044) - ($call746))|0;
    $iov_len23 = ((($iov$043)) + 4|0);
    $8 = load4($iov_len23);
    $cmp24 = ($call746>>>0)>($8>>>0);
    $incdec$ptr = ((($iov$043)) + 8|0);
    $iov$1 = $cmp24 ? $incdec$ptr : $iov$043;
    $dec = $cmp24 << 31 >> 31;
    $iovcnt$1 = (($dec) + ($iovcnt$045))|0;
    $sub28 = $cmp24 ? $8 : 0;
    $cnt$0 = (($call746) - ($sub28))|0;
    $9 = load4($iov$1);
    $add$ptr32 = (($9) + ($cnt$0)|0);
    store4($iov$1,$add$ptr32);
    $iov_len36 = ((($iov$1)) + 4|0);
    $10 = load4($iov_len36);
    $sub37 = (($10) - ($cnt$0))|0;
    store4($iov_len36,$sub37);
    $11 = load4($fd);
    $12 = $iov$1;
    store4($vararg_buffer3,$11);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$12);
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    store4($vararg_ptr7,$iovcnt$1);
    $call = (___syscall146(146,($vararg_buffer3|0))|0);
    $call7 = (___syscall_ret($call)|0);
    $cmp = ($sub21|0)==($call7|0);
    if ($cmp) {
     label = 3;
     break L1;
    } else {
     $call746 = $call7;$iov$043 = $iov$1;$iovcnt$045 = $iovcnt$1;$rem$044 = $sub21;
    }
   }
   $wend14 = ((($f)) + 16|0);
   store4($wend14,0);
   store4($wbase,0);
   store4($wpos,0);
   $6 = load4($f);
   $or = $6 | 32;
   store4($f,$or);
   $cmp17 = ($iovcnt$045|0)==(2);
   if ($cmp17) {
    $retval$0 = 0;
   } else {
    $iov_len19 = ((($iov$043)) + 4|0);
    $7 = load4($iov_len19);
    $sub = (($len) - ($7))|0;
    $retval$0 = $sub;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $buf8 = ((($f)) + 44|0);
  $4 = load4($buf8);
  $buf_size = ((($f)) + 48|0);
  $5 = load4($buf_size);
  $add$ptr = (($4) + ($5)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  store4($wbase,$4);
  store4($wpos,$4);
  $retval$0 = $len;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 $1 = $ret;
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$1);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  store4($ret,-1);
  $2 = -1;
 } else {
  $$pre = load4($ret);
  $2 = $$pre;
 }
 STACKTOP = sp;return ($2|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $call = 0, $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  $call = (___errno_location()|0);
  store4($call,$sub);
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function ___errno_location() {
 var $call = 0, $errno_val = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___pthread_self_347()|0);
 $errno_val = ((($call)) + 64|0);
 return ($errno_val|0);
}
function ___pthread_self_347() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_pthread_self()|0);
 return ($call|0);
}
function _pthread_self() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (1580|0);
}
function _dummy($fd) {
 $fd = $fd|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return ($fd|0);
}
function ___stdio_read($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add$ptr = 0, $and = 0, $arrayidx21 = 0, $arrayinit$element = 0, $buf3 = 0, $buf_size = 0, $call = 0, $call6 = 0, $cmp = 0, $cmp8 = 0, $fd = 0;
 var $incdec$ptr = 0, $iov = 0, $iov_len = 0, $iov_len4 = 0, $lnot$ext = 0, $or = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $sub13 = 0, $sub20 = 0, $tobool = 0, $tobool17 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $iov = sp + 16|0;
 store4($iov,$buf);
 $iov_len = ((($iov)) + 4|0);
 $buf_size = ((($f)) + 48|0);
 $0 = load4($buf_size);
 $tobool = ($0|0)!=(0);
 $lnot$ext = $tobool&1;
 $sub = (($len) - ($lnot$ext))|0;
 store4($iov_len,$sub);
 $arrayinit$element = ((($iov)) + 8|0);
 $buf3 = ((($f)) + 44|0);
 $1 = load4($buf3);
 store4($arrayinit$element,$1);
 $iov_len4 = ((($iov)) + 12|0);
 store4($iov_len4,$0);
 $fd = ((($f)) + 60|0);
 $2 = load4($fd);
 $3 = $iov;
 store4($vararg_buffer,$2);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$3);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,2);
 $call = (___syscall145(145,($vararg_buffer|0))|0);
 $call6 = (___syscall_ret($call)|0);
 $cmp = ($call6|0)<(1);
 if ($cmp) {
  $and = $call6 & 48;
  $xor = $and ^ 16;
  $4 = load4($f);
  $or = $4 | $xor;
  store4($f,$or);
  $retval$0 = $call6;
 } else {
  $5 = load4($iov_len);
  $cmp8 = ($call6>>>0)>($5>>>0);
  if ($cmp8) {
   $sub13 = (($call6) - ($5))|0;
   $6 = load4($buf3);
   $rpos = ((($f)) + 4|0);
   store4($rpos,$6);
   $add$ptr = (($6) + ($sub13)|0);
   $rend = ((($f)) + 8|0);
   store4($rend,$add$ptr);
   $7 = load4($buf_size);
   $tobool17 = ($7|0)==(0);
   if ($tobool17) {
    $retval$0 = $len;
   } else {
    $incdec$ptr = ((($6)) + 1|0);
    store4($rpos,$incdec$ptr);
    $8 = load1($6);
    $sub20 = (($len) + -1)|0;
    $arrayidx21 = (($buf) + ($sub20)|0);
    store1($arrayidx21,$8);
    $retval$0 = $len;
   }
  } else {
   $retval$0 = $call6;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $2 = 0, $and = 0, $call = 0, $call3 = 0, $fd = 0, $lbf = 0, $tobool = 0, $tobool2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $write = 0, $wsz = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $wsz = sp + 16|0;
 $write = ((($f)) + 36|0);
 store4($write,6);
 $0 = load4($f);
 $and = $0 & 64;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $fd = ((($f)) + 60|0);
  $1 = load4($fd);
  $2 = $wsz;
  store4($vararg_buffer,$1);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,21523);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$2);
  $call = (___syscall54(54,($vararg_buffer|0))|0);
  $tobool2 = ($call|0)==(0);
  if (!($tobool2)) {
   $lbf = ((($f)) + 75|0);
   store1($lbf,-1);
  }
 }
 $call3 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($call3|0);
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (7096|0);
}
function _expm1($x) {
 $x = +$x;
 var $$ = 0.0, $$sink = 0.0, $0 = i64(), $1 = 0, $2 = 0.0, $3 = 0.0, $4 = 0, $5 = 0.0, $add = 0.0, $add101 = 0.0, $add107 = 0.0, $add109 = 0, $add119 = 0.0, $add144 = 0.0, $add146 = 0.0, $add38 = 0.0, $add6285 = 0.0, $add64 = 0.0, $add66 = 0.0, $add68 = 0.0;
 var $add70 = 0.0, $and11 = i64(), $c$0 = 0.0, $call10 = i64(), $cmp = 0, $cmp12 = 0, $cmp120 = 0, $cmp134 = 0, $cmp21 = 0, $cmp26 = 0, $cmp29 = 0, $cmp49 = 0, $cmp77 = 0, $cmp98 = 0, $conv = 0, $conv11079 = i64(), $conv13180 = i64(), $conv3 = 0, $conv39 = 0, $conv40 = 0.0;
 var $div = 0.0, $hi$0 = 0.0, $k$0 = 0, $k$1 = 0, $lo$0 = 0.0, $mul = 0.0, $mul103 = 0.0, $mul106 = 0.0, $mul123 = 0.0, $mul124 = 0.0, $mul126 = 0.0, $mul3687 = 0.0, $mul41 = 0.0, $mul43 = 0.0, $mul59 = 0.0, $mul60 = 0.0, $mul61 = 0.0, $mul63 = 0.0, $mul65 = 0.0, $mul67 = 0.0;
 var $mul69 = 0.0, $mul71 = 0.0, $mul74 = 0.0, $mul76 = 0.0, $mul80 = 0.0, $mul85 = 0.0, $mul92 = 0.0, $retval$0 = 0.0, $shl = i64(), $shl132 = i64(), $shr = i64(), $shr2 = i64(), $sub = 0.0, $sub102 = 0.0, $sub105 = 0.0, $sub118 = 0.0, $sub128 = 0.0, $sub130 = 0, $sub139 = 0.0, $sub145$sink = 0.0;
 var $sub145$sink$v = 0.0, $sub42 = 0.0, $sub45 = 0.0, $sub46 = 0.0, $sub47 = 0.0, $sub72 = 0.0, $sub73 = 0.0, $sub75 = 0.0, $sub81 = 0.0, $sub82 = 0.0, $sub84 = 0.0, $sub86 = 0.0, $sub87 = 0.0, $sub91 = 0.0, $sub93 = 0.0, $tobool = 0, $tobool32 = 0, $x$addr$0 = 0.0, $y$0 = 0.0, $y$1 = 0.0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(32,0));
 $1 = i64_trunc($shr);
 $conv = $1 & 2147483647;
 $shr2 = i64_lshr($0,i64_const(63,0));
 $conv3 = i64_trunc($shr2);
 $cmp = ($conv>>>0)>(1078159481);
 do {
  if ($cmp) {
   $call10 = (i64(___DOUBLE_BITS($x)));
   $and11 = i64_and($call10,i64_const(4294967295,2147483647));
   $cmp12 = i64_ugt($and11,i64_const(0,2146435072));
   if ($cmp12) {
    $retval$0 = $x;
   } else {
    $tobool = ($conv3|0)==(0);
    if ($tobool) {
     $cmp21 = $x > 709.78271289338397;
     if ($cmp21) {
      $mul = $x * 8.9884656743115795E+307;
      $retval$0 = $mul;
     } else {
      $2 = 0.5;
      label = 12;
     }
    } else {
     $retval$0 = -1.0;
    }
   }
  } else {
   $cmp26 = ($conv>>>0)>(1071001154);
   if (!($cmp26)) {
    $cmp49 = ($conv>>>0)<(1016070144);
    if ($cmp49) {
     $retval$0 = $x;
     break;
    } else {
     $c$0 = 0.0;$k$1 = 0;$x$addr$0 = $x;
     label = 15;
     break;
    }
   }
   $cmp29 = ($conv>>>0)<(1072734898);
   $tobool32 = ($conv3|0)!=(0);
   if (!($cmp29)) {
    $$ = $tobool32 ? -0.5 : 0.5;
    $2 = $$;
    label = 12;
    break;
   }
   if ($tobool32) {
    $add = $x + 0.69314718036912382;
    $hi$0 = $add;$k$0 = -1;$lo$0 = -1.9082149292705877E-10;
    label = 13;
    break;
   } else {
    $sub = $x + -0.69314718036912382;
    $hi$0 = $sub;$k$0 = 1;$lo$0 = 1.9082149292705877E-10;
    label = 13;
    break;
   }
  }
 } while(0);
 if ((label|0) == 12) {
  $mul3687 = $x * 1.4426950408889634;
  $add38 = $mul3687 + $2;
  $conv39 = (~~(($add38)));
  $conv40 = (+($conv39|0));
  $mul41 = $conv40 * 0.69314718036912382;
  $sub42 = $x - $mul41;
  $mul43 = $conv40 * 1.9082149292705877E-10;
  $hi$0 = $sub42;$k$0 = $conv39;$lo$0 = $mul43;
  label = 13;
 }
 if ((label|0) == 13) {
  $sub45 = $hi$0 - $lo$0;
  $sub46 = $hi$0 - $sub45;
  $sub47 = $sub46 - $lo$0;
  $c$0 = $sub47;$k$1 = $k$0;$x$addr$0 = $sub45;
  label = 15;
 }
 L20: do {
  if ((label|0) == 15) {
   $mul59 = $x$addr$0 * 0.5;
   $mul60 = $x$addr$0 * $mul59;
   $mul61 = $mul60 * 2.0109921818362437E-7;
   $add6285 = 4.0082178273293624E-6 - $mul61;
   $mul63 = $mul60 * $add6285;
   $add64 = $mul63 + -7.9365075786748794E-5;
   $mul65 = $mul60 * $add64;
   $add66 = $mul65 + 0.0015873015872548146;
   $mul67 = $mul60 * $add66;
   $add68 = $mul67 + -0.033333333333333132;
   $mul69 = $mul60 * $add68;
   $add70 = $mul69 + 1.0;
   $mul71 = $mul59 * $add70;
   $sub72 = 3.0 - $mul71;
   $sub73 = $add70 - $sub72;
   $mul74 = $x$addr$0 * $sub72;
   $sub75 = 6.0 - $mul74;
   $div = $sub73 / $sub75;
   $mul76 = $mul60 * $div;
   $cmp77 = ($k$1|0)==(0);
   if ($cmp77) {
    $mul80 = $x$addr$0 * $mul76;
    $sub81 = $mul80 - $mul60;
    $sub82 = $x$addr$0 - $sub81;
    $retval$0 = $sub82;
    break;
   }
   $sub84 = $mul76 - $c$0;
   $mul85 = $x$addr$0 * $sub84;
   $sub86 = $mul85 - $c$0;
   $sub87 = $sub86 - $mul60;
   switch ($k$1|0) {
   case -1:  {
    $sub91 = $x$addr$0 - $sub87;
    $mul92 = $sub91 * 0.5;
    $sub93 = $mul92 + -0.5;
    $retval$0 = $sub93;
    break L20;
    break;
   }
   case 1:  {
    $cmp98 = $x$addr$0 < -0.25;
    if ($cmp98) {
     $add101 = $x$addr$0 + 0.5;
     $sub102 = $sub87 - $add101;
     $mul103 = $sub102 * -2.0;
     $retval$0 = $mul103;
     break L20;
    } else {
     $sub105 = $x$addr$0 - $sub87;
     $mul106 = $sub105 * 2.0;
     $add107 = $mul106 + 1.0;
     $retval$0 = $add107;
     break L20;
    }
    break;
   }
   default: {
    $add109 = (($k$1) + 1023)|0;
    $conv11079 = i64_zext($add109>>>0);
    $shl = i64_shl($conv11079,i64_const(52,0));
    $3 = i64_bc2d($shl);
    $4 = ($k$1>>>0)>(56);
    if ($4) {
     $sub118 = $x$addr$0 - $sub87;
     $add119 = $sub118 + 1.0;
     $cmp120 = ($k$1|0)==(1024);
     $mul123 = $add119 * 2.0;
     $mul124 = $mul123 * 8.9884656743115795E+307;
     $mul126 = $3 * $add119;
     $y$0 = $cmp120 ? $mul124 : $mul126;
     $sub128 = $y$0 + -1.0;
     $retval$0 = $sub128;
     break L20;
    } else {
     $sub130 = (1023 - ($k$1))|0;
     $conv13180 = i64_zext($sub130>>>0);
     $shl132 = i64_shl($conv13180,i64_const(52,0));
     $cmp134 = ($k$1|0)<(20);
     $5 = i64_bc2d($shl132);
     $add144 = $5 + $sub87;
     $sub139 = 1.0 - $5;
     $$sink = $cmp134 ? $sub139 : 1.0;
     $sub145$sink$v = $cmp134 ? $sub87 : $add144;
     $sub145$sink = $x$addr$0 - $sub145$sink$v;
     $add146 = $$sink + $sub145$sink;
     $y$1 = $3 * $add146;
     $retval$0 = $y$1;
     break L20;
    }
   }
   }
  }
 } while(0);
 return (+$retval$0);
}
function ___DOUBLE_BITS($__f) {
 $__f = +$__f;
 var $0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($__f);
 return (i64($0));
}
function _scalbn($x,$n) {
 $x = +$x;
 $n = $n|0;
 var $$add14 = 0, $$add14$add = 0, $$sub4 = 0, $$sub4$sub = 0, $0 = 0, $1 = 0, $2 = 0.0, $add = 0, $add14 = 0, $add21 = 0, $cmp = 0, $cmp1 = 0, $cmp11 = 0, $cmp8 = 0, $conv18 = i64(), $mul = 0.0, $mul10 = 0.0, $mul13 = 0.0, $mul13$mul10 = 0.0, $mul22 = 0.0;
 var $mul3 = 0.0, $mul3$mul = 0.0, $n$addr$0 = 0, $shl = i64(), $sub = 0, $sub4 = 0, $y$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($n|0)>(1023);
 if ($cmp) {
  $mul = $x * 8.9884656743115795E+307;
  $sub = (($n) + -1023)|0;
  $cmp1 = ($sub|0)>(1023);
  $mul3 = $mul * 8.9884656743115795E+307;
  $sub4 = (($n) + -2046)|0;
  $0 = ($sub4|0)<(1023);
  $$sub4 = $0 ? $sub4 : 1023;
  $$sub4$sub = $cmp1 ? $$sub4 : $sub;
  $mul3$mul = $cmp1 ? $mul3 : $mul;
  $n$addr$0 = $$sub4$sub;$y$0 = $mul3$mul;
 } else {
  $cmp8 = ($n|0)<(-1022);
  if ($cmp8) {
   $mul10 = $x * 2.2250738585072014E-308;
   $add = (($n) + 1022)|0;
   $cmp11 = ($add|0)<(-1022);
   $mul13 = $mul10 * 2.2250738585072014E-308;
   $add14 = (($n) + 2044)|0;
   $1 = ($add14|0)>(-1022);
   $$add14 = $1 ? $add14 : -1022;
   $$add14$add = $cmp11 ? $$add14 : $add;
   $mul13$mul10 = $cmp11 ? $mul13 : $mul10;
   $n$addr$0 = $$add14$add;$y$0 = $mul13$mul10;
  } else {
   $n$addr$0 = $n;$y$0 = $x;
  }
 }
 $add21 = (($n$addr$0) + 1023)|0;
 $conv18 = i64_zext($add21>>>0);
 $shl = i64_shl($conv18,i64_const(52,0));
 $2 = i64_bc2d($shl);
 $mul22 = $y$0 * $2;
 return (+$mul22);
}
function _frexpl($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_frexp($x,$e));
 return (+$call);
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = i64(), $1 = 0, $2 = 0, $3 = 0.0, $and10 = i64(), $call = 0.0, $conv = 0, $mul = 0.0, $or = i64(), $retval$0 = 0.0, $shr = i64(), $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(52,0));
 $trunc = i64_trunc($shr)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $tobool1 = $x != 0.0;
  if ($tobool1) {
   $mul = $x * 1.8446744073709552E+19;
   $call = (+_frexp($mul,$e));
   $1 = load4($e);
   $sub = (($1) + -64)|0;
   $storemerge = $sub;$x$addr$0 = $call;
  } else {
   $storemerge = 0;$x$addr$0 = $x;
  }
  store4($e,$storemerge);
  $retval$0 = $x$addr$0;
  break;
 }
 case 2047:  {
  $retval$0 = $x;
  break;
 }
 default: {
  $2 = i64_trunc($shr);
  $conv = $2 & 2047;
  $sub8 = (($conv) + -1022)|0;
  store4($e,$sub8);
  $and10 = i64_and($0,i64_const(4294967295,2148532223));
  $or = i64_or($and10,i64_const(0,1071644672));
  $3 = i64_bc2d($or);
  $retval$0 = $3;
 }
 }
 return (+$retval$0);
}
function _fmodl($x,$y) {
 $x = +$x;
 $y = +$y;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_fmod($x,$y));
 return (+$call);
}
function _fmod($x,$y) {
 $x = +$x;
 $y = +$y;
 var $0 = i64(), $1 = i64(), $2 = 0, $3 = 0, $4 = 0.0, $add = 0, $add128 = 0, $add68 = 0, $and19 = i64(), $and52 = i64(), $and74 = i64(), $call18 = i64(), $cmp = 0, $cmp104 = 0, $cmp112 = 0, $cmp11262 = 0, $cmp119 = 0, $cmp20 = 0, $cmp27 = 0, $cmp33 = 0;
 var $cmp39 = 0, $cmp48 = 0, $cmp4881 = 0, $cmp60 = 0, $cmp6077 = 0, $cmp79 = 0, $cmp7966 = 0, $cmp85 = 0, $cmp85$lcssa = 0, $cmp8568 = 0, $cmp8572 = 0, $cmp88 = 0, $conv = 0, $conv12357 = i64(), $conv5 = 0, $dec = 0, $dec117 = 0, $dec64 = 0, $dec96 = 0, $div = 0.0;
 var $ex$0$lcssa = 0, $ex$082 = 0, $ex$1 = 0, $ex$2$lcssa = 0, $ex$269 = 0, $ex$3$lcssa = 0, $ex$363 = 0, $ey$0$lcssa = 0, $ey$078 = 0, $ey$1$ph = 0, $i9$083 = i64(), $i9$179 = i64(), $mul = 0.0, $mul107 = 0.0, $mul42 = 0.0, $mul42$x = 0.0, $mul91 = 0.0, $or = i64(), $or$cond = 0, $or125 = i64();
 var $or134 = i64(), $or76 = i64(), $retval$0 = 0.0, $sh_prom = i64(), $sh_prom129 = i64(), $sh_prom70 = i64(), $shl = i64(), $shl116 = i64(), $shl124 = i64(), $shl30 = i64(), $shl46 = i64(), $shl50 = i64(), $shl51 = i64(), $shl57 = i64(), $shl65 = i64(), $shl71 = i64(), $shl94 = i64(), $shr = i64(), $shr130 = i64(), $shr3 = i64();
 var $shr7 = i64(), $sub122 = i64(), $sub83 = i64(), $sub83$lcssa = i64(), $sub8367 = i64(), $sub8371 = i64(), $tobool = 0, $tobool54 = 0, $uxi$0 = i64(), $uxi$1$lcssa = i64(), $uxi$170 = i64(), $uxi$2 = i64(), $uxi$3$lcssa = i64(), $uxi$3$ph = i64(), $uxi$364 = i64(), $uxi$4 = i64(), $uy$sroa$0$0$ph = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $1 = i64_bc2i($y);
 $shr = i64_lshr($0,i64_const(52,0));
 $2 = i64_trunc($shr);
 $conv = $2 & 2047;
 $shr3 = i64_lshr($1,i64_const(52,0));
 $3 = i64_trunc($shr3);
 $conv5 = $3 & 2047;
 $shr7 = i64_and($0,i64_const(0,2147483648));
 $shl = i64_shl($1,i64_const(1,0));
 $cmp = i64_eq($shl,i64_const(0,0));
 L1: do {
  if ($cmp) {
   label = 3;
  } else {
   $call18 = (i64(___DOUBLE_BITS_63($y)));
   $and19 = i64_and($call18,i64_const(4294967295,2147483647));
   $cmp20 = i64_ugt($and19,i64_const(0,2146435072));
   $cmp27 = ($conv|0)==(2047);
   $or$cond = $cmp27 | $cmp20;
   if ($or$cond) {
    label = 3;
   } else {
    $shl30 = i64_shl($0,i64_const(1,0));
    $cmp33 = i64_ugt($shl30,$shl);
    if (!($cmp33)) {
     $cmp39 = i64_eq($shl30,$shl);
     $mul42 = $x * 0.0;
     $mul42$x = $cmp39 ? $mul42 : $x;
     return (+$mul42$x);
    }
    $tobool = ($conv|0)==(0);
    if ($tobool) {
     $shl46 = i64_shl($0,i64_const(12,0));
     $cmp4881 = i64_sgt($shl46,i64_const(4294967295,4294967295));
     if ($cmp4881) {
      $ex$082 = 0;$i9$083 = $shl46;
      while(1) {
       $dec = (($ex$082) + -1)|0;
       $shl50 = i64_shl($i9$083,i64_const(1,0));
       $cmp48 = i64_sgt($shl50,i64_const(4294967295,4294967295));
       if ($cmp48) {
        $ex$082 = $dec;$i9$083 = $shl50;
       } else {
        $ex$0$lcssa = $dec;
        break;
       }
      }
     } else {
      $ex$0$lcssa = 0;
     }
     $add = (1 - ($ex$0$lcssa))|0;
     $sh_prom = i64_zext($add>>>0);
     $shl51 = i64_shl($0,$sh_prom);
     $ex$1 = $ex$0$lcssa;$uxi$0 = $shl51;
    } else {
     $and52 = i64_and($0,i64_const(4294967295,1048575));
     $or = i64_or($and52,i64_const(0,1048576));
     $ex$1 = $conv;$uxi$0 = $or;
    }
    $tobool54 = ($conv5|0)==(0);
    if ($tobool54) {
     $shl57 = i64_shl($1,i64_const(12,0));
     $cmp6077 = i64_sgt($shl57,i64_const(4294967295,4294967295));
     if ($cmp6077) {
      $ey$078 = 0;$i9$179 = $shl57;
      while(1) {
       $dec64 = (($ey$078) + -1)|0;
       $shl65 = i64_shl($i9$179,i64_const(1,0));
       $cmp60 = i64_sgt($shl65,i64_const(4294967295,4294967295));
       if ($cmp60) {
        $ey$078 = $dec64;$i9$179 = $shl65;
       } else {
        $ey$0$lcssa = $dec64;
        break;
       }
      }
     } else {
      $ey$0$lcssa = 0;
     }
     $add68 = (1 - ($ey$0$lcssa))|0;
     $sh_prom70 = i64_zext($add68>>>0);
     $shl71 = i64_shl($1,$sh_prom70);
     $ey$1$ph = $ey$0$lcssa;$uy$sroa$0$0$ph = $shl71;
    } else {
     $and74 = i64_and($1,i64_const(4294967295,1048575));
     $or76 = i64_or($and74,i64_const(0,1048576));
     $ey$1$ph = $conv5;$uy$sroa$0$0$ph = $or76;
    }
    $cmp7966 = ($ex$1|0)>($ey$1$ph|0);
    $sub8367 = i64_sub($uxi$0,$uy$sroa$0$0$ph);
    $cmp8568 = i64_sgt($sub8367,i64_const(4294967295,4294967295));
    L23: do {
     if ($cmp7966) {
      $cmp8572 = $cmp8568;$ex$269 = $ex$1;$sub8371 = $sub8367;$uxi$170 = $uxi$0;
      while(1) {
       if ($cmp8572) {
        $cmp88 = i64_eq($sub8371,i64_const(0,0));
        if ($cmp88) {
         break;
        } else {
         $uxi$2 = $sub8371;
        }
       } else {
        $uxi$2 = $uxi$170;
       }
       $shl94 = i64_shl($uxi$2,i64_const(1,0));
       $dec96 = (($ex$269) + -1)|0;
       $cmp79 = ($dec96|0)>($ey$1$ph|0);
       $sub83 = i64_sub($shl94,$uy$sroa$0$0$ph);
       $cmp85 = i64_sgt($sub83,i64_const(4294967295,4294967295));
       if ($cmp79) {
        $cmp8572 = $cmp85;$ex$269 = $dec96;$sub8371 = $sub83;$uxi$170 = $shl94;
       } else {
        $cmp85$lcssa = $cmp85;$ex$2$lcssa = $dec96;$sub83$lcssa = $sub83;$uxi$1$lcssa = $shl94;
        break L23;
       }
      }
      $mul91 = $x * 0.0;
      $retval$0 = $mul91;
      break L1;
     } else {
      $cmp85$lcssa = $cmp8568;$ex$2$lcssa = $ex$1;$sub83$lcssa = $sub8367;$uxi$1$lcssa = $uxi$0;
     }
    } while(0);
    if ($cmp85$lcssa) {
     $cmp104 = i64_eq($sub83$lcssa,i64_const(0,0));
     if ($cmp104) {
      $mul107 = $x * 0.0;
      $retval$0 = $mul107;
      break;
     } else {
      $uxi$3$ph = $sub83$lcssa;
     }
    } else {
     $uxi$3$ph = $uxi$1$lcssa;
    }
    $cmp11262 = i64_ult($uxi$3$ph,i64_const(0,1048576));
    if ($cmp11262) {
     $ex$363 = $ex$2$lcssa;$uxi$364 = $uxi$3$ph;
     while(1) {
      $shl116 = i64_shl($uxi$364,i64_const(1,0));
      $dec117 = (($ex$363) + -1)|0;
      $cmp112 = i64_ult($shl116,i64_const(0,1048576));
      if ($cmp112) {
       $ex$363 = $dec117;$uxi$364 = $shl116;
      } else {
       $ex$3$lcssa = $dec117;$uxi$3$lcssa = $shl116;
       break;
      }
     }
    } else {
     $ex$3$lcssa = $ex$2$lcssa;$uxi$3$lcssa = $uxi$3$ph;
    }
    $cmp119 = ($ex$3$lcssa|0)>(0);
    if ($cmp119) {
     $sub122 = i64_add($uxi$3$lcssa,i64_const(0,4293918720));
     $conv12357 = i64_zext($ex$3$lcssa>>>0);
     $shl124 = i64_shl($conv12357,i64_const(52,0));
     $or125 = i64_or($sub122,$shl124);
     $uxi$4 = $or125;
    } else {
     $add128 = (1 - ($ex$3$lcssa))|0;
     $sh_prom129 = i64_zext($add128>>>0);
     $shr130 = i64_lshr($uxi$3$lcssa,$sh_prom129);
     $uxi$4 = $shr130;
    }
    $or134 = i64_or($uxi$4,$shr7);
    $4 = i64_bc2d($or134);
    $retval$0 = $4;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $mul = $x * $y;
  $div = $mul / $mul;
  $retval$0 = $div;
 }
 return (+$retval$0);
}
function ___DOUBLE_BITS_63($__f) {
 $__f = +$__f;
 var $0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($__f);
 return (i64($0));
}
function _copysign($x,$y) {
 $x = +$x;
 $y = +$y;
 var $0 = i64(), $1 = i64(), $2 = 0.0, $and = i64(), $and3 = i64(), $or = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $1 = i64_bc2i($y);
 $and = i64_and($0,i64_const(4294967295,2147483647));
 $and3 = i64_and($1,i64_const(0,2147483648));
 $or = i64_or($and3,$and);
 $2 = i64_bc2d($or);
 return (+$2);
}
function _scalbnl($x,$n) {
 $x = +$x;
 $n = $n|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_scalbn($x,$n));
 return (+$call);
}
function _tanh($x) {
 $x = +$x;
 var $0 = i64(), $1 = 0.0, $add = 0.0, $add18 = 0.0, $add27 = 0.0, $and = i64(), $call = 0.0, $call17 = 0.0, $call25 = 0.0, $cmp = 0, $cmp13 = 0, $cmp21 = 0, $cmp7 = 0, $cond = 0.0, $conv5 = 0, $div = 0.0, $div10 = 0.0, $div19 = 0.0, $div28 = 0.0, $mul = 0.0;
 var $mul16 = 0.0, $mul24 = 0.0, $shr4 = i64(), $sub = 0.0, $sub11 = 0.0, $sub26 = 0.0, $sub33 = 0.0, $t$0 = 0.0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $and = i64_and($0,i64_const(4294967295,2147483647));
 $1 = i64_bc2d($and);
 $shr4 = i64_lshr($and,i64_const(32,0));
 $conv5 = i64_trunc($shr4);
 $cmp = ($conv5>>>0)>(1071748074);
 do {
  if ($cmp) {
   $cmp7 = ($conv5>>>0)>(1077149696);
   if ($cmp7) {
    $div = 0.0 / $1;
    $sub = 1.0 - $div;
    $t$0 = $sub;
    break;
   } else {
    $mul = $1 * 2.0;
    $call = (+_expm1($mul));
    $add = $call + 2.0;
    $div10 = 2.0 / $add;
    $sub11 = 1.0 - $div10;
    $t$0 = $sub11;
    break;
   }
  } else {
   $cmp13 = ($conv5>>>0)>(1070618798);
   if ($cmp13) {
    $mul16 = $1 * 2.0;
    $call17 = (+_expm1($mul16));
    $add18 = $call17 + 2.0;
    $div19 = $call17 / $add18;
    $t$0 = $div19;
    break;
   }
   $cmp21 = ($conv5>>>0)>(1048575);
   if ($cmp21) {
    $mul24 = $1 * -2.0;
    $call25 = (+_expm1($mul24));
    $sub26 = -$call25;
    $add27 = $call25 + 2.0;
    $div28 = $sub26 / $add27;
    $t$0 = $div28;
   } else {
    $t$0 = $1;
   }
  }
 } while(0);
 $tobool = i64_slt($0,i64_const(0,0));
 $sub33 = -$t$0;
 $cond = $tobool ? $sub33 : $t$0;
 return (+$cond);
}
function _copysignl($x,$y) {
 $x = +$x;
 $y = +$y;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_copysign($x,$y));
 return (+$call);
}
function _strcmp($l,$r) {
 $l = $l|0;
 $r = $r|0;
 var $$lcssa = 0, $$lcssa6 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $cmp = 0, $cmp7 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $incdec$ptr4 = 0, $l$addr$010 = 0, $or$cond = 0, $or$cond9 = 0, $r$addr$011 = 0, $sub = 0, $tobool = 0, $tobool8 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $0 = load1($l);
 $1 = load1($r);
 $cmp7 = ($0<<24>>24)!=($1<<24>>24);
 $tobool8 = ($0<<24>>24)==(0);
 $or$cond9 = $tobool8 | $cmp7;
 if ($or$cond9) {
  $$lcssa = $1;$$lcssa6 = $0;
 } else {
  $l$addr$010 = $l;$r$addr$011 = $r;
  while(1) {
   $incdec$ptr = ((($l$addr$010)) + 1|0);
   $incdec$ptr4 = ((($r$addr$011)) + 1|0);
   $2 = load1($incdec$ptr);
   $3 = load1($incdec$ptr4);
   $cmp = ($2<<24>>24)!=($3<<24>>24);
   $tobool = ($2<<24>>24)==(0);
   $or$cond = $tobool | $cmp;
   if ($or$cond) {
    $$lcssa = $3;$$lcssa6 = $2;
    break;
   } else {
    $l$addr$010 = $incdec$ptr;$r$addr$011 = $incdec$ptr4;
   }
  }
 }
 $conv5 = $$lcssa6&255;
 $conv6 = $$lcssa&255;
 $sub = (($conv5) - ($conv6))|0;
 return ($sub|0);
}
function _vsprintf($s,$fmt,$ap) {
 $s = $s|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_vsnprintf($s,2147483647,$fmt,$ap)|0);
 return ($call|0);
}
function _vsnprintf($s,$n,$fmt,$ap) {
 $s = $s|0;
 $n = $n|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $add$ptr = 0, $arrayidx = 0, $b = 0, $buf = 0, $buf_size = 0, $call = 0, $call10 = 0, $cmp = 0, $cmp16 = 0, $cmp4 = 0, $f = 0, $n$addr$0 = 0, $retval$0 = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$rhs$cast = 0, $sub17 = 0, $sub3 = 0;
 var $sub3$n$addr$0 = 0, $tobool = 0, $tobool11 = 0, $wbase = 0, $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $b = sp + 124|0;
 $f = sp;
 ; store8($f,load8(2208,4),4); store8($f+8 | 0,load8(2208+8 | 0,4),4); store8($f+16 | 0,load8(2208+16 | 0,4),4); store8($f+24 | 0,load8(2208+24 | 0,4),4); store8($f+32 | 0,load8(2208+32 | 0,4),4); store8($f+40 | 0,load8(2208+40 | 0,4),4); store8($f+48 | 0,load8(2208+48 | 0,4),4); store8($f+56 | 0,load8(2208+56 | 0,4),4); store8($f+64 | 0,load8(2208+64 | 0,4),4); store8($f+72 | 0,load8(2208+72 | 0,4),4); store8($f+80 | 0,load8(2208+80 | 0,4),4); store8($f+88 | 0,load8(2208+88 | 0,4),4); store8($f+96 | 0,load8(2208+96 | 0,4),4); store8($f+104 | 0,load8(2208+104 | 0,4),4); store8($f+112 | 0,load8(2208+112 | 0,4),4); store4($f+120 | 0,load4(2208+120 | 0,4),4);
 $sub = (($n) + -1)|0;
 $cmp = ($sub>>>0)>(2147483646);
 if ($cmp) {
  $tobool = ($n|0)==(0);
  if ($tobool) {
   $n$addr$0 = 1;$s$addr$0 = $b;
   label = 4;
  } else {
   $call = (___errno_location()|0);
   store4($call,75);
   $retval$0 = -1;
  }
 } else {
  $n$addr$0 = $n;$s$addr$0 = $s;
  label = 4;
 }
 if ((label|0) == 4) {
  $sub$ptr$rhs$cast = $s$addr$0;
  $sub3 = (-2 - ($sub$ptr$rhs$cast))|0;
  $cmp4 = ($n$addr$0>>>0)>($sub3>>>0);
  $sub3$n$addr$0 = $cmp4 ? $sub3 : $n$addr$0;
  $buf_size = ((($f)) + 48|0);
  store4($buf_size,$sub3$n$addr$0);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$s$addr$0);
  $buf = ((($f)) + 44|0);
  store4($buf,$s$addr$0);
  $add$ptr = (($s$addr$0) + ($sub3$n$addr$0)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$add$ptr);
  $call10 = (_vfprintf($f,$fmt,$ap)|0);
  $tobool11 = ($sub3$n$addr$0|0)==(0);
  if ($tobool11) {
   $retval$0 = $call10;
  } else {
   $0 = load4($wpos);
   $1 = load4($wend);
   $cmp16 = ($0|0)==($1|0);
   $sub17 = $cmp16 << 31 >> 31;
   $arrayidx = (($0) + ($sub17)|0);
   store1($arrayidx,0);
   $retval$0 = $call10;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _vfprintf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$call21 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $and36 = 0, $ap2 = 0, $buf = 0, $buf_size = 0, $call = 0, $call21 = 0, $call2130 = 0, $call6 = 0;
 var $cmp = 0, $cmp5 = 0, $cmp7 = 0, $cond = 0, $internal_buf = 0, $lock = 0, $mode = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $ret$1 = 0, $ret$1$ = 0, $retval$0 = 0, $tobool = 0, $tobool22 = 0, $tobool26 = 0, $tobool37 = 0, $tobool41 = 0, $vacopy_currentptr = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 ; store8($nl_type,i64_const(0,0),4); store8($nl_type+8|0,i64_const(0,0),4); store8($nl_type+16|0,i64_const(0,0),4); store8($nl_type+24|0,i64_const(0,0),4); store8($nl_type+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($ap);
 store4($ap2,$vacopy_currentptr);
 $call = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
  $retval$0 = -1;
 } else {
  $lock = ((($f)) + 76|0);
  $0 = load4($lock);
  $cmp5 = ($0|0)>(-1);
  if ($cmp5) {
   $call6 = (___lockfile($f)|0);
   $cond = $call6;
  } else {
   $cond = 0;
  }
  $1 = load4($f);
  $and = $1 & 32;
  $mode = ((($f)) + 74|0);
  $2 = load1($mode);
  $cmp7 = ($2<<24>>24)<(1);
  if ($cmp7) {
   $and11 = $1 & -33;
   store4($f,$and11);
  }
  $buf_size = ((($f)) + 48|0);
  $3 = load4($buf_size);
  $tobool = ($3|0)==(0);
  if ($tobool) {
   $buf = ((($f)) + 44|0);
   $4 = load4($buf);
   store4($buf,$internal_buf);
   $wbase = ((($f)) + 28|0);
   store4($wbase,$internal_buf);
   $wpos = ((($f)) + 20|0);
   store4($wpos,$internal_buf);
   store4($buf_size,80);
   $add$ptr = ((($internal_buf)) + 80|0);
   $wend = ((($f)) + 16|0);
   store4($wend,$add$ptr);
   $call21 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $tobool22 = ($4|0)==(0|0);
   if ($tobool22) {
    $ret$1 = $call21;
   } else {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    (FUNCTION_TABLE_iiii[$5 & 15]($f,0,0)|0);
    $6 = load4($wpos);
    $tobool26 = ($6|0)==(0|0);
    $$call21 = $tobool26 ? -1 : $call21;
    store4($buf,$4);
    store4($buf_size,0);
    store4($wend,0);
    store4($wbase,0);
    store4($wpos,0);
    $ret$1 = $$call21;
   }
  } else {
   $call2130 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $ret$1 = $call2130;
  }
  $7 = load4($f);
  $and36 = $7 & 32;
  $tobool37 = ($and36|0)==(0);
  $ret$1$ = $tobool37 ? $ret$1 : -1;
  $or = $7 | $and;
  store4($f,$or);
  $tobool41 = ($cond|0)==(0);
  if (!($tobool41)) {
   ___unlockfile($f);
  }
  $retval$0 = $ret$1$;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$ = 0, $$194$ = 0, $$197 = 0, $$add$ptr258 = 0, $$l10n$0 = 0, $$lcssa199 = 0, $$pre = 0, $$pre247 = 0, $$pre248 = 0, $$pre248$pre = 0, $$pre249 = 0, $$pre250 = i64(), $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = i64(), $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = i64(), $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = i64(), $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = i64(), $49 = i64(), $5 = 0, $50 = 0;
 var $51 = i64(), $52 = 0, $53 = i64(), $54 = i64(), $55 = i64(), $56 = 0, $57 = 0, $58 = i64(), $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $7 = 0, $8 = 0, $9 = 0, $a$0 = 0;
 var $a$0$add$ptr206 = 0, $a$1 = 0, $a$2 = 0, $add = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr206 = 0, $add$ptr258 = 0, $add$ptr341 = 0, $add$ptr360 = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr474 = 0, $add$ptr88 = 0, $add270 = 0, $add323 = 0, $add396 = 0, $add413 = 0, $add442 = 0, $and = 0;
 var $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arrayidx114 = 0, $arrayidx119 = 0, $arrayidx124 = 0;
 var $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx371 = 0, $arrayidx470 = 0, $arrayidx482 = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $buf = 0, $call = 0, $call104 = 0, $call160 = 0, $call251 = 0, $call263 = 0, $call305 = 0, $call345 = 0;
 var $call346 = 0, $call357 = 0, $call385 = 0, $call412 = 0, $call430 = 0, $cmp = 0, $cmp1 = 0, $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp13 = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0, $cmp185 = 0, $cmp212 = 0, $cmp241 = 0, $cmp271 = 0;
 var $cmp283 = 0, $cmp307 = 0, $cmp324 = 0, $cmp37 = 0, $cmp378 = 0, $cmp378227 = 0, $cmp386 = 0, $cmp391 = 0, $cmp398 = 0, $cmp405 = 0, $cmp405237 = 0, $cmp414 = 0, $cmp422 = 0, $cmp435 = 0, $cmp443 = 0, $cmp467 = 0, $cmp479 = 0, $cmp50 = 0, $cmp50217 = 0, $cmp65 = 0;
 var $cmp75 = 0, $cmp97 = 0, $cnt$0 = 0, $cnt$1 = 0, $cond149 = 0, $cond246 = 0, $cond355 = 0, $cond427 = 0, $conv120 = 0, $conv134 = 0, $conv138 = 0, $conv164 = 0, $conv172 = 0, $conv175 = 0, $conv208 = 0, $conv227 = i64(), $conv230 = 0, $conv233 = 0, $conv238 = i64(), $conv32 = 0;
 var $conv340 = 0, $conv369 = 0, $conv48 = 0, $conv48215 = 0, $conv69 = 0, $conv83 = 0, $conv87 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0;
 var $expanded9 = 0, $fl$0$lcssa = 0, $fl$0219 = 0, $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa256 = 0, $i$0229 = 0, $i$1238 = 0, $i$2210 = 0, $i$3207 = 0, $i137 = 0, $i86 = 0, $inc = 0, $inc489 = 0, $incdec$ptr = 0, $incdec$ptr159 = 0;
 var $incdec$ptr171 = 0, $incdec$ptr23 = 0, $incdec$ptr384 = 0, $incdec$ptr411 = 0, $incdec$ptr62 = 0, $isdigit = 0, $isdigit188 = 0, $isdigit190 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $l$0 = 0, $l$1228 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0;
 var $lnot = 0, $lnot$ext = 0, $lnot484 = 0, $mb = 0, $narrow = 0, $or = 0, $or$cond = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or100 = 0, $or100$fl$0 = 0, $or247 = 0, $p$0 = 0, $p$0$p$0$add270 = 0, $p$1 = 0, $p$2 = 0, $p$2$add323 = 0, $p$2$add323$p$2 = 0, $p$3 = 0;
 var $p$4253 = 0, $p$5 = 0, $pl$0 = 0, $pl$1 = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$1 = 0, $prefix$2 = 0, $retval$0 = 0, $s = 0, $shl = 0, $shr = 0, $st$0 = 0, $storemerge = 0, $storemerge186218 = 0, $storemerge191 = 0, $sub = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast362 = 0;
 var $sub$ptr$lhs$cast432 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast268 = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast363 = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$sub = 0, $sub$ptr$sub269 = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub101 = 0, $sub101$w$0 = 0, $sub135 = 0, $sub165 = 0, $sub173 = 0, $sub176 = 0, $sub287 = i64(), $sub390 = 0;
 var $sub49 = 0, $sub49216 = 0, $sub49220 = 0, $sub84 = 0, $t$0 = 0, $t$1 = 0, $tobool = 0, $tobool141 = 0, $tobool179 = 0, $tobool209 = 0, $tobool218 = 0, $tobool25 = 0, $tobool253 = 0, $tobool256 = 0, $tobool265 = 0, $tobool28 = 0, $tobool291 = 0, $tobool296 = 0, $tobool313 = 0, $tobool315 = 0;
 var $tobool350 = 0, $tobool358 = 0, $tobool381 = 0, $tobool408 = 0, $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool55 = 0, $tobool90 = 0, $trunc = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $wc = 0, $ws$0230 = 0, $ws$1239 = 0, $xor = 0, $xor450 = 0, $xor458 = 0, $z$0$lcssa = 0;
 var $z$0212 = 0, $z$1 = 0, $z$2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $s = sp + 16|0;
 $arg = sp;
 $buf = sp + 24|0;
 $wc = sp + 8|0;
 $mb = sp + 20|0;
 store4($s,$fmt);
 $tobool25 = ($f|0)!=(0|0);
 $add$ptr206 = ((($buf)) + 40|0);
 $sub$ptr$lhs$cast318 = $add$ptr206;
 $add$ptr341 = ((($buf)) + 39|0);
 $arrayidx371 = ((($wc)) + 4|0);
 $1 = $fmt;$cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;
 L1: while(1) {
  $cmp = ($cnt$0|0)>(-1);
  do {
   if ($cmp) {
    $sub = (2147483647 - ($cnt$0))|0;
    $cmp1 = ($l$0|0)>($sub|0);
    if ($cmp1) {
     $call = (___errno_location()|0);
     store4($call,75);
     $cnt$1 = -1;
     break;
    } else {
     $add = (($l$0) + ($cnt$0))|0;
     $cnt$1 = $add;
     break;
    }
   } else {
    $cnt$1 = $cnt$0;
   }
  } while(0);
  $0 = load1($1);
  $tobool = ($0<<24>>24)==(0);
  if ($tobool) {
   label = 87;
   break;
  } else {
   $2 = $0;$3 = $1;
  }
  L9: while(1) {
   switch ($2<<24>>24) {
   case 37:  {
    $4 = $3;$z$0212 = $3;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $7 = $3;$z$0$lcssa = $3;
    break L9;
    break;
   }
   default: {
   }
   }
   $incdec$ptr = ((($3)) + 1|0);
   store4($s,$incdec$ptr);
   $$pre = load1($incdec$ptr);
   $2 = $$pre;$3 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($4)) + 1|0);
     $5 = load1($arrayidx16);
     $cmp18 = ($5<<24>>24)==(37);
     if (!($cmp18)) {
      $7 = $4;$z$0$lcssa = $z$0212;
      break L12;
     }
     $incdec$ptr23 = ((($z$0212)) + 1|0);
     $add$ptr = ((($4)) + 2|0);
     store4($s,$add$ptr);
     $6 = load1($add$ptr);
     $cmp13 = ($6<<24>>24)==(37);
     if ($cmp13) {
      $4 = $add$ptr;$z$0212 = $incdec$ptr23;
      label = 9;
     } else {
      $7 = $add$ptr;$z$0$lcssa = $incdec$ptr23;
      break;
     }
    }
   }
  } while(0);
  $sub$ptr$lhs$cast = $z$0$lcssa;
  $sub$ptr$rhs$cast = $1;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  if ($tobool25) {
   _out($f,$1,$sub$ptr$sub);
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$1 = $7;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($7)) + 1|0);
  $8 = load1($arrayidx31);
  $conv32 = $8 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($7)) + 2|0);
   $9 = load1($arrayidx35);
   $cmp37 = ($9<<24>>24)==(36);
   $add$ptr43 = ((($7)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $add$ptr43$arrayidx31;
  } else {
   $argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $arrayidx31;
  }
  store4($s,$storemerge);
  $10 = load1($storemerge);
  $conv48215 = $10 << 24 >> 24;
  $sub49216 = (($conv48215) + -32)|0;
  $cmp50217 = ($sub49216>>>0)<(32);
  L24: do {
   if ($cmp50217) {
    $64 = $10;$fl$0219 = 0;$storemerge186218 = $storemerge;$sub49220 = $sub49216;
    while(1) {
     $shl = 1 << $sub49220;
     $and = $shl & 75913;
     $tobool55 = ($and|0)==(0);
     if ($tobool55) {
      $$lcssa199 = $64;$12 = $storemerge186218;$fl$0$lcssa = $fl$0219;
      break L24;
     }
     $or = $shl | $fl$0219;
     $incdec$ptr62 = ((($storemerge186218)) + 1|0);
     store4($s,$incdec$ptr62);
     $11 = load1($incdec$ptr62);
     $conv48 = $11 << 24 >> 24;
     $sub49 = (($conv48) + -32)|0;
     $cmp50 = ($sub49>>>0)<(32);
     if ($cmp50) {
      $64 = $11;$fl$0219 = $or;$storemerge186218 = $incdec$ptr62;$sub49220 = $sub49;
     } else {
      $$lcssa199 = $11;$12 = $incdec$ptr62;$fl$0$lcssa = $or;
      break;
     }
    }
   } else {
    $$lcssa199 = $10;$12 = $storemerge;$fl$0$lcssa = 0;
   }
  } while(0);
  $cmp65 = ($$lcssa199<<24>>24)==(42);
  if ($cmp65) {
   $arrayidx68 = ((($12)) + 1|0);
   $13 = load1($arrayidx68);
   $conv69 = $13 << 24 >> 24;
   $isdigittmp189 = (($conv69) + -48)|0;
   $isdigit190 = ($isdigittmp189>>>0)<(10);
   if ($isdigit190) {
    $arrayidx73 = ((($12)) + 2|0);
    $14 = load1($arrayidx73);
    $cmp75 = ($14<<24>>24)==(36);
    if ($cmp75) {
     $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
     store4($arrayidx81,10);
     $15 = load1($arrayidx68);
     $conv83 = $15 << 24 >> 24;
     $sub84 = (($conv83) + -48)|0;
     $i86 = (($nl_arg) + ($sub84<<3)|0);
     $16 = load8($i86);
     $conv87 = i64_trunc($16);
     $add$ptr88 = ((($12)) + 3|0);
     $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $conv87;
    } else {
     label = 23;
    }
   } else {
    label = 23;
   }
   if ((label|0) == 23) {
    label = 0;
    $tobool90 = ($l10n$1|0)==(0);
    if (!($tobool90)) {
     $retval$0 = -1;
     break;
    }
    if ($tobool25) {
     $arglist_current = load4($ap);
     $17 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $18 = (($17) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $19 = $18 & $expanded6;
     $20 = $19;
     $21 = load4($20);
     $arglist_next = ((($20)) + 4|0);
     store4($ap,$arglist_next);
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $21;
    } else {
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = 0;
    }
   }
   store4($s,$storemerge191);
   $cmp97 = ($w$0|0)<(0);
   $or100 = $fl$0$lcssa | 8192;
   $sub101 = (0 - ($w$0))|0;
   $or100$fl$0 = $cmp97 ? $or100 : $fl$0$lcssa;
   $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
   $23 = $storemerge191;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$w$1 = $sub101$w$0;
  } else {
   $call104 = (_getint($s)|0);
   $cmp105 = ($call104|0)<(0);
   if ($cmp105) {
    $retval$0 = -1;
    break;
   }
   $$pre247 = load4($s);
   $23 = $$pre247;$fl$1 = $fl$0$lcssa;$l10n$3 = $l10n$1;$w$1 = $call104;
  }
  $22 = load1($23);
  $cmp111 = ($22<<24>>24)==(46);
  do {
   if ($cmp111) {
    $arrayidx114 = ((($23)) + 1|0);
    $24 = load1($arrayidx114);
    $cmp116 = ($24<<24>>24)==(42);
    if (!($cmp116)) {
     $incdec$ptr159 = ((($23)) + 1|0);
     store4($s,$incdec$ptr159);
     $call160 = (_getint($s)|0);
     $$pre248$pre = load4($s);
     $$pre248 = $$pre248$pre;$p$0 = $call160;
     break;
    }
    $arrayidx119 = ((($23)) + 2|0);
    $25 = load1($arrayidx119);
    $conv120 = $25 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($23)) + 3|0);
     $26 = load1($arrayidx124);
     $cmp126 = ($26<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      store4($arrayidx132,10);
      $27 = load1($arrayidx119);
      $conv134 = $27 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $28 = load8($i137);
      $conv138 = i64_trunc($28);
      $add$ptr139 = ((($23)) + 4|0);
      store4($s,$add$ptr139);
      $$pre248 = $add$ptr139;$p$0 = $conv138;
      break;
     }
    }
    $tobool141 = ($l10n$3|0)==(0);
    if (!($tobool141)) {
     $retval$0 = -1;
     break L1;
    }
    if ($tobool25) {
     $arglist_current2 = load4($ap);
     $29 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $30 = (($29) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $31 = $30 & $expanded13;
     $32 = $31;
     $33 = load4($32);
     $arglist_next3 = ((($32)) + 4|0);
     store4($ap,$arglist_next3);
     $cond149 = $33;
    } else {
     $cond149 = 0;
    }
    store4($s,$arrayidx119);
    $$pre248 = $arrayidx119;$p$0 = $cond149;
   } else {
    $$pre248 = $23;$p$0 = -1;
   }
  } while(0);
  $35 = $$pre248;$st$0 = 0;
  while(1) {
   $34 = load1($35);
   $conv164 = $34 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr171 = ((($35)) + 1|0);
   store4($s,$incdec$ptr171);
   $36 = load1($35);
   $conv172 = $36 << 24 >> 24;
   $sub173 = (($conv172) + -65)|0;
   $arrayidx174 = ((3702 + (($st$0*58)|0)|0) + ($sub173)|0);
   $37 = load1($arrayidx174);
   $conv175 = $37&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $35 = $incdec$ptr171;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($37<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($37<<24>>24)==(19);
  $cmp185 = ($argpos$0|0)>(-1);
  do {
   if ($cmp182) {
    if ($cmp185) {
     $retval$0 = -1;
     break L1;
    } else {
     label = 49;
    }
   } else {
    if ($cmp185) {
     $arrayidx193 = (($nl_type) + ($argpos$0<<2)|0);
     store4($arrayidx193,$conv175);
     $38 = (($nl_arg) + ($argpos$0<<3)|0);
     $39 = load8($38);
     store8($arg,$39);
     label = 49;
     break;
    }
    if (!($tobool25)) {
     $retval$0 = 0;
     break L1;
    }
    _pop_arg($arg,$conv175,$ap);
   }
  } while(0);
  if ((label|0) == 49) {
   label = 0;
   if (!($tobool25)) {
    $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
    continue;
   }
  }
  $40 = load1($35);
  $conv208 = $40 << 24 >> 24;
  $tobool209 = ($st$0|0)!=(0);
  $and211 = $conv208 & 15;
  $cmp212 = ($and211|0)==(3);
  $or$cond192 = $tobool209 & $cmp212;
  $and215 = $conv208 & -33;
  $t$0 = $or$cond192 ? $and215 : $conv208;
  $and217 = $fl$1 & 8192;
  $tobool218 = ($and217|0)==(0);
  $and220 = $fl$1 & -65537;
  $fl$1$and220 = $tobool218 ? $fl$1 : $and220;
  L71: do {
   switch ($t$0|0) {
   case 110:  {
    $trunc = $st$0&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $41 = load4($arg);
     store4($41,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 1:  {
     $42 = load4($arg);
     store4($42,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 2:  {
     $conv227 = i64_sext($cnt$1);
     $43 = load4($arg);
     store8($43,$conv227);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $44 = load4($arg);
     store2($44,$conv230);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $45 = load4($arg);
     store1($45,$conv233);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 6:  {
     $46 = load4($arg);
     store4($46,$cnt$1);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    case 7:  {
     $conv238 = i64_sext($cnt$1);
     $47 = load4($arg);
     store8($47,$conv238);
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
     break;
    }
    default: {
     $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $cmp241 = ($p$0>>>0)>(8);
    $cond246 = $cmp241 ? $p$0 : 8;
    $or247 = $fl$1$and220 | 8;
    $fl$3 = $or247;$p$1 = $cond246;$t$1 = 120;
    label = 61;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$and220;$p$1 = $p$0;$t$1 = $t$0;
    label = 61;
    break;
   }
   case 111:  {
    $49 = load8($arg);
    $call263 = (_fmt_o($49,$add$ptr206)|0);
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    $sub$ptr$rhs$cast268 = $call263;
    $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
    $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
    $add270 = (($sub$ptr$sub269) + 1)|0;
    $50 = $tobool265 | $cmp271;
    $p$0$p$0$add270 = $50 ? $p$0 : $add270;
    $54 = $49;$a$0 = $call263;$fl$4 = $fl$1$and220;$p$2 = $p$0$p$0$add270;$pl$1 = 0;$prefix$1 = 4166;
    label = 67;
    break;
   }
   case 105: case 100:  {
    $51 = load8($arg);
    $cmp283 = i64_slt($51,i64_const(0,0));
    if ($cmp283) {
     $sub287 = i64_sub(i64_const(0,0),$51);
     store8($arg,$sub287);
     $53 = $sub287;$pl$0 = 1;$prefix$0 = 4166;
     label = 66;
     break L71;
    } else {
     $and290 = $fl$1$and220 & 2048;
     $tobool291 = ($and290|0)==(0);
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 4166 : (4168);
     $$$ = $tobool291 ? $$ : (4167);
     $52 = $fl$1$and220 & 2049;
     $narrow = ($52|0)!=(0);
     $$194$ = $narrow&1;
     $53 = $51;$pl$0 = $$194$;$prefix$0 = $$$;
     label = 66;
     break L71;
    }
    break;
   }
   case 117:  {
    $$pre250 = load8($arg);
    $53 = $$pre250;$pl$0 = 0;$prefix$0 = 4166;
    label = 66;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 4166;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $call345 = (___errno_location()|0);
    $56 = load4($call345);
    $call346 = (_strerror($56)|0);
    $a$1 = $call346;
    label = 71;
    break;
   }
   case 115:  {
    $57 = load4($arg);
    $tobool350 = ($57|0)!=(0|0);
    $cond355 = $tobool350 ? $57 : 4176;
    $a$1 = $cond355;
    label = 71;
    break;
   }
   case 67:  {
    $58 = load8($arg);
    $conv369 = i64_trunc($58);
    store4($wc,$conv369);
    store4($arrayidx371,0);
    store4($arg,$wc);
    $65 = $wc;$p$4253 = -1;
    label = 75;
    break;
   }
   case 83:  {
    $$pre249 = load4($arg);
    $cmp378227 = ($p$0|0)==(0);
    if ($cmp378227) {
     _pad_208($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa256 = 0;
     label = 84;
    } else {
     $65 = $$pre249;$p$4253 = $p$0;
     label = 75;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $61 = loadd($arg);
    $call430 = (_fmt_fp($f,$61,$w$1,$p$0,$fl$1$and220,$t$0)|0);
    $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $call430;$l10n$0 = $l10n$3;
    continue L1;
    break;
   }
   default: {
    $a$2 = $1;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 4166;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L95: do {
   if ((label|0) == 61) {
    label = 0;
    $48 = load8($arg);
    $and250 = $t$1 & 32;
    $call251 = (_fmt_x($48,$add$ptr206,$and250)|0);
    $tobool253 = i64_eq($48,i64_const(0,0));
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $tobool253;
    $shr = $t$1 >> 4;
    $add$ptr258 = (4166 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 4166 : $add$ptr258;
    $$197 = $or$cond193 ? 0 : 2;
    $54 = $48;$a$0 = $call251;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$197;$prefix$1 = $$add$ptr258;
    label = 67;
   }
   else if ((label|0) == 66) {
    label = 0;
    $call305 = (_fmt_u($53,$add$ptr206)|0);
    $54 = $53;$a$0 = $call305;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 67;
   }
   else if ((label|0) == 71) {
    label = 0;
    $call357 = (_memchr($a$1,0,$p$0)|0);
    $tobool358 = ($call357|0)==(0|0);
    $sub$ptr$lhs$cast362 = $call357;
    $sub$ptr$rhs$cast363 = $a$1;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($sub$ptr$rhs$cast363))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $call357;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 4166;$z$2 = $z$1;
   }
   else if ((label|0) == 75) {
    label = 0;
    $i$0229 = 0;$l$1228 = 0;$ws$0230 = $65;
    while(1) {
     $59 = load4($ws$0230);
     $tobool381 = ($59|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0229;$l$2 = $l$1228;
      break;
     }
     $call385 = (_wctomb($mb,$59)|0);
     $cmp386 = ($call385|0)<(0);
     $sub390 = (($p$4253) - ($i$0229))|0;
     $cmp391 = ($call385>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0229;$l$2 = $call385;
      break;
     }
     $incdec$ptr384 = ((($ws$0230)) + 4|0);
     $add396 = (($call385) + ($i$0229))|0;
     $cmp378 = ($p$4253>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0229 = $add396;$l$1228 = $call385;$ws$0230 = $incdec$ptr384;
     } else {
      $i$0$lcssa = $add396;$l$2 = $call385;
      break;
     }
    }
    $cmp398 = ($l$2|0)<(0);
    if ($cmp398) {
     $retval$0 = -1;
     break L1;
    }
    _pad_208($f,32,$w$1,$i$0$lcssa,$fl$1$and220);
    $cmp405237 = ($i$0$lcssa|0)==(0);
    if ($cmp405237) {
     $i$0$lcssa256 = 0;
     label = 84;
    } else {
     $i$1238 = 0;$ws$1239 = $65;
     while(1) {
      $60 = load4($ws$1239);
      $tobool408 = ($60|0)==(0);
      if ($tobool408) {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break L95;
      }
      $call412 = (_wctomb($mb,$60)|0);
      $add413 = (($call412) + ($i$1238))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break L95;
      }
      $incdec$ptr411 = ((($ws$1239)) + 4|0);
      _out($f,$mb,$call412);
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1238 = $add413;$ws$1239 = $incdec$ptr411;
      } else {
       $i$0$lcssa256 = $i$0$lcssa;
       label = 84;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 67) {
   label = 0;
   $cmp307 = ($p$2|0)>(-1);
   $and310 = $fl$4 & -65537;
   $and310$fl$4 = $cmp307 ? $and310 : $fl$4;
   $tobool313 = i64_ne($54,i64_const(0,0));
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool315 | $tobool313;
   $sub$ptr$rhs$cast319 = $a$0;
   $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
   $lnot = $tobool313 ^ 1;
   $lnot$ext = $lnot&1;
   $add323 = (($lnot$ext) + ($sub$ptr$sub320))|0;
   $cmp324 = ($p$2|0)>($add323|0);
   $p$2$add323 = $cmp324 ? $p$2 : $add323;
   $p$2$add323$p$2 = $or$cond ? $p$2$add323 : $p$2;
   $a$0$add$ptr206 = $or$cond ? $a$0 : $add$ptr206;
   $a$2 = $a$0$add$ptr206;$fl$6 = $and310$fl$4;$p$5 = $p$2$add323$p$2;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
  }
  else if ((label|0) == 84) {
   label = 0;
   $xor = $fl$1$and220 ^ 8192;
   _pad_208($f,32,$w$1,$i$0$lcssa256,$xor);
   $cmp422 = ($w$1|0)>($i$0$lcssa256|0);
   $cond427 = $cmp422 ? $w$1 : $i$0$lcssa256;
   $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $cond427;$l10n$0 = $l10n$3;
   continue;
  }
  $sub$ptr$lhs$cast432 = $z$2;
  $sub$ptr$rhs$cast433 = $a$2;
  $sub$ptr$sub434 = (($sub$ptr$lhs$cast432) - ($sub$ptr$rhs$cast433))|0;
  $cmp435 = ($p$5|0)<($sub$ptr$sub434|0);
  $sub$ptr$sub434$p$5 = $cmp435 ? $sub$ptr$sub434 : $p$5;
  $add442 = (($sub$ptr$sub434$p$5) + ($pl$2))|0;
  $cmp443 = ($w$1|0)<($add442|0);
  $w$2 = $cmp443 ? $add442 : $w$1;
  _pad_208($f,32,$w$2,$add442,$fl$6);
  _out($f,$prefix$2,$pl$2);
  $xor450 = $fl$6 ^ 65536;
  _pad_208($f,48,$w$2,$add442,$xor450);
  _pad_208($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  _out($f,$a$2,$sub$ptr$sub434);
  $xor458 = $fl$6 ^ 8192;
  _pad_208($f,32,$w$2,$add442,$xor458);
  $1 = $incdec$ptr171;$cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;
 }
 L114: do {
  if ((label|0) == 87) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2210 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2210<<2)|0);
      $62 = load4($arrayidx470);
      $tobool471 = ($62|0)==(0);
      if ($tobool471) {
       $i$3207 = $i$2210;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2210<<3)|0);
      _pop_arg($add$ptr474,$62,$ap);
      $inc = (($i$2210) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2210 = $inc;
      } else {
       $retval$0 = 1;
       break L114;
      }
     }
     while(1) {
      $arrayidx482 = (($nl_type) + ($i$3207<<2)|0);
      $63 = load4($arrayidx482);
      $lnot484 = ($63|0)==(0);
      $inc489 = (($i$3207) + 1)|0;
      if (!($lnot484)) {
       $retval$0 = -1;
       break L114;
      }
      $cmp479 = ($inc489|0)<(10);
      if ($cmp479) {
       $i$3207 = $inc489;
      } else {
       $retval$0 = 1;
       break;
      }
     }
    }
   } else {
    $retval$0 = $cnt$1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _out($f,$s,$l) {
 $f = $f|0;
 $s = $s|0;
 $l = $l|0;
 var $0 = 0, $and = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($f);
 $and = $0 & 32;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  (___fwritex($s,$l,$f)|0);
 }
 return;
}
function _getint($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add = 0, $conv = 0, $conv4 = 0, $i$0$lcssa = 0, $i$07 = 0, $incdec$ptr = 0, $isdigit = 0, $isdigit6 = 0, $isdigittmp = 0, $isdigittmp5 = 0, $isdigittmp8 = 0, $mul = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($s);
 $1 = load1($0);
 $conv4 = $1 << 24 >> 24;
 $isdigittmp5 = (($conv4) + -48)|0;
 $isdigit6 = ($isdigittmp5>>>0)<(10);
 if ($isdigit6) {
  $2 = $0;$i$07 = 0;$isdigittmp8 = $isdigittmp5;
  while(1) {
   $mul = ($i$07*10)|0;
   $add = (($isdigittmp8) + ($mul))|0;
   $incdec$ptr = ((($2)) + 1|0);
   store4($s,$incdec$ptr);
   $3 = load1($incdec$ptr);
   $conv = $3 << 24 >> 24;
   $isdigittmp = (($conv) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $2 = $incdec$ptr;$i$07 = $add;$isdigittmp8 = $isdigittmp;
   } else {
    $i$0$lcssa = $add;
    break;
   }
  }
 } else {
  $i$0$lcssa = 0;
 }
 return ($i$0$lcssa|0);
}
function _pop_arg($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = i64(), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0;
 var $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv = i64(), $conv16 = 0, $conv17 = i64(), $conv22$mask = 0, $conv23 = i64(), $conv28 = 0, $conv29 = i64(), $conv34$mask = 0, $conv35 = i64();
 var $conv7 = i64(), $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($type>>>0)>(20);
 L1: do {
  if (!($cmp)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = load4($ap);
     $0 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $1 = (($0) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $2 = $1 & $expanded30;
     $3 = $2;
     $4 = load4($3);
     $arglist_next = ((($3)) + 4|0);
     store4($ap,$arglist_next);
     store4($arg,$4);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($ap);
     $5 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $6 = (($5) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $7 = $6 & $expanded37;
     $8 = $7;
     $9 = load4($8);
     $arglist_next3 = ((($8)) + 4|0);
     store4($ap,$arglist_next3);
     $conv = i64_sext($9);
     store8($arg,$conv);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($ap);
     $10 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $11 = (($10) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $12 = $11 & $expanded44;
     $13 = $12;
     $14 = load4($13);
     $arglist_next6 = ((($13)) + 4|0);
     store4($ap,$arglist_next6);
     $conv7 = i64_zext($14>>>0);
     store8($arg,$conv7);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($ap);
     $15 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $16 = (($15) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $17 = $16 & $expanded51;
     $18 = $17;
     $19 = load8($18);
     $arglist_next9 = ((($18)) + 8|0);
     store4($ap,$arglist_next9);
     store8($arg,$19);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($ap);
     $20 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $21 = (($20) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $22 = $21 & $expanded58;
     $23 = $22;
     $24 = load4($23);
     $arglist_next12 = ((($23)) + 4|0);
     store4($ap,$arglist_next12);
     $conv16 = $24&65535;
     $conv17 = i64_sext($conv16 << 16 >> 16);
     store8($arg,$conv17);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($ap);
     $25 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $26 = (($25) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $27 = $26 & $expanded65;
     $28 = $27;
     $29 = load4($28);
     $arglist_next15 = ((($28)) + 4|0);
     store4($ap,$arglist_next15);
     $conv22$mask = $29 & 65535;
     $conv23 = i64_zext($conv22$mask>>>0);
     store8($arg,$conv23);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($ap);
     $30 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $31 = (($30) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $32 = $31 & $expanded72;
     $33 = $32;
     $34 = load4($33);
     $arglist_next18 = ((($33)) + 4|0);
     store4($ap,$arglist_next18);
     $conv28 = $34&255;
     $conv29 = i64_sext($conv28 << 24 >> 24);
     store8($arg,$conv29);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($ap);
     $35 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $36 = (($35) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $37 = $36 & $expanded79;
     $38 = $37;
     $39 = load4($38);
     $arglist_next21 = ((($38)) + 4|0);
     store4($ap,$arglist_next21);
     $conv34$mask = $39 & 255;
     $conv35 = i64_zext($conv34$mask>>>0);
     store8($arg,$conv35);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($ap);
     $40 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $41 = (($40) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $42 = $41 & $expanded86;
     $43 = $42;
     $44 = loadd($43);
     $arglist_next24 = ((($43)) + 8|0);
     store4($ap,$arglist_next24);
     stored($arg,$44);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($ap);
     $45 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $46 = (($45) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $47 = $46 & $expanded93;
     $48 = $47;
     $49 = loadd($48);
     $arglist_next27 = ((($48)) + 8|0);
     store4($ap,$arglist_next27);
     stored($arg,$49);
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_x($x,$s,$lower) {
 $x = i64($x);
 $s = $s|0;
 $lower = $lower|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $conv1 = 0, $conv4 = 0, $idxprom = 0, $incdec$ptr = 0, $or = 0, $s$addr$0$lcssa = 0, $s$addr$06 = 0, $shr = i64(), $tobool = 0, $tobool5 = 0, $x$addr$07 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $tobool5 = i64_eq($x,i64_const(0,0));
 if ($tobool5) {
  $s$addr$0$lcssa = $s;
 } else {
  $s$addr$06 = $s;$x$addr$07 = $x;
  while(1) {
   $0 = i64_trunc($x$addr$07);
   $idxprom = $0 & 15;
   $arrayidx = (4214 + ($idxprom)|0);
   $1 = load1($arrayidx);
   $conv4 = $1&255;
   $or = $conv4 | $lower;
   $conv1 = $or&255;
   $incdec$ptr = ((($s$addr$06)) + -1|0);
   store1($incdec$ptr,$conv1);
   $shr = i64_lshr($x$addr$07,i64_const(4,0));
   $tobool = i64_eq($shr,i64_const(0,0));
   if ($tobool) {
    $s$addr$0$lcssa = $incdec$ptr;
    break;
   } else {
    $s$addr$06 = $incdec$ptr;$x$addr$07 = $shr;
   }
  }
 }
 return ($s$addr$0$lcssa|0);
}
function _fmt_o($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $1 = 0, $conv = 0, $incdec$ptr = 0, $s$addr$0$lcssa = 0, $s$addr$06 = 0, $shr = i64(), $tobool = 0, $tobool4 = 0, $x$addr$05 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $tobool4 = i64_eq($x,i64_const(0,0));
 if ($tobool4) {
  $s$addr$0$lcssa = $s;
 } else {
  $s$addr$06 = $s;$x$addr$05 = $x;
  while(1) {
   $0 = i64_trunc($x$addr$05)&255;
   $1 = $0 & 7;
   $conv = $1 | 48;
   $incdec$ptr = ((($s$addr$06)) + -1|0);
   store1($incdec$ptr,$conv);
   $shr = i64_lshr($x$addr$05,i64_const(3,0));
   $tobool = i64_eq($shr,i64_const(0,0));
   if ($tobool) {
    $s$addr$0$lcssa = $incdec$ptr;
    break;
   } else {
    $s$addr$06 = $incdec$ptr;$x$addr$05 = $shr;
   }
  }
 }
 return ($s$addr$0$lcssa|0);
}
function _fmt_u($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $1 = 0, $add5 = 0, $cmp = 0, $cmp11 = 0, $conv = 0, $conv6 = 0, $div = i64(), $div9 = 0, $extract$t = 0, $extract$t16 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem = i64(), $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0;
 var $x$addr$0$lcssa$off0 = 0, $x$addr$012 = i64(), $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp11 = i64_ugt($x,i64_const(4294967295,0));
 $extract$t = i64_trunc($x);
 if ($cmp11) {
  $s$addr$013 = $s;$x$addr$012 = $x;
  while(1) {
   $rem = i64_urem($x$addr$012,i64_const(10,0));
   $0 = i64_trunc($rem)&255;
   $conv = $0 | 48;
   $incdec$ptr = ((($s$addr$013)) + -1|0);
   store1($incdec$ptr,$conv);
   $div = i64_udiv($x$addr$012,i64_const(10,0));
   $cmp = i64_ugt($x$addr$012,i64_const(4294967295,9));
   if ($cmp) {
    $s$addr$013 = $incdec$ptr;$x$addr$012 = $div;
   } else {
    break;
   }
  }
  $extract$t16 = i64_trunc($div);
  $s$addr$0$lcssa = $incdec$ptr;$x$addr$0$lcssa$off0 = $extract$t16;
 } else {
  $s$addr$0$lcssa = $s;$x$addr$0$lcssa$off0 = $extract$t;
 }
 $tobool8 = ($x$addr$0$lcssa$off0|0)==(0);
 if ($tobool8) {
  $s$addr$1$lcssa = $s$addr$0$lcssa;
 } else {
  $s$addr$19 = $s$addr$0$lcssa;$y$010 = $x$addr$0$lcssa$off0;
  while(1) {
   $rem4 = (($y$010>>>0) % 10)&-1;
   $add5 = $rem4 | 48;
   $conv6 = $add5&255;
   $incdec$ptr7 = ((($s$addr$19)) + -1|0);
   store1($incdec$ptr7,$conv6);
   $div9 = (($y$010>>>0) / 10)&-1;
   $1 = ($y$010>>>0)<(10);
   if ($1) {
    $s$addr$1$lcssa = $incdec$ptr7;
    break;
   } else {
    $s$addr$19 = $incdec$ptr7;$y$010 = $div9;
   }
  }
 }
 return ($s$addr$1$lcssa|0);
}
function _strerror($e) {
 $e = $e|0;
 var $0 = 0, $call = 0, $call1 = 0, $locale = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___pthread_self_350()|0);
 $locale = ((($call)) + 188|0);
 $0 = load4($locale);
 $call1 = (___strerror_l($e,$0)|0);
 return ($call1|0);
}
function _memchr($src,$c,$n) {
 $src = $src|0;
 $c = $c|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and = 0, $and15 = 0, $and16 = 0, $and39 = 0, $cmp = 0, $cmp11 = 0, $cmp1132 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $conv1 = 0, $dec = 0;
 var $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $incdec$ptr33 = 0, $lnot = 0, $mul = 0, $n$addr$0$lcssa = 0, $n$addr$0$lcssa52 = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond42 = 0, $s$0$lcssa = 0, $s$0$lcssa53 = 0, $s$044 = 0, $s$128 = 0;
 var $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool2 = 0, $tobool2$lcssa = 0, $tobool241 = 0, $tobool25 = 0, $tobool2526 = 0, $tobool36 = 0, $tobool40 = 0, $w$0$lcssa = 0, $w$034 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $conv1 = $c & 255;
 $0 = $src;
 $and39 = $0 & 3;
 $tobool40 = ($and39|0)!=(0);
 $tobool241 = ($n|0)!=(0);
 $or$cond42 = $tobool241 & $tobool40;
 L1: do {
  if ($or$cond42) {
   $1 = $c&255;
   $n$addr$043 = $n;$s$044 = $src;
   while(1) {
    $2 = load1($s$044);
    $cmp = ($2<<24>>24)==($1<<24>>24);
    if ($cmp) {
     $n$addr$0$lcssa52 = $n$addr$043;$s$0$lcssa53 = $s$044;
     label = 6;
     break L1;
    }
    $incdec$ptr = ((($s$044)) + 1|0);
    $dec = (($n$addr$043) + -1)|0;
    $3 = $incdec$ptr;
    $and = $3 & 3;
    $tobool = ($and|0)!=(0);
    $tobool2 = ($dec|0)!=(0);
    $or$cond = $tobool2 & $tobool;
    if ($or$cond) {
     $n$addr$043 = $dec;$s$044 = $incdec$ptr;
    } else {
     $n$addr$0$lcssa = $dec;$s$0$lcssa = $incdec$ptr;$tobool2$lcssa = $tobool2;
     label = 5;
     break;
    }
   }
  } else {
   $n$addr$0$lcssa = $n;$s$0$lcssa = $src;$tobool2$lcssa = $tobool241;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($tobool2$lcssa) {
   $n$addr$0$lcssa52 = $n$addr$0$lcssa;$s$0$lcssa53 = $s$0$lcssa;
   label = 6;
  } else {
   $n$addr$3 = 0;$s$2 = $s$0$lcssa;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $4 = load1($s$0$lcssa53);
   $5 = $c&255;
   $cmp8 = ($4<<24>>24)==($5<<24>>24);
   if ($cmp8) {
    $n$addr$3 = $n$addr$0$lcssa52;$s$2 = $s$0$lcssa53;
   } else {
    $mul = Math_imul($conv1, 16843009)|0;
    $cmp1132 = ($n$addr$0$lcssa52>>>0)>(3);
    L11: do {
     if ($cmp1132) {
      $n$addr$133 = $n$addr$0$lcssa52;$w$034 = $s$0$lcssa53;
      while(1) {
       $6 = load4($w$034);
       $xor = $6 ^ $mul;
       $sub = (($xor) + -16843009)|0;
       $neg = $xor & -2139062144;
       $and15 = $neg ^ -2139062144;
       $and16 = $and15 & $sub;
       $lnot = ($and16|0)==(0);
       if (!($lnot)) {
        break;
       }
       $incdec$ptr21 = ((($w$034)) + 4|0);
       $sub22 = (($n$addr$133) + -4)|0;
       $cmp11 = ($sub22>>>0)>(3);
       if ($cmp11) {
        $n$addr$133 = $sub22;$w$034 = $incdec$ptr21;
       } else {
        $n$addr$1$lcssa = $sub22;$w$0$lcssa = $incdec$ptr21;
        label = 11;
        break L11;
       }
      }
      $n$addr$227 = $n$addr$133;$s$128 = $w$034;
     } else {
      $n$addr$1$lcssa = $n$addr$0$lcssa52;$w$0$lcssa = $s$0$lcssa53;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $tobool2526 = ($n$addr$1$lcssa|0)==(0);
     if ($tobool2526) {
      $n$addr$3 = 0;$s$2 = $w$0$lcssa;
      break;
     } else {
      $n$addr$227 = $n$addr$1$lcssa;$s$128 = $w$0$lcssa;
     }
    }
    while(1) {
     $7 = load1($s$128);
     $cmp28 = ($7<<24>>24)==($5<<24>>24);
     if ($cmp28) {
      $n$addr$3 = $n$addr$227;$s$2 = $s$128;
      break L8;
     }
     $incdec$ptr33 = ((($s$128)) + 1|0);
     $dec34 = (($n$addr$227) + -1)|0;
     $tobool25 = ($dec34|0)==(0);
     if ($tobool25) {
      $n$addr$3 = 0;$s$2 = $incdec$ptr33;
      break;
     } else {
      $n$addr$227 = $dec34;$s$128 = $incdec$ptr33;
     }
    }
   }
  }
 } while(0);
 $tobool36 = ($n$addr$3|0)!=(0);
 $cond = $tobool36 ? $s$2 : 0;
 return ($cond|0);
}
function _pad_208($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $0 = 0, $1 = 0, $2 = 0, $and = 0, $cmp = 0, $cmp3 = 0, $cmp38 = 0, $cond = 0, $l$addr$0$lcssa = 0, $l$addr$09 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $pad = sp;
 $and = $fl & 73728;
 $tobool = ($and|0)==(0);
 $cmp = ($w|0)>($l|0);
 $or$cond = $cmp & $tobool;
 if ($or$cond) {
  $sub = (($w) - ($l))|0;
  $0 = ($sub>>>0)<(256);
  $cond = $0 ? $sub : 256;
  _memset(($pad|0),($c|0),($cond|0))|0;
  $cmp38 = ($sub>>>0)>(255);
  if ($cmp38) {
   $1 = (($w) - ($l))|0;
   $l$addr$09 = $sub;
   while(1) {
    _out($f,$pad,256);
    $sub6 = (($l$addr$09) + -256)|0;
    $cmp3 = ($sub6>>>0)>(255);
    if ($cmp3) {
     $l$addr$09 = $sub6;
    } else {
     break;
    }
   }
   $2 = $1 & 255;
   $l$addr$0$lcssa = $2;
  } else {
   $l$addr$0$lcssa = $sub;
  }
  _out($f,$pad,$l$addr$0$lcssa);
 }
 STACKTOP = sp;return;
}
function _wctomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $call = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  $call = (_wcrtomb($s,$wc,0)|0);
  $retval$0 = $call;
 }
 return ($retval$0|0);
}
function _fmt_fp($f,$y,$w,$p,$fl,$t) {
 $f = $f|0;
 $y = +$y;
 $w = $w|0;
 $p = $p|0;
 $fl = $fl|0;
 $t = $t|0;
 var $$ = 0, $$$ = 0, $$$405 = 0.0, $$394$ = 0, $$397 = 0.0, $$405 = 0.0, $$p = 0, $$p$inc468 = 0, $$pr = 0, $$pr407 = 0, $$pre = 0, $$pre487 = 0, $$sub514 = 0, $$sub562 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $a$1$lcssa = 0, $a$1476 = 0, $a$2$ph = 0, $a$3$lcssa = 0, $a$3466 = 0, $a$5$lcssa = 0, $a$5448 = 0, $a$6 = 0, $a$8 = 0, $a$9$ph = 0, $add = 0, $add$ptr213 = 0, $add$ptr311 = 0, $add$ptr311$z$4 = 0, $add$ptr354 = 0;
 var $add$ptr358 = 0, $add$ptr373 = 0, $add$ptr442 = 0, $add$ptr442$z$3 = 0, $add$ptr65 = 0, $add$ptr671 = 0, $add$ptr742 = 0, $add$ptr756 = 0, $add113 = 0, $add150 = 0, $add150$pn = 0, $add165 = 0, $add240 = i64(), $add273 = 0, $add275 = 0, $add284 = 0, $add313 = 0, $add355 = 0, $add410 = 0.0, $add414 = 0;
 var $add477$neg = 0, $add561 = 0, $add608 = 0, $add612 = 0, $add620 = 0, $add653 = 0, $add653$sink406 = 0, $add67 = 0, $add737 = 0, $add810 = 0, $add87 = 0.0, $add90 = 0.0, $and = 0, $and12 = 0, $and134 = 0, $and27 = i64(), $and282 = 0, $and36 = 0, $and379 = 0, $and45 = 0;
 var $and483 = 0, $and610$pre$phiZ2D = 0, $and62 = 0, $arraydecay208$add$ptr213 = 0, $arrayidx = 0, $arrayidx117 = 0, $arrayidx251 = 0, $arrayidx453 = 0, $arrayidx489 = 0, $big = 0, $buf = 0, $call102 = 0, $call2 = i64(), $call26 = i64(), $call55 = 0.0, $call631 = 0, $call672 = 0, $call719 = 0, $call757 = 0, $carry$0471 = 0;
 var $carry262$0462 = 0, $cmp103 = 0, $cmp127 = 0, $cmp147 = 0, $cmp205 = 0, $cmp225 = 0, $cmp225474 = 0, $cmp235 = 0, $cmp235470 = 0, $cmp249 = 0, $cmp259 = 0, $cmp259464 = 0, $cmp277 = 0, $cmp277460 = 0, $cmp28 = 0, $cmp299 = 0, $cmp308 = 0, $cmp315 = 0, $cmp324 = 0, $cmp324456 = 0;
 var $cmp333 = 0, $cmp338 = 0, $cmp350 = 0, $cmp363452 = 0, $cmp374 = 0, $cmp38 = 0, $cmp385 = 0, $cmp390 = 0, $cmp403 = 0, $cmp411 = 0, $cmp416 = 0, $cmp416446 = 0, $cmp420 = 0, $cmp433 = 0, $cmp433442 = 0, $cmp443 = 0, $cmp450 = 0, $cmp450$lcssa = 0, $cmp470 = 0, $cmp473 = 0;
 var $cmp495 = 0, $cmp495438 = 0, $cmp505 = 0, $cmp528 = 0, $cmp577 = 0, $cmp59 = 0, $cmp614 = 0, $cmp617 = 0, $cmp623 = 0, $cmp636 = 0, $cmp636433 = 0, $cmp660 = 0, $cmp665 = 0, $cmp673 = 0, $cmp678 = 0, $cmp678419 = 0, $cmp68 = 0, $cmp686 = 0, $cmp707 = 0, $cmp707414 = 0;
 var $cmp710 = 0, $cmp710415 = 0, $cmp722 = 0, $cmp722411 = 0, $cmp745 = 0, $cmp748 = 0, $cmp748427 = 0, $cmp760 = 0, $cmp765 = 0, $cmp770 = 0, $cmp770423 = 0, $cmp777 = 0, $cmp790 = 0, $cmp818 = 0, $cmp82 = 0, $cmp94 = 0, $cond = 0, $cond100 = 0, $cond233 = 0, $cond271 = 0;
 var $cond304 = 0, $cond43 = 0, $cond629 = 0, $cond732 = 0, $cond800 = 0, $conv101 = i64(), $conv111 = 0, $conv114 = 0, $conv116 = 0, $conv118393 = 0, $conv121 = 0, $conv123 = 0.0, $conv216 = 0, $conv218 = 0.0, $conv238 = i64(), $conv239 = i64(), $conv241 = 0, $conv242 = 0, $conv630 = i64(), $conv644 = 0;
 var $conv646 = 0, $conv669 = i64(), $conv716 = i64(), $conv754 = i64(), $d$0 = 0, $d$0469 = 0, $d$0472 = 0, $d$1461 = 0, $d$4 = 0, $d$5422 = 0, $d$6416 = 0, $d$7428 = 0, $dec = 0, $dec476 = 0, $dec481 = 0, $dec78 = 0, $div = i64(), $div274 = 0, $div356 = 0, $div378 = 0;
 var $div384 = 0, $e$0458 = 0, $e$1 = 0, $e$2444 = 0, $e$4 = 0, $e$5$ph = 0, $e2 = 0, $ebuf0 = 0, $estr$0 = 0, $estr$1$lcssa = 0, $estr$1434 = 0, $estr$2 = 0, $exitcond = 0, $i$0457 = 0, $i$1$lcssa = 0, $i$1453 = 0, $i$2443 = 0, $i$3439 = 0, $inc = 0, $inc425 = 0;
 var $inc438 = 0, $inc468 = 0, $inc500 = 0, $incdec$ptr106 = 0, $incdec$ptr112 = 0, $incdec$ptr115 = 0, $incdec$ptr122 = 0, $incdec$ptr137 = 0, $incdec$ptr217 = 0, $incdec$ptr246 = 0, $incdec$ptr288 = 0, $incdec$ptr292 = 0, $incdec$ptr292$a$3 = 0, $incdec$ptr292$a$3492 = 0, $incdec$ptr292$a$3494 = 0, $incdec$ptr292491 = 0, $incdec$ptr296 = 0, $incdec$ptr419 = 0, $incdec$ptr419$sink$lcssa = 0, $incdec$ptr419$sink447 = 0;
 var $incdec$ptr423 = 0, $incdec$ptr639 = 0, $incdec$ptr645 = 0, $incdec$ptr647 = 0, $incdec$ptr681 = 0, $incdec$ptr689 = 0, $incdec$ptr698 = 0, $incdec$ptr725 = 0, $incdec$ptr734 = 0, $incdec$ptr763 = 0, $incdec$ptr773 = 0, $incdec$ptr776 = 0, $incdec$ptr808 = 0, $j$0 = 0, $j$0451 = 0, $j$0454 = 0, $j$1440 = 0, $j$2 = 0, $l$0 = 0, $l$1 = 0;
 var $land$ext$neg = 0, $lnot = 0, $lnot455 = 0, $lor$ext = 0, $mul = 0.0, $mul125 = 0.0, $mul202 = 0.0, $mul220 = 0.0, $mul286 = 0, $mul322 = 0, $mul328 = 0, $mul335 = 0, $mul349 = 0, $mul367 = 0, $mul406 = 0.0, $mul406$$397 = 0.0, $mul407 = 0.0, $mul407$$$405 = 0.0, $mul431 = 0, $mul437 = 0;
 var $mul499 = 0, $mul513 = 0, $mul80 = 0.0, $narrow = 0, $not$tobool341 = 0, $notlhs = 0, $notrhs = 0, $or = 0, $or$cond = 0, $or$cond1$not = 0, $or$cond2 = 0, $or$cond395 = 0, $or$cond396 = 0, $or$cond398 = 0, $or$cond402 = 0, $or120 = 0, $or504 = 0, $or613 = 0, $p$addr$2 = 0, $p$addr$2$$sub514399 = 0;
 var $p$addr$2$$sub562400 = 0, $p$addr$3 = 0, $p$addr$4$lcssa = 0, $p$addr$4417 = 0, $p$addr$5$lcssa = 0, $p$addr$5429 = 0, $pl$0 = 0, $prefix$0 = 0, $prefix$0$add$ptr65 = 0, $r$0$a$9 = 0, $re$1410 = 0, $rem = i64(), $rem360 = 0, $rem370 = 0, $rem494 = 0, $rem494437 = 0, $round$0409 = 0.0, $round377$1 = 0.0, $s$0 = 0, $s$1 = 0;
 var $s35$0 = 0, $s668$0420 = 0, $s668$1 = 0, $s715$0$lcssa = 0, $s715$0412 = 0, $s753$0 = 0, $s753$1424 = 0, $s753$2 = 0, $scevgep483 = 0, $scevgep483484 = 0, $sh_prom = i64(), $shl = i64(), $shl280 = 0, $shr283 = 0, $shr285 = 0, $small$1 = 0.0, $sub = 0.0, $sub$ptr$div = 0, $sub$ptr$div321 = 0, $sub$ptr$div347 = 0;
 var $sub$ptr$div430 = 0, $sub$ptr$div511 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast143 = 0, $sub$ptr$lhs$cast151 = 0, $sub$ptr$lhs$cast305 = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast344 = 0, $sub$ptr$lhs$cast508 = 0, $sub$ptr$lhs$cast633 = 0, $sub$ptr$lhs$cast694 = 0, $sub$ptr$lhs$cast787 = 0, $sub$ptr$lhs$cast811 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast152 = 0, $sub$ptr$rhs$cast306 = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast428 = 0, $sub$ptr$rhs$cast634 = 0, $sub$ptr$rhs$cast634431 = 0;
 var $sub$ptr$rhs$cast649 = 0, $sub$ptr$rhs$cast695 = 0, $sub$ptr$rhs$cast788 = 0, $sub$ptr$rhs$cast812 = 0, $sub$ptr$sub = 0, $sub$ptr$sub145 = 0, $sub$ptr$sub153 = 0, $sub$ptr$sub307 = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub346 = 0, $sub$ptr$sub429 = 0, $sub$ptr$sub510 = 0, $sub$ptr$sub635 = 0, $sub$ptr$sub635432 = 0, $sub$ptr$sub650 = 0, $sub$ptr$sub650$pn = 0, $sub$ptr$sub696 = 0, $sub$ptr$sub789 = 0, $sub$ptr$sub813 = 0, $sub124 = 0.0;
 var $sub146 = 0, $sub181 = 0, $sub203 = 0, $sub219 = 0.0, $sub256 = 0, $sub264 = 0, $sub281 = 0, $sub336 = 0, $sub343 = 0, $sub357 = 0, $sub409 = 0, $sub478 = 0, $sub480 = 0, $sub514 = 0, $sub562 = 0, $sub626$le = 0, $sub735 = 0, $sub74 = 0, $sub806 = 0, $sub85 = 0.0;
 var $sub86 = 0.0, $sub88 = 0.0, $sub91 = 0.0, $sub97 = 0, $t$addr$0 = 0, $t$addr$1 = 0, $tobool13 = 0, $tobool135 = 0, $tobool139 = 0, $tobool140 = 0, $tobool222 = 0, $tobool244 = 0, $tobool290 = 0, $tobool290490 = 0, $tobool294 = 0, $tobool341 = 0, $tobool37 = 0, $tobool371 = 0, $tobool380 = 0, $tobool400 = 0;
 var $tobool484 = 0, $tobool490 = 0, $tobool5 = 0, $tobool56 = 0, $tobool63 = 0, $tobool76 = 0, $tobool76488 = 0, $tobool781 = 0, $tobool79 = 0, $tobool9 = 0, $w$add653 = 0, $xor = 0, $xor167 = 0, $xor186 = 0, $xor655 = 0, $xor816 = 0, $y$addr$0 = 0.0, $y$addr$1 = 0.0, $y$addr$2 = 0.0, $y$addr$3 = 0.0;
 var $y$addr$4 = 0.0, $z$0 = 0, $z$1$lcssa = 0, $z$1475 = 0, $z$2 = 0, $z$3$lcssa = 0, $z$3465 = 0, $z$4 = 0, $z$7 = 0, $z$7$add$ptr742 = 0, $z$7$ph = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0;
 $big = sp + 8|0;
 $e2 = sp;
 $buf = sp + 524|0;
 $sub$ptr$rhs$cast = $buf;
 $ebuf0 = sp + 512|0;
 store4($e2,0);
 $arrayidx = ((($ebuf0)) + 12|0);
 $call2 = (i64(___DOUBLE_BITS_209($y)));
 $tobool5 = i64_slt($call2,i64_const(0,0));
 if ($tobool5) {
  $sub = -$y;
  $pl$0 = 1;$prefix$0 = 4183;$y$addr$0 = $sub;
 } else {
  $and = $fl & 2048;
  $tobool9 = ($and|0)==(0);
  $and12 = $fl & 1;
  $tobool13 = ($and12|0)==(0);
  $$ = $tobool13 ? (4184) : (4189);
  $$$ = $tobool9 ? $$ : (4186);
  $0 = $fl & 2049;
  $narrow = ($0|0)!=(0);
  $$394$ = $narrow&1;
  $pl$0 = $$394$;$prefix$0 = $$$;$y$addr$0 = $y;
 }
 $call26 = (i64(___DOUBLE_BITS_209($y$addr$0)));
 $and27 = i64_and($call26,i64_const(0,2146435072));
 $cmp28 = i64_ult($and27,i64_const(0,2146435072));
 do {
  if ($cmp28) {
   $call55 = (+_frexpl($y$addr$0,$e2));
   $mul = $call55 * 2.0;
   $tobool56 = $mul != 0.0;
   if ($tobool56) {
    $1 = load4($e2);
    $dec = (($1) + -1)|0;
    store4($e2,$dec);
   }
   $or = $t | 32;
   $cmp59 = ($or|0)==(97);
   if ($cmp59) {
    $and62 = $t & 32;
    $tobool63 = ($and62|0)==(0);
    $add$ptr65 = ((($prefix$0)) + 9|0);
    $prefix$0$add$ptr65 = $tobool63 ? $prefix$0 : $add$ptr65;
    $add67 = $pl$0 | 2;
    $2 = ($p>>>0)>(11);
    $sub74 = (12 - ($p))|0;
    $tobool76488 = ($sub74|0)==(0);
    $tobool76 = $2 | $tobool76488;
    do {
     if ($tobool76) {
      $y$addr$1 = $mul;
     } else {
      $re$1410 = $sub74;$round$0409 = 8.0;
      while(1) {
       $dec78 = (($re$1410) + -1)|0;
       $mul80 = $round$0409 * 16.0;
       $tobool79 = ($dec78|0)==(0);
       if ($tobool79) {
        break;
       } else {
        $re$1410 = $dec78;$round$0409 = $mul80;
       }
      }
      $3 = load1($prefix$0$add$ptr65);
      $cmp82 = ($3<<24>>24)==(45);
      if ($cmp82) {
       $sub85 = -$mul;
       $sub86 = $sub85 - $mul80;
       $add87 = $mul80 + $sub86;
       $sub88 = -$add87;
       $y$addr$1 = $sub88;
       break;
      } else {
       $add90 = $mul + $mul80;
       $sub91 = $add90 - $mul80;
       $y$addr$1 = $sub91;
       break;
      }
     }
    } while(0);
    $4 = load4($e2);
    $cmp94 = ($4|0)<(0);
    $sub97 = (0 - ($4))|0;
    $cond100 = $cmp94 ? $sub97 : $4;
    $conv101 = i64_sext($cond100);
    $call102 = (_fmt_u($conv101,$arrayidx)|0);
    $cmp103 = ($call102|0)==($arrayidx|0);
    if ($cmp103) {
     $incdec$ptr106 = ((($ebuf0)) + 11|0);
     store1($incdec$ptr106,48);
     $estr$0 = $incdec$ptr106;
    } else {
     $estr$0 = $call102;
    }
    $5 = $4 >> 31;
    $6 = $5 & 2;
    $7 = (($6) + 43)|0;
    $conv111 = $7&255;
    $incdec$ptr112 = ((($estr$0)) + -1|0);
    store1($incdec$ptr112,$conv111);
    $add113 = (($t) + 15)|0;
    $conv114 = $add113&255;
    $incdec$ptr115 = ((($estr$0)) + -2|0);
    store1($incdec$ptr115,$conv114);
    $notrhs = ($p|0)<(1);
    $and134 = $fl & 8;
    $tobool135 = ($and134|0)==(0);
    $s$0 = $buf;$y$addr$2 = $y$addr$1;
    while(1) {
     $conv116 = (~~(($y$addr$2)));
     $arrayidx117 = (4214 + ($conv116)|0);
     $8 = load1($arrayidx117);
     $conv118393 = $8&255;
     $or120 = $conv118393 | $and62;
     $conv121 = $or120&255;
     $incdec$ptr122 = ((($s$0)) + 1|0);
     store1($s$0,$conv121);
     $conv123 = (+($conv116|0));
     $sub124 = $y$addr$2 - $conv123;
     $mul125 = $sub124 * 16.0;
     $sub$ptr$lhs$cast = $incdec$ptr122;
     $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
     $cmp127 = ($sub$ptr$sub|0)==(1);
     if ($cmp127) {
      $notlhs = $mul125 == 0.0;
      $or$cond1$not = $notrhs & $notlhs;
      $or$cond = $tobool135 & $or$cond1$not;
      if ($or$cond) {
       $s$1 = $incdec$ptr122;
      } else {
       $incdec$ptr137 = ((($s$0)) + 2|0);
       store1($incdec$ptr122,46);
       $s$1 = $incdec$ptr137;
      }
     } else {
      $s$1 = $incdec$ptr122;
     }
     $tobool139 = $mul125 != 0.0;
     if ($tobool139) {
      $s$0 = $s$1;$y$addr$2 = $mul125;
     } else {
      break;
     }
    }
    $tobool140 = ($p|0)!=(0);
    $sub$ptr$rhs$cast152 = $incdec$ptr115;
    $sub$ptr$lhs$cast151 = $arrayidx;
    $sub$ptr$lhs$cast143 = $s$1;
    $sub$ptr$sub145 = (($sub$ptr$lhs$cast143) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$sub153 = (($sub$ptr$lhs$cast151) - ($sub$ptr$rhs$cast152))|0;
    $sub146 = (($sub$ptr$sub145) + -2)|0;
    $cmp147 = ($sub146|0)<($p|0);
    $or$cond395 = $tobool140 & $cmp147;
    $add150 = (($p) + 2)|0;
    $add150$pn = $or$cond395 ? $add150 : $sub$ptr$sub145;
    $l$0 = (($sub$ptr$sub153) + ($add67))|0;
    $add165 = (($l$0) + ($add150$pn))|0;
    _pad_208($f,32,$w,$add165,$fl);
    _out($f,$prefix$0$add$ptr65,$add67);
    $xor167 = $fl ^ 65536;
    _pad_208($f,48,$w,$add165,$xor167);
    _out($f,$buf,$sub$ptr$sub145);
    $sub181 = (($add150$pn) - ($sub$ptr$sub145))|0;
    _pad_208($f,48,$sub181,0,0);
    _out($f,$incdec$ptr115,$sub$ptr$sub153);
    $xor186 = $fl ^ 8192;
    _pad_208($f,32,$w,$add165,$xor186);
    $add653$sink406 = $add165;
    break;
   }
   $cmp68 = ($p|0)<(0);
   $$p = $cmp68 ? 6 : $p;
   if ($tobool56) {
    $mul202 = $mul * 268435456.0;
    $9 = load4($e2);
    $sub203 = (($9) + -28)|0;
    store4($e2,$sub203);
    $$pr = $sub203;$y$addr$3 = $mul202;
   } else {
    $$pre = load4($e2);
    $$pr = $$pre;$y$addr$3 = $mul;
   }
   $cmp205 = ($$pr|0)<(0);
   $add$ptr213 = ((($big)) + 288|0);
   $arraydecay208$add$ptr213 = $cmp205 ? $big : $add$ptr213;
   $y$addr$4 = $y$addr$3;$z$0 = $arraydecay208$add$ptr213;
   while(1) {
    $conv216 = (~~(($y$addr$4))>>>0);
    store4($z$0,$conv216);
    $incdec$ptr217 = ((($z$0)) + 4|0);
    $conv218 = (+($conv216>>>0));
    $sub219 = $y$addr$4 - $conv218;
    $mul220 = $sub219 * 1.0E+9;
    $tobool222 = $mul220 != 0.0;
    if ($tobool222) {
     $y$addr$4 = $mul220;$z$0 = $incdec$ptr217;
    } else {
     break;
    }
   }
   $cmp225474 = ($$pr|0)>(0);
   if ($cmp225474) {
    $10 = $$pr;$a$1476 = $arraydecay208$add$ptr213;$z$1475 = $incdec$ptr217;
    while(1) {
     $11 = ($10|0)<(29);
     $cond233 = $11 ? $10 : 29;
     $d$0469 = ((($z$1475)) + -4|0);
     $cmp235470 = ($d$0469>>>0)<($a$1476>>>0);
     if ($cmp235470) {
      $a$2$ph = $a$1476;
     } else {
      $sh_prom = i64_zext($cond233>>>0);
      $carry$0471 = 0;$d$0472 = $d$0469;
      while(1) {
       $12 = load4($d$0472);
       $conv238 = i64_zext($12>>>0);
       $shl = i64_shl($conv238,$sh_prom);
       $conv239 = i64_zext($carry$0471>>>0);
       $add240 = i64_add($shl,$conv239);
       $rem = i64_urem($add240,i64_const(1000000000,0));
       $conv241 = i64_trunc($rem);
       store4($d$0472,$conv241);
       $div = i64_udiv($add240,i64_const(1000000000,0));
       $conv242 = i64_trunc($div);
       $d$0 = ((($d$0472)) + -4|0);
       $cmp235 = ($d$0>>>0)<($a$1476>>>0);
       if ($cmp235) {
        break;
       } else {
        $carry$0471 = $conv242;$d$0472 = $d$0;
       }
      }
      $tobool244 = ($conv242|0)==(0);
      if ($tobool244) {
       $a$2$ph = $a$1476;
      } else {
       $incdec$ptr246 = ((($a$1476)) + -4|0);
       store4($incdec$ptr246,$conv242);
       $a$2$ph = $incdec$ptr246;
      }
     }
     $z$2 = $z$1475;
     while(1) {
      $cmp249 = ($z$2>>>0)>($a$2$ph>>>0);
      if (!($cmp249)) {
       break;
      }
      $arrayidx251 = ((($z$2)) + -4|0);
      $13 = load4($arrayidx251);
      $lnot = ($13|0)==(0);
      if ($lnot) {
       $z$2 = $arrayidx251;
      } else {
       break;
      }
     }
     $14 = load4($e2);
     $sub256 = (($14) - ($cond233))|0;
     store4($e2,$sub256);
     $cmp225 = ($sub256|0)>(0);
     if ($cmp225) {
      $10 = $sub256;$a$1476 = $a$2$ph;$z$1475 = $z$2;
     } else {
      $$pr407 = $sub256;$a$1$lcssa = $a$2$ph;$z$1$lcssa = $z$2;
      break;
     }
    }
   } else {
    $$pr407 = $$pr;$a$1$lcssa = $arraydecay208$add$ptr213;$z$1$lcssa = $incdec$ptr217;
   }
   $cmp259464 = ($$pr407|0)<(0);
   if ($cmp259464) {
    $add273 = (($$p) + 25)|0;
    $div274 = (($add273|0) / 9)&-1;
    $add275 = (($div274) + 1)|0;
    $cmp299 = ($or|0)==(102);
    $15 = $$pr407;$a$3466 = $a$1$lcssa;$z$3465 = $z$1$lcssa;
    while(1) {
     $sub264 = (0 - ($15))|0;
     $16 = ($sub264|0)<(9);
     $cond271 = $16 ? $sub264 : 9;
     $cmp277460 = ($a$3466>>>0)<($z$3465>>>0);
     if ($cmp277460) {
      $shl280 = 1 << $cond271;
      $sub281 = (($shl280) + -1)|0;
      $shr285 = 1000000000 >>> $cond271;
      $carry262$0462 = 0;$d$1461 = $a$3466;
      while(1) {
       $18 = load4($d$1461);
       $and282 = $18 & $sub281;
       $shr283 = $18 >>> $cond271;
       $add284 = (($shr283) + ($carry262$0462))|0;
       store4($d$1461,$add284);
       $mul286 = Math_imul($and282, $shr285)|0;
       $incdec$ptr288 = ((($d$1461)) + 4|0);
       $cmp277 = ($incdec$ptr288>>>0)<($z$3465>>>0);
       if ($cmp277) {
        $carry262$0462 = $mul286;$d$1461 = $incdec$ptr288;
       } else {
        break;
       }
      }
      $19 = load4($a$3466);
      $tobool290 = ($19|0)==(0);
      $incdec$ptr292 = ((($a$3466)) + 4|0);
      $incdec$ptr292$a$3 = $tobool290 ? $incdec$ptr292 : $a$3466;
      $tobool294 = ($mul286|0)==(0);
      if ($tobool294) {
       $incdec$ptr292$a$3494 = $incdec$ptr292$a$3;$z$4 = $z$3465;
      } else {
       $incdec$ptr296 = ((($z$3465)) + 4|0);
       store4($z$3465,$mul286);
       $incdec$ptr292$a$3494 = $incdec$ptr292$a$3;$z$4 = $incdec$ptr296;
      }
     } else {
      $17 = load4($a$3466);
      $tobool290490 = ($17|0)==(0);
      $incdec$ptr292491 = ((($a$3466)) + 4|0);
      $incdec$ptr292$a$3492 = $tobool290490 ? $incdec$ptr292491 : $a$3466;
      $incdec$ptr292$a$3494 = $incdec$ptr292$a$3492;$z$4 = $z$3465;
     }
     $cond304 = $cmp299 ? $arraydecay208$add$ptr213 : $incdec$ptr292$a$3494;
     $sub$ptr$lhs$cast305 = $z$4;
     $sub$ptr$rhs$cast306 = $cond304;
     $sub$ptr$sub307 = (($sub$ptr$lhs$cast305) - ($sub$ptr$rhs$cast306))|0;
     $sub$ptr$div = $sub$ptr$sub307 >> 2;
     $cmp308 = ($sub$ptr$div|0)>($add275|0);
     $add$ptr311 = (($cond304) + ($add275<<2)|0);
     $add$ptr311$z$4 = $cmp308 ? $add$ptr311 : $z$4;
     $20 = load4($e2);
     $add313 = (($20) + ($cond271))|0;
     store4($e2,$add313);
     $cmp259 = ($add313|0)<(0);
     if ($cmp259) {
      $15 = $add313;$a$3466 = $incdec$ptr292$a$3494;$z$3465 = $add$ptr311$z$4;
     } else {
      $a$3$lcssa = $incdec$ptr292$a$3494;$z$3$lcssa = $add$ptr311$z$4;
      break;
     }
    }
   } else {
    $a$3$lcssa = $a$1$lcssa;$z$3$lcssa = $z$1$lcssa;
   }
   $cmp315 = ($a$3$lcssa>>>0)<($z$3$lcssa>>>0);
   $sub$ptr$lhs$cast318 = $arraydecay208$add$ptr213;
   if ($cmp315) {
    $sub$ptr$rhs$cast319 = $a$3$lcssa;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $sub$ptr$div321 = $sub$ptr$sub320 >> 2;
    $mul322 = ($sub$ptr$div321*9)|0;
    $21 = load4($a$3$lcssa);
    $cmp324456 = ($21>>>0)<(10);
    if ($cmp324456) {
     $e$1 = $mul322;
    } else {
     $e$0458 = $mul322;$i$0457 = 10;
     while(1) {
      $mul328 = ($i$0457*10)|0;
      $inc = (($e$0458) + 1)|0;
      $cmp324 = ($21>>>0)<($mul328>>>0);
      if ($cmp324) {
       $e$1 = $inc;
       break;
      } else {
       $e$0458 = $inc;$i$0457 = $mul328;
      }
     }
    }
   } else {
    $e$1 = 0;
   }
   $cmp333 = ($or|0)!=(102);
   $mul335 = $cmp333 ? $e$1 : 0;
   $sub336 = (($$p) - ($mul335))|0;
   $cmp338 = ($or|0)==(103);
   $tobool341 = ($$p|0)!=(0);
   $22 = $tobool341 & $cmp338;
   $land$ext$neg = $22 << 31 >> 31;
   $sub343 = (($sub336) + ($land$ext$neg))|0;
   $sub$ptr$lhs$cast344 = $z$3$lcssa;
   $sub$ptr$sub346 = (($sub$ptr$lhs$cast344) - ($sub$ptr$lhs$cast318))|0;
   $sub$ptr$div347 = $sub$ptr$sub346 >> 2;
   $23 = ($sub$ptr$div347*9)|0;
   $mul349 = (($23) + -9)|0;
   $cmp350 = ($sub343|0)<($mul349|0);
   if ($cmp350) {
    $add$ptr354 = ((($arraydecay208$add$ptr213)) + 4|0);
    $add355 = (($sub343) + 9216)|0;
    $div356 = (($add355|0) / 9)&-1;
    $sub357 = (($div356) + -1024)|0;
    $add$ptr358 = (($add$ptr354) + ($sub357<<2)|0);
    $rem360 = (($add355|0) % 9)&-1;
    $j$0451 = (($rem360) + 1)|0;
    $cmp363452 = ($j$0451|0)<(9);
    if ($cmp363452) {
     $i$1453 = 10;$j$0454 = $j$0451;
     while(1) {
      $mul367 = ($i$1453*10)|0;
      $j$0 = (($j$0454) + 1)|0;
      $exitcond = ($j$0|0)==(9);
      if ($exitcond) {
       $i$1$lcssa = $mul367;
       break;
      } else {
       $i$1453 = $mul367;$j$0454 = $j$0;
      }
     }
    } else {
     $i$1$lcssa = 10;
    }
    $24 = load4($add$ptr358);
    $rem370 = (($24>>>0) % ($i$1$lcssa>>>0))&-1;
    $tobool371 = ($rem370|0)==(0);
    $add$ptr373 = ((($add$ptr358)) + 4|0);
    $cmp374 = ($add$ptr373|0)==($z$3$lcssa|0);
    $or$cond396 = $cmp374 & $tobool371;
    if ($or$cond396) {
     $a$8 = $a$3$lcssa;$d$4 = $add$ptr358;$e$4 = $e$1;
    } else {
     $div378 = (($24>>>0) / ($i$1$lcssa>>>0))&-1;
     $and379 = $div378 & 1;
     $tobool380 = ($and379|0)==(0);
     $$397 = $tobool380 ? 9007199254740992.0 : 9007199254740994.0;
     $div384 = (($i$1$lcssa|0) / 2)&-1;
     $cmp385 = ($rem370>>>0)<($div384>>>0);
     $cmp390 = ($rem370|0)==($div384|0);
     $or$cond398 = $cmp374 & $cmp390;
     $$405 = $or$cond398 ? 1.0 : 1.5;
     $$$405 = $cmp385 ? 0.5 : $$405;
     $tobool400 = ($pl$0|0)==(0);
     if ($tobool400) {
      $round377$1 = $$397;$small$1 = $$$405;
     } else {
      $25 = load1($prefix$0);
      $cmp403 = ($25<<24>>24)==(45);
      $mul406 = -$$397;
      $mul407 = -$$$405;
      $mul406$$397 = $cmp403 ? $mul406 : $$397;
      $mul407$$$405 = $cmp403 ? $mul407 : $$$405;
      $round377$1 = $mul406$$397;$small$1 = $mul407$$$405;
     }
     $sub409 = (($24) - ($rem370))|0;
     store4($add$ptr358,$sub409);
     $add410 = $round377$1 + $small$1;
     $cmp411 = $add410 != $round377$1;
     if ($cmp411) {
      $add414 = (($sub409) + ($i$1$lcssa))|0;
      store4($add$ptr358,$add414);
      $cmp416446 = ($add414>>>0)>(999999999);
      if ($cmp416446) {
       $a$5448 = $a$3$lcssa;$incdec$ptr419$sink447 = $add$ptr358;
       while(1) {
        $incdec$ptr419 = ((($incdec$ptr419$sink447)) + -4|0);
        store4($incdec$ptr419$sink447,0);
        $cmp420 = ($incdec$ptr419>>>0)<($a$5448>>>0);
        if ($cmp420) {
         $incdec$ptr423 = ((($a$5448)) + -4|0);
         store4($incdec$ptr423,0);
         $a$6 = $incdec$ptr423;
        } else {
         $a$6 = $a$5448;
        }
        $26 = load4($incdec$ptr419);
        $inc425 = (($26) + 1)|0;
        store4($incdec$ptr419,$inc425);
        $cmp416 = ($inc425>>>0)>(999999999);
        if ($cmp416) {
         $a$5448 = $a$6;$incdec$ptr419$sink447 = $incdec$ptr419;
        } else {
         $a$5$lcssa = $a$6;$incdec$ptr419$sink$lcssa = $incdec$ptr419;
         break;
        }
       }
      } else {
       $a$5$lcssa = $a$3$lcssa;$incdec$ptr419$sink$lcssa = $add$ptr358;
      }
      $sub$ptr$rhs$cast428 = $a$5$lcssa;
      $sub$ptr$sub429 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast428))|0;
      $sub$ptr$div430 = $sub$ptr$sub429 >> 2;
      $mul431 = ($sub$ptr$div430*9)|0;
      $27 = load4($a$5$lcssa);
      $cmp433442 = ($27>>>0)<(10);
      if ($cmp433442) {
       $a$8 = $a$5$lcssa;$d$4 = $incdec$ptr419$sink$lcssa;$e$4 = $mul431;
      } else {
       $e$2444 = $mul431;$i$2443 = 10;
       while(1) {
        $mul437 = ($i$2443*10)|0;
        $inc438 = (($e$2444) + 1)|0;
        $cmp433 = ($27>>>0)<($mul437>>>0);
        if ($cmp433) {
         $a$8 = $a$5$lcssa;$d$4 = $incdec$ptr419$sink$lcssa;$e$4 = $inc438;
         break;
        } else {
         $e$2444 = $inc438;$i$2443 = $mul437;
        }
       }
      }
     } else {
      $a$8 = $a$3$lcssa;$d$4 = $add$ptr358;$e$4 = $e$1;
     }
    }
    $add$ptr442 = ((($d$4)) + 4|0);
    $cmp443 = ($z$3$lcssa>>>0)>($add$ptr442>>>0);
    $add$ptr442$z$3 = $cmp443 ? $add$ptr442 : $z$3$lcssa;
    $a$9$ph = $a$8;$e$5$ph = $e$4;$z$7$ph = $add$ptr442$z$3;
   } else {
    $a$9$ph = $a$3$lcssa;$e$5$ph = $e$1;$z$7$ph = $z$3$lcssa;
   }
   $z$7 = $z$7$ph;
   while(1) {
    $cmp450 = ($z$7>>>0)>($a$9$ph>>>0);
    if (!($cmp450)) {
     $cmp450$lcssa = 0;
     break;
    }
    $arrayidx453 = ((($z$7)) + -4|0);
    $28 = load4($arrayidx453);
    $lnot455 = ($28|0)==(0);
    if ($lnot455) {
     $z$7 = $arrayidx453;
    } else {
     $cmp450$lcssa = 1;
     break;
    }
   }
   $sub626$le = (0 - ($e$5$ph))|0;
   do {
    if ($cmp338) {
     $not$tobool341 = $tobool341 ^ 1;
     $inc468 = $not$tobool341&1;
     $$p$inc468 = (($inc468) + ($$p))|0;
     $cmp470 = ($$p$inc468|0)>($e$5$ph|0);
     $cmp473 = ($e$5$ph|0)>(-5);
     $or$cond2 = $cmp470 & $cmp473;
     if ($or$cond2) {
      $dec476 = (($t) + -1)|0;
      $add477$neg = (($$p$inc468) + -1)|0;
      $sub478 = (($add477$neg) - ($e$5$ph))|0;
      $p$addr$2 = $sub478;$t$addr$0 = $dec476;
     } else {
      $sub480 = (($t) + -2)|0;
      $dec481 = (($$p$inc468) + -1)|0;
      $p$addr$2 = $dec481;$t$addr$0 = $sub480;
     }
     $and483 = $fl & 8;
     $tobool484 = ($and483|0)==(0);
     if ($tobool484) {
      if ($cmp450$lcssa) {
       $arrayidx489 = ((($z$7)) + -4|0);
       $29 = load4($arrayidx489);
       $tobool490 = ($29|0)==(0);
       if ($tobool490) {
        $j$2 = 9;
       } else {
        $rem494437 = (($29>>>0) % 10)&-1;
        $cmp495438 = ($rem494437|0)==(0);
        if ($cmp495438) {
         $i$3439 = 10;$j$1440 = 0;
         while(1) {
          $mul499 = ($i$3439*10)|0;
          $inc500 = (($j$1440) + 1)|0;
          $rem494 = (($29>>>0) % ($mul499>>>0))&-1;
          $cmp495 = ($rem494|0)==(0);
          if ($cmp495) {
           $i$3439 = $mul499;$j$1440 = $inc500;
          } else {
           $j$2 = $inc500;
           break;
          }
         }
        } else {
         $j$2 = 0;
        }
       }
      } else {
       $j$2 = 9;
      }
      $or504 = $t$addr$0 | 32;
      $cmp505 = ($or504|0)==(102);
      $sub$ptr$lhs$cast508 = $z$7;
      $sub$ptr$sub510 = (($sub$ptr$lhs$cast508) - ($sub$ptr$lhs$cast318))|0;
      $sub$ptr$div511 = $sub$ptr$sub510 >> 2;
      $30 = ($sub$ptr$div511*9)|0;
      $mul513 = (($30) + -9)|0;
      if ($cmp505) {
       $sub514 = (($mul513) - ($j$2))|0;
       $31 = ($sub514|0)>(0);
       $$sub514 = $31 ? $sub514 : 0;
       $cmp528 = ($p$addr$2|0)<($$sub514|0);
       $p$addr$2$$sub514399 = $cmp528 ? $p$addr$2 : $$sub514;
       $and610$pre$phiZ2D = 0;$p$addr$3 = $p$addr$2$$sub514399;$t$addr$1 = $t$addr$0;
       break;
      } else {
       $add561 = (($mul513) + ($e$5$ph))|0;
       $sub562 = (($add561) - ($j$2))|0;
       $32 = ($sub562|0)>(0);
       $$sub562 = $32 ? $sub562 : 0;
       $cmp577 = ($p$addr$2|0)<($$sub562|0);
       $p$addr$2$$sub562400 = $cmp577 ? $p$addr$2 : $$sub562;
       $and610$pre$phiZ2D = 0;$p$addr$3 = $p$addr$2$$sub562400;$t$addr$1 = $t$addr$0;
       break;
      }
     } else {
      $and610$pre$phiZ2D = $and483;$p$addr$3 = $p$addr$2;$t$addr$1 = $t$addr$0;
     }
    } else {
     $$pre487 = $fl & 8;
     $and610$pre$phiZ2D = $$pre487;$p$addr$3 = $$p;$t$addr$1 = $t;
    }
   } while(0);
   $33 = $p$addr$3 | $and610$pre$phiZ2D;
   $34 = ($33|0)!=(0);
   $lor$ext = $34&1;
   $or613 = $t$addr$1 | 32;
   $cmp614 = ($or613|0)==(102);
   if ($cmp614) {
    $cmp617 = ($e$5$ph|0)>(0);
    $add620 = $cmp617 ? $e$5$ph : 0;
    $estr$2 = 0;$sub$ptr$sub650$pn = $add620;
   } else {
    $cmp623 = ($e$5$ph|0)<(0);
    $cond629 = $cmp623 ? $sub626$le : $e$5$ph;
    $conv630 = i64_sext($cond629);
    $call631 = (_fmt_u($conv630,$arrayidx)|0);
    $sub$ptr$lhs$cast633 = $arrayidx;
    $sub$ptr$rhs$cast634431 = $call631;
    $sub$ptr$sub635432 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast634431))|0;
    $cmp636433 = ($sub$ptr$sub635432|0)<(2);
    if ($cmp636433) {
     $estr$1434 = $call631;
     while(1) {
      $incdec$ptr639 = ((($estr$1434)) + -1|0);
      store1($incdec$ptr639,48);
      $sub$ptr$rhs$cast634 = $incdec$ptr639;
      $sub$ptr$sub635 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast634))|0;
      $cmp636 = ($sub$ptr$sub635|0)<(2);
      if ($cmp636) {
       $estr$1434 = $incdec$ptr639;
      } else {
       $estr$1$lcssa = $incdec$ptr639;
       break;
      }
     }
    } else {
     $estr$1$lcssa = $call631;
    }
    $35 = $e$5$ph >> 31;
    $36 = $35 & 2;
    $37 = (($36) + 43)|0;
    $conv644 = $37&255;
    $incdec$ptr645 = ((($estr$1$lcssa)) + -1|0);
    store1($incdec$ptr645,$conv644);
    $conv646 = $t$addr$1&255;
    $incdec$ptr647 = ((($estr$1$lcssa)) + -2|0);
    store1($incdec$ptr647,$conv646);
    $sub$ptr$rhs$cast649 = $incdec$ptr647;
    $sub$ptr$sub650 = (($sub$ptr$lhs$cast633) - ($sub$ptr$rhs$cast649))|0;
    $estr$2 = $incdec$ptr647;$sub$ptr$sub650$pn = $sub$ptr$sub650;
   }
   $add608 = (($pl$0) + 1)|0;
   $add612 = (($add608) + ($p$addr$3))|0;
   $l$1 = (($add612) + ($lor$ext))|0;
   $add653 = (($l$1) + ($sub$ptr$sub650$pn))|0;
   _pad_208($f,32,$w,$add653,$fl);
   _out($f,$prefix$0,$pl$0);
   $xor655 = $fl ^ 65536;
   _pad_208($f,48,$w,$add653,$xor655);
   if ($cmp614) {
    $cmp660 = ($a$9$ph>>>0)>($arraydecay208$add$ptr213>>>0);
    $r$0$a$9 = $cmp660 ? $arraydecay208$add$ptr213 : $a$9$ph;
    $add$ptr671 = ((($buf)) + 9|0);
    $sub$ptr$lhs$cast694 = $add$ptr671;
    $incdec$ptr689 = ((($buf)) + 8|0);
    $d$5422 = $r$0$a$9;
    while(1) {
     $38 = load4($d$5422);
     $conv669 = i64_zext($38>>>0);
     $call672 = (_fmt_u($conv669,$add$ptr671)|0);
     $cmp673 = ($d$5422|0)==($r$0$a$9|0);
     if ($cmp673) {
      $cmp686 = ($call672|0)==($add$ptr671|0);
      if ($cmp686) {
       store1($incdec$ptr689,48);
       $s668$1 = $incdec$ptr689;
      } else {
       $s668$1 = $call672;
      }
     } else {
      $cmp678419 = ($call672>>>0)>($buf>>>0);
      if ($cmp678419) {
       $39 = $call672;
       $40 = (($39) - ($sub$ptr$rhs$cast))|0;
       _memset(($buf|0),48,($40|0))|0;
       $s668$0420 = $call672;
       while(1) {
        $incdec$ptr681 = ((($s668$0420)) + -1|0);
        $cmp678 = ($incdec$ptr681>>>0)>($buf>>>0);
        if ($cmp678) {
         $s668$0420 = $incdec$ptr681;
        } else {
         $s668$1 = $incdec$ptr681;
         break;
        }
       }
      } else {
       $s668$1 = $call672;
      }
     }
     $sub$ptr$rhs$cast695 = $s668$1;
     $sub$ptr$sub696 = (($sub$ptr$lhs$cast694) - ($sub$ptr$rhs$cast695))|0;
     _out($f,$s668$1,$sub$ptr$sub696);
     $incdec$ptr698 = ((($d$5422)) + 4|0);
     $cmp665 = ($incdec$ptr698>>>0)>($arraydecay208$add$ptr213>>>0);
     if ($cmp665) {
      break;
     } else {
      $d$5422 = $incdec$ptr698;
     }
    }
    $41 = ($33|0)==(0);
    if (!($41)) {
     _out($f,4230,1);
    }
    $cmp707414 = ($incdec$ptr698>>>0)<($z$7>>>0);
    $cmp710415 = ($p$addr$3|0)>(0);
    $42 = $cmp707414 & $cmp710415;
    if ($42) {
     $d$6416 = $incdec$ptr698;$p$addr$4417 = $p$addr$3;
     while(1) {
      $43 = load4($d$6416);
      $conv716 = i64_zext($43>>>0);
      $call719 = (_fmt_u($conv716,$add$ptr671)|0);
      $cmp722411 = ($call719>>>0)>($buf>>>0);
      if ($cmp722411) {
       $44 = $call719;
       $45 = (($44) - ($sub$ptr$rhs$cast))|0;
       _memset(($buf|0),48,($45|0))|0;
       $s715$0412 = $call719;
       while(1) {
        $incdec$ptr725 = ((($s715$0412)) + -1|0);
        $cmp722 = ($incdec$ptr725>>>0)>($buf>>>0);
        if ($cmp722) {
         $s715$0412 = $incdec$ptr725;
        } else {
         $s715$0$lcssa = $incdec$ptr725;
         break;
        }
       }
      } else {
       $s715$0$lcssa = $call719;
      }
      $46 = ($p$addr$4417|0)<(9);
      $cond732 = $46 ? $p$addr$4417 : 9;
      _out($f,$s715$0$lcssa,$cond732);
      $incdec$ptr734 = ((($d$6416)) + 4|0);
      $sub735 = (($p$addr$4417) + -9)|0;
      $cmp707 = ($incdec$ptr734>>>0)<($z$7>>>0);
      $cmp710 = ($p$addr$4417|0)>(9);
      $47 = $cmp707 & $cmp710;
      if ($47) {
       $d$6416 = $incdec$ptr734;$p$addr$4417 = $sub735;
      } else {
       $p$addr$4$lcssa = $sub735;
       break;
      }
     }
    } else {
     $p$addr$4$lcssa = $p$addr$3;
    }
    $add737 = (($p$addr$4$lcssa) + 9)|0;
    _pad_208($f,48,$add737,9,0);
   } else {
    $add$ptr742 = ((($a$9$ph)) + 4|0);
    $z$7$add$ptr742 = $cmp450$lcssa ? $z$7 : $add$ptr742;
    $cmp748427 = ($p$addr$3|0)>(-1);
    if ($cmp748427) {
     $add$ptr756 = ((($buf)) + 9|0);
     $tobool781 = ($and610$pre$phiZ2D|0)==(0);
     $sub$ptr$lhs$cast787 = $add$ptr756;
     $48 = (0 - ($sub$ptr$rhs$cast))|0;
     $incdec$ptr763 = ((($buf)) + 8|0);
     $d$7428 = $a$9$ph;$p$addr$5429 = $p$addr$3;
     while(1) {
      $49 = load4($d$7428);
      $conv754 = i64_zext($49>>>0);
      $call757 = (_fmt_u($conv754,$add$ptr756)|0);
      $cmp760 = ($call757|0)==($add$ptr756|0);
      if ($cmp760) {
       store1($incdec$ptr763,48);
       $s753$0 = $incdec$ptr763;
      } else {
       $s753$0 = $call757;
      }
      $cmp765 = ($d$7428|0)==($a$9$ph|0);
      do {
       if ($cmp765) {
        $incdec$ptr776 = ((($s753$0)) + 1|0);
        _out($f,$s753$0,1);
        $cmp777 = ($p$addr$5429|0)<(1);
        $or$cond402 = $tobool781 & $cmp777;
        if ($or$cond402) {
         $s753$2 = $incdec$ptr776;
         break;
        }
        _out($f,4230,1);
        $s753$2 = $incdec$ptr776;
       } else {
        $cmp770423 = ($s753$0>>>0)>($buf>>>0);
        if (!($cmp770423)) {
         $s753$2 = $s753$0;
         break;
        }
        $scevgep483 = (($s753$0) + ($48)|0);
        $scevgep483484 = $scevgep483;
        _memset(($buf|0),48,($scevgep483484|0))|0;
        $s753$1424 = $s753$0;
        while(1) {
         $incdec$ptr773 = ((($s753$1424)) + -1|0);
         $cmp770 = ($incdec$ptr773>>>0)>($buf>>>0);
         if ($cmp770) {
          $s753$1424 = $incdec$ptr773;
         } else {
          $s753$2 = $incdec$ptr773;
          break;
         }
        }
       }
      } while(0);
      $sub$ptr$rhs$cast788 = $s753$2;
      $sub$ptr$sub789 = (($sub$ptr$lhs$cast787) - ($sub$ptr$rhs$cast788))|0;
      $cmp790 = ($p$addr$5429|0)>($sub$ptr$sub789|0);
      $cond800 = $cmp790 ? $sub$ptr$sub789 : $p$addr$5429;
      _out($f,$s753$2,$cond800);
      $sub806 = (($p$addr$5429) - ($sub$ptr$sub789))|0;
      $incdec$ptr808 = ((($d$7428)) + 4|0);
      $cmp745 = ($incdec$ptr808>>>0)<($z$7$add$ptr742>>>0);
      $cmp748 = ($sub806|0)>(-1);
      $50 = $cmp745 & $cmp748;
      if ($50) {
       $d$7428 = $incdec$ptr808;$p$addr$5429 = $sub806;
      } else {
       $p$addr$5$lcssa = $sub806;
       break;
      }
     }
    } else {
     $p$addr$5$lcssa = $p$addr$3;
    }
    $add810 = (($p$addr$5$lcssa) + 18)|0;
    _pad_208($f,48,$add810,18,0);
    $sub$ptr$lhs$cast811 = $arrayidx;
    $sub$ptr$rhs$cast812 = $estr$2;
    $sub$ptr$sub813 = (($sub$ptr$lhs$cast811) - ($sub$ptr$rhs$cast812))|0;
    _out($f,$estr$2,$sub$ptr$sub813);
   }
   $xor816 = $fl ^ 8192;
   _pad_208($f,32,$w,$add653,$xor816);
   $add653$sink406 = $add653;
  } else {
   $and36 = $t & 32;
   $tobool37 = ($and36|0)!=(0);
   $cond = $tobool37 ? 4202 : 4206;
   $cmp38 = ($y$addr$0 != $y$addr$0) | (0.0 != 0.0);
   $cond43 = $tobool37 ? 6399 : 4210;
   $s35$0 = $cmp38 ? $cond43 : $cond;
   $add = (($pl$0) + 3)|0;
   $and45 = $fl & -65537;
   _pad_208($f,32,$w,$add,$and45);
   _out($f,$prefix$0,$pl$0);
   _out($f,$s35$0,3);
   $xor = $fl ^ 8192;
   _pad_208($f,32,$w,$add,$xor);
   $add653$sink406 = $add;
  }
 } while(0);
 $cmp818 = ($add653$sink406|0)<($w|0);
 $w$add653 = $cmp818 ? $w : $add653$sink406;
 STACKTOP = sp;return ($w$add653|0);
}
function ___DOUBLE_BITS_209($__f) {
 $__f = +$__f;
 var $0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($__f);
 return (i64($0));
}
function _wcrtomb($s,$wc,$st) {
 $s = $s|0;
 $wc = $wc|0;
 $st = $st|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $and = 0, $and32 = 0, $and36 = 0, $and49 = 0, $and54 = 0, $and58 = 0, $call = 0, $call10 = 0, $call66 = 0, $cmp = 0, $cmp14 = 0, $cmp21 = 0, $cmp24 = 0, $cmp41 = 0, $cmp7 = 0, $conv = 0;
 var $conv12 = 0, $conv17 = 0, $conv19 = 0, $conv29 = 0, $conv34 = 0, $conv38 = 0, $conv46 = 0, $conv51 = 0, $conv56 = 0, $conv60 = 0, $incdec$ptr = 0, $incdec$ptr30 = 0, $incdec$ptr35 = 0, $incdec$ptr47 = 0, $incdec$ptr52 = 0, $incdec$ptr57 = 0, $locale = 0, $not$tobool2 = 0, $or = 0, $or$cond = 0;
 var $or18 = 0, $or28 = 0, $or33 = 0, $or37 = 0, $or45 = 0, $or50 = 0, $or55 = 0, $or59 = 0, $retval$0 = 0, $shr2729 = 0, $shr3130 = 0, $shr32 = 0, $shr4426 = 0, $shr4827 = 0, $shr5328 = 0, $sub40 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 do {
  if ($tobool) {
   $retval$0 = 1;
  } else {
   $cmp = ($wc>>>0)<(128);
   if ($cmp) {
    $conv = $wc&255;
    store1($s,$conv);
    $retval$0 = 1;
    break;
   }
   $call = (___pthread_self_748()|0);
   $locale = ((($call)) + 188|0);
   $0 = load4($locale);
   $1 = load4($0);
   $not$tobool2 = ($1|0)==(0|0);
   if ($not$tobool2) {
    $2 = $wc & -128;
    $cmp7 = ($2|0)==(57216);
    if ($cmp7) {
     $conv12 = $wc&255;
     store1($s,$conv12);
     $retval$0 = 1;
     break;
    } else {
     $call10 = (___errno_location()|0);
     store4($call10,84);
     $retval$0 = -1;
     break;
    }
   }
   $cmp14 = ($wc>>>0)<(2048);
   if ($cmp14) {
    $shr32 = $wc >>> 6;
    $or = $shr32 | 192;
    $conv17 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    store1($s,$conv17);
    $and = $wc & 63;
    $or18 = $and | 128;
    $conv19 = $or18&255;
    store1($incdec$ptr,$conv19);
    $retval$0 = 2;
    break;
   }
   $cmp21 = ($wc>>>0)<(55296);
   $3 = $wc & -8192;
   $cmp24 = ($3|0)==(57344);
   $or$cond = $cmp21 | $cmp24;
   if ($or$cond) {
    $shr2729 = $wc >>> 12;
    $or28 = $shr2729 | 224;
    $conv29 = $or28&255;
    $incdec$ptr30 = ((($s)) + 1|0);
    store1($s,$conv29);
    $shr3130 = $wc >>> 6;
    $and32 = $shr3130 & 63;
    $or33 = $and32 | 128;
    $conv34 = $or33&255;
    $incdec$ptr35 = ((($s)) + 2|0);
    store1($incdec$ptr30,$conv34);
    $and36 = $wc & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    store1($incdec$ptr35,$conv38);
    $retval$0 = 3;
    break;
   }
   $sub40 = (($wc) + -65536)|0;
   $cmp41 = ($sub40>>>0)<(1048576);
   if ($cmp41) {
    $shr4426 = $wc >>> 18;
    $or45 = $shr4426 | 240;
    $conv46 = $or45&255;
    $incdec$ptr47 = ((($s)) + 1|0);
    store1($s,$conv46);
    $shr4827 = $wc >>> 12;
    $and49 = $shr4827 & 63;
    $or50 = $and49 | 128;
    $conv51 = $or50&255;
    $incdec$ptr52 = ((($s)) + 2|0);
    store1($incdec$ptr47,$conv51);
    $shr5328 = $wc >>> 6;
    $and54 = $shr5328 & 63;
    $or55 = $and54 | 128;
    $conv56 = $or55&255;
    $incdec$ptr57 = ((($s)) + 3|0);
    store1($incdec$ptr52,$conv56);
    $and58 = $wc & 63;
    $or59 = $and58 | 128;
    $conv60 = $or59&255;
    store1($incdec$ptr57,$conv60);
    $retval$0 = 4;
    break;
   } else {
    $call66 = (___errno_location()|0);
    store4($call66,84);
    $retval$0 = -1;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___pthread_self_748() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_pthread_self()|0);
 return ($call|0);
}
function ___pthread_self_350() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_pthread_self()|0);
 return ($call|0);
}
function ___strerror_l($e,$loc) {
 $e = $e|0;
 $loc = $loc|0;
 var $0 = 0, $1 = 0, $2 = 0, $arrayidx = 0, $arrayidx15 = 0, $call = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool59 = 0, $tobool8 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $i$012 = 0;
 while(1) {
  $arrayidx = (4232 + ($i$012)|0);
  $0 = load1($arrayidx);
  $conv = $0&255;
  $cmp = ($conv|0)==($e|0);
  if ($cmp) {
   label = 2;
   break;
  }
  $inc = (($i$012) + 1)|0;
  $tobool = ($inc|0)==(87);
  if ($tobool) {
   $i$111 = 87;$s$010 = 4320;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 4320;
  } else {
   $i$111 = $i$012;$s$010 = 4320;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$010;
   while(1) {
    $1 = load1($s$1);
    $tobool8 = ($1<<24>>24)==(0);
    $incdec$ptr = ((($s$1)) + 1|0);
    if ($tobool8) {
     break;
    } else {
     $s$1 = $incdec$ptr;
    }
   }
   $dec = (($i$111) + -1)|0;
   $tobool5 = ($dec|0)==(0);
   if ($tobool5) {
    $s$0$lcssa = $incdec$ptr;
    break;
   } else {
    $i$111 = $dec;$s$010 = $incdec$ptr;
    label = 5;
   }
  }
 }
 $arrayidx15 = ((($loc)) + 20|0);
 $2 = load4($arrayidx15);
 $call = (___lctrans($s$0$lcssa,$2)|0);
 return ($call|0);
}
function ___lctrans($msg,$lm) {
 $msg = $msg|0;
 $lm = $lm|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___lctrans_impl($msg,$lm)|0);
 return ($call|0);
}
function ___lctrans_impl($msg,$lm) {
 $msg = $msg|0;
 $lm = $lm|0;
 var $0 = 0, $1 = 0, $call = 0, $cond = 0, $map_size = 0, $tobool = 0, $tobool1 = 0, $trans$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($lm|0)==(0|0);
 if ($tobool) {
  $trans$0 = 0;
 } else {
  $0 = load4($lm);
  $map_size = ((($lm)) + 4|0);
  $1 = load4($map_size);
  $call = (___mo_lookup($0,$1,$msg)|0);
  $trans$0 = $call;
 }
 $tobool1 = ($trans$0|0)!=(0|0);
 $cond = $tobool1 ? $trans$0 : $msg;
 return ($cond|0);
}
function ___mo_lookup($p,$size,$s) {
 $p = $p|0;
 $size = $size|0;
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr65 = 0, $add$ptr65$ = 0, $add16 = 0, $add23 = 0, $add31 = 0, $add42 = 0, $add49 = 0, $add59 = 0;
 var $arrayidx = 0, $arrayidx1 = 0, $arrayidx17 = 0, $arrayidx24 = 0, $arrayidx3 = 0, $arrayidx32 = 0, $arrayidx43 = 0, $arrayidx50 = 0, $arrayidx60 = 0, $b$0 = 0, $b$1 = 0, $call = 0, $call18 = 0, $call2 = 0, $call25 = 0, $call36 = 0, $call4 = 0, $call44 = 0, $call51 = 0, $cmp = 0;
 var $cmp10 = 0, $cmp26 = 0, $cmp29 = 0, $cmp52 = 0, $cmp56 = 0, $cmp6 = 0, $cmp67 = 0, $cmp71 = 0, $div = 0, $div12 = 0, $div13 = 0, $div14 = 0, $mul = 0, $mul15 = 0, $n$0 = 0, $n$1 = 0, $or = 0, $or$cond = 0, $or$cond66 = 0, $or$cond67 = 0;
 var $rem = 0, $retval$4 = 0, $sub = 0, $sub28 = 0, $sub5 = 0, $sub55 = 0, $sub79 = 0, $tobool = 0, $tobool33 = 0, $tobool37 = 0, $tobool62 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($p);
 $sub = (($0) + 1794895138)|0;
 $arrayidx = ((($p)) + 8|0);
 $1 = load4($arrayidx);
 $call = (_swapc($1,$sub)|0);
 $arrayidx1 = ((($p)) + 12|0);
 $2 = load4($arrayidx1);
 $call2 = (_swapc($2,$sub)|0);
 $arrayidx3 = ((($p)) + 16|0);
 $3 = load4($arrayidx3);
 $call4 = (_swapc($3,$sub)|0);
 $div = $size >>> 2;
 $cmp = ($call>>>0)<($div>>>0);
 L1: do {
  if ($cmp) {
   $mul = $call << 2;
   $sub5 = (($size) - ($mul))|0;
   $cmp6 = ($call2>>>0)<($sub5>>>0);
   $cmp10 = ($call4>>>0)<($sub5>>>0);
   $or$cond = $cmp6 & $cmp10;
   if ($or$cond) {
    $or = $call4 | $call2;
    $rem = $or & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $div12 = $call2 >>> 2;
     $div13 = $call4 >>> 2;
     $b$0 = 0;$n$0 = $call;
     while(1) {
      $div14 = $n$0 >>> 1;
      $add = (($b$0) + ($div14))|0;
      $mul15 = $add << 1;
      $add16 = (($mul15) + ($div12))|0;
      $arrayidx17 = (($p) + ($add16<<2)|0);
      $4 = load4($arrayidx17);
      $call18 = (_swapc($4,$sub)|0);
      $add23 = (($add16) + 1)|0;
      $arrayidx24 = (($p) + ($add23<<2)|0);
      $5 = load4($arrayidx24);
      $call25 = (_swapc($5,$sub)|0);
      $cmp26 = ($call25>>>0)<($size>>>0);
      $sub28 = (($size) - ($call25))|0;
      $cmp29 = ($call18>>>0)<($sub28>>>0);
      $or$cond66 = $cmp26 & $cmp29;
      if (!($or$cond66)) {
       $retval$4 = 0;
       break L1;
      }
      $add31 = (($call25) + ($call18))|0;
      $arrayidx32 = (($p) + ($add31)|0);
      $6 = load1($arrayidx32);
      $tobool33 = ($6<<24>>24)==(0);
      if (!($tobool33)) {
       $retval$4 = 0;
       break L1;
      }
      $add$ptr = (($p) + ($call25)|0);
      $call36 = (_strcmp($s,$add$ptr)|0);
      $tobool37 = ($call36|0)==(0);
      if ($tobool37) {
       break;
      }
      $cmp67 = ($n$0|0)==(1);
      $cmp71 = ($call36|0)<(0);
      $sub79 = (($n$0) - ($div14))|0;
      $n$1 = $cmp71 ? $div14 : $sub79;
      $b$1 = $cmp71 ? $b$0 : $add;
      if ($cmp67) {
       $retval$4 = 0;
       break L1;
      } else {
       $b$0 = $b$1;$n$0 = $n$1;
      }
     }
     $add42 = (($mul15) + ($div13))|0;
     $arrayidx43 = (($p) + ($add42<<2)|0);
     $7 = load4($arrayidx43);
     $call44 = (_swapc($7,$sub)|0);
     $add49 = (($add42) + 1)|0;
     $arrayidx50 = (($p) + ($add49<<2)|0);
     $8 = load4($arrayidx50);
     $call51 = (_swapc($8,$sub)|0);
     $cmp52 = ($call51>>>0)<($size>>>0);
     $sub55 = (($size) - ($call51))|0;
     $cmp56 = ($call44>>>0)<($sub55>>>0);
     $or$cond67 = $cmp52 & $cmp56;
     if ($or$cond67) {
      $add$ptr65 = (($p) + ($call51)|0);
      $add59 = (($call51) + ($call44))|0;
      $arrayidx60 = (($p) + ($add59)|0);
      $9 = load1($arrayidx60);
      $tobool62 = ($9<<24>>24)==(0);
      $add$ptr65$ = $tobool62 ? $add$ptr65 : 0;
      $retval$4 = $add$ptr65$;
     } else {
      $retval$4 = 0;
     }
    } else {
     $retval$4 = 0;
    }
   } else {
    $retval$4 = 0;
   }
  } else {
   $retval$4 = 0;
  }
 } while(0);
 return ($retval$4|0);
}
function _swapc($x,$c) {
 $x = $x|0;
 $c = $c|0;
 var $or5 = 0, $tobool = 0, $x$or5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($c|0)==(0);
 $or5 = (_llvm_bswap_i32(($x|0))|0);
 $x$or5 = $tobool ? $x : $or5;
 return ($x$or5|0);
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre33 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $call4 = 0;
 var $cmp = 0, $cmp11 = 0, $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $i$1 = 0, $l$addr$0 = 0, $l$addr$1 = 0, $lbf = 0, $retval$1 = 0, $s$addr$1 = 0, $sub = 0, $sub$ptr$sub = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $3 = $$pre;
   label = 5;
  } else {
   $retval$1 = 0;
  }
 } else {
  $1 = $0;
  $3 = $1;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $wpos = ((($f)) + 20|0);
   $2 = load4($wpos);
   $sub$ptr$sub = (($3) - ($2))|0;
   $cmp = ($sub$ptr$sub>>>0)<($l>>>0);
   $4 = $2;
   if ($cmp) {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    $call4 = (FUNCTION_TABLE_iiii[$5 & 15]($f,$s,$l)|0);
    $retval$1 = $call4;
    break;
   }
   $lbf = ((($f)) + 75|0);
   $6 = load1($lbf);
   $cmp6 = ($6<<24>>24)>(-1);
   L10: do {
    if ($cmp6) {
     $i$0 = $l;
     while(1) {
      $tobool9 = ($i$0|0)==(0);
      if ($tobool9) {
       $9 = $4;$i$1 = 0;$l$addr$1 = $l;$s$addr$1 = $s;
       break L10;
      }
      $sub = (($i$0) + -1)|0;
      $arrayidx = (($s) + ($sub)|0);
      $7 = load1($arrayidx);
      $cmp11 = ($7<<24>>24)==(10);
      if ($cmp11) {
       break;
      } else {
       $i$0 = $sub;
      }
     }
     $write15 = ((($f)) + 36|0);
     $8 = load4($write15);
     $call16 = (FUNCTION_TABLE_iiii[$8 & 15]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      $retval$1 = $call16;
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $l$addr$0 = (($l) - ($i$0))|0;
     $$pre33 = load4($wpos);
     $9 = $$pre33;$i$1 = $i$0;$l$addr$1 = $l$addr$0;$s$addr$1 = $add$ptr;
    } else {
     $9 = $4;$i$1 = 0;$l$addr$1 = $l;$s$addr$1 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$1|0),($l$addr$1|0))|0;
   $10 = load4($wpos);
   $add$ptr26 = (($10) + ($l$addr$1)|0);
   store4($wpos,$add$ptr26);
   $add = (($i$1) + ($l$addr$1))|0;
   $retval$1 = $add;
  }
 } while(0);
 return ($retval$1|0);
}
function ___towrite($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0, $wend = 0;
 var $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $1 = load4($f);
 $and = $1 & 8;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $rend = ((($f)) + 8|0);
  store4($rend,0);
  $rpos = ((($f)) + 4|0);
  store4($rpos,0);
  $buf = ((($f)) + 44|0);
  $2 = load4($buf);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$2);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$2);
  $buf_size = ((($f)) + 48|0);
  $3 = load4($buf_size);
  $add$ptr = (($2) + ($3)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $retval$0 = 0;
 } else {
  $or5 = $1 | 32;
  store4($f,$or5);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function _sn_write($f,$s,$l) {
 $f = $f|0;
 $s = $s|0;
 $l = $l|0;
 var $0 = 0, $1 = 0, $2 = 0, $add$ptr = 0, $cmp = 0, $l$sub$ptr$sub = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$rhs$cast = $1;
 $sub$ptr$sub = (($0) - ($sub$ptr$rhs$cast))|0;
 $cmp = ($sub$ptr$sub>>>0)>($l>>>0);
 $l$sub$ptr$sub = $cmp ? $l : $sub$ptr$sub;
 _memcpy(($1|0),($s|0),($l$sub$ptr$sub|0))|0;
 $2 = load4($wpos);
 $add$ptr = (($2) + ($l$sub$ptr$sub)|0);
 store4($wpos,$add$ptr);
 return ($l|0);
}
function _strtox_197($s,$p,$base,$lim) {
 $s = $s|0;
 $p = $p|0;
 $base = $base|0;
 $lim = i64($lim);
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $add$ptr = 0, $add$ptr$sink = 0, $add$ptr5 = 0, $buf = 0, $call = i64(), $cmp = 0, $f = 0, $lock = 0, $rend1 = 0, $rpos = 0, $shcnt = 0, $sub$ptr$sub = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $f = sp;
 store4($f,0);
 $rpos = ((($f)) + 4|0);
 store4($rpos,$s);
 $buf = ((($f)) + 44|0);
 store4($buf,$s);
 $cmp = ($s|0)<(0|0);
 $add$ptr = ((($s)) + 2147483647|0);
 $add$ptr$sink = $cmp ? (-1) : $add$ptr;
 $rend1 = ((($f)) + 8|0);
 store4($rend1,$add$ptr$sink);
 $lock = ((($f)) + 76|0);
 store4($lock,-1);
 ___shlim($f,0);
 $call = (i64(___intscan($f,$base,1,$lim)));
 $tobool = ($p|0)==(0|0);
 if (!($tobool)) {
  $shcnt = ((($f)) + 108|0);
  $0 = load4($shcnt);
  $1 = load4($rpos);
  $2 = load4($rend1);
  $sub$ptr$sub = (($1) + ($0))|0;
  $add = (($sub$ptr$sub) - ($2))|0;
  $add$ptr5 = (($s) + ($add)|0);
  store4($p,$add$ptr5);
 }
 STACKTOP = sp;return (i64($call));
}
function ___shlim($f,$lim) {
 $f = $f|0;
 $lim = $lim|0;
 var $$sink = 0, $0 = 0, $1 = 0, $add$ptr = 0, $cmp = 0, $or$cond = 0, $rend = 0, $rpos = 0, $shcnt = 0, $shend4 = 0, $shlim = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $shlim = ((($f)) + 104|0);
 store4($shlim,$lim);
 $rend = ((($f)) + 8|0);
 $0 = load4($rend);
 $rpos = ((($f)) + 4|0);
 $1 = load4($rpos);
 $sub$ptr$lhs$cast = $0;
 $sub$ptr$rhs$cast = $1;
 $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
 $shcnt = ((($f)) + 108|0);
 store4($shcnt,$sub$ptr$sub);
 $tobool = ($lim|0)!=(0);
 $cmp = ($sub$ptr$sub|0)>($lim|0);
 $or$cond = $tobool & $cmp;
 $add$ptr = (($1) + ($lim)|0);
 $$sink = $or$cond ? $add$ptr : $0;
 $shend4 = ((($f)) + 100|0);
 store4($shend4,$$sink);
 return;
}
function ___intscan($f,$base,$pok,$lim) {
 $f = $f|0;
 $base = $base|0;
 $pok = $pok|0;
 $lim = i64($lim);
 var $$base132 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $add = 0, $add149 = i64(), $add249 = 0, $add288 = i64(), $and = 0, $and174 = 0, $and331 = i64(), $and346 = i64(), $arrayidx = 0, $arrayidx175 = 0, $arrayidx178 = 0, $arrayidx178157 = 0, $arrayidx206 = 0, $arrayidx237 = 0, $arrayidx237175 = 0, $arrayidx266 = 0, $arrayidx305 = 0, $arrayidx311 = 0, $arrayidx93 = 0;
 var $base$addr$1 = 0, $base$addr$1134 = 0, $base$addr$1135 = 0, $c$0 = 0, $c$1 = 0, $c$1136 = 0, $c$2$be = 0, $c$2$lcssa = 0, $c$3$be = 0, $c$3184 = 0, $c$4$be = 0, $c$4$lcssa = 0, $c$5$be = 0, $c$6$be = 0, $c$6$lcssa = 0, $c$7$be = 0, $c$7167 = 0, $c$8 = 0, $c$9$be = 0, $call = 0;
 var $call105 = 0, $call126 = 0, $call160 = 0, $call200 = 0, $call21 = 0, $call231 = 0, $call260 = 0, $call299 = 0, $call3 = 0, $call326 = 0, $call330 = 0, $call351 = 0, $call357 = 0, $call4 = 0, $call42 = 0, $call57 = 0, $cmp = 0, $cmp1 = 0, $cmp108 = 0, $cmp112 = 0;
 var $cmp112191 = 0, $cmp114 = 0, $cmp119 = 0, $cmp132 = 0, $cmp132183 = 0, $cmp135 = 0, $cmp14 = 0, $cmp142 = 0, $cmp153 = 0, $cmp165 = 0, $cmp180 = 0, $cmp180159 = 0, $cmp183 = 0, $cmp193 = 0, $cmp208 = 0, $cmp208152 = 0, $cmp212 = 0, $cmp212153 = 0, $cmp224 = 0, $cmp239 = 0;
 var $cmp239177 = 0, $cmp242 = 0, $cmp25 = 0, $cmp253 = 0, $cmp268 = 0, $cmp268166 = 0, $cmp272 = 0, $cmp280 = 0, $cmp292 = 0, $cmp30 = 0, $cmp307 = 0, $cmp313 = 0, $cmp319 = 0, $cmp343 = 0, $cmp35 = 0, $cmp354 = 0, $cmp45 = 0, $cmp50 = 0, $cmp61 = 0, $cmp7 = 0;
 var $cmp95 = 0, $cond = 0, $cond44 = 0, $cond59 = 0, $conv = 0, $conv124 = 0, $conv140 = i64(), $conv158 = 0, $conv176 = 0, $conv179 = 0, $conv179158 = 0, $conv179161 = 0, $conv19 = 0, $conv198 = 0, $conv207 = 0, $conv207151 = 0, $conv219 = i64(), $conv229 = 0, $conv238 = 0, $conv238176 = 0;
 var $conv238179 = 0, $conv258 = 0, $conv267 = 0, $conv267165 = 0, $conv271 = i64(), $conv278 = i64(), $conv297 = 0, $conv306 = 0, $conv312 = 0, $conv324 = 0, $conv361 = i64(), $conv40 = 0, $conv55 = 0, $conv94 = 0, $div = i64(), $incdec$ptr = 0, $incdec$ptr102 = 0, $incdec$ptr123 = 0, $incdec$ptr157 = 0, $incdec$ptr18 = 0;
 var $incdec$ptr197 = 0, $incdec$ptr228 = 0, $incdec$ptr257 = 0, $incdec$ptr296 = 0, $incdec$ptr323 = 0, $incdec$ptr340 = 0, $incdec$ptr39 = 0, $incdec$ptr54 = 0, $incdec$ptr68 = 0, $incdec$ptr77 = 0, $mul = 0, $mul138 = i64(), $mul173 = 0, $mul246 = 0, $mul276 = i64(), $neg$0 = 0, $neg$0$ = 0, $neg$1 = 0, $or = 0, $or$cond = 0;
 var $or$cond154 = 0, $or$cond2 = 0, $or$cond3 = 0, $or$cond5 = 0, $or189 = 0, $or220 = i64(), $phitmp = i64(), $phitmp201 = i64(), $phitmp202 = i64(), $retval$0 = i64(), $rpos = 0, $sh_prom = i64(), $shend = 0, $shl = 0, $shl217 = i64(), $shr = 0, $shr211 = i64(), $sub = 0, $sub111 = 0, $sub111190 = 0;
 var $sub111193 = 0, $sub131 = 0, $sub131182 = 0, $sub131186 = 0, $sub141 = i64(), $sub170 = 0, $sub279 = i64(), $sub352 = i64(), $sub363 = i64(), $tobool = 0, $tobool171 = 0, $tobool332 = 0, $tobool337 = 0, $tobool347 = 0, $tobool349 = 0, $tobool65 = 0, $tobool71 = 0, $tobool99 = 0, $x$0$lcssa = i64(), $x$0192 = 0;
 var $x$1$lcssa = i64(), $x$1160 = 0, $x$2$lcssa = i64(), $x$2178 = 0, $xor = i64(), $y$0185 = i64(), $y$1155 = i64(), $y$2168 = i64(), $y$3 = i64(), $y$4 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($base>>>0)>(36);
 L1: do {
  if ($cmp) {
   $call = (___errno_location()|0);
   store4($call,22);
   $retval$0 = i64_const(0,0);
  } else {
   $rpos = ((($f)) + 4|0);
   $shend = ((($f)) + 100|0);
   while(1) {
    $0 = load4($rpos);
    $1 = load4($shend);
    $cmp1 = ($0>>>0)<($1>>>0);
    if ($cmp1) {
     $incdec$ptr = ((($0)) + 1|0);
     store4($rpos,$incdec$ptr);
     $2 = load1($0);
     $conv = $2&255;
     $cond = $conv;
    } else {
     $call3 = (___shgetc($f)|0);
     $cond = $call3;
    }
    $call4 = (_isspace($cond)|0);
    $tobool = ($call4|0)==(0);
    if ($tobool) {
     break;
    }
   }
   L11: do {
    switch ($cond|0) {
    case 43: case 45:  {
     $cmp7 = ($cond|0)==(45);
     $sub = $cmp7 << 31 >> 31;
     $3 = load4($rpos);
     $4 = load4($shend);
     $cmp14 = ($3>>>0)<($4>>>0);
     if ($cmp14) {
      $incdec$ptr18 = ((($3)) + 1|0);
      store4($rpos,$incdec$ptr18);
      $5 = load1($3);
      $conv19 = $5&255;
      $c$0 = $conv19;$neg$0 = $sub;
      break L11;
     } else {
      $call21 = (___shgetc($f)|0);
      $c$0 = $call21;$neg$0 = $sub;
      break L11;
     }
     break;
    }
    default: {
     $c$0 = $cond;$neg$0 = 0;
    }
    }
   } while(0);
   $cmp25 = ($base|0)==(0);
   $6 = $base | 16;
   $7 = ($6|0)==(16);
   $cmp30 = ($c$0|0)==(48);
   $or$cond2 = $7 & $cmp30;
   do {
    if ($or$cond2) {
     $8 = load4($rpos);
     $9 = load4($shend);
     $cmp35 = ($8>>>0)<($9>>>0);
     if ($cmp35) {
      $incdec$ptr39 = ((($8)) + 1|0);
      store4($rpos,$incdec$ptr39);
      $10 = load1($8);
      $conv40 = $10&255;
      $cond44 = $conv40;
     } else {
      $call42 = (___shgetc($f)|0);
      $cond44 = $call42;
     }
     $or = $cond44 | 32;
     $cmp45 = ($or|0)==(120);
     if (!($cmp45)) {
      if ($cmp25) {
       $base$addr$1135 = 8;$c$1136 = $cond44;
       label = 46;
       break;
      } else {
       $base$addr$1 = $base;$c$1 = $cond44;
       label = 32;
       break;
      }
     }
     $11 = load4($rpos);
     $12 = load4($shend);
     $cmp50 = ($11>>>0)<($12>>>0);
     if ($cmp50) {
      $incdec$ptr54 = ((($11)) + 1|0);
      store4($rpos,$incdec$ptr54);
      $13 = load1($11);
      $conv55 = $13&255;
      $cond59 = $conv55;
     } else {
      $call57 = (___shgetc($f)|0);
      $cond59 = $call57;
     }
     $arrayidx = ((6125) + ($cond59)|0);
     $14 = load1($arrayidx);
     $cmp61 = ($14&255)>(15);
     if ($cmp61) {
      $15 = load4($shend);
      $tobool65 = ($15|0)!=(0|0);
      if ($tobool65) {
       $16 = load4($rpos);
       $incdec$ptr68 = ((($16)) + -1|0);
       store4($rpos,$incdec$ptr68);
      }
      $tobool71 = ($pok|0)==(0);
      if ($tobool71) {
       ___shlim($f,0);
       $retval$0 = i64_const(0,0);
       break L1;
      }
      if (!($tobool65)) {
       $retval$0 = i64_const(0,0);
       break L1;
      }
      $17 = load4($rpos);
      $incdec$ptr77 = ((($17)) + -1|0);
      store4($rpos,$incdec$ptr77);
      $retval$0 = i64_const(0,0);
      break L1;
     } else {
      $base$addr$1135 = 16;$c$1136 = $cond59;
      label = 46;
     }
    } else {
     $$base132 = $cmp25 ? 10 : $base;
     $arrayidx93 = ((6125) + ($c$0)|0);
     $18 = load1($arrayidx93);
     $conv94 = $18&255;
     $cmp95 = ($conv94>>>0)<($$base132>>>0);
     if ($cmp95) {
      $base$addr$1 = $$base132;$c$1 = $c$0;
      label = 32;
     } else {
      $19 = load4($shend);
      $tobool99 = ($19|0)==(0|0);
      if (!($tobool99)) {
       $20 = load4($rpos);
       $incdec$ptr102 = ((($20)) + -1|0);
       store4($rpos,$incdec$ptr102);
      }
      ___shlim($f,0);
      $call105 = (___errno_location()|0);
      store4($call105,22);
      $retval$0 = i64_const(0,0);
      break L1;
     }
    }
   } while(0);
   L43: do {
    if ((label|0) == 32) {
     $cmp108 = ($base$addr$1|0)==(10);
     if ($cmp108) {
      $sub111190 = (($c$1) + -48)|0;
      $cmp112191 = ($sub111190>>>0)<(10);
      if ($cmp112191) {
       $sub111193 = $sub111190;$x$0192 = 0;
       while(1) {
        $mul = ($x$0192*10)|0;
        $add = (($mul) + ($sub111193))|0;
        $21 = load4($rpos);
        $22 = load4($shend);
        $cmp119 = ($21>>>0)<($22>>>0);
        if ($cmp119) {
         $incdec$ptr123 = ((($21)) + 1|0);
         store4($rpos,$incdec$ptr123);
         $23 = load1($21);
         $conv124 = $23&255;
         $c$2$be = $conv124;
        } else {
         $call126 = (___shgetc($f)|0);
         $c$2$be = $call126;
        }
        $sub111 = (($c$2$be) + -48)|0;
        $cmp112 = ($sub111>>>0)<(10);
        $cmp114 = ($add>>>0)<(429496729);
        $24 = $cmp112 & $cmp114;
        if ($24) {
         $sub111193 = $sub111;$x$0192 = $add;
        } else {
         break;
        }
       }
       $phitmp202 = i64_zext($add>>>0);
       $c$2$lcssa = $c$2$be;$x$0$lcssa = $phitmp202;
      } else {
       $c$2$lcssa = $c$1;$x$0$lcssa = i64_const(0,0);
      }
      $sub131182 = (($c$2$lcssa) + -48)|0;
      $cmp132183 = ($sub131182>>>0)<(10);
      if ($cmp132183) {
       $c$3184 = $c$2$lcssa;$sub131186 = $sub131182;$y$0185 = $x$0$lcssa;
       while(1) {
        $mul138 = i64_mul($y$0185,i64_const(10,0));
        $conv140 = i64_sext($sub131186);
        $sub141 = i64_xor($conv140,i64_const(4294967295,4294967295));
        $cmp142 = i64_ugt($mul138,$sub141);
        if ($cmp142) {
         $base$addr$1134 = 10;$c$8 = $c$3184;$y$3 = $y$0185;
         label = 72;
         break L43;
        }
        $add149 = i64_add($mul138,$conv140);
        $25 = load4($rpos);
        $26 = load4($shend);
        $cmp153 = ($25>>>0)<($26>>>0);
        if ($cmp153) {
         $incdec$ptr157 = ((($25)) + 1|0);
         store4($rpos,$incdec$ptr157);
         $27 = load1($25);
         $conv158 = $27&255;
         $c$3$be = $conv158;
        } else {
         $call160 = (___shgetc($f)|0);
         $c$3$be = $call160;
        }
        $sub131 = (($c$3$be) + -48)|0;
        $cmp132 = ($sub131>>>0)<(10);
        $cmp135 = i64_ult($add149,i64_const(2576980378,429496729));
        $or$cond3 = $cmp132 & $cmp135;
        if ($or$cond3) {
         $c$3184 = $c$3$be;$sub131186 = $sub131;$y$0185 = $add149;
        } else {
         break;
        }
       }
       $cmp165 = ($sub131>>>0)>(9);
       if ($cmp165) {
        $neg$1 = $neg$0;$y$4 = $add149;
       } else {
        $base$addr$1134 = 10;$c$8 = $c$3$be;$y$3 = $add149;
        label = 72;
       }
      } else {
       $neg$1 = $neg$0;$y$4 = $x$0$lcssa;
      }
     } else {
      $base$addr$1135 = $base$addr$1;$c$1136 = $c$1;
      label = 46;
     }
    }
   } while(0);
   L63: do {
    if ((label|0) == 46) {
     $sub170 = (($base$addr$1135) + -1)|0;
     $and = $sub170 & $base$addr$1135;
     $tobool171 = ($and|0)==(0);
     if ($tobool171) {
      $mul173 = ($base$addr$1135*23)|0;
      $shr = $mul173 >>> 5;
      $and174 = $shr & 7;
      $arrayidx175 = (6381 + ($and174)|0);
      $29 = load1($arrayidx175);
      $conv176 = $29 << 24 >> 24;
      $arrayidx178157 = ((6125) + ($c$1136)|0);
      $30 = load1($arrayidx178157);
      $conv179158 = $30&255;
      $cmp180159 = ($conv179158>>>0)<($base$addr$1135>>>0);
      if ($cmp180159) {
       $conv179161 = $conv179158;$x$1160 = 0;
       while(1) {
        $shl = $x$1160 << $conv176;
        $or189 = $conv179161 | $shl;
        $31 = load4($rpos);
        $32 = load4($shend);
        $cmp193 = ($31>>>0)<($32>>>0);
        if ($cmp193) {
         $incdec$ptr197 = ((($31)) + 1|0);
         store4($rpos,$incdec$ptr197);
         $33 = load1($31);
         $conv198 = $33&255;
         $c$4$be = $conv198;
        } else {
         $call200 = (___shgetc($f)|0);
         $c$4$be = $call200;
        }
        $arrayidx178 = ((6125) + ($c$4$be)|0);
        $34 = load1($arrayidx178);
        $conv179 = $34&255;
        $cmp180 = ($conv179>>>0)<($base$addr$1135>>>0);
        $cmp183 = ($or189>>>0)<(134217728);
        $35 = $cmp183 & $cmp180;
        if ($35) {
         $conv179161 = $conv179;$x$1160 = $or189;
        } else {
         break;
        }
       }
       $phitmp201 = i64_zext($or189>>>0);
       $36 = $34;$c$4$lcssa = $c$4$be;$x$1$lcssa = $phitmp201;
      } else {
       $36 = $30;$c$4$lcssa = $c$1136;$x$1$lcssa = i64_const(0,0);
      }
      $sh_prom = i64_zext($conv176>>>0);
      $shr211 = i64_lshr(i64_const(4294967295,4294967295),$sh_prom);
      $conv207151 = $36&255;
      $cmp208152 = ($conv207151>>>0)>=($base$addr$1135>>>0);
      $cmp212153 = i64_ugt($x$1$lcssa,$shr211);
      $or$cond154 = $cmp208152 | $cmp212153;
      if ($or$cond154) {
       $base$addr$1134 = $base$addr$1135;$c$8 = $c$4$lcssa;$y$3 = $x$1$lcssa;
       label = 72;
       break;
      } else {
       $37 = $36;$y$1155 = $x$1$lcssa;
      }
      while(1) {
       $shl217 = i64_shl($y$1155,$sh_prom);
       $conv219 = i64_zext($37&255);
       $or220 = i64_or($conv219,$shl217);
       $38 = load4($rpos);
       $39 = load4($shend);
       $cmp224 = ($38>>>0)<($39>>>0);
       if ($cmp224) {
        $incdec$ptr228 = ((($38)) + 1|0);
        store4($rpos,$incdec$ptr228);
        $40 = load1($38);
        $conv229 = $40&255;
        $c$5$be = $conv229;
       } else {
        $call231 = (___shgetc($f)|0);
        $c$5$be = $call231;
       }
       $arrayidx206 = ((6125) + ($c$5$be)|0);
       $41 = load1($arrayidx206);
       $conv207 = $41&255;
       $cmp208 = ($conv207>>>0)>=($base$addr$1135>>>0);
       $cmp212 = i64_ugt($or220,$shr211);
       $or$cond = $cmp208 | $cmp212;
       if ($or$cond) {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$5$be;$y$3 = $or220;
        label = 72;
        break L63;
       } else {
        $37 = $41;$y$1155 = $or220;
       }
      }
     }
     $arrayidx237175 = ((6125) + ($c$1136)|0);
     $28 = load1($arrayidx237175);
     $conv238176 = $28&255;
     $cmp239177 = ($conv238176>>>0)<($base$addr$1135>>>0);
     if ($cmp239177) {
      $conv238179 = $conv238176;$x$2178 = 0;
      while(1) {
       $mul246 = Math_imul($x$2178, $base$addr$1135)|0;
       $add249 = (($conv238179) + ($mul246))|0;
       $42 = load4($rpos);
       $43 = load4($shend);
       $cmp253 = ($42>>>0)<($43>>>0);
       if ($cmp253) {
        $incdec$ptr257 = ((($42)) + 1|0);
        store4($rpos,$incdec$ptr257);
        $44 = load1($42);
        $conv258 = $44&255;
        $c$6$be = $conv258;
       } else {
        $call260 = (___shgetc($f)|0);
        $c$6$be = $call260;
       }
       $arrayidx237 = ((6125) + ($c$6$be)|0);
       $45 = load1($arrayidx237);
       $conv238 = $45&255;
       $cmp239 = ($conv238>>>0)<($base$addr$1135>>>0);
       $cmp242 = ($add249>>>0)<(119304647);
       $46 = $cmp242 & $cmp239;
       if ($46) {
        $conv238179 = $conv238;$x$2178 = $add249;
       } else {
        break;
       }
      }
      $phitmp = i64_zext($add249>>>0);
      $47 = $45;$c$6$lcssa = $c$6$be;$x$2$lcssa = $phitmp;
     } else {
      $47 = $28;$c$6$lcssa = $c$1136;$x$2$lcssa = i64_const(0,0);
     }
     $conv271 = i64_zext($base$addr$1135>>>0);
     $conv267165 = $47&255;
     $cmp268166 = ($conv267165>>>0)<($base$addr$1135>>>0);
     if ($cmp268166) {
      $div = i64_udiv(i64_const(4294967295,4294967295),$conv271);
      $48 = $47;$c$7167 = $c$6$lcssa;$y$2168 = $x$2$lcssa;
      while(1) {
       $cmp272 = i64_ugt($y$2168,$div);
       if ($cmp272) {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$7167;$y$3 = $y$2168;
        label = 72;
        break L63;
       }
       $mul276 = i64_mul($y$2168,$conv271);
       $conv278 = i64_zext($48&255);
       $sub279 = i64_xor($conv278,i64_const(4294967295,4294967295));
       $cmp280 = i64_ugt($mul276,$sub279);
       if ($cmp280) {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$7167;$y$3 = $y$2168;
        label = 72;
        break L63;
       }
       $add288 = i64_add($conv278,$mul276);
       $49 = load4($rpos);
       $50 = load4($shend);
       $cmp292 = ($49>>>0)<($50>>>0);
       if ($cmp292) {
        $incdec$ptr296 = ((($49)) + 1|0);
        store4($rpos,$incdec$ptr296);
        $51 = load1($49);
        $conv297 = $51&255;
        $c$7$be = $conv297;
       } else {
        $call299 = (___shgetc($f)|0);
        $c$7$be = $call299;
       }
       $arrayidx266 = ((6125) + ($c$7$be)|0);
       $52 = load1($arrayidx266);
       $conv267 = $52&255;
       $cmp268 = ($conv267>>>0)<($base$addr$1135>>>0);
       if ($cmp268) {
        $48 = $52;$c$7167 = $c$7$be;$y$2168 = $add288;
       } else {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$7$be;$y$3 = $add288;
        label = 72;
        break;
       }
      }
     } else {
      $base$addr$1134 = $base$addr$1135;$c$8 = $c$6$lcssa;$y$3 = $x$2$lcssa;
      label = 72;
     }
    }
   } while(0);
   if ((label|0) == 72) {
    $arrayidx305 = ((6125) + ($c$8)|0);
    $53 = load1($arrayidx305);
    $conv306 = $53&255;
    $cmp307 = ($conv306>>>0)<($base$addr$1134>>>0);
    if ($cmp307) {
     while(1) {
      $54 = load4($rpos);
      $55 = load4($shend);
      $cmp319 = ($54>>>0)<($55>>>0);
      if ($cmp319) {
       $incdec$ptr323 = ((($54)) + 1|0);
       store4($rpos,$incdec$ptr323);
       $56 = load1($54);
       $conv324 = $56&255;
       $c$9$be = $conv324;
      } else {
       $call326 = (___shgetc($f)|0);
       $c$9$be = $call326;
      }
      $arrayidx311 = ((6125) + ($c$9$be)|0);
      $57 = load1($arrayidx311);
      $conv312 = $57&255;
      $cmp313 = ($conv312>>>0)<($base$addr$1134>>>0);
      if (!($cmp313)) {
       break;
      }
     }
     $call330 = (___errno_location()|0);
     store4($call330,34);
     $and331 = i64_and($lim,i64_const(1,0));
     $tobool332 = i64_eq($and331,i64_const(0,0));
     $neg$0$ = $tobool332 ? $neg$0 : 0;
     $neg$1 = $neg$0$;$y$4 = $lim;
    } else {
     $neg$1 = $neg$0;$y$4 = $y$3;
    }
   }
   $58 = load4($shend);
   $tobool337 = ($58|0)==(0|0);
   if (!($tobool337)) {
    $59 = load4($rpos);
    $incdec$ptr340 = ((($59)) + -1|0);
    store4($rpos,$incdec$ptr340);
   }
   $cmp343 = i64_ult($y$4,$lim);
   if (!($cmp343)) {
    $and346 = i64_and($lim,i64_const(1,0));
    $tobool347 = i64_ne($and346,i64_const(0,0));
    $tobool349 = ($neg$1|0)!=(0);
    $or$cond5 = $tobool347 | $tobool349;
    if (!($or$cond5)) {
     $call351 = (___errno_location()|0);
     store4($call351,34);
     $sub352 = i64_add($lim,i64_const(4294967295,4294967295));
     $retval$0 = $sub352;
     break;
    }
    $cmp354 = i64_ugt($y$4,$lim);
    if ($cmp354) {
     $call357 = (___errno_location()|0);
     store4($call357,34);
     $retval$0 = $lim;
     break;
    }
   }
   $conv361 = i64_sext($neg$1);
   $xor = i64_xor($y$4,$conv361);
   $sub363 = i64_sub($xor,$conv361);
   $retval$0 = $sub363;
  }
 } while(0);
 return (i64($retval$0));
}
function ___shgetc($f) {
 $f = $f|0;
 var $$phi$trans$insert$phi$trans$insert = 0, $$pre = 0, $$pre26$pre = 0, $$pre29 = 0, $$sink = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add29 = 0, $arrayidx = 0;
 var $call = 0, $cmp = 0, $cmp2 = 0, $cmp32 = 0, $cmp9 = 0, $conv = 0, $conv35 = 0, $rend17$phi$trans$insert = 0, $retval$0 = 0, $rpos = 0, $shcnt = 0, $shcnt28$pre$phiZ2D = 0, $shcnt7 = 0, $shend = 0, $shend18 = 0, $shlim = 0, $sub = 0, $sub$ptr$lhs$cast25 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast26 = 0;
 var $sub$ptr$sub = 0, $sub$ptr$sub27 = 0, $sub8 = 0, $tobool = 0, $tobool21 = 0, $tobool4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $shlim = ((($f)) + 104|0);
 $0 = load4($shlim);
 $tobool = ($0|0)==(0);
 if ($tobool) {
  label = 3;
 } else {
  $shcnt = ((($f)) + 108|0);
  $1 = load4($shcnt);
  $cmp = ($1|0)<($0|0);
  if ($cmp) {
   label = 3;
  } else {
   label = 4;
  }
 }
 if ((label|0) == 3) {
  $call = (___uflow($f)|0);
  $cmp2 = ($call|0)<(0);
  if ($cmp2) {
   label = 4;
  } else {
   $2 = load4($shlim);
   $tobool4 = ($2|0)==(0);
   $rend17$phi$trans$insert = ((($f)) + 8|0);
   if ($tobool4) {
    $$pre = load4($rend17$phi$trans$insert);
    $$phi$trans$insert$phi$trans$insert = ((($f)) + 4|0);
    $$pre26$pre = load4($$phi$trans$insert$phi$trans$insert);
    $$pre29 = ((($f)) + 108|0);
    $$sink = $$pre;$7 = $$pre;$8 = $$pre26$pre;$shcnt28$pre$phiZ2D = $$pre29;
   } else {
    $3 = load4($rend17$phi$trans$insert);
    $rpos = ((($f)) + 4|0);
    $4 = load4($rpos);
    $sub$ptr$rhs$cast = $4;
    $sub$ptr$sub = (($3) - ($sub$ptr$rhs$cast))|0;
    $shcnt7 = ((($f)) + 108|0);
    $5 = load4($shcnt7);
    $sub = (($2) - ($5))|0;
    $cmp9 = ($sub$ptr$sub|0)<($sub|0);
    $6 = $3;
    if ($cmp9) {
     $$sink = $6;$7 = $6;$8 = $4;$shcnt28$pre$phiZ2D = $shcnt7;
    } else {
     $sub8 = (($sub) + -1)|0;
     $add$ptr = (($4) + ($sub8)|0);
     $$sink = $add$ptr;$7 = $6;$8 = $4;$shcnt28$pre$phiZ2D = $shcnt7;
    }
   }
   $shend18 = ((($f)) + 100|0);
   store4($shend18,$$sink);
   $tobool21 = ($7|0)==(0|0);
   if (!($tobool21)) {
    $sub$ptr$lhs$cast25 = $7;
    $sub$ptr$rhs$cast26 = $8;
    $9 = load4($shcnt28$pre$phiZ2D);
    $sub$ptr$sub27 = (($sub$ptr$lhs$cast25) + 1)|0;
    $add = (($sub$ptr$sub27) - ($sub$ptr$rhs$cast26))|0;
    $add29 = (($add) + ($9))|0;
    store4($shcnt28$pre$phiZ2D,$add29);
   }
   $arrayidx = ((($8)) + -1|0);
   $10 = load1($arrayidx);
   $conv = $10&255;
   $cmp32 = ($conv|0)==($call|0);
   if ($cmp32) {
    $retval$0 = $call;
   } else {
    $conv35 = $call&255;
    store1($arrayidx,$conv35);
    $retval$0 = $call;
   }
  }
 }
 if ((label|0) == 4) {
  $shend = ((($f)) + 100|0);
  store4($shend,0);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function _isspace($c) {
 $c = $c|0;
 var $0 = 0, $cmp = 0, $cmp1 = 0, $lor$ext = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($c|0)==(32);
 $sub = (($c) + -9)|0;
 $cmp1 = ($sub>>>0)<(5);
 $0 = $cmp | $cmp1;
 $lor$ext = $0&1;
 return ($lor$ext|0);
}
function ___uflow($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $c = 0, $call = 0, $call1 = 0, $cmp = 0, $conv = 0, $read = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 $call = (___toread($f)|0);
 $tobool = ($call|0)==(0);
 if ($tobool) {
  $read = ((($f)) + 32|0);
  $0 = load4($read);
  $call1 = (FUNCTION_TABLE_iiii[$0 & 15]($f,$c,1)|0);
  $cmp = ($call1|0)==(1);
  if ($cmp) {
   $1 = load1($c);
   $conv = $1&255;
   $retval$0 = $conv;
  } else {
   $retval$0 = -1;
  }
 } else {
  $retval$0 = -1;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___toread($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $cmp = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or9 = 0, $rend = 0, $retval$0 = 0;
 var $rpos = 0, $sext = 0, $sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $wbase = ((($f)) + 28|0);
 $2 = load4($wbase);
 $cmp = ($1>>>0)>($2>>>0);
 if ($cmp) {
  $write = ((($f)) + 36|0);
  $3 = load4($write);
  (FUNCTION_TABLE_iiii[$3 & 15]($f,0,0)|0);
 }
 $wend = ((($f)) + 16|0);
 store4($wend,0);
 store4($wbase,0);
 store4($wpos,0);
 $4 = load4($f);
 $and = $4 & 4;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $buf = ((($f)) + 44|0);
  $5 = load4($buf);
  $buf_size = ((($f)) + 48|0);
  $6 = load4($buf_size);
  $add$ptr = (($5) + ($6)|0);
  $rend = ((($f)) + 8|0);
  store4($rend,$add$ptr);
  $rpos = ((($f)) + 4|0);
  store4($rpos,$add$ptr);
  $7 = $4 << 27;
  $sext = $7 >> 31;
  $retval$0 = $sext;
 } else {
  $or9 = $4 | 32;
  store4($f,$or9);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function _atof($s) {
 $s = $s|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_strtod($s,0));
 return (+$call);
}
function _strtod($s,$p) {
 $s = $s|0;
 $p = $p|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_strtox($s,$p,1));
 return (+$call);
}
function _strtox($s,$p,$prec) {
 $s = $s|0;
 $p = $p|0;
 $prec = $prec|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $add$ptr = 0, $buf = 0, $call = 0.0, $cond = 0, $f = 0, $lock = 0, $rend = 0, $rpos = 0, $shcnt = 0, $sub$ptr$sub = 0, $tobool = 0, $tobool3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $f = sp;
 ; store8($f,i64_const(0,0),4); store8($f+8|0,i64_const(0,0),4); store8($f+16|0,i64_const(0,0),4); store8($f+24|0,i64_const(0,0),4); store8($f+32|0,i64_const(0,0),4); store8($f+40|0,i64_const(0,0),4); store8($f+48|0,i64_const(0,0),4); store8($f+56|0,i64_const(0,0),4); store8($f+64|0,i64_const(0,0),4); store8($f+72|0,i64_const(0,0),4); store8($f+80|0,i64_const(0,0),4); store8($f+88|0,i64_const(0,0),4); store8($f+96|0,i64_const(0,0),4); store8($f+104|0,i64_const(0,0),4); store8($f+112|0,i64_const(0,0),4); store4($f+120|0,0,4);
 $rpos = ((($f)) + 4|0);
 store4($rpos,$s);
 $rend = ((($f)) + 8|0);
 store4($rend,(-1));
 $buf = ((($f)) + 44|0);
 store4($buf,$s);
 $lock = ((($f)) + 76|0);
 store4($lock,-1);
 ___shlim($f,0);
 $call = (+___floatscan($f,$prec,1));
 $shcnt = ((($f)) + 108|0);
 $0 = load4($shcnt);
 $1 = load4($rpos);
 $2 = load4($rend);
 $sub$ptr$sub = (($1) - ($2))|0;
 $add = (($sub$ptr$sub) + ($0))|0;
 $tobool = ($p|0)==(0|0);
 if (!($tobool)) {
  $tobool3 = ($add|0)!=(0);
  $add$ptr = (($s) + ($add)|0);
  $cond = $tobool3 ? $add$ptr : $s;
  store4($p,$cond);
 }
 STACKTOP = sp;return (+$call);
}
function ___floatscan($f,$prec,$pok) {
 $f = $f|0;
 $prec = $prec|0;
 $pok = $pok|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arrayidx = 0, $arrayidx95 = 0, $bits$0$ph = 0, $c$0 = 0, $c$1$lcssa = 0;
 var $c$197 = 0, $c$2 = 0, $c$395 = 0, $c$4 = 0, $c$5 = 0, $c$6 = 0, $call = 0, $call113 = 0, $call133 = 0, $call157 = 0, $call189 = 0, $call215 = 0, $call229 = 0, $call23 = 0, $call236 = 0.0, $call246 = 0.0, $call43 = 0, $call6 = 0, $cmp = 0, $cmp101 = 0;
 var $cmp106 = 0, $cmp126 = 0, $cmp136 = 0, $cmp150 = 0, $cmp16 = 0, $cmp161 = 0, $cmp165 = 0, $cmp169 = 0, $cmp172 = 0, $cmp176 = 0, $cmp217 = 0, $cmp222 = 0, $cmp233 = 0, $cmp26 = 0, $cmp29 = 0, $cmp31 = 0, $cmp36 = 0, $cmp53 = 0, $cmp57 = 0, $cmp70 = 0;
 var $cmp70$old = 0, $cmp9 = 0, $cmp91 = 0, $cmp97 = 0, $cond = 0, $cond135 = 0, $cond159 = 0, $cond231 = 0, $conv = 0, $conv111 = 0, $conv12 = 0, $conv131 = 0, $conv155 = 0, $conv21 = 0, $conv227 = 0, $conv28 = 0, $conv41 = 0, $conv84 = Math_fround(0), $conv86 = 0.0, $conv96 = 0;
 var $dec = 0, $dec19293 = 0, $dec19293$in = 0, $emin$0$ph = 0, $i$0$lcssa = 0, $i$096 = 0, $i$1 = 0, $i$294 = 0, $i$3 = 0, $i$4 = 0, $inc = 0, $inc118 = 0, $inc204 = 0, $incdec$ptr = 0, $incdec$ptr110 = 0, $incdec$ptr130 = 0, $incdec$ptr143 = 0, $incdec$ptr154 = 0, $incdec$ptr184 = 0, $incdec$ptr199 = 0;
 var $incdec$ptr20 = 0, $incdec$ptr212 = 0, $incdec$ptr226 = 0, $incdec$ptr242 = 0, $incdec$ptr40 = 0, $incdec$ptr64 = 0, $incdec$ptr77 = 0, $mul = 0, $mul85 = Math_fround(0), $or = 0, $or$cond = 0, $or$cond2 = 0, $or$cond3 = 0, $or$cond4 = 0, $or232 = 0, $or94 = 0, $retval$0 = 0.0, $rpos = 0, $shend = 0, $sign$0 = 0;
 var $sub13 = 0, $sub160 = 0, $sub164 = 0, $sub168 = 0, $tobool = 0, $tobool140 = 0, $tobool181 = 0, $tobool193 = 0, $tobool19392 = 0, $tobool209 = 0, $tobool239 = 0, $tobool55 = 0, $tobool61 = 0, $tobool67 = 0, $tobool88 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 switch ($prec|0) {
 case 0:  {
  $bits$0$ph = 24;$emin$0$ph = -149;
  label = 4;
  break;
 }
 case 1:  {
  $bits$0$ph = 53;$emin$0$ph = -1074;
  label = 4;
  break;
 }
 case 2:  {
  $bits$0$ph = 53;$emin$0$ph = -1074;
  label = 4;
  break;
 }
 default: {
  $retval$0 = 0.0;
 }
 }
 L4: do {
  if ((label|0) == 4) {
   $rpos = ((($f)) + 4|0);
   $shend = ((($f)) + 100|0);
   while(1) {
    $0 = load4($rpos);
    $1 = load4($shend);
    $cmp = ($0>>>0)<($1>>>0);
    if ($cmp) {
     $incdec$ptr = ((($0)) + 1|0);
     store4($rpos,$incdec$ptr);
     $2 = load1($0);
     $conv = $2&255;
     $cond = $conv;
    } else {
     $call = (___shgetc($f)|0);
     $cond = $call;
    }
    $call6 = (_isspace($cond)|0);
    $tobool = ($call6|0)==(0);
    if ($tobool) {
     break;
    }
   }
   L13: do {
    switch ($cond|0) {
    case 43: case 45:  {
     $cmp9 = ($cond|0)==(45);
     $conv12 = $cmp9&1;
     $mul = $conv12 << 1;
     $sub13 = (1 - ($mul))|0;
     $3 = load4($rpos);
     $4 = load4($shend);
     $cmp16 = ($3>>>0)<($4>>>0);
     if ($cmp16) {
      $incdec$ptr20 = ((($3)) + 1|0);
      store4($rpos,$incdec$ptr20);
      $5 = load1($3);
      $conv21 = $5&255;
      $c$0 = $conv21;$sign$0 = $sub13;
      break L13;
     } else {
      $call23 = (___shgetc($f)|0);
      $c$0 = $call23;$sign$0 = $sub13;
      break L13;
     }
     break;
    }
    default: {
     $c$0 = $cond;$sign$0 = 1;
    }
    }
   } while(0);
   $c$197 = $c$0;$i$096 = 0;
   while(1) {
    $or = $c$197 | 32;
    $arrayidx = (6390 + ($i$096)|0);
    $6 = load1($arrayidx);
    $conv28 = $6 << 24 >> 24;
    $cmp29 = ($or|0)==($conv28|0);
    if (!($cmp29)) {
     $c$1$lcssa = $c$197;$i$0$lcssa = $i$096;
     break;
    }
    $cmp31 = ($i$096>>>0)<(7);
    do {
     if ($cmp31) {
      $7 = load4($rpos);
      $8 = load4($shend);
      $cmp36 = ($7>>>0)<($8>>>0);
      if ($cmp36) {
       $incdec$ptr40 = ((($7)) + 1|0);
       store4($rpos,$incdec$ptr40);
       $9 = load1($7);
       $conv41 = $9&255;
       $c$2 = $conv41;
       break;
      } else {
       $call43 = (___shgetc($f)|0);
       $c$2 = $call43;
       break;
      }
     } else {
      $c$2 = $c$197;
     }
    } while(0);
    $inc = (($i$096) + 1)|0;
    $cmp26 = ($inc>>>0)<(8);
    if ($cmp26) {
     $c$197 = $c$2;$i$096 = $inc;
    } else {
     $c$1$lcssa = $c$2;$i$0$lcssa = $inc;
     break;
    }
   }
   L29: do {
    switch ($i$0$lcssa|0) {
    case 8:  {
     break;
    }
    case 3:  {
     label = 23;
     break;
    }
    default: {
     $cmp53 = ($i$0$lcssa>>>0)>(3);
     $tobool55 = ($pok|0)!=(0);
     $or$cond2 = $tobool55 & $cmp53;
     if ($or$cond2) {
      $cmp57 = ($i$0$lcssa|0)==(8);
      if ($cmp57) {
       break L29;
      } else {
       label = 23;
       break L29;
      }
     }
     $tobool88 = ($i$0$lcssa|0)==(0);
     L34: do {
      if ($tobool88) {
       $c$395 = $c$1$lcssa;$i$294 = 0;
       while(1) {
        $or94 = $c$395 | 32;
        $arrayidx95 = (6399 + ($i$294)|0);
        $13 = load1($arrayidx95);
        $conv96 = $13 << 24 >> 24;
        $cmp97 = ($or94|0)==($conv96|0);
        if (!($cmp97)) {
         $c$5 = $c$395;$i$3 = $i$294;
         break L34;
        }
        $cmp101 = ($i$294>>>0)<(2);
        do {
         if ($cmp101) {
          $14 = load4($rpos);
          $15 = load4($shend);
          $cmp106 = ($14>>>0)<($15>>>0);
          if ($cmp106) {
           $incdec$ptr110 = ((($14)) + 1|0);
           store4($rpos,$incdec$ptr110);
           $16 = load1($14);
           $conv111 = $16&255;
           $c$4 = $conv111;
           break;
          } else {
           $call113 = (___shgetc($f)|0);
           $c$4 = $call113;
           break;
          }
         } else {
          $c$4 = $c$395;
         }
        } while(0);
        $inc118 = (($i$294) + 1)|0;
        $cmp91 = ($inc118>>>0)<(3);
        if ($cmp91) {
         $c$395 = $c$4;$i$294 = $inc118;
        } else {
         $c$5 = $c$4;$i$3 = $inc118;
         break;
        }
       }
      } else {
       $c$5 = $c$1$lcssa;$i$3 = $i$0$lcssa;
      }
     } while(0);
     switch ($i$3|0) {
     case 3:  {
      $17 = load4($rpos);
      $18 = load4($shend);
      $cmp126 = ($17>>>0)<($18>>>0);
      if ($cmp126) {
       $incdec$ptr130 = ((($17)) + 1|0);
       store4($rpos,$incdec$ptr130);
       $19 = load1($17);
       $conv131 = $19&255;
       $cond135 = $conv131;
      } else {
       $call133 = (___shgetc($f)|0);
       $cond135 = $call133;
      }
      $cmp136 = ($cond135|0)==(40);
      if ($cmp136) {
       $i$4 = 1;
      } else {
       $20 = load4($shend);
       $tobool140 = ($20|0)==(0|0);
       if ($tobool140) {
        $retval$0 = nan;
        break L4;
       }
       $21 = load4($rpos);
       $incdec$ptr143 = ((($21)) + -1|0);
       store4($rpos,$incdec$ptr143);
       $retval$0 = nan;
       break L4;
      }
      while(1) {
       $22 = load4($rpos);
       $23 = load4($shend);
       $cmp150 = ($22>>>0)<($23>>>0);
       if ($cmp150) {
        $incdec$ptr154 = ((($22)) + 1|0);
        store4($rpos,$incdec$ptr154);
        $24 = load1($22);
        $conv155 = $24&255;
        $cond159 = $conv155;
       } else {
        $call157 = (___shgetc($f)|0);
        $cond159 = $call157;
       }
       $sub160 = (($cond159) + -48)|0;
       $cmp161 = ($sub160>>>0)<(10);
       $sub164 = (($cond159) + -65)|0;
       $cmp165 = ($sub164>>>0)<(26);
       $or$cond = $cmp161 | $cmp165;
       if (!($or$cond)) {
        $sub168 = (($cond159) + -97)|0;
        $cmp169 = ($sub168>>>0)<(26);
        $cmp172 = ($cond159|0)==(95);
        $or$cond3 = $cmp172 | $cmp169;
        if (!($or$cond3)) {
         break;
        }
       }
       $inc204 = (($i$4) + 1)|0;
       $i$4 = $inc204;
      }
      $cmp176 = ($cond159|0)==(41);
      if ($cmp176) {
       $retval$0 = nan;
       break L4;
      }
      $25 = load4($shend);
      $tobool181 = ($25|0)==(0|0);
      if (!($tobool181)) {
       $26 = load4($rpos);
       $incdec$ptr184 = ((($26)) + -1|0);
       store4($rpos,$incdec$ptr184);
      }
      if (!($tobool55)) {
       $call189 = (___errno_location()|0);
       store4($call189,22);
       ___shlim($f,0);
       $retval$0 = 0.0;
       break L4;
      }
      $tobool19392 = ($i$4|0)==(0);
      if ($tobool19392) {
       $retval$0 = nan;
       break L4;
      } else {
       $dec19293$in = $i$4;
      }
      while(1) {
       $dec19293 = (($dec19293$in) + -1)|0;
       if (!($tobool181)) {
        $27 = load4($rpos);
        $incdec$ptr199 = ((($27)) + -1|0);
        store4($rpos,$incdec$ptr199);
       }
       $tobool193 = ($dec19293|0)==(0);
       if ($tobool193) {
        $retval$0 = nan;
        break L4;
       } else {
        $dec19293$in = $dec19293;
       }
      }
      break;
     }
     case 0:  {
      $cmp217 = ($c$5|0)==(48);
      if ($cmp217) {
       $30 = load4($rpos);
       $31 = load4($shend);
       $cmp222 = ($30>>>0)<($31>>>0);
       if ($cmp222) {
        $incdec$ptr226 = ((($30)) + 1|0);
        store4($rpos,$incdec$ptr226);
        $32 = load1($30);
        $conv227 = $32&255;
        $cond231 = $conv227;
       } else {
        $call229 = (___shgetc($f)|0);
        $cond231 = $call229;
       }
       $or232 = $cond231 | 32;
       $cmp233 = ($or232|0)==(120);
       if ($cmp233) {
        $call236 = (+_hexfloat($f,$bits$0$ph,$emin$0$ph,$sign$0,$pok));
        $retval$0 = $call236;
        break L4;
       }
       $33 = load4($shend);
       $tobool239 = ($33|0)==(0|0);
       if ($tobool239) {
        $c$6 = 48;
       } else {
        $34 = load4($rpos);
        $incdec$ptr242 = ((($34)) + -1|0);
        store4($rpos,$incdec$ptr242);
        $c$6 = 48;
       }
      } else {
       $c$6 = $c$5;
      }
      $call246 = (+_decfloat($f,$c$6,$bits$0$ph,$emin$0$ph,$sign$0,$pok));
      $retval$0 = $call246;
      break L4;
      break;
     }
     default: {
      $28 = load4($shend);
      $tobool209 = ($28|0)==(0|0);
      if (!($tobool209)) {
       $29 = load4($rpos);
       $incdec$ptr212 = ((($29)) + -1|0);
       store4($rpos,$incdec$ptr212);
      }
      $call215 = (___errno_location()|0);
      store4($call215,22);
      ___shlim($f,0);
      $retval$0 = 0.0;
      break L4;
     }
     }
    }
    }
   } while(0);
   if ((label|0) == 23) {
    $10 = load4($shend);
    $tobool61 = ($10|0)==(0|0);
    if (!($tobool61)) {
     $11 = load4($rpos);
     $incdec$ptr64 = ((($11)) + -1|0);
     store4($rpos,$incdec$ptr64);
    }
    $tobool67 = ($pok|0)!=(0);
    $cmp70 = ($i$0$lcssa>>>0)>(3);
    $or$cond4 = $tobool67 & $cmp70;
    if ($or$cond4) {
     $i$1 = $i$0$lcssa;
     while(1) {
      if (!($tobool61)) {
       $12 = load4($rpos);
       $incdec$ptr77 = ((($12)) + -1|0);
       store4($rpos,$incdec$ptr77);
      }
      $dec = (($i$1) + -1)|0;
      $cmp70$old = ($dec>>>0)>(3);
      if ($cmp70$old) {
       $i$1 = $dec;
      } else {
       break;
      }
     }
    }
   }
   $conv84 = (Math_fround(($sign$0|0)));
   $mul85 = Math_fround($conv84 * Math_fround(inf));
   $conv86 = +$mul85;
   $retval$0 = $conv86;
  }
 } while(0);
 return (+$retval$0);
}
function _hexfloat($f,$bits,$emin,$sign,$pok) {
 $f = $f|0;
 $bits = $bits|0;
 $emin = $emin|0;
 $sign = $sign|0;
 $pok = $pok|0;
 var $$pre = 0.0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add176 = i64(), $add210 = 0, $add214 = 0, $add220 = i64(), $add256 = 0.0, $add259 = 0.0, $add73 = 0, $add80 = 0.0, $add86 = 0.0, $and = 0, $bias$0 = 0.0, $bits$addr$0 = 0, $bits$addr$0108 = 0, $bits$addr$0109 = 0, $c$0 = 0;
 var $c$1$ph = 0, $c$2 = 0, $c$2$lcssa = 0, $call = 0, $call101 = 0, $call13 = 0, $call149 = i64(), $call187 = 0, $call197 = 0, $call240 = 0.0, $call242 = 0.0, $call263 = 0, $call266 = 0.0, $call27 = 0, $call44 = 0, $cmp = 0, $cmp141 = 0, $cmp141121 = 0, $cmp146 = 0, $cmp150 = 0;
 var $cmp184 = 0, $cmp194 = 0, $cmp20 = 0, $cmp203 = 0, $cmp203115 = 0, $cmp206 = 0, $cmp223 = 0, $cmp235 = 0, $cmp244 = 0, $cmp31 = 0, $cmp31125 = 0, $cmp37 = 0, $cmp49 = 0, $cmp52 = 0, $cmp57 = 0, $cmp6 = 0, $cmp62 = 0, $cmp70 = 0, $cmp75 = 0, $cmp94 = 0;
 var $cond46 = 0, $conv = 0, $conv11 = 0, $conv135 = 0.0, $conv179 = 0.0, $conv183 = i64(), $conv188 = 0.0, $conv193 = i64(), $conv198 = 0.0, $conv219 = i64(), $conv221 = i64(), $conv229 = 0, $conv241111 = 0.0, $conv25 = 0, $conv253$pre$phiZ2D = 0.0, $conv254 = 0.0, $conv265 = 0, $conv42 = 0, $conv78 = 0.0, $conv99 = 0;
 var $d$0 = 0, $dc$0 = i64(), $dc$0$rp$1 = i64(), $dc$1 = i64(), $dc$2123 = i64(), $dec = i64(), $dec217 = i64(), $div = 0.0, $e2$0 = i64(), $e2$1$lcssa = i64(), $e2$1118 = i64(), $gotdig$0 = 0, $gotdig$2 = 0, $gotdig$3 = 0, $gotrad$0 = 0, $gotrad$1 = 0, $gottail$0 = 0, $gottail$0$ = 0, $gottail$1 = 0, $gottail$2 = 0;
 var $inc = i64(), $inc144 = i64(), $inc251 = 0, $incdec$ptr = 0, $incdec$ptr10 = 0, $incdec$ptr111 = 0, $incdec$ptr120 = 0, $incdec$ptr129 = 0, $incdec$ptr159 = 0, $incdec$ptr170 = 0, $incdec$ptr24 = 0, $incdec$ptr41 = 0, $incdec$ptr98 = 0, $mul = 0, $mul136 = 0.0, $mul143 = 0, $mul174 = i64(), $mul180 = 0.0, $mul189 = 0.0, $mul190 = 0.0;
 var $mul199 = 0.0, $mul200 = 0.0, $mul255 = 0.0, $mul258 = 0.0, $mul79 = 0.0, $mul85 = 0.0, $not$cmp206 = 0, $or = 0, $or$cond = 0, $or$cond103 = 0, $or$cond136 = 0, $or$cond2 = 0, $or$cond3 = 0, $or145 = 0, $or65 = 0, $retval$0 = 0.0, $rp$0126 = i64(), $rp$1 = i64(), $rp$2 = i64(), $rpos = 0;
 var $scale$0 = 0.0, $scale$1 = 0.0, $scale$2 = 0.0, $shend = 0, $sub = 0, $sub175 = i64(), $sub182 = 0, $sub192 = 0, $sub211 = 0.0, $sub211$pn = 0.0, $sub222 = i64(), $sub239 = 0, $sub239110 = 0, $sub260 = 0.0, $sub51 = 0, $sub66 = 0, $tobool = 0, $tobool105 = 0, $tobool108 = 0, $tobool114 = 0;
 var $tobool123 = 0, $tobool126 = 0, $tobool138 = 0, $tobool153 = 0, $tobool156 = 0, $tobool167 = 0, $tobool177 = 0, $tobool247 = 0, $tobool249 = 0, $tobool261 = 0, $tobool82 = 0, $tobool83 = 0, $x$0 = 0, $x$1 = 0, $x$2 = 0, $x$3$lcssa = 0, $x$3122 = 0, $x$4$lcssa = 0, $x$4116 = 0, $x$5 = 0;
 var $x$6 = 0, $y$0 = 0.0, $y$0$add86 = 0.0, $y$1 = 0.0, $y$2 = 0.0, $y$3$lcssa = 0.0, $y$3117 = 0.0, $y$4 = 0.0, $y$5 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $rpos = ((($f)) + 4|0);
 $0 = load4($rpos);
 $shend = ((($f)) + 100|0);
 $1 = load4($shend);
 $cmp = ($0>>>0)<($1>>>0);
 if ($cmp) {
  $incdec$ptr = ((($0)) + 1|0);
  store4($rpos,$incdec$ptr);
  $2 = load1($0);
  $conv = $2&255;
  $c$0 = $conv;$gotdig$0 = 0;
 } else {
  $call = (___shgetc($f)|0);
  $c$0 = $call;$gotdig$0 = 0;
 }
 L4: while(1) {
  switch ($c$0|0) {
  case 46:  {
   label = 8;
   break L4;
   break;
  }
  case 48:  {
   break;
  }
  default: {
   $c$2 = $c$0;$dc$0 = i64_const(0,0);$gotdig$2 = $gotdig$0;$gotrad$0 = 0;$gottail$0 = 0;$rp$1 = i64_const(0,0);$scale$0 = 1.0;$x$0 = 0;$y$0 = 0.0;
   break L4;
  }
  }
  $3 = load4($rpos);
  $4 = load4($shend);
  $cmp6 = ($3>>>0)<($4>>>0);
  if ($cmp6) {
   $incdec$ptr10 = ((($3)) + 1|0);
   store4($rpos,$incdec$ptr10);
   $5 = load1($3);
   $conv11 = $5&255;
   $c$0 = $conv11;$gotdig$0 = 1;
   continue;
  } else {
   $call13 = (___shgetc($f)|0);
   $c$0 = $call13;$gotdig$0 = 1;
   continue;
  }
 }
 if ((label|0) == 8) {
  $6 = load4($rpos);
  $7 = load4($shend);
  $cmp20 = ($6>>>0)<($7>>>0);
  if ($cmp20) {
   $incdec$ptr24 = ((($6)) + 1|0);
   store4($rpos,$incdec$ptr24);
   $8 = load1($6);
   $conv25 = $8&255;
   $c$1$ph = $conv25;
  } else {
   $call27 = (___shgetc($f)|0);
   $c$1$ph = $call27;
  }
  $cmp31125 = ($c$1$ph|0)==(48);
  if ($cmp31125) {
   $rp$0126 = i64_const(0,0);
   while(1) {
    $9 = load4($rpos);
    $10 = load4($shend);
    $cmp37 = ($9>>>0)<($10>>>0);
    if ($cmp37) {
     $incdec$ptr41 = ((($9)) + 1|0);
     store4($rpos,$incdec$ptr41);
     $11 = load1($9);
     $conv42 = $11&255;
     $cond46 = $conv42;
    } else {
     $call44 = (___shgetc($f)|0);
     $cond46 = $call44;
    }
    $dec = i64_add($rp$0126,i64_const(4294967295,4294967295));
    $cmp31 = ($cond46|0)==(48);
    if ($cmp31) {
     $rp$0126 = $dec;
    } else {
     $c$2 = $cond46;$dc$0 = i64_const(0,0);$gotdig$2 = 1;$gotrad$0 = 1;$gottail$0 = 0;$rp$1 = $dec;$scale$0 = 1.0;$x$0 = 0;$y$0 = 0.0;
     break;
    }
   }
  } else {
   $c$2 = $c$1$ph;$dc$0 = i64_const(0,0);$gotdig$2 = $gotdig$0;$gotrad$0 = 1;$gottail$0 = 0;$rp$1 = i64_const(0,0);$scale$0 = 1.0;$x$0 = 0;$y$0 = 0.0;
  }
 }
 while(1) {
  $sub = (($c$2) + -48)|0;
  $cmp49 = ($sub>>>0)<(10);
  $cmp57 = ($c$2|0)==(46);
  if (!($cmp49)) {
   $or = $c$2 | 32;
   $sub51 = (($or) + -97)|0;
   $cmp52 = ($sub51>>>0)<(6);
   $or$cond3 = $cmp57 | $cmp52;
   if (!($or$cond3)) {
    $c$2$lcssa = $c$2;
    break;
   }
  }
  if ($cmp57) {
   $tobool = ($gotrad$0|0)==(0);
   if ($tobool) {
    $dc$1 = $dc$0;$gotdig$3 = $gotdig$2;$gotrad$1 = 1;$gottail$2 = $gottail$0;$rp$2 = $dc$0;$scale$2 = $scale$0;$x$2 = $x$0;$y$2 = $y$0;
   } else {
    $c$2$lcssa = 46;
    break;
   }
  } else {
   $cmp62 = ($c$2|0)>(57);
   $or65 = $c$2 | 32;
   $sub66 = (($or65) + -87)|0;
   $d$0 = $cmp62 ? $sub66 : $sub;
   $cmp70 = i64_slt($dc$0,i64_const(8,0));
   do {
    if ($cmp70) {
     $mul = $x$0 << 4;
     $add73 = (($d$0) + ($mul))|0;
     $gottail$1 = $gottail$0;$scale$1 = $scale$0;$x$1 = $add73;$y$1 = $y$0;
    } else {
     $cmp75 = i64_slt($dc$0,i64_const(14,0));
     if ($cmp75) {
      $conv78 = (+($d$0|0));
      $div = $scale$0 * 0.0625;
      $mul79 = $div * $conv78;
      $add80 = $y$0 + $mul79;
      $gottail$1 = $gottail$0;$scale$1 = $div;$x$1 = $x$0;$y$1 = $add80;
      break;
     } else {
      $tobool82 = ($d$0|0)==(0);
      $tobool83 = ($gottail$0|0)!=(0);
      $or$cond = $tobool83 | $tobool82;
      $mul85 = $scale$0 * 0.5;
      $add86 = $y$0 + $mul85;
      $y$0$add86 = $or$cond ? $y$0 : $add86;
      $gottail$0$ = $or$cond ? $gottail$0 : 1;
      $gottail$1 = $gottail$0$;$scale$1 = $scale$0;$x$1 = $x$0;$y$1 = $y$0$add86;
      break;
     }
    }
   } while(0);
   $inc = i64_add($dc$0,i64_const(1,0));
   $dc$1 = $inc;$gotdig$3 = 1;$gotrad$1 = $gotrad$0;$gottail$2 = $gottail$1;$rp$2 = $rp$1;$scale$2 = $scale$1;$x$2 = $x$1;$y$2 = $y$1;
  }
  $12 = load4($rpos);
  $13 = load4($shend);
  $cmp94 = ($12>>>0)<($13>>>0);
  if ($cmp94) {
   $incdec$ptr98 = ((($12)) + 1|0);
   store4($rpos,$incdec$ptr98);
   $14 = load1($12);
   $conv99 = $14&255;
   $c$2 = $conv99;$dc$0 = $dc$1;$gotdig$2 = $gotdig$3;$gotrad$0 = $gotrad$1;$gottail$0 = $gottail$2;$rp$1 = $rp$2;$scale$0 = $scale$2;$x$0 = $x$2;$y$0 = $y$2;
   continue;
  } else {
   $call101 = (___shgetc($f)|0);
   $c$2 = $call101;$dc$0 = $dc$1;$gotdig$2 = $gotdig$3;$gotrad$0 = $gotrad$1;$gottail$0 = $gottail$2;$rp$1 = $rp$2;$scale$0 = $scale$2;$x$0 = $x$2;$y$0 = $y$2;
   continue;
  }
 }
 $tobool105 = ($gotdig$2|0)==(0);
 do {
  if ($tobool105) {
   $15 = load4($shend);
   $tobool108 = ($15|0)!=(0|0);
   if ($tobool108) {
    $16 = load4($rpos);
    $incdec$ptr111 = ((($16)) + -1|0);
    store4($rpos,$incdec$ptr111);
   }
   $tobool114 = ($pok|0)==(0);
   if ($tobool114) {
    ___shlim($f,0);
   } else {
    if ($tobool108) {
     $17 = load4($rpos);
     $incdec$ptr120 = ((($17)) + -1|0);
     store4($rpos,$incdec$ptr120);
    }
    $tobool123 = ($gotrad$0|0)==(0);
    $tobool126 = ($15|0)==(0|0);
    $or$cond136 = $tobool123 | $tobool126;
    if (!($or$cond136)) {
     $18 = load4($rpos);
     $incdec$ptr129 = ((($18)) + -1|0);
     store4($rpos,$incdec$ptr129);
    }
   }
   $conv135 = (+($sign|0));
   $mul136 = $conv135 * 0.0;
   $retval$0 = $mul136;
  } else {
   $tobool138 = ($gotrad$0|0)==(0);
   $dc$0$rp$1 = $tobool138 ? $dc$0 : $rp$1;
   $cmp141121 = i64_slt($dc$0,i64_const(8,0));
   if ($cmp141121) {
    $dc$2123 = $dc$0;$x$3122 = $x$0;
    while(1) {
     $mul143 = $x$3122 << 4;
     $inc144 = i64_add($dc$2123,i64_const(1,0));
     $cmp141 = i64_slt($inc144,i64_const(8,0));
     if ($cmp141) {
      $dc$2123 = $inc144;$x$3122 = $mul143;
     } else {
      $x$3$lcssa = $mul143;
      break;
     }
    }
   } else {
    $x$3$lcssa = $x$0;
   }
   $or145 = $c$2$lcssa | 32;
   $cmp146 = ($or145|0)==(112);
   if ($cmp146) {
    $call149 = (i64(_scanexp($f,$pok)));
    $cmp150 = i64_eq($call149,i64_const(0,2147483648));
    if ($cmp150) {
     $tobool153 = ($pok|0)==(0);
     if ($tobool153) {
      ___shlim($f,0);
      $retval$0 = 0.0;
      break;
     }
     $19 = load4($shend);
     $tobool156 = ($19|0)==(0|0);
     if ($tobool156) {
      $e2$0 = i64_const(0,0);
     } else {
      $20 = load4($rpos);
      $incdec$ptr159 = ((($20)) + -1|0);
      store4($rpos,$incdec$ptr159);
      $e2$0 = i64_const(0,0);
     }
    } else {
     $e2$0 = $call149;
    }
   } else {
    $21 = load4($shend);
    $tobool167 = ($21|0)==(0|0);
    if ($tobool167) {
     $e2$0 = i64_const(0,0);
    } else {
     $22 = load4($rpos);
     $incdec$ptr170 = ((($22)) + -1|0);
     store4($rpos,$incdec$ptr170);
     $e2$0 = i64_const(0,0);
    }
   }
   $mul174 = i64_shl($dc$0$rp$1,i64_const(2,0));
   $sub175 = i64_add($mul174,i64_const(4294967264,4294967295));
   $add176 = i64_add($sub175,$e2$0);
   $tobool177 = ($x$3$lcssa|0)==(0);
   if ($tobool177) {
    $conv179 = (+($sign|0));
    $mul180 = $conv179 * 0.0;
    $retval$0 = $mul180;
    break;
   }
   $sub182 = (0 - ($emin))|0;
   $conv183 = i64_sext($sub182);
   $cmp184 = i64_sgt($add176,$conv183);
   if ($cmp184) {
    $call187 = (___errno_location()|0);
    store4($call187,34);
    $conv188 = (+($sign|0));
    $mul189 = $conv188 * 1.7976931348623157E+308;
    $mul190 = $mul189 * 1.7976931348623157E+308;
    $retval$0 = $mul190;
    break;
   }
   $sub192 = (($emin) + -106)|0;
   $conv193 = i64_sext($sub192);
   $cmp194 = i64_slt($add176,$conv193);
   if ($cmp194) {
    $call197 = (___errno_location()|0);
    store4($call197,34);
    $conv198 = (+($sign|0));
    $mul199 = $conv198 * 2.2250738585072014E-308;
    $mul200 = $mul199 * 2.2250738585072014E-308;
    $retval$0 = $mul200;
    break;
   }
   $cmp203115 = ($x$3$lcssa|0)>(-1);
   if ($cmp203115) {
    $e2$1118 = $add176;$x$4116 = $x$3$lcssa;$y$3117 = $y$0;
    while(1) {
     $cmp206 = !($y$3117 >= 0.5);
     $add214 = $x$4116 << 1;
     $sub211 = $y$3117 + -1.0;
     $not$cmp206 = $cmp206 ^ 1;
     $add210 = $not$cmp206&1;
     $x$5 = $add214 | $add210;
     $sub211$pn = $cmp206 ? $y$3117 : $sub211;
     $y$4 = $y$3117 + $sub211$pn;
     $dec217 = i64_add($e2$1118,i64_const(4294967295,4294967295));
     $cmp203 = ($x$5|0)>(-1);
     if ($cmp203) {
      $e2$1118 = $dec217;$x$4116 = $x$5;$y$3117 = $y$4;
     } else {
      $e2$1$lcssa = $dec217;$x$4$lcssa = $x$5;$y$3$lcssa = $y$4;
      break;
     }
    }
   } else {
    $e2$1$lcssa = $add176;$x$4$lcssa = $x$3$lcssa;$y$3$lcssa = $y$0;
   }
   $conv219 = i64_sext($bits);
   $conv221 = i64_sext($emin);
   $add220 = i64_sub(i64_const(32,0),$conv221);
   $sub222 = i64_add($add220,$e2$1$lcssa);
   $cmp223 = i64_sgt($conv219,$sub222);
   if ($cmp223) {
    $conv229 = i64_trunc($sub222);
    $23 = ($conv229|0)>(0);
    if ($23) {
     $bits$addr$0 = $conv229;
     label = 59;
    } else {
     $bits$addr$0109 = 0;$sub239110 = 84;
     label = 61;
    }
   } else {
    $bits$addr$0 = $bits;
    label = 59;
   }
   if ((label|0) == 59) {
    $cmp235 = ($bits$addr$0|0)<(53);
    $sub239 = (84 - ($bits$addr$0))|0;
    if ($cmp235) {
     $bits$addr$0109 = $bits$addr$0;$sub239110 = $sub239;
     label = 61;
    } else {
     $$pre = (+($sign|0));
     $bias$0 = 0.0;$bits$addr$0108 = $bits$addr$0;$conv253$pre$phiZ2D = $$pre;
    }
   }
   if ((label|0) == 61) {
    $conv241111 = (+($sign|0));
    $call240 = (+_scalbn(1.0,$sub239110));
    $call242 = (+_copysignl($call240,$conv241111));
    $bias$0 = $call242;$bits$addr$0108 = $bits$addr$0109;$conv253$pre$phiZ2D = $conv241111;
   }
   $cmp244 = ($bits$addr$0108|0)<(32);
   $tobool247 = $y$3$lcssa != 0.0;
   $or$cond2 = $tobool247 & $cmp244;
   $and = $x$4$lcssa & 1;
   $tobool249 = ($and|0)==(0);
   $or$cond103 = $tobool249 & $or$cond2;
   $inc251 = $or$cond103&1;
   $x$6 = (($inc251) + ($x$4$lcssa))|0;
   $y$5 = $or$cond103 ? 0.0 : $y$3$lcssa;
   $conv254 = (+($x$6>>>0));
   $mul255 = $conv253$pre$phiZ2D * $conv254;
   $add256 = $bias$0 + $mul255;
   $mul258 = $conv253$pre$phiZ2D * $y$5;
   $add259 = $mul258 + $add256;
   $sub260 = $add259 - $bias$0;
   $tobool261 = $sub260 != 0.0;
   if (!($tobool261)) {
    $call263 = (___errno_location()|0);
    store4($call263,34);
   }
   $conv265 = i64_trunc($e2$1$lcssa);
   $call266 = (+_scalbnl($sub260,$conv265));
   $retval$0 = $call266;
  }
 } while(0);
 return (+$retval$0);
}
function _decfloat($f,$c,$bits,$emin,$sign,$pok) {
 $f = $f|0;
 $c = $c|0;
 $bits = $bits|0;
 $emin = $emin|0;
 $sign = $sign|0;
 $pok = $pok|0;
 var $$264 = 0, $$inc66 = 0, $$neg = 0, $$pre = 0, $$sub489 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $a$0$lcssa380 = 0, $a$0329 = 0, $a$2$ph288 = 0, $a$4 = 0, $a$4$ph = 0, $a$4$ph386 = 0, $a$5322 = 0, $add119 = i64(), $add252 = 0, $add265 = 0, $add275 = 0, $add287 = 0, $add309 = i64(), $add309$sink$off0 = 0, $add347 = 0, $add371 = 0;
 var $add404 = 0, $add417 = 0, $add427 = 0, $add433 = 0, $add438 = 0, $add462 = 0, $add467 = 0, $add477 = 0.0, $add483 = 0, $add506 = 0.0, $add508 = 0, $add523 = 0, $add530 = 0.0, $add537 = 0.0, $add543 = 0, $add550 = 0.0, $add554 = 0.0, $add569 = 0.0, $add59 = 0, $and = 0;
 var $and$a$0 = 0, $and323 = 0, $and349 = 0, $and354 = 0, $and357 = 0, $and372 = 0, $and414 = 0, $and428 = 0, $and428$a$5 = 0, $and434 = 0, $and439 = 0, $and448 = 0, $and463 = 0, $and468 = 0, $and509 = 0, $and524 = 0, $and544 = 0, $and572 = 0, $arrayidx186 = 0, $arrayidx186$promoted = 0;
 var $arrayidx219 = 0, $arrayidx239 = 0, $arrayidx256 = 0, $arrayidx261 = 0, $arrayidx284 = 0, $arrayidx294 = 0, $arrayidx306 = 0, $arrayidx355 = 0, $arrayidx358 = 0, $arrayidx361 = 0, $arrayidx376 = 0, $arrayidx377 = 0, $arrayidx411 = 0, $arrayidx443 = 0, $arrayidx449 = 0, $arrayidx470 = 0, $arrayidx475 = 0, $arrayidx516 = 0, $arrayidx77 = 0, $bias$0 = 0.0;
 var $bits$addr$0 = 0, $c$addr$0 = 0, $c$addr$1$be = 0, $c$addr$1$ph = 0, $c$addr$2 = 0, $c$addr$3$be = 0, $c$addr$3$lcssa = 0, $c$addr$3348 = 0, $call = 0, $call103 = i64(), $call135 = 0, $call15 = 0, $call165 = 0, $call175 = 0, $call32 = 0, $call500 = 0.0, $call501 = 0.0, $call503 = 0.0, $call504 = 0.0, $call563 = 0.0;
 var $call577 = 0.0, $call600 = 0, $call603 = 0.0, $call91 = 0, $carry$0331 = 0, $carry299$0 = 0, $carry299$1 = 0, $carry365$0324 = 0, $cmp100 = 0, $cmp104 = 0, $cmp121 = 0, $cmp143 = 0, $cmp146 = 0, $cmp149 = 0, $cmp152 = 0, $cmp162 = 0, $cmp172 = 0, $cmp183335 = 0, $cmp19 = 0, $cmp19359 = 0;
 var $cmp194 = 0, $cmp197 = 0, $cmp2 = 0, $cmp200 = 0, $cmp203 = 0, $cmp211 = 0, $cmp226 = 0, $cmp231 = 0, $cmp246 = 0, $cmp25 = 0, $cmp258 = 0, $cmp258327 = 0, $cmp269 = 0, $cmp289 = 0, $cmp292 = 0, $cmp295 = 0, $cmp310 = 0, $cmp324 = 0, $cmp327 = 0, $cmp350 = 0;
 var $cmp368 = 0, $cmp373 = 0, $cmp378 = 0, $cmp38 = 0, $cmp38339 = 0, $cmp386 = 0, $cmp393 = 0, $cmp396 = 0, $cmp40 = 0, $cmp400 = 0, $cmp40340 = 0, $cmp40350 = 0, $cmp406 = 0, $cmp406320 = 0, $cmp421 = 0, $cmp440 = 0, $cmp464 = 0, $cmp48 = 0, $cmp485 = 0, $cmp495 = 0;
 var $cmp51 = 0, $cmp510 = 0, $cmp517 = 0, $cmp525 = 0, $cmp532 = 0, $cmp545 = 0, $cmp560 = 0, $cmp574 = 0, $cmp578 = 0, $cmp593 = 0, $cmp67 = 0, $cmp8 = 0, $cmp84 = 0, $cond = 0, $cond254 = 0, $conv = 0, $conv13 = 0, $conv140 = 0.0, $conv155 = 0.0, $conv157 = 0.0;
 var $conv161 = i64(), $conv166 = 0.0, $conv171 = i64(), $conv176 = 0.0, $conv193 = 0, $conv206 = 0.0, $conv208 = 0.0, $conv214 = 0.0, $conv216 = 0.0, $conv220 = 0.0, $conv234 = 0.0, $conv236 = 0.0, $conv240 = 0.0, $conv30 = 0, $conv307 = i64(), $conv308 = i64(), $conv314 = 0, $conv476 = 0.0, $conv481 = 0.0, $conv54 = 0;
 var $conv54$lnz$0 = 0, $conv89 = 0, $dc$0$lcssa = i64(), $dc$0$lrp$2 = i64(), $dc$0310 = i64(), $dc$0311 = i64(), $dc$0312 = i64(), $dc$0342 = i64(), $dc$1 = i64(), $dec = i64(), $denormal$2$v = 0, $div = 0, $div221 = 0.0, $div264 = 0, $div267 = 0, $div313 = i64(), $e10$0 = i64(), $e2$0 = 0, $e2$0$ph = 0, $e2$1 = 0;
 var $e2$1$ph = 0, $e2$1$ph385 = 0, $e2$3 = 0, $e2$4 = 0, $exitcond = 0, $exitcond377 = 0, $extract$t = 0, $extract$t284 = 0, $frac$0 = 0.0, $frac$1 = 0.0, $frac$3 = 0.0, $gotdig$0 = 0, $gotdig$2 = 0, $gotdig$3$lcssa = 0, $gotdig$3344 = 0, $gotdig$4 = 0, $gotrad$0 = 0, $gotrad$1$lcssa = 0, $gotrad$1345 = 0, $gotrad$2 = 0;
 var $i$0319 = 0, $i$1 = 0, $i$4318 = 0, $inc = i64(), $inc189 = 0, $inc191 = 0, $inc279 = 0, $inc283 = 0, $inc391 = 0, $inc479 = 0, $inc566 = 0.0, $inc590 = 0, $inc66 = 0, $inc70 = 0, $inc70$k$0 = 0, $incdec$ptr = 0, $incdec$ptr113 = 0, $incdec$ptr12 = 0, $incdec$ptr128 = 0, $incdec$ptr29 = 0;
 var $incdec$ptr88 = 0, $j$0$lcssa = 0, $j$0296 = 0, $j$0297 = 0, $j$0298 = 0, $j$0347 = 0, $j$2 = 0, $j$3336 = 0, $k$0$lcssa = 0, $k$0300 = 0, $k$0301 = 0, $k$0302 = 0, $k$0346 = 0, $k$2 = 0, $k$3 = 0, $k$4330 = 0, $k$5 = 0, $k$5$in = 0, $k$6323 = 0, $lnz$0$lcssa = 0;
 var $lnz$0306 = 0, $lnz$0307 = 0, $lnz$0308 = 0, $lnz$0343 = 0, $lnz$2 = 0, $lrp$0360 = i64(), $lrp$1 = i64(), $lrp$2$lcssa = i64(), $lrp$2341 = i64(), $lrp$3 = i64(), $lrp$4271276 = i64(), $lrp$5 = i64(), $lrp$5277 = i64(), $mul = 0, $mul141 = 0.0, $mul158 = 0.0, $mul167 = 0.0, $mul168 = 0.0, $mul177 = 0.0, $mul178 = 0.0;
 var $mul187 = 0, $mul187337 = 0, $mul209 = 0.0, $mul217 = 0.0, $mul224$neg = 0, $mul237 = 0.0, $mul241 = 0.0, $mul268 = 0, $mul420 = 0, $mul472 = 0.0, $mul482 = 0.0, $mul529 = 0.0, $mul536 = 0.0, $mul549 = 0.0, $mul553 = 0.0, $mul589 = 0.0, $narrow = 0, $not$cmp578 = 0, $or = 0, $or$cond = 0;
 var $or$cond2 = 0, $or$cond258 = 0, $or$cond259 = 0, $or$cond260 = 0, $or$cond261 = 0, $or$cond262 = 0, $or$cond262$not = 0, $or$cond263 = 0, $or$cond265 = 0, $or$cond4 = 0, $or$cond6 = 0, $or359 = 0, $or450 = 0, $or99 = 0, $rem = 0, $rem262 = 0, $rem315 = i64(), $retval$1 = 0.0, $rp$0$lcssa379 = 0, $rp$0328 = 0;
 var $rp$2$ph286 = 0, $rp$4$ph = 0, $rp$4$ph285 = 0, $rp$5321 = 0, $rpos = 0, $shend = 0, $shl = i64(), $shl412 = 0, $shr = 0, $shr230 = 0, $shr416 = 0, $shr419 = 0, $sub1 = 0, $sub170 = 0, $sub218 = 0, $sub225 = 0, $sub238 = 0, $sub255 = 0, $sub276 = 0, $sub276$rp$0 = 0;
 var $sub286 = 0, $sub300 = 0, $sub301 = 0, $sub322 = 0, $sub342 = 0, $sub348 = 0, $sub353 = 0, $sub356 = 0, $sub37 = 0, $sub37338 = 0, $sub37349 = 0, $sub413 = 0, $sub430 = 0, $sub430$rp$5 = 0, $sub447 = 0, $sub469 = 0, $sub484 = 0, $sub499 = 0, $sub502 = 0, $sub505 = 0.0;
 var $sub559 = 0, $sub570 = 0.0, $sub573 = 0, $sub60 = 0, $sub63$sink = 0, $sum = 0, $tobool107 = 0, $tobool110 = 0, $tobool125 = 0, $tobool138 = 0, $tobool180 = 0, $tobool244 = 0, $tobool273 = 0, $tobool281 = 0, $tobool331 = 0, $tobool345 = 0, $tobool425 = 0, $tobool436 = 0, $tobool520 = 0, $tobool56 = 0;
 var $tobool564 = 0, $tobool598 = 0, $tobool95 = 0, $tobool98 = 0, $tobool98267 = 0, $tobool98272 = 0, $tobool98273275 = 0, $x = 0, $y$0317 = 0.0, $y$1 = 0.0, $y$2 = 0.0, $y$3 = 0.0, $z$0 = 0, $z$1 = 0, $z$1$ph287 = 0, $z$10 = 0, $z$2 = 0, $z$3 = 0, $z$4 = 0, $z$6$ph = 0;
 var $z$9316 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 512|0;
 $x = sp;
 $sum = (($emin) + ($bits))|0;
 $sub1 = (0 - ($sum))|0;
 $rpos = ((($f)) + 4|0);
 $shend = ((($f)) + 100|0);
 $c$addr$0 = $c;$gotdig$0 = 0;
 L1: while(1) {
  switch ($c$addr$0|0) {
  case 46:  {
   label = 6;
   break L1;
   break;
  }
  case 48:  {
   break;
  }
  default: {
   $c$addr$2 = $c$addr$0;$gotdig$2 = $gotdig$0;$gotrad$0 = 0;$lrp$1 = i64_const(0,0);
   break L1;
  }
  }
  $0 = load4($rpos);
  $1 = load4($shend);
  $cmp2 = ($0>>>0)<($1>>>0);
  if ($cmp2) {
   $incdec$ptr = ((($0)) + 1|0);
   store4($rpos,$incdec$ptr);
   $2 = load1($0);
   $conv = $2&255;
   $c$addr$0 = $conv;$gotdig$0 = 1;
   continue;
  } else {
   $call = (___shgetc($f)|0);
   $c$addr$0 = $call;$gotdig$0 = 1;
   continue;
  }
 }
 if ((label|0) == 6) {
  $3 = load4($rpos);
  $4 = load4($shend);
  $cmp8 = ($3>>>0)<($4>>>0);
  if ($cmp8) {
   $incdec$ptr12 = ((($3)) + 1|0);
   store4($rpos,$incdec$ptr12);
   $5 = load1($3);
   $conv13 = $5&255;
   $c$addr$1$ph = $conv13;
  } else {
   $call15 = (___shgetc($f)|0);
   $c$addr$1$ph = $call15;
  }
  $cmp19359 = ($c$addr$1$ph|0)==(48);
  if ($cmp19359) {
   $lrp$0360 = i64_const(0,0);
   while(1) {
    $dec = i64_add($lrp$0360,i64_const(4294967295,4294967295));
    $6 = load4($rpos);
    $7 = load4($shend);
    $cmp25 = ($6>>>0)<($7>>>0);
    if ($cmp25) {
     $incdec$ptr29 = ((($6)) + 1|0);
     store4($rpos,$incdec$ptr29);
     $8 = load1($6);
     $conv30 = $8&255;
     $c$addr$1$be = $conv30;
    } else {
     $call32 = (___shgetc($f)|0);
     $c$addr$1$be = $call32;
    }
    $cmp19 = ($c$addr$1$be|0)==(48);
    if ($cmp19) {
     $lrp$0360 = $dec;
    } else {
     $c$addr$2 = $c$addr$1$be;$gotdig$2 = 1;$gotrad$0 = 1;$lrp$1 = $dec;
     break;
    }
   }
  } else {
   $c$addr$2 = $c$addr$1$ph;$gotdig$2 = $gotdig$0;$gotrad$0 = 1;$lrp$1 = i64_const(0,0);
  }
 }
 store4($x,0);
 $sub37338 = (($c$addr$2) + -48)|0;
 $cmp38339 = ($sub37338>>>0)<(10);
 $cmp40340 = ($c$addr$2|0)==(46);
 $9 = $cmp40340 | $cmp38339;
 L20: do {
  if ($9) {
   $arrayidx77 = ((($x)) + 496|0);
   $c$addr$3348 = $c$addr$2;$cmp40350 = $cmp40340;$dc$0342 = i64_const(0,0);$gotdig$3344 = $gotdig$2;$gotrad$1345 = $gotrad$0;$j$0347 = 0;$k$0346 = 0;$lnz$0343 = 0;$lrp$2341 = $lrp$1;$sub37349 = $sub37338;
   L22: while(1) {
    do {
     if ($cmp40350) {
      $cond = ($gotrad$1345|0)==(0);
      if ($cond) {
       $dc$1 = $dc$0342;$gotdig$4 = $gotdig$3344;$gotrad$2 = 1;$j$2 = $j$0347;$k$2 = $k$0346;$lnz$2 = $lnz$0343;$lrp$3 = $dc$0342;
      } else {
       break L22;
      }
     } else {
      $cmp48 = ($k$0346|0)<(125);
      $inc = i64_add($dc$0342,i64_const(1,0));
      $cmp51 = ($c$addr$3348|0)!=(48);
      if (!($cmp48)) {
       if (!($cmp51)) {
        $dc$1 = $inc;$gotdig$4 = $gotdig$3344;$gotrad$2 = $gotrad$1345;$j$2 = $j$0347;$k$2 = $k$0346;$lnz$2 = $lnz$0343;$lrp$3 = $lrp$2341;
        break;
       }
       $11 = load4($arrayidx77);
       $or = $11 | 1;
       store4($arrayidx77,$or);
       $dc$1 = $inc;$gotdig$4 = $gotdig$3344;$gotrad$2 = $gotrad$1345;$j$2 = $j$0347;$k$2 = $k$0346;$lnz$2 = $lnz$0343;$lrp$3 = $lrp$2341;
       break;
      }
      $conv54 = i64_trunc($inc);
      $conv54$lnz$0 = $cmp51 ? $conv54 : $lnz$0343;
      $tobool56 = ($j$0347|0)==(0);
      $$pre = (($x) + ($k$0346<<2)|0);
      if ($tobool56) {
       $sub63$sink = $sub37349;
      } else {
       $10 = load4($$pre);
       $mul = ($10*10)|0;
       $add59 = (($c$addr$3348) + -48)|0;
       $sub60 = (($add59) + ($mul))|0;
       $sub63$sink = $sub60;
      }
      store4($$pre,$sub63$sink);
      $inc66 = (($j$0347) + 1)|0;
      $cmp67 = ($inc66|0)==(9);
      $inc70 = $cmp67&1;
      $inc70$k$0 = (($inc70) + ($k$0346))|0;
      $$inc66 = $cmp67 ? 0 : $inc66;
      $dc$1 = $inc;$gotdig$4 = 1;$gotrad$2 = $gotrad$1345;$j$2 = $$inc66;$k$2 = $inc70$k$0;$lnz$2 = $conv54$lnz$0;$lrp$3 = $lrp$2341;
     }
    } while(0);
    $12 = load4($rpos);
    $13 = load4($shend);
    $cmp84 = ($12>>>0)<($13>>>0);
    if ($cmp84) {
     $incdec$ptr88 = ((($12)) + 1|0);
     store4($rpos,$incdec$ptr88);
     $14 = load1($12);
     $conv89 = $14&255;
     $c$addr$3$be = $conv89;
    } else {
     $call91 = (___shgetc($f)|0);
     $c$addr$3$be = $call91;
    }
    $sub37 = (($c$addr$3$be) + -48)|0;
    $cmp38 = ($sub37>>>0)<(10);
    $cmp40 = ($c$addr$3$be|0)==(46);
    $15 = $cmp40 | $cmp38;
    if ($15) {
     $c$addr$3348 = $c$addr$3$be;$cmp40350 = $cmp40;$dc$0342 = $dc$1;$gotdig$3344 = $gotdig$4;$gotrad$1345 = $gotrad$2;$j$0347 = $j$2;$k$0346 = $k$2;$lnz$0343 = $lnz$2;$lrp$2341 = $lrp$3;$sub37349 = $sub37;
    } else {
     $c$addr$3$lcssa = $c$addr$3$be;$dc$0$lcssa = $dc$1;$gotdig$3$lcssa = $gotdig$4;$gotrad$1$lcssa = $gotrad$2;$j$0$lcssa = $j$2;$k$0$lcssa = $k$2;$lnz$0$lcssa = $lnz$2;$lrp$2$lcssa = $lrp$3;
     label = 29;
     break L20;
    }
   }
   $tobool98267 = ($gotdig$3344|0)!=(0);
   $dc$0312 = $dc$0342;$j$0298 = $j$0347;$k$0302 = $k$0346;$lnz$0308 = $lnz$0343;$lrp$4271276 = $lrp$2341;$tobool98273275 = $tobool98267;
   label = 37;
  } else {
   $c$addr$3$lcssa = $c$addr$2;$dc$0$lcssa = i64_const(0,0);$gotdig$3$lcssa = $gotdig$2;$gotrad$1$lcssa = $gotrad$0;$j$0$lcssa = 0;$k$0$lcssa = 0;$lnz$0$lcssa = 0;$lrp$2$lcssa = $lrp$1;
   label = 29;
  }
 } while(0);
 do {
  if ((label|0) == 29) {
   $tobool95 = ($gotrad$1$lcssa|0)==(0);
   $dc$0$lrp$2 = $tobool95 ? $dc$0$lcssa : $lrp$2$lcssa;
   $tobool98 = ($gotdig$3$lcssa|0)!=(0);
   $or99 = $c$addr$3$lcssa | 32;
   $cmp100 = ($or99|0)==(101);
   $or$cond258 = $tobool98 & $cmp100;
   if (!($or$cond258)) {
    $cmp121 = ($c$addr$3$lcssa|0)>(-1);
    if ($cmp121) {
     $dc$0312 = $dc$0$lcssa;$j$0298 = $j$0$lcssa;$k$0302 = $k$0$lcssa;$lnz$0308 = $lnz$0$lcssa;$lrp$4271276 = $dc$0$lrp$2;$tobool98273275 = $tobool98;
     label = 37;
     break;
    } else {
     $dc$0311 = $dc$0$lcssa;$j$0297 = $j$0$lcssa;$k$0301 = $k$0$lcssa;$lnz$0307 = $lnz$0$lcssa;$lrp$5 = $dc$0$lrp$2;$tobool98272 = $tobool98;
     label = 39;
     break;
    }
   }
   $call103 = (i64(_scanexp($f,$pok)));
   $cmp104 = i64_eq($call103,i64_const(0,2147483648));
   if ($cmp104) {
    $tobool107 = ($pok|0)==(0);
    if ($tobool107) {
     ___shlim($f,0);
     $retval$1 = 0.0;
     break;
    }
    $16 = load4($shend);
    $tobool110 = ($16|0)==(0|0);
    if ($tobool110) {
     $e10$0 = i64_const(0,0);
    } else {
     $17 = load4($rpos);
     $incdec$ptr113 = ((($17)) + -1|0);
     store4($rpos,$incdec$ptr113);
     $e10$0 = i64_const(0,0);
    }
   } else {
    $e10$0 = $call103;
   }
   $add119 = i64_add($e10$0,$dc$0$lrp$2);
   $dc$0310 = $dc$0$lcssa;$j$0296 = $j$0$lcssa;$k$0300 = $k$0$lcssa;$lnz$0306 = $lnz$0$lcssa;$lrp$5277 = $add119;
   label = 41;
  }
 } while(0);
 if ((label|0) == 37) {
  $18 = load4($shend);
  $tobool125 = ($18|0)==(0|0);
  if ($tobool125) {
   $dc$0311 = $dc$0312;$j$0297 = $j$0298;$k$0301 = $k$0302;$lnz$0307 = $lnz$0308;$lrp$5 = $lrp$4271276;$tobool98272 = $tobool98273275;
   label = 39;
  } else {
   $19 = load4($rpos);
   $incdec$ptr128 = ((($19)) + -1|0);
   store4($rpos,$incdec$ptr128);
   if ($tobool98273275) {
    $dc$0310 = $dc$0312;$j$0296 = $j$0298;$k$0300 = $k$0302;$lnz$0306 = $lnz$0308;$lrp$5277 = $lrp$4271276;
    label = 41;
   } else {
    label = 40;
   }
  }
 }
 if ((label|0) == 39) {
  if ($tobool98272) {
   $dc$0310 = $dc$0311;$j$0296 = $j$0297;$k$0300 = $k$0301;$lnz$0306 = $lnz$0307;$lrp$5277 = $lrp$5;
   label = 41;
  } else {
   label = 40;
  }
 }
 do {
  if ((label|0) == 40) {
   $call135 = (___errno_location()|0);
   store4($call135,22);
   ___shlim($f,0);
   $retval$1 = 0.0;
  }
  else if ((label|0) == 41) {
   $20 = load4($x);
   $tobool138 = ($20|0)==(0);
   if ($tobool138) {
    $conv140 = (+($sign|0));
    $mul141 = $conv140 * 0.0;
    $retval$1 = $mul141;
    break;
   }
   $cmp143 = i64_eq($lrp$5277,$dc$0310);
   $cmp146 = i64_slt($dc$0310,i64_const(10,0));
   $or$cond = $cmp146 & $cmp143;
   if ($or$cond) {
    $cmp149 = ($bits|0)>(30);
    $shr = $20 >>> $bits;
    $cmp152 = ($shr|0)==(0);
    $or$cond259 = $cmp149 | $cmp152;
    if ($or$cond259) {
     $conv155 = (+($sign|0));
     $conv157 = (+($20>>>0));
     $mul158 = $conv155 * $conv157;
     $retval$1 = $mul158;
     break;
    }
   }
   $div = (($emin|0) / -2)&-1;
   $conv161 = i64_sext($div);
   $cmp162 = i64_sgt($lrp$5277,$conv161);
   if ($cmp162) {
    $call165 = (___errno_location()|0);
    store4($call165,34);
    $conv166 = (+($sign|0));
    $mul167 = $conv166 * 1.7976931348623157E+308;
    $mul168 = $mul167 * 1.7976931348623157E+308;
    $retval$1 = $mul168;
    break;
   }
   $sub170 = (($emin) + -106)|0;
   $conv171 = i64_sext($sub170);
   $cmp172 = i64_slt($lrp$5277,$conv171);
   if ($cmp172) {
    $call175 = (___errno_location()|0);
    store4($call175,34);
    $conv176 = (+($sign|0));
    $mul177 = $conv176 * 2.2250738585072014E-308;
    $mul178 = $mul177 * 2.2250738585072014E-308;
    $retval$1 = $mul178;
    break;
   }
   $tobool180 = ($j$0296|0)==(0);
   if ($tobool180) {
    $k$3 = $k$0300;
   } else {
    $cmp183335 = ($j$0296|0)<(9);
    if ($cmp183335) {
     $arrayidx186 = (($x) + ($k$0300<<2)|0);
     $arrayidx186$promoted = load4($arrayidx186);
     $j$3336 = $j$0296;$mul187337 = $arrayidx186$promoted;
     while(1) {
      $mul187 = ($mul187337*10)|0;
      $inc189 = (($j$3336) + 1)|0;
      $exitcond377 = ($inc189|0)==(9);
      if ($exitcond377) {
       break;
      } else {
       $j$3336 = $inc189;$mul187337 = $mul187;
      }
     }
     store4($arrayidx186,$mul187);
    }
    $inc191 = (($k$0300) + 1)|0;
    $k$3 = $inc191;
   }
   $conv193 = i64_trunc($lrp$5277);
   $cmp194 = ($lnz$0306|0)<(9);
   if ($cmp194) {
    $cmp197 = ($lnz$0306|0)<=($conv193|0);
    $cmp200 = ($conv193|0)<(18);
    $or$cond2 = $cmp197 & $cmp200;
    if ($or$cond2) {
     $cmp203 = ($conv193|0)==(9);
     $21 = load4($x);
     if ($cmp203) {
      $conv206 = (+($sign|0));
      $conv208 = (+($21>>>0));
      $mul209 = $conv206 * $conv208;
      $retval$1 = $mul209;
      break;
     }
     $cmp211 = ($conv193|0)<(9);
     if ($cmp211) {
      $conv214 = (+($sign|0));
      $conv216 = (+($21>>>0));
      $mul217 = $conv214 * $conv216;
      $sub218 = (8 - ($conv193))|0;
      $arrayidx219 = (2332 + ($sub218<<2)|0);
      $22 = load4($arrayidx219);
      $conv220 = (+($22|0));
      $div221 = $mul217 / $conv220;
      $retval$1 = $div221;
      break;
     }
     $$neg = Math_imul($conv193, -3)|0;
     $mul224$neg = (($bits) + 27)|0;
     $sub225 = (($mul224$neg) + ($$neg))|0;
     $cmp226 = ($sub225|0)>(30);
     $shr230 = $21 >>> $sub225;
     $cmp231 = ($shr230|0)==(0);
     $or$cond260 = $cmp226 | $cmp231;
     if ($or$cond260) {
      $sub238 = (($conv193) + -10)|0;
      $arrayidx239 = (2332 + ($sub238<<2)|0);
      $conv234 = (+($sign|0));
      $conv236 = (+($21>>>0));
      $mul237 = $conv234 * $conv236;
      $23 = load4($arrayidx239);
      $conv240 = (+($23|0));
      $mul241 = $mul237 * $conv240;
      $retval$1 = $mul241;
      break;
     }
    }
   }
   $rem = (($conv193|0) % 9)&-1;
   $tobool244 = ($rem|0)==(0);
   if ($tobool244) {
    $a$2$ph288 = 0;$e2$0$ph = 0;$rp$2$ph286 = $conv193;$z$1$ph287 = $k$3;
   } else {
    $cmp246 = ($conv193|0)>(-1);
    $add252 = (($rem) + 9)|0;
    $cond254 = $cmp246 ? $rem : $add252;
    $sub255 = (8 - ($cond254))|0;
    $arrayidx256 = (2332 + ($sub255<<2)|0);
    $24 = load4($arrayidx256);
    $cmp258327 = ($k$3|0)==(0);
    if ($cmp258327) {
     $a$0$lcssa380 = 0;$rp$0$lcssa379 = $conv193;$z$0 = 0;
    } else {
     $div267 = (1000000000 / ($24|0))&-1;
     $a$0329 = 0;$carry$0331 = 0;$k$4330 = 0;$rp$0328 = $conv193;
     while(1) {
      $arrayidx261 = (($x) + ($k$4330<<2)|0);
      $25 = load4($arrayidx261);
      $rem262 = (($25>>>0) % ($24>>>0))&-1;
      $div264 = (($25>>>0) / ($24>>>0))&-1;
      $add265 = (($div264) + ($carry$0331))|0;
      store4($arrayidx261,$add265);
      $mul268 = Math_imul($div267, $rem262)|0;
      $cmp269 = ($k$4330|0)==($a$0329|0);
      $tobool273 = ($add265|0)==(0);
      $or$cond261 = $cmp269 & $tobool273;
      $add275 = (($a$0329) + 1)|0;
      $and = $add275 & 127;
      $sub276 = (($rp$0328) + -9)|0;
      $sub276$rp$0 = $or$cond261 ? $sub276 : $rp$0328;
      $and$a$0 = $or$cond261 ? $and : $a$0329;
      $inc279 = (($k$4330) + 1)|0;
      $cmp258 = ($inc279|0)==($k$3|0);
      if ($cmp258) {
       break;
      } else {
       $a$0329 = $and$a$0;$carry$0331 = $mul268;$k$4330 = $inc279;$rp$0328 = $sub276$rp$0;
      }
     }
     $tobool281 = ($mul268|0)==(0);
     if ($tobool281) {
      $a$0$lcssa380 = $and$a$0;$rp$0$lcssa379 = $sub276$rp$0;$z$0 = $k$3;
     } else {
      $arrayidx284 = (($x) + ($k$3<<2)|0);
      $inc283 = (($k$3) + 1)|0;
      store4($arrayidx284,$mul268);
      $a$0$lcssa380 = $and$a$0;$rp$0$lcssa379 = $sub276$rp$0;$z$0 = $inc283;
     }
    }
    $sub286 = (9 - ($cond254))|0;
    $add287 = (($sub286) + ($rp$0$lcssa379))|0;
    $a$2$ph288 = $a$0$lcssa380;$e2$0$ph = 0;$rp$2$ph286 = $add287;$z$1$ph287 = $z$0;
   }
   L101: while(1) {
    $cmp289 = ($rp$2$ph286|0)<(18);
    $cmp292 = ($rp$2$ph286|0)==(18);
    $arrayidx294 = (($x) + ($a$2$ph288<<2)|0);
    $e2$0 = $e2$0$ph;$z$1 = $z$1$ph287;
    while(1) {
     if (!($cmp289)) {
      if (!($cmp292)) {
       $a$4$ph = $a$2$ph288;$e2$1$ph = $e2$0;$rp$4$ph285 = $rp$2$ph286;$z$6$ph = $z$1;
       break L101;
      }
      $26 = load4($arrayidx294);
      $cmp295 = ($26>>>0)<(9007199);
      if (!($cmp295)) {
       $a$4$ph = $a$2$ph288;$e2$1$ph = $e2$0;$rp$4$ph285 = 18;$z$6$ph = $z$1;
       break L101;
      }
     }
     $sub301 = (($z$1) + 127)|0;
     $carry299$0 = 0;$k$5$in = $sub301;$z$2 = $z$1;
     while(1) {
      $k$5 = $k$5$in & 127;
      $arrayidx306 = (($x) + ($k$5<<2)|0);
      $27 = load4($arrayidx306);
      $conv307 = i64_zext($27>>>0);
      $shl = i64_shl($conv307,i64_const(29,0));
      $conv308 = i64_zext($carry299$0>>>0);
      $add309 = i64_add($shl,$conv308);
      $cmp310 = i64_ugt($add309,i64_const(1000000000,0));
      $extract$t284 = i64_trunc($add309);
      if ($cmp310) {
       $div313 = i64_udiv($add309,i64_const(1000000000,0));
       $conv314 = i64_trunc($div313);
       $rem315 = i64_urem($add309,i64_const(1000000000,0));
       $extract$t = i64_trunc($rem315);
       $add309$sink$off0 = $extract$t;$carry299$1 = $conv314;
      } else {
       $add309$sink$off0 = $extract$t284;$carry299$1 = 0;
      }
      store4($arrayidx306,$add309$sink$off0);
      $sub322 = (($z$2) + 127)|0;
      $and323 = $sub322 & 127;
      $cmp324 = ($k$5|0)!=($and323|0);
      $cmp327 = ($k$5|0)==($a$2$ph288|0);
      $or$cond262 = $cmp324 | $cmp327;
      $or$cond262$not = $or$cond262 ^ 1;
      $tobool331 = ($add309$sink$off0|0)==(0);
      $or$cond263 = $tobool331 & $or$cond262$not;
      $z$3 = $or$cond263 ? $k$5 : $z$2;
      $sub342 = (($k$5) + -1)|0;
      if ($cmp327) {
       break;
      } else {
       $carry299$0 = $carry299$1;$k$5$in = $sub342;$z$2 = $z$3;
      }
     }
     $sub300 = (($e2$0) + -29)|0;
     $tobool345 = ($carry299$1|0)==(0);
     if ($tobool345) {
      $e2$0 = $sub300;$z$1 = $z$3;
     } else {
      break;
     }
    }
    $add347 = (($rp$2$ph286) + 9)|0;
    $sub348 = (($a$2$ph288) + 127)|0;
    $and349 = $sub348 & 127;
    $cmp350 = ($and349|0)==($z$3|0);
    $sub353 = (($z$3) + 127)|0;
    $and354 = $sub353 & 127;
    $sub356 = (($z$3) + 126)|0;
    $and357 = $sub356 & 127;
    $arrayidx358 = (($x) + ($and357<<2)|0);
    if ($cmp350) {
     $arrayidx355 = (($x) + ($and354<<2)|0);
     $28 = load4($arrayidx355);
     $29 = load4($arrayidx358);
     $or359 = $29 | $28;
     store4($arrayidx358,$or359);
     $z$4 = $and354;
    } else {
     $z$4 = $z$3;
    }
    $arrayidx361 = (($x) + ($and349<<2)|0);
    store4($arrayidx361,$carry299$1);
    $a$2$ph288 = $and349;$e2$0$ph = $sub300;$rp$2$ph286 = $add347;$z$1$ph287 = $z$4;
   }
   L119: while(1) {
    $add438 = (($z$6$ph) + 1)|0;
    $and439 = $add438 & 127;
    $sub447 = (($z$6$ph) + 127)|0;
    $and448 = $sub447 & 127;
    $arrayidx449 = (($x) + ($and448<<2)|0);
    $a$4$ph386 = $a$4$ph;$e2$1$ph385 = $e2$1$ph;$rp$4$ph = $rp$4$ph285;
    while(1) {
     $cmp396 = ($rp$4$ph|0)==(18);
     $cmp400 = ($rp$4$ph|0)>(27);
     $$264 = $cmp400 ? 9 : 1;
     $a$4 = $a$4$ph386;$e2$1 = $e2$1$ph385;
     while(1) {
      $i$0319 = 0;
      while(1) {
       $add371 = (($i$0319) + ($a$4))|0;
       $and372 = $add371 & 127;
       $cmp373 = ($and372|0)==($z$6$ph|0);
       if ($cmp373) {
        $i$1 = 2;
        label = 88;
        break;
       }
       $arrayidx376 = (($x) + ($and372<<2)|0);
       $30 = load4($arrayidx376);
       $arrayidx377 = (2364 + ($i$0319<<2)|0);
       $31 = load4($arrayidx377);
       $cmp378 = ($30>>>0)<($31>>>0);
       if ($cmp378) {
        $i$1 = 2;
        label = 88;
        break;
       }
       $cmp386 = ($30>>>0)>($31>>>0);
       if ($cmp386) {
        break;
       }
       $inc391 = (($i$0319) + 1)|0;
       $cmp368 = ($inc391|0)<(2);
       if ($cmp368) {
        $i$0319 = $inc391;
       } else {
        $i$1 = $inc391;
        label = 88;
        break;
       }
      }
      if ((label|0) == 88) {
       label = 0;
       $cmp393 = ($i$1|0)==(2);
       $or$cond4 = $cmp396 & $cmp393;
       if ($or$cond4) {
        $i$4318 = 0;$y$0317 = 0.0;$z$9316 = $z$6$ph;
        break L119;
       }
      }
      $add404 = (($$264) + ($e2$1))|0;
      $cmp406320 = ($a$4|0)==($z$6$ph|0);
      if ($cmp406320) {
       $a$4 = $z$6$ph;$e2$1 = $add404;
      } else {
       break;
      }
     }
     $shl412 = 1 << $$264;
     $sub413 = (($shl412) + -1)|0;
     $shr419 = 1000000000 >>> $$264;
     $a$5322 = $a$4;$carry365$0324 = 0;$k$6323 = $a$4;$rp$5321 = $rp$4$ph;
     while(1) {
      $arrayidx411 = (($x) + ($k$6323<<2)|0);
      $32 = load4($arrayidx411);
      $and414 = $32 & $sub413;
      $shr416 = $32 >>> $$264;
      $add417 = (($shr416) + ($carry365$0324))|0;
      store4($arrayidx411,$add417);
      $mul420 = Math_imul($and414, $shr419)|0;
      $cmp421 = ($k$6323|0)==($a$5322|0);
      $tobool425 = ($add417|0)==(0);
      $or$cond265 = $cmp421 & $tobool425;
      $add427 = (($a$5322) + 1)|0;
      $and428 = $add427 & 127;
      $sub430 = (($rp$5321) + -9)|0;
      $sub430$rp$5 = $or$cond265 ? $sub430 : $rp$5321;
      $and428$a$5 = $or$cond265 ? $and428 : $a$5322;
      $add433 = (($k$6323) + 1)|0;
      $and434 = $add433 & 127;
      $cmp406 = ($and434|0)==($z$6$ph|0);
      if ($cmp406) {
       break;
      } else {
       $a$5322 = $and428$a$5;$carry365$0324 = $mul420;$k$6323 = $and434;$rp$5321 = $sub430$rp$5;
      }
     }
     $tobool436 = ($mul420|0)==(0);
     if ($tobool436) {
      $a$4$ph386 = $and428$a$5;$e2$1$ph385 = $add404;$rp$4$ph = $sub430$rp$5;
      continue;
     }
     $cmp440 = ($and439|0)==($and428$a$5|0);
     if (!($cmp440)) {
      break;
     }
     $33 = load4($arrayidx449);
     $or450 = $33 | 1;
     store4($arrayidx449,$or450);
     $a$4$ph386 = $and428$a$5;$e2$1$ph385 = $add404;$rp$4$ph = $sub430$rp$5;
    }
    $arrayidx443 = (($x) + ($z$6$ph<<2)|0);
    store4($arrayidx443,$mul420);
    $a$4$ph = $and428$a$5;$e2$1$ph = $add404;$rp$4$ph285 = $sub430$rp$5;$z$6$ph = $and439;
   }
   while(1) {
    $add462 = (($i$4318) + ($a$4))|0;
    $and463 = $add462 & 127;
    $cmp464 = ($and463|0)==($z$9316|0);
    $add467 = (($z$9316) + 1)|0;
    $and468 = $add467 & 127;
    if ($cmp464) {
     $sub469 = (($and468) + -1)|0;
     $arrayidx470 = (($x) + ($sub469<<2)|0);
     store4($arrayidx470,0);
     $z$10 = $and468;
    } else {
     $z$10 = $z$9316;
    }
    $mul472 = $y$0317 * 1.0E+9;
    $arrayidx475 = (($x) + ($and463<<2)|0);
    $34 = load4($arrayidx475);
    $conv476 = (+($34>>>0));
    $add477 = $mul472 + $conv476;
    $inc479 = (($i$4318) + 1)|0;
    $exitcond = ($inc479|0)==(2);
    if ($exitcond) {
     break;
    } else {
     $i$4318 = $inc479;$y$0317 = $add477;$z$9316 = $z$10;
    }
   }
   $conv481 = (+($sign|0));
   $mul482 = $conv481 * $add477;
   $add483 = (($e2$1) + 53)|0;
   $sub484 = (($add483) - ($emin))|0;
   $cmp485 = ($sub484|0)<($bits|0);
   $35 = ($sub484|0)>(0);
   $$sub489 = $35 ? $sub484 : 0;
   $bits$addr$0 = $cmp485 ? $$sub489 : $bits;
   $cmp495 = ($bits$addr$0|0)<(53);
   if ($cmp495) {
    $sub499 = (105 - ($bits$addr$0))|0;
    $call500 = (+_scalbn(1.0,$sub499));
    $call501 = (+_copysignl($call500,$mul482));
    $sub502 = (53 - ($bits$addr$0))|0;
    $call503 = (+_scalbn(1.0,$sub502));
    $call504 = (+_fmodl($mul482,$call503));
    $sub505 = $mul482 - $call504;
    $add506 = $call501 + $sub505;
    $bias$0 = $call501;$frac$0 = $call504;$y$1 = $add506;
   } else {
    $bias$0 = 0.0;$frac$0 = 0.0;$y$1 = $mul482;
   }
   $add508 = (($a$4) + 2)|0;
   $and509 = $add508 & 127;
   $cmp510 = ($and509|0)==($z$10|0);
   if ($cmp510) {
    $frac$3 = $frac$0;
   } else {
    $arrayidx516 = (($x) + ($and509<<2)|0);
    $36 = load4($arrayidx516);
    $cmp517 = ($36>>>0)<(500000000);
    do {
     if ($cmp517) {
      $tobool520 = ($36|0)==(0);
      if ($tobool520) {
       $add523 = (($a$4) + 3)|0;
       $and524 = $add523 & 127;
       $cmp525 = ($and524|0)==($z$10|0);
       if ($cmp525) {
        $frac$1 = $frac$0;
        break;
       }
      }
      $mul529 = $conv481 * 0.25;
      $add530 = $mul529 + $frac$0;
      $frac$1 = $add530;
     } else {
      $cmp532 = ($36|0)==(500000000);
      if (!($cmp532)) {
       $mul536 = $conv481 * 0.75;
       $add537 = $mul536 + $frac$0;
       $frac$1 = $add537;
       break;
      }
      $add543 = (($a$4) + 3)|0;
      $and544 = $add543 & 127;
      $cmp545 = ($and544|0)==($z$10|0);
      if ($cmp545) {
       $mul549 = $conv481 * 0.5;
       $add550 = $mul549 + $frac$0;
       $frac$1 = $add550;
       break;
      } else {
       $mul553 = $conv481 * 0.75;
       $add554 = $mul553 + $frac$0;
       $frac$1 = $add554;
       break;
      }
     }
    } while(0);
    $sub559 = (53 - ($bits$addr$0))|0;
    $cmp560 = ($sub559|0)>(1);
    if ($cmp560) {
     $call563 = (+_fmodl($frac$1,1.0));
     $tobool564 = $call563 != 0.0;
     if ($tobool564) {
      $frac$3 = $frac$1;
     } else {
      $inc566 = $frac$1 + 1.0;
      $frac$3 = $inc566;
     }
    } else {
     $frac$3 = $frac$1;
    }
   }
   $add569 = $y$1 + $frac$3;
   $sub570 = $add569 - $bias$0;
   $and572 = $add483 & 2147483647;
   $sub573 = (-2 - ($sum))|0;
   $cmp574 = ($and572|0)>($sub573|0);
   do {
    if ($cmp574) {
     $call577 = (+Math_abs((+$sub570)));
     $cmp578 = !($call577 >= 9007199254740992.0);
     $mul589 = $sub570 * 0.5;
     $not$cmp578 = $cmp578 ^ 1;
     $inc590 = $not$cmp578&1;
     $e2$3 = (($inc590) + ($e2$1))|0;
     $y$2 = $cmp578 ? $sub570 : $mul589;
     $37 = (($e2$3) + 50)|0;
     $cmp593 = ($37|0)>($sub1|0);
     if (!($cmp593)) {
      $38 = ($bits$addr$0|0)!=($sub484|0);
      $narrow = $38 | $cmp578;
      $denormal$2$v = $cmp485 & $narrow;
      $tobool598 = $frac$3 != 0.0;
      $or$cond6 = $tobool598 & $denormal$2$v;
      if (!($or$cond6)) {
       $e2$4 = $e2$3;$y$3 = $y$2;
       break;
      }
     }
     $call600 = (___errno_location()|0);
     store4($call600,34);
     $e2$4 = $e2$3;$y$3 = $y$2;
    } else {
     $e2$4 = $e2$1;$y$3 = $sub570;
    }
   } while(0);
   $call603 = (+_scalbnl($y$3,$e2$4));
   $retval$1 = $call603;
  }
 } while(0);
 STACKTOP = sp;return (+$retval$1);
}
function _scanexp($f,$pok) {
 $f = $f|0;
 $pok = $pok|0;
 var $$lcssa = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add73 = i64(), $c$0 = 0, $c$1$be = 0, $c$147 = 0, $c$2$be = 0, $c$2$lcssa = 0, $c$241 = 0, $c$3$be = 0, $call = 0, $call104 = 0, $call17 = 0, $call58 = 0, $call85 = 0;
 var $cmp = 0, $cmp10 = 0, $cmp20 = 0, $cmp32 = 0, $cmp4 = 0, $cmp44 = 0, $cmp46 = 0, $cmp51 = 0, $cmp64 = 0, $cmp6440 = 0, $cmp67 = 0, $cmp78 = 0, $cmp91 = 0, $cmp9138 = 0, $cmp97 = 0, $cond = 0, $cond120 = i64(), $cond19 = 0, $conv = 0, $conv102 = 0;
 var $conv15 = 0, $conv56 = 0, $conv7 = 0, $conv72 = i64(), $conv83 = 0, $incdec$ptr = 0, $incdec$ptr101 = 0, $incdec$ptr112 = 0, $incdec$ptr14 = 0, $incdec$ptr27 = 0, $incdec$ptr39 = 0, $incdec$ptr55 = 0, $incdec$ptr82 = 0, $mul = 0, $mul71 = i64(), $neg$0 = 0, $or$cond1 = 0, $phitmp = i64(), $retval$0 = i64(), $rpos = 0;
 var $shend = 0, $sub = 0, $sub117 = i64(), $sub31 = 0, $sub43 = 0, $sub48 = 0, $sub63 = 0, $sub6339 = 0, $sub74 = i64(), $sub90 = 0, $sub9037 = 0, $tobool = 0, $tobool109 = 0, $tobool115 = 0, $tobool24 = 0, $tobool36 = 0, $x$048 = 0, $y$0$lcssa = i64(), $y$042 = i64(), label = 0;
 var sp = 0;
 sp = STACKTOP;
 $rpos = ((($f)) + 4|0);
 $0 = load4($rpos);
 $shend = ((($f)) + 100|0);
 $1 = load4($shend);
 $cmp = ($0>>>0)<($1>>>0);
 if ($cmp) {
  $incdec$ptr = ((($0)) + 1|0);
  store4($rpos,$incdec$ptr);
  $2 = load1($0);
  $conv = $2&255;
  $cond = $conv;
 } else {
  $call = (___shgetc($f)|0);
  $cond = $call;
 }
 switch ($cond|0) {
 case 43: case 45:  {
  $cmp4 = ($cond|0)==(45);
  $conv7 = $cmp4&1;
  $3 = load4($rpos);
  $4 = load4($shend);
  $cmp10 = ($3>>>0)<($4>>>0);
  if ($cmp10) {
   $incdec$ptr14 = ((($3)) + 1|0);
   store4($rpos,$incdec$ptr14);
   $5 = load1($3);
   $conv15 = $5&255;
   $cond19 = $conv15;
  } else {
   $call17 = (___shgetc($f)|0);
   $cond19 = $call17;
  }
  $sub = (($cond19) + -48)|0;
  $cmp20 = ($sub>>>0)>(9);
  $tobool = ($pok|0)!=(0);
  $or$cond1 = $tobool & $cmp20;
  if ($or$cond1) {
   $6 = load4($shend);
   $tobool24 = ($6|0)==(0|0);
   if ($tobool24) {
    $c$0 = $cond19;$neg$0 = $conv7;
   } else {
    $7 = load4($rpos);
    $incdec$ptr27 = ((($7)) + -1|0);
    store4($rpos,$incdec$ptr27);
    $c$0 = $cond19;$neg$0 = $conv7;
   }
  } else {
   $c$0 = $cond19;$neg$0 = $conv7;
  }
  break;
 }
 default: {
  $c$0 = $cond;$neg$0 = 0;
 }
 }
 $sub31 = (($c$0) + -48)|0;
 $cmp32 = ($sub31>>>0)>(9);
 if ($cmp32) {
  $8 = load4($shend);
  $tobool36 = ($8|0)==(0|0);
  if ($tobool36) {
   $retval$0 = i64_const(0,2147483648);
  } else {
   $9 = load4($rpos);
   $incdec$ptr39 = ((($9)) + -1|0);
   store4($rpos,$incdec$ptr39);
   $retval$0 = i64_const(0,2147483648);
  }
 } else {
  $c$147 = $c$0;$x$048 = 0;
  while(1) {
   $mul = ($x$048*10)|0;
   $add = (($c$147) + -48)|0;
   $sub48 = (($add) + ($mul))|0;
   $10 = load4($rpos);
   $11 = load4($shend);
   $cmp51 = ($10>>>0)<($11>>>0);
   if ($cmp51) {
    $incdec$ptr55 = ((($10)) + 1|0);
    store4($rpos,$incdec$ptr55);
    $12 = load1($10);
    $conv56 = $12&255;
    $c$1$be = $conv56;
   } else {
    $call58 = (___shgetc($f)|0);
    $c$1$be = $call58;
   }
   $sub43 = (($c$1$be) + -48)|0;
   $cmp44 = ($sub43>>>0)<(10);
   $cmp46 = ($sub48|0)<(214748364);
   $13 = $cmp44 & $cmp46;
   if ($13) {
    $c$147 = $c$1$be;$x$048 = $sub48;
   } else {
    break;
   }
  }
  $phitmp = i64_sext($sub48);
  $sub6339 = (($c$1$be) + -48)|0;
  $cmp6440 = ($sub6339>>>0)<(10);
  if ($cmp6440) {
   $c$241 = $c$1$be;$y$042 = $phitmp;
   while(1) {
    $mul71 = i64_mul($y$042,i64_const(10,0));
    $conv72 = i64_sext($c$241);
    $add73 = i64_add($conv72,i64_const(4294967248,4294967295));
    $sub74 = i64_add($add73,$mul71);
    $15 = load4($rpos);
    $16 = load4($shend);
    $cmp78 = ($15>>>0)<($16>>>0);
    if ($cmp78) {
     $incdec$ptr82 = ((($15)) + 1|0);
     store4($rpos,$incdec$ptr82);
     $17 = load1($15);
     $conv83 = $17&255;
     $c$2$be = $conv83;
    } else {
     $call85 = (___shgetc($f)|0);
     $c$2$be = $call85;
    }
    $sub63 = (($c$2$be) + -48)|0;
    $cmp64 = ($sub63>>>0)<(10);
    $cmp67 = i64_slt($sub74,i64_const(2061584302,21474836));
    $18 = $cmp64 & $cmp67;
    if ($18) {
     $c$241 = $c$2$be;$y$042 = $sub74;
    } else {
     $c$2$lcssa = $c$2$be;$y$0$lcssa = $sub74;
     break;
    }
   }
  } else {
   $c$2$lcssa = $c$1$be;$y$0$lcssa = $phitmp;
  }
  $sub9037 = (($c$2$lcssa) + -48)|0;
  $cmp9138 = ($sub9037>>>0)<(10);
  $14 = load4($shend);
  if ($cmp9138) {
   $20 = $14;
   while(1) {
    $19 = load4($rpos);
    $cmp97 = ($19>>>0)<($20>>>0);
    if ($cmp97) {
     $incdec$ptr101 = ((($19)) + 1|0);
     store4($rpos,$incdec$ptr101);
     $21 = load1($19);
     $conv102 = $21&255;
     $23 = $20;$c$3$be = $conv102;
    } else {
     $call104 = (___shgetc($f)|0);
     $$pre = load4($shend);
     $23 = $$pre;$c$3$be = $call104;
    }
    $sub90 = (($c$3$be) + -48)|0;
    $cmp91 = ($sub90>>>0)<(10);
    if ($cmp91) {
     $20 = $23;
    } else {
     $$lcssa = $23;
     break;
    }
   }
  } else {
   $$lcssa = $14;
  }
  $tobool109 = ($$lcssa|0)==(0|0);
  if (!($tobool109)) {
   $22 = load4($rpos);
   $incdec$ptr112 = ((($22)) + -1|0);
   store4($rpos,$incdec$ptr112);
  }
  $tobool115 = ($neg$0|0)!=(0);
  $sub117 = i64_sub(i64_const(0,0),$y$0$lcssa);
  $cond120 = $tobool115 ? $sub117 : $y$0$lcssa;
  $retval$0 = $cond120;
 }
 return (i64($retval$0));
}
function _atoi($s) {
 $s = $s|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $call = 0, $cond = 0, $conv = 0, $conv5 = 0, $conv58 = 0, $incdec$ptr = 0, $incdec$ptr9 = 0, $isdigit = 0, $isdigit10 = 0, $isdigittmp = 0, $isdigittmp13 = 0, $isdigittmp9 = 0, $mul = 0, $n$0$lcssa = 0, $n$012 = 0, $neg$0 = 0;
 var $neg$1$ph = 0, $s$addr$0 = 0, $s$addr$1$ph = 0, $s$addr$111 = 0, $sub11 = 0, $sub14 = 0, $tobool = 0, $tobool13 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $s$addr$0 = $s;
 while(1) {
  $0 = load1($s$addr$0);
  $conv = $0 << 24 >> 24;
  $call = (_isspace($conv)|0);
  $tobool = ($call|0)==(0);
  $incdec$ptr = ((($s$addr$0)) + 1|0);
  if ($tobool) {
   break;
  } else {
   $s$addr$0 = $incdec$ptr;
  }
 }
 switch ($conv|0) {
 case 45:  {
  $neg$0 = 1;
  label = 5;
  break;
 }
 case 43:  {
  $neg$0 = 0;
  label = 5;
  break;
 }
 default: {
  $1 = $0;$neg$1$ph = 0;$s$addr$1$ph = $s$addr$0;
 }
 }
 if ((label|0) == 5) {
  $$pre = load1($incdec$ptr);
  $1 = $$pre;$neg$1$ph = $neg$0;$s$addr$1$ph = $incdec$ptr;
 }
 $conv58 = $1 << 24 >> 24;
 $isdigittmp9 = (($conv58) + -48)|0;
 $isdigit10 = ($isdigittmp9>>>0)<(10);
 if ($isdigit10) {
  $isdigittmp13 = $isdigittmp9;$n$012 = 0;$s$addr$111 = $s$addr$1$ph;
  while(1) {
   $mul = ($n$012*10)|0;
   $incdec$ptr9 = ((($s$addr$111)) + 1|0);
   $sub11 = (($mul) - ($isdigittmp13))|0;
   $2 = load1($incdec$ptr9);
   $conv5 = $2 << 24 >> 24;
   $isdigittmp = (($conv5) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $isdigittmp13 = $isdigittmp;$n$012 = $sub11;$s$addr$111 = $incdec$ptr9;
   } else {
    $n$0$lcssa = $sub11;
    break;
   }
  }
 } else {
  $n$0$lcssa = 0;
 }
 $tobool13 = ($neg$1$ph|0)!=(0);
 $sub14 = (0 - ($n$0$lcssa))|0;
 $cond = $tobool13 ? $n$0$lcssa : $sub14;
 return ($cond|0);
}
function _strtol($s,$p,$base) {
 $s = $s|0;
 $p = $p|0;
 $base = $base|0;
 var $call = i64(), $conv = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (i64(_strtox_197($s,$p,$base,i64_const(2147483648,0))));
 $conv = i64_trunc($call);
 return ($conv|0);
}
function _strspn($s,$c) {
 $s = $s|0;
 $c = $c|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $and = 0, $arrayidx1 = 0, $arrayidx12 = 0, $arrayidx24 = 0, $byteset = 0, $c$addr$022 = 0, $cmp = 0, $div = 0;
 var $div16 = 0, $div17 = 0, $div23 = 0, $incdec$ptr = 0, $incdec$ptr16 = 0, $incdec$ptr32 = 0, $or = 0, $rem = 0, $rem26 = 0, $retval$0 = 0, $s$addr$0 = 0, $s$addr$1$lcssa = 0, $s$addr$119 = 0, $shl = 0, $shl27 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast34 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast35 = 0, $sub$ptr$sub = 0;
 var $sub$ptr$sub36 = 0, $tobool = 0, $tobool2 = 0, $tobool20 = 0, $tobool2018 = 0, $tobool28 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $byteset = sp;
 ; store8($byteset,i64_const(0,0),4); store8($byteset+8|0,i64_const(0,0),4); store8($byteset+16|0,i64_const(0,0),4); store8($byteset+24|0,i64_const(0,0),4);
 $0 = load1($c);
 $tobool = ($0<<24>>24)==(0);
 do {
  if ($tobool) {
   $retval$0 = 0;
  } else {
   $arrayidx1 = ((($c)) + 1|0);
   $1 = load1($arrayidx1);
   $tobool2 = ($1<<24>>24)==(0);
   if ($tobool2) {
    $s$addr$0 = $s;
    while(1) {
     $2 = load1($s$addr$0);
     $cmp = ($2<<24>>24)==($0<<24>>24);
     $incdec$ptr = ((($s$addr$0)) + 1|0);
     if ($cmp) {
      $s$addr$0 = $incdec$ptr;
     } else {
      break;
     }
    }
    $sub$ptr$lhs$cast = $s$addr$0;
    $sub$ptr$rhs$cast = $s;
    $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
    $retval$0 = $sub$ptr$sub;
    break;
   } else {
    $5 = $0;$c$addr$022 = $c;
   }
   while(1) {
    $4 = $5 & 31;
    $rem = $4&255;
    $shl = 1 << $rem;
    $div17 = ($5&255) >>> 5;
    $div = $div17&255;
    $arrayidx12 = (($byteset) + ($div<<2)|0);
    $6 = load4($arrayidx12);
    $or = $6 | $shl;
    store4($arrayidx12,$or);
    $incdec$ptr16 = ((($c$addr$022)) + 1|0);
    $7 = load1($incdec$ptr16);
    $tobool9 = ($7<<24>>24)==(0);
    if ($tobool9) {
     break;
    } else {
     $5 = $7;$c$addr$022 = $incdec$ptr16;
    }
   }
   $3 = load1($s);
   $tobool2018 = ($3<<24>>24)==(0);
   L10: do {
    if ($tobool2018) {
     $s$addr$1$lcssa = $s;
    } else {
     $8 = $3;$s$addr$119 = $s;
     while(1) {
      $div16 = ($8&255) >>> 5;
      $div23 = $div16&255;
      $arrayidx24 = (($byteset) + ($div23<<2)|0);
      $9 = load4($arrayidx24);
      $10 = $8 & 31;
      $rem26 = $10&255;
      $shl27 = 1 << $rem26;
      $and = $9 & $shl27;
      $tobool28 = ($and|0)==(0);
      if ($tobool28) {
       $s$addr$1$lcssa = $s$addr$119;
       break L10;
      }
      $incdec$ptr32 = ((($s$addr$119)) + 1|0);
      $11 = load1($incdec$ptr32);
      $tobool20 = ($11<<24>>24)==(0);
      if ($tobool20) {
       $s$addr$1$lcssa = $incdec$ptr32;
       break;
      } else {
       $8 = $11;$s$addr$119 = $incdec$ptr32;
      }
     }
    }
   } while(0);
   $sub$ptr$lhs$cast34 = $s$addr$1$lcssa;
   $sub$ptr$rhs$cast35 = $s;
   $sub$ptr$sub36 = (($sub$ptr$lhs$cast34) - ($sub$ptr$rhs$cast35))|0;
   $retval$0 = $sub$ptr$sub36;
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _strcspn($s,$c) {
 $s = $s|0;
 $c = $c|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $and = 0, $arrayidx1 = 0, $arrayidx15 = 0, $arrayidx7 = 0, $byteset = 0, $c$addr$021 = 0, $call = 0, $conv = 0, $div = 0;
 var $div14 = 0, $div15 = 0, $div16 = 0, $incdec$ptr = 0, $incdec$ptr23 = 0, $lnot = 0, $or = 0, $rem = 0, $rem17 = 0, $s$addr$0$sink = 0, $s$addr$018 = 0, $shl = 0, $shl18 = 0, $sub$ptr$lhs$cast25 = 0, $sub$ptr$rhs$cast26 = 0, $sub$ptr$sub27 = 0, $tobool = 0, $tobool11 = 0, $tobool1117 = 0, $tobool2 = 0;
 var $tobool4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $byteset = sp;
 $0 = load1($c);
 $tobool = ($0<<24>>24)==(0);
 L1: do {
  if ($tobool) {
   label = 3;
  } else {
   $arrayidx1 = ((($c)) + 1|0);
   $1 = load1($arrayidx1);
   $tobool2 = ($1<<24>>24)==(0);
   if ($tobool2) {
    label = 3;
   } else {
    ; store8($byteset,i64_const(0,0),4); store8($byteset+8|0,i64_const(0,0),4); store8($byteset+16|0,i64_const(0,0),4); store8($byteset+24|0,i64_const(0,0),4);
    $4 = $0;$c$addr$021 = $c;
    while(1) {
     $3 = $4 & 31;
     $rem = $3&255;
     $shl = 1 << $rem;
     $div16 = ($4&255) >>> 5;
     $div = $div16&255;
     $arrayidx7 = (($byteset) + ($div<<2)|0);
     $5 = load4($arrayidx7);
     $or = $5 | $shl;
     store4($arrayidx7,$or);
     $incdec$ptr = ((($c$addr$021)) + 1|0);
     $6 = load1($incdec$ptr);
     $tobool4 = ($6<<24>>24)==(0);
     if ($tobool4) {
      break;
     } else {
      $4 = $6;$c$addr$021 = $incdec$ptr;
     }
    }
    $2 = load1($s);
    $tobool1117 = ($2<<24>>24)==(0);
    if ($tobool1117) {
     $s$addr$0$sink = $s;
    } else {
     $7 = $2;$s$addr$018 = $s;
     while(1) {
      $div15 = ($7&255) >>> 5;
      $div14 = $div15&255;
      $arrayidx15 = (($byteset) + ($div14<<2)|0);
      $8 = load4($arrayidx15);
      $9 = $7 & 31;
      $rem17 = $9&255;
      $shl18 = 1 << $rem17;
      $and = $8 & $shl18;
      $lnot = ($and|0)==(0);
      if (!($lnot)) {
       $s$addr$0$sink = $s$addr$018;
       break L1;
      }
      $incdec$ptr23 = ((($s$addr$018)) + 1|0);
      $10 = load1($incdec$ptr23);
      $tobool11 = ($10<<24>>24)==(0);
      if ($tobool11) {
       $s$addr$0$sink = $incdec$ptr23;
       break;
      } else {
       $7 = $10;$s$addr$018 = $incdec$ptr23;
      }
     }
    }
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $conv = $0 << 24 >> 24;
  $call = (___strchrnul($s,$conv)|0);
  $s$addr$0$sink = $call;
 }
 $sub$ptr$lhs$cast25 = $s$addr$0$sink;
 $sub$ptr$rhs$cast26 = $s;
 $sub$ptr$sub27 = (($sub$ptr$lhs$cast25) - ($sub$ptr$rhs$cast26))|0;
 STACKTOP = sp;return ($sub$ptr$sub27|0);
}
function ___strchrnul($s,$c) {
 $s = $s|0;
 $c = $c|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add$ptr = 0, $and = 0, $and14 = 0, $and15 = 0, $and29 = 0, $and9 = 0, $and930 = 0, $call = 0, $cmp = 0, $cmp26 = 0, $conv1 = 0;
 var $incdec$ptr = 0, $incdec$ptr19 = 0, $incdec$ptr31 = 0, $lnot = 0, $mul = 0, $neg = 0, $neg13 = 0, $neg28 = 0, $or$cond = 0, $or$cond24 = 0, $rem = 0, $rem34 = 0, $retval$0 = 0, $s$addr$0$lcssa = 0, $s$addr$036 = 0, $s$addr$1 = 0, $sub = 0, $sub11 = 0, $sub27 = 0, $tobool = 0;
 var $tobool10 = 0, $tobool1031 = 0, $tobool2 = 0, $tobool23 = 0, $tobool235 = 0, $tobool3 = 0, $w$0$lcssa = 0, $w$032 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $conv1 = $c & 255;
 $tobool = ($conv1|0)==(0);
 L1: do {
  if ($tobool) {
   $call = (_strlen($s)|0);
   $add$ptr = (($s) + ($call)|0);
   $retval$0 = $add$ptr;
  } else {
   $0 = $s;
   $rem34 = $0 & 3;
   $tobool235 = ($rem34|0)==(0);
   if ($tobool235) {
    $s$addr$0$lcssa = $s;
   } else {
    $1 = $c&255;
    $s$addr$036 = $s;
    while(1) {
     $2 = load1($s$addr$036);
     $tobool3 = ($2<<24>>24)==(0);
     $cmp = ($2<<24>>24)==($1<<24>>24);
     $or$cond = $tobool3 | $cmp;
     if ($or$cond) {
      $retval$0 = $s$addr$036;
      break L1;
     }
     $incdec$ptr = ((($s$addr$036)) + 1|0);
     $3 = $incdec$ptr;
     $rem = $3 & 3;
     $tobool2 = ($rem|0)==(0);
     if ($tobool2) {
      $s$addr$0$lcssa = $incdec$ptr;
      break;
     } else {
      $s$addr$036 = $incdec$ptr;
     }
    }
   }
   $mul = Math_imul($conv1, 16843009)|0;
   $4 = load4($s$addr$0$lcssa);
   $sub27 = (($4) + -16843009)|0;
   $neg28 = $4 & -2139062144;
   $and29 = $neg28 ^ -2139062144;
   $and930 = $and29 & $sub27;
   $tobool1031 = ($and930|0)==(0);
   L10: do {
    if ($tobool1031) {
     $5 = $4;$w$032 = $s$addr$0$lcssa;
     while(1) {
      $xor = $5 ^ $mul;
      $sub11 = (($xor) + -16843009)|0;
      $neg13 = $xor & -2139062144;
      $and14 = $neg13 ^ -2139062144;
      $and15 = $and14 & $sub11;
      $lnot = ($and15|0)==(0);
      if (!($lnot)) {
       $w$0$lcssa = $w$032;
       break L10;
      }
      $incdec$ptr19 = ((($w$032)) + 4|0);
      $6 = load4($incdec$ptr19);
      $sub = (($6) + -16843009)|0;
      $neg = $6 & -2139062144;
      $and = $neg ^ -2139062144;
      $and9 = $and & $sub;
      $tobool10 = ($and9|0)==(0);
      if ($tobool10) {
       $5 = $6;$w$032 = $incdec$ptr19;
      } else {
       $w$0$lcssa = $incdec$ptr19;
       break;
      }
     }
    } else {
     $w$0$lcssa = $s$addr$0$lcssa;
    }
   } while(0);
   $7 = $c&255;
   $s$addr$1 = $w$0$lcssa;
   while(1) {
    $8 = load1($s$addr$1);
    $tobool23 = ($8<<24>>24)==(0);
    $cmp26 = ($8<<24>>24)==($7<<24>>24);
    $or$cond24 = $tobool23 | $cmp26;
    $incdec$ptr31 = ((($s$addr$1)) + 1|0);
    if ($or$cond24) {
     $retval$0 = $s$addr$1;
     break;
    } else {
     $s$addr$1 = $incdec$ptr31;
    }
   }
  }
 } while(0);
 return ($retval$0|0);
}
function _strlen($s) {
 $s = $s|0;
 var $$pn = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and3 = 0, $incdec$ptr = 0, $incdec$ptr1323 = 0, $incdec$ptr7 = 0, $lnot = 0, $neg = 0, $rem = 0, $rem13 = 0, $s$addr$0$lcssa = 0, $s$addr$015 = 0, $s$addr$1$lcssa = 0;
 var $sub = 0, $sub$ptr$lhs$cast15 = 0, $sub$ptr$lhs$cast15$sink = 0, $sub$ptr$sub17 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool1021 = 0, $tobool14 = 0, $w$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $rem13 = $0 & 3;
 $tobool14 = ($rem13|0)==(0);
 L1: do {
  if ($tobool14) {
   $s$addr$0$lcssa = $s;
   label = 4;
  } else {
   $5 = $0;$s$addr$015 = $s;
   while(1) {
    $1 = load1($s$addr$015);
    $tobool1 = ($1<<24>>24)==(0);
    if ($tobool1) {
     $sub$ptr$lhs$cast15$sink = $5;
     break L1;
    }
    $incdec$ptr = ((($s$addr$015)) + 1|0);
    $2 = $incdec$ptr;
    $rem = $2 & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $s$addr$0$lcssa = $incdec$ptr;
     label = 4;
     break;
    } else {
     $5 = $2;$s$addr$015 = $incdec$ptr;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $s$addr$0$lcssa;
  while(1) {
   $3 = load4($w$0);
   $sub = (($3) + -16843009)|0;
   $neg = $3 & -2139062144;
   $and = $neg ^ -2139062144;
   $and3 = $and & $sub;
   $lnot = ($and3|0)==(0);
   $incdec$ptr7 = ((($w$0)) + 4|0);
   if ($lnot) {
    $w$0 = $incdec$ptr7;
   } else {
    break;
   }
  }
  $4 = $3&255;
  $tobool1021 = ($4<<24>>24)==(0);
  if ($tobool1021) {
   $s$addr$1$lcssa = $w$0;
  } else {
   $$pn = $w$0;
   while(1) {
    $incdec$ptr1323 = ((($$pn)) + 1|0);
    $$pre = load1($incdec$ptr1323);
    $tobool10 = ($$pre<<24>>24)==(0);
    if ($tobool10) {
     $s$addr$1$lcssa = $incdec$ptr1323;
     break;
    } else {
     $$pn = $incdec$ptr1323;
    }
   }
  }
  $sub$ptr$lhs$cast15 = $s$addr$1$lcssa;
  $sub$ptr$lhs$cast15$sink = $sub$ptr$lhs$cast15;
 }
 $sub$ptr$sub17 = (($sub$ptr$lhs$cast15$sink) - ($0))|0;
 return ($sub$ptr$sub17|0);
}
function ___fseeko($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $0 = 0, $call = 0, $call1 = 0, $call16 = 0, $call17 = 0, $cmp = 0, $lock = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $phitmp = ($call|0)==(0);
  $call1 = (___fseeko_unlocked($f,$off,$whence)|0);
  if ($phitmp) {
   $call17 = $call1;
  } else {
   ___unlockfile($f);
   $call17 = $call1;
  }
 } else {
  $call16 = (___fseeko_unlocked($f,$off,$whence)|0);
  $call17 = $call16;
 }
 return ($call17|0);
}
function ___fseeko_unlocked($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and = 0, $call10 = 0, $cmp = 0, $cmp1 = 0, $cmp11 = 0, $off$addr$0 = 0, $rend = 0, $rend14 = 0, $retval$0 = 0, $rpos = 0, $rpos15 = 0, $seek = 0;
 var $sub = 0, $sub$ptr$sub17 = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($whence|0)==(1);
 if ($cmp) {
  $rend = ((($f)) + 8|0);
  $0 = load4($rend);
  $rpos = ((($f)) + 4|0);
  $1 = load4($rpos);
  $sub$ptr$sub17 = (($off) - ($0))|0;
  $sub = (($sub$ptr$sub17) + ($1))|0;
  $off$addr$0 = $sub;
 } else {
  $off$addr$0 = $off;
 }
 $wpos = ((($f)) + 20|0);
 $2 = load4($wpos);
 $wbase = ((($f)) + 28|0);
 $3 = load4($wbase);
 $cmp1 = ($2>>>0)>($3>>>0);
 if ($cmp1) {
  $write = ((($f)) + 36|0);
  $4 = load4($write);
  (FUNCTION_TABLE_iiii[$4 & 15]($f,0,0)|0);
  $5 = load4($wpos);
  $tobool = ($5|0)==(0|0);
  if ($tobool) {
   $retval$0 = -1;
  } else {
   label = 5;
  }
 } else {
  label = 5;
 }
 if ((label|0) == 5) {
  $wend = ((($f)) + 16|0);
  store4($wend,0);
  store4($wbase,0);
  store4($wpos,0);
  $seek = ((($f)) + 40|0);
  $6 = load4($seek);
  $call10 = (FUNCTION_TABLE_iiii[$6 & 15]($f,$off$addr$0,$whence)|0);
  $cmp11 = ($call10|0)<(0);
  if ($cmp11) {
   $retval$0 = -1;
  } else {
   $rend14 = ((($f)) + 8|0);
   store4($rend14,0);
   $rpos15 = ((($f)) + 4|0);
   store4($rpos15,0);
   $7 = load4($f);
   $and = $7 & -17;
   store4($f,$and);
   $retval$0 = 0;
  }
 }
 return ($retval$0|0);
}
function _fputc($c,$f) {
 $c = $c|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $call10 = 0, $call28 = 0, $cmp = 0, $cmp15 = 0, $cmp20 = 0, $cmp3 = 0, $cmp5 = 0, $cond30 = 0, $conv = 0, $conv1 = 0, $conv14 = 0, $conv2 = 0;
 var $incdec$ptr = 0, $incdec$ptr25 = 0, $lbf = 0, $lbf13 = 0, $lock = 0, $retval$0 = 0, $tobool = 0, $wend = 0, $wend19 = 0, $wpos = 0, $wpos18 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)<(0);
 $conv = $c&255;
 $conv1 = $c & 255;
 if ($cmp) {
  label = 3;
 } else {
  $call = (___lockfile($f)|0);
  $tobool = ($call|0)==(0);
  if ($tobool) {
   label = 3;
  } else {
   $lbf13 = ((($f)) + 75|0);
   $4 = load1($lbf13);
   $conv14 = $4 << 24 >> 24;
   $cmp15 = ($conv1|0)==($conv14|0);
   if ($cmp15) {
    label = 10;
   } else {
    $wpos18 = ((($f)) + 20|0);
    $5 = load4($wpos18);
    $wend19 = ((($f)) + 16|0);
    $6 = load4($wend19);
    $cmp20 = ($5>>>0)<($6>>>0);
    if ($cmp20) {
     $incdec$ptr25 = ((($5)) + 1|0);
     store4($wpos18,$incdec$ptr25);
     store1($5,$conv);
     $cond30 = $conv1;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $call28 = (___overflow($f,$c)|0);
    $cond30 = $call28;
   }
   ___unlockfile($f);
   $retval$0 = $cond30;
  }
 }
 do {
  if ((label|0) == 3) {
   $lbf = ((($f)) + 75|0);
   $1 = load1($lbf);
   $conv2 = $1 << 24 >> 24;
   $cmp3 = ($conv1|0)==($conv2|0);
   if (!($cmp3)) {
    $wpos = ((($f)) + 20|0);
    $2 = load4($wpos);
    $wend = ((($f)) + 16|0);
    $3 = load4($wend);
    $cmp5 = ($2>>>0)<($3>>>0);
    if ($cmp5) {
     $incdec$ptr = ((($2)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($2,$conv);
     $retval$0 = $conv1;
     break;
    }
   }
   $call10 = (___overflow($f,$c)|0);
   $retval$0 = $call10;
  }
 } while(0);
 return ($retval$0|0);
}
function ___overflow($f,$_c) {
 $f = $f|0;
 $_c = $_c|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv = 0, $conv18 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $lbf = 0, $retval$0 = 0;
 var $tobool = 0, $tobool1 = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 $conv = $_c&255;
 store1($c,$conv);
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $2 = $$pre;
   label = 4;
  } else {
   $retval$0 = -1;
  }
 } else {
  $2 = $0;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $wpos = ((($f)) + 20|0);
   $1 = load4($wpos);
   $cmp = ($1>>>0)<($2>>>0);
   if ($cmp) {
    $conv5 = $_c & 255;
    $lbf = ((($f)) + 75|0);
    $3 = load1($lbf);
    $conv6 = $3 << 24 >> 24;
    $cmp7 = ($conv5|0)==($conv6|0);
    if (!($cmp7)) {
     $incdec$ptr = ((($1)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($1,$conv);
     $retval$0 = $conv5;
     break;
    }
   }
   $write = ((($f)) + 36|0);
   $4 = load4($write);
   $call13 = (FUNCTION_TABLE_iiii[$4 & 15]($f,$c,1)|0);
   $cmp14 = ($call13|0)==(1);
   if ($cmp14) {
    $5 = load1($c);
    $conv18 = $5&255;
    $retval$0 = $conv18;
   } else {
    $retval$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _fread($destv,$size,$nmemb,$f) {
 $destv = $destv|0;
 $size = $size|0;
 $nmemb = $nmemb|0;
 $f = $f|0;
 var $$nmemb = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $add = 0, $add$ptr = 0, $add$ptr25 = 0, $add$ptr45 = 0, $call = 0, $call29 = 0, $call33 = 0, $cmp = 0, $cmp12 = 0, $cmp36 = 0, $cmp4 = 0, $cond = 0, $conv = 0, $conv3 = 0;
 var $dest$0$ph = 0, $dest$046 = 0, $div = 0, $l$0$ph = 0, $l$047 = 0, $lock = 0, $mode = 0, $mul = 0, $or = 0, $read = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub$ptr$sub$mul = 0, $sub26 = 0, $sub42 = 0, $sub44 = 0;
 var $tobool = 0, $tobool28 = 0, $tobool2845 = 0, $tobool30 = 0, $tobool39 = 0, $tobool46 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mul = Math_imul($nmemb, $size)|0;
 $tobool = ($size|0)==(0);
 $$nmemb = $tobool ? 0 : $nmemb;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $cond = $call;
 } else {
  $cond = 0;
 }
 $mode = ((($f)) + 74|0);
 $1 = load1($mode);
 $conv = $1 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $rend = ((($f)) + 8|0);
 $2 = load4($rend);
 $rpos = ((($f)) + 4|0);
 $3 = load4($rpos);
 $sub$ptr$rhs$cast = $3;
 $sub$ptr$sub = (($2) - ($sub$ptr$rhs$cast))|0;
 $cmp4 = ($sub$ptr$sub|0)>(0);
 $cmp12 = ($sub$ptr$sub>>>0)<($mul>>>0);
 $sub$ptr$sub$mul = $cmp12 ? $sub$ptr$sub : $mul;
 if ($cmp4) {
  $sub26 = (($mul) - ($sub$ptr$sub$mul))|0;
  $add$ptr25 = (($destv) + ($sub$ptr$sub$mul)|0);
  _memcpy(($destv|0),($3|0),($sub$ptr$sub$mul|0))|0;
  $add$ptr = (($3) + ($sub$ptr$sub$mul)|0);
  store4($rpos,$add$ptr);
  $dest$0$ph = $add$ptr25;$l$0$ph = $sub26;
 } else {
  $dest$0$ph = $destv;$l$0$ph = $mul;
 }
 $tobool2845 = ($l$0$ph|0)==(0);
 L7: do {
  if ($tobool2845) {
   label = 13;
  } else {
   $read = ((($f)) + 32|0);
   $dest$046 = $dest$0$ph;$l$047 = $l$0$ph;
   while(1) {
    $call29 = (___toread($f)|0);
    $tobool30 = ($call29|0)==(0);
    if (!($tobool30)) {
     break;
    }
    $4 = load4($read);
    $call33 = (FUNCTION_TABLE_iiii[$4 & 15]($f,$dest$046,$l$047)|0);
    $add = (($call33) + 1)|0;
    $cmp36 = ($add>>>0)<(2);
    if ($cmp36) {
     break;
    }
    $sub44 = (($l$047) - ($call33))|0;
    $add$ptr45 = (($dest$046) + ($call33)|0);
    $tobool28 = ($sub44|0)==(0);
    if ($tobool28) {
     label = 13;
     break L7;
    } else {
     $dest$046 = $add$ptr45;$l$047 = $sub44;
    }
   }
   $tobool39 = ($cond|0)==(0);
   if (!($tobool39)) {
    ___unlockfile($f);
   }
   $sub42 = (($mul) - ($l$047))|0;
   $div = (($sub42>>>0) / ($size>>>0))&-1;
   $retval$0 = $div;
  }
 } while(0);
 if ((label|0) == 13) {
  $tobool46 = ($cond|0)==(0);
  if ($tobool46) {
   $retval$0 = $$nmemb;
  } else {
   ___unlockfile($f);
   $retval$0 = $$nmemb;
  }
 }
 return ($retval$0|0);
}
function ___ftello_unlocked($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add = 0, $and = 0, $call = 0, $cmp = 0, $cmp1 = 0, $phitmp = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $seek = 0, $sub = 0;
 var $sub$ptr$sub11 = 0, $sub$ptr$sub6 = 0, $tobool = 0, $wbase = 0, $wbase3 = 0, $wpos = 0, $wpos2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $seek = ((($f)) + 40|0);
 $0 = load4($seek);
 $1 = load4($f);
 $and = $1 & 128;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $4 = 1;
 } else {
  $wpos = ((($f)) + 20|0);
  $2 = load4($wpos);
  $wbase = ((($f)) + 28|0);
  $3 = load4($wbase);
  $cmp = ($2>>>0)>($3>>>0);
  $phitmp = $cmp ? 2 : 1;
  $4 = $phitmp;
 }
 $call = (FUNCTION_TABLE_iiii[$0 & 15]($f,0,$4)|0);
 $cmp1 = ($call|0)<(0);
 if ($cmp1) {
  $retval$0 = $call;
 } else {
  $rend = ((($f)) + 8|0);
  $5 = load4($rend);
  $rpos = ((($f)) + 4|0);
  $6 = load4($rpos);
  $wpos2 = ((($f)) + 20|0);
  $7 = load4($wpos2);
  $wbase3 = ((($f)) + 28|0);
  $8 = load4($wbase3);
  $sub$ptr$sub6 = (($call) - ($5))|0;
  $sub$ptr$sub11 = (($sub$ptr$sub6) + ($6))|0;
  $sub = (($sub$ptr$sub11) + ($7))|0;
  $add = (($sub) - ($8))|0;
  $retval$0 = $add;
 }
 return ($retval$0|0);
}
function ___ftello($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $call16 = 0, $call17 = 0, $cmp = 0, $lock = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $phitmp = ($call|0)==(0);
  $call1 = (___ftello_unlocked($f)|0);
  if ($phitmp) {
   $call17 = $call1;
  } else {
   ___unlockfile($f);
   $call17 = $call1;
  }
 } else {
  $call16 = (___ftello_unlocked($f)|0);
  $call17 = $call16;
 }
 return ($call17|0);
}
function _ftell($f) {
 $f = $f|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___ftello($f)|0);
 return ($call|0);
}
function _fputs($s,$f) {
 $s = $s|0;
 $f = $f|0;
 var $call = 0, $call1 = 0, $not$cmp = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($s)|0);
 $call1 = (_fwrite($s,1,$call,$f)|0);
 $not$cmp = ($call1|0)!=($call|0);
 $sub = $not$cmp << 31 >> 31;
 return ($sub|0);
}
function _fwrite($src,$size,$nmemb,$f) {
 $src = $src|0;
 $size = $size|0;
 $nmemb = $nmemb|0;
 $f = $f|0;
 var $$nmemb = 0, $0 = 0, $call = 0, $call1 = 0, $call112 = 0, $call113 = 0, $cmp = 0, $cmp5 = 0, $cond9 = 0, $div = 0, $lock = 0, $mul = 0, $phitmp = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mul = Math_imul($nmemb, $size)|0;
 $tobool = ($size|0)==(0);
 $$nmemb = $tobool ? 0 : $nmemb;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $phitmp = ($call|0)==(0);
  $call1 = (___fwritex($src,$mul,$f)|0);
  if ($phitmp) {
   $call113 = $call1;
  } else {
   ___unlockfile($f);
   $call113 = $call1;
  }
 } else {
  $call112 = (___fwritex($src,$mul,$f)|0);
  $call113 = $call112;
 }
 $cmp5 = ($call113|0)==($mul|0);
 if ($cmp5) {
  $cond9 = $$nmemb;
 } else {
  $div = (($call113>>>0) / ($size>>>0))&-1;
  $cond9 = $div;
 }
 return ($cond9|0);
}
function _ferror($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $and = 0, $and$lobit = 0, $and$lobit8 = 0, $and$lobit9 = 0, $and7 = 0, $call = 0, $cmp = 0, $lock = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $phitmp = ($call|0)==(0);
  $2 = load4($f);
  $and = $2 >>> 5;
  $and$lobit = $and & 1;
  if ($phitmp) {
   $and$lobit9 = $and$lobit;
  } else {
   ___unlockfile($f);
   $and$lobit9 = $and$lobit;
  }
 } else {
  $1 = load4($f);
  $and7 = $1 >>> 5;
  $and$lobit8 = $and7 & 1;
  $and$lobit9 = $and$lobit8;
 }
 return ($and$lobit9|0);
}
function _fscanf($f,$fmt,$varargs) {
 $f = $f|0;
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $ap = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 $call = (_vfscanf($f,$fmt,$ap)|0);
 STACKTOP = sp;return ($call|0);
}
function _vfscanf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$ = 0, $$224 = 0, $$225 = 0, $$compoundliteral$sroa$2$0$$sroa_idx8 = 0, $$compoundliteral329 = 0, $$lcssa = 0, $$ph = 0, $$ph245 = 0, $$pre = 0, $$pre385 = 0, $$pre386 = 0, $$pre388 = 0, $$pre389 = 0, $$pre390 = 0, $$pre391 = 0, $$pre392 = 0, $$s$0 = 0, $$size$0 = 0, $$width$0 = 0, $0 = 0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $add = 0;
 var $add$ptr = 0, $add$ptr86 = 0, $add173 = 0, $add174 = 0, $add278 = 0, $add287 = 0, $add29 = 0, $add296 = 0, $add325 = 0, $add346 = 0, $add378 = 0, $add389 = 0, $add417 = 0, $add439 = 0, $add460 = 0, $add548 = 0, $add549 = 0, $add96 = 0, $alloc$1 = 0, $alloc$2 = 0;
 var $and = 0, $arglist_current = 0, $arglist_next = 0, $arrayidx = 0, $arrayidx210 = 0, $arrayidx215 = 0, $arrayidx235 = 0, $arrayidx244 = 0, $arrayidx244$sink = 0, $arrayidx259 = 0, $arrayidx269 = 0, $arrayidx279 = 0, $arrayidx288 = 0, $arrayidx326 = 0, $arrayidx33 = 0, $arrayidx338 = 0, $arrayidx379 = 0, $arrayidx384 = 0, $arrayidx418 = 0, $arrayidx423 = 0;
 var $arrayidx440 = 0, $arrayidx491 = 0, $arrayidx495 = 0, $arrayidx79 = 0, $base$0 = 0, $c$0308 = 0, $call = 0, $call1 = 0, $call14 = 0, $call153 = 0, $call156 = 0, $call17 = 0, $call185 = 0, $call306 = 0, $call322 = 0, $call331 = 0, $call348 = 0, $call354 = 0, $call361 = 0, $call375 = 0;
 var $call392 = 0, $call4 = 0, $call414 = 0, $call436 = 0, $call50 = 0, $call502 = i64(), $call522 = 0.0, $call85 = 0, $cmp = 0, $cmp100 = 0, $cmp111 = 0, $cmp119 = 0, $cmp131 = 0, $cmp146 = 0, $cmp178 = 0, $cmp188 = 0, $cmp200 = 0, $cmp200$not = 0, $cmp203 = 0, $cmp220 = 0;
 var $cmp273 = 0, $cmp273307 = 0, $cmp300 = 0, $cmp31 = 0, $cmp315 = 0, $cmp342 = 0, $cmp368 = 0, $cmp385 = 0, $cmp407 = 0, $cmp429 = 0, $cmp43 = 0, $cmp474 = 0, $cmp513 = 0, $cmp54 = 0, $cmp64 = 0, $cmp7 = 0, $cmp81 = 0, $cond = 0, $cond155 = 0, $cond16 = 0;
 var $cond299 = 0, $cond324 = 0, $cond377 = 0, $cond416 = 0, $cond438 = 0, $cond52 = 0, $conv = 0, $conv12 = 0, $conv130 = 0, $conv141 = i64(), $conv151 = 0, $conv243 = 0, $conv270 = 0, $conv272 = 0, $conv285$pre$phiZ2D = 0, $conv286 = 0, $conv3 = 0, $conv320 = 0, $conv330 = 0, $conv34 = 0;
 var $conv373 = 0, $conv382 = 0, $conv40 = 0, $conv412 = 0, $conv421 = 0, $conv434 = 0, $conv48 = 0, $conv518 = 0, $conv53 = 0, $conv536 = Math_fround(0), $conv91 = 0, $conv91298 = 0, $conv91303 = 0, $dest$0 = 0, $expanded = 0, $expanded1 = 0, $expanded2 = 0, $expanded3 = 0, $expanded4 = 0, $expanded5 = 0;
 var $expanded6 = 0, $factor = 0, $factor232 = 0, $i$0$ph = 0, $i$0$ph$phi = 0, $i$0$ph236 = 0, $i$1 = 0, $i$2 = 0, $i$2$ph = 0, $i$2$ph$phi = 0, $i$3 = 0, $i$4 = 0, $inc = 0, $inc337 = 0, $inc383 = 0, $inc422 = 0, $inc552 = 0, $incdec$ptr105 = 0, $incdec$ptr105$p$3 = 0, $incdec$ptr108 = 0;
 var $incdec$ptr11 = 0, $incdec$ptr114 = 0, $incdec$ptr114$incdec$ptr108 = 0, $incdec$ptr122 = 0, $incdec$ptr122$incdec$ptr108 = 0, $incdec$ptr150 = 0, $incdec$ptr164 = 0, $incdec$ptr182 = 0, $incdec$ptr196 = 0, $incdec$ptr218 = 0, $incdec$ptr223 = 0, $incdec$ptr241 = 0, $incdec$ptr25 = 0, $incdec$ptr290 = 0, $incdec$ptr319 = 0, $incdec$ptr372 = 0, $incdec$ptr411 = 0, $incdec$ptr433 = 0, $incdec$ptr451 = 0, $incdec$ptr47 = 0;
 var $incdec$ptr555 = 0, $incdec$ptr61 = 0, $incdec$ptr75 = 0, $incdec$ptr98 = 0, $invert$0 = 0, $isdigit = 0, $isdigit220 = 0, $isdigit220300 = 0, $isdigittmp = 0, $isdigittmp219 = 0, $isdigittmp219299 = 0, $k$0$ph = 0, $k$1$ph = 0, $lnot$ext$$le324 = 0, $lnot$ext$$le326 = 0, $lock = 0, $matches$0$inc552 = 0, $matches$0312 = 0, $matches$1 = 0, $matches$2 = 0;
 var $matches$3 = 0, $mul = 0, $mul305 = 0, $mul347 = 0, $narrow = 0, $narrow350 = 0, $or = 0, $or$cond = 0, $or$cond1 = 0, $or$cond2 = 0, $or$cond223 = 0, $or$conv130 = 0, $p$0316 = 0, $p$1 = 0, $p$10 = 0, $p$11 = 0, $p$2 = 0, $p$3$lcssa = 0, $p$3301 = 0, $p$5 = 0;
 var $p$6 = 0, $p$7 = 0, $p$7$ph = 0, $p$8 = 0, $p$9 = 0, $pos$0315 = 0, $pos$1 = 0, $pos$2 = 0, $rend169 = 0, $rpos144 = 0, $s$0310 = 0, $s$2$ph = 0, $s$4 = 0, $s$5 = 0, $s$6 = 0, $s$7 = 0, $s$8 = 0, $s$9 = 0, $s$9$ph = 0, $scanset = 0;
 var $shcnt167 = 0, $shend145 = 0, $size$0 = 0, $st = 0, $sub$ptr$sub = 0, $sub$ptr$sub172 = 0, $sub$ptr$sub459 = 0, $sub$ptr$sub508222 = 0, $sub$ptr$sub528221 = 0, $sub$ptr$sub547 = 0, $sub242 = 0, $sub97 = 0, $tobool = 0, $tobool103 = 0, $tobool157 = 0, $tobool161 = 0, $tobool18 = 0, $tobool193 = 0, $tobool2 = 0, $tobool22 = 0;
 var $tobool307 = 0, $tobool309 = 0, $tobool327 = 0, $tobool335 = 0, $tobool349 = 0, $tobool355 = 0, $tobool362 = 0, $tobool380 = 0, $tobool393 = 0, $tobool402 = 0, $tobool419 = 0, $tobool441 = 0, $tobool448 = 0, $tobool461 = 0, $tobool489 = 0, $tobool493 = 0, $tobool5 = 0, $tobool510 = 0, $tobool530 = 0, $tobool533 = 0;
 var $tobool558 = 0, $tobool558$old = 0, $tobool561 = 0, $tobool565 = 0, $tobool58 = 0, $trunc = 0, $wc = 0, $wcs$5 = 0, $width$0$lcssa = 0, $width$0302 = 0, $width$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 288|0;
 $st = sp + 8|0;
 $scanset = sp + 17|0;
 $wc = sp;
 $$compoundliteral329 = sp + 16|0;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $cond = $call;
 } else {
  $cond = 0;
 }
 $1 = load1($fmt);
 $tobool309 = ($1<<24>>24)==(0);
 L4: do {
  if ($tobool309) {
   $matches$3 = 0;
  } else {
   $rpos144 = ((($f)) + 4|0);
   $shend145 = ((($f)) + 100|0);
   $shcnt167 = ((($f)) + 108|0);
   $rend169 = ((($f)) + 8|0);
   $arrayidx210 = ((($scanset)) + 10|0);
   $arrayidx215 = ((($scanset)) + 33|0);
   $$compoundliteral$sroa$2$0$$sroa_idx8 = ((($st)) + 4|0);
   $arrayidx235 = ((($scanset)) + 46|0);
   $arrayidx244 = ((($scanset)) + 94|0);
   $2 = ((($scanset)) + 1|0);
   $3 = ((($scanset)) + 1|0);
   $30 = 0;$4 = $1;$matches$0312 = 0;$p$0316 = $fmt;$pos$0315 = 0;$s$0310 = 0;
   L6: while(1) {
    $conv = $4&255;
    $call1 = (_isspace($conv)|0);
    $tobool2 = ($call1|0)==(0);
    L8: do {
     if ($tobool2) {
      $cmp31 = ($4<<24>>24)==(37);
      L10: do {
       if ($cmp31) {
        $arrayidx33 = ((($p$0316)) + 1|0);
        $15 = load1($arrayidx33);
        L12: do {
         switch ($15<<24>>24) {
         case 37:  {
          break L10;
          break;
         }
         case 42:  {
          $incdec$ptr75 = ((($p$0316)) + 2|0);
          $dest$0 = 0;$p$2 = $incdec$ptr75;
          break;
         }
         default: {
          $conv34 = $15&255;
          $isdigittmp = (($conv34) + -48)|0;
          $isdigit = ($isdigittmp>>>0)<(10);
          if ($isdigit) {
           $arrayidx79 = ((($p$0316)) + 2|0);
           $22 = load1($arrayidx79);
           $cmp81 = ($22<<24>>24)==(36);
           if ($cmp81) {
            $call85 = (_arg_n($ap,$isdigittmp)|0);
            $add$ptr86 = ((($p$0316)) + 3|0);
            $dest$0 = $call85;$p$2 = $add$ptr86;
            break L12;
           }
          }
          $arglist_current = load4($ap);
          $23 = $arglist_current;
          $expanded2 = ((0) + 4|0);
          $expanded1 = $expanded2;
          $expanded = (($expanded1) - 1)|0;
          $24 = (($23) + ($expanded))|0;
          $expanded6 = ((0) + 4|0);
          $expanded5 = $expanded6;
          $expanded4 = (($expanded5) - 1)|0;
          $expanded3 = $expanded4 ^ -1;
          $25 = $24 & $expanded3;
          $26 = $25;
          $27 = load4($26);
          $arglist_next = ((($26)) + 4|0);
          store4($ap,$arglist_next);
          $dest$0 = $27;$p$2 = $arrayidx33;
         }
         }
        } while(0);
        $28 = load1($p$2);
        $conv91298 = $28&255;
        $isdigittmp219299 = (($conv91298) + -48)|0;
        $isdigit220300 = ($isdigittmp219299>>>0)<(10);
        if ($isdigit220300) {
         $conv91303 = $conv91298;$p$3301 = $p$2;$width$0302 = 0;
         while(1) {
          $mul = ($width$0302*10)|0;
          $add96 = (($mul) + -48)|0;
          $sub97 = (($add96) + ($conv91303))|0;
          $incdec$ptr98 = ((($p$3301)) + 1|0);
          $29 = load1($incdec$ptr98);
          $conv91 = $29&255;
          $isdigittmp219 = (($conv91) + -48)|0;
          $isdigit220 = ($isdigittmp219>>>0)<(10);
          if ($isdigit220) {
           $conv91303 = $conv91;$p$3301 = $incdec$ptr98;$width$0302 = $sub97;
          } else {
           $$lcssa = $29;$p$3$lcssa = $incdec$ptr98;$width$0$lcssa = $sub97;
           break;
          }
         }
        } else {
         $$lcssa = $28;$p$3$lcssa = $p$2;$width$0$lcssa = 0;
        }
        $cmp100 = ($$lcssa<<24>>24)==(109);
        $tobool103 = ($dest$0|0)!=(0|0);
        $incdec$ptr105 = ((($p$3$lcssa)) + 1|0);
        $$s$0 = $cmp100 ? 0 : $s$0310;
        $$ = $cmp100 ? 0 : $30;
        $incdec$ptr105$p$3 = $cmp100 ? $incdec$ptr105 : $p$3$lcssa;
        $narrow = $tobool103 & $cmp100;
        $incdec$ptr108 = ((($incdec$ptr105$p$3)) + 1|0);
        $31 = load1($incdec$ptr105$p$3);
        switch ($31<<24>>24) {
        case 104:  {
         $32 = load1($incdec$ptr108);
         $cmp111 = ($32<<24>>24)==(104);
         $incdec$ptr114 = ((($incdec$ptr105$p$3)) + 2|0);
         $incdec$ptr114$incdec$ptr108 = $cmp111 ? $incdec$ptr114 : $incdec$ptr108;
         $$224 = $cmp111 ? -2 : -1;
         $p$5 = $incdec$ptr114$incdec$ptr108;$size$0 = $$224;
         break;
        }
        case 108:  {
         $33 = load1($incdec$ptr108);
         $cmp119 = ($33<<24>>24)==(108);
         $incdec$ptr122 = ((($incdec$ptr105$p$3)) + 2|0);
         $incdec$ptr122$incdec$ptr108 = $cmp119 ? $incdec$ptr122 : $incdec$ptr108;
         $$225 = $cmp119 ? 3 : 1;
         $p$5 = $incdec$ptr122$incdec$ptr108;$size$0 = $$225;
         break;
        }
        case 106:  {
         $p$5 = $incdec$ptr108;$size$0 = 3;
         break;
        }
        case 116: case 122:  {
         $p$5 = $incdec$ptr108;$size$0 = 1;
         break;
        }
        case 76:  {
         $p$5 = $incdec$ptr108;$size$0 = 2;
         break;
        }
        case 110: case 112: case 67: case 83: case 91: case 99: case 115: case 88: case 71: case 70: case 69: case 65: case 103: case 102: case 101: case 97: case 120: case 117: case 111: case 105: case 100:  {
         $p$5 = $incdec$ptr105$p$3;$size$0 = 0;
         break;
        }
        default: {
         $96 = $$;$narrow350 = $narrow;$s$7 = $$s$0;
         label = 137;
         break L6;
        }
        }
        $34 = load1($p$5);
        $conv130 = $34&255;
        $and = $conv130 & 47;
        $cmp131 = ($and|0)==(3);
        $or = $conv130 | 32;
        $or$conv130 = $cmp131 ? $or : $conv130;
        $$size$0 = $cmp131 ? 1 : $size$0;
        $trunc = $or$conv130&255;
        switch ($trunc<<24>>24) {
        case 99:  {
         $35 = ($width$0$lcssa|0)>(1);
         $$width$0 = $35 ? $width$0$lcssa : 1;
         $pos$1 = $pos$0315;$width$1 = $$width$0;
         break;
        }
        case 91:  {
         $pos$1 = $pos$0315;$width$1 = $width$0$lcssa;
         break;
        }
        case 110:  {
         $conv141 = i64_sext($pos$0315);
         _store_int($dest$0,$$size$0,$conv141);
         $94 = $$;$matches$1 = $matches$0312;$p$11 = $p$5;$pos$2 = $pos$0315;$s$6 = $$s$0;
         break L8;
         break;
        }
        default: {
         ___shlim($f,0);
         while(1) {
          $36 = load4($rpos144);
          $37 = load4($shend145);
          $cmp146 = ($36>>>0)<($37>>>0);
          if ($cmp146) {
           $incdec$ptr150 = ((($36)) + 1|0);
           store4($rpos144,$incdec$ptr150);
           $38 = load1($36);
           $conv151 = $38&255;
           $cond155 = $conv151;
          } else {
           $call153 = (___shgetc($f)|0);
           $cond155 = $call153;
          }
          $call156 = (_isspace($cond155)|0);
          $tobool157 = ($call156|0)==(0);
          if ($tobool157) {
           break;
          }
         }
         $39 = load4($shend145);
         $tobool161 = ($39|0)==(0|0);
         if ($tobool161) {
          $$pre385 = load4($rpos144);
          $44 = $$pre385;
         } else {
          $40 = load4($rpos144);
          $incdec$ptr164 = ((($40)) + -1|0);
          store4($rpos144,$incdec$ptr164);
          $41 = $incdec$ptr164;
          $44 = $41;
         }
         $42 = load4($shcnt167);
         $43 = load4($rend169);
         $sub$ptr$sub172 = (($42) + ($pos$0315))|0;
         $add173 = (($sub$ptr$sub172) + ($44))|0;
         $add174 = (($add173) - ($43))|0;
         $pos$1 = $add174;$width$1 = $width$0$lcssa;
        }
        }
        ___shlim($f,$width$1);
        $45 = load4($rpos144);
        $46 = load4($shend145);
        $cmp178 = ($45>>>0)<($46>>>0);
        if ($cmp178) {
         $incdec$ptr182 = ((($45)) + 1|0);
         store4($rpos144,$incdec$ptr182);
         $47 = $46;
        } else {
         $call185 = (___shgetc($f)|0);
         $cmp188 = ($call185|0)<(0);
         if ($cmp188) {
          $96 = $$;$narrow350 = $narrow;$s$7 = $$s$0;
          label = 137;
          break L6;
         }
         $$pre386 = load4($shend145);
         $47 = $$pre386;
        }
        $tobool193 = ($47|0)==(0|0);
        if (!($tobool193)) {
         $48 = load4($rpos144);
         $incdec$ptr196 = ((($48)) + -1|0);
         store4($rpos144,$incdec$ptr196);
        }
        L55: do {
         switch ($trunc<<24>>24) {
         case 91: case 99: case 115:  {
          $cmp200 = ($or$conv130|0)==(99);
          $49 = $or$conv130 | 16;
          $50 = ($49|0)==(115);
          L57: do {
           if ($50) {
            $cmp203 = ($or$conv130|0)==(115);
            _memset(($2|0),-1,256)|0;
            store1($scanset,0);
            if ($cmp203) {
             store1($arrayidx215,0);
             ; store4($arrayidx210,0,1); store1($arrayidx210+4|0,0,1);
             $p$9 = $p$5;
            } else {
             $p$9 = $p$5;
            }
           } else {
            $incdec$ptr218 = ((($p$5)) + 1|0);
            $51 = load1($incdec$ptr218);
            $cmp220 = ($51<<24>>24)==(94);
            $incdec$ptr223 = ((($p$5)) + 2|0);
            $invert$0 = $cmp220&1;
            $p$6 = $cmp220 ? $incdec$ptr223 : $incdec$ptr218;
            $52 = $cmp220&1;
            _memset(($3|0),($52|0),256)|0;
            store1($scanset,0);
            $53 = load1($p$6);
            switch ($53<<24>>24) {
            case 45:  {
             $arrayidx244$sink = $arrayidx235;
             label = 64;
             break;
            }
            case 93:  {
             $arrayidx244$sink = $arrayidx244;
             label = 64;
             break;
            }
            default: {
             $$pre391 = $invert$0 ^ 1;
             $$pre392 = $$pre391&255;
             $conv285$pre$phiZ2D = $$pre392;$p$7$ph = $p$6;
            }
            }
            if ((label|0) == 64) {
             label = 0;
             $incdec$ptr241 = ((($p$6)) + 1|0);
             $sub242 = $invert$0 ^ 1;
             $conv243 = $sub242&255;
             store1($arrayidx244$sink,$conv243);
             $conv285$pre$phiZ2D = $conv243;$p$7$ph = $incdec$ptr241;
            }
            $p$7 = $p$7$ph;
            while(1) {
             $54 = load1($p$7);
             L69: do {
              switch ($54<<24>>24) {
              case 0:  {
               $96 = $$;$narrow350 = $narrow;$s$7 = $$s$0;
               label = 137;
               break L6;
               break;
              }
              case 93:  {
               $p$9 = $p$7;
               break L57;
               break;
              }
              case 45:  {
               $arrayidx259 = ((($p$7)) + 1|0);
               $55 = load1($arrayidx259);
               switch ($55<<24>>24) {
               case 93: case 0:  {
                $58 = 45;$p$8 = $p$7;
                break L69;
                break;
               }
               default: {
               }
               }
               $arrayidx269 = ((($p$7)) + -1|0);
               $56 = load1($arrayidx269);
               $cmp273307 = ($56&255)<($55&255);
               if ($cmp273307) {
                $conv270 = $56&255;
                $c$0308 = $conv270;
                while(1) {
                 $add278 = (($c$0308) + 1)|0;
                 $arrayidx279 = (($scanset) + ($add278)|0);
                 store1($arrayidx279,$conv285$pre$phiZ2D);
                 $57 = load1($arrayidx259);
                 $conv272 = $57&255;
                 $cmp273 = ($add278|0)<($conv272|0);
                 if ($cmp273) {
                  $c$0308 = $add278;
                 } else {
                  $58 = $57;$p$8 = $arrayidx259;
                  break;
                 }
                }
               } else {
                $58 = $55;$p$8 = $arrayidx259;
               }
               break;
              }
              default: {
               $58 = $54;$p$8 = $p$7;
              }
              }
             } while(0);
             $conv286 = $58&255;
             $add287 = (($conv286) + 1)|0;
             $arrayidx288 = (($scanset) + ($add287)|0);
             store1($arrayidx288,$conv285$pre$phiZ2D);
             $incdec$ptr290 = ((($p$8)) + 1|0);
             $p$7 = $incdec$ptr290;
            }
           }
          } while(0);
          $add296 = (($width$1) + 1)|0;
          $cond299 = $cmp200 ? $add296 : 31;
          $cmp300 = ($$size$0|0)==(1);
          L77: do {
           if ($cmp300) {
            if ($narrow) {
             $mul305 = $cond299 << 2;
             $call306 = (_malloc($mul305)|0);
             $tobool307 = ($call306|0)==(0|0);
             if ($tobool307) {
              $96 = 0;$narrow350 = 1;$s$7 = 0;
              label = 137;
              break L6;
             } else {
              $98 = $call306;
             }
            } else {
             $98 = $dest$0;
            }
            store4($st,0);
            store4($$compoundliteral$sroa$2$0$$sroa_idx8,0);
            $$ph = $98;$i$0$ph = 0;$k$0$ph = $cond299;
            L82: while(1) {
             $tobool335 = ($$ph|0)==(0|0);
             $i$0$ph236 = $i$0$ph;
             while(1) {
              L86: while(1) {
               $59 = load4($rpos144);
               $60 = load4($shend145);
               $cmp315 = ($59>>>0)<($60>>>0);
               if ($cmp315) {
                $incdec$ptr319 = ((($59)) + 1|0);
                store4($rpos144,$incdec$ptr319);
                $61 = load1($59);
                $conv320 = $61&255;
                $cond324 = $conv320;
               } else {
                $call322 = (___shgetc($f)|0);
                $cond324 = $call322;
               }
               $add325 = (($cond324) + 1)|0;
               $arrayidx326 = (($scanset) + ($add325)|0);
               $62 = load1($arrayidx326);
               $tobool327 = ($62<<24>>24)==(0);
               if ($tobool327) {
                break L82;
               }
               $conv330 = $cond324&255;
               store1($$compoundliteral329,$conv330);
               $call331 = (_mbrtowc($wc,$$compoundliteral329,1,$st)|0);
               switch ($call331|0) {
               case -1:  {
                $96 = $$ph;$narrow350 = $narrow;$s$7 = 0;
                label = 137;
                break L6;
                break;
               }
               case -2:  {
                break;
               }
               default: {
                break L86;
               }
               }
              }
              if ($tobool335) {
               $i$1 = $i$0$ph236;
              } else {
               $arrayidx338 = (($$ph) + ($i$0$ph236<<2)|0);
               $inc337 = (($i$0$ph236) + 1)|0;
               $63 = load4($wc);
               store4($arrayidx338,$63);
               $i$1 = $inc337;
              }
              $cmp342 = ($i$1|0)==($k$0$ph|0);
              $or$cond = $narrow & $cmp342;
              if ($or$cond) {
               break;
              } else {
               $i$0$ph236 = $i$1;
              }
             }
             $factor232 = $k$0$ph << 1;
             $add346 = $factor232 | 1;
             $mul347 = $add346 << 2;
             $call348 = (_realloc($$ph,$mul347)|0);
             $tobool349 = ($call348|0)==(0|0);
             if ($tobool349) {
              $96 = $$ph;$narrow350 = 1;$s$7 = 0;
              label = 137;
              break L6;
             } else {
              $i$0$ph$phi = $k$0$ph;$$ph = $call348;$k$0$ph = $add346;$i$0$ph = $i$0$ph$phi;
             }
            }
            $call354 = (_mbsinit($st)|0);
            $tobool355 = ($call354|0)==(0);
            if ($tobool355) {
             $96 = $$ph;$narrow350 = $narrow;$s$7 = 0;
             label = 137;
             break L6;
            } else {
             $99 = $$ph;$i$4 = $i$0$ph236;$s$4 = 0;$wcs$5 = $$ph;
            }
           } else {
            if ($narrow) {
             $call361 = (_malloc($cond299)|0);
             $tobool362 = ($call361|0)==(0|0);
             if ($tobool362) {
              $96 = 0;$narrow350 = 1;$s$7 = 0;
              label = 137;
              break L6;
             } else {
              $i$2$ph = 0;$k$1$ph = $cond299;$s$2$ph = $call361;
             }
             while(1) {
              $i$2 = $i$2$ph;
              while(1) {
               $64 = load4($rpos144);
               $65 = load4($shend145);
               $cmp368 = ($64>>>0)<($65>>>0);
               if ($cmp368) {
                $incdec$ptr372 = ((($64)) + 1|0);
                store4($rpos144,$incdec$ptr372);
                $66 = load1($64);
                $conv373 = $66&255;
                $cond377 = $conv373;
               } else {
                $call375 = (___shgetc($f)|0);
                $cond377 = $call375;
               }
               $add378 = (($cond377) + 1)|0;
               $arrayidx379 = (($scanset) + ($add378)|0);
               $67 = load1($arrayidx379);
               $tobool380 = ($67<<24>>24)==(0);
               if ($tobool380) {
                $99 = 0;$i$4 = $i$2;$s$4 = $s$2$ph;$wcs$5 = 0;
                break L77;
               }
               $conv382 = $cond377&255;
               $inc383 = (($i$2) + 1)|0;
               $arrayidx384 = (($s$2$ph) + ($i$2)|0);
               store1($arrayidx384,$conv382);
               $cmp385 = ($inc383|0)==($k$1$ph|0);
               if ($cmp385) {
                break;
               } else {
                $i$2 = $inc383;
               }
              }
              $factor = $k$1$ph << 1;
              $add389 = $factor | 1;
              $call392 = (_realloc($s$2$ph,$add389)|0);
              $tobool393 = ($call392|0)==(0|0);
              if ($tobool393) {
               $96 = 0;$narrow350 = 1;$s$7 = $s$2$ph;
               label = 137;
               break L6;
              } else {
               $i$2$ph$phi = $k$1$ph;$k$1$ph = $add389;$s$2$ph = $call392;$i$2$ph = $i$2$ph$phi;
              }
             }
            }
            $tobool402 = ($dest$0|0)==(0|0);
            if ($tobool402) {
             $73 = $47;
             while(1) {
              $72 = load4($rpos144);
              $cmp429 = ($72>>>0)<($73>>>0);
              if ($cmp429) {
               $incdec$ptr433 = ((($72)) + 1|0);
               store4($rpos144,$incdec$ptr433);
               $74 = load1($72);
               $conv434 = $74&255;
               $cond438 = $conv434;
              } else {
               $call436 = (___shgetc($f)|0);
               $cond438 = $call436;
              }
              $add439 = (($cond438) + 1)|0;
              $arrayidx440 = (($scanset) + ($add439)|0);
              $75 = load1($arrayidx440);
              $tobool441 = ($75<<24>>24)==(0);
              if ($tobool441) {
               $99 = 0;$i$4 = 0;$s$4 = 0;$wcs$5 = 0;
               break L77;
              }
              $$pre389 = load4($shend145);
              $73 = $$pre389;
             }
            } else {
             $69 = $47;$i$3 = 0;
             while(1) {
              $68 = load4($rpos144);
              $cmp407 = ($68>>>0)<($69>>>0);
              if ($cmp407) {
               $incdec$ptr411 = ((($68)) + 1|0);
               store4($rpos144,$incdec$ptr411);
               $70 = load1($68);
               $conv412 = $70&255;
               $cond416 = $conv412;
              } else {
               $call414 = (___shgetc($f)|0);
               $cond416 = $call414;
              }
              $add417 = (($cond416) + 1)|0;
              $arrayidx418 = (($scanset) + ($add417)|0);
              $71 = load1($arrayidx418);
              $tobool419 = ($71<<24>>24)==(0);
              if ($tobool419) {
               $99 = 0;$i$4 = $i$3;$s$4 = $dest$0;$wcs$5 = 0;
               break L77;
              }
              $conv421 = $cond416&255;
              $inc422 = (($i$3) + 1)|0;
              $arrayidx423 = (($dest$0) + ($i$3)|0);
              store1($arrayidx423,$conv421);
              $$pre388 = load4($shend145);
              $69 = $$pre388;$i$3 = $inc422;
             }
            }
           }
          } while(0);
          $76 = load4($shend145);
          $tobool448 = ($76|0)==(0|0);
          if ($tobool448) {
           $$pre390 = load4($rpos144);
           $81 = $$pre390;
          } else {
           $77 = load4($rpos144);
           $incdec$ptr451 = ((($77)) + -1|0);
           store4($rpos144,$incdec$ptr451);
           $78 = $incdec$ptr451;
           $81 = $78;
          }
          $79 = load4($shcnt167);
          $80 = load4($rend169);
          $sub$ptr$sub459 = (($81) - ($80))|0;
          $add460 = (($sub$ptr$sub459) + ($79))|0;
          $tobool461 = ($add460|0)==(0);
          if ($tobool461) {
           $$ph245 = $99;$s$9$ph = $s$4;
           label = 139;
           break L6;
          }
          $cmp200$not = $cmp200 ^ 1;
          $cmp474 = ($add460|0)==($width$1|0);
          $or$cond223 = $cmp474 | $cmp200$not;
          if (!($or$cond223)) {
           $$ph245 = $99;$s$9$ph = $s$4;
           label = 139;
           break L6;
          }
          do {
           if ($narrow) {
            if ($cmp300) {
             store4($dest$0,$wcs$5);
             break;
            } else {
             store4($dest$0,$s$4);
             break;
            }
           }
          } while(0);
          if ($cmp200) {
           $97 = $99;$p$10 = $p$9;$s$5 = $s$4;
          } else {
           $tobool489 = ($wcs$5|0)==(0|0);
           if (!($tobool489)) {
            $arrayidx491 = (($wcs$5) + ($i$4<<2)|0);
            store4($arrayidx491,0);
           }
           $tobool493 = ($s$4|0)==(0|0);
           if ($tobool493) {
            $97 = $99;$p$10 = $p$9;$s$5 = 0;
            break L55;
           }
           $arrayidx495 = (($s$4) + ($i$4)|0);
           store1($arrayidx495,0);
           $97 = $99;$p$10 = $p$9;$s$5 = $s$4;
          }
          break;
         }
         case 120: case 88: case 112:  {
          $base$0 = 16;
          label = 125;
          break;
         }
         case 111:  {
          $base$0 = 8;
          label = 125;
          break;
         }
         case 117: case 100:  {
          $base$0 = 10;
          label = 125;
          break;
         }
         case 105:  {
          $base$0 = 0;
          label = 125;
          break;
         }
         case 71: case 103: case 70: case 102: case 69: case 101: case 65: case 97:  {
          $call522 = (+___floatscan($f,$$size$0,0));
          $86 = load4($shcnt167);
          $87 = load4($rpos144);
          $88 = load4($rend169);
          $sub$ptr$sub528221 = (($88) - ($87))|0;
          $tobool530 = ($86|0)==($sub$ptr$sub528221|0);
          if ($tobool530) {
           $$ph245 = $$;$s$9$ph = $$s$0;
           label = 139;
           break L6;
          }
          $tobool533 = ($dest$0|0)==(0|0);
          if ($tobool533) {
           $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
          } else {
           switch ($$size$0|0) {
           case 0:  {
            $conv536 = Math_fround($call522);
            storef($dest$0,$conv536);
            $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
            break L55;
            break;
           }
           case 1:  {
            stored($dest$0,$call522);
            $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
            break L55;
            break;
           }
           case 2:  {
            stored($dest$0,$call522);
            $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
            break L55;
            break;
           }
           default: {
            $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
            break L55;
           }
           }
          }
          break;
         }
         default: {
          $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
         }
         }
        } while(0);
        do {
         if ((label|0) == 125) {
          label = 0;
          $call502 = (i64(___intscan($f,$base$0,0,i64_const(4294967295,4294967295))));
          $82 = load4($shcnt167);
          $83 = load4($rpos144);
          $84 = load4($rend169);
          $sub$ptr$sub508222 = (($84) - ($83))|0;
          $tobool510 = ($82|0)==($sub$ptr$sub508222|0);
          if ($tobool510) {
           $$ph245 = $$;$s$9$ph = $$s$0;
           label = 139;
           break L6;
          }
          $cmp513 = ($or$conv130|0)==(112);
          $or$cond1 = $tobool103 & $cmp513;
          if ($or$cond1) {
           $conv518 = i64_trunc($call502);
           $85 = $conv518;
           store4($dest$0,$85);
           $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
           break;
          } else {
           _store_int($dest$0,$$size$0,$call502);
           $97 = $$;$p$10 = $p$5;$s$5 = $$s$0;
           break;
          }
         }
        } while(0);
        $89 = load4($shcnt167);
        $90 = load4($rpos144);
        $91 = load4($rend169);
        $sub$ptr$sub547 = (($89) + ($pos$1))|0;
        $add548 = (($sub$ptr$sub547) + ($90))|0;
        $add549 = (($add548) - ($91))|0;
        $inc552 = $tobool103&1;
        $matches$0$inc552 = (($inc552) + ($matches$0312))|0;
        $94 = $97;$matches$1 = $matches$0$inc552;$p$11 = $p$10;$pos$2 = $add549;$s$6 = $s$5;
        break L8;
       }
      } while(0);
      $conv40 = $cmp31&1;
      $add$ptr = (($p$0316) + ($conv40)|0);
      ___shlim($f,0);
      $16 = load4($rpos144);
      $17 = load4($shend145);
      $cmp43 = ($16>>>0)<($17>>>0);
      if ($cmp43) {
       $incdec$ptr47 = ((($16)) + 1|0);
       store4($rpos144,$incdec$ptr47);
       $18 = load1($16);
       $conv48 = $18&255;
       $cond52 = $conv48;
      } else {
       $call50 = (___shgetc($f)|0);
       $cond52 = $call50;
      }
      $19 = load1($add$ptr);
      $conv53 = $19&255;
      $cmp54 = ($cond52|0)==($conv53|0);
      if (!($cmp54)) {
       label = 22;
       break L6;
      }
      $inc = (($pos$0315) + 1)|0;
      $94 = $30;$matches$1 = $matches$0312;$p$11 = $add$ptr;$pos$2 = $inc;$s$6 = $s$0310;
     } else {
      $p$1 = $p$0316;
      while(1) {
       $arrayidx = ((($p$1)) + 1|0);
       $5 = load1($arrayidx);
       $conv3 = $5&255;
       $call4 = (_isspace($conv3)|0);
       $tobool5 = ($call4|0)==(0);
       if ($tobool5) {
        break;
       } else {
        $p$1 = $arrayidx;
       }
      }
      ___shlim($f,0);
      while(1) {
       $6 = load4($rpos144);
       $7 = load4($shend145);
       $cmp7 = ($6>>>0)<($7>>>0);
       if ($cmp7) {
        $incdec$ptr11 = ((($6)) + 1|0);
        store4($rpos144,$incdec$ptr11);
        $8 = load1($6);
        $conv12 = $8&255;
        $cond16 = $conv12;
       } else {
        $call14 = (___shgetc($f)|0);
        $cond16 = $call14;
       }
       $call17 = (_isspace($cond16)|0);
       $tobool18 = ($call17|0)==(0);
       if ($tobool18) {
        break;
       }
      }
      $9 = load4($shend145);
      $tobool22 = ($9|0)==(0|0);
      if ($tobool22) {
       $$pre = load4($rpos144);
       $14 = $$pre;
      } else {
       $10 = load4($rpos144);
       $incdec$ptr25 = ((($10)) + -1|0);
       store4($rpos144,$incdec$ptr25);
       $11 = $incdec$ptr25;
       $14 = $11;
      }
      $12 = load4($shcnt167);
      $13 = load4($rend169);
      $sub$ptr$sub = (($12) + ($pos$0315))|0;
      $add = (($sub$ptr$sub) + ($14))|0;
      $add29 = (($add) - ($13))|0;
      $94 = $30;$matches$1 = $matches$0312;$p$11 = $p$1;$pos$2 = $add29;$s$6 = $s$0310;
     }
    } while(0);
    $incdec$ptr555 = ((($p$11)) + 1|0);
    $92 = load1($incdec$ptr555);
    $tobool = ($92<<24>>24)==(0);
    if ($tobool) {
     $matches$3 = $matches$1;
     break L4;
    } else {
     $30 = $94;$4 = $92;$matches$0312 = $matches$1;$p$0316 = $incdec$ptr555;$pos$0315 = $pos$2;$s$0310 = $s$6;
    }
   }
   if ((label|0) == 22) {
    $20 = load4($shend145);
    $tobool58 = ($20|0)==(0|0);
    if (!($tobool58)) {
     $21 = load4($rpos144);
     $incdec$ptr61 = ((($21)) + -1|0);
     store4($rpos144,$incdec$ptr61);
    }
    $cmp64 = ($cond52|0)>(-1);
    $tobool558 = ($matches$0312|0)!=(0);
    $or$cond2 = $tobool558 | $cmp64;
    if ($or$cond2) {
     $matches$3 = $matches$0312;
     break;
    } else {
     $95 = $30;$alloc$1 = 0;$s$8 = $s$0310;
     label = 138;
    }
   }
   else if ((label|0) == 137) {
    $lnot$ext$$le326 = $narrow350&1;
    $tobool558$old = ($matches$0312|0)==(0);
    if ($tobool558$old) {
     $95 = $96;$alloc$1 = $lnot$ext$$le326;$s$8 = $s$7;
     label = 138;
    } else {
     $93 = $96;$alloc$2 = $lnot$ext$$le326;$matches$2 = $matches$0312;$s$9 = $s$7;
    }
   }
   else if ((label|0) == 139) {
    $lnot$ext$$le324 = $narrow&1;
    $93 = $$ph245;$alloc$2 = $lnot$ext$$le324;$matches$2 = $matches$0312;$s$9 = $s$9$ph;
   }
   if ((label|0) == 138) {
    $93 = $95;$alloc$2 = $alloc$1;$matches$2 = -1;$s$9 = $s$8;
   }
   $tobool561 = ($alloc$2|0)==(0);
   if ($tobool561) {
    $matches$3 = $matches$2;
   } else {
    _free($s$9);
    _free($93);
    $matches$3 = $matches$2;
   }
  }
 } while(0);
 $tobool565 = ($cond|0)==(0);
 if (!($tobool565)) {
  ___unlockfile($f);
 }
 STACKTOP = sp;return ($matches$3|0);
}
function _arg_n($ap,$n) {
 $ap = $ap|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $ap2 = 0, $arglist_current = 0, $arglist_next = 0, $cmp = 0, $dec = 0, $expanded = 0, $expanded1 = 0, $expanded2 = 0, $expanded3 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $i$0 = 0, $vacopy_currentptr = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap2 = sp;
 $vacopy_currentptr = load4($ap);
 store4($ap2,$vacopy_currentptr);
 $i$0 = $n;
 while(1) {
  $cmp = ($i$0>>>0)>(1);
  $arglist_current = load4($ap2);
  $0 = $arglist_current;
  $expanded2 = ((0) + 4|0);
  $expanded1 = $expanded2;
  $expanded = (($expanded1) - 1)|0;
  $1 = (($0) + ($expanded))|0;
  $expanded6 = ((0) + 4|0);
  $expanded5 = $expanded6;
  $expanded4 = (($expanded5) - 1)|0;
  $expanded3 = $expanded4 ^ -1;
  $2 = $1 & $expanded3;
  $3 = $2;
  $4 = load4($3);
  $arglist_next = ((($3)) + 4|0);
  store4($ap2,$arglist_next);
  $dec = (($i$0) + -1)|0;
  if ($cmp) {
   $i$0 = $dec;
  } else {
   break;
  }
 }
 STACKTOP = sp;return ($4|0);
}
function _store_int($dest,$size,$i) {
 $dest = $dest|0;
 $size = $size|0;
 $i = i64($i);
 var $conv = 0, $conv2 = 0, $conv4 = 0, $conv6 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($dest|0)==(0|0);
 L1: do {
  if (!($tobool)) {
   switch ($size|0) {
   case -2:  {
    $conv = i64_trunc($i)&255;
    store1($dest,$conv);
    break L1;
    break;
   }
   case -1:  {
    $conv2 = i64_trunc($i)&65535;
    store2($dest,$conv2);
    break L1;
    break;
   }
   case 0:  {
    $conv4 = i64_trunc($i);
    store4($dest,$conv4);
    break L1;
    break;
   }
   case 1:  {
    $conv6 = i64_trunc($i);
    store4($dest,$conv6);
    break L1;
    break;
   }
   case 3:  {
    store8($dest,$i);
    break L1;
    break;
   }
   default: {
    break L1;
   }
   }
  }
 } while(0);
 return;
}
function _mbrtowc($wc,$src,$n,$st) {
 $wc = $wc|0;
 $src = $src|0;
 $n = $n|0;
 $st = $st|0;
 var $$st = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $and = 0, $arrayidx38 = 0, $c$036 = 0, $c$1 = 0, $c$2 = 0, $call = 0, $call71 = 0, $cmp = 0;
 var $cmp32 = 0, $cmp65 = 0, $conv = 0, $conv29 = 0, $conv31 = 0, $conv42 = 0, $conv52 = 0, $dec = 0, $dec55 = 0, $dummy = 0, $dummy$wc = 0, $incdec$ptr = 0, $incdec$ptr51 = 0, $lnot$ext = 0, $locale = 0, $n$addr$035 = 0, $n$addr$1 = 0, $not$tobool21 = 0, $or = 0, $or54 = 0;
 var $retval$0 = 0, $s$037 = 0, $s$1 = 0, $shl = 0, $shr32 = 0, $shr46 = 0, $sub = 0, $sub43 = 0, $sub53 = 0, $sub59 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool13 = 0, $tobool18 = 0, $tobool3 = 0, $tobool40 = 0, $tobool48 = 0, $tobool57 = 0, $tobool6 = 0;
 var $tobool61 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $dummy = sp;
 $tobool = ($st|0)==(0|0);
 $$st = $tobool ? 7160 : $st;
 $0 = load4($$st);
 $tobool1 = ($src|0)==(0|0);
 L1: do {
  if ($tobool1) {
   $tobool3 = ($0|0)==(0);
   if ($tobool3) {
    $retval$0 = 0;
   } else {
    label = 17;
   }
  } else {
   $tobool6 = ($wc|0)==(0|0);
   $dummy$wc = $tobool6 ? $dummy : $wc;
   $tobool10 = ($n|0)==(0);
   if ($tobool10) {
    $retval$0 = -2;
   } else {
    $tobool13 = ($0|0)==(0);
    if ($tobool13) {
     $1 = load1($src);
     $cmp = ($1<<24>>24)>(-1);
     if ($cmp) {
      $conv = $1&255;
      store4($dummy$wc,$conv);
      $tobool18 = ($1<<24>>24)!=(0);
      $lnot$ext = $tobool18&1;
      $retval$0 = $lnot$ext;
      break;
     }
     $call = (___pthread_self_753()|0);
     $locale = ((($call)) + 188|0);
     $2 = load4($locale);
     $3 = load4($2);
     $not$tobool21 = ($3|0)==(0|0);
     $4 = load1($src);
     if ($not$tobool21) {
      $conv29 = $4 << 24 >> 24;
      $and = $conv29 & 57343;
      store4($dummy$wc,$and);
      $retval$0 = 1;
      break;
     }
     $conv31 = $4&255;
     $sub = (($conv31) + -194)|0;
     $cmp32 = ($sub>>>0)>(50);
     if ($cmp32) {
      label = 17;
      break;
     }
     $incdec$ptr = ((($src)) + 1|0);
     $arrayidx38 = (2004 + ($sub<<2)|0);
     $5 = load4($arrayidx38);
     $dec = (($n) + -1)|0;
     $tobool40 = ($dec|0)==(0);
     if ($tobool40) {
      $c$2 = $5;
     } else {
      $c$036 = $5;$n$addr$035 = $dec;$s$037 = $incdec$ptr;
      label = 11;
     }
    } else {
     $c$036 = $0;$n$addr$035 = $n;$s$037 = $src;
     label = 11;
    }
    L14: do {
     if ((label|0) == 11) {
      $6 = load1($s$037);
      $conv42 = $6&255;
      $shr32 = $conv42 >>> 3;
      $sub43 = (($shr32) + -16)|0;
      $shr46 = $c$036 >> 26;
      $add = (($shr32) + ($shr46))|0;
      $or = $sub43 | $add;
      $tobool48 = ($or>>>0)>(7);
      if ($tobool48) {
       label = 17;
       break L1;
      } else {
       $7 = $6;$c$1 = $c$036;$n$addr$1 = $n$addr$035;$s$1 = $s$037;
      }
      while(1) {
       $shl = $c$1 << 6;
       $incdec$ptr51 = ((($s$1)) + 1|0);
       $conv52 = $7&255;
       $sub53 = (($conv52) + -128)|0;
       $or54 = $sub53 | $shl;
       $dec55 = (($n$addr$1) + -1)|0;
       $tobool57 = ($or54|0)<(0);
       if (!($tobool57)) {
        break;
       }
       $tobool61 = ($dec55|0)==(0);
       if ($tobool61) {
        $c$2 = $or54;
        break L14;
       }
       $8 = load1($incdec$ptr51);
       $9 = $8 & -64;
       $cmp65 = ($9<<24>>24)==(-128);
       if ($cmp65) {
        $7 = $8;$c$1 = $or54;$n$addr$1 = $dec55;$s$1 = $incdec$ptr51;
       } else {
        label = 17;
        break L1;
       }
      }
      store4($$st,0);
      store4($dummy$wc,$or54);
      $sub59 = (($n) - ($dec55))|0;
      $retval$0 = $sub59;
      break L1;
     }
    } while(0);
    store4($$st,$c$2);
    $retval$0 = -2;
   }
  }
 } while(0);
 if ((label|0) == 17) {
  store4($$st,0);
  $call71 = (___errno_location()|0);
  store4($call71,84);
  $retval$0 = -1;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _mbsinit($st) {
 $st = $st|0;
 var $0 = 0, $1 = 0, $lnot = 0, $lor$ext = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($st|0)==(0|0);
 if ($tobool) {
  $1 = 1;
 } else {
  $0 = load4($st);
  $lnot = ($0|0)==(0);
  $1 = $lnot;
 }
 $lor$ext = $1&1;
 return ($lor$ext|0);
}
function ___pthread_self_753() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_pthread_self()|0);
 return ($call|0);
}
function _fopen($filename,$mode) {
 $filename = $filename|0;
 $mode = $mode|0;
 var $0 = 0, $1 = 0, $and = 0, $call1 = 0, $call12 = 0, $call2 = 0, $call3 = 0, $call4 = 0, $cmp = 0, $conv = 0, $memchr = 0, $or = 0, $retval$0 = 0, $tobool = 0, $tobool13 = 0, $tobool8 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_buffer8 = 0, $vararg_ptr1 = 0;
 var $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer8 = sp + 32|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $memchr = (_memchr(6403,$conv,4)|0);
 $tobool = ($memchr|0)==(0|0);
 if ($tobool) {
  $call1 = (___errno_location()|0);
  store4($call1,22);
  $retval$0 = 0;
 } else {
  $call2 = (___fmodeflags($mode)|0);
  $1 = $filename;
  $or = $call2 | 32768;
  store4($vararg_buffer,$1);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,$or);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,438);
  $call3 = (___syscall5(5,($vararg_buffer|0))|0);
  $call4 = (___syscall_ret($call3)|0);
  $cmp = ($call4|0)<(0);
  if ($cmp) {
   $retval$0 = 0;
  } else {
   $and = $call2 & 524288;
   $tobool8 = ($and|0)==(0);
   if (!($tobool8)) {
    store4($vararg_buffer3,$call4);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,2);
    $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
    store4($vararg_ptr7,1);
    (___syscall221(221,($vararg_buffer3|0))|0);
   }
   $call12 = (___fdopen($call4,$mode)|0);
   $tobool13 = ($call12|0)==(0|0);
   if ($tobool13) {
    store4($vararg_buffer8,$call4);
    (___syscall6(6,($vararg_buffer8|0))|0);
    $retval$0 = 0;
   } else {
    $retval$0 = $call12;
   }
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___fmodeflags($mode) {
 $mode = $mode|0;
 var $$ = 0, $0 = 0, $call = 0, $call5 = 0, $call9 = 0, $cmp15 = 0, $cmp21 = 0, $cmp27 = 0, $flags$0 = 0, $flags$0$or = 0, $flags$2 = 0, $flags$2$or18 = 0, $flags$4 = 0, $not$cmp = 0, $or = 0, $or12 = 0, $or18 = 0, $or24 = 0, $or30 = 0, $or30$flags$4 = 0;
 var $tobool = 0, $tobool10 = 0, $tobool6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strchr($mode,43)|0);
 $tobool = ($call|0)==(0|0);
 $0 = load1($mode);
 $not$cmp = ($0<<24>>24)!=(114);
 $$ = $not$cmp&1;
 $flags$0 = $tobool ? $$ : 2;
 $call5 = (_strchr($mode,120)|0);
 $tobool6 = ($call5|0)==(0|0);
 $or = $flags$0 | 128;
 $flags$0$or = $tobool6 ? $flags$0 : $or;
 $call9 = (_strchr($mode,101)|0);
 $tobool10 = ($call9|0)==(0|0);
 $or12 = $flags$0$or | 524288;
 $flags$2 = $tobool10 ? $flags$0$or : $or12;
 $cmp15 = ($0<<24>>24)==(114);
 $or18 = $flags$2 | 64;
 $flags$2$or18 = $cmp15 ? $flags$2 : $or18;
 $cmp21 = ($0<<24>>24)==(119);
 $or24 = $flags$2$or18 | 512;
 $flags$4 = $cmp21 ? $or24 : $flags$2$or18;
 $cmp27 = ($0<<24>>24)==(97);
 $or30 = $flags$4 | 1024;
 $or30$flags$4 = $cmp27 ? $or30 : $flags$4;
 return ($or30$flags$4|0);
}
function ___fdopen($fd,$mode) {
 $fd = $fd|0;
 $mode = $mode|0;
 var $$pre = 0, $$pre27 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add$ptr31 = 0, $and = 0, $and33 = 0, $buf = 0, $buf_size = 0, $call1 = 0, $call12 = 0, $call2 = 0, $call22 = 0, $call35 = 0, $call43 = 0;
 var $call6 = 0, $close = 0, $cmp = 0, $cmp18 = 0, $cond = 0, $conv = 0, $fd30 = 0, $lock = 0, $memchr = 0, $or = 0, $or28 = 0, $read = 0, $retval$0 = 0, $seek = 0, $tobool = 0, $tobool13 = 0, $tobool23 = 0, $tobool3 = 0, $tobool34 = 0, $tobool36 = 0;
 var $tobool40 = 0, $tobool7 = 0, $vararg_buffer = 0, $vararg_buffer12 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr10 = 0, $vararg_ptr11 = 0, $vararg_ptr15 = 0, $vararg_ptr16 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $write = 0, $wsz = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $vararg_buffer12 = sp + 40|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $wsz = sp + 56|0;
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $memchr = (_memchr(6403,$conv,4)|0);
 $tobool = ($memchr|0)==(0|0);
 if ($tobool) {
  $call1 = (___errno_location()|0);
  store4($call1,22);
  $retval$0 = 0;
 } else {
  $call2 = (_malloc(1156)|0);
  $tobool3 = ($call2|0)==(0|0);
  if ($tobool3) {
   $retval$0 = 0;
  } else {
   ; store8($call2,i64_const(0,0),4); store8($call2+8|0,i64_const(0,0),4); store8($call2+16|0,i64_const(0,0),4); store8($call2+24|0,i64_const(0,0),4); store8($call2+32|0,i64_const(0,0),4); store8($call2+40|0,i64_const(0,0),4); store8($call2+48|0,i64_const(0,0),4); store8($call2+56|0,i64_const(0,0),4); store8($call2+64|0,i64_const(0,0),4); store8($call2+72|0,i64_const(0,0),4); store8($call2+80|0,i64_const(0,0),4); store8($call2+88|0,i64_const(0,0),4); store8($call2+96|0,i64_const(0,0),4); store8($call2+104|0,i64_const(0,0),4); store8($call2+112|0,i64_const(0,0),4); store4($call2+120|0,0,4);
   $call6 = (_strchr($mode,43)|0);
   $tobool7 = ($call6|0)==(0|0);
   if ($tobool7) {
    $cmp = ($0<<24>>24)==(114);
    $cond = $cmp ? 8 : 4;
    store4($call2,$cond);
   }
   $call12 = (_strchr($mode,101)|0);
   $tobool13 = ($call12|0)==(0|0);
   if ($tobool13) {
    $1 = $0;
   } else {
    store4($vararg_buffer,$fd);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,2);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,1);
    (___syscall221(221,($vararg_buffer|0))|0);
    $$pre = load1($mode);
    $1 = $$pre;
   }
   $cmp18 = ($1<<24>>24)==(97);
   if ($cmp18) {
    store4($vararg_buffer3,$fd);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,3);
    $call22 = (___syscall221(221,($vararg_buffer3|0))|0);
    $and = $call22 & 1024;
    $tobool23 = ($and|0)==(0);
    if ($tobool23) {
     $or = $call22 | 1024;
     store4($vararg_buffer7,$fd);
     $vararg_ptr10 = ((($vararg_buffer7)) + 4|0);
     store4($vararg_ptr10,4);
     $vararg_ptr11 = ((($vararg_buffer7)) + 8|0);
     store4($vararg_ptr11,$or);
     (___syscall221(221,($vararg_buffer7|0))|0);
    }
    $2 = load4($call2);
    $or28 = $2 | 128;
    store4($call2,$or28);
    $4 = $or28;
   } else {
    $$pre27 = load4($call2);
    $4 = $$pre27;
   }
   $fd30 = ((($call2)) + 60|0);
   store4($fd30,$fd);
   $add$ptr31 = ((($call2)) + 132|0);
   $buf = ((($call2)) + 44|0);
   store4($buf,$add$ptr31);
   $buf_size = ((($call2)) + 48|0);
   store4($buf_size,1024);
   $3 = ((($call2)) + 75|0);
   store1($3,-1);
   $and33 = $4 & 8;
   $tobool34 = ($and33|0)==(0);
   if ($tobool34) {
    $5 = $wsz;
    store4($vararg_buffer12,$fd);
    $vararg_ptr15 = ((($vararg_buffer12)) + 4|0);
    store4($vararg_ptr15,21523);
    $vararg_ptr16 = ((($vararg_buffer12)) + 8|0);
    store4($vararg_ptr16,$5);
    $call35 = (___syscall54(54,($vararg_buffer12|0))|0);
    $tobool36 = ($call35|0)==(0);
    if ($tobool36) {
     store1($3,10);
    }
   }
   $read = ((($call2)) + 32|0);
   store4($read,11);
   $write = ((($call2)) + 36|0);
   store4($write,6);
   $seek = ((($call2)) + 40|0);
   store4($seek,7);
   $close = ((($call2)) + 12|0);
   store4($close,4);
   $6 = load4((7100));
   $tobool40 = ($6|0)==(0);
   if ($tobool40) {
    $lock = ((($call2)) + 76|0);
    store4($lock,-1);
   }
   $call43 = (___ofl_add($call2)|0);
   $retval$0 = $call2;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _strchr($s,$c) {
 $s = $s|0;
 $c = $c|0;
 var $0 = 0, $1 = 0, $call = 0, $cmp = 0, $cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___strchrnul($s,$c)|0);
 $0 = load1($call);
 $1 = $c&255;
 $cmp = ($0<<24>>24)==($1<<24>>24);
 $cond = $cmp ? $call : 0;
 return ($cond|0);
}
function ___ofl_add($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $call = 0, $next = 0, $prev = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___ofl_lock()|0);
 $0 = load4($call);
 $next = ((($f)) + 56|0);
 store4($next,$0);
 $1 = load4($call);
 $tobool = ($1|0)==(0|0);
 if (!($tobool)) {
  $prev = ((($1)) + 52|0);
  store4($prev,$f);
 }
 store4($call,$f);
 ___ofl_unlock();
 return ($f|0);
}
function ___ofl_lock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___lock((7164|0));
 return (7172|0);
}
function ___ofl_unlock() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___unlock((7164|0));
 return;
}
function _fprintf($f,$fmt,$varargs) {
 $f = $f|0;
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $ap = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 $call = (_vfprintf($f,$fmt,$ap)|0);
 STACKTOP = sp;return ($call|0);
}
function ___unlist_locked_file($f) {
 $f = $f|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $call = 0, $lockcount = 0, $next_locked = 0, $next_locked10 = 0, $next_locked10$sink = 0, $prev_locked4 = 0, $stdio_locks = 0, $tobool = 0, $tobool1 = 0, $tobool6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lockcount = ((($f)) + 68|0);
 $0 = load4($lockcount);
 $tobool = ($0|0)==(0);
 if (!($tobool)) {
  $next_locked = ((($f)) + 116|0);
  $1 = load4($next_locked);
  $tobool1 = ($1|0)==(0|0);
  $$pre = ((($f)) + 112|0);
  if (!($tobool1)) {
   $2 = load4($$pre);
   $prev_locked4 = ((($1)) + 112|0);
   store4($prev_locked4,$2);
  }
  $3 = load4($$pre);
  $tobool6 = ($3|0)==(0|0);
  if ($tobool6) {
   $call = (___pthread_self_238()|0);
   $stdio_locks = ((($call)) + 232|0);
   $next_locked10$sink = $stdio_locks;
  } else {
   $next_locked10 = ((($3)) + 116|0);
   $next_locked10$sink = $next_locked10;
  }
  store4($next_locked10$sink,$1);
 }
 return;
}
function ___pthread_self_238() {
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_pthread_self()|0);
 return ($call|0);
}
function _fgets($s,$n,$f) {
 $s = $s|0;
 $n = $n|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add = 0, $add$ptr = 0, $add$ptr35 = 0, $and = 0, $call = 0, $call12 = 0, $call49 = 0, $cmp = 0, $cmp1 = 0, $cmp27 = 0, $cmp43 = 0, $cmp52 = 0;
 var $cmp55 = 0, $cmp66 = 0, $cond = 0, $cond26 = 0, $cond32 = 0, $cond5150 = 0, $conv = 0, $conv4 = 0, $conv47 = 0, $conv63 = 0, $dec = 0, $dec62 = 0, $incdec$ptr = 0, $incdec$ptr64 = 0, $lock = 0, $mode = 0, $n$addr$0 = 0, $or = 0, $or$cond = 0, $or$cond1 = 0;
 var $p$0 = 0, $p$1 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $s$addr$052 = 0, $sext$mask = 0, $sub = 0, $sub$ptr$lhs$cast16 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub$ptr$sub18 = 0, $sub36 = 0, $tobool = 0, $tobool10 = 0, $tobool13 = 0, $tobool38 = 0, $tobool58 = 0, $tobool6 = 0, $tobool70 = 0;
 var $tobool73 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $cond = $call;
 } else {
  $cond = 0;
 }
 $dec = (($n) + -1)|0;
 $cmp1 = ($n|0)<(2);
 $tobool6 = ($dec|0)!=(0);
 if ($cmp1) {
  $mode = ((($f)) + 74|0);
  $1 = load1($mode);
  $conv = $1 << 24 >> 24;
  $sub = (($conv) + 255)|0;
  $or = $sub | $conv;
  $conv4 = $or&255;
  store1($mode,$conv4);
  $tobool = ($cond|0)==(0);
  if (!($tobool)) {
   ___unlockfile($f);
  }
  if ($tobool6) {
   $retval$0 = 0;
  } else {
   store1($s,0);
   $retval$0 = $s;
  }
 } else {
  L11: do {
   if ($tobool6) {
    $rpos = ((($f)) + 4|0);
    $rend = ((($f)) + 8|0);
    $n$addr$0 = $dec;$p$0 = $s;
    while(1) {
     $2 = load4($rpos);
     $3 = load4($rend);
     $sub$ptr$rhs$cast = $2;
     $sub$ptr$sub = (($3) - ($sub$ptr$rhs$cast))|0;
     $call12 = (_memchr($2,10,$sub$ptr$sub)|0);
     $tobool13 = ($call12|0)==(0|0);
     $sub$ptr$lhs$cast16 = $call12;
     $sub$ptr$sub18 = (1 - ($sub$ptr$rhs$cast))|0;
     $add = (($sub$ptr$sub18) + ($sub$ptr$lhs$cast16))|0;
     $cond26 = $tobool13 ? $sub$ptr$sub : $add;
     $cmp27 = ($cond26>>>0)<($n$addr$0>>>0);
     $cond32 = $cmp27 ? $cond26 : $n$addr$0;
     _memcpy(($p$0|0),($2|0),($cond32|0))|0;
     $4 = load4($rpos);
     $add$ptr = (($4) + ($cond32)|0);
     store4($rpos,$add$ptr);
     $add$ptr35 = (($p$0) + ($cond32)|0);
     $sub36 = (($n$addr$0) - ($cond32))|0;
     $tobool38 = ($sub36|0)!=(0);
     $or$cond = $tobool13 & $tobool38;
     if (!($or$cond)) {
      $p$1 = $add$ptr35;
      label = 17;
      break L11;
     }
     $5 = load4($rend);
     $cmp43 = ($add$ptr>>>0)<($5>>>0);
     if ($cmp43) {
      $incdec$ptr = ((($add$ptr)) + 1|0);
      store4($rpos,$incdec$ptr);
      $6 = load1($add$ptr);
      $conv47 = $6&255;
      $cond5150 = $conv47;
     } else {
      $call49 = (___uflow($f)|0);
      $cmp52 = ($call49|0)<(0);
      if ($cmp52) {
       break;
      } else {
       $cond5150 = $call49;
      }
     }
     $dec62 = (($sub36) + -1)|0;
     $conv63 = $cond5150&255;
     $incdec$ptr64 = ((($add$ptr35)) + 1|0);
     store1($add$ptr35,$conv63);
     $sext$mask = $cond5150 & 255;
     $cmp66 = ($sext$mask|0)!=(10);
     $tobool10 = ($dec62|0)!=(0);
     $or$cond1 = $tobool10 & $cmp66;
     if ($or$cond1) {
      $n$addr$0 = $dec62;$p$0 = $incdec$ptr64;
     } else {
      $p$1 = $incdec$ptr64;
      label = 17;
      break L11;
     }
    }
    $cmp55 = ($add$ptr35|0)==($s|0);
    if ($cmp55) {
     $s$addr$052 = 0;
    } else {
     $7 = load4($f);
     $and = $7 & 16;
     $tobool58 = ($and|0)==(0);
     if ($tobool58) {
      $s$addr$052 = 0;
     } else {
      $p$1 = $add$ptr35;
      label = 17;
     }
    }
   } else {
    $p$1 = $s;
    label = 17;
   }
  } while(0);
  if ((label|0) == 17) {
   $tobool70 = ($s|0)==(0|0);
   if ($tobool70) {
    $s$addr$052 = 0;
   } else {
    store1($p$1,0);
    $s$addr$052 = $s;
   }
  }
  $tobool73 = ($cond|0)==(0);
  if ($tobool73) {
   $retval$0 = $s$addr$052;
  } else {
   ___unlockfile($f);
   $retval$0 = $s$addr$052;
  }
 }
 return ($retval$0|0);
}
function _fclose($f) {
 $f = $f|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $and = 0, $call = 0, $call1 = 0, $call18 = 0, $call19 = 0, $close = 0, $cmp = 0, $cmp13 = 0, $cond = 0, $getln_buf = 0;
 var $lock = 0, $next5 = 0, $or = 0, $prev = 0, $prev11 = 0, $tobool = 0, $tobool2 = 0, $tobool20 = 0, $tobool26 = 0, $tobool7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $cond = $call;
 } else {
  $cond = 0;
 }
 ___unlist_locked_file($f);
 $1 = load4($f);
 $and = $1 & 1;
 $tobool = ($and|0)!=(0);
 if (!($tobool)) {
  $call1 = (___ofl_lock()|0);
  $prev = ((($f)) + 52|0);
  $2 = load4($prev);
  $tobool2 = ($2|0)==(0|0);
  $3 = $2;
  $$pre = ((($f)) + 56|0);
  if (!($tobool2)) {
   $4 = load4($$pre);
   $next5 = ((($2)) + 56|0);
   store4($next5,$4);
  }
  $5 = load4($$pre);
  $tobool7 = ($5|0)==(0|0);
  if (!($tobool7)) {
   $prev11 = ((($5)) + 52|0);
   store4($prev11,$3);
  }
  $6 = load4($call1);
  $cmp13 = ($6|0)==($f|0);
  if ($cmp13) {
   store4($call1,$5);
  }
  ___ofl_unlock();
 }
 $call18 = (_fflush($f)|0);
 $close = ((($f)) + 12|0);
 $7 = load4($close);
 $call19 = (FUNCTION_TABLE_ii[$7 & 7]($f)|0);
 $or = $call19 | $call18;
 $getln_buf = ((($f)) + 92|0);
 $8 = load4($getln_buf);
 $tobool20 = ($8|0)==(0|0);
 if (!($tobool20)) {
  _free($8);
 }
 if ($tobool) {
  $tobool26 = ($cond|0)==(0);
  if (!($tobool26)) {
   ___unlockfile($f);
  }
 } else {
  _free($f);
 }
 return ($or|0);
}
function _fflush($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call11 = 0, $call118 = 0, $call17 = 0, $call23 = 0, $call7 = 0, $cmp = 0, $cmp15 = 0, $cmp21 = 0, $cond10 = 0, $cond20 = 0, $f$addr$0 = 0, $f$addr$019 = 0;
 var $f$addr$022 = 0, $lock = 0, $lock14 = 0, $next = 0, $or = 0, $phitmp = 0, $r$0$lcssa = 0, $r$021 = 0, $r$1 = 0, $retval$0 = 0, $tobool = 0, $tobool12 = 0, $tobool1220 = 0, $tobool25 = 0, $tobool5 = 0, $wbase = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($f|0)==(0|0);
 do {
  if ($tobool) {
   $1 = load4(1952);
   $tobool5 = ($1|0)==(0|0);
   if ($tobool5) {
    $cond10 = 0;
   } else {
    $2 = load4(1952);
    $call7 = (_fflush($2)|0);
    $cond10 = $call7;
   }
   $call11 = (___ofl_lock()|0);
   $f$addr$019 = load4($call11);
   $tobool1220 = ($f$addr$019|0)==(0|0);
   if ($tobool1220) {
    $r$0$lcssa = $cond10;
   } else {
    $f$addr$022 = $f$addr$019;$r$021 = $cond10;
    while(1) {
     $lock14 = ((($f$addr$022)) + 76|0);
     $3 = load4($lock14);
     $cmp15 = ($3|0)>(-1);
     if ($cmp15) {
      $call17 = (___lockfile($f$addr$022)|0);
      $cond20 = $call17;
     } else {
      $cond20 = 0;
     }
     $wpos = ((($f$addr$022)) + 20|0);
     $4 = load4($wpos);
     $wbase = ((($f$addr$022)) + 28|0);
     $5 = load4($wbase);
     $cmp21 = ($4>>>0)>($5>>>0);
     if ($cmp21) {
      $call23 = (___fflush_unlocked($f$addr$022)|0);
      $or = $call23 | $r$021;
      $r$1 = $or;
     } else {
      $r$1 = $r$021;
     }
     $tobool25 = ($cond20|0)==(0);
     if (!($tobool25)) {
      ___unlockfile($f$addr$022);
     }
     $next = ((($f$addr$022)) + 56|0);
     $f$addr$0 = load4($next);
     $tobool12 = ($f$addr$0|0)==(0|0);
     if ($tobool12) {
      $r$0$lcssa = $r$1;
      break;
     } else {
      $f$addr$022 = $f$addr$0;$r$021 = $r$1;
     }
    }
   }
   ___ofl_unlock();
   $retval$0 = $r$0$lcssa;
  } else {
   $lock = ((($f)) + 76|0);
   $0 = load4($lock);
   $cmp = ($0|0)>(-1);
   if (!($cmp)) {
    $call118 = (___fflush_unlocked($f)|0);
    $retval$0 = $call118;
    break;
   }
   $call = (___lockfile($f)|0);
   $phitmp = ($call|0)==(0);
   $call1 = (___fflush_unlocked($f)|0);
   if ($phitmp) {
    $retval$0 = $call1;
   } else {
    ___unlockfile($f);
    $retval$0 = $call1;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___fflush_unlocked($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp4 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $seek = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0;
 var $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wpos = ((($f)) + 20|0);
 $0 = load4($wpos);
 $wbase = ((($f)) + 28|0);
 $1 = load4($wbase);
 $cmp = ($0>>>0)>($1>>>0);
 if ($cmp) {
  $write = ((($f)) + 36|0);
  $2 = load4($write);
  (FUNCTION_TABLE_iiii[$2 & 15]($f,0,0)|0);
  $3 = load4($wpos);
  $tobool = ($3|0)==(0|0);
  if ($tobool) {
   $retval$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $rpos = ((($f)) + 4|0);
  $4 = load4($rpos);
  $rend = ((($f)) + 8|0);
  $5 = load4($rend);
  $cmp4 = ($4>>>0)<($5>>>0);
  if ($cmp4) {
   $sub$ptr$lhs$cast = $4;
   $sub$ptr$rhs$cast = $5;
   $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
   $seek = ((($f)) + 40|0);
   $6 = load4($seek);
   (FUNCTION_TABLE_iiii[$6 & 15]($f,$sub$ptr$sub,1)|0);
  }
  $wend = ((($f)) + 16|0);
  store4($wend,0);
  store4($wbase,0);
  store4($wpos,0);
  store4($rend,0);
  store4($rpos,0);
  $retval$0 = 0;
 }
 return ($retval$0|0);
}
function _strcpy($dest,$src) {
 $dest = $dest|0;
 $src = $src|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___stpcpy($dest,$src)|0);
 return ($dest|0);
}
function ___stpcpy($d,$s) {
 $d = $d|0;
 $s = $s|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $and = 0, $and28 = 0, $and7 = 0, $and729 = 0, $cmp = 0, $d$addr$0$lcssa = 0, $d$addr$037 = 0, $d$addr$1$ph = 0, $d$addr$124 = 0;
 var $incdec$ptr = 0, $incdec$ptr11 = 0, $incdec$ptr12 = 0, $incdec$ptr19 = 0, $incdec$ptr20 = 0, $incdec$ptr5 = 0, $lnot = 0, $lnot30 = 0, $neg = 0, $neg27 = 0, $rem2 = 0, $rem235 = 0, $retval$0 = 0, $s$addr$0$lcssa = 0, $s$addr$038 = 0, $s$addr$1$ph = 0, $s$addr$125 = 0, $sub = 0, $sub26 = 0, $tobool = 0;
 var $tobool16 = 0, $tobool1623 = 0, $tobool3 = 0, $tobool36 = 0, $wd$0$lcssa = 0, $wd$031 = 0, $ws$0$lcssa = 0, $ws$032 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $1 = $d;
 $2 = $0 ^ $1;
 $3 = $2 & 3;
 $cmp = ($3|0)==(0);
 L1: do {
  if ($cmp) {
   $rem235 = $0 & 3;
   $tobool36 = ($rem235|0)==(0);
   if ($tobool36) {
    $d$addr$0$lcssa = $d;$s$addr$0$lcssa = $s;
   } else {
    $d$addr$037 = $d;$s$addr$038 = $s;
    while(1) {
     $4 = load1($s$addr$038);
     store1($d$addr$037,$4);
     $tobool3 = ($4<<24>>24)==(0);
     if ($tobool3) {
      $retval$0 = $d$addr$037;
      break L1;
     }
     $incdec$ptr = ((($s$addr$038)) + 1|0);
     $incdec$ptr5 = ((($d$addr$037)) + 1|0);
     $5 = $incdec$ptr;
     $rem2 = $5 & 3;
     $tobool = ($rem2|0)==(0);
     if ($tobool) {
      $d$addr$0$lcssa = $incdec$ptr5;$s$addr$0$lcssa = $incdec$ptr;
      break;
     } else {
      $d$addr$037 = $incdec$ptr5;$s$addr$038 = $incdec$ptr;
     }
    }
   }
   $6 = load4($s$addr$0$lcssa);
   $sub26 = (($6) + -16843009)|0;
   $neg27 = $6 & -2139062144;
   $and28 = $neg27 ^ -2139062144;
   $and729 = $and28 & $sub26;
   $lnot30 = ($and729|0)==(0);
   if ($lnot30) {
    $7 = $6;$wd$031 = $d$addr$0$lcssa;$ws$032 = $s$addr$0$lcssa;
    while(1) {
     $incdec$ptr11 = ((($ws$032)) + 4|0);
     $incdec$ptr12 = ((($wd$031)) + 4|0);
     store4($wd$031,$7);
     $8 = load4($incdec$ptr11);
     $sub = (($8) + -16843009)|0;
     $neg = $8 & -2139062144;
     $and = $neg ^ -2139062144;
     $and7 = $and & $sub;
     $lnot = ($and7|0)==(0);
     if ($lnot) {
      $7 = $8;$wd$031 = $incdec$ptr12;$ws$032 = $incdec$ptr11;
     } else {
      $wd$0$lcssa = $incdec$ptr12;$ws$0$lcssa = $incdec$ptr11;
      break;
     }
    }
   } else {
    $wd$0$lcssa = $d$addr$0$lcssa;$ws$0$lcssa = $s$addr$0$lcssa;
   }
   $d$addr$1$ph = $wd$0$lcssa;$s$addr$1$ph = $ws$0$lcssa;
   label = 8;
  } else {
   $d$addr$1$ph = $d;$s$addr$1$ph = $s;
   label = 8;
  }
 } while(0);
 if ((label|0) == 8) {
  $9 = load1($s$addr$1$ph);
  store1($d$addr$1$ph,$9);
  $tobool1623 = ($9<<24>>24)==(0);
  if ($tobool1623) {
   $retval$0 = $d$addr$1$ph;
  } else {
   $d$addr$124 = $d$addr$1$ph;$s$addr$125 = $s$addr$1$ph;
   while(1) {
    $incdec$ptr19 = ((($s$addr$125)) + 1|0);
    $incdec$ptr20 = ((($d$addr$124)) + 1|0);
    $10 = load1($incdec$ptr19);
    store1($incdec$ptr20,$10);
    $tobool16 = ($10<<24>>24)==(0);
    if ($tobool16) {
     $retval$0 = $incdec$ptr20;
     break;
    } else {
     $d$addr$124 = $incdec$ptr20;$s$addr$125 = $incdec$ptr19;
    }
   }
  }
 }
 return ($retval$0|0);
}
function ___strdup($s) {
 $s = $s|0;
 var $add = 0, $call = 0, $call1 = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($s)|0);
 $add = (($call) + 1)|0;
 $call1 = (_malloc($add)|0);
 $tobool = ($call1|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  _memcpy(($call1|0),($s|0),($add|0))|0;
  $retval$0 = $call1;
 }
 return ($retval$0|0);
}
function _fseek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___fseeko($f,$off,$whence)|0);
 return ($call|0);
}
function _getc($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $call13 = 0, $call3 = 0, $cmp = 0, $cmp1 = 0, $cmp6 = 0, $cond15 = 0, $conv = 0, $conv11 = 0, $incdec$ptr = 0, $incdec$ptr10 = 0, $lock = 0, $rend = 0;
 var $rend5 = 0, $retval$0 = 0, $rpos = 0, $rpos4 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)<(0);
 if ($cmp) {
  label = 3;
 } else {
  $call = (___lockfile($f)|0);
  $tobool = ($call|0)==(0);
  if ($tobool) {
   label = 3;
  } else {
   $rpos4 = ((($f)) + 4|0);
   $4 = load4($rpos4);
   $rend5 = ((($f)) + 8|0);
   $5 = load4($rend5);
   $cmp6 = ($4>>>0)<($5>>>0);
   if ($cmp6) {
    $incdec$ptr10 = ((($4)) + 1|0);
    store4($rpos4,$incdec$ptr10);
    $6 = load1($4);
    $conv11 = $6&255;
    $cond15 = $conv11;
   } else {
    $call13 = (___uflow($f)|0);
    $cond15 = $call13;
   }
   ___unlockfile($f);
   $retval$0 = $cond15;
  }
 }
 do {
  if ((label|0) == 3) {
   $rpos = ((($f)) + 4|0);
   $1 = load4($rpos);
   $rend = ((($f)) + 8|0);
   $2 = load4($rend);
   $cmp1 = ($1>>>0)<($2>>>0);
   if ($cmp1) {
    $incdec$ptr = ((($1)) + 1|0);
    store4($rpos,$incdec$ptr);
    $3 = load1($1);
    $conv = $3&255;
    $retval$0 = $conv;
    break;
   } else {
    $call3 = (___uflow($f)|0);
    $retval$0 = $call3;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function _strrchr($s,$c) {
 $s = $s|0;
 $c = $c|0;
 var $add = 0, $call = 0, $call1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($s)|0);
 $add = (($call) + 1)|0;
 $call1 = (___memrchr($s,$c,$add)|0);
 return ($call1|0);
}
function ___memrchr($m,$c,$n) {
 $m = $m|0;
 $c = $c|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $cmp = 0, $dec = 0, $n$addr$0 = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $c&255;
 $n$addr$0 = $n;
 while(1) {
  $dec = (($n$addr$0) + -1)|0;
  $tobool = ($n$addr$0|0)==(0);
  if ($tobool) {
   $retval$0 = 0;
   break;
  }
  $arrayidx = (($m) + ($dec)|0);
  $1 = load1($arrayidx);
  $cmp = ($1<<24>>24)==($0<<24>>24);
  if ($cmp) {
   $retval$0 = $arrayidx;
   break;
  } else {
   $n$addr$0 = $dec;
  }
 }
 return ($retval$0|0);
}
function _rand() {
 var $0 = i64(), $add = i64(), $conv = 0, $mul = i64(), $shr = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load8(7080);
 $mul = i64_mul($0,i64_const(1284865837,1481765933));
 $add = i64_add($mul,i64_const(1,0));
 store8(7080,$add);
 $shr = i64_lshr($add,i64_const(33,0));
 $conv = i64_trunc($shr);
 return ($conv|0);
}
function ___munmap($start,$len) {
 $start = $start|0;
 $len = $len|0;
 var $0 = 0, $call = 0, $call1 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _dummy_742();
 $0 = $start;
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,$len);
 $call = (___syscall91(91,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 STACKTOP = sp;return ($call1|0);
}
function _dummy_742() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___get_locale($cat,$val) {
 $cat = $cat|0;
 $val = $val|0;
 var $$pre88 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__c_dot_utf8$new$4 = 0, $add = 0, $add$ptr104 = 0, $add$ptr131 = 0, $add105 = 0, $arraydecay = 0, $arraydecay63 = 0, $arraydecay74 = 0, $arrayidx102 = 0, $arrayidx106 = 0, $arrayidx121 = 0, $arrayidx144 = 0, $arrayidx16 = 0, $arrayidx28 = 0, $arrayidx38 = 0, $arrayidx53 = 0;
 var $buf = 0, $call = 0, $call108 = 0, $call111 = 0, $call136 = 0, $call3 = 0, $call41 = 0, $call44 = 0, $call64 = 0, $call75 = 0, $call84 = 0, $call9 = 0, $call91 = 0, $cmp = 0, $cmp149 = 0, $cmp25 = 0, $cmp35 = 0, $cmp50 = 0, $cmp55 = 0, $cmp97 = 0;
 var $inc = 0, $lnot = 0, $lnot$ext$neg = 0, $lnot$ext130 = 0, $map_size = 0, $map_size117 = 0, $map_size140 = 0, $n$0$lcssa = 0, $n$085 = 0, $name118 = 0, $name141 = 0, $new$4 = 0, $next = 0, $next122 = 0, $next145 = 0, $next80 = 0, $or$cond = 0, $p$084 = 0, $p$182 = 0, $path$180 = 0;
 var $retval$0 = 0, $sub = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub96 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool109 = 0, $tobool112 = 0, $tobool126 = 0, $tobool13 = 0, $tobool137 = 0, $tobool147 = 0, $tobool2 = 0, $tobool30 = 0, $tobool39 = 0, $tobool4 = 0, $tobool42 = 0;
 var $tobool61 = 0, $tobool6183 = 0, $tobool65 = 0, $tobool7 = 0, $tobool71 = 0, $tobool7181 = 0, $tobool76 = 0, $tobool82 = 0, $tobool86 = 0, $tobool89 = 0, $tobool8979 = 0, $tobool92 = 0, $val$addr$1 = 0, $val$addr$290 = 0, $val$addr$291 = 0, $val$addr$292 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $buf = sp + 8|0;
 $map_size = sp;
 $0 = load1($val);
 $tobool = ($0<<24>>24)==(0);
 do {
  if ($tobool) {
   $call = (_getenv((6407|0))|0);
   $tobool1 = ($call|0)==(0|0);
   if (!($tobool1)) {
    $1 = load1($call);
    $tobool2 = ($1<<24>>24)==(0);
    if (!($tobool2)) {
     $val$addr$1 = $call;
     break;
    }
   }
   $arraydecay = (6414 + (($cat*12)|0)|0);
   $call3 = (_getenv(($arraydecay|0))|0);
   $tobool4 = ($call3|0)==(0|0);
   if (!($tobool4)) {
    $2 = load1($call3);
    $tobool7 = ($2<<24>>24)==(0);
    if (!($tobool7)) {
     $val$addr$1 = $call3;
     break;
    }
   }
   $call9 = (_getenv((6486|0))|0);
   $tobool10 = ($call9|0)==(0|0);
   if (!($tobool10)) {
    $3 = load1($call9);
    $tobool13 = ($3<<24>>24)==(0);
    if (!($tobool13)) {
     $val$addr$1 = $call9;
     break;
    }
   }
   $val$addr$1 = 6491;
  } else {
   $val$addr$1 = $val;
  }
 } while(0);
 $n$085 = 0;
 L13: while(1) {
  $arrayidx16 = (($val$addr$1) + ($n$085)|0);
  $4 = load1($arrayidx16);
  switch ($4<<24>>24) {
  case 47: case 0:  {
   $n$0$lcssa = $n$085;
   break L13;
   break;
  }
  default: {
  }
  }
  $inc = (($n$085) + 1)|0;
  $cmp = ($inc>>>0)<(15);
  if ($cmp) {
   $n$085 = $inc;
  } else {
   $n$0$lcssa = $inc;
   break;
  }
 }
 $5 = load1($val$addr$1);
 $cmp25 = ($5<<24>>24)==(46);
 if ($cmp25) {
  $val$addr$290 = 6491;
  label = 15;
 } else {
  $arrayidx28 = (($val$addr$1) + ($n$0$lcssa)|0);
  $6 = load1($arrayidx28);
  $tobool30 = ($6<<24>>24)==(0);
  if ($tobool30) {
   $cmp35 = ($5<<24>>24)==(67);
   if ($cmp35) {
    $val$addr$290 = $val$addr$1;
    label = 15;
   } else {
    $val$addr$291 = $val$addr$1;
    label = 16;
   }
  } else {
   $val$addr$290 = 6491;
   label = 15;
  }
 }
 if ((label|0) == 15) {
  $arrayidx38 = ((($val$addr$290)) + 1|0);
  $7 = load1($arrayidx38);
  $tobool39 = ($7<<24>>24)==(0);
  if ($tobool39) {
   $val$addr$292 = $val$addr$290;
   label = 18;
  } else {
   $val$addr$291 = $val$addr$290;
   label = 16;
  }
 }
 L22: do {
  if ((label|0) == 16) {
   $call41 = (_strcmp($val$addr$291,6491)|0);
   $tobool42 = ($call41|0)==(0);
   if ($tobool42) {
    $val$addr$292 = $val$addr$291;
    label = 18;
   } else {
    $call44 = (_strcmp($val$addr$291,6499)|0);
    $lnot = ($call44|0)==(0);
    if ($lnot) {
     $val$addr$292 = $val$addr$291;
     label = 18;
    } else {
     $9 = load4(7176);
     $tobool6183 = ($9|0)==(0|0);
     if (!($tobool6183)) {
      $p$084 = $9;
      while(1) {
       $arraydecay63 = ((($p$084)) + 8|0);
       $call64 = (_strcmp($val$addr$291,$arraydecay63)|0);
       $tobool65 = ($call64|0)==(0);
       if ($tobool65) {
        $retval$0 = $p$084;
        break L22;
       }
       $next = ((($p$084)) + 24|0);
       $10 = load4($next);
       $tobool61 = ($10|0)==(0|0);
       if ($tobool61) {
        break;
       } else {
        $p$084 = $10;
       }
      }
     }
     ___lock((7180|0));
     $11 = load4(7176);
     $tobool7181 = ($11|0)==(0|0);
     L32: do {
      if (!($tobool7181)) {
       $p$182 = $11;
       while(1) {
        $arraydecay74 = ((($p$182)) + 8|0);
        $call75 = (_strcmp($val$addr$291,$arraydecay74)|0);
        $tobool76 = ($call75|0)==(0);
        if ($tobool76) {
         break;
        }
        $next80 = ((($p$182)) + 24|0);
        $12 = load4($next80);
        $tobool71 = ($12|0)==(0|0);
        if ($tobool71) {
         break L32;
        } else {
         $p$182 = $12;
        }
       }
       ___unlock((7180|0));
       $retval$0 = $p$182;
       break L22;
      }
     } while(0);
     $13 = load4((7104));
     $tobool82 = ($13|0)==(0);
     L39: do {
      if ($tobool82) {
       $call84 = (_getenv((6505|0))|0);
       $tobool86 = ($call84|0)==(0|0);
       if ($tobool86) {
        label = 41;
       } else {
        $14 = load1($call84);
        $tobool8979 = ($14<<24>>24)==(0);
        if ($tobool8979) {
         label = 41;
        } else {
         $sub96 = (254 - ($n$0$lcssa))|0;
         $add = (($n$0$lcssa) + 1)|0;
         $path$180 = $call84;
         while(1) {
          $call91 = (___strchrnul($path$180,58)|0);
          $sub$ptr$lhs$cast = $call91;
          $sub$ptr$rhs$cast = $path$180;
          $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
          $15 = load1($call91);
          $tobool92 = ($15<<24>>24)!=(0);
          $lnot$ext$neg = $tobool92 << 31 >> 31;
          $sub = (($lnot$ext$neg) + ($sub$ptr$sub))|0;
          $cmp97 = ($sub>>>0)<($sub96>>>0);
          if ($cmp97) {
           _memcpy(($buf|0),($path$180|0),($sub|0))|0;
           $arrayidx102 = (($buf) + ($sub)|0);
           store1($arrayidx102,47);
           $add$ptr104 = ((($arrayidx102)) + 1|0);
           _memcpy(($add$ptr104|0),($val$addr$291|0),($n$0$lcssa|0))|0;
           $add105 = (($add) + ($sub))|0;
           $arrayidx106 = (($buf) + ($add105)|0);
           store1($arrayidx106,0);
           $call108 = (___map_file(($buf|0),($map_size|0))|0);
           $tobool109 = ($call108|0)==(0|0);
           if (!($tobool109)) {
            break;
           }
           $$pre88 = load1($call91);
           $18 = $$pre88;
          } else {
           $18 = $15;
          }
          $tobool126 = ($18<<24>>24)!=(0);
          $lnot$ext130 = $tobool126&1;
          $add$ptr131 = (($call91) + ($lnot$ext130)|0);
          $19 = load1($add$ptr131);
          $tobool89 = ($19<<24>>24)==(0);
          if ($tobool89) {
           label = 41;
           break L39;
          } else {
           $path$180 = $add$ptr131;
          }
         }
         $call111 = (_malloc(28)|0);
         $tobool112 = ($call111|0)==(0|0);
         $16 = load4($map_size);
         if ($tobool112) {
          (___munmap($call108,$16)|0);
          label = 41;
          break;
         } else {
          store4($call111,$call108);
          $map_size117 = ((($call111)) + 4|0);
          store4($map_size117,$16);
          $name118 = ((($call111)) + 8|0);
          _memcpy(($name118|0),($val$addr$291|0),($n$0$lcssa|0))|0;
          $arrayidx121 = (($name118) + ($n$0$lcssa)|0);
          store1($arrayidx121,0);
          $17 = load4(7176);
          $next122 = ((($call111)) + 24|0);
          store4($next122,$17);
          store4(7176,$call111);
          $new$4 = $call111;
          break;
         }
        }
       }
      } else {
       label = 41;
      }
     } while(0);
     if ((label|0) == 41) {
      $call136 = (_malloc(28)|0);
      $tobool137 = ($call136|0)==(0|0);
      if ($tobool137) {
       $new$4 = $call136;
      } else {
       $20 = load4(1956);
       store4($call136,$20);
       $21 = load4((1960));
       $map_size140 = ((($call136)) + 4|0);
       store4($map_size140,$21);
       $name141 = ((($call136)) + 8|0);
       _memcpy(($name141|0),($val$addr$291|0),($n$0$lcssa|0))|0;
       $arrayidx144 = (($name141) + ($n$0$lcssa)|0);
       store1($arrayidx144,0);
       $22 = load4(7176);
       $next145 = ((($call136)) + 24|0);
       store4($next145,$22);
       store4(7176,$call136);
       $new$4 = $call136;
      }
     }
     $tobool147 = ($new$4|0)==(0|0);
     $cmp149 = ($cat|0)==(0);
     $or$cond = $cmp149 & $tobool147;
     $__c_dot_utf8$new$4 = $or$cond ? 1956 : $new$4;
     ___unlock((7180|0));
     $retval$0 = $__c_dot_utf8$new$4;
    }
   }
  }
 } while(0);
 do {
  if ((label|0) == 18) {
   $cmp50 = ($cat|0)==(0);
   if ($cmp50) {
    $arrayidx53 = ((($val$addr$292)) + 1|0);
    $8 = load1($arrayidx53);
    $cmp55 = ($8<<24>>24)==(46);
    if ($cmp55) {
     $retval$0 = 1956;
     break;
    }
   }
   $retval$0 = 0;
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _setlocale($cat,$name) {
 $cat = $cat|0;
 $name = $name|0;
 var $0 = 0, $1 = 0, $add = 0, $add$ptr = 0, $add$ptr30 = 0, $arraydecay27 = 0, $arrayidx = 0, $arrayidx23 = 0, $arrayidx29 = 0, $call = 0, $call28 = 0, $call35 = 0, $cmp = 0, $cmp1 = 0, $cmp5 = 0, $cond = 0, $exitcond = 0, $exitcond37 = 0, $i$036 = 0, $i$134 = 0;
 var $inc = 0, $inc32 = 0, $incdec$ptr = 0, $p$0$add$ptr = 0, $p$035 = 0, $p$1 = 0, $part = 0, $retval$0 = 0, $s$033 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, $tobool13 = 0, $tobool25 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $part = sp;
 $cmp = ($cat>>>0)>(6);
 do {
  if ($cmp) {
   $retval$0 = 0;
  } else {
   ___lock((7188|0));
   $cmp1 = ($cat|0)==(6);
   if (!($cmp1)) {
    $call35 = (_setlocale_one_unlocked($cat,$name)|0);
    ___unlock((7188|0));
    $retval$0 = $call35;
    break;
   }
   $tobool = ($name|0)==(0|0);
   if ($tobool) {
    $i$134 = 0;$s$033 = 8748;
   } else {
    ; store8($part,load8(6518,1),1); store8($part+8 | 0,load8(6518+8 | 0,1),1);
    $i$036 = 0;$p$035 = $name;
    while(1) {
     $call = (___strchrnul($p$035,59)|0);
     $sub$ptr$lhs$cast = $call;
     $sub$ptr$rhs$cast = $p$035;
     $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
     $cmp5 = ($sub$ptr$sub|0)<(16);
     if ($cmp5) {
      _memcpy(($part|0),($p$035|0),($sub$ptr$sub|0))|0;
      $arrayidx = (($part) + ($sub$ptr$sub)|0);
      store1($arrayidx,0);
      $0 = load1($call);
      $tobool13 = ($0<<24>>24)==(0);
      $add$ptr = ((($call)) + 1|0);
      $p$0$add$ptr = $tobool13 ? $p$035 : $add$ptr;
      $p$1 = $p$0$add$ptr;
     } else {
      $p$1 = $p$035;
     }
     (_setlocale_one_unlocked($i$036,$part)|0);
     $inc = (($i$036) + 1)|0;
     $exitcond37 = ($inc|0)==(6);
     if ($exitcond37) {
      break;
     } else {
      $i$036 = $inc;$p$035 = $p$1;
     }
    }
    $i$134 = 0;$s$033 = 8748;
   }
   while(1) {
    $arrayidx23 = (7136 + ($i$134<<2)|0);
    $1 = load4($arrayidx23);
    $tobool25 = ($1|0)!=(0|0);
    $arraydecay27 = ((($1)) + 8|0);
    $cond = $tobool25 ? $arraydecay27 : 6534;
    $call28 = (_strlen($cond)|0);
    _memcpy(($s$033|0),($cond|0),($call28|0))|0;
    $arrayidx29 = (($s$033) + ($call28)|0);
    store1($arrayidx29,59);
    $add = (($call28) + 1)|0;
    $add$ptr30 = (($s$033) + ($add)|0);
    $inc32 = (($i$134) + 1)|0;
    $exitcond = ($inc32|0)==(6);
    if ($exitcond) {
     break;
    } else {
     $i$134 = $inc32;$s$033 = $add$ptr30;
    }
   }
   $incdec$ptr = ((($add$ptr30)) + -1|0);
   store1($incdec$ptr,0);
   ___unlock((7188|0));
   $retval$0 = 8748;
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _setlocale_one_unlocked($cat,$name) {
 $cat = $cat|0;
 $name = $name|0;
 var $0 = 0, $arraydecay = 0, $arrayidx = 0, $arrayidx1 = 0, $call = 0, $cond = 0, $lm$0 = 0, $tobool = 0, $tobool2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($name|0)==(0|0);
 if ($tobool) {
  $arrayidx1 = (7136 + ($cat<<2)|0);
  $0 = load4($arrayidx1);
  $lm$0 = $0;
 } else {
  $call = (___get_locale($cat,$name)|0);
  $arrayidx = (7136 + ($cat<<2)|0);
  store4($arrayidx,$call);
  $lm$0 = $call;
 }
 $tobool2 = ($lm$0|0)!=(0|0);
 $arraydecay = ((($lm$0)) + 8|0);
 $cond = $tobool2 ? $arraydecay : 6534;
 return ($cond|0);
}
function _strtok($s,$sep) {
 $s = $s|0;
 $sep = $sep|0;
 var $0 = 0, $1 = 0, $2 = 0, $add$ptr = 0, $add$ptr6 = 0, $call = 0, $call5 = 0, $incdec$ptr = 0, $retval$0 = 0, $s$addr$0 = 0, $tobool = 0, $tobool1 = 0, $tobool2 = 0, $tobool7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 if ($tobool) {
  $0 = load4(7196);
  $tobool1 = ($0|0)==(0|0);
  if ($tobool1) {
   $retval$0 = 0;
  } else {
   $s$addr$0 = $0;
   label = 3;
  }
 } else {
  $s$addr$0 = $s;
  label = 3;
 }
 do {
  if ((label|0) == 3) {
   $call = (_strspn($s$addr$0,$sep)|0);
   $add$ptr = (($s$addr$0) + ($call)|0);
   $1 = load1($add$ptr);
   $tobool2 = ($1<<24>>24)==(0);
   if ($tobool2) {
    store4(7196,0);
    $retval$0 = 0;
    break;
   }
   $call5 = (_strcspn($add$ptr,$sep)|0);
   $add$ptr6 = (($add$ptr) + ($call5)|0);
   store4(7196,$add$ptr6);
   $2 = load1($add$ptr6);
   $tobool7 = ($2<<24>>24)==(0);
   if ($tobool7) {
    store4(7196,0);
    $retval$0 = $add$ptr;
    break;
   } else {
    $incdec$ptr = ((($add$ptr6)) + 1|0);
    store4(7196,$incdec$ptr);
    store1($add$ptr6,0);
    $retval$0 = $add$ptr;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i175 = 0, $$pre$i178 = 0, $$pre$i45$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i176Z2D = 0, $$pre$phi$i46$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre5$i$i = 0, $$sink$i = 0, $$sink$i$i = 0, $$sink$i154 = 0, $$sink2$i = 0, $$sink2$i172 = 0, $$sink5$i = 0, $$v$0$i = 0, $0 = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0, $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i165 = 0, $R$3$i = 0;
 var $R$3$i$i = 0, $R$3$i168 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i164 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i47$i = 0, $add$i = 0, $add$i$i = 0, $add$i145 = 0, $add$i179 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i158 = 0, $add$ptr$i16$i = 0, $add$ptr$i192 = 0, $add$ptr$i2$i$i = 0;
 var $add$ptr$i21$i = 0, $add$ptr$i49$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0, $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0;
 var $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0, $add$ptr4$i$i$i = 0, $add$ptr4$i26$i = 0, $add$ptr4$i54$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i58$i = 0, $add$ptr7$i$i = 0, $add$ptr81$i$i = 0, $add$ptr95 = 0;
 var $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0, $add17$i = 0, $add17$i182 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0;
 var $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0, $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0;
 var $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0, $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i142 = 0, $and$i17$i = 0;
 var $and$i22$i = 0, $and$i50$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0, $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i203 = 0, $and199$i = 0, $and209$i$i = 0;
 var $and21$i = 0, $and21$i148 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0, $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i24$i = 0, $and3$i52$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0;
 var $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0, $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0;
 var $and6$i$i = 0, $and6$i10$i = 0, $and6$i27$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0, $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0;
 var $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i14$i = 0, $arrayidx$i149 = 0, $arrayidx$i37$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0, $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i155 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0;
 var $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i166 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0, $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx233$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0;
 var $arrayidx27$i = 0, $arrayidx276$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0, $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i153 = 0;
 var $arrayidx96$i$i = 0, $bk = 0, $bk$i = 0, $bk$i$i = 0, $bk$i160 = 0, $bk$i35$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0, $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0;
 var $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0, $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call275$i = 0, $call37$i = 0;
 var $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i177 = 0, $cmp$i18$i = 0, $cmp$i23$i = 0, $cmp$i3$i$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0;
 var $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0;
 var $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i195 = 0, $cmp135$i = 0, $cmp137$i = 0, $cmp137$i$i = 0, $cmp137$i196 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$i = 0, $cmp142$i = 0, $cmp146 = 0, $cmp147$i = 0, $cmp14799$i = 0, $cmp15 = 0;
 var $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0, $cmp159$i = 0, $cmp159$i198 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i199 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0;
 var $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0, $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0;
 var $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0, $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0;
 var $cmp287$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0, $cmp32$i184 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0;
 var $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0, $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i152 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0;
 var $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i185 = 0, $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i186 = 0, $cmp59$i$i = 0, $cmp60$i = 0, $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i189 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0;
 var $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i190 = 0, $cmp83$i$i = 0, $cmp85$i = 0, $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0;
 var $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i150 = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i161 = 0;
 var $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0, $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0;
 var $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0, $head$i$i = 0, $head$i$i$i = 0, $head$i151 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0;
 var $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0, $head25 = 0, $head26$i$i = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0;
 var $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i169 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0;
 var $neg$i$i = 0, $neg$i170 = 0, $neg$i181 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0, $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp$i = 0, $not$cmp107$i = 0, $not$cmp114$i = 0, $not$cmp141$i = 0, $not$cmp144$i$i = 0, $not$cmp150$i$i = 0, $not$cmp205$i = 0, $not$cmp346$i$i = 0;
 var $not$cmp4$i = 0, $not$cmp418$i = 0, $not$cmp494$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i187 = 0, $or$cond1$i = 0, $or$cond1$i183 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond7$not$i = 0, $or$cond8$i = 0, $or$cond97$i = 0, $or$cond98$i = 0, $or$i = 0, $or$i$i = 0, $or$i$i$i = 0;
 var $or$i194 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0, $or23 = 0, $or232$i$i = 0;
 var $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $parent$i = 0, $parent$i$i = 0, $parent$i159 = 0, $parent$i40$i = 0;
 var $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0, $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0;
 var $rsize$0$lcssa$i = 0, $rsize$08$i = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i143 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0, $shl116$i$i = 0, $shl12 = 0;
 var $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl222$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0, $shl316$i$i = 0, $shl326$i$i = 0;
 var $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0, $shl84$i$i = 0, $shl9$i = 0;
 var $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i146 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr124$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i147 = 0, $shr19$i = 0, $shr194$i = 0, $shr20$i = 0, $shr214$i$i = 0;
 var $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr323$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0, $shr392$i = 0, $shr4$i = 0;
 var $shr42$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i141 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i144 = 0, $shr72$i = 0, $shr72$i$i = 0, $shr75$i = 0;
 var $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0, $sp$0$i$i = 0, $sp$0$i$i$i = 0;
 var $sp$0108$i = 0, $sp$1107$i = 0, $ssize$2$ph$i = 0, $sub = 0, $sub$i = 0, $sub$i138 = 0, $sub$i180 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub$ptr$sub$tsize$4$i = 0, $sub10$i = 0, $sub101$i = 0, $sub101$rsize$4$i = 0;
 var $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0, $sub31$rsize$0$i = 0, $sub313$i$i = 0;
 var $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0, $sub70$i = 0, $sub71$i$i = 0;
 var $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$796$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0, $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0;
 var $tobool97$i$i = 0, $tsize$2657583$i = 0, $tsize$4$i = 0, $tsize$795$i = 0, $v$0$i = 0, $v$0$lcssa$i = 0, $v$09$i = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$4$ph$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = load4(7200);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (7240 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = load4($1);
    $fd9 = ((($2)) + 8|0);
    $3 = load4($fd9);
    $cmp10 = ($arrayidx|0)==($3|0);
    do {
     if ($cmp10) {
      $shl12 = 1 << $add8;
      $neg13 = $shl12 ^ -1;
      $and14 = $0 & $neg13;
      store4(7200,$and14);
     } else {
      $4 = load4((7216));
      $cmp15 = ($3>>>0)<($4>>>0);
      if ($cmp15) {
       _abort();
       // unreachable;
      }
      $bk = ((($3)) + 12|0);
      $5 = load4($bk);
      $cmp16 = ($5|0)==($2|0);
      if ($cmp16) {
       store4($bk,$arrayidx);
       store4($1,$3);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $shl22 = $add8 << 3;
    $or23 = $shl22 | 3;
    $head = ((($2)) + 4|0);
    store4($head,$or23);
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $6 = load4($head25);
    $or26 = $6 | 1;
    store4($head25,$or26);
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $7 = load4((7208));
   $cmp29 = ($cond>>>0)>($7>>>0);
   if ($cmp29) {
    $cmp31 = ($shr3|0)==(0);
    if (!($cmp31)) {
     $shl35 = $shr3 << $shr;
     $shl37 = 2 << $shr;
     $sub = (0 - ($shl37))|0;
     $or40 = $shl37 | $sub;
     $and41 = $shl35 & $or40;
     $sub42 = (0 - ($and41))|0;
     $and43 = $and41 & $sub42;
     $sub44 = (($and43) + -1)|0;
     $shr45 = $sub44 >>> 12;
     $and46 = $shr45 & 16;
     $shr47 = $sub44 >>> $and46;
     $shr48 = $shr47 >>> 5;
     $and49 = $shr48 & 8;
     $add50 = $and49 | $and46;
     $shr51 = $shr47 >>> $and49;
     $shr52 = $shr51 >>> 2;
     $and53 = $shr52 & 4;
     $add54 = $add50 | $and53;
     $shr55 = $shr51 >>> $and53;
     $shr56 = $shr55 >>> 1;
     $and57 = $shr56 & 2;
     $add58 = $add54 | $and57;
     $shr59 = $shr55 >>> $and57;
     $shr60 = $shr59 >>> 1;
     $and61 = $shr60 & 1;
     $add62 = $add58 | $and61;
     $shr63 = $shr59 >>> $and61;
     $add64 = (($add62) + ($shr63))|0;
     $shl65 = $add64 << 1;
     $arrayidx66 = (7240 + ($shl65<<2)|0);
     $8 = ((($arrayidx66)) + 8|0);
     $9 = load4($8);
     $fd69 = ((($9)) + 8|0);
     $10 = load4($fd69);
     $cmp70 = ($arrayidx66|0)==($10|0);
     do {
      if ($cmp70) {
       $shl72 = 1 << $add64;
       $neg73 = $shl72 ^ -1;
       $and74 = $0 & $neg73;
       store4(7200,$and74);
       $14 = $and74;
      } else {
       $11 = load4((7216));
       $cmp76 = ($10>>>0)<($11>>>0);
       if ($cmp76) {
        _abort();
        // unreachable;
       }
       $bk78 = ((($10)) + 12|0);
       $12 = load4($bk78);
       $cmp79 = ($12|0)==($9|0);
       if ($cmp79) {
        store4($bk78,$arrayidx66);
        store4($8,$10);
        $14 = $0;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $shl90 = $add64 << 3;
     $sub91 = (($shl90) - ($cond))|0;
     $or93 = $cond | 3;
     $head94 = ((($9)) + 4|0);
     store4($head94,$or93);
     $add$ptr95 = (($9) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     store4($head97,$or96);
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     store4($add$ptr98,$sub91);
     $cmp99 = ($7|0)==(0);
     if (!($cmp99)) {
      $13 = load4((7220));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (7240 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(7200,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((7216));
       $cmp113 = ($16>>>0)<($17>>>0);
       if ($cmp113) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $15;$F104$0 = $16;
       }
      }
      store4($$pre$phiZ2D,$13);
      $bk122 = ((($F104$0)) + 12|0);
      store4($bk122,$13);
      $fd123 = ((($13)) + 8|0);
      store4($fd123,$F104$0);
      $bk124 = ((($13)) + 12|0);
      store4($bk124,$arrayidx103);
     }
     store4((7208),$sub91);
     store4((7220),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((7204));
    $cmp128 = ($18|0)==(0);
    if ($cmp128) {
     $nb$0 = $cond;
    } else {
     $sub$i = (0 - ($18))|0;
     $and$i = $18 & $sub$i;
     $sub2$i = (($and$i) + -1)|0;
     $shr$i = $sub2$i >>> 12;
     $and3$i = $shr$i & 16;
     $shr4$i = $sub2$i >>> $and3$i;
     $shr5$i = $shr4$i >>> 5;
     $and6$i = $shr5$i & 8;
     $add$i = $and6$i | $and3$i;
     $shr7$i = $shr4$i >>> $and6$i;
     $shr8$i = $shr7$i >>> 2;
     $and9$i = $shr8$i & 4;
     $add10$i = $add$i | $and9$i;
     $shr11$i = $shr7$i >>> $and9$i;
     $shr12$i = $shr11$i >>> 1;
     $and13$i = $shr12$i & 2;
     $add14$i = $add10$i | $and13$i;
     $shr15$i = $shr11$i >>> $and13$i;
     $shr16$i = $shr15$i >>> 1;
     $and17$i = $shr16$i & 1;
     $add18$i = $add14$i | $and17$i;
     $shr19$i = $shr15$i >>> $and17$i;
     $add20$i = (($add18$i) + ($shr19$i))|0;
     $arrayidx$i = (7504 + ($add20$i<<2)|0);
     $19 = load4($arrayidx$i);
     $head$i = ((($19)) + 4|0);
     $20 = load4($head$i);
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $arrayidx233$i = ((($19)) + 16|0);
     $21 = load4($arrayidx233$i);
     $not$cmp4$i = ($21|0)==(0|0);
     $$sink5$i = $not$cmp4$i&1;
     $arrayidx276$i = (((($19)) + 16|0) + ($$sink5$i<<2)|0);
     $22 = load4($arrayidx276$i);
     $cmp287$i = ($22|0)==(0|0);
     if ($cmp287$i) {
      $rsize$0$lcssa$i = $sub22$i;$v$0$lcssa$i = $19;
     } else {
      $23 = $22;$rsize$08$i = $sub22$i;$v$09$i = $19;
      while(1) {
       $head29$i = ((($23)) + 4|0);
       $24 = load4($head29$i);
       $and30$i = $24 & -8;
       $sub31$i = (($and30$i) - ($cond))|0;
       $cmp32$i = ($sub31$i>>>0)<($rsize$08$i>>>0);
       $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$08$i;
       $$v$0$i = $cmp32$i ? $23 : $v$09$i;
       $arrayidx23$i = ((($23)) + 16|0);
       $25 = load4($arrayidx23$i);
       $not$cmp$i = ($25|0)==(0|0);
       $$sink$i = $not$cmp$i&1;
       $arrayidx27$i = (((($23)) + 16|0) + ($$sink$i<<2)|0);
       $26 = load4($arrayidx27$i);
       $cmp28$i = ($26|0)==(0|0);
       if ($cmp28$i) {
        $rsize$0$lcssa$i = $sub31$rsize$0$i;$v$0$lcssa$i = $$v$0$i;
        break;
       } else {
        $23 = $26;$rsize$08$i = $sub31$rsize$0$i;$v$09$i = $$v$0$i;
       }
      }
     }
     $27 = load4((7216));
     $cmp33$i = ($v$0$lcssa$i>>>0)<($27>>>0);
     if ($cmp33$i) {
      _abort();
      // unreachable;
     }
     $add$ptr$i = (($v$0$lcssa$i) + ($cond)|0);
     $cmp35$i = ($v$0$lcssa$i>>>0)<($add$ptr$i>>>0);
     if (!($cmp35$i)) {
      _abort();
      // unreachable;
     }
     $parent$i = ((($v$0$lcssa$i)) + 24|0);
     $28 = load4($parent$i);
     $bk$i = ((($v$0$lcssa$i)) + 12|0);
     $29 = load4($bk$i);
     $cmp40$i = ($29|0)==($v$0$lcssa$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$lcssa$i)) + 20|0);
       $33 = load4($arrayidx61$i);
       $cmp62$i = ($33|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$lcssa$i)) + 16|0);
        $34 = load4($arrayidx65$i);
        $cmp66$i = ($34|0)==(0|0);
        if ($cmp66$i) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $34;$RP$1$i = $arrayidx65$i;
        }
       } else {
        $R$1$i = $33;$RP$1$i = $arrayidx61$i;
       }
       while(1) {
        $arrayidx71$i = ((($R$1$i)) + 20|0);
        $35 = load4($arrayidx71$i);
        $cmp72$i = ($35|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $35;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $36 = load4($arrayidx75$i);
        $cmp76$i = ($36|0)==(0|0);
        if ($cmp76$i) {
         break;
        } else {
         $R$1$i = $36;$RP$1$i = $arrayidx75$i;
        }
       }
       $cmp81$i = ($RP$1$i>>>0)<($27>>>0);
       if ($cmp81$i) {
        _abort();
        // unreachable;
       } else {
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$lcssa$i)) + 8|0);
       $30 = load4($fd$i);
       $cmp45$i = ($30>>>0)<($27>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($30)) + 12|0);
       $31 = load4($bk47$i);
       $cmp48$i = ($31|0)==($v$0$lcssa$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($29)) + 8|0);
       $32 = load4($fd50$i);
       $cmp51$i = ($32|0)==($v$0$lcssa$i|0);
       if ($cmp51$i) {
        store4($bk47$i,$29);
        store4($fd50$i,$30);
        $R$3$i = $29;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $cmp90$i = ($28|0)==(0|0);
     L73: do {
      if (!($cmp90$i)) {
       $index$i = ((($v$0$lcssa$i)) + 28|0);
       $37 = load4($index$i);
       $arrayidx94$i = (7504 + ($37<<2)|0);
       $38 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$lcssa$i|0)==($38|0);
       do {
        if ($cmp95$i) {
         store4($arrayidx94$i,$R$3$i);
         $cond$i = ($R$3$i|0)==(0|0);
         if ($cond$i) {
          $shl$i = 1 << $37;
          $neg$i = $shl$i ^ -1;
          $and103$i = $18 & $neg$i;
          store4((7204),$and103$i);
          break L73;
         }
        } else {
         $39 = load4((7216));
         $cmp107$i = ($28>>>0)<($39>>>0);
         if ($cmp107$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx113$i = ((($28)) + 16|0);
          $40 = load4($arrayidx113$i);
          $not$cmp114$i = ($40|0)!=($v$0$lcssa$i|0);
          $$sink2$i = $not$cmp114$i&1;
          $arrayidx121$i = (((($28)) + 16|0) + ($$sink2$i<<2)|0);
          store4($arrayidx121$i,$R$3$i);
          $cmp126$i = ($R$3$i|0)==(0|0);
          if ($cmp126$i) {
           break L73;
          } else {
           break;
          }
         }
        }
       } while(0);
       $41 = load4((7216));
       $cmp130$i = ($R$3$i>>>0)<($41>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       store4($parent135$i,$28);
       $arrayidx137$i = ((($v$0$lcssa$i)) + 16|0);
       $42 = load4($arrayidx137$i);
       $cmp138$i = ($42|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($42>>>0)<($41>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          store4($arrayidx148$i,$42);
          $parent149$i = ((($42)) + 24|0);
          store4($parent149$i,$R$3$i);
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$lcssa$i)) + 20|0);
       $43 = load4($arrayidx154$i);
       $cmp155$i = ($43|0)==(0|0);
       if (!($cmp155$i)) {
        $44 = load4((7216));
        $cmp159$i = ($43>>>0)<($44>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$43);
         $parent166$i = ((($43)) + 24|0);
         store4($parent166$i,$R$3$i);
         break;
        }
       }
      }
     } while(0);
     $cmp174$i = ($rsize$0$lcssa$i>>>0)<(16);
     if ($cmp174$i) {
      $add177$i = (($rsize$0$lcssa$i) + ($cond))|0;
      $or178$i = $add177$i | 3;
      $head179$i = ((($v$0$lcssa$i)) + 4|0);
      store4($head179$i,$or178$i);
      $add$ptr181$i = (($v$0$lcssa$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $45 = load4($head182$i);
      $or183$i = $45 | 1;
      store4($head182$i,$or183$i);
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$lcssa$i)) + 4|0);
      store4($head187$i,$or186$i);
      $or188$i = $rsize$0$lcssa$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      store4($head189$i,$or188$i);
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$lcssa$i)|0);
      store4($add$ptr190$i,$rsize$0$lcssa$i);
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $46 = load4((7220));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (7240 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $0 & $shl198$i;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $0 | $shl198$i;
        store4(7200,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $47 = ((($arrayidx196$i)) + 8|0);
        $48 = load4($47);
        $49 = load4((7216));
        $cmp208$i = ($48>>>0)<($49>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $47;$F197$0$i = $48;
        }
       }
       store4($$pre$phi$iZ2D,$46);
       $bk218$i = ((($F197$0$i)) + 12|0);
       store4($bk218$i,$46);
       $fd219$i = ((($46)) + 8|0);
       store4($fd219$i,$F197$0$i);
       $bk220$i = ((($46)) + 12|0);
       store4($bk220$i,$arrayidx196$i);
      }
      store4((7208),$rsize$0$lcssa$i);
      store4((7220),$add$ptr$i);
     }
     $add$ptr225$i = ((($v$0$lcssa$i)) + 8|0);
     $retval$0 = $add$ptr225$i;
     STACKTOP = sp;return ($retval$0|0);
    }
   } else {
    $nb$0 = $cond;
   }
  } else {
   $cmp139 = ($bytes>>>0)>(4294967231);
   if ($cmp139) {
    $nb$0 = -1;
   } else {
    $add144 = (($bytes) + 11)|0;
    $and145 = $add144 & -8;
    $50 = load4((7204));
    $cmp146 = ($50|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i138 = (0 - ($and145))|0;
     $shr$i139 = $add144 >>> 8;
     $cmp$i = ($shr$i139|0)==(0);
     if ($cmp$i) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i139) + 1048320)|0;
       $shr5$i141 = $sub4$i >>> 16;
       $and$i142 = $shr5$i141 & 8;
       $shl$i143 = $shr$i139 << $and$i142;
       $sub6$i = (($shl$i143) + 520192)|0;
       $shr7$i144 = $sub6$i >>> 16;
       $and8$i = $shr7$i144 & 4;
       $add$i145 = $and8$i | $and$i142;
       $shl9$i = $shl$i143 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i146 = $sub10$i >>> 16;
       $and12$i = $shr11$i146 & 2;
       $add13$i = $add$i145 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i147 = $shl15$i >>> 15;
       $add17$i = (($sub14$i) + ($shr16$i147))|0;
       $shl18$i = $add17$i << 1;
       $add19$i = (($add17$i) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i148 = $shr20$i & 1;
       $add22$i = $and21$i148 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i149 = (7504 + ($idx$0$i<<2)|0);
     $51 = load4($arrayidx$i149);
     $cmp24$i = ($51|0)==(0|0);
     L117: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i138;$t$2$i = 0;$v$3$i = 0;
       label = 81;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i150 = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i150;
       $rsize$0$i = $sub$i138;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i = $51;$v$0$i = 0;
       while(1) {
        $head$i151 = ((($t$0$i)) + 4|0);
        $52 = load4($head$i151);
        $and32$i = $52 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$49$i = 0;$t$48$i = $t$0$i;$v$410$i = $t$0$i;
          label = 85;
          break L117;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i;
         }
        } else {
         $rsize$1$i = $rsize$0$i;$v$1$i = $v$0$i;
        }
        $arrayidx40$i = ((($t$0$i)) + 20|0);
        $53 = load4($arrayidx40$i);
        $shr42$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i)) + 16|0) + ($shr42$i<<2)|0);
        $54 = load4($arrayidx44$i);
        $cmp45$i152 = ($53|0)==(0|0);
        $cmp46$i = ($53|0)==($54|0);
        $or$cond1$i = $cmp45$i152 | $cmp46$i;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $53;
        $cmp49$i = ($54|0)==(0|0);
        $not$cmp494$i = $cmp49$i ^ 1;
        $shl52$i = $not$cmp494$i&1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 81;
         break;
        } else {
         $rsize$0$i = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i = $54;$v$0$i = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 81) {
      $cmp55$i = ($t$2$i|0)==(0|0);
      $cmp57$i = ($v$3$i|0)==(0|0);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i = $shl60$i | $sub63$i;
       $and64$i = $50 & $or$i;
       $cmp65$i = ($and64$i|0)==(0);
       if ($cmp65$i) {
        $nb$0 = $and145;
        break;
       }
       $sub67$i = (0 - ($and64$i))|0;
       $and68$i = $and64$i & $sub67$i;
       $sub70$i = (($and68$i) + -1)|0;
       $shr72$i = $sub70$i >>> 12;
       $and73$i = $shr72$i & 16;
       $shr75$i = $sub70$i >>> $and73$i;
       $shr76$i = $shr75$i >>> 5;
       $and77$i = $shr76$i & 8;
       $add78$i = $and77$i | $and73$i;
       $shr79$i = $shr75$i >>> $and77$i;
       $shr80$i = $shr79$i >>> 2;
       $and81$i = $shr80$i & 4;
       $add82$i = $add78$i | $and81$i;
       $shr83$i = $shr79$i >>> $and81$i;
       $shr84$i = $shr83$i >>> 1;
       $and85$i = $shr84$i & 2;
       $add86$i = $add82$i | $and85$i;
       $shr87$i = $shr83$i >>> $and85$i;
       $shr88$i = $shr87$i >>> 1;
       $and89$i = $shr88$i & 1;
       $add90$i = $add86$i | $and89$i;
       $shr91$i = $shr87$i >>> $and89$i;
       $add92$i = (($add90$i) + ($shr91$i))|0;
       $arrayidx94$i153 = (7504 + ($add92$i<<2)|0);
       $55 = load4($arrayidx94$i153);
       $t$4$ph$i = $55;$v$4$ph$i = 0;
      } else {
       $t$4$ph$i = $t$2$i;$v$4$ph$i = $v$3$i;
      }
      $cmp977$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp977$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$4$ph$i;
      } else {
       $rsize$49$i = $rsize$3$i;$t$48$i = $t$4$ph$i;$v$410$i = $v$4$ph$i;
       label = 85;
      }
     }
     if ((label|0) == 85) {
      while(1) {
       label = 0;
       $head99$i = ((($t$48$i)) + 4|0);
       $56 = load4($head99$i);
       $and100$i = $56 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $57 = load4($arrayidx106$i);
       $not$cmp107$i = ($57|0)==(0|0);
       $$sink$i154 = $not$cmp107$i&1;
       $arrayidx113$i155 = (((($t$48$i)) + 16|0) + ($$sink$i154<<2)|0);
       $58 = load4($arrayidx113$i155);
       $cmp97$i = ($58|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $58;$v$410$i = $t$4$v$4$i;
        label = 85;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $59 = load4((7208));
      $sub118$i = (($59) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $60 = load4((7216));
       $cmp121$i = ($v$4$lcssa$i>>>0)<($60>>>0);
       if ($cmp121$i) {
        _abort();
        // unreachable;
       }
       $add$ptr$i158 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i158>>>0);
       if (!($cmp123$i)) {
        _abort();
        // unreachable;
       }
       $parent$i159 = ((($v$4$lcssa$i)) + 24|0);
       $61 = load4($parent$i159);
       $bk$i160 = ((($v$4$lcssa$i)) + 12|0);
       $62 = load4($bk$i160);
       $cmp128$i = ($62|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $66 = load4($arrayidx151$i);
         $cmp152$i = ($66|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $67 = load4($arrayidx155$i);
          $cmp156$i = ($67|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i168 = 0;
           break;
          } else {
           $R$1$i165 = $67;$RP$1$i164 = $arrayidx155$i;
          }
         } else {
          $R$1$i165 = $66;$RP$1$i164 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i165)) + 20|0);
          $68 = load4($arrayidx161$i);
          $cmp162$i = ($68|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i165 = $68;$RP$1$i164 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i166 = ((($R$1$i165)) + 16|0);
          $69 = load4($arrayidx165$i166);
          $cmp166$i = ($69|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i165 = $69;$RP$1$i164 = $arrayidx165$i166;
          }
         }
         $cmp171$i = ($RP$1$i164>>>0)<($60>>>0);
         if ($cmp171$i) {
          _abort();
          // unreachable;
         } else {
          store4($RP$1$i164,0);
          $R$3$i168 = $R$1$i165;
          break;
         }
        } else {
         $fd$i161 = ((($v$4$lcssa$i)) + 8|0);
         $63 = load4($fd$i161);
         $cmp133$i = ($63>>>0)<($60>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($63)) + 12|0);
         $64 = load4($bk136$i);
         $cmp137$i = ($64|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($62)) + 8|0);
         $65 = load4($fd139$i);
         $cmp140$i = ($65|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          store4($bk136$i,$62);
          store4($fd139$i,$63);
          $R$3$i168 = $62;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $cmp180$i = ($61|0)==(0|0);
       L164: do {
        if ($cmp180$i) {
         $83 = $50;
        } else {
         $index$i169 = ((($v$4$lcssa$i)) + 28|0);
         $70 = load4($index$i169);
         $arrayidx184$i = (7504 + ($70<<2)|0);
         $71 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($71|0);
         do {
          if ($cmp185$i) {
           store4($arrayidx184$i,$R$3$i168);
           $cond3$i = ($R$3$i168|0)==(0|0);
           if ($cond3$i) {
            $shl192$i = 1 << $70;
            $neg$i170 = $shl192$i ^ -1;
            $and194$i = $50 & $neg$i170;
            store4((7204),$and194$i);
            $83 = $and194$i;
            break L164;
           }
          } else {
           $72 = load4((7216));
           $cmp198$i = ($61>>>0)<($72>>>0);
           if ($cmp198$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx204$i = ((($61)) + 16|0);
            $73 = load4($arrayidx204$i);
            $not$cmp205$i = ($73|0)!=($v$4$lcssa$i|0);
            $$sink2$i172 = $not$cmp205$i&1;
            $arrayidx212$i = (((($61)) + 16|0) + ($$sink2$i172<<2)|0);
            store4($arrayidx212$i,$R$3$i168);
            $cmp217$i = ($R$3$i168|0)==(0|0);
            if ($cmp217$i) {
             $83 = $50;
             break L164;
            } else {
             break;
            }
           }
          }
         } while(0);
         $74 = load4((7216));
         $cmp221$i = ($R$3$i168>>>0)<($74>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i168)) + 24|0);
         store4($parent226$i,$61);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $75 = load4($arrayidx228$i);
         $cmp229$i = ($75|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($75>>>0)<($74>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i168)) + 16|0);
            store4($arrayidx239$i,$75);
            $parent240$i = ((($75)) + 24|0);
            store4($parent240$i,$R$3$i168);
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $76 = load4($arrayidx245$i);
         $cmp246$i = ($76|0)==(0|0);
         if ($cmp246$i) {
          $83 = $50;
         } else {
          $77 = load4((7216));
          $cmp250$i = ($76>>>0)<($77>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i168)) + 20|0);
           store4($arrayidx256$i,$76);
           $parent257$i = ((($76)) + 24|0);
           store4($parent257$i,$R$3$i168);
           $83 = $50;
           break;
          }
         }
        }
       } while(0);
       $cmp265$i = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($cmp265$i) {
         $add268$i = (($rsize$4$lcssa$i) + ($and145))|0;
         $or270$i = $add268$i | 3;
         $head271$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $78 = load4($head274$i);
         $or275$i = $78 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i158)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i158) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (7240 + ($shl288$i<<2)|0);
          $79 = load4(7200);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $79 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $79 | $shl291$i;
           store4(7200,$or297$i);
           $$pre$i175 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i176Z2D = $$pre$i175;$F290$0$i = $arrayidx289$i;
          } else {
           $80 = ((($arrayidx289$i)) + 8|0);
           $81 = load4($80);
           $82 = load4((7216));
           $cmp301$i = ($81>>>0)<($82>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i176Z2D = $80;$F290$0$i = $81;
           }
          }
          store4($$pre$phi$i176Z2D,$add$ptr$i158);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i158);
          $fd312$i = ((($add$ptr$i158)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i158)) + 12|0);
          store4($bk313$i,$arrayidx289$i);
          break;
         }
         $shr318$i = $rsize$4$lcssa$i >>> 8;
         $cmp319$i = ($shr318$i|0)==(0);
         if ($cmp319$i) {
          $I316$0$i = 0;
         } else {
          $cmp323$i = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($cmp323$i) {
           $I316$0$i = 31;
          } else {
           $sub329$i = (($shr318$i) + 1048320)|0;
           $shr330$i = $sub329$i >>> 16;
           $and331$i = $shr330$i & 8;
           $shl333$i = $shr318$i << $and331$i;
           $sub334$i = (($shl333$i) + 520192)|0;
           $shr335$i = $sub334$i >>> 16;
           $and336$i = $shr335$i & 4;
           $add337$i = $and336$i | $and331$i;
           $shl338$i = $shl333$i << $and336$i;
           $sub339$i = (($shl338$i) + 245760)|0;
           $shr340$i = $sub339$i >>> 16;
           $and341$i = $shr340$i & 2;
           $add342$i = $add337$i | $and341$i;
           $sub343$i = (14 - ($add342$i))|0;
           $shl344$i = $shl338$i << $and341$i;
           $shr345$i = $shl344$i >>> 15;
           $add346$i = (($sub343$i) + ($shr345$i))|0;
           $shl347$i = $add346$i << 1;
           $add348$i = (($add346$i) + 7)|0;
           $shr349$i = $rsize$4$lcssa$i >>> $add348$i;
           $and350$i = $shr349$i & 1;
           $add351$i = $and350$i | $shl347$i;
           $I316$0$i = $add351$i;
          }
         }
         $arrayidx355$i = (7504 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i158)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i158)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $83 & $shl362$i;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $83 | $shl362$i;
          store4((7204),$or368$i);
          store4($arrayidx355$i,$add$ptr$i158);
          $parent369$i = ((($add$ptr$i158)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i158)) + 12|0);
          store4($bk370$i,$add$ptr$i158);
          $fd371$i = ((($add$ptr$i158)) + 8|0);
          store4($fd371$i,$add$ptr$i158);
          break;
         }
         $84 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $84;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $85 = load4($head386$i);
          $and387$i = $85 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 139;
           break;
          }
          $shr392$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr392$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $86 = load4($arrayidx394$i);
          $cmp396$i = ($86|0)==(0|0);
          if ($cmp396$i) {
           label = 136;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $86;
          }
         }
         if ((label|0) == 136) {
          $87 = load4((7216));
          $cmp401$i = ($arrayidx394$i>>>0)<($87>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           store4($arrayidx394$i,$add$ptr$i158);
           $parent406$i = ((($add$ptr$i158)) + 24|0);
           store4($parent406$i,$T$0$i);
           $bk407$i = ((($add$ptr$i158)) + 12|0);
           store4($bk407$i,$add$ptr$i158);
           $fd408$i = ((($add$ptr$i158)) + 8|0);
           store4($fd408$i,$add$ptr$i158);
           break;
          }
         }
         else if ((label|0) == 139) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $88 = load4($fd416$i);
          $89 = load4((7216));
          $cmp422$i = ($88>>>0)>=($89>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($89>>>0);
          $90 = $cmp422$i & $not$cmp418$i;
          if ($90) {
           $bk429$i = ((($88)) + 12|0);
           store4($bk429$i,$add$ptr$i158);
           store4($fd416$i,$add$ptr$i158);
           $fd431$i = ((($add$ptr$i158)) + 8|0);
           store4($fd431$i,$88);
           $bk432$i = ((($add$ptr$i158)) + 12|0);
           store4($bk432$i,$T$0$i);
           $parent433$i = ((($add$ptr$i158)) + 24|0);
           store4($parent433$i,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $add$ptr441$i = ((($v$4$lcssa$i)) + 8|0);
       $retval$0 = $add$ptr441$i;
       STACKTOP = sp;return ($retval$0|0);
      } else {
       $nb$0 = $and145;
      }
     }
    }
   }
  }
 } while(0);
 $91 = load4((7208));
 $cmp156 = ($91>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($91) - ($nb$0))|0;
  $92 = load4((7220));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($92) + ($nb$0)|0);
   store4((7220),$add$ptr166);
   store4((7208),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($92)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((7208),0);
   store4((7220),0);
   $or176 = $91 | 3;
   $head177 = ((($92)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($92) + ($91)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $93 = load4($head179);
   $or180 = $93 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($92)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = load4((7212));
 $cmp186 = ($94>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($94) - ($nb$0))|0;
  store4((7212),$sub190);
  $95 = load4((7224));
  $add$ptr193 = (($95) + ($nb$0)|0);
  store4((7224),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($95)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($95)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $96 = load4(7672);
 $cmp$i177 = ($96|0)==(0);
 if ($cmp$i177) {
  store4((7680),4096);
  store4((7676),4096);
  store4((7684),-1);
  store4((7688),-1);
  store4((7692),0);
  store4((7644),0);
  $97 = $magic$i$i;
  $xor$i$i = $97 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(7672,$and6$i$i);
  $98 = 4096;
 } else {
  $$pre$i178 = load4((7680));
  $98 = $$pre$i178;
 }
 $add$i179 = (($nb$0) + 48)|0;
 $sub$i180 = (($nb$0) + 47)|0;
 $add9$i = (($98) + ($sub$i180))|0;
 $neg$i181 = (0 - ($98))|0;
 $and11$i = $add9$i & $neg$i181;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $99 = load4((7640));
 $cmp15$i = ($99|0)==(0);
 if (!($cmp15$i)) {
  $100 = load4((7632));
  $add17$i182 = (($100) + ($and11$i))|0;
  $cmp19$i = ($add17$i182>>>0)<=($100>>>0);
  $cmp21$i = ($add17$i182>>>0)>($99>>>0);
  $or$cond1$i183 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i183) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $101 = load4((7644));
 $and29$i = $101 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L244: do {
  if ($tobool30$i) {
   $102 = load4((7224));
   $cmp32$i184 = ($102|0)==(0|0);
   L246: do {
    if ($cmp32$i184) {
     label = 163;
    } else {
     $sp$0$i$i = (7648);
     while(1) {
      $103 = load4($sp$0$i$i);
      $cmp$i11$i = ($103>>>0)>($102>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $104 = load4($size$i$i);
       $add$ptr$i$i = (($103) + ($104)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($102>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $105 = load4($next$i$i);
      $cmp3$i$i = ($105|0)==(0|0);
      if ($cmp3$i$i) {
       label = 163;
       break L246;
      } else {
       $sp$0$i$i = $105;
      }
     }
     $add77$i = (($add9$i) - ($94))|0;
     $and80$i = $add77$i & $neg$i181;
     $cmp81$i190 = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i190) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $110 = load4($sp$0$i$i);
      $111 = load4($size$i$i);
      $add$ptr$i192 = (($110) + ($111)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i192|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if ($cmp89$i) {
        $tsize$2657583$i = $and80$i;
       } else {
        $tbase$796$i = $call83$i;$tsize$795$i = $and80$i;
        label = 180;
        break L244;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 171;
      }
     } else {
      $tsize$2657583$i = 0;
     }
    }
   } while(0);
   do {
    if ((label|0) == 163) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if ($cmp38$i) {
      $tsize$2657583$i = 0;
     } else {
      $106 = $call37$i;
      $107 = load4((7676));
      $sub41$i = (($107) + -1)|0;
      $and42$i = $sub41$i & $106;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($106))|0;
      $neg48$i = (0 - ($107))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($106))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $108 = load4((7632));
      $add54$i = (($and11$add51$i) + ($108))|0;
      $cmp55$i185 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i186 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i187 = $cmp55$i185 & $cmp57$i186;
      if ($or$cond$i187) {
       $109 = load4((7640));
       $cmp60$i = ($109|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($108>>>0);
        $cmp66$i189 = ($add54$i>>>0)>($109>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i189;
        if ($or$cond2$i) {
         $tsize$2657583$i = 0;
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$796$i = $call37$i;$tsize$795$i = $and11$add51$i;
        label = 180;
        break L244;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 171;
       }
      } else {
       $tsize$2657583$i = 0;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 171) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i179>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     if (!($or$cond3$i)) {
      $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
      if ($cmp118$i) {
       $tsize$2657583$i = 0;
       break;
      } else {
       $tbase$796$i = $br$2$ph$i;$tsize$795$i = $ssize$2$ph$i;
       label = 180;
       break L244;
      }
     }
     $112 = load4((7680));
     $sub99$i = (($sub$i180) - ($ssize$2$ph$i))|0;
     $add101$i = (($sub99$i) + ($112))|0;
     $neg103$i = (0 - ($112))|0;
     $and104$i = $add101$i & $neg103$i;
     $cmp105$i = ($and104$i>>>0)<(2147483647);
     if (!($cmp105$i)) {
      $tbase$796$i = $br$2$ph$i;$tsize$795$i = $ssize$2$ph$i;
      label = 180;
      break L244;
     }
     $call107$i = (_sbrk(($and104$i|0))|0);
     $cmp108$i = ($call107$i|0)==((-1)|0);
     if ($cmp108$i) {
      (_sbrk(($sub112$i|0))|0);
      $tsize$2657583$i = 0;
      break;
     } else {
      $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
      $tbase$796$i = $br$2$ph$i;$tsize$795$i = $add110$i;
      label = 180;
      break L244;
     }
    }
   } while(0);
   $113 = load4((7644));
   $or$i194 = $113 | 4;
   store4((7644),$or$i194);
   $tsize$4$i = $tsize$2657583$i;
   label = 178;
  } else {
   $tsize$4$i = 0;
   label = 178;
  }
 } while(0);
 if ((label|0) == 178) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i195 = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i195 & $cmp135$i;
   $cmp137$i196 = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i196 & $or$cond4$i;
   $sub$ptr$lhs$cast$i = $call132$i;
   $sub$ptr$rhs$cast$i = $call131$i;
   $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
   $add140$i = (($nb$0) + 40)|0;
   $cmp141$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
   $sub$ptr$sub$tsize$4$i = $cmp141$i ? $sub$ptr$sub$i : $tsize$4$i;
   $or$cond7$not$i = $or$cond7$i ^ 1;
   $cmp14799$i = ($call131$i|0)==((-1)|0);
   $not$cmp141$i = $cmp141$i ^ 1;
   $cmp147$i = $cmp14799$i | $not$cmp141$i;
   $or$cond97$i = $cmp147$i | $or$cond7$not$i;
   if (!($or$cond97$i)) {
    $tbase$796$i = $call131$i;$tsize$795$i = $sub$ptr$sub$tsize$4$i;
    label = 180;
   }
  }
 }
 if ((label|0) == 180) {
  $114 = load4((7632));
  $add150$i = (($114) + ($tsize$795$i))|0;
  store4((7632),$add150$i);
  $115 = load4((7636));
  $cmp151$i = ($add150$i>>>0)>($115>>>0);
  if ($cmp151$i) {
   store4((7636),$add150$i);
  }
  $116 = load4((7224));
  $cmp157$i = ($116|0)==(0|0);
  do {
   if ($cmp157$i) {
    $117 = load4((7216));
    $cmp159$i198 = ($117|0)==(0|0);
    $cmp162$i199 = ($tbase$796$i>>>0)<($117>>>0);
    $or$cond8$i = $cmp159$i198 | $cmp162$i199;
    if ($or$cond8$i) {
     store4((7216),$tbase$796$i);
    }
    store4((7648),$tbase$796$i);
    store4((7652),$tsize$795$i);
    store4((7660),0);
    $118 = load4(7672);
    store4((7236),$118);
    store4((7232),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (7240 + ($shl$i13$i<<2)|0);
     $119 = ((($arrayidx$i14$i)) + 12|0);
     store4($119,$arrayidx$i14$i);
     $120 = ((($arrayidx$i14$i)) + 8|0);
     store4($120,$arrayidx$i14$i);
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$795$i) + -40)|0;
    $add$ptr$i16$i = ((($tbase$796$i)) + 8|0);
    $121 = $add$ptr$i16$i;
    $and$i17$i = $121 & 7;
    $cmp$i18$i = ($and$i17$i|0)==(0);
    $122 = (0 - ($121))|0;
    $and3$i$i = $122 & 7;
    $cond$i19$i = $cmp$i18$i ? 0 : $and3$i$i;
    $add$ptr4$i$i = (($tbase$796$i) + ($cond$i19$i)|0);
    $sub5$i$i = (($sub172$i) - ($cond$i19$i))|0;
    store4((7224),$add$ptr4$i$i);
    store4((7212),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $123 = load4((7688));
    store4((7228),$123);
   } else {
    $sp$0108$i = (7648);
    while(1) {
     $124 = load4($sp$0108$i);
     $size188$i = ((($sp$0108$i)) + 4|0);
     $125 = load4($size188$i);
     $add$ptr189$i = (($124) + ($125)|0);
     $cmp190$i = ($tbase$796$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 190;
      break;
     }
     $next$i = ((($sp$0108$i)) + 8|0);
     $126 = load4($next$i);
     $cmp186$i = ($126|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0108$i = $126;
     }
    }
    if ((label|0) == 190) {
     $sflags193$i = ((($sp$0108$i)) + 12|0);
     $127 = load4($sflags193$i);
     $and194$i203 = $127 & 8;
     $tobool195$i = ($and194$i203|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($116>>>0)>=($124>>>0);
      $cmp209$i = ($116>>>0)<($tbase$796$i>>>0);
      $or$cond98$i = $cmp209$i & $cmp203$i;
      if ($or$cond98$i) {
       $add212$i = (($125) + ($tsize$795$i))|0;
       store4($size188$i,$add212$i);
       $128 = load4((7212));
       $add$ptr$i49$i = ((($116)) + 8|0);
       $129 = $add$ptr$i49$i;
       $and$i50$i = $129 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $130 = (0 - ($129))|0;
       $and3$i52$i = $130 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($116) + ($cond$i53$i)|0);
       $add215$i = (($tsize$795$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($128) + ($add215$i))|0;
       store4((7224),$add$ptr4$i54$i);
       store4((7212),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $131 = load4((7688));
       store4((7228),$131);
       break;
      }
     }
    }
    $132 = load4((7216));
    $cmp218$i = ($tbase$796$i>>>0)<($132>>>0);
    if ($cmp218$i) {
     store4((7216),$tbase$796$i);
     $147 = $tbase$796$i;
    } else {
     $147 = $132;
    }
    $add$ptr227$i = (($tbase$796$i) + ($tsize$795$i)|0);
    $sp$1107$i = (7648);
    while(1) {
     $133 = load4($sp$1107$i);
     $cmp228$i = ($133|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 198;
      break;
     }
     $next231$i = ((($sp$1107$i)) + 8|0);
     $134 = load4($next231$i);
     $cmp224$i = ($134|0)==(0|0);
     if ($cmp224$i) {
      break;
     } else {
      $sp$1107$i = $134;
     }
    }
    if ((label|0) == 198) {
     $sflags235$i = ((($sp$1107$i)) + 12|0);
     $135 = load4($sflags235$i);
     $and236$i = $135 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1107$i,$tbase$796$i);
      $size245$i = ((($sp$1107$i)) + 4|0);
      $136 = load4($size245$i);
      $add246$i = (($136) + ($tsize$795$i))|0;
      store4($size245$i,$add246$i);
      $add$ptr$i21$i = ((($tbase$796$i)) + 8|0);
      $137 = $add$ptr$i21$i;
      $and$i22$i = $137 & 7;
      $cmp$i23$i = ($and$i22$i|0)==(0);
      $138 = (0 - ($137))|0;
      $and3$i24$i = $138 & 7;
      $cond$i25$i = $cmp$i23$i ? 0 : $and3$i24$i;
      $add$ptr4$i26$i = (($tbase$796$i) + ($cond$i25$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $139 = $add$ptr5$i$i;
      $and6$i27$i = $139 & 7;
      $cmp7$i$i = ($and6$i27$i|0)==(0);
      $140 = (0 - ($139))|0;
      $and13$i$i = $140 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i28$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i29$i = $add$ptr4$i26$i;
      $sub$ptr$sub$i30$i = (($sub$ptr$lhs$cast$i28$i) - ($sub$ptr$rhs$cast$i29$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i26$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i30$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i31$i = ((($add$ptr4$i26$i)) + 4|0);
      store4($head$i31$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($116|0);
      do {
       if ($cmp20$i$i) {
        $141 = load4((7212));
        $add$i$i = (($141) + ($sub18$i$i))|0;
        store4((7212),$add$i$i);
        store4((7224),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $142 = load4((7220));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($142|0);
        if ($cmp24$i$i) {
         $143 = load4((7208));
         $add26$i$i = (($143) + ($sub18$i$i))|0;
         store4((7208),$add26$i$i);
         store4((7220),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $144 = load4($head32$i$i);
        $and33$i$i = $144 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $144 & -8;
         $shr$i34$i = $144 >>> 3;
         $cmp38$i$i = ($144>>>0)<(256);
         L314: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $145 = load4($fd$i$i);
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $146 = load4($bk$i35$i);
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (7240 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($145|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($145>>>0)<($147>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($145)) + 12|0);
             $148 = load4($bk43$i$i);
             $cmp44$i$i = ($148|0)==($add$ptr16$i$i|0);
             if ($cmp44$i$i) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $cmp46$i38$i = ($146|0)==($145|0);
           if ($cmp46$i38$i) {
            $shl48$i$i = 1 << $shr$i34$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $149 = load4(7200);
            $and49$i$i = $149 & $neg$i$i;
            store4(7200,$and49$i$i);
            break;
           }
           $cmp54$i$i = ($146|0)==($arrayidx$i37$i|0);
           do {
            if ($cmp54$i$i) {
             $$pre5$i$i = ((($146)) + 8|0);
             $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
            } else {
             $cmp57$i$i = ($146>>>0)<($147>>>0);
             if ($cmp57$i$i) {
              _abort();
              // unreachable;
             }
             $fd59$i$i = ((($146)) + 8|0);
             $150 = load4($fd59$i$i);
             $cmp60$i$i = ($150|0)==($add$ptr16$i$i|0);
             if ($cmp60$i$i) {
              $fd68$pre$phi$i$iZ2D = $fd59$i$i;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $bk67$i$i = ((($145)) + 12|0);
           store4($bk67$i$i,$146);
           store4($fd68$pre$phi$i$iZ2D,$145);
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $151 = load4($parent$i40$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $152 = load4($bk74$i$i);
           $cmp75$i$i = ($152|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $156 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($156|0)==(0|0);
             if ($cmp97$i$i) {
              $157 = load4($child$i$i);
              $cmp100$i$i = ($157|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $157;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $156;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $158 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($158|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $158;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $159 = load4($arrayidx107$i$i);
              $cmp108$i$i = ($159|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $159;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             $cmp112$i$i = ($RP$1$i$i>>>0)<($147>>>0);
             if ($cmp112$i$i) {
              _abort();
              // unreachable;
             } else {
              store4($RP$1$i$i,0);
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $153 = load4($fd78$i$i);
             $cmp81$i$i = ($153>>>0)<($147>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($153)) + 12|0);
             $154 = load4($bk82$i$i);
             $cmp83$i$i = ($154|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($152)) + 8|0);
             $155 = load4($fd85$i$i);
             $cmp86$i$i = ($155|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              store4($bk82$i$i,$152);
              store4($fd85$i$i,$153);
              $R$3$i$i = $152;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $cmp120$i42$i = ($151|0)==(0|0);
           if ($cmp120$i42$i) {
            break;
           }
           $index$i43$i = ((($add$ptr16$i$i)) + 28|0);
           $160 = load4($index$i43$i);
           $arrayidx123$i$i = (7504 + ($160<<2)|0);
           $161 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($161|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             $cond2$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $160;
             $neg132$i$i = $shl131$i$i ^ -1;
             $162 = load4((7204));
             $and133$i$i = $162 & $neg132$i$i;
             store4((7204),$and133$i$i);
             break L314;
            } else {
             $163 = load4((7216));
             $cmp137$i$i = ($151>>>0)<($163>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx143$i$i = ((($151)) + 16|0);
              $164 = load4($arrayidx143$i$i);
              $not$cmp144$i$i = ($164|0)!=($add$ptr16$i$i|0);
              $$sink$i$i = $not$cmp144$i$i&1;
              $arrayidx151$i$i = (((($151)) + 16|0) + ($$sink$i$i<<2)|0);
              store4($arrayidx151$i$i,$R$3$i$i);
              $cmp156$i$i = ($R$3$i$i|0)==(0|0);
              if ($cmp156$i$i) {
               break L314;
              } else {
               break;
              }
             }
            }
           } while(0);
           $165 = load4((7216));
           $cmp160$i$i = ($R$3$i$i>>>0)<($165>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$151);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $166 = load4($child166$i$i);
           $cmp168$i$i = ($166|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($166>>>0)<($165>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              store4($arrayidx178$i$i,$166);
              $parent179$i$i = ((($166)) + 24|0);
              store4($parent179$i$i,$R$3$i$i);
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $167 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($167|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $168 = load4((7216));
           $cmp189$i$i = ($167>>>0)<($168>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            store4($arrayidx195$i$i,$167);
            $parent196$i$i = ((($167)) + 24|0);
            store4($parent196$i$i,$R$3$i$i);
            break;
           }
          }
         } while(0);
         $add$ptr205$i$i = (($add$ptr16$i$i) + ($and37$i$i)|0);
         $add206$i$i = (($and37$i$i) + ($sub18$i$i))|0;
         $oldfirst$0$i$i = $add$ptr205$i$i;$qsize$0$i$i = $add206$i$i;
        } else {
         $oldfirst$0$i$i = $add$ptr16$i$i;$qsize$0$i$i = $sub18$i$i;
        }
        $head208$i$i = ((($oldfirst$0$i$i)) + 4|0);
        $169 = load4($head208$i$i);
        $and209$i$i = $169 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl222$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (7240 + ($shl222$i$i<<2)|0);
         $170 = load4(7200);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $170 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $170 | $shl226$i$i;
           store4(7200,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $171 = ((($arrayidx223$i$i)) + 8|0);
           $172 = load4($171);
           $173 = load4((7216));
           $cmp236$i$i = ($172>>>0)<($173>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $171;$F224$0$i$i = $172;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i46$iZ2D,$add$ptr17$i$i);
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         store4($bk246$i$i,$add$ptr17$i$i);
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd247$i$i,$F224$0$i$i);
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk248$i$i,$arrayidx223$i$i);
         break;
        }
        $shr253$i$i = $qsize$0$i$i >>> 8;
        $cmp254$i$i = ($shr253$i$i|0)==(0);
        do {
         if ($cmp254$i$i) {
          $I252$0$i$i = 0;
         } else {
          $cmp258$i$i = ($qsize$0$i$i>>>0)>(16777215);
          if ($cmp258$i$i) {
           $I252$0$i$i = 31;
           break;
          }
          $sub262$i$i = (($shr253$i$i) + 1048320)|0;
          $shr263$i$i = $sub262$i$i >>> 16;
          $and264$i$i = $shr263$i$i & 8;
          $shl265$i$i = $shr253$i$i << $and264$i$i;
          $sub266$i$i = (($shl265$i$i) + 520192)|0;
          $shr267$i$i = $sub266$i$i >>> 16;
          $and268$i$i = $shr267$i$i & 4;
          $add269$i$i = $and268$i$i | $and264$i$i;
          $shl270$i$i = $shl265$i$i << $and268$i$i;
          $sub271$i$i = (($shl270$i$i) + 245760)|0;
          $shr272$i$i = $sub271$i$i >>> 16;
          $and273$i$i = $shr272$i$i & 2;
          $add274$i$i = $add269$i$i | $and273$i$i;
          $sub275$i$i = (14 - ($add274$i$i))|0;
          $shl276$i$i = $shl270$i$i << $and273$i$i;
          $shr277$i$i = $shl276$i$i >>> 15;
          $add278$i$i = (($sub275$i$i) + ($shr277$i$i))|0;
          $shl279$i$i = $add278$i$i << 1;
          $add280$i$i = (($add278$i$i) + 7)|0;
          $shr281$i$i = $qsize$0$i$i >>> $add280$i$i;
          $and282$i$i = $shr281$i$i & 1;
          $add283$i$i = $and282$i$i | $shl279$i$i;
          $I252$0$i$i = $add283$i$i;
         }
        } while(0);
        $arrayidx287$i$i = (7504 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $174 = load4((7204));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $174 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $174 | $shl294$i$i;
         store4((7204),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $175 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $175;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $176 = load4($head317$i$i);
         $and318$i$i = $176 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 265;
          break;
         }
         $shr323$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr323$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $177 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($177|0)==(0|0);
         if ($cmp327$i$i) {
          label = 262;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $177;
         }
        }
        if ((label|0) == 262) {
         $178 = load4((7216));
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($178>>>0);
         if ($cmp332$i$i) {
          _abort();
          // unreachable;
         } else {
          store4($arrayidx325$i$i,$add$ptr17$i$i);
          $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent337$i$i,$T$0$i47$i);
          $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk338$i$i,$add$ptr17$i$i);
          $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd339$i$i,$add$ptr17$i$i);
          break;
         }
        }
        else if ((label|0) == 265) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $179 = load4($fd344$i$i);
         $180 = load4((7216));
         $cmp350$i$i = ($179>>>0)>=($180>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($180>>>0);
         $181 = $cmp350$i$i & $not$cmp346$i$i;
         if ($181) {
          $bk357$i$i = ((($179)) + 12|0);
          store4($bk357$i$i,$add$ptr17$i$i);
          store4($fd344$i$i,$add$ptr17$i$i);
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd359$i$i,$179);
          $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk360$i$i,$T$0$i47$i);
          $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent361$i$i,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $add$ptr369$i$i = ((($add$ptr4$i26$i)) + 8|0);
      $retval$0 = $add$ptr369$i$i;
      STACKTOP = sp;return ($retval$0|0);
     }
    }
    $sp$0$i$i$i = (7648);
    while(1) {
     $182 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($182>>>0)>($116>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $183 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($182) + ($183)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($116>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $184 = load4($next$i$i$i);
     $sp$0$i$i$i = $184;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $185 = $add$ptr3$i$i;
    $and$i$i = $185 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $186 = (0 - ($185))|0;
    $and6$i10$i = $186 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr81$i$i = ((($116)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr81$i$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $116 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$795$i) + -40)|0;
    $add$ptr$i2$i$i = ((($tbase$796$i)) + 8|0);
    $187 = $add$ptr$i2$i$i;
    $and$i$i$i = $187 & 7;
    $cmp$i3$i$i = ($and$i$i$i|0)==(0);
    $188 = (0 - ($187))|0;
    $and3$i$i$i = $188 & 7;
    $cond$i$i$i = $cmp$i3$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$796$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    store4((7224),$add$ptr4$i$i$i);
    store4((7212),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $189 = load4((7688));
    store4((7228),$189);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((7648),4),4); store8($add$ptr14$i$i+8 | 0,load8((7648)+8 | 0,4),4);
    store4((7648),$tbase$796$i);
    store4((7652),$tsize$795$i);
    store4((7660),0);
    store4((7656),$add$ptr14$i$i);
    $190 = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($190)) + 4|0);
     store4($add$ptr24$i$i,7);
     $head26$i$i = ((($190)) + 8|0);
     $cmp27$i$i = ($head26$i$i>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $190 = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($116|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $116;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $191 = load4($head$i$i);
     $and32$i$i = $191 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($116)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (7240 + ($shl$i$i<<2)|0);
      $192 = load4(7200);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $192 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $192 | $shl39$i$i;
       store4(7200,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $193 = ((($arrayidx$i$i)) + 8|0);
       $194 = load4($193);
       $195 = load4((7216));
       $cmp46$i$i = ($194>>>0)<($195>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $193;$F$0$i$i = $194;
       }
      }
      store4($$pre$phi$i$iZ2D,$116);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$116);
      $fd54$i$i = ((($116)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($116)) + 12|0);
      store4($bk55$i$i,$arrayidx$i$i);
      break;
     }
     $shr58$i$i = $sub$ptr$sub$i$i >>> 8;
     $cmp59$i$i = ($shr58$i$i|0)==(0);
     if ($cmp59$i$i) {
      $I57$0$i$i = 0;
     } else {
      $cmp63$i$i = ($sub$ptr$sub$i$i>>>0)>(16777215);
      if ($cmp63$i$i) {
       $I57$0$i$i = 31;
      } else {
       $sub67$i$i = (($shr58$i$i) + 1048320)|0;
       $shr68$i$i = $sub67$i$i >>> 16;
       $and69$i$i = $shr68$i$i & 8;
       $shl70$i$i = $shr58$i$i << $and69$i$i;
       $sub71$i$i = (($shl70$i$i) + 520192)|0;
       $shr72$i$i = $sub71$i$i >>> 16;
       $and73$i$i = $shr72$i$i & 4;
       $add74$i$i = $and73$i$i | $and69$i$i;
       $shl75$i$i = $shl70$i$i << $and73$i$i;
       $sub76$i$i = (($shl75$i$i) + 245760)|0;
       $shr77$i$i = $sub76$i$i >>> 16;
       $and78$i$i = $shr77$i$i & 2;
       $add79$i$i = $add74$i$i | $and78$i$i;
       $sub80$i$i = (14 - ($add79$i$i))|0;
       $shl81$i$i = $shl75$i$i << $and78$i$i;
       $shr82$i$i = $shl81$i$i >>> 15;
       $add83$i$i = (($sub80$i$i) + ($shr82$i$i))|0;
       $shl84$i$i = $add83$i$i << 1;
       $add85$i$i = (($add83$i$i) + 7)|0;
       $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i;
       $and87$i$i = $shr86$i$i & 1;
       $add88$i$i = $and87$i$i | $shl84$i$i;
       $I57$0$i$i = $add88$i$i;
      }
     }
     $arrayidx91$i$i = (7504 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($116)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($116)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr81$i$i,0);
     $196 = load4((7204));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $196 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $196 | $shl95$i$i;
      store4((7204),$or101$i$i);
      store4($arrayidx91$i$i,$116);
      $parent$i$i = ((($116)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($116)) + 12|0);
      store4($bk102$i$i,$116);
      $fd103$i$i = ((($116)) + 8|0);
      store4($fd103$i$i,$116);
      break;
     }
     $197 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $197;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $198 = load4($head118$i$i);
      $and119$i$i = $198 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 292;
       break;
      }
      $shr124$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr124$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $199 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($199|0)==(0|0);
      if ($cmp128$i$i) {
       label = 289;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $199;
      }
     }
     if ((label|0) == 289) {
      $200 = load4((7216));
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($200>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       store4($arrayidx126$i$i,$116);
       $parent138$i$i = ((($116)) + 24|0);
       store4($parent138$i$i,$T$0$i$i);
       $bk139$i$i = ((($116)) + 12|0);
       store4($bk139$i$i,$116);
       $fd140$i$i = ((($116)) + 8|0);
       store4($fd140$i$i,$116);
       break;
      }
     }
     else if ((label|0) == 292) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $201 = load4($fd148$i$i);
      $202 = load4((7216));
      $cmp153$i$i = ($201>>>0)>=($202>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($202>>>0);
      $203 = $cmp153$i$i & $not$cmp150$i$i;
      if ($203) {
       $bk158$i$i = ((($201)) + 12|0);
       store4($bk158$i$i,$116);
       store4($fd148$i$i,$116);
       $fd160$i$i = ((($116)) + 8|0);
       store4($fd160$i$i,$201);
       $bk161$i$i = ((($116)) + 12|0);
       store4($bk161$i$i,$T$0$i$i);
       $parent162$i$i = ((($116)) + 24|0);
       store4($parent162$i$i,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $204 = load4((7212));
  $cmp257$i = ($204>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($204) - ($nb$0))|0;
   store4((7212),$sub260$i);
   $205 = load4((7224));
   $add$ptr262$i = (($205) + ($nb$0)|0);
   store4((7224),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($205)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($205)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $call275$i = (___errno_location()|0);
 store4($call275$i,12);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre308 = 0, $$pre309 = 0, $$sink = 0, $$sink4 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0;
 var $9 = 0, $F510$0 = 0, $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0;
 var $add258 = 0, $add267 = 0, $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0;
 var $and545 = 0, $and549 = 0, $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0;
 var $arrayidx400 = 0, $arrayidx419 = 0, $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0;
 var $bk580 = 0, $bk611 = 0, $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0;
 var $cmp127 = 0, $cmp13 = 0, $cmp131 = 0, $cmp143 = 0, $cmp162 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0;
 var $cmp280 = 0, $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0;
 var $cmp401 = 0, $cmp413 = 0, $cmp42 = 0, $cmp432 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0;
 var $cmp605 = 0, $cmp624 = 0, $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond292 = 0, $cond293 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0;
 var $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0;
 var $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp150 = 0, $not$cmp420 = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0;
 var $parent442 = 0, $parent455 = 0, $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0;
 var $shl573 = 0, $shl590 = 0, $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr597 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0;
 var $sub589 = 0, $tobool233 = 0, $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = load4((7216));
 $cmp1 = ($add$ptr>>>0)<($0>>>0);
 if ($cmp1) {
  _abort();
  // unreachable;
 }
 $head = ((($mem)) + -4|0);
 $1 = load4($head);
 $and = $1 & 3;
 $cmp2 = ($and|0)==(1);
 if ($cmp2) {
  _abort();
  // unreachable;
 }
 $and5 = $1 & -8;
 $add$ptr6 = (($add$ptr) + ($and5)|0);
 $and8 = $1 & 1;
 $tobool9 = ($and8|0)==(0);
 L10: do {
  if ($tobool9) {
   $2 = load4($add$ptr);
   $cmp13 = ($and|0)==(0);
   if ($cmp13) {
    return;
   }
   $idx$neg = (0 - ($2))|0;
   $add$ptr16 = (($add$ptr) + ($idx$neg)|0);
   $add17 = (($2) + ($and5))|0;
   $cmp18 = ($add$ptr16>>>0)<($0>>>0);
   if ($cmp18) {
    _abort();
    // unreachable;
   }
   $3 = load4((7220));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = load4($head209);
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    $head216 = ((($add$ptr16)) + 4|0);
    $or = $add17 | 1;
    $and215 = $27 & -2;
    store4((7208),$add17);
    store4($head209,$and215);
    store4($head216,$or);
    store4($add$ptr217,$add17);
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr16)) + 12|0);
    $5 = load4($bk);
    $shl = $shr << 1;
    $arrayidx = (7240 + ($shl<<2)|0);
    $cmp29 = ($4|0)==($arrayidx|0);
    if (!($cmp29)) {
     $cmp31 = ($4>>>0)<($0>>>0);
     if ($cmp31) {
      _abort();
      // unreachable;
     }
     $bk34 = ((($4)) + 12|0);
     $6 = load4($bk34);
     $cmp35 = ($6|0)==($add$ptr16|0);
     if (!($cmp35)) {
      _abort();
      // unreachable;
     }
    }
    $cmp42 = ($5|0)==($4|0);
    if ($cmp42) {
     $shl45 = 1 << $shr;
     $neg = $shl45 ^ -1;
     $7 = load4(7200);
     $and46 = $7 & $neg;
     store4(7200,$and46);
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $cmp50 = ($5|0)==($arrayidx|0);
    if ($cmp50) {
     $$pre309 = ((($5)) + 8|0);
     $fd67$pre$phiZ2D = $$pre309;
    } else {
     $cmp53 = ($5>>>0)<($0>>>0);
     if ($cmp53) {
      _abort();
      // unreachable;
     }
     $fd56 = ((($5)) + 8|0);
     $8 = load4($fd56);
     $cmp57 = ($8|0)==($add$ptr16|0);
     if ($cmp57) {
      $fd67$pre$phiZ2D = $fd56;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk66 = ((($4)) + 12|0);
    store4($bk66,$5);
    store4($fd67$pre$phiZ2D,$4);
    $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    break;
   }
   $parent = ((($add$ptr16)) + 24|0);
   $9 = load4($parent);
   $bk73 = ((($add$ptr16)) + 12|0);
   $10 = load4($bk73);
   $cmp74 = ($10|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $14 = load4($arrayidx99);
     $cmp100 = ($14|0)==(0|0);
     if ($cmp100) {
      $15 = load4($child);
      $cmp104 = ($15|0)==(0|0);
      if ($cmp104) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $15;$RP$1 = $child;
      }
     } else {
      $R$1 = $14;$RP$1 = $arrayidx99;
     }
     while(1) {
      $arrayidx108 = ((($R$1)) + 20|0);
      $16 = load4($arrayidx108);
      $cmp109 = ($16|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $16;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $17 = load4($arrayidx113);
      $cmp114 = ($17|0)==(0|0);
      if ($cmp114) {
       break;
      } else {
       $R$1 = $17;$RP$1 = $arrayidx113;
      }
     }
     $cmp118 = ($RP$1>>>0)<($0>>>0);
     if ($cmp118) {
      _abort();
      // unreachable;
     } else {
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $11 = load4($fd78);
     $cmp80 = ($11>>>0)<($0>>>0);
     if ($cmp80) {
      _abort();
      // unreachable;
     }
     $bk82 = ((($11)) + 12|0);
     $12 = load4($bk82);
     $cmp83 = ($12|0)==($add$ptr16|0);
     if (!($cmp83)) {
      _abort();
      // unreachable;
     }
     $fd86 = ((($10)) + 8|0);
     $13 = load4($fd86);
     $cmp87 = ($13|0)==($add$ptr16|0);
     if ($cmp87) {
      store4($bk82,$10);
      store4($fd86,$11);
      $R$3 = $10;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp127 = ($9|0)==(0|0);
   if ($cmp127) {
    $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = load4($index);
    $arrayidx130 = (7504 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    do {
     if ($cmp131) {
      store4($arrayidx130,$R$3);
      $cond292 = ($R$3|0)==(0|0);
      if ($cond292) {
       $shl138 = 1 << $18;
       $neg139 = $shl138 ^ -1;
       $20 = load4((7204));
       $and140 = $20 & $neg139;
       store4((7204),$and140);
       $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
       break L10;
      }
     } else {
      $21 = load4((7216));
      $cmp143 = ($9>>>0)<($21>>>0);
      if ($cmp143) {
       _abort();
       // unreachable;
      } else {
       $arrayidx149 = ((($9)) + 16|0);
       $22 = load4($arrayidx149);
       $not$cmp150 = ($22|0)!=($add$ptr16|0);
       $$sink = $not$cmp150&1;
       $arrayidx157 = (((($9)) + 16|0) + ($$sink<<2)|0);
       store4($arrayidx157,$R$3);
       $cmp162 = ($R$3|0)==(0|0);
       if ($cmp162) {
        $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
        break L10;
       } else {
        break;
       }
      }
     }
    } while(0);
    $23 = load4((7216));
    $cmp165 = ($R$3>>>0)<($23>>>0);
    if ($cmp165) {
     _abort();
     // unreachable;
    }
    $parent170 = ((($R$3)) + 24|0);
    store4($parent170,$9);
    $child171 = ((($add$ptr16)) + 16|0);
    $24 = load4($child171);
    $cmp173 = ($24|0)==(0|0);
    do {
     if (!($cmp173)) {
      $cmp176 = ($24>>>0)<($23>>>0);
      if ($cmp176) {
       _abort();
       // unreachable;
      } else {
       $arrayidx182 = ((($R$3)) + 16|0);
       store4($arrayidx182,$24);
       $parent183 = ((($24)) + 24|0);
       store4($parent183,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx188 = ((($child171)) + 4|0);
    $25 = load4($arrayidx188);
    $cmp189 = ($25|0)==(0|0);
    if ($cmp189) {
     $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = load4((7216));
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      store4($arrayidx198,$25);
      $parent199 = ((($25)) + 24|0);
      store4($parent199,$R$3);
      $28 = $add$ptr16;$p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
   }
  } else {
   $28 = $add$ptr;$p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($28>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  _abort();
  // unreachable;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $29 = load4($head231);
 $and232 = $29 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $29 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $30 = load4((7224));
  $cmp243 = ($add$ptr6|0)==($30|0);
  $31 = load4((7220));
  if ($cmp243) {
   $32 = load4((7212));
   $add246 = (($32) + ($psize$1))|0;
   store4((7212),$add246);
   store4((7224),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((7220),0);
   store4((7208),0);
   return;
  }
  $cmp255 = ($add$ptr6|0)==($31|0);
  if ($cmp255) {
   $33 = load4((7208));
   $add258 = (($33) + ($psize$1))|0;
   store4((7208),$add258);
   store4((7220),$28);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($28) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $29 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $29 >>> 3;
  $cmp269 = ($29>>>0)<(256);
  L108: do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = load4($bk275);
    $shl278 = $shr268 << 1;
    $arrayidx279 = (7240 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((7216));
     $cmp283 = ($34>>>0)<($36>>>0);
     if ($cmp283) {
      _abort();
      // unreachable;
     }
     $bk286 = ((($34)) + 12|0);
     $37 = load4($bk286);
     $cmp287 = ($37|0)==($add$ptr6|0);
     if (!($cmp287)) {
      _abort();
      // unreachable;
     }
    }
    $cmp296 = ($35|0)==($34|0);
    if ($cmp296) {
     $shl299 = 1 << $shr268;
     $neg300 = $shl299 ^ -1;
     $38 = load4(7200);
     $and301 = $38 & $neg300;
     store4(7200,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre308 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre308;
    } else {
     $39 = load4((7216));
     $cmp308 = ($35>>>0)<($39>>>0);
     if ($cmp308) {
      _abort();
      // unreachable;
     }
     $fd311 = ((($35)) + 8|0);
     $40 = load4($fd311);
     $cmp312 = ($40|0)==($add$ptr6|0);
     if ($cmp312) {
      $fd322$pre$phiZ2D = $fd311;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk321 = ((($34)) + 12|0);
    store4($bk321,$35);
    store4($fd322$pre$phiZ2D,$34);
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $41 = load4($parent331);
    $bk333 = ((($add$ptr6)) + 12|0);
    $42 = load4($bk333);
    $cmp334 = ($42|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $47 = load4($arrayidx362);
      $cmp363 = ($47|0)==(0|0);
      if ($cmp363) {
       $48 = load4($child361);
       $cmp368 = ($48|0)==(0|0);
       if ($cmp368) {
        $R332$3 = 0;
        break;
       } else {
        $R332$1 = $48;$RP360$1 = $child361;
       }
      } else {
       $R332$1 = $47;$RP360$1 = $arrayidx362;
      }
      while(1) {
       $arrayidx374 = ((($R332$1)) + 20|0);
       $49 = load4($arrayidx374);
       $cmp375 = ($49|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $49;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $50 = load4($arrayidx379);
       $cmp380 = ($50|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $50;$RP360$1 = $arrayidx379;
       }
      }
      $51 = load4((7216));
      $cmp386 = ($RP360$1>>>0)<($51>>>0);
      if ($cmp386) {
       _abort();
       // unreachable;
      } else {
       store4($RP360$1,0);
       $R332$3 = $R332$1;
       break;
      }
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $43 = load4($fd338);
      $44 = load4((7216));
      $cmp340 = ($43>>>0)<($44>>>0);
      if ($cmp340) {
       _abort();
       // unreachable;
      }
      $bk343 = ((($43)) + 12|0);
      $45 = load4($bk343);
      $cmp344 = ($45|0)==($add$ptr6|0);
      if (!($cmp344)) {
       _abort();
       // unreachable;
      }
      $fd347 = ((($42)) + 8|0);
      $46 = load4($fd347);
      $cmp348 = ($46|0)==($add$ptr6|0);
      if ($cmp348) {
       store4($bk343,$42);
       store4($fd347,$43);
       $R332$3 = $42;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $cmp395 = ($41|0)==(0|0);
    if (!($cmp395)) {
     $index399 = ((($add$ptr6)) + 28|0);
     $52 = load4($index399);
     $arrayidx400 = (7504 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     do {
      if ($cmp401) {
       store4($arrayidx400,$R332$3);
       $cond293 = ($R332$3|0)==(0|0);
       if ($cond293) {
        $shl408 = 1 << $52;
        $neg409 = $shl408 ^ -1;
        $54 = load4((7204));
        $and410 = $54 & $neg409;
        store4((7204),$and410);
        break L108;
       }
      } else {
       $55 = load4((7216));
       $cmp413 = ($41>>>0)<($55>>>0);
       if ($cmp413) {
        _abort();
        // unreachable;
       } else {
        $arrayidx419 = ((($41)) + 16|0);
        $56 = load4($arrayidx419);
        $not$cmp420 = ($56|0)!=($add$ptr6|0);
        $$sink4 = $not$cmp420&1;
        $arrayidx427 = (((($41)) + 16|0) + ($$sink4<<2)|0);
        store4($arrayidx427,$R332$3);
        $cmp432 = ($R332$3|0)==(0|0);
        if ($cmp432) {
         break L108;
        } else {
         break;
        }
       }
      }
     } while(0);
     $57 = load4((7216));
     $cmp435 = ($R332$3>>>0)<($57>>>0);
     if ($cmp435) {
      _abort();
      // unreachable;
     }
     $parent442 = ((($R332$3)) + 24|0);
     store4($parent442,$41);
     $child443 = ((($add$ptr6)) + 16|0);
     $58 = load4($child443);
     $cmp445 = ($58|0)==(0|0);
     do {
      if (!($cmp445)) {
       $cmp448 = ($58>>>0)<($57>>>0);
       if ($cmp448) {
        _abort();
        // unreachable;
       } else {
        $arrayidx454 = ((($R332$3)) + 16|0);
        store4($arrayidx454,$58);
        $parent455 = ((($58)) + 24|0);
        store4($parent455,$R332$3);
        break;
       }
      }
     } while(0);
     $arrayidx460 = ((($child443)) + 4|0);
     $59 = load4($arrayidx460);
     $cmp461 = ($59|0)==(0|0);
     if (!($cmp461)) {
      $60 = load4((7216));
      $cmp464 = ($59>>>0)<($60>>>0);
      if ($cmp464) {
       _abort();
       // unreachable;
      } else {
       $arrayidx470 = ((($R332$3)) + 20|0);
       store4($arrayidx470,$59);
       $parent471 = ((($59)) + 24|0);
       store4($parent471,$R332$3);
       break;
      }
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  store4($head481,$or480);
  $add$ptr482 = (($28) + ($add267)|0);
  store4($add$ptr482,$add267);
  $61 = load4((7220));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((7208),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $29 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($28) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (7240 + ($shl508<<2)|0);
  $62 = load4(7200);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(7200,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((7216));
   $cmp519 = ($64>>>0)<($65>>>0);
   if ($cmp519) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $63;$F510$0 = $64;
   }
  }
  store4($$pre$phiZ2D,$p$1);
  $bk529 = ((($F510$0)) + 12|0);
  store4($bk529,$p$1);
  $fd530 = ((($p$1)) + 8|0);
  store4($fd530,$F510$0);
  $bk531 = ((($p$1)) + 12|0);
  store4($bk531,$arrayidx509);
  return;
 }
 $shr535 = $psize$2 >>> 8;
 $cmp536 = ($shr535|0)==(0);
 if ($cmp536) {
  $I534$0 = 0;
 } else {
  $cmp540 = ($psize$2>>>0)>(16777215);
  if ($cmp540) {
   $I534$0 = 31;
  } else {
   $sub = (($shr535) + 1048320)|0;
   $shr544 = $sub >>> 16;
   $and545 = $shr544 & 8;
   $shl546 = $shr535 << $and545;
   $sub547 = (($shl546) + 520192)|0;
   $shr548 = $sub547 >>> 16;
   $and549 = $shr548 & 4;
   $add550 = $and549 | $and545;
   $shl551 = $shl546 << $and549;
   $sub552 = (($shl551) + 245760)|0;
   $shr553 = $sub552 >>> 16;
   $and554 = $shr553 & 2;
   $add555 = $add550 | $and554;
   $sub556 = (14 - ($add555))|0;
   $shl557 = $shl551 << $and554;
   $shr558 = $shl557 >>> 15;
   $add559 = (($sub556) + ($shr558))|0;
   $shl560 = $add559 << 1;
   $add561 = (($add559) + 7)|0;
   $shr562 = $psize$2 >>> $add561;
   $and563 = $shr562 & 1;
   $add564 = $and563 | $shl560;
   $I534$0 = $add564;
  }
 }
 $arrayidx567 = (7504 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((7204));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((7204),$or578);
   store4($arrayidx567,$p$1);
   $parent579 = ((($p$1)) + 24|0);
   store4($parent579,$arrayidx567);
   $bk580 = ((($p$1)) + 12|0);
   store4($bk580,$p$1);
   $fd581 = ((($p$1)) + 8|0);
   store4($fd581,$p$1);
  } else {
   $67 = load4($arrayidx567);
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $67;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $68 = load4($head591);
    $and592 = $68 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 124;
     break;
    }
    $shr597 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr597<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = load4($arrayidx599);
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 121;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 121) {
    $70 = load4((7216));
    $cmp605 = ($arrayidx599>>>0)<($70>>>0);
    if ($cmp605) {
     _abort();
     // unreachable;
    } else {
     store4($arrayidx599,$p$1);
     $parent610 = ((($p$1)) + 24|0);
     store4($parent610,$T$0);
     $bk611 = ((($p$1)) + 12|0);
     store4($bk611,$p$1);
     $fd612 = ((($p$1)) + 8|0);
     store4($fd612,$p$1);
     break;
    }
   }
   else if ((label|0) == 124) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = load4($fd620);
    $72 = load4((7216));
    $cmp624 = ($71>>>0)>=($72>>>0);
    $not$cmp621 = ($T$0>>>0)>=($72>>>0);
    $73 = $cmp624 & $not$cmp621;
    if ($73) {
     $bk631 = ((($71)) + 12|0);
     store4($bk631,$p$1);
     store4($fd620,$p$1);
     $fd633 = ((($p$1)) + 8|0);
     store4($fd633,$71);
     $bk634 = ((($p$1)) + 12|0);
     store4($bk634,$T$0);
     $parent635 = ((($p$1)) + 24|0);
     store4($parent635,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $74 = load4((7232));
 $dec = (($74) + -1)|0;
 store4((7232),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (7656);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = load4($sp$0$in$i);
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 store4((7232),-1);
 return;
}
function _calloc($n_elements,$elem_size) {
 $n_elements = $n_elements|0;
 $elem_size = $elem_size|0;
 var $0 = 0, $and6 = 0, $call = 0, $cmp = 0, $cmp1 = 0, $cmp4 = 0, $cmp7 = 0, $div = 0, $head = 0, $mul = 0, $mul$ = 0, $or = 0, $req$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($n_elements|0)==(0);
 if ($cmp) {
  $req$0 = 0;
 } else {
  $mul = Math_imul($elem_size, $n_elements)|0;
  $or = $elem_size | $n_elements;
  $tobool = ($or>>>0)>(65535);
  if ($tobool) {
   $div = (($mul>>>0) / ($n_elements>>>0))&-1;
   $cmp1 = ($div|0)==($elem_size|0);
   $mul$ = $cmp1 ? $mul : -1;
   $req$0 = $mul$;
  } else {
   $req$0 = $mul;
  }
 }
 $call = (_malloc($req$0)|0);
 $cmp4 = ($call|0)==(0|0);
 if ($cmp4) {
  return ($call|0);
 }
 $head = ((($call)) + -4|0);
 $0 = load4($head);
 $and6 = $0 & 3;
 $cmp7 = ($and6|0)==(0);
 if ($cmp7) {
  return ($call|0);
 }
 _memset(($call|0),0,($req$0|0))|0;
 return ($call|0);
}
function _realloc($oldmem,$bytes) {
 $oldmem = $oldmem|0;
 $bytes = $bytes|0;
 var $0 = 0, $add$ptr = 0, $add$ptr10 = 0, $add6 = 0, $and = 0, $and15 = 0, $and17 = 0, $call = 0, $call12 = 0, $call3 = 0, $call7 = 0, $cmp = 0, $cmp1 = 0, $cmp13 = 0, $cmp18 = 0, $cmp20 = 0, $cmp5 = 0, $cmp8 = 0, $cond = 0, $cond19 = 0;
 var $cond24 = 0, $head = 0, $mem$1 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($oldmem|0)==(0|0);
 if ($cmp) {
  $call = (_malloc($bytes)|0);
  $mem$1 = $call;
  return ($mem$1|0);
 }
 $cmp1 = ($bytes>>>0)>(4294967231);
 if ($cmp1) {
  $call3 = (___errno_location()|0);
  store4($call3,12);
  $mem$1 = 0;
  return ($mem$1|0);
 }
 $cmp5 = ($bytes>>>0)<(11);
 $add6 = (($bytes) + 11)|0;
 $and = $add6 & -8;
 $cond = $cmp5 ? 16 : $and;
 $add$ptr = ((($oldmem)) + -8|0);
 $call7 = (_try_realloc_chunk($add$ptr,$cond)|0);
 $cmp8 = ($call7|0)==(0|0);
 if (!($cmp8)) {
  $add$ptr10 = ((($call7)) + 8|0);
  $mem$1 = $add$ptr10;
  return ($mem$1|0);
 }
 $call12 = (_malloc($bytes)|0);
 $cmp13 = ($call12|0)==(0|0);
 if ($cmp13) {
  $mem$1 = 0;
  return ($mem$1|0);
 }
 $head = ((($oldmem)) + -4|0);
 $0 = load4($head);
 $and15 = $0 & -8;
 $and17 = $0 & 3;
 $cmp18 = ($and17|0)==(0);
 $cond19 = $cmp18 ? 8 : 4;
 $sub = (($and15) - ($cond19))|0;
 $cmp20 = ($sub>>>0)<($bytes>>>0);
 $cond24 = $cmp20 ? $sub : $bytes;
 _memcpy(($call12|0),($oldmem|0),($cond24|0))|0;
 _free($oldmem);
 $mem$1 = $call12;
 return ($mem$1|0);
}
function _try_realloc_chunk($p,$nb) {
 $p = $p|0;
 $nb = $nb|0;
 var $$pre = 0, $$sink = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $R$1 = 0, $R$3 = 0;
 var $RP$1 = 0, $add = 0, $add$i = 0, $add$ptr = 0, $add$ptr17 = 0, $add$ptr298 = 0, $add$ptr30 = 0, $add$ptr303 = 0, $add$ptr317 = 0, $add$ptr41 = 0, $add$ptr66 = 0, $add$ptr67 = 0, $add$ptr91 = 0, $add105 = 0, $add58 = 0, $and = 0, $and100 = 0, $and104 = 0, $and128 = 0, $and19 = 0;
 var $and2 = 0, $and216 = 0, $and294 = 0, $and43 = 0, $and69 = 0, $and7 = 0, $and80 = 0, $arrayidx = 0, $arrayidx179 = 0, $arrayidx186 = 0, $arrayidx190 = 0, $arrayidx206 = 0, $arrayidx226 = 0, $arrayidx234 = 0, $arrayidx261 = 0, $arrayidx267 = 0, $arrayidx278 = 0, $bk = 0, $bk118 = 0, $bk147 = 0;
 var $bk155 = 0, $bk164 = 0, $child = 0, $child249 = 0, $cmp$i = 0, $cmp1$i = 0, $cmp106 = 0, $cmp11 = 0, $cmp111 = 0, $cmp114 = 0, $cmp116 = 0, $cmp119 = 0, $cmp125 = 0, $cmp13 = 0, $cmp133 = 0, $cmp136 = 0, $cmp139 = 0, $cmp15 = 0, $cmp156 = 0, $cmp162 = 0;
 var $cmp165 = 0, $cmp168 = 0, $cmp180 = 0, $cmp183 = 0, $cmp187 = 0, $cmp191 = 0, $cmp195 = 0, $cmp2$i = 0, $cmp203 = 0, $cmp207 = 0, $cmp220 = 0, $cmp239 = 0, $cmp243 = 0, $cmp251 = 0, $cmp255 = 0, $cmp268 = 0, $cmp272 = 0, $cmp288 = 0, $cmp34 = 0, $cmp36 = 0;
 var $cmp5 = 0, $cmp56 = 0, $cmp59 = 0, $cmp63 = 0, $cond = 0, $fd = 0, $fd138 = 0, $fd148$pre$phiZ2D = 0, $fd159 = 0, $fd167 = 0, $head = 0, $head23 = 0, $head299 = 0, $head31 = 0, $head310 = 0, $head318 = 0, $head48 = 0, $head6 = 0, $head74 = 0, $head79 = 0;
 var $head92 = 0, $index = 0, $neg = 0, $neg215 = 0, $newp$2 = 0, $not$cmp227 = 0, $notlhs = 0, $notrhs = 0, $or = 0, $or$cond$not = 0, $or$cond2 = 0, $or20 = 0, $or28 = 0, $or295 = 0, $or296 = 0, $or300 = 0, $or306 = 0, $or307 = 0, $or315 = 0, $or319 = 0;
 var $or32 = 0, $or44 = 0, $or45 = 0, $or50 = 0, $or70 = 0, $or71 = 0, $or76 = 0, $or88 = 0, $or89 = 0, $or93 = 0, $parent = 0, $parent248 = 0, $parent262 = 0, $parent279 = 0, $shl = 0, $shl$i = 0, $shl127 = 0, $shl214 = 0, $shr = 0, $storemerge = 0;
 var $storemerge1 = 0, $sub = 0, $sub$i = 0, $sub110 = 0, $sub40 = 0, $sub62 = 0, $tobool = 0, $tobool101 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $head = ((($p)) + 4|0);
 $0 = load4($head);
 $and = $0 & -8;
 $add$ptr = (($p) + ($and)|0);
 $1 = load4((7216));
 $and2 = $0 & 3;
 $notlhs = ($p>>>0)>=($1>>>0);
 $notrhs = ($and2|0)!=(1);
 $or$cond$not = $notrhs & $notlhs;
 $cmp5 = ($p>>>0)<($add$ptr>>>0);
 $or$cond2 = $or$cond$not & $cmp5;
 if (!($or$cond2)) {
  _abort();
  // unreachable;
 }
 $head6 = ((($add$ptr)) + 4|0);
 $2 = load4($head6);
 $and7 = $2 & 1;
 $tobool = ($and7|0)==(0);
 if ($tobool) {
  _abort();
  // unreachable;
 }
 $cmp11 = ($and2|0)==(0);
 if ($cmp11) {
  $cmp$i = ($nb>>>0)<(256);
  if ($cmp$i) {
   $newp$2 = 0;
   return ($newp$2|0);
  }
  $add$i = (($nb) + 4)|0;
  $cmp1$i = ($and>>>0)<($add$i>>>0);
  if (!($cmp1$i)) {
   $sub$i = (($and) - ($nb))|0;
   $3 = load4((7680));
   $shl$i = $3 << 1;
   $cmp2$i = ($sub$i>>>0)>($shl$i>>>0);
   if (!($cmp2$i)) {
    $newp$2 = $p;
    return ($newp$2|0);
   }
  }
  $newp$2 = 0;
  return ($newp$2|0);
 }
 $cmp13 = ($and>>>0)<($nb>>>0);
 if (!($cmp13)) {
  $sub = (($and) - ($nb))|0;
  $cmp15 = ($sub>>>0)>(15);
  if (!($cmp15)) {
   $newp$2 = $p;
   return ($newp$2|0);
  }
  $add$ptr17 = (($p) + ($nb)|0);
  $and19 = $0 & 1;
  $or = $and19 | $nb;
  $or20 = $or | 2;
  store4($head,$or20);
  $head23 = ((($add$ptr17)) + 4|0);
  $or28 = $sub | 3;
  store4($head23,$or28);
  $add$ptr30 = (($add$ptr17) + ($sub)|0);
  $head31 = ((($add$ptr30)) + 4|0);
  $4 = load4($head31);
  $or32 = $4 | 1;
  store4($head31,$or32);
  _dispose_chunk($add$ptr17,$sub);
  $newp$2 = $p;
  return ($newp$2|0);
 }
 $5 = load4((7224));
 $cmp34 = ($add$ptr|0)==($5|0);
 if ($cmp34) {
  $6 = load4((7212));
  $add = (($6) + ($and))|0;
  $cmp36 = ($add>>>0)>($nb>>>0);
  $sub40 = (($add) - ($nb))|0;
  $add$ptr41 = (($p) + ($nb)|0);
  if (!($cmp36)) {
   $newp$2 = 0;
   return ($newp$2|0);
  }
  $or50 = $sub40 | 1;
  $head48 = ((($add$ptr41)) + 4|0);
  $and43 = $0 & 1;
  $or44 = $and43 | $nb;
  $or45 = $or44 | 2;
  store4($head,$or45);
  store4($head48,$or50);
  store4((7224),$add$ptr41);
  store4((7212),$sub40);
  $newp$2 = $p;
  return ($newp$2|0);
 }
 $7 = load4((7220));
 $cmp56 = ($add$ptr|0)==($7|0);
 if ($cmp56) {
  $8 = load4((7208));
  $add58 = (($8) + ($and))|0;
  $cmp59 = ($add58>>>0)<($nb>>>0);
  if ($cmp59) {
   $newp$2 = 0;
   return ($newp$2|0);
  }
  $sub62 = (($add58) - ($nb))|0;
  $cmp63 = ($sub62>>>0)>(15);
  $and69 = $0 & 1;
  if ($cmp63) {
   $add$ptr66 = (($p) + ($nb)|0);
   $add$ptr67 = (($add$ptr66) + ($sub62)|0);
   $or70 = $and69 | $nb;
   $or71 = $or70 | 2;
   store4($head,$or71);
   $head74 = ((($add$ptr66)) + 4|0);
   $or76 = $sub62 | 1;
   store4($head74,$or76);
   store4($add$ptr67,$sub62);
   $head79 = ((($add$ptr67)) + 4|0);
   $9 = load4($head79);
   $and80 = $9 & -2;
   store4($head79,$and80);
   $storemerge = $add$ptr66;$storemerge1 = $sub62;
  } else {
   $or88 = $and69 | $add58;
   $or89 = $or88 | 2;
   store4($head,$or89);
   $add$ptr91 = (($p) + ($add58)|0);
   $head92 = ((($add$ptr91)) + 4|0);
   $10 = load4($head92);
   $or93 = $10 | 1;
   store4($head92,$or93);
   $storemerge = 0;$storemerge1 = 0;
  }
  store4((7208),$storemerge1);
  store4((7220),$storemerge);
  $newp$2 = $p;
  return ($newp$2|0);
 }
 $and100 = $2 & 2;
 $tobool101 = ($and100|0)==(0);
 if (!($tobool101)) {
  $newp$2 = 0;
  return ($newp$2|0);
 }
 $and104 = $2 & -8;
 $add105 = (($and104) + ($and))|0;
 $cmp106 = ($add105>>>0)<($nb>>>0);
 if ($cmp106) {
  $newp$2 = 0;
  return ($newp$2|0);
 }
 $sub110 = (($add105) - ($nb))|0;
 $shr = $2 >>> 3;
 $cmp111 = ($2>>>0)<(256);
 L49: do {
  if ($cmp111) {
   $fd = ((($add$ptr)) + 8|0);
   $11 = load4($fd);
   $bk = ((($add$ptr)) + 12|0);
   $12 = load4($bk);
   $shl = $shr << 1;
   $arrayidx = (7240 + ($shl<<2)|0);
   $cmp114 = ($11|0)==($arrayidx|0);
   if (!($cmp114)) {
    $cmp116 = ($11>>>0)<($1>>>0);
    if ($cmp116) {
     _abort();
     // unreachable;
    }
    $bk118 = ((($11)) + 12|0);
    $13 = load4($bk118);
    $cmp119 = ($13|0)==($add$ptr|0);
    if (!($cmp119)) {
     _abort();
     // unreachable;
    }
   }
   $cmp125 = ($12|0)==($11|0);
   if ($cmp125) {
    $shl127 = 1 << $shr;
    $neg = $shl127 ^ -1;
    $14 = load4(7200);
    $and128 = $14 & $neg;
    store4(7200,$and128);
    break;
   }
   $cmp133 = ($12|0)==($arrayidx|0);
   if ($cmp133) {
    $$pre = ((($12)) + 8|0);
    $fd148$pre$phiZ2D = $$pre;
   } else {
    $cmp136 = ($12>>>0)<($1>>>0);
    if ($cmp136) {
     _abort();
     // unreachable;
    }
    $fd138 = ((($12)) + 8|0);
    $15 = load4($fd138);
    $cmp139 = ($15|0)==($add$ptr|0);
    if ($cmp139) {
     $fd148$pre$phiZ2D = $fd138;
    } else {
     _abort();
     // unreachable;
    }
   }
   $bk147 = ((($11)) + 12|0);
   store4($bk147,$12);
   store4($fd148$pre$phiZ2D,$11);
  } else {
   $parent = ((($add$ptr)) + 24|0);
   $16 = load4($parent);
   $bk155 = ((($add$ptr)) + 12|0);
   $17 = load4($bk155);
   $cmp156 = ($17|0)==($add$ptr|0);
   do {
    if ($cmp156) {
     $child = ((($add$ptr)) + 16|0);
     $arrayidx179 = ((($child)) + 4|0);
     $21 = load4($arrayidx179);
     $cmp180 = ($21|0)==(0|0);
     if ($cmp180) {
      $22 = load4($child);
      $cmp183 = ($22|0)==(0|0);
      if ($cmp183) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $22;$RP$1 = $child;
      }
     } else {
      $R$1 = $21;$RP$1 = $arrayidx179;
     }
     while(1) {
      $arrayidx186 = ((($R$1)) + 20|0);
      $23 = load4($arrayidx186);
      $cmp187 = ($23|0)==(0|0);
      if (!($cmp187)) {
       $R$1 = $23;$RP$1 = $arrayidx186;
       continue;
      }
      $arrayidx190 = ((($R$1)) + 16|0);
      $24 = load4($arrayidx190);
      $cmp191 = ($24|0)==(0|0);
      if ($cmp191) {
       break;
      } else {
       $R$1 = $24;$RP$1 = $arrayidx190;
      }
     }
     $cmp195 = ($RP$1>>>0)<($1>>>0);
     if ($cmp195) {
      _abort();
      // unreachable;
     } else {
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd159 = ((($add$ptr)) + 8|0);
     $18 = load4($fd159);
     $cmp162 = ($18>>>0)<($1>>>0);
     if ($cmp162) {
      _abort();
      // unreachable;
     }
     $bk164 = ((($18)) + 12|0);
     $19 = load4($bk164);
     $cmp165 = ($19|0)==($add$ptr|0);
     if (!($cmp165)) {
      _abort();
      // unreachable;
     }
     $fd167 = ((($17)) + 8|0);
     $20 = load4($fd167);
     $cmp168 = ($20|0)==($add$ptr|0);
     if ($cmp168) {
      store4($bk164,$17);
      store4($fd167,$18);
      $R$3 = $17;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp203 = ($16|0)==(0|0);
   if (!($cmp203)) {
    $index = ((($add$ptr)) + 28|0);
    $25 = load4($index);
    $arrayidx206 = (7504 + ($25<<2)|0);
    $26 = load4($arrayidx206);
    $cmp207 = ($add$ptr|0)==($26|0);
    do {
     if ($cmp207) {
      store4($arrayidx206,$R$3);
      $cond = ($R$3|0)==(0|0);
      if ($cond) {
       $shl214 = 1 << $25;
       $neg215 = $shl214 ^ -1;
       $27 = load4((7204));
       $and216 = $27 & $neg215;
       store4((7204),$and216);
       break L49;
      }
     } else {
      $28 = load4((7216));
      $cmp220 = ($16>>>0)<($28>>>0);
      if ($cmp220) {
       _abort();
       // unreachable;
      } else {
       $arrayidx226 = ((($16)) + 16|0);
       $29 = load4($arrayidx226);
       $not$cmp227 = ($29|0)!=($add$ptr|0);
       $$sink = $not$cmp227&1;
       $arrayidx234 = (((($16)) + 16|0) + ($$sink<<2)|0);
       store4($arrayidx234,$R$3);
       $cmp239 = ($R$3|0)==(0|0);
       if ($cmp239) {
        break L49;
       } else {
        break;
       }
      }
     }
    } while(0);
    $30 = load4((7216));
    $cmp243 = ($R$3>>>0)<($30>>>0);
    if ($cmp243) {
     _abort();
     // unreachable;
    }
    $parent248 = ((($R$3)) + 24|0);
    store4($parent248,$16);
    $child249 = ((($add$ptr)) + 16|0);
    $31 = load4($child249);
    $cmp251 = ($31|0)==(0|0);
    do {
     if (!($cmp251)) {
      $cmp255 = ($31>>>0)<($30>>>0);
      if ($cmp255) {
       _abort();
       // unreachable;
      } else {
       $arrayidx261 = ((($R$3)) + 16|0);
       store4($arrayidx261,$31);
       $parent262 = ((($31)) + 24|0);
       store4($parent262,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx267 = ((($child249)) + 4|0);
    $32 = load4($arrayidx267);
    $cmp268 = ($32|0)==(0|0);
    if (!($cmp268)) {
     $33 = load4((7216));
     $cmp272 = ($32>>>0)<($33>>>0);
     if ($cmp272) {
      _abort();
      // unreachable;
     } else {
      $arrayidx278 = ((($R$3)) + 20|0);
      store4($arrayidx278,$32);
      $parent279 = ((($32)) + 24|0);
      store4($parent279,$R$3);
      break;
     }
    }
   }
  }
 } while(0);
 $cmp288 = ($sub110>>>0)<(16);
 $and294 = $0 & 1;
 if ($cmp288) {
  $or295 = $add105 | $and294;
  $or296 = $or295 | 2;
  store4($head,$or296);
  $add$ptr298 = (($p) + ($add105)|0);
  $head299 = ((($add$ptr298)) + 4|0);
  $34 = load4($head299);
  $or300 = $34 | 1;
  store4($head299,$or300);
  $newp$2 = $p;
  return ($newp$2|0);
 } else {
  $add$ptr303 = (($p) + ($nb)|0);
  $or306 = $and294 | $nb;
  $or307 = $or306 | 2;
  store4($head,$or307);
  $head310 = ((($add$ptr303)) + 4|0);
  $or315 = $sub110 | 3;
  store4($head310,$or315);
  $add$ptr317 = (($add$ptr303) + ($sub110)|0);
  $head318 = ((($add$ptr317)) + 4|0);
  $35 = load4($head318);
  $or319 = $35 | 1;
  store4($head318,$or319);
  _dispose_chunk($add$ptr303,$sub110);
  $newp$2 = $p;
  return ($newp$2|0);
 }
 return (0)|0;
}
function _dispose_chunk($p,$psize) {
 $p = $p|0;
 $psize = $psize|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre8 = 0, $$pre9 = 0, $$sink = 0, $$sink3 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, $F517$0 = 0, $I545$0 = 0, $K597$0 = 0, $R$1 = 0;
 var $R$3 = 0, $R328$1 = 0, $R328$3 = 0, $RP$1 = 0, $RP357$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr209 = 0, $add$ptr252 = 0, $add$ptr486 = 0, $add$ptr5 = 0, $add$ptr504 = 0, $add230 = 0, $add248 = 0, $add258 = 0, $add561 = 0, $add566 = 0, $add570 = 0, $add572 = 0, $add575 = 0;
 var $add6 = 0, $and = 0, $and128 = 0, $and2 = 0, $and202 = 0, $and207 = 0, $and224 = 0, $and257 = 0, $and295 = 0, $and32 = 0, $and410 = 0, $and501 = 0, $and520 = 0, $and556 = 0, $and560 = 0, $and565 = 0, $and574 = 0, $and587 = 0, $and606 = 0, $arrayidx = 0;
 var $arrayidx100 = 0, $arrayidx118 = 0, $arrayidx138 = 0, $arrayidx146 = 0, $arrayidx173 = 0, $arrayidx179 = 0, $arrayidx190 = 0, $arrayidx271 = 0, $arrayidx359 = 0, $arrayidx371 = 0, $arrayidx376 = 0, $arrayidx399 = 0, $arrayidx420 = 0, $arrayidx428 = 0, $arrayidx457 = 0, $arrayidx463 = 0, $arrayidx474 = 0, $arrayidx516 = 0, $arrayidx579 = 0, $arrayidx582 = 0;
 var $arrayidx613 = 0, $arrayidx86 = 0, $arrayidx95 = 0, $bk = 0, $bk22 = 0, $bk266 = 0, $bk279 = 0, $bk317 = 0, $bk329 = 0, $bk340 = 0, $bk52 = 0, $bk539 = 0, $bk541 = 0, $bk594 = 0, $bk60 = 0, $bk626 = 0, $bk648 = 0, $bk651 = 0, $bk70 = 0, $child = 0;
 var $child161 = 0, $child358 = 0, $child445 = 0, $child581 = 0, $cmp = 0, $cmp10 = 0, $cmp101 = 0, $cmp106 = 0, $cmp115 = 0, $cmp119 = 0, $cmp13 = 0, $cmp132 = 0, $cmp151 = 0, $cmp155 = 0, $cmp163 = 0, $cmp167 = 0, $cmp17 = 0, $cmp180 = 0, $cmp184 = 0, $cmp20 = 0;
 var $cmp203 = 0, $cmp218 = 0, $cmp227 = 0, $cmp23 = 0, $cmp235 = 0, $cmp244 = 0, $cmp260 = 0, $cmp272 = 0, $cmp276 = 0, $cmp28 = 0, $cmp280 = 0, $cmp289 = 0, $cmp300 = 0, $cmp304 = 0, $cmp308 = 0, $cmp330 = 0, $cmp337 = 0, $cmp341 = 0, $cmp345 = 0, $cmp36 = 0;
 var $cmp360 = 0, $cmp365 = 0, $cmp372 = 0, $cmp377 = 0, $cmp384 = 0, $cmp393 = 0, $cmp40 = 0, $cmp400 = 0, $cmp414 = 0, $cmp433 = 0, $cmp437 = 0, $cmp44 = 0, $cmp447 = 0, $cmp451 = 0, $cmp464 = 0, $cmp468 = 0, $cmp489 = 0, $cmp508 = 0, $cmp529 = 0, $cmp547 = 0;
 var $cmp551 = 0, $cmp598 = 0, $cmp607 = 0, $cmp61 = 0, $cmp615 = 0, $cmp620 = 0, $cmp641 = 0, $cmp68 = 0, $cmp7 = 0, $cmp71 = 0, $cmp75 = 0, $cmp87 = 0, $cmp91 = 0, $cmp96 = 0, $cond = 0, $cond4 = 0, $cond5 = 0, $fd = 0, $fd264 = 0, $fd307 = 0;
 var $fd318$pre$phiZ2D = 0, $fd334 = 0, $fd344 = 0, $fd43 = 0, $fd53$pre$phiZ2D = 0, $fd540 = 0, $fd595 = 0, $fd627 = 0, $fd635 = 0, $fd65 = 0, $fd650 = 0, $fd74 = 0, $head = 0, $head201 = 0, $head208 = 0, $head223 = 0, $head233 = 0, $head251 = 0, $head485 = 0, $head503 = 0;
 var $head605 = 0, $idx$neg = 0, $index = 0, $index398 = 0, $index580 = 0, $neg = 0, $neg127 = 0, $neg293 = 0, $neg408 = 0, $not$cmp139 = 0, $not$cmp421 = 0, $not$cmp637 = 0, $or = 0, $or232 = 0, $or250 = 0, $or484 = 0, $or502 = 0, $or525 = 0, $or592 = 0, $p$addr$1 = 0;
 var $parent = 0, $parent160 = 0, $parent174 = 0, $parent191 = 0, $parent327 = 0, $parent444 = 0, $parent458 = 0, $parent475 = 0, $parent593 = 0, $parent625 = 0, $parent652 = 0, $psize$addr$1 = 0, $psize$addr$2 = 0, $shl = 0, $shl126 = 0, $shl270 = 0, $shl292 = 0, $shl31 = 0, $shl407 = 0, $shl515 = 0;
 var $shl519 = 0, $shl557 = 0, $shl562 = 0, $shl568 = 0, $shl571 = 0, $shl586 = 0, $shl604 = 0, $shl614 = 0, $shr = 0, $shr259 = 0, $shr507 = 0, $shr546 = 0, $shr555 = 0, $shr559 = 0, $shr564 = 0, $shr569 = 0, $shr573 = 0, $shr600 = 0, $shr611 = 0, $sub = 0;
 var $sub558 = 0, $sub563 = 0, $sub567 = 0, $sub603 = 0, $tobool = 0, $tobool225 = 0, $tobool521 = 0, $tobool588 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $add$ptr = (($p) + ($psize)|0);
 $head = ((($p)) + 4|0);
 $0 = load4($head);
 $and = $0 & 1;
 $tobool = ($and|0)==(0);
 L1: do {
  if ($tobool) {
   $1 = load4($p);
   $and2 = $0 & 3;
   $cmp = ($and2|0)==(0);
   if ($cmp) {
    return;
   }
   $idx$neg = (0 - ($1))|0;
   $add$ptr5 = (($p) + ($idx$neg)|0);
   $add6 = (($1) + ($psize))|0;
   $2 = load4((7216));
   $cmp7 = ($add$ptr5>>>0)<($2>>>0);
   if ($cmp7) {
    _abort();
    // unreachable;
   }
   $3 = load4((7220));
   $cmp10 = ($add$ptr5|0)==($3|0);
   if ($cmp10) {
    $head201 = ((($add$ptr)) + 4|0);
    $27 = load4($head201);
    $and202 = $27 & 3;
    $cmp203 = ($and202|0)==(3);
    if (!($cmp203)) {
     $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
     break;
    }
    $add$ptr209 = (($add$ptr5) + ($add6)|0);
    $head208 = ((($add$ptr5)) + 4|0);
    $or = $add6 | 1;
    $and207 = $27 & -2;
    store4((7208),$add6);
    store4($head201,$and207);
    store4($head208,$or);
    store4($add$ptr209,$add6);
    return;
   }
   $shr = $1 >>> 3;
   $cmp13 = ($1>>>0)<(256);
   if ($cmp13) {
    $fd = ((($add$ptr5)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr5)) + 12|0);
    $5 = load4($bk);
    $shl = $shr << 1;
    $arrayidx = (7240 + ($shl<<2)|0);
    $cmp17 = ($4|0)==($arrayidx|0);
    if (!($cmp17)) {
     $cmp20 = ($4>>>0)<($2>>>0);
     if ($cmp20) {
      _abort();
      // unreachable;
     }
     $bk22 = ((($4)) + 12|0);
     $6 = load4($bk22);
     $cmp23 = ($6|0)==($add$ptr5|0);
     if (!($cmp23)) {
      _abort();
      // unreachable;
     }
    }
    $cmp28 = ($5|0)==($4|0);
    if ($cmp28) {
     $shl31 = 1 << $shr;
     $neg = $shl31 ^ -1;
     $7 = load4(7200);
     $and32 = $7 & $neg;
     store4(7200,$and32);
     $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
     break;
    }
    $cmp36 = ($5|0)==($arrayidx|0);
    if ($cmp36) {
     $$pre9 = ((($5)) + 8|0);
     $fd53$pre$phiZ2D = $$pre9;
    } else {
     $cmp40 = ($5>>>0)<($2>>>0);
     if ($cmp40) {
      _abort();
      // unreachable;
     }
     $fd43 = ((($5)) + 8|0);
     $8 = load4($fd43);
     $cmp44 = ($8|0)==($add$ptr5|0);
     if ($cmp44) {
      $fd53$pre$phiZ2D = $fd43;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk52 = ((($4)) + 12|0);
    store4($bk52,$5);
    store4($fd53$pre$phiZ2D,$4);
    $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
    break;
   }
   $parent = ((($add$ptr5)) + 24|0);
   $9 = load4($parent);
   $bk60 = ((($add$ptr5)) + 12|0);
   $10 = load4($bk60);
   $cmp61 = ($10|0)==($add$ptr5|0);
   do {
    if ($cmp61) {
     $child = ((($add$ptr5)) + 16|0);
     $arrayidx86 = ((($child)) + 4|0);
     $14 = load4($arrayidx86);
     $cmp87 = ($14|0)==(0|0);
     if ($cmp87) {
      $15 = load4($child);
      $cmp91 = ($15|0)==(0|0);
      if ($cmp91) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $15;$RP$1 = $child;
      }
     } else {
      $R$1 = $14;$RP$1 = $arrayidx86;
     }
     while(1) {
      $arrayidx95 = ((($R$1)) + 20|0);
      $16 = load4($arrayidx95);
      $cmp96 = ($16|0)==(0|0);
      if (!($cmp96)) {
       $R$1 = $16;$RP$1 = $arrayidx95;
       continue;
      }
      $arrayidx100 = ((($R$1)) + 16|0);
      $17 = load4($arrayidx100);
      $cmp101 = ($17|0)==(0|0);
      if ($cmp101) {
       break;
      } else {
       $R$1 = $17;$RP$1 = $arrayidx100;
      }
     }
     $cmp106 = ($RP$1>>>0)<($2>>>0);
     if ($cmp106) {
      _abort();
      // unreachable;
     } else {
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd65 = ((($add$ptr5)) + 8|0);
     $11 = load4($fd65);
     $cmp68 = ($11>>>0)<($2>>>0);
     if ($cmp68) {
      _abort();
      // unreachable;
     }
     $bk70 = ((($11)) + 12|0);
     $12 = load4($bk70);
     $cmp71 = ($12|0)==($add$ptr5|0);
     if (!($cmp71)) {
      _abort();
      // unreachable;
     }
     $fd74 = ((($10)) + 8|0);
     $13 = load4($fd74);
     $cmp75 = ($13|0)==($add$ptr5|0);
     if ($cmp75) {
      store4($bk70,$10);
      store4($fd74,$11);
      $R$3 = $10;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp115 = ($9|0)==(0|0);
   if ($cmp115) {
    $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
   } else {
    $index = ((($add$ptr5)) + 28|0);
    $18 = load4($index);
    $arrayidx118 = (7504 + ($18<<2)|0);
    $19 = load4($arrayidx118);
    $cmp119 = ($add$ptr5|0)==($19|0);
    do {
     if ($cmp119) {
      store4($arrayidx118,$R$3);
      $cond4 = ($R$3|0)==(0|0);
      if ($cond4) {
       $shl126 = 1 << $18;
       $neg127 = $shl126 ^ -1;
       $20 = load4((7204));
       $and128 = $20 & $neg127;
       store4((7204),$and128);
       $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
       break L1;
      }
     } else {
      $21 = load4((7216));
      $cmp132 = ($9>>>0)<($21>>>0);
      if ($cmp132) {
       _abort();
       // unreachable;
      } else {
       $arrayidx138 = ((($9)) + 16|0);
       $22 = load4($arrayidx138);
       $not$cmp139 = ($22|0)!=($add$ptr5|0);
       $$sink = $not$cmp139&1;
       $arrayidx146 = (((($9)) + 16|0) + ($$sink<<2)|0);
       store4($arrayidx146,$R$3);
       $cmp151 = ($R$3|0)==(0|0);
       if ($cmp151) {
        $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
        break L1;
       } else {
        break;
       }
      }
     }
    } while(0);
    $23 = load4((7216));
    $cmp155 = ($R$3>>>0)<($23>>>0);
    if ($cmp155) {
     _abort();
     // unreachable;
    }
    $parent160 = ((($R$3)) + 24|0);
    store4($parent160,$9);
    $child161 = ((($add$ptr5)) + 16|0);
    $24 = load4($child161);
    $cmp163 = ($24|0)==(0|0);
    do {
     if (!($cmp163)) {
      $cmp167 = ($24>>>0)<($23>>>0);
      if ($cmp167) {
       _abort();
       // unreachable;
      } else {
       $arrayidx173 = ((($R$3)) + 16|0);
       store4($arrayidx173,$24);
       $parent174 = ((($24)) + 24|0);
       store4($parent174,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx179 = ((($child161)) + 4|0);
    $25 = load4($arrayidx179);
    $cmp180 = ($25|0)==(0|0);
    if ($cmp180) {
     $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
    } else {
     $26 = load4((7216));
     $cmp184 = ($25>>>0)<($26>>>0);
     if ($cmp184) {
      _abort();
      // unreachable;
     } else {
      $arrayidx190 = ((($R$3)) + 20|0);
      store4($arrayidx190,$25);
      $parent191 = ((($25)) + 24|0);
      store4($parent191,$R$3);
      $p$addr$1 = $add$ptr5;$psize$addr$1 = $add6;
      break;
     }
    }
   }
  } else {
   $p$addr$1 = $p;$psize$addr$1 = $psize;
  }
 } while(0);
 $28 = load4((7216));
 $cmp218 = ($add$ptr>>>0)<($28>>>0);
 if ($cmp218) {
  _abort();
  // unreachable;
 }
 $head223 = ((($add$ptr)) + 4|0);
 $29 = load4($head223);
 $and224 = $29 & 2;
 $tobool225 = ($and224|0)==(0);
 if ($tobool225) {
  $30 = load4((7224));
  $cmp227 = ($add$ptr|0)==($30|0);
  $31 = load4((7220));
  if ($cmp227) {
   $32 = load4((7212));
   $add230 = (($32) + ($psize$addr$1))|0;
   store4((7212),$add230);
   store4((7224),$p$addr$1);
   $or232 = $add230 | 1;
   $head233 = ((($p$addr$1)) + 4|0);
   store4($head233,$or232);
   $cmp235 = ($p$addr$1|0)==($31|0);
   if (!($cmp235)) {
    return;
   }
   store4((7220),0);
   store4((7208),0);
   return;
  }
  $cmp244 = ($add$ptr|0)==($31|0);
  if ($cmp244) {
   $33 = load4((7208));
   $add248 = (($33) + ($psize$addr$1))|0;
   store4((7208),$add248);
   store4((7220),$p$addr$1);
   $or250 = $add248 | 1;
   $head251 = ((($p$addr$1)) + 4|0);
   store4($head251,$or250);
   $add$ptr252 = (($p$addr$1) + ($add248)|0);
   store4($add$ptr252,$add248);
   return;
  }
  $and257 = $29 & -8;
  $add258 = (($and257) + ($psize$addr$1))|0;
  $shr259 = $29 >>> 3;
  $cmp260 = ($29>>>0)<(256);
  L96: do {
   if ($cmp260) {
    $fd264 = ((($add$ptr)) + 8|0);
    $34 = load4($fd264);
    $bk266 = ((($add$ptr)) + 12|0);
    $35 = load4($bk266);
    $shl270 = $shr259 << 1;
    $arrayidx271 = (7240 + ($shl270<<2)|0);
    $cmp272 = ($34|0)==($arrayidx271|0);
    if (!($cmp272)) {
     $cmp276 = ($34>>>0)<($28>>>0);
     if ($cmp276) {
      _abort();
      // unreachable;
     }
     $bk279 = ((($34)) + 12|0);
     $36 = load4($bk279);
     $cmp280 = ($36|0)==($add$ptr|0);
     if (!($cmp280)) {
      _abort();
      // unreachable;
     }
    }
    $cmp289 = ($35|0)==($34|0);
    if ($cmp289) {
     $shl292 = 1 << $shr259;
     $neg293 = $shl292 ^ -1;
     $37 = load4(7200);
     $and295 = $37 & $neg293;
     store4(7200,$and295);
     break;
    }
    $cmp300 = ($35|0)==($arrayidx271|0);
    if ($cmp300) {
     $$pre8 = ((($35)) + 8|0);
     $fd318$pre$phiZ2D = $$pre8;
    } else {
     $cmp304 = ($35>>>0)<($28>>>0);
     if ($cmp304) {
      _abort();
      // unreachable;
     }
     $fd307 = ((($35)) + 8|0);
     $38 = load4($fd307);
     $cmp308 = ($38|0)==($add$ptr|0);
     if ($cmp308) {
      $fd318$pre$phiZ2D = $fd307;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk317 = ((($34)) + 12|0);
    store4($bk317,$35);
    store4($fd318$pre$phiZ2D,$34);
   } else {
    $parent327 = ((($add$ptr)) + 24|0);
    $39 = load4($parent327);
    $bk329 = ((($add$ptr)) + 12|0);
    $40 = load4($bk329);
    $cmp330 = ($40|0)==($add$ptr|0);
    do {
     if ($cmp330) {
      $child358 = ((($add$ptr)) + 16|0);
      $arrayidx359 = ((($child358)) + 4|0);
      $44 = load4($arrayidx359);
      $cmp360 = ($44|0)==(0|0);
      if ($cmp360) {
       $45 = load4($child358);
       $cmp365 = ($45|0)==(0|0);
       if ($cmp365) {
        $R328$3 = 0;
        break;
       } else {
        $R328$1 = $45;$RP357$1 = $child358;
       }
      } else {
       $R328$1 = $44;$RP357$1 = $arrayidx359;
      }
      while(1) {
       $arrayidx371 = ((($R328$1)) + 20|0);
       $46 = load4($arrayidx371);
       $cmp372 = ($46|0)==(0|0);
       if (!($cmp372)) {
        $R328$1 = $46;$RP357$1 = $arrayidx371;
        continue;
       }
       $arrayidx376 = ((($R328$1)) + 16|0);
       $47 = load4($arrayidx376);
       $cmp377 = ($47|0)==(0|0);
       if ($cmp377) {
        break;
       } else {
        $R328$1 = $47;$RP357$1 = $arrayidx376;
       }
      }
      $cmp384 = ($RP357$1>>>0)<($28>>>0);
      if ($cmp384) {
       _abort();
       // unreachable;
      } else {
       store4($RP357$1,0);
       $R328$3 = $R328$1;
       break;
      }
     } else {
      $fd334 = ((($add$ptr)) + 8|0);
      $41 = load4($fd334);
      $cmp337 = ($41>>>0)<($28>>>0);
      if ($cmp337) {
       _abort();
       // unreachable;
      }
      $bk340 = ((($41)) + 12|0);
      $42 = load4($bk340);
      $cmp341 = ($42|0)==($add$ptr|0);
      if (!($cmp341)) {
       _abort();
       // unreachable;
      }
      $fd344 = ((($40)) + 8|0);
      $43 = load4($fd344);
      $cmp345 = ($43|0)==($add$ptr|0);
      if ($cmp345) {
       store4($bk340,$40);
       store4($fd344,$41);
       $R328$3 = $40;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $cmp393 = ($39|0)==(0|0);
    if (!($cmp393)) {
     $index398 = ((($add$ptr)) + 28|0);
     $48 = load4($index398);
     $arrayidx399 = (7504 + ($48<<2)|0);
     $49 = load4($arrayidx399);
     $cmp400 = ($add$ptr|0)==($49|0);
     do {
      if ($cmp400) {
       store4($arrayidx399,$R328$3);
       $cond5 = ($R328$3|0)==(0|0);
       if ($cond5) {
        $shl407 = 1 << $48;
        $neg408 = $shl407 ^ -1;
        $50 = load4((7204));
        $and410 = $50 & $neg408;
        store4((7204),$and410);
        break L96;
       }
      } else {
       $51 = load4((7216));
       $cmp414 = ($39>>>0)<($51>>>0);
       if ($cmp414) {
        _abort();
        // unreachable;
       } else {
        $arrayidx420 = ((($39)) + 16|0);
        $52 = load4($arrayidx420);
        $not$cmp421 = ($52|0)!=($add$ptr|0);
        $$sink3 = $not$cmp421&1;
        $arrayidx428 = (((($39)) + 16|0) + ($$sink3<<2)|0);
        store4($arrayidx428,$R328$3);
        $cmp433 = ($R328$3|0)==(0|0);
        if ($cmp433) {
         break L96;
        } else {
         break;
        }
       }
      }
     } while(0);
     $53 = load4((7216));
     $cmp437 = ($R328$3>>>0)<($53>>>0);
     if ($cmp437) {
      _abort();
      // unreachable;
     }
     $parent444 = ((($R328$3)) + 24|0);
     store4($parent444,$39);
     $child445 = ((($add$ptr)) + 16|0);
     $54 = load4($child445);
     $cmp447 = ($54|0)==(0|0);
     do {
      if (!($cmp447)) {
       $cmp451 = ($54>>>0)<($53>>>0);
       if ($cmp451) {
        _abort();
        // unreachable;
       } else {
        $arrayidx457 = ((($R328$3)) + 16|0);
        store4($arrayidx457,$54);
        $parent458 = ((($54)) + 24|0);
        store4($parent458,$R328$3);
        break;
       }
      }
     } while(0);
     $arrayidx463 = ((($child445)) + 4|0);
     $55 = load4($arrayidx463);
     $cmp464 = ($55|0)==(0|0);
     if (!($cmp464)) {
      $56 = load4((7216));
      $cmp468 = ($55>>>0)<($56>>>0);
      if ($cmp468) {
       _abort();
       // unreachable;
      } else {
       $arrayidx474 = ((($R328$3)) + 20|0);
       store4($arrayidx474,$55);
       $parent475 = ((($55)) + 24|0);
       store4($parent475,$R328$3);
       break;
      }
     }
    }
   }
  } while(0);
  $or484 = $add258 | 1;
  $head485 = ((($p$addr$1)) + 4|0);
  store4($head485,$or484);
  $add$ptr486 = (($p$addr$1) + ($add258)|0);
  store4($add$ptr486,$add258);
  $57 = load4((7220));
  $cmp489 = ($p$addr$1|0)==($57|0);
  if ($cmp489) {
   store4((7208),$add258);
   return;
  } else {
   $psize$addr$2 = $add258;
  }
 } else {
  $and501 = $29 & -2;
  store4($head223,$and501);
  $or502 = $psize$addr$1 | 1;
  $head503 = ((($p$addr$1)) + 4|0);
  store4($head503,$or502);
  $add$ptr504 = (($p$addr$1) + ($psize$addr$1)|0);
  store4($add$ptr504,$psize$addr$1);
  $psize$addr$2 = $psize$addr$1;
 }
 $shr507 = $psize$addr$2 >>> 3;
 $cmp508 = ($psize$addr$2>>>0)<(256);
 if ($cmp508) {
  $shl515 = $shr507 << 1;
  $arrayidx516 = (7240 + ($shl515<<2)|0);
  $58 = load4(7200);
  $shl519 = 1 << $shr507;
  $and520 = $58 & $shl519;
  $tobool521 = ($and520|0)==(0);
  if ($tobool521) {
   $or525 = $58 | $shl519;
   store4(7200,$or525);
   $$pre = ((($arrayidx516)) + 8|0);
   $$pre$phiZ2D = $$pre;$F517$0 = $arrayidx516;
  } else {
   $59 = ((($arrayidx516)) + 8|0);
   $60 = load4($59);
   $61 = load4((7216));
   $cmp529 = ($60>>>0)<($61>>>0);
   if ($cmp529) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $59;$F517$0 = $60;
   }
  }
  store4($$pre$phiZ2D,$p$addr$1);
  $bk539 = ((($F517$0)) + 12|0);
  store4($bk539,$p$addr$1);
  $fd540 = ((($p$addr$1)) + 8|0);
  store4($fd540,$F517$0);
  $bk541 = ((($p$addr$1)) + 12|0);
  store4($bk541,$arrayidx516);
  return;
 }
 $shr546 = $psize$addr$2 >>> 8;
 $cmp547 = ($shr546|0)==(0);
 if ($cmp547) {
  $I545$0 = 0;
 } else {
  $cmp551 = ($psize$addr$2>>>0)>(16777215);
  if ($cmp551) {
   $I545$0 = 31;
  } else {
   $sub = (($shr546) + 1048320)|0;
   $shr555 = $sub >>> 16;
   $and556 = $shr555 & 8;
   $shl557 = $shr546 << $and556;
   $sub558 = (($shl557) + 520192)|0;
   $shr559 = $sub558 >>> 16;
   $and560 = $shr559 & 4;
   $add561 = $and560 | $and556;
   $shl562 = $shl557 << $and560;
   $sub563 = (($shl562) + 245760)|0;
   $shr564 = $sub563 >>> 16;
   $and565 = $shr564 & 2;
   $add566 = $add561 | $and565;
   $sub567 = (14 - ($add566))|0;
   $shl568 = $shl562 << $and565;
   $shr569 = $shl568 >>> 15;
   $add570 = (($sub567) + ($shr569))|0;
   $shl571 = $add570 << 1;
   $add572 = (($add570) + 7)|0;
   $shr573 = $psize$addr$2 >>> $add572;
   $and574 = $shr573 & 1;
   $add575 = $and574 | $shl571;
   $I545$0 = $add575;
  }
 }
 $arrayidx579 = (7504 + ($I545$0<<2)|0);
 $index580 = ((($p$addr$1)) + 28|0);
 store4($index580,$I545$0);
 $child581 = ((($p$addr$1)) + 16|0);
 $arrayidx582 = ((($p$addr$1)) + 20|0);
 store4($arrayidx582,0);
 store4($child581,0);
 $62 = load4((7204));
 $shl586 = 1 << $I545$0;
 $and587 = $62 & $shl586;
 $tobool588 = ($and587|0)==(0);
 if ($tobool588) {
  $or592 = $62 | $shl586;
  store4((7204),$or592);
  store4($arrayidx579,$p$addr$1);
  $parent593 = ((($p$addr$1)) + 24|0);
  store4($parent593,$arrayidx579);
  $bk594 = ((($p$addr$1)) + 12|0);
  store4($bk594,$p$addr$1);
  $fd595 = ((($p$addr$1)) + 8|0);
  store4($fd595,$p$addr$1);
  return;
 }
 $63 = load4($arrayidx579);
 $cmp598 = ($I545$0|0)==(31);
 $shr600 = $I545$0 >>> 1;
 $sub603 = (25 - ($shr600))|0;
 $cond = $cmp598 ? 0 : $sub603;
 $shl604 = $psize$addr$2 << $cond;
 $K597$0 = $shl604;$T$0 = $63;
 while(1) {
  $head605 = ((($T$0)) + 4|0);
  $64 = load4($head605);
  $and606 = $64 & -8;
  $cmp607 = ($and606|0)==($psize$addr$2|0);
  if ($cmp607) {
   label = 121;
   break;
  }
  $shr611 = $K597$0 >>> 31;
  $arrayidx613 = (((($T$0)) + 16|0) + ($shr611<<2)|0);
  $shl614 = $K597$0 << 1;
  $65 = load4($arrayidx613);
  $cmp615 = ($65|0)==(0|0);
  if ($cmp615) {
   label = 118;
   break;
  } else {
   $K597$0 = $shl614;$T$0 = $65;
  }
 }
 if ((label|0) == 118) {
  $66 = load4((7216));
  $cmp620 = ($arrayidx613>>>0)<($66>>>0);
  if ($cmp620) {
   _abort();
   // unreachable;
  }
  store4($arrayidx613,$p$addr$1);
  $parent625 = ((($p$addr$1)) + 24|0);
  store4($parent625,$T$0);
  $bk626 = ((($p$addr$1)) + 12|0);
  store4($bk626,$p$addr$1);
  $fd627 = ((($p$addr$1)) + 8|0);
  store4($fd627,$p$addr$1);
  return;
 }
 else if ((label|0) == 121) {
  $fd635 = ((($T$0)) + 8|0);
  $67 = load4($fd635);
  $68 = load4((7216));
  $cmp641 = ($67>>>0)>=($68>>>0);
  $not$cmp637 = ($T$0>>>0)>=($68>>>0);
  $69 = $cmp641 & $not$cmp637;
  if (!($69)) {
   _abort();
   // unreachable;
  }
  $bk648 = ((($67)) + 12|0);
  store4($bk648,$p$addr$1);
  store4($fd635,$p$addr$1);
  $fd650 = ((($p$addr$1)) + 8|0);
  store4($fd650,$67);
  $bk651 = ((($p$addr$1)) + 12|0);
  store4($bk651,$T$0);
  $parent652 = ((($p$addr$1)) + 24|0);
  store4($parent652,0);
  return;
 }
}
function _exp($x) {
 $x = +$x;
 var $0 = i64(), $1 = 0.0, $add = 0.0, $add51 = 0.0, $add56 = 0.0, $add58 = 0.0, $add60 = 0.0, $add62 = 0.0, $add68 = 0.0, $add69 = 0.0, $and = 0, $and9 = i64(), $arrayidx = 0, $call74 = 0.0, $cmp = 0, $cmp10 = 0, $cmp17 = 0, $cmp21 = 0, $cmp24 = 0, $cmp30 = 0;
 var $cmp33 = 0, $cmp47 = 0, $cmp70 = 0, $conv = 0, $conv37 = 0, $conv40 = 0.0, $div = 0.0, $hi$0 = 0.0, $k$0 = 0, $k$1 = 0, $lo$0 = 0.0, $mul = 0.0, $mul36 = 0.0, $mul41 = 0.0, $mul44 = 0.0, $mul54 = 0.0, $mul55 = 0.0, $mul57 = 0.0, $mul59 = 0.0, $mul61 = 0.0;
 var $mul63 = 0.0, $mul65 = 0.0, $or$cond = 0, $retval$0 = 0.0, $shr = i64(), $shr1 = 0, $shr139 = i64(), $sub = 0, $sub38 = 0, $sub42 = 0.0, $sub45 = 0.0, $sub64 = 0.0, $sub66 = 0.0, $sub67 = 0.0, $x$addr$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(32,0));
 $conv = i64_trunc($shr);
 $shr139 = i64_lshr($0,i64_const(63,0));
 $shr1 = i64_trunc($shr139);
 $and = $conv & 2147483647;
 $cmp = ($and>>>0)>(1082532650);
 do {
  if ($cmp) {
   $and9 = i64_and($0,i64_const(4294967295,2147483647));
   $cmp10 = i64_ugt($and9,i64_const(0,2146435072));
   if ($cmp10) {
    $retval$0 = $x;
    return (+$retval$0);
   }
   $cmp17 = $x > 709.78271289338397;
   if ($cmp17) {
    $mul = $x * 8.9884656743115795E+307;
    $retval$0 = $mul;
    return (+$retval$0);
   } else {
    $cmp21 = $x < -708.39641853226408;
    $cmp24 = $x < -745.13321910194111;
    $or$cond = $cmp21 & $cmp24;
    if ($or$cond) {
     $retval$0 = 0.0;
    } else {
     label = 8;
     break;
    }
    return (+$retval$0);
   }
  } else {
   $cmp30 = ($and>>>0)>(1071001154);
   if ($cmp30) {
    $cmp33 = ($and>>>0)>(1072734897);
    if ($cmp33) {
     label = 8;
     break;
    }
    $sub = $shr1 ^ 1;
    $sub38 = (($sub) - ($shr1))|0;
    $k$0 = $sub38;
    label = 10;
    break;
   }
   $cmp47 = ($and>>>0)>(1043333120);
   if ($cmp47) {
    $hi$0 = $x;$k$1 = 0;$lo$0 = 0.0;$x$addr$0 = $x;
   } else {
    $add51 = $x + 1.0;
    $retval$0 = $add51;
    return (+$retval$0);
   }
  }
 } while(0);
 if ((label|0) == 8) {
  $mul36 = $x * 1.4426950408889634;
  $arrayidx = (1120 + ($shr1<<3)|0);
  $1 = loadd($arrayidx);
  $add = $mul36 + $1;
  $conv37 = (~~(($add)));
  $k$0 = $conv37;
  label = 10;
 }
 if ((label|0) == 10) {
  $conv40 = (+($k$0|0));
  $mul41 = $conv40 * 0.69314718036912382;
  $sub42 = $x - $mul41;
  $mul44 = $conv40 * 1.9082149292705877E-10;
  $sub45 = $sub42 - $mul44;
  $hi$0 = $sub42;$k$1 = $k$0;$lo$0 = $mul44;$x$addr$0 = $sub45;
 }
 $mul54 = $x$addr$0 * $x$addr$0;
 $mul55 = $mul54 * 4.1381367970572385E-8;
 $add56 = $mul55 + -1.6533902205465252E-6;
 $mul57 = $mul54 * $add56;
 $add58 = $mul57 + 6.6137563214379344E-5;
 $mul59 = $mul54 * $add58;
 $add60 = $mul59 + -0.0027777777777015593;
 $mul61 = $mul54 * $add60;
 $add62 = $mul61 + 0.16666666666666602;
 $mul63 = $mul54 * $add62;
 $sub64 = $x$addr$0 - $mul63;
 $mul65 = $x$addr$0 * $sub64;
 $sub66 = 2.0 - $sub64;
 $div = $mul65 / $sub66;
 $sub67 = $div - $lo$0;
 $add68 = $hi$0 + $sub67;
 $add69 = $add68 + 1.0;
 $cmp70 = ($k$1|0)==(0);
 if ($cmp70) {
  $retval$0 = $add69;
  return (+$retval$0);
 }
 $call74 = (+_scalbn($add69,$k$1));
 $retval$0 = $call74;
 return (+$retval$0);
}
function _log($x) {
 $x = +$x;
 var $0 = i64(), $1 = i64(), $2 = 0.0, $add = 0, $add35 = 0, $add36 = 0, $add46 = 0.0, $add51 = 0.0, $add53 = 0.0, $add56 = 0.0, $add58 = 0.0, $add60 = 0.0, $add62 = 0.0, $add64 = 0.0, $add67 = 0.0, $add69 = 0.0, $add71 = 0.0, $and = 0, $and40 = i64(), $cmp = 0;
 var $cmp19 = 0, $cmp23 = 0, $cmp27 = 0, $cmp5 = 0, $conv = 0, $conv18 = 0, $conv37 = i64(), $conv63 = 0.0, $div = 0.0, $div11 = 0.0, $div47 = 0.0, $hx$0 = 0, $k$0 = 0, $mul = 0.0, $mul14 = 0.0, $mul44 = 0.0, $mul45 = 0.0, $mul48 = 0.0, $mul49 = 0.0, $mul50 = 0.0;
 var $mul52 = 0.0, $mul54 = 0.0, $mul55 = 0.0, $mul57 = 0.0, $mul59 = 0.0, $mul61 = 0.0, $mul65 = 0.0, $mul66 = 0.0, $mul70 = 0.0, $or = i64(), $or$cond = 0, $or$cond54 = 0, $retval$0 = 0.0, $shl$mask = i64(), $shl26$mask = i64(), $shl38 = i64(), $shr = i64(), $shr17 = i64(), $shr33 = 0, $sub = 0.0;
 var $sub43 = 0.0, $sub68 = 0.0, $tobool = 0, $u$sroa$0$0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(32,0));
 $conv = i64_trunc($shr);
 $cmp = ($conv>>>0)<(1048576);
 $tobool = i64_slt($0,i64_const(0,0));
 $or$cond = $tobool | $cmp;
 do {
  if ($or$cond) {
   $shl$mask = i64_and($0,i64_const(4294967295,2147483647));
   $cmp5 = i64_eq($shl$mask,i64_const(0,0));
   if ($cmp5) {
    $mul = $x * $x;
    $div = -1.0 / $mul;
    $retval$0 = $div;
    return (+$retval$0);
   }
   if (!($tobool)) {
    $mul14 = $x * 18014398509481984.0;
    $1 = i64_bc2i($mul14);
    $shr17 = i64_lshr($1,i64_const(32,0));
    $conv18 = i64_trunc($shr17);
    $hx$0 = $conv18;$k$0 = -1077;$u$sroa$0$0 = $1;
    break;
   }
   $sub = $x - $x;
   $div11 = $sub / 0.0;
   $retval$0 = $div11;
   return (+$retval$0);
  } else {
   $cmp19 = ($conv>>>0)>(2146435071);
   if ($cmp19) {
    $retval$0 = $x;
    return (+$retval$0);
   }
   $cmp23 = ($conv|0)==(1072693248);
   $shl26$mask = i64_and($0,i64_const(4294967295,0));
   $cmp27 = i64_eq($shl26$mask,i64_const(0,0));
   $or$cond54 = $cmp27 & $cmp23;
   if ($or$cond54) {
    $retval$0 = 0.0;
    return (+$retval$0);
   } else {
    $hx$0 = $conv;$k$0 = -1023;$u$sroa$0$0 = $0;
   }
  }
 } while(0);
 $add = (($hx$0) + 614242)|0;
 $shr33 = $add >>> 20;
 $add35 = (($k$0) + ($shr33))|0;
 $and = $add & 1048575;
 $add36 = (($and) + 1072079006)|0;
 $conv37 = i64_zext($add36>>>0);
 $shl38 = i64_shl($conv37,i64_const(32,0));
 $and40 = i64_and($u$sroa$0$0,i64_const(4294967295,0));
 $or = i64_or($shl38,$and40);
 $2 = i64_bc2d($or);
 $sub43 = $2 + -1.0;
 $mul44 = $sub43 * 0.5;
 $mul45 = $sub43 * $mul44;
 $add46 = $sub43 + 2.0;
 $div47 = $sub43 / $add46;
 $mul48 = $div47 * $div47;
 $mul49 = $mul48 * $mul48;
 $mul50 = $mul49 * 0.15313837699209373;
 $add51 = $mul50 + 0.22222198432149784;
 $mul52 = $mul49 * $add51;
 $add53 = $mul52 + 0.39999999999409419;
 $mul54 = $mul49 * $add53;
 $mul55 = $mul49 * 0.14798198605116586;
 $add56 = $mul55 + 0.1818357216161805;
 $mul57 = $mul49 * $add56;
 $add58 = $mul57 + 0.28571428743662391;
 $mul59 = $mul49 * $add58;
 $add60 = $mul59 + 0.66666666666667351;
 $mul61 = $mul48 * $add60;
 $add62 = $mul54 + $mul61;
 $conv63 = (+($add35|0));
 $add64 = $mul45 + $add62;
 $mul65 = $div47 * $add64;
 $mul66 = $conv63 * 1.9082149292705877E-10;
 $add67 = $mul66 + $mul65;
 $sub68 = $add67 - $mul45;
 $add69 = $sub43 + $sub68;
 $mul70 = $conv63 * 0.69314718036912382;
 $add71 = $mul70 + $add69;
 $retval$0 = $add71;
 return (+$retval$0);
}
function __Znwj($size) {
 $size = $size|0;
 var $$size = 0, $call = 0, $call$lcssa = 0, $call2 = 0, $cmp = 0, $cmp1 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($size|0)==(0);
 $$size = $cmp ? 1 : $size;
 while(1) {
  $call = (_malloc($$size)|0);
  $cmp1 = ($call|0)==(0|0);
  if (!($cmp1)) {
   $call$lcssa = $call;
   break;
  }
  $call2 = (__ZSt15get_new_handlerv()|0);
  $tobool = ($call2|0)==(0|0);
  if ($tobool) {
   $call$lcssa = 0;
   break;
  }
  FUNCTION_TABLE_v[$call2 & 3]();
 }
 return ($call$lcssa|0);
}
function __Znaj($size) {
 $size = $size|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Znwj($size)|0);
 return ($call|0);
}
function __ZdlPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function __ZdaPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($ptr);
 return;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = i64(), $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__type_name$i = 0, $add$ptr = 0, $and = i64(), $call = 0, $call10 = 0, $call14 = 0, $cmp = 0, $cmp7 = 0, $cond = 0, $exception_class = 0;
 var $primaryException = 0, $thrown_object = 0, $tobool = 0, $tobool1 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vfn = 0, $vfn13 = 0, $vtable = 0, $vtable12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 36|0;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $add$ptr = ((($0)) + 80|0);
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if (!($cmp)) {
    $9 = load4(2376);
    store4($vararg_buffer7,$9);
    _abort_message(6622,$vararg_buffer7);
    // unreachable;
   }
   $cmp7 = i64_eq($1,i64_const(1126902529,1129074247));
   if ($cmp7) {
    $primaryException = ((($0)) + 44|0);
    $2 = load4($primaryException);
    $cond = $2;
   } else {
    $cond = $add$ptr;
   }
   store4($thrown_object,$cond);
   $3 = load4($0);
   $__type_name$i = ((($3)) + 4|0);
   $4 = load4($__type_name$i);
   $vtable = load4(1136);
   $vfn = ((($vtable)) + 16|0);
   $5 = load4($vfn);
   $call10 = (FUNCTION_TABLE_iiii[$5 & 15](1136,$3,$thrown_object)|0);
   $6 = load4(2376);
   if ($call10) {
    $7 = load4($thrown_object);
    $vtable12 = load4($7);
    $vfn13 = ((($vtable12)) + 8|0);
    $8 = load4($vfn13);
    $call14 = (FUNCTION_TABLE_ii[$8 & 7]($7)|0);
    store4($vararg_buffer,$6);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,$4);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,$call14);
    _abort_message(6536,$vararg_buffer);
    // unreachable;
   } else {
    store4($vararg_buffer3,$6);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$4);
    _abort_message(6581,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(6660,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $call = 0, $call1 = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_once((7696|0),(3|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  $0 = load4(7700);
  $call1 = (_pthread_getspecific(($0|0))|0);
  STACKTOP = sp;return ($call1|0);
 } else {
  _abort_message(6811,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $0 = 0, $list = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $list = sp;
 store4($list,$varargs);
 $0 = load4(1452);
 (_vfprintf($0,$format,$list)|0);
 (_fputc(10,$0)|0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10__cxxabiv116__shim_type_infoD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $cmp = 0, $cmp4 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$2 = 0, $src2dst_offset = 0, $static_type = 0, $vfn = 0, $vtable = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$thrown_type,0)|0);
 if ($call) {
  $retval$2 = 1;
 } else {
  $0 = ($thrown_type|0)==(0|0);
  if ($0) {
   $retval$2 = 0;
  } else {
   $1 = (___dynamic_cast($thrown_type,1160,1144,0)|0);
   $cmp = ($1|0)==(0|0);
   if ($cmp) {
    $retval$2 = 0;
   } else {
    $2 = ((($info)) + 4|0);
    ; store8($2,i64_const(0,0),4); store8($2+8|0,i64_const(0,0),4); store8($2+16|0,i64_const(0,0),4); store8($2+24|0,i64_const(0,0),4); store8($2+32|0,i64_const(0,0),4); store8($2+40|0,i64_const(0,0),4); store4($2+48|0,0,4);
    store4($info,$1);
    $static_type = ((($info)) + 8|0);
    store4($static_type,$this);
    $src2dst_offset = ((($info)) + 12|0);
    store4($src2dst_offset,-1);
    $number_of_dst_type = ((($info)) + 48|0);
    store4($number_of_dst_type,1);
    $vtable = load4($1);
    $vfn = ((($vtable)) + 28|0);
    $3 = load4($vfn);
    $4 = load4($adjustedPtr);
    FUNCTION_TABLE_viiii[$3 & 3]($1,$info,$4,1);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $5 = load4($path_dst_ptr_to_static_ptr);
    $cmp4 = ($5|0)==(1);
    if ($cmp4) {
     $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
     $6 = load4($dst_ptr_leading_to_static_ptr);
     store4($adjustedPtr,$6);
     $retval$0 = 1;
    } else {
     $retval$0 = 0;
    }
    $retval$2 = $retval$0;
   }
  }
 }
 STACKTOP = sp;return ($retval$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $call = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0,$use_strcmp)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp12 = 0, $cmp13 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0;
 var $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $search_done = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0,$use_strcmp)|0);
 do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0,$info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1,$use_strcmp)|0);
   if ($call3) {
    $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
    $2 = load4($dst_ptr_leading_to_static_ptr);
    $cmp = ($2|0)==($current_ptr|0);
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
    if (!($cmp)) {
     $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
     $3 = load4($dst_ptr_not_leading_to_static_ptr);
     $cmp5 = ($3|0)==($current_ptr|0);
     if (!($cmp5)) {
      store4($path_dynamic_ptr_to_dst_ptr,$path_below);
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $4 = load4($number_to_dst_ptr);
      $add = (($4) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $5 = load4($number_to_static_ptr);
      $cmp12 = ($5|0)==(1);
      if ($cmp12) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $6 = load4($path_dst_ptr_to_static_ptr);
       $cmp13 = ($6|0)==(2);
       if ($cmp13) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
       }
      }
      $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
      store4($is_dst_type_derived_from_static_type,4);
      break;
     }
    }
    $cmp7 = ($path_below|0)==(1);
    if ($cmp7) {
     store4($path_dynamic_ptr_to_dst_ptr,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $call = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0,0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($x,$y,$0) {
 $x = $x|0;
 $y = $y|0;
 $0 = $0|0;
 var $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($x|0)==($y|0);
 return ($cmp|0);
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $cmp = 0, $cmp4 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $0 = load4($dst_ptr_leading_to_static_ptr);
 $cmp = ($0|0)==(0|0);
 $number_to_static_ptr = ((($info)) + 36|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 do {
  if ($cmp) {
   store4($dst_ptr_leading_to_static_ptr,$adjustedPtr);
   store4($path_dst_ptr_to_static_ptr,$path_below);
   store4($number_to_static_ptr,1);
  } else {
   $cmp4 = ($0|0)==($adjustedPtr|0);
   if (!($cmp4)) {
    $2 = load4($number_to_static_ptr);
    $add = (($2) + 1)|0;
    store4($number_to_static_ptr,$add);
    store4($path_dst_ptr_to_static_ptr,2);
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $1 = load4($path_dst_ptr_to_static_ptr);
   $cmp7 = ($1|0)==(2);
   if ($cmp7) {
    store4($path_dst_ptr_to_static_ptr,$path_below);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($this,$info,$current_ptr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $cmp = 0, $cmp2 = 0, $path_dynamic_ptr_to_static_ptr = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 if ($cmp) {
  $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
  $1 = load4($path_dynamic_ptr_to_static_ptr);
  $cmp2 = ($1|0)==(1);
  if (!($cmp2)) {
   store4($path_dynamic_ptr_to_static_ptr,$path_below);
  }
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($this,$info,$dst_ptr,$current_ptr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp18 = 0, $cmp2 = 0, $cmp21 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $number_of_dst_type = 0;
 var $number_to_static_ptr = 0, $or$cond = 0, $or$cond19 = 0, $path_dst_ptr_to_static_ptr = 0, $search_done = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $found_any_static_type = ((($info)) + 53|0);
 store1($found_any_static_type,1);
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 do {
  if ($cmp) {
   $found_our_static_ptr = ((($info)) + 52|0);
   store1($found_our_static_ptr,1);
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $1 = load4($dst_ptr_leading_to_static_ptr);
   $cmp2 = ($1|0)==(0|0);
   $search_done = ((($info)) + 54|0);
   $number_of_dst_type = ((($info)) + 48|0);
   $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
   $number_to_static_ptr = ((($info)) + 36|0);
   if ($cmp2) {
    store4($dst_ptr_leading_to_static_ptr,$dst_ptr);
    store4($path_dst_ptr_to_static_ptr,$path_below);
    store4($number_to_static_ptr,1);
    $2 = load4($number_of_dst_type);
    $cmp5 = ($2|0)==(1);
    $cmp7 = ($path_below|0)==(1);
    $or$cond = $cmp5 & $cmp7;
    if (!($or$cond)) {
     break;
    }
    store1($search_done,1);
    break;
   }
   $cmp10 = ($1|0)==($dst_ptr|0);
   if (!($cmp10)) {
    $6 = load4($number_to_static_ptr);
    $add = (($6) + 1)|0;
    store4($number_to_static_ptr,$add);
    store1($search_done,1);
    break;
   }
   $3 = load4($path_dst_ptr_to_static_ptr);
   $cmp13 = ($3|0)==(2);
   if ($cmp13) {
    store4($path_dst_ptr_to_static_ptr,$path_below);
    $5 = $path_below;
   } else {
    $5 = $3;
   }
   $4 = load4($number_of_dst_type);
   $cmp18 = ($4|0)==(1);
   $cmp21 = ($5|0)==(1);
   $or$cond19 = $cmp18 & $cmp21;
   if ($or$cond19) {
    store1($search_done,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($static_ptr,$static_type,$dst_type,$src2dst_offset) {
 $static_ptr = $static_ptr|0;
 $static_type = $static_type|0;
 $dst_type = $dst_type|0;
 $src2dst_offset = $src2dst_offset|0;
 var $$ = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$ = 0, $arrayidx = 0;
 var $arrayidx1 = 0, $call = 0, $cmp = 0, $cmp14 = 0, $cmp16 = 0, $cmp19 = 0, $cmp25 = 0, $cmp27 = 0, $cmp30 = 0, $cmp33 = 0, $dst_ptr$0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $or$cond = 0, $or$cond15 = 0, $or$cond16 = 0;
 var $or$cond17 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_static_ptr = 0, $src2dst_offset5 = 0, $static_ptr3 = 0, $static_type4 = 0, $vfn = 0, $vfn11 = 0, $vtable10 = 0, $vtable7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($static_ptr);
 $arrayidx = ((($0)) + -8|0);
 $1 = load4($arrayidx);
 $add$ptr = (($static_ptr) + ($1)|0);
 $arrayidx1 = ((($0)) + -4|0);
 $2 = load4($arrayidx1);
 store4($info,$dst_type);
 $static_ptr3 = ((($info)) + 4|0);
 store4($static_ptr3,$static_ptr);
 $static_type4 = ((($info)) + 8|0);
 store4($static_type4,$static_type);
 $src2dst_offset5 = ((($info)) + 12|0);
 store4($src2dst_offset5,$src2dst_offset);
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
 $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
 $number_to_dst_ptr = ((($info)) + 40|0);
 ; store8($dst_ptr_leading_to_static_ptr,i64_const(0,0),4); store8($dst_ptr_leading_to_static_ptr+8|0,i64_const(0,0),4); store8($dst_ptr_leading_to_static_ptr+16|0,i64_const(0,0),4); store8($dst_ptr_leading_to_static_ptr+24|0,i64_const(0,0),4); store4($dst_ptr_leading_to_static_ptr+32|0,0,4); store2($dst_ptr_leading_to_static_ptr+36|0,0,2); store1($dst_ptr_leading_to_static_ptr+38|0,0,1);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($2,$dst_type,0)|0);
 L1: do {
  if ($call) {
   $number_of_dst_type = ((($info)) + 48|0);
   store4($number_of_dst_type,1);
   $vtable7 = load4($2);
   $vfn = ((($vtable7)) + 20|0);
   $3 = load4($vfn);
   FUNCTION_TABLE_viiiiii[$3 & 3]($2,$info,$add$ptr,$add$ptr,1,0);
   $4 = load4($path_dst_ptr_to_static_ptr);
   $cmp = ($4|0)==(1);
   $add$ptr$ = $cmp ? $add$ptr : 0;
   $dst_ptr$0 = $add$ptr$;
  } else {
   $number_to_static_ptr = ((($info)) + 36|0);
   $vtable10 = load4($2);
   $vfn11 = ((($vtable10)) + 24|0);
   $5 = load4($vfn11);
   FUNCTION_TABLE_viiiii[$5 & 3]($2,$info,$add$ptr,1,0);
   $6 = load4($number_to_static_ptr);
   switch ($6|0) {
   case 0:  {
    $7 = load4($number_to_dst_ptr);
    $cmp14 = ($7|0)==(1);
    $8 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp16 = ($8|0)==(1);
    $or$cond = $cmp14 & $cmp16;
    $9 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp19 = ($9|0)==(1);
    $or$cond15 = $or$cond & $cmp19;
    $10 = load4($dst_ptr_not_leading_to_static_ptr);
    $$ = $or$cond15 ? $10 : 0;
    $dst_ptr$0 = $$;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $dst_ptr$0 = 0;
    break L1;
   }
   }
   $11 = load4($path_dst_ptr_to_static_ptr);
   $cmp25 = ($11|0)==(1);
   if (!($cmp25)) {
    $12 = load4($number_to_dst_ptr);
    $cmp27 = ($12|0)==(0);
    $13 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp30 = ($13|0)==(1);
    $or$cond16 = $cmp27 & $cmp30;
    $14 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp33 = ($14|0)==(1);
    $or$cond17 = $or$cond16 & $cmp33;
    if (!($or$cond17)) {
     $dst_ptr$0 = 0;
     break;
    }
   }
   $15 = load4($dst_ptr_leading_to_static_ptr);
   $dst_ptr$0 = $15;
  }
 } while(0);
 STACKTOP = sp;return ($dst_ptr$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN10__cxxabiv116__shim_type_infoD2Ev($this);
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $call = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0,$use_strcmp)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 20|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiiiii[$2 & 3]($1,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_type = 0, $add = 0, $call = 0, $call3 = 0, $cmp = 0, $cmp11 = 0;
 var $cmp26 = 0, $cmp27 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off032 = 0, $is_dst_type_derived_from_static_type13$0$off033 = 0, $not$tobool19 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $search_done = 0, $static_type = 0, $tobool16 = 0, $vfn = 0;
 var $vfn42 = 0, $vtable = 0, $vtable41 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0,$use_strcmp)|0);
 do {
  if ($call) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0,$info,$current_ptr,$path_below);
  } else {
   $1 = load4($info);
   $call3 = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$1,$use_strcmp)|0);
   $__base_type = ((($this)) + 8|0);
   if (!($call3)) {
    $12 = load4($__base_type);
    $vtable41 = load4($12);
    $vfn42 = ((($vtable41)) + 24|0);
    $13 = load4($vfn42);
    FUNCTION_TABLE_viiiii[$13 & 3]($12,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $2 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($2|0)==($current_ptr|0);
   $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $3 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($3|0)==($current_ptr|0);
    if (!($cmp5)) {
     store4($path_dynamic_ptr_to_dst_ptr,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $4 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($4|0)==(4);
     if ($cmp11) {
      break;
     }
     $found_our_static_ptr = ((($info)) + 52|0);
     store1($found_our_static_ptr,0);
     $found_any_static_type = ((($info)) + 53|0);
     store1($found_any_static_type,0);
     $5 = load4($__base_type);
     $vtable = load4($5);
     $vfn = ((($vtable)) + 20|0);
     $6 = load4($vfn);
     FUNCTION_TABLE_viiiiii[$6 & 3]($5,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $7 = load1($found_any_static_type);
     $tobool16 = ($7<<24>>24)==(0);
     if ($tobool16) {
      $is_dst_type_derived_from_static_type13$0$off032 = 4;
      label = 11;
     } else {
      $8 = load1($found_our_static_ptr);
      $not$tobool19 = ($8<<24>>24)==(0);
      if ($not$tobool19) {
       $is_dst_type_derived_from_static_type13$0$off032 = 3;
       label = 11;
      } else {
       $is_dst_type_derived_from_static_type13$0$off033 = 3;
      }
     }
     if ((label|0) == 11) {
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $9 = load4($number_to_dst_ptr);
      $add = (($9) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $10 = load4($number_to_static_ptr);
      $cmp26 = ($10|0)==(1);
      if ($cmp26) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $11 = load4($path_dst_ptr_to_static_ptr);
       $cmp27 = ($11|0)==(2);
       if ($cmp27) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
        $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
       } else {
        $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
       }
      } else {
       $is_dst_type_derived_from_static_type13$0$off033 = $is_dst_type_derived_from_static_type13$0$off032;
      }
     }
     store4($is_dst_type_derived_from_static_type,$is_dst_type_derived_from_static_type13$0$off033);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    store4($path_dynamic_ptr_to_dst_ptr,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $call = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $call = (__ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($this,$0,0)|0);
 if ($call) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 28|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiii[$2 & 3]($1,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNSt9type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_key_create((7700|0),(21|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(6860,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($p) {
 $p = $p|0;
 var $0 = 0, $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($p);
 $0 = load4(7700);
 $call = (_pthread_setspecific(($0|0),(0|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(6910,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = i64(), $2 = 0, $and = i64(), $call = 0, $call8 = 0, $cmp = 0, $exception_class = 0, $terminateHandler = 0, $tobool = 0, $tobool1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if ($cmp) {
    $terminateHandler = ((($0)) + 12|0);
    $2 = load4($terminateHandler);
    __ZSt11__terminatePFvvE($2);
    // unreachable;
   }
  }
 }
 $call8 = (__ZSt13get_terminatev()|0);
 __ZSt11__terminatePFvvE($call8);
 // unreachable;
}
function __ZSt11__terminatePFvvE($func) {
 $func = $func|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$func & 3]();
 _abort_message(6963,$vararg_buffer);
 // unreachable;
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2372);
 $1 = (($0) + 0)|0;
 store4(2372,$1);
 $2 = $0;
 return ($2|0);
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(7704);
 $1 = (($0) + 0)|0;
 store4(7704,$1);
 $2 = $0;
 return ($2|0);
}
function ___cxa_can_catch($catchType,$excpType,$thrown) {
 $catchType = $catchType|0;
 $excpType = $excpType|0;
 $thrown = $thrown|0;
 var $0 = 0, $1 = 0, $2 = 0, $call = 0, $conv = 0, $temp = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $temp = sp;
 $0 = load4($thrown);
 store4($temp,$0);
 $vtable = load4($catchType);
 $vfn = ((($vtable)) + 16|0);
 $1 = load4($vfn);
 $call = (FUNCTION_TABLE_iiii[$1 & 15]($catchType,$excpType,$temp)|0);
 $conv = $call&1;
 if ($call) {
  $2 = load4($temp);
  store4($thrown,$2);
 }
 STACKTOP = sp;return ($conv|0);
}
function ___cxa_is_pointer_type($type) {
 $type = $type|0;
 var $0 = 0, $1 = 0, $2 = 0, $conv = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($type|0)==(0|0);
 if ($0) {
  $2 = 0;
 } else {
  $1 = (___dynamic_cast($type,1160,1216,0)|0);
  $phitmp = ($1|0)!=(0|0);
  $2 = $phitmp;
 }
 $conv = $2&1;
 return ($conv|0);
}
function runPostSets() {
}
function __emscripten_dceable_type_decls() {
 ___cxa_pure_virtual();
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _llvm_bswap_i32(x) {
    x = x|0;
    return (((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24))|0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        ___setErrNo(12);
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&15](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_di(index,a1) {
  index = index|0;
  a1=a1|0;
  return +FUNCTION_TABLE_di[index&3](a1|0);
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&7](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&7](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&3]();
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&3](a1|0,a2|0,a3|0,a4|0);
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_diii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return +FUNCTION_TABLE_diii[index&7](a1|0,a2|0,a3|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(0);return 0;
}
function b1(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; abort(1);
}
function b2(p0) {
 p0 = p0|0; abort(2);return +0;
}
function b3(p0) {
 p0 = p0|0; abort(3);
}
function b4(p0) {
 p0 = p0|0; abort(4);return 0;
}
function b5(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(5);
}
function b6() {
 ; abort(6);
}
function b7(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(7);
}
function b8(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(8);
}
function b9(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(9);return +0;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,__ZN6Solver18select_working_setERiS0_,__ZN9Solver_NU18select_working_setERiS0_,__ZNK5SVR_Q5get_QEii,__ZNK11ONE_CLASS_Q5get_QEii,__ZNK5SVC_Q5get_QEii,___stdio_write,___stdio_seek,___stdout_write,_sn_write,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,___stdio_read,b0,b0,b0,b0];
var FUNCTION_TABLE_viiiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b1];
var FUNCTION_TABLE_di = [b2,__ZN6Solver13calculate_rhoEv,__ZN9Solver_NU13calculate_rhoEv,b2];
var FUNCTION_TABLE_vi = [b3,__ZN6KernelD2Ev,__ZN6KernelD0Ev,__ZN6SolverD2Ev,__ZN6SolverD0Ev,__ZN6Solver12do_shrinkingEv,__ZL19print_string_stdoutPKc,__ZN9Solver_NUD0Ev,__ZN9Solver_NU12do_shrinkingEv,__ZN5SVR_QD2Ev,__ZN5SVR_QD0Ev,__ZN11ONE_CLASS_QD2Ev,__ZN11ONE_CLASS_QD0Ev,__ZN5SVC_QD2Ev,__ZN5SVC_QD0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,_print_null,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3];
var FUNCTION_TABLE_ii = [b4,__ZNK5SVR_Q6get_QDEv,__ZNK11ONE_CLASS_Q6get_QDEv,__ZNK5SVC_Q6get_QDEv,___stdio_close,b4,b4,b4];
var FUNCTION_TABLE_viii = [b5,__ZNK6Kernel10swap_indexEii,__ZNK5SVR_Q10swap_indexEii,__ZNK11ONE_CLASS_Q10swap_indexEii,__ZNK5SVC_Q10swap_indexEii,b5,b5,b5];
var FUNCTION_TABLE_v = [b6,___cxa_pure_virtual,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev];
var FUNCTION_TABLE_viiii = [b7,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b7];
var FUNCTION_TABLE_viiiii = [b8,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b8];
var FUNCTION_TABLE_diii = [b9,__ZNK6Kernel11kernel_polyEii,__ZNK6Kernel13kernel_linearEii,__ZNK6Kernel10kernel_rbfEii,__ZNK6Kernel14kernel_sigmoidEii,__ZNK6Kernel18kernel_precomputedEii,b9,b9];

  return { _parse_command_line: _parse_command_line, _svm_get_labels: _svm_get_labels, _libsvm_train_problem: _libsvm_train_problem, _libsvm_train: _libsvm_train, _svm_get_nr_sv: _svm_get_nr_sv, _deserialize_model: _deserialize_model, setThrew: setThrew, _get_svr_epsilon: _get_svr_epsilon, _libsvm_cross_validation: _libsvm_cross_validation, _serialize_model: _serialize_model, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _libsvm_predict_one: _libsvm_predict_one, _memset: _memset, _add_instance: _add_instance, _sbrk: _sbrk, _memcpy: _memcpy, stackSave: stackSave, stackAlloc: stackAlloc, _svm_get_sv_indices: _svm_get_sv_indices, getTempRet0: getTempRet0, _svm_get_svm_type: _svm_get_svm_type, setTempRet0: setTempRet0, _svm_get_nr_class: _svm_get_nr_class, _emscripten_get_global_libc: _emscripten_get_global_libc, _svm_free_model: _svm_free_model, stackRestore: stackRestore, _free_problem: _free_problem, _llvm_bswap_i32: _llvm_bswap_i32, ___cxa_can_catch: ___cxa_can_catch, _free: _free, runPostSets: runPostSets, establishStackSpace: establishStackSpace, _create_svm_nodes: _create_svm_nodes, _malloc: _malloc, _emscripten_replace_memory: _emscripten_replace_memory, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiii: dynCall_viiii, dynCall_viiiii: dynCall_viiiii, dynCall_diii: dynCall_diii };
})
;