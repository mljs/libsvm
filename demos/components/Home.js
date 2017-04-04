import React from 'react';
import {Link} from 'react-router-dom';

export default function () {
    return (
        <div>
            <h1>LibSVM-js</h1>
            <p><Link to="/SVC">Support vector classification</Link></p>
            <p><Link to="/SVR">Support vector regression</Link></p>
        </div>
    );
}
