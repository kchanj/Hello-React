import { useMemo, useState } from 'react';
import styles from '../../Card.module.css'

const DualCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleCount1 = () => {
        setCount1(count => count + 1);
        console.log(`[DualCounter] handleCount1`);
    }

    const handleCount2 = () => {
        setCount2(count => count + 1);
        console.log(`[DualCounter] handleCount2`);
    }

    const powerCount1 = (count1 * 3);

    const powerCount2 = () => (count2 * 3);

    console.log(`[DualCounter] render`);

    return (
        <div className={styles.card}>
            <p>Count1: {count1}, Power1: {powerCount1}</p>
            <button onClick={handleCount1}>+1</button>

            <p>Count2: {count2}, Power2: {powerCount2()}</p>
            <button onClick={handleCount2}>+1</button>
        </div>
    )
}

export default DualCounter;