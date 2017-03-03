import React, {Component} from 'react';
import store from '../store';
import {Provider} from 'react-redux';
import Canvas from './Canvas';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Canvas/>
                </div>
            </Provider>
        );
    }
}

export default App;