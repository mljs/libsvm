// Those imports are handled by url-loader
import '../dist/node/wasm/libsvm.wasm';
import '../dist/node/asm/libsvm.js';

async function load() {
  try {
    global.SVM = await import('../wasm');
  } catch (e) {
    console.warn('wasm failed, trying asm'); // eslint-disable-line no-console
    global.SVM = await import('../asm');
  }
    import('./bootstrap');
}

load();
