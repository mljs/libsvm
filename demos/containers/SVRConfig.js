import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import SVM from '../..';
const KERNEL_TYPES = SVM.KERNEL_TYPES;

const initialValues = {
    epsilon: 0.1,
    kernel: String(KERNEL_TYPES.RBF)
};

class SVRConfig extends Component {
    render() {
        const {epsilonValue} = this.props;
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
                                                   key={KERNEL_TYPES[kernel]}>{kernel}
                                    </option>
                                })}
                            </Field>
                        </td>
                    </tr>
                    <tr>
                        <td>Epsilon</td>
                        <td>
                            <Field name="cost" component="input" step="0.2" type="range" min="-3" max="3"
                                   normalize={log10Normalize} format={Math.log10}
                                   style={{verticalAlign: 'text-top'}}
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
    return Math.pow(10, value);
}

SVRConfig = reduxForm({
    form: 'SVRConfig',
    initialValues
})(SVRConfig);

const selector = formValueSelector('SVCConfig');

function mapStateToProps(state) {
    const epsilonValue = selector(state, 'epsilon');
    return {
        epsilonValue
    }

}
export default connect(mapStateToProps)(SVRConfig);