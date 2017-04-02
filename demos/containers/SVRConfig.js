import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
const KERNEL_TYPES = SVM.KERNEL_TYPES;
const initialValues = {
    type: SVM.SVM_TYPES.EPSILON_SVR,
    epsilon: 0.1,
    nu: 0.1,
    kernel: KERNEL_TYPES.RBF,
    degree: 3,
    gamma: 1,
    cost: 1
};

class SVRConfig extends Component {
    render() {
        const {kernelValue, epsilonValue, costValue, gammaValue, nuValue, typeValue} = this.props;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <table className="svm-config-table">
                    <tbody>
                    <tr>
                        <td>Regression type</td>
                        <td>
                            <Field name="type" component="select">
                                <option value={SVM.SVM_TYPES.EPSILON_SVR}>EPSILON_SVR</option>
                                <option value={SVM.SVM_TYPES.NU_SVR}>NU_SVR</option>
                            </Field>
                        </td>
                    </tr>
                    <tr>
                        <td>Kernel</td>
                        <td>
                            <Field name="kernel" component="select">
                                {Object.keys(KERNEL_TYPES).map(kernel => {
                                    return <option value={KERNEL_TYPES[kernel]}
                                                   key={KERNEL_TYPES[kernel]}>{kernel}
                                    </option>;
                                })}
                            </Field>
                        </td>
                    </tr>
                    <tr>
                        <td>Cost &nbsp;&nbsp; {costValue && costValue.toExponential(2)}</td>
                        <td>
                            <Field name="cost" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
                            />
                        </td>
                    </tr>
                    <tr style={{display: kernelValue === KERNEL_TYPES.LINEAR ? 'none' : ''}}>
                        <td>Gamma &nbsp;&nbsp; {gammaValue && gammaValue.toExponential(2)}</td>
                        <td>
                            <Field name="gamma" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                            />
                        </td>
                    </tr>
                    <tr style={{display: kernelValue === KERNEL_TYPES.POLYNOMIAL ? '' : 'none'}}>
                        <td>Polynomial degree</td>
                        <td>
                            <Field name="degree" component="input" type="number" />
                        </td>
                    </tr>
                    <tr style={{display: typeValue === SVM.SVM_TYPES.EPSILON_SVR ? '' : 'none'}}>
                        <td>Epsilon &nbsp;&nbsp; {epsilonValue && epsilonValue.toExponential(2)}</td>
                        <td>
                            <Field name="epsilon" component="input" step="0.02" type="range" min="0.01" max="0.5"
                                   style={{verticalAlign: 'text-top'}}
                                   normalize={n => +n}
                            />
                        </td>
                    </tr>
                    <tr style={{display: typeValue === SVM.SVM_TYPES.NU_SVR ? '' : 'none'}}>
                        <td>Nu &nbsp;&nbsp; {nuValue && nuValue.toExponential(2)}</td>
                        <td>
                            <Field name="nu" component="input" step="0.02" type="range" min="0.01" max="0.5"
                                   style={{verticalAlign: 'text-top'}}
                                   normalize={n => +n}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

function log10Normalize(value) {
    return 10 ** value;
}

const SVRConfigForm = reduxForm({
    form: 'SVRConfig',
    initialValues
})(SVRConfig);

const selector = formValueSelector('SVRConfig');

function mapStateToProps(state) {
    const epsilonValue = selector(state, 'epsilon');
    const kernelValue = selector(state, 'kernel');
    const gammaValue = selector(state, 'gamma');
    const costValue = selector(state, 'cost');
    const nuValue = selector(state, 'nu');
    const typeValue = selector(state, 'type');
    return {
        epsilonValue, kernelValue, gammaValue, costValue, nuValue, typeValue
    };

}
export default connect(mapStateToProps)(SVRConfigForm);
