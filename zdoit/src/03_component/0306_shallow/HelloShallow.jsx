import React from 'react';
import ExampleShallow from './comps/ExampleShallow';
import ExamplePure from './comps/ExamplePure';

class HelloShallow extends React.Component {

    render() {
        return (
            <div>
                <h3>3-6 클래스 컴포넌트</h3>
                <ExampleShallow />
                <ExamplePure />
            </div>
        )
    } 
}

export default HelloShallow;