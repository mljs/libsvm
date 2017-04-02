'use strict';

const argv = process.argv.slice(2);

const COST_GRID_SIZE = 10;
const GAMMA_GRID_SIZE = 10;
const COST_MIN = -3;
const COST_MAX = 3;
const GAMMA_MIN = -3;
const GAMMA_MAX = 3;

async function exec() {
    const SVM = await require(`../${argv[0]}`);
    const data = require('ml-dataset-iris');

    const features = data.getNumbers();
    let labels = data.getClasses();
    const classes = data.getDistinctClasses();

    const c = {};
    classes.forEach((v, idx) => c[v] = idx);
    labels = labels.map(l => c[l]);

    const cost = Array.from({length: COST_GRID_SIZE}).map(normalize(COST_GRID_SIZE, COST_MIN, COST_MAX)).map(pow10);
    const gamma = Array.from({length: GAMMA_GRID_SIZE}).map(normalize(GAMMA_GRID_SIZE, GAMMA_MIN, GAMMA_MAX)).map(pow10);

    console.time('iris');
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

    console.timeEnd('iris');
}

exec();

function normalize(n, min, max) {
    return (val, idx) => min + (idx / (n -1)) * (max - min);
}

function pow10(val) {
    return 10 ** val;
}
