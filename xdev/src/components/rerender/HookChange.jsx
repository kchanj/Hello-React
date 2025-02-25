import styles from '../../Card.module.css'
import useCounter from '../hook_custom/useCounter';

const HookChange = () => {

    const {count, add, sub} = useCounter(0);

    console.log(`[HookChange] render`);

    return (
        <div className={styles.card}>
            <p>Hook Change</p>
            <p>Count: {count}</p>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
        </div>
    )
}

export default HookChange;