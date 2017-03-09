import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR, LABELS_COLORS} from '../constants';
import {changeLabel} from '../actions/index';

class ChooseLabel extends Component {
    constructor(props) {
        super(props);
    }

    renderColorButton(color, idx) {
        return (
            <div key={idx} style={{backgroundColor: color}}
                 className={`choose-label${this.props.activeLabel === idx ? ' choose-label-active' : ''}`}
                 onClick={() => this.onLabelClick(idx)}
            />
        );
    }

    onLabelClick(idx) {
        console.log('on label click');
        if(this.props.activeLabel !== idx) {
            this.props.changeLabel(idx);
        }
    }

    render() {
        return (
            <div className="flex-align">
                <div style={{width: this.props.width}}>
                    <div className="choose-label-container">
                        {LABELS_COLORS.map(this.renderColorButton.bind(this))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        width: CANVAS_RESOLUTION[state.style.currentBreakpoint] * CANVAS_SCALE_FACTOR[state.style.currentBreakpoint],
        activeLabel: state.SVC.currentLabel
    }
}

export default connect(mapStateToProps, {changeLabel})(ChooseLabel);