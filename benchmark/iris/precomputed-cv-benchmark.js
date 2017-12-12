'use strict';

const Kernel = require('ml-kernel');
const range = require('lodash.range');
const data = require('ml-dataset-iris');

const gamma = 0.2;
const cost = 1;

function exec(SVM, time) {
    const MILISECONDS = time * 1000;

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();
    const c = {};
    classes.forEach((v, idx) => (c[v] = idx));
    labels = labels.map(l => c[l]);

    // We precompute the gaussian kernel
    const kernel = new Kernel('gaussian', {sigma: 1 / Math.sqrt(gamma)});
    const KData = kernel.compute(features).addColumn(0, range(1, labels.length + 1));

    const t1 = Date.now();
    let t2 = Date.now();
    let count = 0;
    while (t2 - t1 < MILISECONDS) {
        const svm = new SVM({
            quiet: true,
            cost: cost,
            kernel: SVM.KERNEL_TYPES.PRECOMPUTED
        });
        svm.crossValidation(KData, labels, labels.length);
        svm.free();
        count++;
        t2 = Date.now();
    }

    // console.log('accuracy: ', result.reduce((prev, current, idx) => current === labels[idx] ? prev + 1 : prev, 0)/ labels.length);
    return count;
}

module.exports = exec;
