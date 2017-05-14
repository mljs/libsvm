import React from 'react';
import Benchmark from '../components/Benchmark';

export default function() {
    return (
        <div>
            <Benchmark benchmark="iris/cross-validation" name="Iris cross-validation"/>
            <Benchmark benchmark="iris/grid-search" name="Iris grid-search"/>
        </div>
    );
};
