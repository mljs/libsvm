/* eslint-disable strict */
// const path = require('path');
var Module = (module.exports = {}); // eslint-disable-line no-unused-vars
if (typeof self === 'undefined') {
    // When loaded with nodejs, the absolute file path is needed
    Module = module.exports = getModuleForNode();
    // Module.wasmBinaryFile = path.resolve(__dirname, 'libsvm.wasm');
} else {
    Module = getModuleForBrowser();
    Module.wasmBinaryFile = getCurrentPathBrowser();
}

function getCurrentPathBrowser() {
    var sc = document.getElementsByTagName('script');

    for (var idx = 0; idx < sc.length; idx++) {
        var s = sc.item(idx);

        if (s.src && s.src.match(/libsvm\.js$/)) {
            return s.src.replace(/\.js$/, '.wasm');
        }
    }
    return 'libsvm.wasm';
}
function getModuleForBrowser() {
    var resolve;
    var promise = new Promise(function (res, rej) {
        resolve = res;
    });
    var path = getCurrentPathBrowser();
    var Module = {
        locateFile: function (url) {
            return new URL(url, path).href;
        },
        onRuntimeInitialized: function () {
            resolve();
        },
        load: function () {
            return promise;
        }
    };
    return Module;
}
function getModuleForNode() {
    var resolve;
    var promise = new Promise(function (res, rej) {
        resolve = res;
    });
    var Module = {
        locateFile: function (url) {
            return __dirname + '/' + url;
        },
        onRuntimeInitialized: function () {
            resolve(Module);
        },
        isReady: function () {
            return promise;
        }
    };
    return Module;
}

// Module.isReady = new Promise(function (resolve) {
//     Module.onRuntimeInitialized = function () {
//         resolve(Module);
//     };
// });

// (function(factory) {

//     if (typeof define === 'function' && define.amd) {
//       define(function() {
//         return factory(getModuleForBrowser());
//       });
//     } else if (typeof module === 'object' && module.exports) {
//       module.exports = factory(getModuleForNode());
//     } else {
//       window.SVM = factory(getModuleForBrowser());
//     }
//   })(function(Module, module, exports, define) {
