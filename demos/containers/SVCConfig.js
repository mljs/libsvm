import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

const initialValues = {
    cost: 1,
    gamma: 1
};

class SVCConfig extends Component {
    constructor(props) {
        super(props);
        this.state = initialValues;
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    Cost &nbsp;
                    <Field name="cost" component="input" step="0.2" type="range" min="-3" max="3"
                           normalize={log10Normalize} format={Math.log10}
                           onChange={(event, value) => this.setState({cost:value})}
                           style={{verticalAlign: 'text-top'}}
                    />
                    &nbsp; {this.state.cost.toExponential(2)}
                </div>
                <div>
                    Gamma &nbsp;
                    <Field name="gamma" component="input" step="0.2" type="range" min="-3" max="3"
                           normalize={log10Normalize} format={Math.log10}
                           onChange={(event, value) => this.setState({gamma: value})}
                           style={{verticalAlign: 'text-top'}}
                    />
                    &nbsp; {this.state.gamma.toExponential(2)}
                </div>
            </form>
        );
    }
}

function log10Normalize(value) {
    return Math.pow(10, value);
}

export default reduxForm({
    form: 'SVCConfig',
    initialValues
})(SVCConfig);