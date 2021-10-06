import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import image from '../../img/group.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./programms.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="mx-3 my-5">
            <div className="row mx-4">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-md-6 ">
                    <h1 style={{ color: 'chocolate' }}>MusicSoul College Of Music</h1>
                    <h2 style={{ color: 'brown' }}>At the world’s preeminent college for <br /> the study of music, students can <br /> experience all aspects of the music br
                        industry through an interdisciplinary curriculum.</h2>
                    <h6 className="text-secondary">SHORTCUTS</h6>
                    <Link className="text-danger">Financial aid and scholarships</Link>
                    <br />
                    <Link className="text-danger">Auditions</Link>
                </div>
            </div>

            <h2 className="mx-4 mt-4" style={{ color: "brown" }}>Courses to get you started</h2>
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}>
                    </Course>)
                }
            </div>
        </div>
    );
};

export default Home;