import React from 'react';
import Benchmark from '../components/Benchmark';

export default function () {
    return (
        <div>
            <div>
                This will run a few typical SVM scenarios using asm or wasm. The scenario will be run as many times as possibles for 5 seconds. The reported score is the number of iteration. Higher is better. Those benchmarks can be compared with their native counterparts from the command line with <code>npm run benchmark</code>. This will also benchmark node.js.
            </div>
            <Benchmark benchmark="iris/cross-validation" name="Iris cross-validation" description={() => {
                return (
                    <p>
                        C_SVC eave-one-out cross-validation with RBF kernel on the <a target="_blank" href="https://en.wikipedia.org/wiki/Iris_flower_data_set">iris dataset</a>.
                    </p>
                );
            }} />
            <Benchmark benchmark="iris/grid-search" name="Iris grid-search" description={() => {
                return (
                    <p>
                        C_SVC 6-by-6 grid grid search of gamma and C parameters on the <a target="_blank" href="https://en.wikipedia.org/wiki/Iris_flower_data_set">iris dataset</a>.
                    </p>
                )
            }}/>
        </div>
    );
}
