import React from 'react';

export default function (props) {
    return (
        <div style={props.style} className={`ml-2 btn-group${props.vertical ? ' btn-group-vertical' : ''}`} role="group">
            <button type="button" className="btn btn-secondary" onClick={props.undo}><i className="fa fa-undo"/></button>
            <button type="button" className="btn btn-secondary" onClick={props.redo}><i className="fa fa-repeat"/></button>
            <button type="button" className="btn btn-secondary" onClick={props.clear}><i className="fa fa-ban"/></button>
        </div>
    )
}