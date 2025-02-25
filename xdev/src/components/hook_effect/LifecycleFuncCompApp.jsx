import { useState } from "react";
import LifecycleFuncComp from "./LifecycleFuncComp";

const LifecycleFuncCompApp = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <button onClick={() => setActive(p => !p)}>Active/Inactive</button>
            <br/>
            {active ? <LifecycleFuncComp /> : 'None'}
        </>
    )
}

export default LifecycleFuncCompApp;