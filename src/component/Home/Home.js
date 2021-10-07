import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import image from '../../img/kidsmusic.jpg';
import { Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./programms.JSON')
            .then(res => res.json())
            .then(data => setCourses(data.slice(3)));
    }, [])
    return (
        <div className="my-5">
            <Card className="mx-5">
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
            </Card>
            <section className="card-bg mx-5">
                <h1 className="mx-1 mt-5 text-center fw-bold" style={{ color: "crimson" }}>Services</h1>
                <h2 className="mx-1 mt-1" style={{ color: "brown" }}>Courses To Get You Started</h2>
                <div className="course-container mx-3">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}>
                        </Course>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;