import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import './Home.css'
const Home = () => {
    return (
        <>
         <Banner></Banner>
         <Container>
             <Row className="activities-div">
                <Col md={3}>
                    <div className="p-2 my-3">
                        <img className="img-fluid" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                        <button className="btn w-100">activities</button>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-2 my-3">
                        <img className="img-fluid" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                        <button className="btn w-100">activities</button>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-2 my-3">
                        <img className="img-fluid" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                        <button className="btn w-100">activities</button>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="p-2 my-3">
                        <img className="img-fluid" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                        <button className="btn w-100">activities</button>
                    </div>
                </Col>
             </Row>
         </Container>   
        </>
    );
};

export default Home;