import React from 'react';

export default function ConfigField(props) {
  switch (props.type) {
    case 'range': {
      return (
        <input
          name={props.name}
          step={props.step}
          type={props.type}
          min={props.min}
          max={props.max}
          normalize={props.normalize}
          format={props.format}
          style={{ ...props.style, verticalAlign: 'text-top' }}
          id={props.id}
          {...props.register(props.name)}
        />
      );
    }
    case 'number': {
      return (
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          {...props.register(props.name)}
        />
      );
    }
    case 'select': {
      return (
        <select name={props.name} id={props.id} {...props.register(props.name)}>
          {Object.keys(props.options).map((kernel) => {
            return (
              <option value={props.options[kernel]} key={props.options[kernel]}>
                {kernel}
              </option>
            );
          })}
        </select>
      );
    }
    default: {
      return null;
    }
  }
}
