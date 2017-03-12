import React from 'react';
import {NavLink} from 'react-router-dom';

export default function () {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" style={{backgroundColor: '#e3f2fd'}}>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">LibSVM</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-item nav-link" to="/SVC">SVC</NavLink>
                    <NavLink className="nav-item nav-link" to="/SVR">SVR</NavLink>
                </div>
            </div>
        </nav>
    )
}