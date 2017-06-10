import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'tether';
import 'bootstrap';
import './style.css';
import 'font-awesome-webpack';
import './manifest.json';

const app = document.getElementById('app');

const render = (Component) => {
    ReactDOM.render(
            <Provider store={store}>
                <Component />
            </Provider>,
        app
    );
};

render(App);

