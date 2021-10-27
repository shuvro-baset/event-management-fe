import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import './MyEvents.css'
const MyEvents = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="d-flex">
                            <div className="event-img p-2">
                                <img className="img-fluid" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                            </div>
                            <div className="event-text p-2">
                                <div>
                                    <h4>Event Title</h4>
                                    <h6>Event Date</h6>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>   
        </>
    );
};

export default MyEvents;