import { useState } from 'react';
import styles from '../../Card.module.css'

const ParentRerender = () => {

    console.log(`[ParentRerender] render`);

    return (
        <ParentComp />
    )
}

const ParentComp = () => {

    const [count, setCount] = useState(0);

    console.log(`[ParentRerender] render - parent`);

    const add = () => {
        setCount(s => s + 1);
    }

    return (
        <div className={styles.card}>
            <p>Parent: {count}</p>
            <button onClick={add}>Parent +1</button>
            <div className={styles.content}>
                <ChildComp />
            </div>
        </div>
    )
}

const ChildComp = () => {

    const [count, setCount] = useState(0);

    console.log(`[ParentRerender] render - child`);

    const add = () => {
        setCount(s => s + 1);
    }

    return (
        <>
            <p>Child: {count}</p>
            <button onClick={add}>Child +1</button>
        </>
    )
}

export default ParentRerender;