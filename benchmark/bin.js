#!/usr/bin/env node
'use strict';

const Table = require('cli-table');
const spawn = require('child_process').spawn;
const argv = process.argv.slice(2);
const modes = argv[1].split(',');
const benchmarks = argv[0].split(',');
const time = +argv[2] || 10;

if(modes.includes('asm') || modes.includes('wasm')) {
    console.log('Running benchmark on nodejs version', process.version, '\n');
}

const table = new Table({
    head: [`Benchmark: # iterations in ${time} seconds`].concat(modes)
});

function toPercent(n, max) {
    const perc = n / max * 100;
    return '' + n + ' (' + perc.toFixed(1) + '%)';
}

async function exec() {
    for(let benchmark of benchmarks) {
        let counts = [];
        for (let mode of modes) {
            counts.push(await run(mode, time, benchmark));
            console.log('\n');
        }
        const max = Math.max.apply(null, counts.filter(c => typeof c === 'number'));
        counts = counts.map(c => typeof c === 'number' ? toPercent(c, max): c)
        table.push([benchmark, ...counts]);
    }
    console.log(table.toString());
}

async function run(mode, time, benchmark) {
    let count = 0;
    console.log(mode, benchmark);
    const runBenchmark = require(`./${benchmark}-benchmark`);
    let SVM;
    if(mode === 'asm') {
        SVM = require('../asm');
    }
    else if(mode === 'wasm') {
        try {
            SVM = await require('../wasm');
        } catch(e) {
            return 'error';
        }

    }
    else if(mode === 'native') {
        let str = '';
        const prom = new Promise((resolve, reject) => {
            const dir = benchmark.split('/')[0];
            const cmd = `${__dirname}/${benchmark}`;
            const args = [`${__dirname}/${dir}/data.txt`, time];
            const child = spawn(cmd, args);
            child.on('close', function() {
                resolve();
            });
            child.on('error', function() {
                reject(new Error(`Could not execute ${cmd} ${arg}`));
            });
            child.stdout.on('data', data => str += data);
            child.stdout.pipe(process.stdout);
        });

        try {
            await prom;
            count = +/(\d+) iteration/.exec(str)[1];
        } catch(e) {
            console.error('error executing benchmark', e.message);
            return e.message;
        }
        return count;

    }
    else {
        console.log(`Unknown mode ${mode}`);
        return;
    }

    try {
        count = runBenchmark(SVM, time);
    } catch(e) {
        console.error('error executing benchmark', e.message);
        return e.message;
    }
    console.log(`Done. ${count} iterations in ${time} seconds.`);
    return count;
}

exec();


