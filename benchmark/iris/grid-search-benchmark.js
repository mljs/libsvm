'use strict';

const COST_GRID_SIZE = 6;
const GAMMA_GRID_SIZE = 6;
const COST_MIN = -3;
const COST_MAX = 3;
const GAMMA_MIN = -3;
const GAMMA_MAX = 3;

function exec(SVM, time) {
    const MILISECONDS = time * 1000;
    const data = require('ml-dataset-iris');

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();

    const c = {};
    classes.forEach((v, idx) => c[v] = idx);
    labels = labels.map(l => c[l]);

    const cost = Array.from({length: COST_GRID_SIZE}).map(normalize(COST_GRID_SIZE, COST_MIN, COST_MAX)).map(pow10);
    const gamma = Array.from({length: GAMMA_GRID_SIZE}).map(normalize(GAMMA_GRID_SIZE, GAMMA_MIN, GAMMA_MAX)).map(pow10);

    const startTime = Date.now();
    let endTime = Date.now();
    let count = 0;
    while(endTime - startTime < MILISECONDS) {
        for(let c of cost) {
            for(let g of gamma) {
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


function normalize(n, min, max) {
    return (val, idx) => min + (idx / (n -1)) * (max - min);
}

function pow10(val) {
    return 10 ** val;
}

module.exports = exec;
