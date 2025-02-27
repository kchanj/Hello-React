import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'
import useCounter from './useCounter';

const CustomCounter = () => {

    const {count, add, sub} = useCounter(0);

    return (
        <div className={styles.card}>
            <p>Count : {count}</p>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
        </div>
    )
}

export default CustomCounter;