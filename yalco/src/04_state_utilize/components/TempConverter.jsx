import styles from '../../Card.module.css'
import { useState } from "react";

const TempConverter = () => {

    const [temp, setTemp] = useState("");
    const [unit, setUnit] = useState("Celsius");

    // 다시 랜더링되면서 온도가 변환됨(자식 컴포넌트에서 setState 함수 호출)
    const _temp = (unit === "Celsius") ? (temp*9/5 + 32).toFixed(1)
                                       : ((temp-32) * 5/9).toFixed(1);

    return (
        <div className={styles.card}>
            <h2>Temp Converter</h2>
            <TempValueComp temp={temp}
                           unit={unit}
                           onTempChange={setTemp} />
            <TempUnitComp unit={unit}
                          onUnitChange={setUnit} />
            <p>Converted : { temp ? _temp : "--"} {unit === "Celsius" ? "℉" : "℃"}</p>
        </div>
    )
}

const TempValueComp = ({temp, unit, onTempChange}) => {
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