import React from 'react';

import { getFields, KERNEL, getHyperParameters } from '../util/fields';
import TableConfigField from '../components/TableConfigField';

const initialValues = {
  type: SVM.SVM_TYPES.EPSILON_SVR,
};

getFields().forEach((field) => (initialValues[field.name] = field.initial));

export default function SVRConfig(props) {
  const { kernelValue, typeValue } = props;

  // todo: implement state
  const params = {};
  return (
    <form>
      <table className="svm-config-table">
        <tbody>
          <tr>
            <td>
              <label htmlFor="SVR_type">Regression type</label>
            </td>
            <td>
              <select name="type" id="SVR_type">
                <option value={SVM.SVM_TYPES.EPSILON_SVR}>EPSILON_SVR</option>
                <option value={SVM.SVM_TYPES.NU_SVR}>NU_SVR</option>
              </select>
            </td>
          </tr>
          <TableConfigField {...KERNEL} />
          {getHyperParameters(typeValue, kernelValue).map((param) => {
            const value = params[param.name];
            return <TableConfigField {...param} value={value} />;
          })}
        </tbody>
      </table>
    </form>
  );
}
