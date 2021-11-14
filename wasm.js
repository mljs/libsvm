'use strict';

const loadSVM = require('./src/loadSVM');
const libsvm = require('./out/wasm/libsvm');

module.exports = libsvm.then((wrapper) => {
  return wrapper.load().then(() => loadSVM(wrapper));
});
