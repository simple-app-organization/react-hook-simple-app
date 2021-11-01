import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import _ from 'lodash';

import FormValidateMessage from './../Utils/FormValidateMessage';

/**
 * Component for showing the Contact Us page.
 * 
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */
const Contact = () => {

    const [firstName, setFirstName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [privacy, setPrivacy] = useState(undefined);
    const [hasError, ] = useState(false);
    const [errorsData, setErrorsData] = useState([]);

    const [validatedData, setValidatedData] = useState(undefined);

    useEffect(() => {
        setInitialDataErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setInitialDataErrors = () => {
        const _errorsData = [];
        const message = "Field is required";
        _errorsData.push({ "field": "firstName", "message": message });
        _errorsData.push({ "field": "lastName", "message": message });
        _errorsData.push({ "field": "email", "message": "Field is empty or invalid" });
        _errorsData.push({ "field": "message", "message": message });
        _errorsData.push({ "field": "privacy", "message": message });
        setErrorsData(errorsData);
    }

    const setInvalidField = (fieldName, message = "Field is empty or invalid") => {
        const _errorsData = errorsData;
        _errorsData.push({ "field": fieldName, "message": message });
        setErrorsData(_errorsData);
    }

    const setValidField = (fieldName) => {
        const _errorsData = _.remove(errorsData, (item) => item.field === fieldName);
        setErrorsData(_errorsData);
    }

    const getErrorField = (fieldName) => {
        const _errorsData = errorsData.find(element => element.field === fieldName);
        return _errorsData;
    }

    const validateData = (fieldName, value) => {
        const element = errorsData.find(element => element.field === fieldName);
        switch(fieldName) {
            case 'email':
                const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if (!isValid) {
                    if (element === undefined) {
                        setInvalidField(fieldName, "Email is invalid");
                    }
                } else {
                    setValidField(fieldName);
                }
                break;
            case 'privacy':
                if (!value) {
                    if (element === undefined) {
                        setInvalidField(fieldName, "You have to check privacy policy");
                    }
                } else {
                    setValidField(fieldName);
                }
                break;
            default:
                if (!value || value === '') {
                    if (element === undefined) {
                        setInvalidField(fieldName);
                    }
                } else {
                    setValidField(fieldName);
                }
                break;
        }
    }

    const handleChange = (evt) => {
        const name = evt.target.name || evt.target.id;
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        validateData(name, value);

        switch(name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            case 'privacy':
                setPrivacy(value);
                break;
            default:
                break;
        }
    }

    // const onSendMessage = (evt) => {
    //     if (!(errorsData || errorsData.length > 0)) {
    //         window.location.assign(`/contact/confirm?name=${firstName}&surname=${lastName}`);
    //     }
    // }

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            window.location.assign(`/contact/confirm?name=${firstName}&surname=${lastName}`);
        }
    };

    useEffect(() => {
        const _validatedData = !(!errorsData || (errorsData && errorsData.length > 0));
        setValidatedData(_validatedData);
    }, [errorsData]);
    
    return (
        <>
            {/* {validatedData ? <Badge variant="success">Dati OK</Badge> : <Badge variant="danger">Dati NON</Badge> } */}
            {hasError ? <h1><Badge variant="danger">Something went wrong.</Badge></h1> : null}
            <div className="page">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2>Contact page</h2>
                            <p>This is the contact page</p>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Form noValidate validated={validatedData} >
                                <Row>
                                    <Col>
                                        <Form.Group controlId="firstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control required placeholder="First name" onChange={handleChange} />
                                            {errorsData && getErrorField("firstName") ?
                                                <FormValidateMessage errormessage={getErrorField("firstName").message} /> 
                                                    : null }
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="lastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control required placeholder="Last name" onChange={handleChange} />
                                            {errorsData && getErrorField("lastName") ?
                                                <FormValidateMessage errormessage={getErrorField("lastName").message} /> 
                                                    : null }
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control required type="email" placeholder="Enter your email" onChange={handleChange} />
                                            {errorsData && getErrorField("email") ?
                                                <FormValidateMessage errormessage={getErrorField("email").message} /> 
                                                    : null } 
                                                {!errorsData && !getErrorField("email") ?
                                                    <Form.Text className="text-muted">
                                                        We can use this email for reply to you
                                                    </Form.Text> : null }
                                        </Form.Group>

                                        <Form.Group controlId="message">
                                            <Form.Label>Say something to us</Form.Label>
                                            <Form.Control required as="textarea" rows="3" onChange={handleChange} />
                                            {errorsData && getErrorField("message") ?
                                                <FormValidateMessage errormessage={getErrorField("message").message} /> 
                                                    : null }
                                        </Form.Group>

                                        <Form.Group controlId="privacy">
                                            <Form.Check required type="checkbox" label="Accept your privacy condition" onChange={handleChange} />
                                            {errorsData && getErrorField("privacy") ?
                                                <FormValidateMessage errormessage={getErrorField("privacy").message} /> 
                                                    : null }
                                        </Form.Group>
                                        {/* {validatedData ? <Badge variant="success">All data is correct!</Badge> : null} */}
                                        <Button disabled={!validatedData} variant="primary" type="button" onClick={(e) => handleSubmit(e)}>
                                            Send message
                                        </Button><br />
                                        {errorsData && errorsData.length > 0 ? <Badge variant="danger">You have errors in form</Badge> : null}
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <Jumbotron className="contact">
                                <div>
                                    <p>
                                        This form do not send any emails, this is only for a test purpose.
                                    </p>
                                    <h4>Show the data you would send</h4>
                                    <dl>
                                        <dt>First name</dt>
                                        <dd>{firstName}</dd>
                                        <dt>Last name</dt>
                                        <dd>{lastName}</dd>
                                        <dt>Email</dt>
                                        <dd>{email}</dd>
                                        <dt>Message</dt>
                                        <dd><p>{message}</p></dd>
                                        <dt>Privacy</dt>
                                        <dd>{privacy ? "yes" : "no"}</dd>
                                    </dl>
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Contact;