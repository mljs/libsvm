import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
const KERNEL_TYPES = SVM.KERNEL_TYPES;

const initialValues = {
    type: SVM.SVM_TYPES.C_SVC,
    cost: 1,
    nu: 0.5,
    gamma: 1,
    degree: 3,
    kernel: KERNEL_TYPES.RBF
};

class SVCConfig extends Component {
    render() {
        const {gammaValue, costValue, kernelValue, nuValue, typeValue} = this.props;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <table className="svm-config-table">
                    <tbody>
                    <tr>
                        <td><label htmlFor="SVC_type" >Classification type</label></td>
                        <td>
                            <Field name="type" component="select" id="SVC_type">
                                <option value={SVM.SVM_TYPES.C_SVC}>C_SVC</option>
                                <option value={SVM.SVM_TYPES.NU_SVC}>NU_SVC</option>
                                <option value={SVM.SVM_TYPES.ONE_CLASS}>ONE_CLASS</option>
                            </Field>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="SVC_kernel" >Kernel caca</label></td>
                        <td>
                            <Field name="kernel" component="select" id="SVC_kernel">
                                {Object.keys(KERNEL_TYPES).map(kernel => {
                                    return <option value={KERNEL_TYPES[kernel]}
                                                   key={KERNEL_TYPES[kernel]}>{kernel}
                                            </option>;
                                })}
                            </Field>
                        </td>
                    </tr>
                    <tr style={{display: typeValue === SVM.SVM_TYPES.C_SVC ? '' : 'none'}}>
                        <td><label htmlFor="SVC_cost">Cost &nbsp;&nbsp; {costValue && costValue.toExponential(2)}</label></td>
                        <td>
                            <Field name="cost" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
                                   id="SVC_cost"
                            />
                        </td>
                    </tr>
                    <tr style={{display: typeValue !== SVM.SVM_TYPES.C_SVC ? '' : 'none'}}>
                        <td><label htmlFor="SVC_nu">Nu &nbsp;&nbsp; {nuValue && nuValue.toExponential(2)}</label></td>
                        <td>
                            <Field name="nu" component="input" step="0.1" type="range" min="0" max="1"
                                   normalize={val => +val}
                                   style={{verticalAlign: 'text-top'}}
                                   id="SVC_nu"
                            />
                        </td>
                    </tr>
                    <tr style={{display: kernelValue === KERNEL_TYPES.LINEAR ? 'none' : ''}}>
                        <td><label htmlFor="SVC_gamma">Gamma &nbsp;&nbsp; {gammaValue && gammaValue.toExponential(2)}</label></td>
                        <td>
                            <Field name="gamma" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
                                   id="SVC_gamma"
                            />
                        </td>
                    </tr>
                    <tr style={{display: kernelValue === KERNEL_TYPES.POLYNOMIAL ? '' : 'none'}}>
                        <td><label htmlFor="SVC_degree">Polynomial degree</label></td>
                        <td>
                            <Field id="SVC_degree" name="degree" component="input" type="number" />
                        </td>
                    </tr>
                    <tr style={{display: typeValue !== SVM.SVM_TYPES.ONE_CLASS ? '' : 'none'}}>
                        <td><label htmlFor="SVC_weight">Correct for unbalanced data set</label></td>
                        <td>
                            <Field id="SVC_weight" name="weight" component="input" type="checkbox" />
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

const SVCConfigForm = reduxForm({
    form: 'SVCConfig',
    initialValues
})(SVCConfig);

const selector = formValueSelector('SVCConfig');

function mapStateToProps(state) {
    const kernelValue = selector(state, 'kernel');
    const costValue = selector(state, 'cost');
    const nuValue = selector(state, 'nu');
    const gammaValue = selector(state, 'gamma');
    const typeValue = selector(state, 'type');
    return {
        kernelValue, costValue, gammaValue, typeValue, nuValue
    };

}
export default connect(mapStateToProps)(SVCConfigForm);
