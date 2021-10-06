import React from 'react';
import image from '../../img/music.jpg';

const Community = () => {
    return (
        <div className="mx-5 my-3">
            <h5 className="py-2">A PREMIER EDUCATION. A COMMUNITY THAT CARES.</h5>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" />
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