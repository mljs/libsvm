import React, {Component} from 'react';
import {updateStyleBreakpoint} from '../actions/index';
import throttle from 'lodash.throttle';
import {connect} from 'react-redux';
import SVC from '../components/SVC';
import SVR from '../components/SVR';
import Navigation from '../components/Navigation';
import {Route, HashRouter as Router, Redirect} from 'react-router-dom';
import Benchmarks from './Benchmarks';


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
            <Router>
                <div className="container">
                    <Navigation />
                    <Redirect from="/" to="/SVC" />
                    <Route exact path="/SVC" component={SVC} />
                    <Route exact path="/SVR" component={SVR} />
                    <Route exact path="/benchmarks" component={Benchmarks} />
                </div>
            </Router>
        );
    }
}


export default connect(null, {updateStyleBreakpoint})(App);
