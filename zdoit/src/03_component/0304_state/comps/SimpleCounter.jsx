import React, { Component } from 'react';

class SimpleCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }

        this.count = this.count.bind(this);
        this.reset = this.reset.bind(this);
    }

    count() {
        this.setState(prev => ({number: prev.number + 1}));

        console.log(`[SimpleCounter] number: `+ this.state.number);
    }

    reset() {
        this.setState({number: 0});

        console.log(`[SimpleCounter] number: `+ this.state.number);
    }

    render() {
        return (
            <div>
                <h4>Simple Counter</h4>
                <span>Number: {this.state.number}</span>
                <br/>
                <button onClick={this.count}>카운트</button>
                <button onClick={this.reset}>초기화</button>
            </div>
        )
    }
}

export default SimpleCounter;