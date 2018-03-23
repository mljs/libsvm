'use strict';

const loadSVM = require('./src/loadSVM');
const libsvm = require('./dist/wasm/libsvm');
module.exports = libsvm.isReady().then(l => loadSVM(l));
