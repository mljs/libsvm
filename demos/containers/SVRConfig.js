import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
const KERNEL_TYPES = SVM.KERNEL_TYPES;

const initialValues = {
    epsilon: 0.1,
    kernel: KERNEL_TYPES.RBF,
    degree: 3
};

class SVRConfig extends Component {
    render() {
        const {kernelValue} = this.props;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <table className="svm-config-table">
                    <tbody>
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
                        <td>Cost</td>
                        <td>
                            <Field name="cost" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Epsilon</td>
                        <td>
                            <Field name="epsilon" component="input" step="0.02" type="range" min="0.01" max="0.5"
                                   style={{verticalAlign: 'text-top'}}
                            />
                        </td>
                    </tr>
                    <tr style={{display: kernelValue === KERNEL_TYPES.POLYNOMIAL ? '' : 'none'}}>
                        <td>Polynomial degree</td>
                        <td>
                            <Field name="degree" component="input" type="number" />
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

const SVRConfigForm = reduxForm({
    form: 'SVRConfig',
    initialValues
})(SVRConfig);

const selector = formValueSelector('SVRConfig');

function mapStateToProps(state) {
    const epsilonValue = selector(state, 'epsilon');
    const kernelValue = selector(state, 'kernel');
    return {
        epsilonValue, kernelValue
    };

}
export default connect(mapStateToProps)(SVRConfigForm);
