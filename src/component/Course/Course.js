import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { image, title, description, by, price } = props.course;
    return (
        <div className="course-style">
            <Card className="card" style={{ height: '34rem', width: '23rem' }}>
                <img className="singer-image img-fluid" src={image} alt="" />
                <Card.Body>
                    <h5 style={{ color: "crimson" }}><small>{title}</small></h5>
                    <h6 style={{ color: "chocolate" }}><small>{description}</small></h6>
                    <p style={{ color: "brown" }}>{by}</p>
                    <h6 style={{ color: "chocolate" }}>{price}</h6>
                    <Button style={{ backgroundColor: "goldenrod", color: "white", border: "none" }}>Best Seller</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;