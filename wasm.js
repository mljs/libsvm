'use strict';

const loadSVM = require('./src/loadSVM');
const libsvm = require('./dist/node/wasm/libsvm');
module.exports = libsvm.load().then(() => loadSVM(libsvm));
