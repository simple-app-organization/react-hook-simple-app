import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';

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
const Home = () => {

    const [messages, setMessages] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            const _messages = [];
            data.map(message => _messages.push(new HomeMessage(message.id, message.title, message.text, message.imagesrc)));
            setMessages(_messages);
            setHasError(false);
        } catch {
            setHasError(true);
        }
    }, []);
    
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

export default Home;