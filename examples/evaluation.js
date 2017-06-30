'use strict';

const SVM = require('../asm');
const util = require('../src/util');

const options = util.getOptions('-s 0 -c 1 -n 0.5 -g 1 -d 3 -t 0');

const svm = new SVM(options);

svm.train([
    [
        0.27666666666666667,
        0.6866666666666666
    ],
    [
        0.6066666666666667,
        0.28
    ]
], [1, 2]);

console.log(svm.predict([[0.01, 0.99], [0.9, 0.1]]));
console.log(svm.serializeModel());
