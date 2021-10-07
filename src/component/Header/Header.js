import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="row  mx-5">
                <Navbar>
                    <div className="col-md-2">
                        <Navbar><i className="fas fa-guitar icon"></i>
                            <h4 className="nav-items"><span><i>MusicSoul</i></span></h4>
                        </Navbar>
                    </div>
                    <div className=" d-flex col-md-10 ms-2">
                        <div className="col-md-4">
                            <Nav className="my-2 my-lg-0">
                                <NavLink className="list-name" to="/home"><h5 className="nav-items">Home</h5></NavLink>

                                <NavLink className="list-name" to="/about"><h5 className="nav-items">About</h5></NavLink>

                                <NavLink className="list-name" to="/services"><h5 className="nav-items">Service</h5></NavLink>

                                <NavLink className="list-name" to="/community"><h5 className="nav-items">Community</h5></NavLink>
                            </Nav>
                        </div>
                        <div className="col-md-6 search-field">
                            <Form className="d-flex border-0">
                                <FormControl type="search" placeholder="Search" aria-label="Search" />
                                <Button variant="outline-danger"><i class="fas fa-search nav-items fs-5 pe-2"></i></Button>
                            </Form>
                        </div>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;