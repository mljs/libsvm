'use strict';

const util = require('./util');
const gamma = util.gamma;
const cost = util.cost;

const SVM = require('ml-svm');

function exec(time) {
    const MILISECONDS = time * 1000;
    const data = require('ml-dataset-iris');

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();

    const c = {};
    classes.forEach((v, idx) => (c[v] = idx));
    labels = labels.map(l => c[l]);

    const startTime = Date.now();
    let endTime = Date.now();
    let count = 0;
    while (endTime - startTime < MILISECONDS) {
        for (let c of cost) {
            for (let g of gamma) {
                const svm = new SVM({
                    C: c,
                    kernel: 'rbf',
                    kernelOptions: {
                        sigma: g
                    },
                    tolerance: 0.001,
                    maxPasses: 1,
                    maxIterations: 10000
                });
                svm.train(features, labels);
            }
        }
        count++;
        endTime = Date.now();
    }


    return count;
}

const count = exec(5);
console.log('#iterations: ', count);
