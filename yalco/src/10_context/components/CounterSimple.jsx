import { useState } from 'react';
import styles from '../../Card.module.css'

const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    console.log(`[SimpleCounter] Rendered: count=${count}`);

    return (
        <div className={styles.card}>
            <h3>Simple Counter</h3>
            <SimpleCounterMain count={count} setCount={setCount}/>
        </div>
    )
} 

const SimpleCounterMain = ({count, setCount}) => {

    console.log(`[SimpleCounterMain] Rendered: count=${count}`);

    return (
        <div className={styles.card_m}>
            <p>Main</p>
            <SimpleCounterChild count={count} setCount={setCount}/>
        </div>
    )
}

const SimpleCounterChild = ({count, setCount}) => {
    
    console.log(`[SimpleCounterChild] Rendered: count=${count}`);

    return (
        <div className={styles.card_s}>
            <p>Child</p>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Counter ++</button>
            <button onClick={() => setCount(count - 1)}>Counter --</button>
        </div>
    )
}

export { SimpleCounter }