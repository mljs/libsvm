import React from 'react';

export default function ConfigField(props) {
  switch (props.type) {
    case 'range': {
      return (
        <div className="d-flex flex-column align-items-start">
          <div style={{ marginBottom: -12 }}>
            {props.format(props.normalize(props.values[props.name]))}
          </div>
          <input
            {...props.register(props.name)}
            type={props.type}
            name={props.name}
            min={props.min}
            max={props.max}
            step={props.step}
            style={{ ...props.style, verticalAlign: 'text-top' }}
            id={props.id}
          />
        </div>
      );
    }
    case 'number': {
      return (
        <input
          type={props.type}
          name={props.name}
          id={props.id}
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
