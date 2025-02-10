import { useContext, useState } from 'react';
import styles from '../../Card.module.css'
import { CounterContext, CounterProvider } from '../contexts/HelloCounterContext'
import { useTogglerContext, TogglerProvider } from '../contexts/HelloTogglerContext'

const HelloToggler = () => {
    return (
        <>
            <h2>계층구조 컴포넌트: 다중 context를 사용</h2>
            <HelloTogglerRoot />
        </>
    )
}

const HelloTogglerRoot = () => {
    console.log(`[HelloTogglerRoot] Rendered`);
    return (
        <div className={styles.card}>
            <h3>Context Counter / Toggler</h3>
            <CounterProvider>
                <HelloCounterMain />
            </CounterProvider>
            <TogglerProvider>
                <HelloTogglerMain />
            </TogglerProvider>
        </div>
    )
}

const HelloCounterMain = () => {
    console.log(`[HelloCounterMain] Rendered`);
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


const HelloTogglerMain = () => {
    console.log(`[HelloTogglerMain] Rendered`);
    return (
        <div className={styles.card_m}>
            <p>Main</p>
            <HelloTogglerChild />
        </div>
    )
}

const HelloTogglerChild = () => {
    const {offed, toggle} = useTogglerContext();
    console.log(`[HelloTogglerChild] Rendered: offed=${offed}`);
    return (
        <div className={styles.card_s}>
            <p>Child</p>
            <p>Turn: {offed ? 'off' : 'on'}</p>
            <button onClick={toggle}>Turn On/Off</button>
        </div>
    )
}

export { HelloToggler }