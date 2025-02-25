import { useState } from "react";
import ToggleTimer from "./ToggleTimer";

const ToggleTimerApp = () => {

    const [enable, setEnable] = useState(false);
    
    return (
        <>
            <label>
                <input type='checkbox'
                    name='enable'
                    checked={enable}
                    onChange={() => setEnable(e => !e)}/>
                Enable Timer
            </label>
            { enable ? <ToggleTimer /> : <div>Disabled</div> }
        </>
    )
}

export default ToggleTimerApp;