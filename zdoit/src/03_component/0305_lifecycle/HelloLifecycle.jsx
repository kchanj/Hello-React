import React from 'react';
import ExampleLifecycle from './comps/ExampleLifecycle';
import ExampleCounter from './comps/ExampleCounter';

class HelloLifecycle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            destroyed: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prev => ({destroyed: !prev.destroyed}));
        console.log(`[ExampleLifecycle] toggle ==============================`);
    }

    render() {
        return (
            <div>
                <h3>3-5 컴포넌트의 생명주기</h3>
                { this.state.destroyed || <ExampleLifecycle /> }
                <br/>
                <button onClick={this.toggle}>ExampleLifecycle 생성/소멸</button>

                <ExampleCounter />
            </div>
        )
    } 
}

export default HelloLifecycle;