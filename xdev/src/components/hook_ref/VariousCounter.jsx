import { useReducer, useRef, useState } from "react";
import styles from '../../Card.module.css';

const VariousCounter = () => {
    console.log(`[VariousCounter] render`);
    return (
        <div className={styles.card}>
            <StateCounter />
            <ReducerCounter />
            <RefCounter />
        </div>
    )
}

const StateCounter = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
        console.log(`[StateCounter] count: ${count}`);
    }

    return (
        <div className={styles.content}>
            <p>State Counter: {count}</p>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}

const ReducerCounter = () => {

    const [count, dispatch] = useReducer(count => count + 1, 0);

    const handleCount = () => {
        dispatch();
        console.log(`[StateCounter] count: ${count}`);
    }

    return (
        <div className={styles.content}>
            <p>Reducer Counter: {count}</p>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}

const RefCounter = () => {

    const number = useRef(0);
    const [count, setCount] = useState(0);

    const handleCount = () => {
        number.current = number.current + 1;
        setCount(number.current);
        console.log(`[RefCounter] count: ${number.current}`);
    }

    return (
        <div className={styles.content}>
            <p>Ref Counter: {count}</p>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}

export default VariousCounter;