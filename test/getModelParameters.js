'use strict';

const SVM = require('../asm');

function train() {
  let svm = new SVM({
    kernel: SVM.KERNEL_TYPES.LINEAR,
    type: SVM.SVM_TYPES.C_SVC,
    gamma: 1,
    cost: 1,
    degree: 3
  });
  const features = [[0, 0], [1, 1], [1, 0], [0, 1]];
  const labels = [0, 0, 1, 1];
  svm.train(features, labels);
  return svm;
}

it('should get model parameters', () => {
  const params = train().getModelParameters();
  console.log(params);
  params.kernel.should.equal(SVM.KERNEL_TYPES.RBF);
  params.type.should.equal(SVM.SVM_TYPES.C_SVC);
  params.degree.should.equal(3);
  params.gamma.should.equal(1);
  params.C.should.equal(1);
});
