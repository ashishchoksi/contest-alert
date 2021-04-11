import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (

        <div className="container-fluid">
            <div className="fixed">
                <div className="row top-nav">
                    <ul className="col-md-8 left-side col-sm-12">
                        <li> <Link to="/" className="link"> Contest-Alert </Link> </li>
                        <li> <Link to="/upcoming-contest" className="link"> Upcomming Contest </Link></li>
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
