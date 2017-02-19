'use strict';

const libsvm = require('../lib/libsvm-js-interfaces');

const train = libsvm.cwrap('libsvm_train', 'number', ['array', 'array', 'number', 'number', 'string']);
const predict_one = libsvm.cwrap('libsvm_predict_one', 'number', ['number', 'array', 'number']);
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

const defaultOptions = {
    type: SVM_TYPES.C_SVC,
    kernel: KERNEL_TYPES.LINEAR,
    degree: 3,
    gamma: null, // default value is 1/num_features
    coef0: 0,
    cost: 1,
    nu: 0.5,
    epsilon: 0.1,
    cachesize: 100,
    tolerance: 0.001,
    shrinking: 1,
    probability_estimates: 0,
    weight: 1
};

const mapOptionToCommand  = {
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
    weight: 'wi'
};

module.exports = {
    train: function(data, labels, nbFeatures, options) {
        options = Object.assign({}, defaultOptions, options);
        var features = new Uint8Array(new Float64Array(features).buffer);
        var labels = new Uint8Array(new Float64Array(labels).buffer);
        var nbDimensions = data.length / nbFeatures;
        if(!Number.isInteger(nbDimensions)) {
            throw new Error('Unexpected data length');
        }
        const command = getCommand(options);
        return train(features, labels, nbFeatures, nbDimensions, command);
    },
    predict: function(model, data) {
    },

    predictOne: function(model, features) {
        predict_one(model, new Uint8Array(new Float64Array(features)), features.length);
    },
    SVM_TYPES,
    KERNEL_TYPES

};

function getCommand(options) {
    var str = '';
    var keys = Object.keys(options);
    for(var i=0; i<keys.length; i++) {
        var key = keys[i];
        if(options[key] != null) continue;
        if(str) str += ' ';
        str += `-${mapOptionToCommand[key]} ${options[key]}`;
    }

    return str;
}