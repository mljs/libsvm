import React from 'react';

import { getHyperParameters, KERNEL } from '../util/fields';
import TableConfigField from '../components/TableConfigField';
import { useFormContext, useWatch } from 'react-hook-form';

export default function SVCConfig() {
  const { register } = useFormContext();
  const values = useWatch();

  return (
    <form>
      <table className="svm-config-table">
        <tbody>
          <tr>
            <td>
              <label htmlFor="SVC_type">Classification type</label>
            </td>
            <td>
              <select name="type" id="SVC_type" {...register('type')}>
                <option value={SVM.SVM_TYPES.C_SVC}>C_SVC</option>
                <option value={SVM.SVM_TYPES.NU_SVC}>NU_SVC</option>
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
