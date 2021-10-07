import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/kidsmusic.jpg';
import imageN from '../../img/music.jpg';


const Community = () => {
    return (
        <div className="mx-5 my-3">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-md-6 ">
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

            <h3 className="pt-5" style={{ color: 'crimson' }}>A PREMIER EDUCATION. A COMMUNITY THAT CARES.</h3>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={imageN} alt="" />
                </div>
                <div className="col-md-6">
                    <h6>A MusicSoul EDUCATION</h6>
                    <h5>MusicSoul City Music</h5>
                    <p><small>MusicSoul’s nonprofit education outreach program provides contemporary music training for students in underserved communities across North America.</small></p>
                    <h5>MusicSoul Global</h5>
                    <p><small>Our network of partners around the world provide access to a range of MusicSoul opportunities, from events and workshops to transfer credits.</small></p>

                    <h5>Learn</h5>
                    <p><small>MusicSoul offers degree programs at our campuses in Boston, New York City, and Valencia, Spain, and through MusicSoul Online, all taught by our expert faculty.</small></p>

                    <h5>Create</h5>
                    <p><small>We believe in the power of arts education to express our shared humanity, connect across differences, and create positive change in the world.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Community;