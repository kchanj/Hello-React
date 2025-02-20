import React from 'react';

class ExampleLifecycle extends React.Component {

    //생성 과정: constructor -> getDerivedStateFromProps -> render -> componentDidMount
    //변경 과정: getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
    //강제 변경: getDerivedStateFromProps ->                          render -> getSnapshotBeforeUpdate -> componentDidUpdate
    //소멸 과정: componentWillUnmount

    constructor(props) {
        super(props);

        this.state = {number: 0};

        this.count = this.count.bind(this);
        this.ignore = this.ignore.bind(this);
        this.force = this.force.bind(this);

        console.log(`[ExampleLifecycle] constructor: state=${this.state.number}`);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`[ExampleLifecycle] getDerivedStateFromProps: state=${state.number}`);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[ExampleLifecycle] shouldComponentUpdate: state=${this.state.number}, nextState=${nextState.number}`);
        return true;
    }

    render() {
        console.log(`[ExampleLifecycle] render`);
        return (
            <div>
                <h4>Example Lifecycle</h4>
                <span>Number: {this.state.number}</span>
                <br/>
                <button onClick={this.count}>증가</button>
                <button onClick={this.ignore}>무시</button>
                <button onClick={this.force}>Force Update</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[ExampleLifecycle] getSnapshotBeforeUpdate: state=${this.state.number}, prevState=${prevState.number}`);
        return prevState;
    }

    componentDidMount() {
        console.log(`[ExampleLifecycle] componentDidMount`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`[ExampleLifecycle] componentDidUpdate`);
    }

    componentWillUnmount() {
        console.log(`[ExampleLifecycle] componentWillUnmount`);
    }

    count() {
        console.log(`[ExampleLifecycle] count ==============================`);
        this.setState(prev => ({number: prev.number + 1}));
    }

    ignore() {
        console.log(`[ExampleLifecycle] ignore ==============================`);
        this.setState(prev => ({number: prev.number}));
    }

    force() {
        console.log(`[ExampleLifecycle] force ==============================`);
        this.forceUpdate();
    }
}

export default ExampleLifecycle;