import { useState } from 'react';
import styles from '../../Card.module.css'

const ParentRerender = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(s => s + 1);
    }

    console.log(`[ParentRerender] parent render`);

    return (
        <div className={styles.card}>
            <p>Parent: {count}</p>
            <button onClick={add}>Parent re-rendering</button>
            <ChildComp />
        </div>
    )
}

const ChildComp = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(s => s + 1);
    }

    console.log(`[ParentRerender] child render`);

    return (
        <div className={styles.content}>
            <p>Child: {count}</p>
            <button onClick={add}>Child re-rendering</button>
        </div>
    )
}

export default ParentRerender;