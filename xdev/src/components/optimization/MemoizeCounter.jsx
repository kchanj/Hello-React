import { memo, useState } from 'react';
import styles from '../../Card.module.css'

const MemoizeCounter = () => {

    console.log(`[MemoizeCounter] render`);

    return (
        <ParentComp />
    )
}

const ParentComp = () => {

    const [count, setCount] = useState(0);
    const [active, setActive] = useState(true);

    console.log(`[MemoizeCounter] render - parent`);

    const incrse = () => {
        setCount(n => n + 1);
    }

    const toggle = () => {
        setActive(b => !b);
    }

    return (
        <div className={styles.card}>
            <p>Parent: {count}</p>
            <button onClick={incrse}>Parent +1</button>
            <button onClick={toggle}>Child On/Off</button>
            <div className={styles.content}>
                <ChildComp active={active}/>
            </div>
        </div>
    )
}

const ChildComp = memo(
    ({active}) => {

        const [count, setCount] = useState(0);
    
        console.log(`[MemoizeCounter] render - child`);
    
        const incrse = () => {
            setCount(n => n + 1);
        }
    
        return (
            <>
                <p>Child: {count}</p>
                <button onClick={incrse} disabled={!active}>Child +1</button>
            </>
        )
    }
);

export default MemoizeCounter;