import styles from '../../Card.module.css'
import { useState, useReducer } from "react";
import { userReducer, iuser, euser, init } from '../reducers/userAgeReducer'

const UserAgeWarning = () => {
    return (
        <>
            <h2>Age Warning: 업무 로직을 포함한 컴포넌트</h2>
            <StateAgeWarning />

            <h2>Age Warning: 업무 로직을 분리한 컴포넌트</h2>
            <ReducerAgeWarning />

            <h2>Age Warning: Reset 기능 추가</h2>
            <ResetAgeWarning />
        </>
    )
}

const StateAgeWarning = () => {

    const [user, setUser] = useState({
        name: "",
        year: "",
        warning: ""
    });

    const handleChangeName = (value) => {
        setUser({
            ...user,
            name: value.trim().toUpperCase()
        });
    }

    const handleChangeYear = (value) => {
        let age = new Date().getFullYear() - value;
        let warning = 'Ok';
        if(age < 18) {
            warning = 'Must be at least 18 years old!';
        }

        setUser({
            ...user,
            year: value,
            warning: warning
        });
    }

    return (
        <div className={styles.card}>
            <label>Name: </label>
            <input type="text"
                    value={user.name}
                    onChange={(e) => handleChangeName(e.target.value)}
                    placeholder="Enter name" />
            
            <br />
            <label>Year: </label>
            <input type="number"
                    value={user.year}
                    onChange={(e) => handleChangeYear(e.target.value)}
                    placeholder="Enter birth year" />
            
            {user.warning && (<p style={{color: 'red'}}>{user.warning}</p>)}
            <br />
            <p>Name: {user.name}</p>
            <p>Year: {user.year}</p>
        </div>
    )
}

const ReducerAgeWarning = () => {

    const [user, dispatch] = useReducer(userReducer, iuser);

    return (
        <div className={styles.card}>
            <label>Name: </label>
            <input type="text"
                    value={user.name}
                    onChange={(e) => dispatch({
                            type: 'SET_NAME',
                            value: e.target.value
                        })}
                    placeholder="Enter name" />
            
            <br />
            <label>Year: </label>
            <input type="number"
                    value={user.year}
                    onChange={(e) => dispatch({
                            type: 'SET_YEAR',
                            value: e.target.value
                        })}
                    placeholder="Enter birth year" />
                    
            {user.warning && (<p style={{color: 'red'}}>{user.warning}</p>)}
            <br />
            <p>Name: {user.name}</p>
            <p>Year: {user.year}</p>
        </div>
    )
}

const ResetAgeWarning = () => {

    const [user, dispatch] = useReducer(userReducer, euser, init);

    return (
        <div className={styles.card}>
            <label>Name: </label>
            <input type="text"
                    value={user.name}
                    onChange={(e) => dispatch({
                            type: 'SET_NAME',
                            value: e.target.value
                        })}
                    placeholder="Enter name" />
            
            <br />
            <label>Year: </label>
            <input type="number"
                    value={user.year}
                    onChange={(e) => dispatch({
                            type: 'SET_YEAR',
                            value: e.target.value
                        })}
                    placeholder="Enter birth year" />
                    
            {user.warning && (<p style={{color: 'red'}}>{user.warning}</p>)}
            <br />
            <p>Name: {user.name}</p>
            <p>Year: {user.year}</p>

            <button onClick={() => dispatch({
                            type: 'RESET',
                            value: euser
            })}>
                Reset
            </button>
        </div>
    )
}

export { UserAgeWarning }