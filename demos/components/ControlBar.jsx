import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

export default class ControlBar extends Component {
  render() {
    const props = this.props;
    return (
      <div
        style={props.style}
        className={`ml-2 btn-group${
          props.vertical ? ' btn-group-vertical' : ''
        }`}
        role="group"
      >
        <button
          name="undo"
          type="button"
          className="btn btn-secondary"
          onClick={props.undo}
        >
          <FontAwesomeIcon icon="undo" />
        </button>
        <button
          name="redo"
          type="button"
          className="btn btn-secondary"
          onClick={props.redo}
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
          ref="help"
          data-toggle="popover"
          title={this.props.helpTitle}
          data-content={this.props.help}
          name="explain"
          type="button"
          className="btn btn-secondary"
        >
          <FontAwesomeIcon icon="question" />
        </button>
      </div>
    );
  }

  componentDidMount() {
    $(this.refs.help).popover();
  }

  componentWillUnmount() {
    $(this.refs.help).popover('hide');
  }
}
