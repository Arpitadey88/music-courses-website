import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-black text-white mx-5 my-3 p-3">
            <div className="text-center">
                <h4>online.MusicSoul.edu</h4>
                <h4>1-866-MusicSoul | admissions@online.MusicSoul.edu</h4>
                <h6><small>MusicSoul Online is accredited by the Baangladesh Commission of Higher Education.</small></h6>
                <p><small>Copyight © <i>MusicSoul</i> College of Music</small></p>
                <div>
                    <span><i className="fab fa-facebook ps-5 fs-2"></i></span>
                    <span><i className="fab fa-youtube ps-3 fs-2"></i></span>
                    <span><i className="fab fa-google ps-3 fs-2"></i></span>
                    <span><i className="fab fa-twitter ps-3 fs-2"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
