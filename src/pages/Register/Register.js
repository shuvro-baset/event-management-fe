import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import logo from './../../images/logos/logo.png'
import './Register.css'
const Register = () => {
    const {user} = useAuth()
    return (
        <Container fluid className="login-page">
            <Row>
                <Col className="d-flex justify-content-center align-items-center mt-4">
                    <img className="logo img-fluid" src={logo} alt="" />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center my-5">
                    <div className="d-flex flex-column register-input">
                        <h3>Register as a Volunteer</h3>
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Date" />
                        <input type="text" placeholder="Description" />
                        <input type="text" placeholder="Activities" />
                        <button className='btn btn-primary my-3'>Register</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;