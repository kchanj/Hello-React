import { useReducer } from 'react';
import { reducer, istate } from './usefulCounterReducer';
import styles from '../../Card.module.css';

const UsefulCounter = () => {

    const [state, dispatch] = useReducer(reducer, istate);

    const handleClick = (type, value, event) => {
        const { clientX: x, clientY: y } = event
        dispatch({
            payload: {type, value},
            metainf: {x, y}
        });
    }

    return (
        <div className={styles.card}>
            <h3>Useful Counter</h3>
            <p>Count: {state.count}</p>
            <button onClick={e => handleClick('SUB', 2, e)}>-2</button>
            <button onClick={e => handleClick('SUB', 1, e)}>-1</button>
            <button onClick={e => handleClick('ADD', 1, e)}>+1</button>
            <button onClick={e => handleClick('ADD', 2, e)}>+2</button>
        </div>
    )
}

export default UsefulCounter;