'use strict';

export default async function exec(benchmark, mode) {
    let SVM;
    if(mode === 'asm') {
        SVM = await import('../asm');
    } else if(mode === 'wasm') {
        SVM = await import('../wasm');
    } else {
        throw new Error('Invalid mode');
    }

    const count = benchmark(SVM);
    console.log(`${mode}: ${count} iterations.`);

    return count;
}

