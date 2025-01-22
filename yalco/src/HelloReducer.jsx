import { useReducer, useState } from "react"
import { _state, _reducer, _init } from './reducers/ageWarningReducer'
import extState from './reducers/ageWarningData'

const SimpleAgeWarning = () => {

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [warning, setWarning] = useState("");

    const handleChangeName = (value) => {
        const formatted = value.trim().toUpperCase();
        setName(formatted);
    }

    const handleChangeYear = (value) => {
        const age = new Date().getFullYear() - value;
        if(age < 18) {
            setWarning('Must be at least 18 yrs old!')
        } else {
            setWarning('Ok')
        }
        setYear(value);
    }

    return (
        <div>
            <label>
                Name: 
                <input type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => handleChangeName(e.target.value)} />
            </label>
            <br />
            <label>
                Year: 
                <input type="number"
                        placeholder="Enter birth year"
                        value={year}
                        onChange={(e) => handleChangeYear(e.target.value)} />
                {warning && (<p style={{color: 'red'}}>{warning}</p>)}
            </label>
            <br />
            <p>Name: {name}</p>
            <p>Year: {year}</p>
        </div>
    )
}

const ReducerAgeWarning = () => {

    const [state, dispatch] = useReducer(_reducer, _state);

    return (
        <div>
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

const ResetAgeWarning = () => {

    const [state, dispatch] = useReducer(_reducer, extState, _init);

    return (
        <div>
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

            <button onClick={(e) => dispatch(
                {
                    type: 'RESET',
                    data: extState
                }
            )}>
                Reset
            </button>
        </div>
    )
}

export {
    SimpleAgeWarning,
    ReducerAgeWarning,
    ResetAgeWarning
}