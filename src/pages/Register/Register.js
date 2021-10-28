import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams, useLocation,useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import logo from './../../images/logos/logo.png'
import './Register.css'
const Register = () => {
    const {user} = useAuth()
    const [activity, setActivity] = useState({});
    const {Id} = useParams()
    const fullNameRef = useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const descriptionRef = useRef();
    const activityTitleRef = useRef();
    console.log(activity)
    // use location state 
    const location = useLocation();
    const history = useHistory();
    // set redirect url
    const redirect_uri = '/my-events';

    useEffect(()=> {
        const uri = `https://shielded-depths-97846.herokuapp.com/add-activities/${Id}`;
        console.log(uri)
        fetch(uri)
        .then(res => res.json())
        .then(data => setActivity(data));
}, [Id]);


   const handleActivityData = (e) => {
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const date = dateRef.current.value;
        const description = descriptionRef.current.value;
        const activity = activityTitleRef.current.value;
        const activityImage = activity.img;

        const newActivity = {fullName: fullName, email: email, date: date, description: description, activityImage: activityImage, activity }
    fetch(`https://shielded-depths-97846.herokuapp.com/add-activities/${Id}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newActivity)
    })
    .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added the user.')
                e.target.reset();
                history.push(redirect_uri)
            }
        })
    e.preventDefault();
    console.log(newActivity)
   }

    return (
        <Container fluid className="login-page">
            <Row>
                <Col className="d-flex justify-content-center align-items-center mt-4">
                    <img className="logo img-fluid" src={logo} alt="" />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-items-center my-5">
                    <div>
                        <form onSubmit={handleActivityData} className="d-flex flex-column register-input">
                            <h3>Register as a Volunteer</h3>

                            <input type="text" ref={fullNameRef}  placeholder="Full Name" />
                            <input type="text" ref={emailRef}  placeholder="Email" value={user.email} />
                            <input type="text" ref={dateRef}  placeholder="Date" />
                            <input type="text" ref={descriptionRef}  placeholder="Description" />
                            <input type="text" ref={activityTitleRef}  placeholder="Activities" value={activity.title}/>
                            <button type="submit" className='btn btn-primary my-3'>Register</button>
                        </form>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;