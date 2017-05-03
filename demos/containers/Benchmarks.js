import React from 'react';
import Benchmark from '../components/Benchmark';
import irisCVBenchmark from '../../benchmark/iris/cross-validation-benchmark';
import irisGSBenchmark from '../../benchmark/iris/grid-search-benchmark';

export default function() {
    return (
        <div>
            <Benchmark benchmark={irisCVBenchmark} name="Iris cross-validation"/>
            <Benchmark benchmark={irisGSBenchmark} name="Iris grid-search"/>
        </div>
    );
};
