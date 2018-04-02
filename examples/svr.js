'use strict';

async function exec() {
  const SVM = await require('..');

  const svm = new SVM({
    type: SVM.SVM_TYPES.EPSILON_SVR
  });
  const l = 20;
  const data = Array.from({ length: l }).map((val, idx) => {
    const x = idx / l * 2 * Math.PI;
    const y = Math.sin(x) + 1;
    return [[x], y];
  });

  const x = data.map((d) => d[0]);
  const y = data.map((d) => d[1]);

  svm.train(x, y);
  const pred = svm.predict(x);

  y.forEach((v, idx) => console.log(v, pred[idx]));
}

exec();

