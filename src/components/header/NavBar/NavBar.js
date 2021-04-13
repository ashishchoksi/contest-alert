import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (

        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <Link to="/" class="navbar-brand">ContestAlert</Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRes">
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>

                <div class="collapse navbar-collapse" id="navbarRes">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
                        <li class="nav-item"><Link to="/upcoming-contest" class="nav-link">Upcoming Contest</Link></li>

                    </ul>
                </div>

            </div>
        </nav>

    );
}

export default NavBar;
