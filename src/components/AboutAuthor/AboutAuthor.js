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
                    <img src={image} height="250px" className="round" />
                </div>

                <div className="col-md-12 mt-4 col-lg-8 col-sm-8">
                    <h2 className="display-5"> About Developer </h2>
                    <p className="lead text-justify"> Hello everyone, I am Ashish. I was a student of DA-IICT and currently Analyst at Goldman Sachs. I love participating in contest but sometimes miss that or not aware of. so, I came with this solution and now publishing it. </p>

                    <div className="connect">
                        <span className="lead"> <b> Connect Me on : </b> </span>
                        <a href="https://www.linkedin.com/in/ashish-choksi-9b2b6815b/" target="_blank"><img src={li} /> </a> &nbsp; &nbsp;

                        <a href="https://github.com/ashishchoksi" target="_blank"><img src={gh} /> </a> &nbsp; &nbsp;

                        <a href="https://mr-ashish.netlify.app/" target="_blank"><img src={web} /> </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutAuthor;
