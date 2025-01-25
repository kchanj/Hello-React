import { useReducer } from 'react';
import { _state, _reducer } from '../reducers/ageWarningReducer'
import styles from '../../Card.module.css'

const ReducerAgeWarning = () => {

    const [state, dispatch] = useReducer(_reducer, _state);

    return (
        <div className={styles.card}>
            <h2>Age Warning by Reducer</h2>
            <label>
                Name: 
                <input type="text"
                    placeholder="Enter name"
                    value={state.name}
                    onChange={(e) => dispatch(
                        {
                            type: 'SET_NAME',
                            value: e.target.value
                        }
                    )} />
            </label>
            <br />
            <label>
                Birth Year: 
                <input type="number"
                        placeholder="Enter birth year"
                        value={state.year}
                        onChange={(e) => dispatch(
                            {
                                type: 'SET_YEAR',
                                value: e.target.value
                            }
                        )} />
                {state.warning && (<p style={{color: 'red'}}>{state.warning}</p>)}
            </label>
            <br />
            <p>Name: {state.name}</p>
            <p>Year: {state.year}</p>
        </div>
    )
}

export { ReducerAgeWarning }