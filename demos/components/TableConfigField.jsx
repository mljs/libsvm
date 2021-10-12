import React from 'react';

import ConfigField from './ConfigField';

export default function TableConfigField(props) {
  switch (props.type) {
    case 'range': {
      return (
        <tr>
          <td>
            <label htmlFor={props.id}>{props.name} &nbsp;&nbsp; {props.value && props.value.toExponential(2)}</label>
          </td>
          <td>
            <ConfigField {...props} />
          </td>
        </tr>
      );
    }
    case 'select':
    case 'number': {
      return (
        <tr>
          <td><label htmlFor={props.id}>{props.name}</label></td>
          <td>
            <ConfigField {...props} />
          </td>
        </tr>
      );
    }
    default: {
      throw new Error('Unreachable');
    }
  }
}
