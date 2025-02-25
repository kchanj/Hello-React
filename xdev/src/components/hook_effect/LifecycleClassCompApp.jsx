import { useState } from "react";
import LifecycleClassComp from "./LifecycleClassComp";

const LifecycleClassCompApp = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <button onClick={() => setActive(p => !p)}>Active/Inactive</button>
            <br/>
            {active ? <LifecycleClassComp /> : 'None'}
        </>
    )
}

export default LifecycleClassCompApp;