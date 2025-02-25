import { useState } from 'react';
import styles from '../../Card.module.css'

const ParentRerender = () => {

    const [state, setState] = useState(0);

    const handleUpdate = () => {
        setState(s => s + 1);
    }

    console.log(`[ParentComp] render`);

    return (
        <div className={styles.card}>
            <p>Parent: {state}</p>
            <button onClick={handleUpdate}>Parent re-rendering</button>
            <ChildComp />
        </div>
    )
}

const ChildComp = () => {

    const [state, setState] = useState(0);

    const handleUpdate = () => {
        setState(s => s + 1);
    }

    console.log(`[ChildComp] render`);

    return (
        <div className={styles.content}>
            <p>Child: {state}</p>
            <button onClick={handleUpdate}>Child re-rendering</button>
        </div>
    )
}

export default ParentRerender;