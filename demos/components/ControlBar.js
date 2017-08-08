import React, {Component} from 'react';
import $ from 'jquery';

export default class ControlBar extends Component {
    render() {
        const props = this.props;
        return (
            <div style={props.style} className={`ml-2 btn-group${props.vertical ? ' btn-group-vertical' : ''}`} role="group">
                <button name="undo" type="button" className="btn btn-secondary" onClick={props.undo}><i className="fa fa-undo" /></button>
                <button name="redo" type="button" className="btn btn-secondary" onClick={props.redo}><i className="fa fa-repeat" /></button>
                <button name="clear" type="button" className="btn btn-secondary" onClick={props.clear}><i className="fa fa-ban" /></button>
                <button
                    id="control-bar-help"
                    data-toggle="popover"
                    title="SVC canvas"
                    data-content={this.props.help}
                    name="explain"
                    type="button"
                    className="btn btn-secondary">
                    <i className="fa fa-question" />
                </button>
            </div>
        );
    }

    componentDidMount() {
        $(function () {
            $('#control-bar-help').popover()
        });
    }
}
