import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CANVAS_RESOLUTION, CANVAS_SCALE_FACTOR} from '../constants';
import {changeLabel} from '../actions/SVC';
import {getLabelChooseColors} from '../selectors/index';

class ChooseLabel extends Component {
    constructor(props) {
        super(props);
    }

    renderColorButton(color, idx) {
        return (
            <div key={idx} style={{backgroundColor: color, marginBottom: 5}}
                className={`choose-label-element${this.props.activeLabel === idx ? ' choose-label-element-active' : ''}`}
                onClick={() => this.onLabelClick(idx)}
            />
        );
    }

    onLabelClick(idx) {
        if (this.props.activeLabel !== idx) {
            this.props.changeLabel(idx);
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <div style={{width: this.props.width}}>
                    <div className="choose-label-container">
                        {this.props.labelColors.map(this.renderColorButton.bind(this))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        width: CANVAS_RESOLUTION[state.style.currentBreakpoint] * CANVAS_SCALE_FACTOR[state.style.currentBreakpoint],
        activeLabel: state.SVCPoints.present.currentLabel,
        labelColors: getLabelChooseColors(state)
    };
}

export default connect(mapStateToProps, {changeLabel})(ChooseLabel);
