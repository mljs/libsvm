'use strict';

const path = require('path');

module.exports = {
  entry: ['./asm.js'],
  output: {
    path: path.join(__dirname, '../dist/browser/asm'),
    filename: 'libsvm.js',
    library: 'libsvm',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty',
    crypto: 'empty',
    process: 'mock',
    Buffer: false,
    path: 'empty'
  }
};
