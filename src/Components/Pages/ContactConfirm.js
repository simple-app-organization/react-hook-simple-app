import React, { Component } from 'react';
import PropTypes from "prop-types";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class ContactConfirmInner extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };

    render() {
        const { match, location, history } = this.props;
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
const ContactConfirm = withRouter(ContactConfirmInner);

export default ContactConfirm;