import React, {Component} from 'react';
import Loading from 'react-loading';

export default class Benchmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asmTime: '-',
            wasmTime: '-'
        };
    }

    componentDidMount() {
        const Worker = require('worker-loader!../../benchmark/worker');
        this.worker = new Worker();
        this.worker.onmessage = event => {
            this.setState({
                [event.data.method === 'asm' ? 'asmTime' : 'wasmTime']: event.data.result
            });
        };
    }

    async onRun() {
        this.worker.postMessage({
            benchmark: this.props.benchmark,
            method: 'asm',
            time: 5
        });
        this.worker.postMessage({
            benchmark: this.props.benchmark,
            method: 'wasm',
            time: 5
        });
        this.setState({
            asmTime: 'running',
            wasmTime: 'running'
        });
    }

    render() {
        const {asmTime, wasmTime} = this.state;
        const disabled = asmTime === 'running' || wasmTime === 'running';
        const Description = this.props.description || (() => null);
        return (
            <div>
                <hr/>
                <h3>{this.props.name}</h3>
                <Description />
                <div style={{lineHeight: '32px', display: 'flex'}}>
                    asm: {asmTime === 'running' ? <MySpinner /> : asmTime} &nbsp;
                    wasm: {wasmTime === 'running' ? <MySpinner /> : wasmTime } &nbsp;
                    <input type="button" className="btn btn-info" value="Run" onClick={this.onRun.bind(this)} disabled={disabled} />
                </div>
            </div>
        );
    }
}


function MySpinner() {
    return (
        <div style={{display: 'inline-block', height: 32, width: 32}}>
            <Loading type="bubbles" width={32} height={32} color="black" />
        </div>
    );
}
