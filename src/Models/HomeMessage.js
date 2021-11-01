import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sanitizeHtml from 'sanitize-html';

/**
 * HomeMessage Model definition
 * @class HomeMessage
 * @property {number} id
 * @property {string} title
 * @property {string} text
 * @property {string} imagesrc
 */
class HomeMessage {

    /**
     * @constructor
     * @param {*} id 
     * @param {*} title 
     * @param {*} text 
     * @param {*} imagesrc 
     */
    constructor(id, title, text, imagesrc) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.imagesrc = imagesrc;
    }

    /**
     * Display of a HomeMessage class model
     * @example
     * return (
     *  <Carousel.Item key={id}>
     *      <img 
     *          className="d-block w-100" 
     *          src={imagesrc} 
     *          alt={title} />
     *      <Carousel.Caption> 
     *          <h3>{title}</h3> 
     *          {text} 
     *      </Carousel.Caption>
     *  </Carousel.Item>
     * )
     */
    toDisplay = () => (
        <Carousel.Item key={this.id}>
            <img
                className="d-block w-100"
                src={this.imagesrc}
                alt={this.title}
            />
            <Carousel.Caption>
                <h3>{this.title}</h3>
                {sanitizeHtml(this.text, { allowedTags: ['a', 'p'] })}
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default HomeMessage;