import { useState } from "react";
import styles from '../../Card.module.css'

const TempConverter = () => {

    const [temp, setTemp] = useState('');
    const [unit, setUnit] = useState('Celsius');

    console.log(`[TempConverter] render`);

    const convertedTemp = (unit === "Celsius"
                                ? (temp * 9/5 + 32).toFixed(1)
                                : ((temp - 32) * 5/9).toFixed(1));
    
    return (
        <div className={styles.card}>
            <h3>Temperature Converter</h3>
            <p>Converted: {temp ? convertedTemp : '--'} {unit === 'Celsius' ? '°F' : '°C' }</p>
            <TempInput temp={temp}
                       unit={unit}
                       onChange={setTemp} />
            <TempUnit unit={unit}
                      onChange={setUnit}/>
        </div>
    )
}

const TempInput = ({temp, unit, onChange}) => {

    console.log(`[TempInput] render: unit=${unit}, temp=${temp}`);

    return (
        <div className={styles.tempInput}>
            <input type='number'
                   value={temp}
                   onChange={(e) => onChange(e.target.value)}
                   placeholder={`In ${unit}`} />
            <span>{unit}</span>
        </div>
    )
}

const TempUnit = ({unit, onChange}) => {

    console.log(`[TempUnit] render: unit=${unit}`);

    return (
        <div className={styles.tempUnit}>
            <label>
                <input type='radio'
                       value='Celsius'
                       checked={unit === 'Celsius'}
                       onChange={(e) => onChange(e.target.value)} />
                Celsius
            </label>
            <label>
                <input type='radio'
                       value='Fahrenheit'
                       checked={unit === 'Fahrenheit'}
                       onChange={(e) => onChange(e.target.value)} />
                Fahrenheit
            </label>
        </div>
    )
}

export default TempConverter