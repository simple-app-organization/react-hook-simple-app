import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/**
 * Place Model definition
 * @class Place
 * @property {number} id
 * @property {string} title
 * @property {string} address
 * @property {string} country
 * @property {string} phone
 * @property {string} description
 */
class Place {

    /**
     * @constructor
     * @param {*} id 
     * @param {*} title 
     * @param {*} address 
     * @param {*} country 
     * @param {*} phone 
     * @param {*} description 
     */
    constructor(id, title, address, country, phone, description) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.country = country;
        this.phone = phone;
        this.description = description;
    }

    /**
     * Display of a Place class model
     * @example
     * return (
     *  <div key={id} className="place">
     *      <h3 className="pl_title">{title}</h3>
     *      <p className="pl_description">{description}</p>
     *      <dl>
     *          <dt>Phone</dt><dd>{phone}</dd>
     *          <dt>Address</dt><dd>{address}</dd>
     *          <dt>Country</dt><dd>{country}</dd>
     *      </dl>
     *  </div>
     * )
     */
    toDisplay = (index) => (
        <Card key={index} className="place">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                <h4 className="pl_title">{this.title}</h4>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              <p className="pl_description">{this.description}</p>
              <dl>
                  <dt>Phone</dt><dd>{this.phone}</dd>
                  <dt>Address</dt><dd>{this.address}</dd>
                  <dt>Country</dt><dd>{this.country}</dd>
              </dl>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
}

export default Place;