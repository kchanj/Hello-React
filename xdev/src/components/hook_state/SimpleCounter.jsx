import { useState } from 'react';
import styles from '../../Card.module.css'

const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    const handleCount = (delta) => {
        setCount(count + delta);
    }

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={() => handleCount(-10)}>-10</button>
            <button onClick={() => handleCount(-1)}>-1</button>
            <button onClick={() => handleCount(+1)}>+1</button>
            <button onClick={() => handleCount(+10)}>+10</button>
        </div>
    )
}

export default SimpleCounter;