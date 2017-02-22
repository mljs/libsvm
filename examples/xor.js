'use strict';

const SVM = require('../src/SVM');

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