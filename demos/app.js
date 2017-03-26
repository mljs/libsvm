import '../dist/wasm/libsvm.wasm';
import '../dist/wasm/libsvm.asm.js';
import '../dist/wasm/libsvm.js.mem';

import SVM from '../wasm';
SVM.then(SVM => {
    global.SVM = SVM;
    import('./bootstrap');
});

