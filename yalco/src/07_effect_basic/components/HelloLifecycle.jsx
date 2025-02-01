import { Component, useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const HelloLifecycle = () => {

    const comps = ['None', 'ClassComp', 'FuncComp'];
    const [current, setCurrent] = useState('None');

    return (
        <div className={styles.card}>
            <h2>Hello Lifecycle</h2>
            {comps.map((comp) => (
                    <label key={comp}>
                        <input type="radio"
                               value={comp}
                               checked={current === comp}
                               onChange={(e) => setCurrent(e.target.value)} />
                        {comp}
                    </label>
                )
            )}
            <hr/>
            {current === 'None'
                ? 'None'
                : (current === 'ClassComp'
                        ? <ClassComp/>
                        : <FuncComp/>) }
        </div>
    )
}

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('1.ClassComp Mounted');
    }
    componentDidUpdate() {
        console.log('2.ClassComp Updated');
    }
    componentWillUnmount() {
        console.log('3.ClassComp Unmounted');
    }

    handleClick = () => {
        this.setState(prev => ({count: prev.count + 1}));
    }

    render() {
        console.log('---------- ClassComp Rendering ----------')
        return (
            <div>
                <h3>Class Component</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>++</button>
            </div>
        )
    }
}

const FuncComp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('1.FuncComp Mounted');
        return () => {
            console.log('3.FuncComp Unmounted');
        }
    }, []);

    useEffect(() => {
        console.log('2.FuncComp Mounted / Updated');
    }, [count]);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    
    console.log('---------- FuncComp Rendering ----------');

    return (
        <div>
            <h3>Function Component</h3>
            <p>Count: {count}</p>
            <button onClick={handleClick}>++</button>
        </div>
    )
}

export { HelloLifecycle }