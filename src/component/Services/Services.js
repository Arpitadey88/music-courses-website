import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./programms.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="mx-3 my-5">
            <h2 className="mx-4" style={{ color: "brown" }}>Courses to get you started</h2>
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

export default Services;