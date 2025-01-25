import styles from '../../Card.module.css'
import useCounter from '../hooks/useCounter'

const SimpleCounter = () => {

    const { count, increase, decrease } = useCounter(0);

    return (
        <div className={styles.card}>
            <h2>Counter: {count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export { SimpleCounter }