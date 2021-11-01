import React, { Component } from 'react';
import AboutSectionMenu from './../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import sanitizeHtml from 'sanitize-html';

import { people as data } from './../../data/people';
import Person from './../../Models/Person';

/**
 * Component for showing the Who Are page.
 * 
 * @component
 * @example
 * return (
 *   <WhoAre />
 * )
 */
class WhoAre extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            currentPersonId: undefined,
            hasError: false,
        };
        // this.onShowPerson = this.onShowPerson.bind(this);
    }

    componentDidMount() {
        const people = [];
        data.map(person => people.push(new Person(person.id, person.name, person.surname, person.shortbio, person.email, person.profilesrc)));
        let currentPersonId = undefined;
        if (people && people.length > 0) currentPersonId = people[0].id;
        this.setState({ people, currentPersonId });
    }

    static getDerivedStateFromError(error) {       
        return { hasError: true };  
    }

    onShowPerson = (personId) => {
        this.setState({ currentPersonId: personId });
    }

    render() {
        const { people, currentPersonId, hasError } = this.state;
        return (
            <>
                {hasError ? <h1>Something went wrong.</h1> : null}
                <div className="page">
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <Jumbotron className="page whoare">
                                    <h2>Who Are</h2>
                                    <p>This is the who are page</p>
                                    <hr />
                                    <p>
                                        Nunc vitae gravida sem. Mauris erat velit, dapibus sit amet mi et, scelerisque tristique lorem. Quisque bibendum ligula et augue rhoncus hendrerit. Sed pharetra ligula quis leo accumsan eleifend. Pellentesque iaculis iaculis odio lobortis fermentum. Integer nec tincidunt odio, ornare aliquet eros. Nam vestibulum suscipit mauris, a consequat augue bibendum eu. Aenean viverra efficitur neque, sagittis mollis neque imperdiet vitae. Ut consectetur tristique risus, ut sodales nisi feugiat vel. Quisque tincidunt convallis consequat. Fusce malesuada sem et tortor fringilla lacinia. Nam elementum ligula vel luctus consectetur. Suspendisse sit amet egestas purus, vitae tristique dui. Sed convallis metus ac finibus sagittis. In nulla neque, facilisis in ex nec, pulvinar lobortis augue. 
                                    </p>
                                    {people && people.length > 0 ?
                                        <ListGroup>
                                        {people.map((person, index) =>
                                            <ListGroup.Item key={index} action onClick={() => this.onShowPerson(person.id)}>
                                            {person.name} {person.surname} <Badge variant="secondary">show details</Badge>
                                            </ListGroup.Item>)}
                                            </ListGroup> : null}
                                </Jumbotron>
                            </Col>
                            <Col sm={4}>
                                {people && people.length > 0 ?
                                    people.map(person => (person.id === currentPersonId) ?
                                        person.toDisplay() : null) 
                                    : null}
                            </Col>
                        </Row>
                    </Container>
                    <AboutSectionMenu />
                </div>
            </>
        );
    }
}

export default WhoAre;