import React, {Component} from 'react';
import runBenchmark from '../../benchmark/browser';

export default class Benchmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async onRun() {
        const asmTime = await runBenchmark(this.props.benchmark, 'asm');
        this.setState({
            asmTime
        });
        const wasmTime = await runBenchmark(this.props.benchmark, 'wasm');
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
