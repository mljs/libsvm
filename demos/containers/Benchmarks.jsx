import React from 'react';

import Benchmark from '../components/Benchmark';

export default function Benchmarks() {
  return (
    <div>
      <div>
        This will run a few typical SVM scenarios. The scenario will be run as
        many times as possibles for 5 seconds. The reported score is the number
        of iteration. Higher is better. Those benchmarks can be compared with
        their native counterparts from the command line with{' '}
        <code>npm run benchmark</code>.
      </div>
      <Benchmark
        benchmark="iris/cross-validation"
        name="Iris cross-validation"
        description={() => {
          return (
            <p>
              <code>C_SVC</code> leave-one-out cross-validation with RBF kernel
              (<code>gamma=0.2</code>) on the{' '}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Iris_flower_data_set"
              >
                iris dataset
              </a>
              .
            </p>
          );
        }}
      />
      <Benchmark
        benchmark="iris/grid-search"
        name="Iris grid-search"
        description={() => {
          return (
            <p>
              <code>C_SVC</code> 6-by-6 grid grid search of gamma and C
              parameters on the{' '}
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Iris_flower_data_set"
              >
                iris dataset
              </a>
              .
            </p>
          );
        }}
      />
      <Benchmark
        benchmark="iris/precomputed-cv"
        name="Iris precomputed kernel"
        description={() => {
          return (
            <p>
              <code>C_SVC</code> leave-on-one cross-validation with a
              precomputed RBF kernel (<code>gamma=0.2</code>)
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Iris_flower_data_set"
              >
                iris dataset
              </a>
              .
            </p>
          );
        }}
      />
    </div>
  );
}
