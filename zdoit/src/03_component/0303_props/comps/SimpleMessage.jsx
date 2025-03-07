import React from 'react';

class SimpleMessage extends React.Component {
    render() {

        const message = this.props.message;

        return (
            <div className="message-container">
                <h4>Simple Message</h4>
                <span>{message}</span>
            </div>
        )
    }
}

export default SimpleMessage;