'use strict';

async function exec() {
    const SVM = await require('../wasm');
    const data = require('ml-dataset-iris');

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();

    const c = {};
    classes.forEach((v, idx) => c[v] = idx);
    labels = labels.map(l => c[l]);


    console.time('iris');
    for(let i=0; i<100; i++) {
        const svm = new SVM({quiet: true});
        svm.train(features, labels);
    }

    console.timeEnd('iris');
}

exec();