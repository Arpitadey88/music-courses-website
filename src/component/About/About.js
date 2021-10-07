import React from 'react';
import { Button, Card } from 'react-bootstrap';
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
                    <h4 className="about-header pt-1">MusicSoul Online Offers</h4>
                    <p className="p-clr pb-2">
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
            <br />

            <Card className="py-1">
                <h2 style={{ color: 'brown' }}>Featured</h2>
                <Card.Body style={{ backgroundColor: 'wheat', color: 'chocolate' }}>
                    <h4>*Committed to student success, affordability, and career preparation.</h4>
                    <h4>*Offers Student services and support</h4>
                    <h4>*Supports Financial aid and scholarships</h4>
                    <h4>*A Complete College-Level Music Theory Curriculum.</h4>
                    <Button variant="outline-danger" className="border border-warning my-3">START FREE TRIAL</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default About;