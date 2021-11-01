import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/**
 * Person Model definition
 * @class Person
 * @property {number} id
 * @property {string} name
 * @property {string} surname
 * @property {string} shortbio
 * @property {string} email
 * @property {string} profilesrc
 */
class Person {

    /**
     * @constructor
     * @param {*} id 
     * @param {*} name 
     * @param {*} surname 
     * @param {*} shortbio 
     * @param {*} email 
     * @param {*} profilesrc 
     */
    constructor(id, name, surname, shortbio, email, profilesrc) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.shortbio = shortbio;
        this.email = email;
        this.profilesrc = profilesrc;
    }

    /**
     * Display of a Person class model
     * @example
     *   <Card key={id} class="person" style={{ width: '18rem' }}>
     *       <Card.Img variant="top" src={profilesrc} />
     *       <Card.Body>
     *           <Card.Title class="p_completename">{name} {surname}</Card.Title>
     *           <Card.Text class="p_shortbio">
     *               {shortbio}
     *           </Card.Text>
     *           <Button variant="primary" class="p_email">{email}</Button>
     *       </Card.Body>
     *   </Card>
     * )
     */
    toDisplay = () => (
        <Card key={this.id} className="person" style={{ width: '18rem', margin: "20px" }}>
            <Card.Img variant="top" src={this.profilesrc} style={{ align: "center", padding: "20px", width: "200px", height: "200px"}} />
            <Card.Body>
                <Card.Title className="p_completename">{this.name} {this.surname}</Card.Title>
                <Card.Text className="p_shortbio">
                    {this.shortbio}
                </Card.Text>
                <Button variant="primary" className="p_email">{this.email}</Button>
            </Card.Body>
        </Card>
    );
}

export default Person;