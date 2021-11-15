'use strict';

const path = require('path');

module.exports = {
  entry: ['./wasm.js'],
  output: {
    path: path.join(__dirname, '../dist/browser/wasm'),
    filename: 'libsvm.js',
    library: 'libsvm',
    libraryTarget: 'umd',
    uniqueName: 'SVM',
  },
  resolve: {
    fallback: {
      fs: false,
      crypto: false,
      process: false,
      Buffer: false,
      path: false,
    },
  },
  node: false,
};
