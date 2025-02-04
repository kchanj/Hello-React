import styles from '../../Card.module.css'
import { useState } from "react";

const TempConverter = () => {

    const [temp, setTemp] = useState("");
    const [unit, setUnit] = useState("Celsius");

    console.log('Rendered TempConverter: ', temp, unit);

    // 리렌더링되면서 다시 계산됨, 하위 컴포넌트에서 setter 호출
    const _temp = (unit === "Celsius") ? (temp*9/5 + 32).toFixed(1)
                                       : ((temp-32) * 5/9).toFixed(1);

    return (
        <>
            <h2>Temp Converter: 컴포넌트의 state 공유</h2>
            <div className={styles.card}>
                <TempValueComp temp={temp}
                            unit={unit}
                            onTempChange={setTemp} />
                <TempUnitComp unit={unit}
                            onUnitChange={setUnit} />
                <p>Converted : { temp ? _temp : "--"} {unit === "Celsius" ? "℉" : "℃"}</p>
            </div>
        </>
    )
}

const TempValueComp = ({temp, unit, onTempChange}) => {

    console.log('Rendered TempValueComp: ', temp, unit);

    return (
        <div className="temp-input">
            <input type="number"
                   value={temp}
                   onChange={(e) => onTempChange(e.target.value)}
                   placeholder={`In ${unit}`} />
            <span> {unit}</span>
        </div>
    )
}

const TempUnitComp = ({unit, onUnitChange}) => {

    console.log('Rendered TempUnitComp: ', unit);

    return (
        <div className="unit-selector">
            <label>
                <input type="radio"
                       value="Celsius"
                       checked={unit === "Celsius"}
                       onChange={(e) => onUnitChange(e.target.value)} />
                Celsius
            </label>
            <label>
                <input type="radio"
                       value="Fahrenheit"
                       checked={unit === "Fahrenheit"}
                       onChange={(e) => onUnitChange(e.target.value)} />
                Fahrenheit
            </label>
        </div>
    )
}

export { TempConverter }