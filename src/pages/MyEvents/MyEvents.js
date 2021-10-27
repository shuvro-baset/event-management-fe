import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import './MyEvents.css'
const MyEvents = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container>
                <Row className="my-4">
                    <Col md={6}>
                        <div className="d-flex activities-item bg-white shadow rounded p-2">
                            <div className="event-img p-2">
                                <img className="img-fluid rounded" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                            </div>
                            <div className="event-text p-2 d-flex flex-column justify-content-between w-75">
                                <div>
                                    <h4>Event Title</h4>
                                    <h6>Event Date</h6>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex activities-item bg-light shadow rounded p-2">
                            <div className="event-img p-2">
                                <img className="img-fluid rounded" src="https://i.ibb.co/L6X60hy/animal-Shelter.png" alt="" />
                            </div>
                            <div className="event-text p-2 d-flex flex-column justify-content-between w-75">
                                <div>
                                    <h4>Event Title</h4>
                                    <h6>Event Date</h6>
                                </div>
                                <div className="d-flex justify-content-end">
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