import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image from '../../img/kidsmusic.jpg';
import './Service.css'

const Service = () => {
    return (
        <div className="mx-5 my-5">
            {/* <h3>This is home</h3> */}
            <Card>
                <Card.Img className="banner-img" src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <h2 className="banner-header">Inspiring Music Education For Over 20 Years</h2>
                    <h5 className="banner-text">
                        A world-leading music teaching and learning platform used in 62 countries
                        A vast library of resources, songs, instrumental courses and creative apps
                        Quality-assured training, support for blended and home learning, assessment,
                        special needs education, and more
                        Start Free Trial.
                    </h5>
                </Card.ImgOverlay>

                <Card>
                    <h2 style={{ color: 'brown' }}>Featured</h2>
                    <Card.Body style={{ backgroundColor: 'khaki', color: 'chocolate' }}>
                        <h4>*Committed to student success, affordability, and career preparation.</h4>
                        <h4>*Offers Student services and support</h4>
                        <h4>*Supports Financial aid and scholarships</h4>
                        <h4>*A Complete College-Level Music Theory Curriculum.</h4>
                        <Button variant="outline-danger" className="border border-success my-3">START FREE TRIAL</Button>
                    </Card.Body>
                </Card>
            </Card>
        </div>
    );
};

export default Service;