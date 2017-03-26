'use strict';

const loadSVM = require('./src/loadSVM');
const libsvm = require('./dist/asm/libsvm');
module.exports = loadSVM(libsvm);
