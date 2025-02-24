import { useReducer } from 'react';
import { reducer, istate, init } from './adultVerifierReducer';
import styles from '../../Card.module.css';

const AdultVerifier = () => {

    const dstate = {name: 'Park', year: 2006};

    //const[state, dispatch] = useReducer(reducer, istate);
    const[state, dispatch] = useReducer(reducer, dstate, init);

    const handleName = (value) => {
        dispatch({
            type: 'SET_NAME',
            payload: {
                name: value
            }
        });
    }

    const handleYear = (value) => {
        dispatch({
            type: 'SET_YEAR',
            payload: {
                year: value
            }
        });
    }

    const handleReset = () => {
        dispatch({
            type: 'RESET',
            payload: {
                dstate: dstate
            }
        })
    }

    return (
        <div className={styles.card}>
            <h3>Adult Verifier</h3>
            <input type='text'
                   name='name'
                   value={state.name}
                   onChange={e => handleName(e.target.value)}
                   placeholder='Enter name' />
            <input type='number'
                   name='year'
                   value={state.year}
                   onChange={e => handleYear(e.target.value)}
                   placeholder='Enter birth year' />
            <br/>
            <button onClick={handleReset}>Reset</button>
            <div className={styles.content}>
                <label>Age: {state.age}</label>
                <br/>
                <label style={{color: state.warning ? 'red': 'blue'}}>{state.message}</label>
            </div>
        </div>
    )
}

export default AdultVerifier;