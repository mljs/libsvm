// Those imports are handled by url-loader
import '../dist/wasm/libsvm.wasm';
import '../dist/wasm/libsvm.asm.js';
import '../dist/wasm/libsvm.js.mem';

function getParamByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

async function load() {
    if(getParamByName('wasm')) {
        global.SVM = await import('../wasm');
    } else {
        global.SVM = await import('../asm');
    }
    import('./bootstrap');
}

load();

