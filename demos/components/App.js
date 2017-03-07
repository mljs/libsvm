import React, {Component} from 'react';
import Canvas from './Canvas';
import {updateStyleBreakpoint} from '../actions/index';
import throttle from 'lodash.throttle';
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount() {
        const onResize = () => {
            const breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
            this.props.updateStyleBreakpoint(breakpoint);
        };

        window.addEventListener('resize', throttle(onResize, 150));
        onResize();
    }

    render() {
        return (
            <div className="container" style={{textAlign: 'center'}}>
                <Canvas style={{imageRendering: 'pixelated'}}/>
            </div>
        );
    }
}


export default connect(null, {updateStyleBreakpoint})(App);