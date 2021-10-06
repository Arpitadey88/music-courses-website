import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../img/1.jpeg';
import './About.css';

const About = () => {
    return (
        <div className="mx-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="about-header">Study Music from Anywhere with MusicSoul Online</h2>
                    <h6 className="about-text">
                        As the largest provider of worldwide music education, MusicSoul Online can help you take your music career to the next level through our award-winning courses, certificates, bachelor’s, and master’s degree programs. Sign up now to download free exclusive content from MusicSoul Online’s 12-week courses, authored by the same instructors who teach at MusicSoul College of Music.
                    </h6>
                    <h4 className="about-header">MusicSoul Online Offers</h4>
                    <p className="p-clr">
                        * More than 200 courses, from beginner to graduate-level
                        <br />
                        * More than 50 certificate programs with no application required
                        <br />
                        * Bachelor’s degree programs
                        <br />
                        * Master’s degree programs
                    </p>

                </div>

                <div className="col-md-6">
                    <Card.Img variant="top" className="img" src={image} />
                </div>
            </div>

        </div>
    );
};

export default About;