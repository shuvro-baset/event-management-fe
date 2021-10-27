import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from './../../images/logos/logo.png';
const NavBar = () => {
    return (
        <Navbar sticky="top" className="navBar" expand="lg">
            <Container fluid>
                <Navbar.Brand> <Link to="/home" className="logo-text"><img className="img-fluid logo" src={logo} alt="" /></Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu-item" to="/home">Home</NavLink>
                    <NavLink className="menu-item" to="/my-events">My Events</NavLink>
                    <NavLink className="menu-item" to="/doctors">Add Events</NavLink>
                    <NavLink className="menu-item" to="/news">Blogs</NavLink>
                    <NavLink className="menu-item" to="/register">Register</NavLink>
                    <NavLink className="menu-item" to="/about">Admin</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;