import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
// import {findHyperParameters} from '../actions/SVC';
import {getHyperParameters, KERNEL, getFields} from '../util/fields';
import TableConfigField from '../components/TableConfigField';

const initialValues = {
    type: SVM.SVM_TYPES.C_SVC
};
getFields().forEach(field => initialValues[field.name] = field.initial);

class SVCConfig extends Component {
    render() {
        const {kernelValue, typeValue} = this.props;

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
                        <TableConfigField {...KERNEL} />
                        {getHyperParameters(typeValue, kernelValue).map(param => {
                            return <TableConfigField key={param.id} {...param} value={this.props.getValue(param.name)} />;
                        })}
                    </tbody>
                </table>
            </form>
        );
    }
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
        kernelValue, costValue, gammaValue, typeValue, nuValue, getValue: function (name) {
            return selector(state, name);
        }
    };

}
export default connect(mapStateToProps)(SVCConfigForm);
