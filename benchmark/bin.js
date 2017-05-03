#!/usr/bin/env node
'use strict';

const spawn = require('child_process').spawn;
const argv = process.argv.slice(2);
const modes = argv[1].split(',');
const benchmarks = argv[0].split(',');

console.log(modes, benchmarks);

if(modes.includes('asm') || modes.includes('wasm')) {
    console.log('Running benchmark on nodejs version', process.version);
}

async function exec() {
    for(let benchmark of benchmarks) {
        for (let mode of modes) {
            await run(mode, benchmark);
        }
    }
}

async function run(mode, benchmark) {
    console.log(mode, benchmark);
    const irisBenchmark = require(`./${benchmark}-benchmark`);
    let SVM;
    if(mode === 'asm') SVM = Promise.resolve(require('../asm'));
    else if(mode === 'wasm') SVM = require('../wasm');
    else if(mode === 'native') {
        const prom = new Promise((resolve, reject) => {
            const dir = benchmark.split('/')[0];
            const child = spawn(`${__dirname}/${benchmark}`, [`${__dirname}/${dir}/data.txt`]);
            child.on('close', function() {
                resolve();
            });
            child.on('error', function() {
                reject();
            });
            child.stdout.pipe(process.stdout);
        });
        await prom;
        return;

    }
    else {
        console.log(`Unknown mode ${mode}`);
        return;
    }

    SVM.then(SVM => {
        console.log(`running ${benchmark} benchmark (${mode})`);
        const count = irisBenchmark(SVM);
        console.log(`${mode}: ${count} iterations.`);
    });

}

exec();


