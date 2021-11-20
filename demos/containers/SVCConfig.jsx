import React from 'react';

// import {findHyperParameters} from '../actions/SVC';
import { getHyperParameters, KERNEL, getFields } from '../util/fields';
import TableConfigField from '../components/TableConfigField';
import { useFormContext } from 'react-hook-form';
import useSVCConfig from '../hooks/useSVCConfig';

const initialValues = {
  type: SVM.SVM_TYPES.C_SVC,
};
getFields().forEach((field) => (initialValues[field.name] = field.initial));

export default function SVCConfig() {
  const { register } = useFormContext();
  const { type, kernel } = useSVCConfig();

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
                <option value={SVM.SVM_TYPES.ONE_CLASS}>ONE_CLASS</option>
              </select>
            </td>
          </tr>
          <TableConfigField {...KERNEL} register={register} />
          {getHyperParameters(type, kernel).map((param) => {
            return (
              <TableConfigField key={param.id} {...param} register={register} />
            );
          })}
        </tbody>
      </table>
    </form>
  );
}
