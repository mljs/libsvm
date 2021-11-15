import React from 'react';

// import {findHyperParameters} from '../actions/SVC';
import { getHyperParameters, KERNEL, getFields } from '../util/fields';
import TableConfigField from '../components/TableConfigField';

const initialValues = {
  type: SVM.SVM_TYPES.C_SVC,
};
getFields().forEach((field) => (initialValues[field.name] = field.initial));

export default function SVCConfig(props) {
  const { kernelValue, typeValue } = props;

  // todo: form state
  const params = {};

  return (
    <form>
      <table className="svm-config-table">
        <tbody>
          <tr>
            <td>
              <label htmlFor="SVC_type">Classification type</label>
            </td>
            <td>
              <select name="type" id="SVC_type">
                <option value={SVM.SVM_TYPES.C_SVC}>C_SVC</option>
                <option value={SVM.SVM_TYPES.NU_SVC}>NU_SVC</option>
                <option value={SVM.SVM_TYPES.ONE_CLASS}>ONE_CLASS</option>
              </select>
            </td>
          </tr>
          <TableConfigField {...KERNEL} />
          {getHyperParameters(typeValue, kernelValue).map((param) => {
            return (
              <TableConfigField
                key={param.id}
                {...param}
                value={params[param.name]}
              />
            );
          })}
        </tbody>
      </table>
    </form>
  );
}
