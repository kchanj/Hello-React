import React, { Component } from 'react'

class LoadingMessage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            message: 'no data'
        }

        this.handleMessage = this.handleMessage.bind(this);
    }

    handleMessage() {
        const {loading, message} = this.state;

        this.setState({
            loading: !loading,
            message: 'new data, ' + message
        });

        console.log(`[LoadingMessage] loading: `+ this.state.loading);
    }

    render() {
        return (
            <div>
                <h4>Loading Message</h4>
                <span>로딩중: {String(this.state.loading)}</span>
                <br/>
                <span>메시지: {this.state.message}</span>
                <br/>
                <button onClick={this.handleMessage}>로딩왼료</button>
            </div>
        )
    }
}

export default LoadingMessage;