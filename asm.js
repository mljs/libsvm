'use strict';

const loadSVM = require('./src/loadSVM');
const libsvm = require('./dist/node/asm/libsvm');
module.exports = loadSVM(libsvm);
