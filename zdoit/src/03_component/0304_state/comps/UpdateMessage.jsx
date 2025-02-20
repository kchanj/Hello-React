import React, { Component } from 'react'

class UpdateMessage extends Component {

    constructor(props) {
        super(props);

        this.loading = true;
        this.message = 'no data';

        this.handleMessage = this.handleMessage.bind(this);
    }

    handleMessage() {
        this.loading = !this.loading;
        this.message = 'new data, '+ this.message;
        this.forceUpdate();

        console.log(`[UpdateMessage] loading: `+ this.loading);
    }

    render() {
        return (
            <div>
                <h4>Force Update Message</h4>
                <span>로딩중: {String(this.loading)}</span>
                <br/>
                <span>메시지: {this.message}</span>
                <br/>
                <button onClick={this.handleMessage}>로딩왼료</button>
            </div>
        )
    }
}

export default UpdateMessage;