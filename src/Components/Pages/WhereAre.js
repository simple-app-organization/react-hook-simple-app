import React, { Component } from 'react';
import AboutSectionMenu from './../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import sanitizeHtml from 'sanitize-html';

import { places as data } from './../../data/places';
import Place from './../../Models/Place';

/**
 * Component for showing the Where Are page.
 * 
 * @component
 * @example
 * return (
 *   <WhereAre />
 * )
 */
class WhereAre extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            currentPlaceId: undefined,
            hasError: false,
        };
    }

    componentDidMount() {
        const places = [];
        data.map(place => places.push(new Place(place.id, place.title, place.address, place.country, place.phone, place.description)));
        this.setState({ places });
    }

    static getDerivedStateFromError(error) {       
        return { hasError: true };  
    }

    onShowPlace = (placeId) => {
        this.setState({ currentPlaceId: placeId });
    }

    render() {
        const { places, currentPlaceId, hasError } = this.state;
        return (
            <>
                {hasError ? <h1>Something went wrong.</h1> : null}
                <div className="page">
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <Jumbotron className="page whereare">
                                    <h2>Where Are</h2>
                                    <p>This is the where are page</p>
                                    <hr />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut est non mauris iaculis vulputate. Vivamus luctus sapien et nisl mattis consequat. Vestibulum nec varius sem. Curabitur aliquet sapien in diam efficitur euismod. Fusce molestie nibh vel suscipit eleifend. Suspendisse dignissim et lectus at tempus. Nam feugiat lorem ut pharetra porta. Duis hendrerit hendrerit metus, vel laoreet libero commodo sed. Curabitur nunc eros, venenatis et diam a, hendrerit volutpat neque. Aliquam tempus cursus efficitur. Proin consequat fringilla massa, vitae imperdiet nibh feugiat at. Nulla malesuada vestibulum dolor et euismod. Donec eu urna urna.
                                    </p>
                                    <p>
                                        Sed imperdiet nunc eget ante aliquam auctor. Aliquam rhoncus quam sed sodales imperdiet. Aliquam erat volutpat. Sed mattis luctus pretium. Suspendisse tempor, nunc quis consectetur aliquam, metus orci porttitor augue, nec malesuada ipsum mauris eget tortor. Donec ut eleifend lorem. Quisque sagittis fermentum suscipit. Sed quis efficitur ex.
                                    </p>
                                    {places && places.length > 0 ?
                                        <ListGroup variant="flush">
                                            {places.map((place, index) =><ListGroup.Item key={index}>{place.title} <Badge variant="info">{place.country}</Badge></ListGroup.Item>)}
                                        </ListGroup> : null}
                                </Jumbotron>
                            </Col>
                            <Col sm={4}>
                                {places && places.length > 0 ?
                                    <Accordion defaultActiveKey="0">
                                        {places.map((place, index) => place.toDisplay(index))}
                                    </Accordion> : null}
                            </Col>
                        </Row>
                    </Container>
                    <AboutSectionMenu />
                </div>
            </>
        );
    }
}

export default WhereAre;