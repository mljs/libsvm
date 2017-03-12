import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import store from './store';
import {Provider} from 'react-redux';
import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mainStyle from './style.css';
import fontAwesome from 'font-awesome-webpack';

const app = document.getElementById('app');
ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
), app);

// window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');