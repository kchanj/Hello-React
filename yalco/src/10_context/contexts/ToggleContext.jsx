import { createContext, useState } from "react";

const ToggleContext = createContext();

const ToggleProvider = ({children}) => {

    const [offed, setOffed] = useState(true);

    const toggle = () => {
        setOffed(p => !p);
    }

    return (
        <ToggleContext.Provider value={{offed, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext, ToggleProvider }