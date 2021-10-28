import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import './Home.css'
const Home = () => {
    const [activities, setActivities] = useState([])


    useEffect(() => {
        fetch('https://shielded-depths-97846.herokuapp.com/home')
            .then(res => res.json())
            .then(data => setActivities(data))
    })
    return (
        <>
         <Banner></Banner>
         <Container>
             <Row className="activities-div">
                {

                    activities.map(activity =>
                        <Col md={3} key={activity._id}>
                            <div className="p-2 my-3">
                                <img className="img-fluid" src={activity.img} alt="" />
                                <Link to={`/add-activities/${activity._id}`}><button className="btn w-100">{activity.title}</button></Link>
                            </div>
                        </Col> 
                )
                
                }
             </Row>
         </Container>   
        </>
    );
};

export default Home;