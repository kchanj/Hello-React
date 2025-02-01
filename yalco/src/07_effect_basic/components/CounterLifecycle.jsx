import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const CounterLifecycle = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick = (setter) => {
        setter(prev => prev + 1);
    }

    useEffect(() => {
        console.log(`count1: ${count1}, count2: ${count2}`)
    }, [count1]);

    return (
        <div className={styles.card}>
            <h2>Counter Lifecycle</h2>

            <h3>Count1: {count1}</h3>
            <button onClick={(e) => handleClick(setCount1)}>Count1 ++</button>

            <h3>Count2: {count2}</h3>
            <button onClick={(e) => handleClick(setCount2)}>Count2 ++</button>
        </div>
    )
}

export { CounterLifecycle }