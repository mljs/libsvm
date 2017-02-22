'use strict';

const libsvm = require('../lib/libsvm-js-interfaces');

// const train = libsvm.cwrap('libsvm_train', 'number', ['array', 'array', 'number', 'number', 'string']);
const predict_one = libsvm.cwrap('libsvm_predict_one', 'number', ['number', 'array', 'number']);
const add_instance = libsvm.cwrap('add_instance', null, ['number', 'array', 'number', 'number', 'number']);
const create_svm_nodes = libsvm.cwrap('create_svm_nodes', 'number', ['number', 'number']);
const train_problem = libsvm.cwrap('libsvm_train_problem', 'number', ['number', 'string']);
const svm_get_nr_sv = libsvm.cwrap('svm_get_nr_sv', 'number', ['number']);
const svm_free_model = libsvm.cwrap('svm_free_model_content', null, ['number']);
const svm_get_nr_class = libsvm.cwrap('svm_get_nr_class', 'number', ['number']);
const svm_get_sv_indices = libsvm.cwrap('svm_get_sv_indices', null, ['number', 'number']);
const svm_get_labels = libsvm.cwrap('svm_get_labels', null, ['number', 'number']);

// xor

// const model = train(features, labels, 4, 2, '-s 0  -t 0 -c 10 -g 1 -r 1 -d 3');
// var features = [0,0,0,1,1,1,1,0];
// var labels = [1, -1, 1, -1];

const SVM_TYPES = {
    C_SVC: 0,         // C support vector classification
    NU_SVC: 1,        // NU support vector classification
    ONE_CLASS: 2,     // ONE CLASS classification
    EPSILON_SVR: 3,   // Epsilon support vector regression
    NU_SVR:4          // Nu suuport vector regression
};

const KERNEL_TYPES = {
    LINEAR: 0,
    POLYNOMIAL: 1,
    RBF: 2,         // Radial basis function
    SIGMOID: 3
};


const mapOptionToCommand  = {
    quiet: 'q',
    type: 's',
    kernel: 't',
    degree: 'd',
    gamma: 'g',
    coef0: 'r',
    cost: 'c',
    nu: 'n',
    epsilon: 'p',
    cachesize: 'm',
    tolerance: 'e',
    shrinking: 'h',
    probability_estimates: 'b',
    weight: 'w'
};

class SVM {
    constructor(options) {
        this.options = Object.assign({}, options);
        this.model = null;
    };

    train(samples, labels) {
        if(this.model !== null) {
            svm_free_model(this.model);
        }
        const nbSamples = samples.length;
        const nbFeatures = samples[0].length;
        const problem = create_svm_nodes(nbSamples, nbFeatures);
        for(let i = 0; i < nbSamples; i++) {
            add_instance(problem, new Uint8Array(new Float64Array(samples[i]).buffer), nbFeatures, labels[i], i);
        }
        const command = getCommand(this.options);
        console.log('command', command);
        this.model = train_problem(problem, command); // this also frees problem
    }

    predictOne(sample) {
        if(this.model === null) {
            throw new Error('Cannot predict, you must train first');
        }
        return predict_one(this.model, new Uint8Array(new Float64Array(sample).buffer), sample.length);
    }

    predict(samples) {
        let arr = [];
        for(let i = 0; i<samples.length; i++) {
            arr.push(this.predictOne(samples[i]));
        }
    }

    getLabels() {
        const nbLabels = svm_get_nr_class(this.model);
        return getIntArrayFromModel(svm_get_labels, this.model, nbLabels);
    }

    getSVIndices() {
        const nSV = svm_get_nr_sv(this.model);
        return getIntArrayFromModel(svm_get_sv_indices, this.model, nSV)
            .map(i => i - 1);
    }
}

SVM.SVM_TYPES = SVM_TYPES;
SVM.KERNEL_TYPES = KERNEL_TYPES;

function getIntArrayFromModel(fn, model, size) {
    const offset = libsvm._malloc(size * 4);
    fn(model, offset);
    const data = libsvm.HEAP32.subarray(offset / 4, offset / 4 + size);
    const arr = Array.from(data);
    libsvm._free(offset);
    return arr;
}

function getCommand(options) {
    var str = '';
    var keys = Object.keys(options);
    for(var i=0; i<keys.length; i++) {
        var key = keys[i];
        if(options[key] == null) continue;
        if(str) str += ' ';
        switch(key) {
            case 'quiet': {
                if(options[key]) {
                    str += `-${mapOptionToCommand[key]} 1`;
                }
                break;
            }
            default: {
                str += `-${mapOptionToCommand[key]} ${options[key]}`;
                break;
            }
        }
    }

    return str;
}

module.exports = SVM;