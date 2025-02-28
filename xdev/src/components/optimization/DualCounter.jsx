import { useMemo, useState } from 'react';
import styles from '../../Card.module.css'

const DualCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log(`------------------------------------------------------------`);
    console.log(`[DualCounter] render`);

    const handleCount1 = () => {
        console.log(`[DualCounter] setCount1`);
        setCount1(count => count + 1);
    }
    const handleCount2 = () => {
        console.log(`[DualCounter] setCount2`);
        setCount2(count => count + 1);
    }

    const calc1 = () => {
        console.log(`[DualCounter] calc1`);
        return (count1 ** 3);
    };

    const calc2 = () => {
        console.log(`[DualCounter] calc2`);
        return (count2 ** 3);
    };

    const memo2 = useMemo(calc2, [count2]);

    return (
        <div className={styles.card}>
            <p>Count1: {count1}, Calc1: {calc1()}</p>
            <button onClick={handleCount1}>+1</button>

            <p>Count2: {count2}, Calc2: {memo2}</p>
            <button onClick={handleCount2}>+1</button>
        </div>
    )
}

export default DualCounter;