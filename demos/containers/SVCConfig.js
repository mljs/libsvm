import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import SVM from '../..';
const KERNEL_TYPES = SVM.KERNEL_TYPES;

const initialValues = {
    cost: 1,
    gamma: 1,
    kernel: String(KERNEL_TYPES.RBF),
    shrinking: true
};

class SVCConfig extends Component {
    render() {
        const {gammaValue, costValue, kernelValue} = this.props;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <table className="svc-config-table">
                    <tbody>
                    <tr>
                        <td>Kernel</td>
                        <td>
                            <Field name="kernel" component="select">
                                {Object.keys(KERNEL_TYPES).map(kernel => {
                                    return <option value={KERNEL_TYPES[kernel]}
                                                   key={KERNEL_TYPES[kernel]}>{kernel}</option>
                                })}
                            </Field>
                        </td>
                    </tr>
                    <tr>
                        <td>Cost - {costValue && costValue.toExponential(2)}</td>
                        <td>
                            <Field name="cost" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Gamma - {gammaValue && gammaValue.toExponential(2)}</td>
                        <td>
                            <Field name="gamma" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
                            />
                        </td>
                    </tr>
                    <tr style={{display: kernelValue == KERNEL_TYPES.LINEAR ? 'none' : 'inherit'}}>
                        <td>Use shrinking heuristics</td>
                        <td style={{textAlign: 'center'}}>
                            <Field name="shrinking" component="input" type="checkbox"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

function log10Normalize(value) {
    return Math.pow(10, value);
}

SVCConfig = reduxForm({
    form: 'SVCConfig',
    initialValues
})(SVCConfig);

const selector = formValueSelector('SVCConfig');

function mapStateToProps(state) {
    const kernelValue = selector(state, 'kernel');
    const costValue = selector(state, 'cost');
    const gammaValue = selector(state, 'gamma');
    return {
        kernelValue, costValue, gammaValue
    }

}
export default connect(mapStateToProps)(SVCConfig);