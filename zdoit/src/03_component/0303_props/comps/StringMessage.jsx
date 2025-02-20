import React from 'react';
import PropType from 'prop-types'

class StringMessage extends React.Component {
    render() {

        const message = this.props.message;

        return (
            <div className="message-container">
                <h4>String Message</h4>
                <span>{message}</span>
            </div>
        )
    }
}

StringMessage.propTypes = {
    message: PropType.string
}

export default StringMessage;