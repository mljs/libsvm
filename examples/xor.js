'use strict';

function xor(SVM) {
    let svm = new SVM();
    const features = [[1,1],[-1, -1],[1,-1],[-1, 1]];
    const labels = [1,1,-1,-1];
    svm.train(features, labels);
    for(var i=0; i<features.length; i++) {
        var pred = svm.predictOne(features[i]);
        console.log(`actual: ${labels[i]}, predicted: ${pred}`);
    }

    svm.train(features, labels);
    console.log('sv indices', svm.getSVIndices());
    console.log('labels', svm.getLabels());
}

function execAsm() {
    const SVM = require('../asm');
    xor(SVM);
}

async function execWasm() {
    const SVM = await require('../wasm');
    xor(SVM);
}

try {
    execAsm(); // Synchronous
    execWasm(); // Asynchronous

} catch(e) {
    console.log('failed');
    console.log(e);
}
