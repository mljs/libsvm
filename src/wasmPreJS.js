const path = require('path');
var Module = {ENVIRONMENT: "NODE"};
Module.wasmBinaryFile = path.resolve(__dirname, 'libsvm.wasm');
Module.asmjsCodeFile = path.resolve(__dirname, 'libsvm.asm.js');
Module.locateFile = function (filename) {
    return path.resolve(__dirname, filename);
};
Module.isReady = new Promise(function (resolve) {
    Module.onRuntimeInitialized = function () {
        resolve(Module);
    };
});
