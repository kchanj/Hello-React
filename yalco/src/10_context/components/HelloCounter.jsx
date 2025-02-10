import { useContext, useState } from 'react';
import styles from '../../Card.module.css'
import { CounterContext, CounterProvider } from '../contexts/HelloCounterContext'

const HelloCounter = () => {
    console.log(`[HelloCounter] Rendered:`);
    return (
        <>
            <h2>계층구조 컴포넌트: context를 사용한 state의 전달</h2>
            <HelloCounterRoot />
        </>
    )
}

const HelloCounterRoot = () => {
    console.log(`[HelloCounterRoot] Rendered:`);
    return (
        <CounterProvider>
        <div className={styles.card}>
            <h3>Context Counter</h3>
            <HelloCounterMain />
        </div>
        </CounterProvider>
    )
}

const HelloCounterMain = () => {
    console.log(`[HelloCounterMain] Rendered:`);
    return (
        <div className={styles.card_m}>
            <p>Main</p>
            <HelloCounterChild />
        </div>
    )
}

const HelloCounterChild = () => {
    const {count, setCount} = useContext(CounterContext);
    console.log(`[HelloCounterChild] Rendered: count=${count}`);
    return (
        <div className={styles.card_s}>
            <p>Child</p>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Counter ++</button>
            <button onClick={() => setCount(count - 1)}>Counter --</button>
        </div>
    )
}

export { HelloCounter }