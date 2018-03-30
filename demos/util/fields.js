const omitBy = require('lodash.omitby');

export const KERNEL = {
    id: 'HP_KERNEL',
    name: 'kernel',
    type: 'select',
    options: omitBy(SVM.KERNEL_TYPES, val => val === SVM.KERNEL_TYPES.PRECOMPUTED),
    initial: SVM.KERNEL_TYPES.RBF
};

export const COST = {
    id: 'HP_COST',
    name: 'cost',
    type: 'range',
    min: -3,
    max: 3,
    normalize: pow10,
    format: Math.log10,
    step: 0.4,
    gridSearch: true,
    initial: 10
};

export const GAMMA = {
    id: 'HP_GAMMA',
    name: 'gamma',
    type: 'range',
    min: -3,
    max: 3,
    normalize: pow10,
    format: Math.log10,
    step: 0.4,
    gridSearch: true,
    initial: 10
};

export const NU = {
    id: 'HP_NU',
    name: 'nu',
    type: 'range',
    min: 0,
    max: 1,
    normalize: toNumber,
    step: 0.1,
    gridSearch: true,
    initial: 0.5
};

export const EPSILON = {
    id: 'HP_EPSILON',
    name: 'epsilon',
    type: 'range',
    min: 0.01,
    max: 0.5,
    normalize: toNumber,
    step: 0.05,
    gridSearch: true,
    initial: 0.03
};

export const DEGREE = {
    HP: 'HP_DEGREE',
    name: 'degree',
    type: 'number',
    gridSearch: false
};

export function getFields() {
    return [
        KERNEL, COST, GAMMA, NU, EPSILON, DEGREE
    ];
}

export function getHyperParameters(type, kernel) {
    const fields = [];
    if (isNu(type)) {
        fields.push(NU);
    }
    if (isCost(type)) {
        fields.push(COST);
    }
    if (hasGamma(kernel)) {
        fields.push(GAMMA);
    }

    if (kernel === SVM.KERNEL_TYPES.POLYNOMIAL) {
        fields.push(DEGREE);
    }

    if (type === SVM.SVM_TYPES.EPSILON_SVR) {
        fields.push(EPSILON);
    }
    return fields;
}

function pow10(value) {
    return Math.pow(10, value);
}

function isNu(type) {
    return type === SVM.SVM_TYPES.NU_SVC || type === SVM.SVM_TYPES.NU_SVR || type === SVM.SVM_TYPES.ONE_CLASS;
}

function isCost(type) {
    return type === SVM.SVM_TYPES.C_SVC || type === SVM.SVM_TYPES.EPSILON_SVR;
}

function hasGamma(kernel) {
    return kernel === SVM.KERNEL_TYPES.RBF || kernel === SVM.KERNEL_TYPES.SIGMOID || kernel === SVM.KERNEL_TYPES.POLYNOMIAL;
}

// function isClassification(type) {
//     return type === SVM.SVM_TYPES.C_SVC || type === SVM.SVM_TYPES.ONE_CLASS || type === SVM.SVM_TYPES.NU_SVC;
// }
//
// function isRegression(type) {
//     return type === SVM.SVM_TYPES.EPSILON_SVR || type === SVM.SVM_TYPES.NU_SVR;
// }

function toNumber(value) {
    return +value;
}

export function grid(type, kernel, cb) {
    const hyperParams = getHyperParameters(type, kernel);
    let idx = new Array(hyperParams.length).fill(0);
    let done = false;
    while(!done) {
        const [param, newIdx] = getParams(hyperParams, idx);
        cb(param, hyperParams);
        if(!newIdx) done = true;
    }
}

function getParams(params, idx) {
    const param = params.map((param, index) => getParam(param, idx[index]));
    for(let i=idx.length-1; i>=0; i--) {
        idx[i]++;
        if(getParam(params[i], idx[i])) {
            break;
        } else if(i !== 0){
            idx[i] = 0;
        } else {
            return [param, null]
        }
    }
    return [param, idx];
}

function getParam(param, idx) {
    switch(param.type) {
        case 'range': {
            const val = param.min + idx * param.step;
            if(val > param.max) return null;
            if(param.normalize) {
                return param.normalize(val);
            }
            return val;
        }
        default: {
            if(idx === 0) {
                if(param.normalize) {
                    return param.normalize(param.initial);
                } else {
                    return param.initial;
                }
            }
            return null;
        }
    }
}
