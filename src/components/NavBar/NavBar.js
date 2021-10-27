import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
                <Navbar.Brand> <Link to="/home" className="logo-text">MS Child Care</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu-item" to="/home">Home</NavLink>
                    <NavLink className="menu-item" to="/services">Donation</NavLink>
                    <NavLink className="menu-item" to="/doctors">Events</NavLink>
                    <NavLink className="menu-item" to="/news">Blogs</NavLink>
                    <NavLink className="menu-item" to="/about">Register</NavLink>
                    <NavLink className="menu-item" to="/about">Admin</NavLink>

                </Nav>

               
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;