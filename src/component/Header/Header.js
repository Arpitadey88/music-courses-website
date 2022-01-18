import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="row  mx-5">
                <Navbar>
                    <div className="col-md-2">
                        <Navbar><img alt="" src={logo} width="55" height="40"
                            className="d-inline-block"
                        /> <h4 className="nav-items logo pt-1"><span>MusicSoul</span></h4>
                        </Navbar>
                    </div>
                    <div className="d-flex col-md-10 ms-2">
                        <div className="col-md-4">
                            <Nav className="my-2 my-lg-0">
                                <NavLink className="list-name" to="/home"><h4 className="nav-items">Home</h4></NavLink>

                                <NavLink className="list-name" to="/about"><h4 className="nav-items">About</h4></NavLink>

                                <NavLink className="list-name" to="/services"><h4 className="nav-items">Service</h4></NavLink>

                                <NavLink className="list-name" to="/community"><h4 className="nav-items">Community</h4></NavLink>
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