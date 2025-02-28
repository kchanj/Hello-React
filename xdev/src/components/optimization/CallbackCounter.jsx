import { memo, useCallback, useState } from 'react';
import styles from '../../Card.module.css'

const CallbackCounter = () => {

    console.log(`[CallbackCounter] render`);

    return (
        <ParentComp />
    )
}

const ParentComp = () => {

    const [count, setCount] = useState(0);
    const [active, setActive] = useState(true);

    console.log(`[CallbackCounter] render - parent`);

    const incrse = useCallback(
        () => {
            setCount(n => n + 1);
        }, []
    );

    const toggle = () => {
        setActive(b => !b);
    }

    return (
        <div className={styles.card}>
            <p>Parent: {count}</p>
            {/* <button onClick={incrse}>Parent +1</button> */}
            <button onClick={toggle}>Child On/Off</button>
            <div className={styles.content}>
                <ChildComp active={active} pincrse={incrse}/>
            </div>
        </div>
    )
}

const ChildComp = memo(
    ({active, pincrse}) => {

        const [count, setCount] = useState(0);
    
        console.log(`[CallbackCounter] render - child`);
    
        const incrse = () => {
            setCount(n => n + 1);
        }
    
        return (
            <>
                <p>Child: {count}</p>
                <button onClick={pincrse}>Parent +1</button>
                <button onClick={incrse} disabled={!active}>Child +1</button>
            </>
        )
    }
);

export default CallbackCounter;