import { number } from 'prop-types';
import React from 'react';

class ExampleCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {number: 0}
        this.count = this.count.bind(this);
    }

    count() {
        this.setState(prev => ({number: prev.number + 1}));
    }

    render() {
        console.log(`[ExampleCounter] render`);
        return (
            <div>
                <h4>Example Counter</h4>
                <span>ExampleCounter: {this.state.number}</span>
                <br/>
                <button onClick={this.count}>Count</button>
                <br/>
                <Counter1 number={this.state.number}/>
                <Counter2 number={this.state.number} />
            </div>
        )
    } 
}

class Counter1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {number: props.number};
        this.count = this.count.bind(this);
    }

    count() {
        this.setState(prev => ({number: prev.number + 1}));
    }

    render() {
        console.log(`[Counter1] render`);
        return (
            <div>
                <span>Counter1: {this.state.number}</span>
                <br/>
                <button onClick={this.count}>Count</button>
            </div>
        )
    }
}

class Counter2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {number: props.number, propbak: props.number};
        this.count = this.count.bind(this);
    }

    count() {
        this.setState(prev => ({...prev, number: prev.number + 1}));
    }

    render() {
        console.log(`[Counter2] render`);
        return (
            <div>
                <span>Counter2: {this.state.number}</span>
                <br/>
                <button onClick={this.count}>Count</button>
            </div>
        )
    }

    static getDerivedStateFromProps(props, state) {
        //console.log(`props: ${props.number}, state: ${Object.entries(state)}`);

        const number = props.number === state.propbak ? state.number : props.number;
        const propbak = props.number;
        return {
            number,
            propbak
        };
    }
}

export default ExampleCounter; 