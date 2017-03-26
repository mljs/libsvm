const path = require('path');
var Module = module.exports = {};

// When loaded with nodejs, the absolute file path is neede
Module.wasmBinaryFile = path.resolve(__dirname, 'libsvm.wasm');

Module.isReady = new Promise(function (resolve) {
    Module.onRuntimeInitialized = function () {
        resolve(Module);
    };
});
