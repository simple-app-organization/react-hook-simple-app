import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import sanitizeHtml from 'sanitize-html';

import { home_messages as data } from './../../data/home_messages';
import HomeMessage from './../../Models/HomeMessage';

/**
 * Component for showing the Home page. 
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            hasError: false,
        };
    }        

    componentDidMount() {
        const messages = [];
        data.map(message => messages.push(new HomeMessage(message.id, message.title, message.text, message.imagesrc)));
        this.setState({ messages });
    }

    static getDerivedStateFromError(error) {       
        return { hasError: true };  
    }    

    render() {
        const { messages, hasError } = this.state;
        return (
            <>
                {hasError ? <h1>Something went wrong.</h1> : null}
                <div className="page">
                    <Jumbotron className="page home">
                        <h2>Home page</h2>
                        <p>This is the home page</p>
                        <hr />
                        {messages && messages.length > 0 ?
                            <Carousel>
                                {messages.map(message => message.toDisplay())}
                            </Carousel>
                            : null }
                    </Jumbotron>
                </div>
            </>
        );
    }
}

export default Home;