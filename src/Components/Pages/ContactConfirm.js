import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const ContactConfirm = () => {
    const location = useLocation().search;
    const params = queryString.parse(location.search)

    return (
        <>
            <div className="page">
                <Jumbotron className="page content-confirm">
                    <h2>Thanks for your contact</h2>
                    <p>
                        Kind <i>{params.name} {params.surname}</i>, we have received your message.
                        <br />
                        We reply soon.
                    </p>
                </Jumbotron>
            </div>
        </>
    );
}

/**
 * Component for thanking user to contact
 * 
 * @component
 * @example
 * return (
 *   <ContactConfirm />
 * )
 */

export default ContactConfirm;