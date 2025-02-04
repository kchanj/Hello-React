import styles from '../../Card.module.css'
import { useState, useReducer } from "react";

const SimpleCounter = () => {
    return (
        <>
            <h2>useReducer 기본: state count button</h2>
            <StateCountButton />

            <h2>useReducer 기본: reducer count button</h2>
            <ReducerCountButton />

            <h2>useReducer 기본: advance count button</h2>
            <AdvanceCountButton />
        </>
    )
}

/** useReducer 기본: state count button */
const StateCountButton = () => {

    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(prev => prev + 1);
    }

    const handleDec = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={handleInc}>
                + 1
            </button>
            <button onClick={handleDec}>
                - 1
            </button>
        </div>
    )
}

/** useReducer 기본: reducer count button */
const ReducerCountButton = () => {

    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch({type: 'inc'})}>
                + 1
            </button>
            <button onClick={() => dispatch({type: 'dec'})}>
                - 1
            </button>
        </div>
    )
}

const countReducer = (count, action) => {
    if(action.type === 'inc') {
        return (count + 1);
    } else if(action.type === 'dec') {
        return (count - 1);
    }

    throw new Error('[ERROR] unknown action type');
}


/** useReducer 기본: advance count button */
const AdvanceCountButton = () => {

    const [count, dispatch] = useReducer(advanceCountReducer, 0);

    const haldleClick = (type, value, event) => {
        const { clientX: x, clientY: y } = event;

        dispatch({
            type,
            body: { value },
            meta: { x, y }
        })
    }

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={(e) => haldleClick('dec', 2, e)}>
                - 2
            </button>
            <button onClick={(e) => haldleClick('dec', 1, e)}>
                - 1
            </button>
            <button onClick={(e) => haldleClick('inc', 1, e)}>
                + 1
            </button>
            <button onClick={(e) => haldleClick('inc', 2, e)}>
                + 2
            </button>
        </div>
    )
}

const advanceCountReducer = (count, action) => {

    const { value } = action.body;
    const { x, y } = action.meta;

    console.log(`useReducer 기본: 클릭한 좌표는 (${x}, ${y})`);

    if(action.type === 'inc') {
        return (count + value);
    } else if(action.type === 'dec') {
        return (count - value);
    }

    throw new Error('[ERROR] unknown action type');
}

export { SimpleCounter }