import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActionCreators} from 'redux-undo';

import {clearPoints, undoPoints, redoPoints} from '../actions/index';

class ControlBar extends Component {
    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={this.props.undo}>Undo</button>
                <button type="button" className="btn btn-secondary" onClick={this.props.redo}>Redo</button>
                <button type="button" className="btn btn-secondary" onClick={this.props.clearPoints}>Clear</button>
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