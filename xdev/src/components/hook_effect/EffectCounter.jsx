import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const EffectCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log(`[EffectCounter] setup: count1 = ${count1}, count2 = ${count2}`)
    }, [count1, count2]);

    const handleCount1 = () => {
        setCount1(c => c+1);
    }

    const handleCount2 = () => {
        setCount2(c => c+1);
    }

    return (
        <div className={styles.card}>
            <p>Count1: {count1}</p>
            <button onClick={handleCount1}>+1</button>

            <p>Count2: {count2}</p>
            <button onClick={handleCount2}>+1</button>
        </div>
    )
}

export default EffectCounter;