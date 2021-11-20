import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ControlBar(props) {
  return (
    <div
      style={props.style}
      className={`ml-2 btn-group${props.vertical ? ' btn-group-vertical' : ''}`}
      role="group"
    >
      <button
        name="undo"
        type="button"
        className="btn btn-secondary"
        onClick={props.undo}
        disabled={!props.canUndo}
      >
        <FontAwesomeIcon icon="undo" />
      </button>
      <button
        name="redo"
        type="button"
        className="btn btn-secondary"
        onClick={props.redo}
        disabled={!props.canRedo}
      >
        <FontAwesomeIcon icon="redo" />
      </button>
      <button
        name="clear"
        type="button"
        className="btn btn-secondary"
        onClick={props.clear}
      >
        <FontAwesomeIcon icon="broom" />
      </button>
      <button
        title={props.helpTitle}
        data-content={props.help}
        name="explain"
        type="button"
        className="btn btn-secondary"
      >
        <FontAwesomeIcon icon="question" />
      </button>
    </div>
  );
}
