
const loadSVM = require('./loadSVM');
const libsvm = require('../dist/libsvm-js-interfaces');

module.exports = new Promise(function (resolve) {
    libsvm.onRuntimeInitialized = function () {
        resolve(loadSVM(libsvm));
    };
});
