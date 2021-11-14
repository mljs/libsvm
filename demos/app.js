// Those imports are handled by url-loader
import '../out/wasm/libsvm.wasm';

async function load() {
  global.SVM = await import('../wasm');
  import('./bootstrap');
}

load();
