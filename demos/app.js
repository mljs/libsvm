import '../lib/libsvm-js-interfaces.wasm';
import SVM from '..';
SVM.then(SVM => {
    global.SVM = SVM;
    import('./bootstrap');
});

