'use strict';

var resolve;
var promise = new Promise((res, rej) => {
    resolve = res;
});
let Module;
if (typeof module === 'object' && module.exports) {
    Module = {
        locateFile(url) {
            return __dirname + '/' + url;
        },
        onRuntimeInitialized() {
            resolve();
        },
        load() {
            return promise;
        }
    };
} else {
    Module = {
        locateFile(url) {
            return new URL(url, path).href;
        },
        onRuntimeInitialized() {
            resolve();
        },
        load() {
            return promise;
        }
    };
}
