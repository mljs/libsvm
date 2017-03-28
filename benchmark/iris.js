'use strict';

const argv = process.argv.slice(2);

async function exec() {
    const SVM = await require(`../${argv[0]}`);
    const data = require('ml-dataset-iris');

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();

    const c = {};
    classes.forEach((v, idx) => c[v] = idx);
    labels = labels.map(l => c[l]);


    console.time('iris');
    for(let i=0; i<1000; i++) {
        const svm = new SVM({quiet: true});
        svm.train(features, labels);
        svm.free();
    }

    console.timeEnd('iris');
}

exec();