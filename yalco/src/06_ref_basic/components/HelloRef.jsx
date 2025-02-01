import { useRef, useState } from 'react';
import styles from '../../Card.module.css'

const SimpleCounter = () => {

    const count1 = useRef(0);
    const [count2, setCount2] = useState(0);

    const doCount1 = () => {
        count1.current += 1;
        console.log('doCount1: ', count1.current);
    }

    const doCount2 = () => {
        setCount2(n => n+1);
    }

    return (
        <div className={styles.card}>
            <h2>Simple Counter</h2>
            <p>Counter1: {count1.current}</p>
            <p>Counter2: {count2}</p>
            <br/>
            <button onClick={doCount1}>Counter1 ++</button>
            <button onClick={doCount2}>Counter2 ++</button>
        </div>
    )
}

const StateCounter = () => {

    const ref = useRef(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const doCount1 = () => {
        ref.current += 1;
        setCount1(ref.current);
    }

    const doCount2 = () => {
        setCount2(n => n+1);
    }

    return (
        <div className={styles.card}>
            <h2>State Counter</h2>
            <p>Counter1: {count1}</p>
            <p>Counter2: {count2}</p>
            <br/>
            <button onClick={doCount1}>Counter1 ++</button>
            <button onClick={doCount2}>Counter2 ++</button>
        </div>
    )
}

export { SimpleCounter, StateCounter }