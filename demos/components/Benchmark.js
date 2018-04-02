import React, { Component } from 'react';
import Loading from 'react-loading-animation';

export default class Benchmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asmTime: '-',
      wasmTime: '-'
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    const Worker = require('worker-loader!../../benchmark/worker');
    this.worker = new Worker();
    this.worker.onmessage = (event) => {
      this.setState({
        [event.data.method === 'asm' ? 'asmTime' : 'wasmTime']: event.data
          .result
      });
    };
  }

  onRun() {
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
      asmTime: 'sent',
      wasmTime: 'sent'
    });
  }

  render() {
    const { asmTime, wasmTime } = this.state;
    const disabled = asmTime === 'running' || wasmTime === 'running';
    let AsmRender = getResultComponent(asmTime);
    let WasmRender = getResultComponent(wasmTime);

    const Description = this.props.description || (() => null);
    return (
      <div>
        <hr />
        <h3>{this.props.name}</h3>
        <Description />
        <div style={{ lineHeight: '32px', display: 'flex' }}>
          asm: &nbsp; <AsmRender /> &nbsp; wasm: &nbsp; <WasmRender /> &nbsp;
          <input
            type="button"
            className="btn btn-info"
            value="Run"
            onClick={this.onRun.bind(this)}
            disabled={disabled}
          />
        </div>
      </div>
    );
  }
}

function getResultComponent(time) {
  switch (time) {
    case 'running':
      return () => <MySpinner />;
    case 'sent':
      return () => <div />;
    default:
      return () => <div>{time}</div>;
  }
}

function MySpinner() {
  return (
    <div style={{ display: 'inline-block', height: 24, width: 24 }}>
      <Loading style={{ width: 24, height: 24 }} />
    </div>
  );
}
