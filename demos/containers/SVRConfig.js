import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {getFields, KERNEL, getHyperParameters} from '../util/fields';
import TableConfigField from '../components/TableConfigField';

const initialValues = {
    type: SVM.SVM_TYPES.EPSILON_SVR,
};

getFields().forEach(field => initialValues[field.name] = field.initial);

class SVRConfig extends Component {
    render() {
        const {kernelValue, typeValue} = this.props;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <table className="svm-config-table">
                    <tbody>
                        <tr>
                            <td><label htmlFor="SVR_type">Regression type</label></td>
                            <td>
                                <Field name="type" component="select" id="SVR_type">
                                    <option value={SVM.SVM_TYPES.EPSILON_SVR}>EPSILON_SVR</option>
                                    <option value={SVM.SVM_TYPES.NU_SVR}>NU_SVR</option>
                                </Field>
                            </td>
                        </tr>
                        <TableConfigField {...KERNEL} />
                        {getHyperParameters(typeValue, kernelValue).map(param => {
                            const value = this.props.getValue(param.name);
                            return <TableConfigField {...param} value={value} />;
                        })}
                    </tbody>
                </table>
            </form>
        );
    }
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
        epsilonValue, kernelValue, gammaValue, costValue, nuValue, typeValue, getValue(name) {
            return selector(state, name);
        }
    };

}
export default connect(mapStateToProps)(SVRConfigForm);
