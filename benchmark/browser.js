export default async function exec(benchmark, mode, time) {
    let SVM;
    if(mode === 'asm') {
        SVM = await import('../asm');
    } else if(mode === 'wasm') {
        SVM = await import('../wasm');
    } else {
        throw new Error('Invalid mode');
    }

    const count = benchmark(SVM, time);
    console.log(`${mode}: ${count} iterations in ${time} seconds.`);

    return count;
}

