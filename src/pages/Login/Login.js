/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

import logo from './../../images/logos/logo.png'
import './Login.css'
const login = () => {

    const { handleGoogleSignIn, setIsLoading } = useAuth()
    const [user, setUser] = useState()
    const [error, setError] = useState()
    // use location state 
    const location = useLocation();
    const history = useHistory();
    // set redirect url
    const redirect_uri = location.state?.from || '/home';
    // google sign in functionality
    const googleLogin = (e) => {
        e.preventDefault();
        handleGoogleSignIn()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri)
              })
              .catch(error => {
                setError(error.message);
              })
              .finally(() => setIsLoading(false));
    }
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
                        <input type="text" onClick={googleLogin} className="btn btn-primary my-4" value="continue with google" />
                        <p>Don't have an account? <Link to='/'>Create a new account</Link> </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default login;