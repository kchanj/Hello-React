import CounterUsageSub from "./CounterUsageSub";
import styles from '../../Card.module.css'


const CounterUsageMst = () => {
    return (
        <div className={styles.content}>
            <p>Counter Usage</p>
            <CounterUsageSub />
        </div>
    )
}

export default CounterUsageMst;