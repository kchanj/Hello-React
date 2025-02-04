import { Component, useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const HelloLifecycle = () => {
    return (
        <>
            <h2>useEffect 기본: Lifecycle</h2>
            <LifecycleManager />
        </>
    )
}

const LifecycleManager = () => {

    const components = ['None', 'ClssComp', 'FuncComp', 'DepsComp'];
    const [component, setComponent] = useState('None');

    return (
        <div className={styles.card}>
            {components.map((comp) => (
                    <label key={comp}>
                        <input type="radio"
                               value={comp}
                               checked={component === comp}
                               onChange={(e) => setComponent(e.target.value)} />
                        {comp}
                    </label>
                )
            )}
            <hr/>
            {component === 'None'
                ? 'None'
                : (component === 'ClssComp'
                        ? <ClssComp/>
                        : component === 'FuncComp'
                            ? <FuncComp/>
                            : <DepsComp/>) }
        </div>
    )
}

class ClssComp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    componentDidMount() {
        console.log('[ClssComp] 1.Mounted');
    }
    componentDidUpdate() {
        console.log('[ClssComp] 2.Updated');
    }
    componentWillUnmount() {
        console.log('[ClssComp] 3.Unmounted');
    }

    handleClick = () => {
        this.setState(prev => ({count: prev.count + 1}));
    }

    render() {
        console.log('[ClssComp] 0.Rendered');
        return (
            <div>
                <h3>ClssComp: mounted, updateed, unmounted</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>++</button>
            </div>
        )
    }
}

const FuncComp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('[FuncComp] 1.Mounted');
        
        return () => {
            console.log('[FuncComp] 3.Unmounted');
        }
    }, []); //deps: satate, props

    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    console.log('[FuncComp] 0.Rendered');

    return (
        <div>
            <h3>FuncComp: mounted, unmounted</h3>
            <p>Count: {count}</p>
            <button onClick={handleClick}>++</button>
        </div>
    )
}

const DepsComp = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('[DepsComp] 1.Mounted / 2.Updated');
    }, [count1, count2]); //deps: satate, props

    const handleClick = (setter) => {
        setter(prev => prev + 1);
    }

    console.log('[DepsComp] 0.Rendered');

    return (
        <div>
            <h3>DepsComp: mounted, updated</h3>
            <p>Count1: {count1}</p>
            <button onClick={(e) => handleClick(setCount1)}>Count1 ++</button>
            <p>Count2: {count2}</p>
            <button onClick={(e) => handleClick(setCount2)}>Count2 ++</button>
        </div>
    )
}

export { HelloLifecycle }