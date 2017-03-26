import '../dist/wasm/libsvm.wasm';
import SVM from '../wasm';
SVM.then(SVM => {
    global.SVM = SVM;
    import('./bootstrap');
});

