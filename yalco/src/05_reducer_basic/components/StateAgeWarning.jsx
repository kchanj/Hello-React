import { useState } from 'react';
import styles from '../../Card.module.css'

const StateAgeWarning = () => {

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
        <div className={styles.card}>
            <h2>Age Warning by State</h2>
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

export { StateAgeWarning }