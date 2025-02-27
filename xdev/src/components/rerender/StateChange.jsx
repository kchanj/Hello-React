import { useRef, useState } from 'react';
import styles from '../../Card.module.css'

const StateChange = () => {

    const cntref = useRef(0);
    const [count, setCount] = useState(0);

    const add = () => {
        cntref.current += 1;
        console.log(`[StateChange] cntref: ${cntref.current}`);
    }

    const ref = () => {
        setCount(cntref.current)
    }

    console.log(`[StateChange] render`);

    return (
        <div className={styles.content}>
            <p>Count: {count}</p>
            <button onClick={add}>Refer +1</button>
            <button onClick={ref}>Apply state</button>
        </div>
    )
}

export default StateChange;