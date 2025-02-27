import { useContext } from 'react';
import { CountContext } from './CountContext';
import styles from '../../Card.module.css'

const CounterUsageSub = () => {

    const {count, add, sub} = useContext(CountContext);

    return (
        <div className={styles.content}>
            <p>Count : {count}</p>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
        </div>
    )
}

export default CounterUsageSub;