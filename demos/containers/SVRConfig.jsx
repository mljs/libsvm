import React from 'react';

import { KERNEL, getHyperParameters } from '../util/fields';
import TableConfigField from '../components/TableConfigField';
import { useFormContext, useWatch } from 'react-hook-form';

export default function SVRConfig() {
  const { register } = useFormContext();
  const values = useWatch();

  return (
    <form>
      <table className="svm-config-table">
        <tbody>
          <tr>
            <td>
              <label htmlFor="SVR_type">Regression type</label>
            </td>
            <td>
              <select name="type" id="SVR_type" {...register('type')}>
                <option value={SVM.SVM_TYPES.EPSILON_SVR}>EPSILON_SVR</option>
                <option value={SVM.SVM_TYPES.NU_SVR}>NU_SVR</option>
              </select>
            </td>
          </tr>
          <TableConfigField {...KERNEL} register={register} values={values} />
          {getHyperParameters(values.type, values.kernel).map((param) => {
            return (
              <TableConfigField
                key={param.id}
                {...param}
                register={register}
                values={values}
              />
            );
          })}
        </tbody>
      </table>
    </form>
  );
}
