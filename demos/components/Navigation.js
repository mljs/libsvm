import React from 'react';
import {NavLink} from 'react-router-dom';
import MarkGithub from 'react-icons/lib/go/mark-github';

export default function () {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" style={{backgroundColor: '#e3f2fd', marginBottom: 15}}>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div style={{display: 'flex'}}>
                <a href="https://github.com/mljs/libsvm"><MarkGithub className="nav-item" size={32} style={{marginRight: 15}} /></a>
                <div className="navbar-brand">LibSVM</div>
            </div>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/SVC">SVC</NavLink>
                    <NavLink className="nav-item nav-link" to="/SVR">SVR</NavLink>
                    <NavLink className="nav-item nav-link" to="/benchmarks">Benchmarks</NavLink>
                </div>
            </div>
        </nav>
    );
}
