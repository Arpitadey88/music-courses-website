import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/group.jpg';
import Course from '../Course/Course';
import './Service.css';

const Service = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./programms.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="my-5">
            <div className="row mx-4 service-banner px-1 py-4">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-md-6 ps-3">
                    <h1 style={{ color: 'chocolate' }}>MusicSoul College Of Music</h1>
                    <br />
                    <h3 style={{ color: 'brown' }}>At the world’s preeminent college for the <br /> study of music, students can experience <br /> all aspects of the music industry through <br />
                        an interdisciplinary curriculum.</h3>
                    <br />
                    <h5 className="text-secondary">SHORTCUTS</h5>
                    <Link className="text-danger">Financial aid and scholarships</Link>
                    <br />
                    <Link className="text-danger">Auditions</Link>
                </div>
            </div>

            <div className="my-4 service-banner mx-4">
                <h1 className=" ms-1" style={{ color: "brown" }}>Our Offered Courses</h1>
                <div className="course-container px-2">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}>
                        </Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;