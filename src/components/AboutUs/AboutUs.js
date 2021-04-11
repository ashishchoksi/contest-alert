import React from 'react';
import './AboutUs.css';
import image from '../../assets/images/code3.png';

function AboutUs() {
    return (
        <div className="main">
            <div className="container-fluid row">
                <div className="col-lg-4 text-center col-md-12 col-sm-12">
                    <img src={image} width="350px" height="300px" />
                </div>

                <div className="col-lg-8 col-md-12 mt-5 col-sm-12">
                    <h2 className="display-5"> Don't Miss Contest Anymore! </h2>
                    <p className="lead"> Hey there, Now you will not miss any contest. Here we are with list of upcoming contest from various websites like Codechef, Codeforces, Hackerrank, Google Codejam, Kickstart.</p>
                    <p className="lead"> Our goal is to add as many contest platform in one place and make you aware with upcoming contests.</p>
                    <p className="lead"> So, Get ready and make step to change the world!</p>
                </div>
            </div>
        </div>

    );
}

export default AboutUs;
