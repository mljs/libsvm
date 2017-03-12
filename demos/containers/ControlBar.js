import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from 'redux-undo';

import {clearPoints, undoPoints, redoPoints} from '../actions/index';

class ControlBar extends Component {
    render() {
        return (
            <div style={this.props.style} className={`btn-group${this.props.vertical ? ' btn-group-vertical' : ''}`} role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={this.props.undo}><i className="fa fa-undo"/></button>
                <button type="button" className="btn btn-secondary" onClick={this.props.redo}><i className="fa fa-repeat"/></button>
                <button type="button" className="btn btn-secondary" onClick={this.props.clearPoints}><i className="fa fa-ban"/></button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearPoints: () => dispatch(clearPoints()),
        undo: () => dispatch(ActionCreators.undo()),
        redo: () => dispatch(ActionCreators.redo())
    }
}


export default connect(null, mapDispatchToProps)(ControlBar);