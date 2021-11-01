import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the error page.
 * 
 * @component
 * @example
 * return (
 *   <Error />
 * )
 */
class Error extends Component {
    render() {
        return (
            <div className="page">
                <Jumbotron className="page error">
                    <h2>Error Page</h2>
                    <p>Sorry, there are some errors...</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Error;