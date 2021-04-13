import './AboutAuthor.css';
import React from 'react';
import image from '../../assets/images/ashish.jpeg';

import gh from '../../assets/images/github.png';
import web from '../../assets/images/website.png';
import li from '../../assets/images/linkedin.png';

function AboutAuthor() {
    return (
        <div className="main-tx">
            <div className="container-fluid row">

                <div className="col-md-12 text-center col-lg-4 col-sm-12">
                    <img src={image} height="250px" width="250px" alt="" className="round" />
                </div>

                <div className="col-md-12 col-lg-8 col-sm-8">
                    <h2 className="display-5"> About Developer </h2>
                    <p className="lead"> Hello everyone, I am Ashish.</p>
                    <p className="lead">I was a student of DA-IICT and currently Analyst at Goldman Sachs.</p>
                    <p className="lead">This platform helps you to be aware of competitive coding contests.</p>

                    <div className="connect">
                        <span className="lead"> <b> Connect Me on : </b> </span>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/ashish-choksi-9b2b6815b/" target="_blank"><img src={li} alt="Linkedin" /> </a> &nbsp; &nbsp;

                        <a rel="noreferrer" href="https://github.com/ashishchoksi" target="_blank"><img src={gh} alt="github" /> </a> &nbsp; &nbsp;

                        <a rel="noreferrer" href="https://mr-ashish.netlify.app/" target="_blank"><img src={web} alt="website" /> </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutAuthor;
