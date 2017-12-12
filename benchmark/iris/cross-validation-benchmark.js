'use strict';

const gamma = 0.2;
const cost = 1;

function exec(SVM, time) {
    const MILISECONDS = time * 1000;
    const data = require('ml-dataset-iris');

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();

    const c = {};
    classes.forEach((v, idx) => (c[v] = idx));
    labels = labels.map(l => c[l]);


    const t1 = Date.now();
    let t2 = Date.now();
    let count = 0;
    while (t2 - t1 < MILISECONDS) {
        const svm = new SVM({
            quiet: true,
            cost: cost,
            gamma: gamma
        });
        svm.crossValidation(features, labels, labels.length);
        count++;
        t2 = Date.now();
    }

    // console.log('accuracy: ', result.reduce((prev, current, idx) => current === labels[idx] ? prev + 1 : prev, 0)/ labels.length);
    return count;
}


module.exports = exec;
