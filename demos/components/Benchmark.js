import React, {Component} from 'react';
import runBenchmark from '../../benchmark/browser';

export default class Benchmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async onRun() {
        const asmTime = await runBenchmark(this.props.benchmark, 'asm', 5);
        this.setState({
            asmTime
        });

        await wait();

        const wasmTime = await runBenchmark(this.props.benchmark, 'wasm', 5);
        this.setState({
            wasmTime
        });
    }
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                asm: {this.state.asmTime} &nbsp;
                wasm: {this.state.wasmTime} &nbsp;
                <input type="button" value="Run" onClick={this.onRun.bind(this)} />
            </div>
        )
    }
}

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
}