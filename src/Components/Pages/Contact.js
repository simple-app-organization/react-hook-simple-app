import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import _ from 'lodash';
import sanitizeHtml from 'sanitize-html';

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
class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            message: undefined,
            privacy: false,
            hasError: false,
            errorsData: [],
        };
    }

    componentDidMount() {
        this.setInitialDataErrors();
    }

    static getDerivedStateFromError(error) {       
        return { hasError: true };  
    }

    setInitialDataErrors = () => {
        const errorsData = [];
        const message = "Field is required";
        errorsData.push({ "field": "firstName", "message": message });
        errorsData.push({ "field": "lastName", "message": message });
        errorsData.push({ "field": "email", "message": "Field is empty or invalid" });
        errorsData.push({ "field": "message", "message": message });
        errorsData.push({ "field": "privacy", "message": message });
        this.setState({ errorsData });
    }

    setInvalidField(fieldName, message = "Field is empty or invalid" ) {
        let { errorsData } = this.state;
        errorsData.push({ "field": fieldName, "message": message });
        this.setState({ errorsData });
    }

    setValidField(fieldName) {
        let { errorsData } = this.state;
        errorsData = _.remove(errorsData, (item) => item.field === fieldName);
        this.setState({ errorsData });
    }

    getErrorField = (fieldName) => {
        const { errorsData } = this.state;
        const element = errorsData.find(element => element.field === fieldName);
        return element;
    }

    validateData = (fieldName, value) => {
        const { errorsData } = this.state;
        const element = errorsData.find(element => element.field === fieldName);
        switch(fieldName) {
            case 'email':
                const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if (!isValid) {
                    if (element === undefined) {
                        this.setInvalidField(fieldName, "Email is invalid");
                    }
                } else {
                    this.setValidField(fieldName);
                }
                break;
            case 'privacy':
                if (!value) {
                    if (element === undefined) {
                        this.setInvalidField(fieldName, "You have to check privacy policy");
                    }
                } else {
                    this.setValidField(fieldName);
                }
                break;
            default:
                if (!value || value === '') {
                    if (element === undefined) {
                        this.setInvalidField(fieldName);
                    }
                } else {
                    this.setValidField(fieldName);
                }
                break;
        }
    }

    handleChange = (evt) => {
        const name = evt.target.name || evt.target.id;
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        this.validateData(name, value);
        this.setState({ ...this.state, [name]: value });
    }

    onSendMessage = (evt) => {
        const { errorsData, firstName, lastName } = this.state;
        if (!(errorsData || errorsData.length > 0)) {
            window.location.assign(`/contact/confirm?name=${firstName}&surname=${lastName}`);
        }
    }

    handleSubmit = event => {
        const { firstName, lastName } = this.state;
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            window.location.assign(`/contact/confirm?name=${firstName}&surname=${lastName}`);
        }
    };

    render() {
        const { firstName, lastName, email, message, privacy, hasError, errorsData } = this.state;
        const validatedData = !(!errorsData || (errorsData && errorsData.length > 0));
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
                                                <Form.Control required placeholder="First name" onChange={this.handleChange} />
                                                {errorsData && this.getErrorField("firstName") ?
                                                    <FormValidateMessage errormessage={this.getErrorField("firstName").message} /> 
                                                        : null }
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control required placeholder="Last name" onChange={this.handleChange} />
                                                {errorsData && this.getErrorField("lastName") ?
                                                    <FormValidateMessage errormessage={this.getErrorField("lastName").message} /> 
                                                        : null }
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="email">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control required type="email" placeholder="Enter your email" onChange={this.handleChange} />
                                                {errorsData && this.getErrorField("email") ?
                                                    <FormValidateMessage errormessage={this.getErrorField("email").message} /> 
                                                        : null } 
                                                    {!errorsData && !this.getErrorField("email") ?
                                                        <Form.Text className="text-muted">
                                                            We can use this email for reply to you
                                                        </Form.Text> : null }
                                            </Form.Group>

                                            <Form.Group controlId="message">
                                                <Form.Label>Say something to us</Form.Label>
                                                <Form.Control required as="textarea" rows="3" onChange={this.handleChange} />
                                                {errorsData && this.getErrorField("message") ?
                                                    <FormValidateMessage errormessage={this.getErrorField("message").message} /> 
                                                        : null }
                                            </Form.Group>

                                            <Form.Group controlId="privacy">
                                                <Form.Check required type="checkbox" label="Accept your privacy condition" onChange={this.handleChange} />
                                                {errorsData && this.getErrorField("privacy") ?
                                                    <FormValidateMessage errormessage={this.getErrorField("privacy").message} /> 
                                                        : null }
                                            </Form.Group>
                                            {/* {validatedData ? <Badge variant="success">All data is correct!</Badge> : null} */}
                                            <Button disabled={!validatedData} variant="primary" type="button" onClick={() => this.handleSubmit()}>
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
}

export default Contact;