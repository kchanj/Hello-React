import { useContext, useState } from 'react';
import styles from '../../Card.module.css'
import { CountContext, CountProvider } from '../contexts/CountContext'

const ContextCounter = () => {

    console.log(`[ContextCounter] Rendered:`);

    return (
        <CountProvider>
        <div className={styles.card}>
            <h3>Context Counter</h3>
            <ContextCounterMain />
        </div>
        </CountProvider>
    )
}

const ContextCounterMain = () => {

    console.log(`[ContextCounterMain] Rendered:`);

    return (
        <div className={styles.card_m}>
            <p>Main</p>
            <ContextCounterChild />
        </div>
    )
}

const ContextCounterChild = () => {

    const {count, setCount} = useContext(CountContext);

    console.log(`[ContextCounterChild] Rendered: count=${count}`);

    return (
        <div className={styles.card_s}>
            <p>Child</p>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Counter ++</button>
            <button onClick={() => setCount(count - 1)}>Counter --</button>
        </div>
    )
}

export { ContextCounter }