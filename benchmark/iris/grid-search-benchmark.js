'use strict';

const util = require('./util');
const gamma = util.gamma;
const cost = util.cost;

function exec(SVM, time) {
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
                    quiet: true,
                    cost: c,
                    gamma: g
                });
                svm.train(features, labels);
                svm.free();
            }
        }
        count++;
        endTime = Date.now();
    }


    return count;
}


module.exports = exec;
