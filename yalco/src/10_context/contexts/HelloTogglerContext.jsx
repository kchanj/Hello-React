import { createContext, useContext, useState } from "react";

const TogglerContext = createContext();

export const TogglerProvider = ({children}) => {
    const [offed, setOffed] = useState(true);
    const toggle = () => {
        setOffed(p => !p);
    }
    console.log(`[HelloTogglerProvider] Rendered`);
    return (
        <TogglerContext.Provider value={{offed, toggle}}>
            {children}
        </TogglerContext.Provider>
    )
}

export const useTogglerContext = () => useContext(TogglerContext);