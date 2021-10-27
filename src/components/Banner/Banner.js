import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Banner.css'
const Banner = () => {
    return (
        <Container fluid className="banner">
            <NavBar></NavBar>

            <Row className="my-4">
                <h2 className="text-center my-3">I grow by helping people in need.</h2>
                <div className='input-box d-flex justify-content-center align-items-center my-3'>
                    <input type="text" />
                    <button className="btn-search">search</button>
                </div>
            </Row>
        </Container>
    );
};

export default Banner;