import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

/**
 * Functional Component for showing the errormessage of the field.
 * @component
 * @param {string} errormessage Error message of the field
 * @example
 * const message = 'This field is invalid'
 * return (
 *   <FormValidateMessage errormessage={message} />
 * )
 */
const FormValidateMessage = ({ errormessage }) => {
    return (
        <Form.Text className="text-muted">
            <Badge variant="danger">{errormessage}</Badge>
        </Form.Text>
    );
}

FormValidateMessage.propTypes = {
    /**
     * Message to show near field
     */
    errormessage: PropTypes.string.isRequired,
}

FormValidateMessage.defaultProps = {
    errormessage: 'This field is invalid'
}

export default FormValidateMessage;