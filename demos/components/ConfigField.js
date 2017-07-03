import React from 'react';
import {Field} from 'redux-form';

export default function ConfigField(props) {
    switch (props.type) {
        case 'range': {
            return <Field name={props.name} component="input" step={props.step} type={props.type} min={props.min}
                          max={props.max}
                          normalize={props.normalize} format={props.format}
                          style={{...props.style, verticalAlign: 'text-top'}}
                          id={props.id}
            />
        }
        case 'number': {
            return <Field id={props.id} name={props.name} component="input" type={props.type}/>
        }
        case 'select': {
            return (
                <Field name={props.name} component="select" id={props.id}>
                    {Object.keys(props.options).map(kernel => {
                        return <option value={props.options[kernel]}
                                       key={props.options[kernel]}>{kernel}
                        </option>;
                    })}
                </Field>
            )
        }
        default: {
            return null;
        }
    }
};