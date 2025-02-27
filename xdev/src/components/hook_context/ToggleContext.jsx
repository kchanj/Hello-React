import { createContext, useState } from "react";

const ToggleContext = createContext();

const ToggleProvider = ({children}) => {

    const [on, setOn] = useState(true);

    const toggle = () => {
        setOn(on => !on);
    }

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export {ToggleContext, ToggleProvider}