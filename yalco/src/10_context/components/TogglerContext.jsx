import { useContext, useState } from 'react';
import styles from '../../Card.module.css'
import { CountProvider, CountContext } from '../contexts/CountContext'
import { ToggleProvider, ToggleContext } from '../contexts/ToggleContext'

const ContextToggler = () => {

    console.log(`[ContextToggler] Rendered`);

    return (
        <div className={styles.card}>
            <h3>Context Counter / Toggler</h3>
            <CountProvider>
                <ContextCounterMain />
            </CountProvider>
            <ToggleProvider>
                <ContextTogglerMain />
            </ToggleProvider>
        </div>
    )
}

const ContextCounterMain = () => {

    console.log(`[ContextCounterMain] Rendered`);

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


const ContextTogglerMain = () => {

    const {offed} = useContext(ToggleContext);

    console.log(`[ContextTogglerMain] Rendered: offed=${offed}`);

    return (
        <div className={styles.card_m}>
            <p>Main</p>
            <p>Turn: {offed ? 'off' : 'on'}</p>
            <ContextTogglerChild />
        </div>
    )
}

const ContextTogglerChild = () => {

    const {offed, toggle} = useContext(ToggleContext);

    console.log(`[ContextTogglerChild] Rendered: offed=${offed}`);

    return (
        <div className={styles.card_s}>
            <p>Child</p>
            <button onClick={toggle}>Turn On/Off</button>
        </div>
    )
}

export { ContextToggler }