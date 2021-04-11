import React from 'react';
import './NavBar.css';
import logo from './logo.png';

function NavBar() {
    return (

        <div className="container-fluid">
            <div className="fixed">
                <div className="row top-nav">
                    <ul className="col-md-8 left-side col-sm-12">
                        <li> Contest-Alert </li>
                        <li>Upcomming Contest</li>
                    </ul>
                    <ul className="col-md-4 text-right left-side col-sm-12">
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
