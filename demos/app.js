import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import bootstrapStyle from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

console.log('hello');

const app = document.getElementById('app');
ReactDom.render(<App/>, app);
ReactDom.render();