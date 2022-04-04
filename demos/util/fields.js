import { identity, omitBy } from 'lodash-es';

export const KERNEL = {
  id: 'HP_KERNEL',
  name: 'kernel',
  type: 'select',
  options: omitBy(
    SVM.KERNEL_TYPES,
    (val) => val === SVM.KERNEL_TYPES.PRECOMPUTED,
  ),
};

export const COST = {
  id: 'HP_COST',
  name: 'cost',
  type: 'range',
  min: -3,
  max: 3,
  normalize: pow10,
  format: (num) => num.toExponential(2),
  step: 0.2,
  gridSearch: true,
};

export const GAMMA = {
  id: 'HP_GAMMA',
  name: 'gamma',
  type: 'range',
  min: -3,
  max: 3,
  normalize: pow10,
  format: (num) => num.toExponential(2),
  step: 0.2,
  gridSearch: true,
};

export const NU = {
  id: 'HP_NU',
  name: 'nu',
  type: 'range',
  min: 0,
  max: 1,
  format: identity,
  normalize: toNumber,
  step: 0.05,
  gridSearch: true,
};

export const EPSILON = {
  id: 'HP_EPSILON',
  name: 'epsilon',
  type: 'range',
  min: -3,
  max: 0,
  format: (num) => num.toExponential(2),
  normalize: pow10,
  step: 0.1,
  gridSearch: true,
};

export const DEGREE = {
  HP: 'HP_DEGREE',
  name: 'degree',
  type: 'number',
  gridSearch: false,
};

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
  return (
    type === SVM.SVM_TYPES.NU_SVC ||
    type === SVM.SVM_TYPES.NU_SVR ||
    type === SVM.SVM_TYPES.ONE_CLASS
  );
}

function isCost(type) {
  return type === SVM.SVM_TYPES.C_SVC || type === SVM.SVM_TYPES.EPSILON_SVR;
}

function hasGamma(kernel) {
  return (
    kernel === SVM.KERNEL_TYPES.RBF ||
    kernel === SVM.KERNEL_TYPES.SIGMOID ||
    kernel === SVM.KERNEL_TYPES.POLYNOMIAL
  );
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
