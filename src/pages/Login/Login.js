import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../images/logos/logo.png'
import './Login.css'
const login = () => {
    return (
        <Container fluid className="login-page">
            <Row>
                <Col className="d-flex justify-content-center align-items-center my-5">
                    <img className="logo img-fluid" src={logo} alt="" />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center my-5">
                    <div className="text-center login-form d-flex flex-column justify-content-center align-items-center">
                        <h3>Login With</h3>
                        <input type="text" className="btn btn-primary my-4" value="continue with google" />
                        <p>Don't have an account? <Link to='/'>Create a new account</Link> </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default login;