import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../img/kidsmusic.jpg';
import './Home.css'

const Home = () => {
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
                    {/* <Button variant="outline-danger" className="">START FREE TRIAL</Button> */}
                </Card.ImgOverlay>

            </Card>
        </div>
    );
};

export default Home;