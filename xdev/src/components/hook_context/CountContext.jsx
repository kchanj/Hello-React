import { createContext, useState } from "react";

const CountContext = createContext();

const CountProvider = ({children}) => {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(c => c + 1);
    }

    const sub = () => {
        setCount(c => c - 1);
    }

    return (
        <CountContext.Provider value={{count, add, sub}}>
            {children}
        </CountContext.Provider>
    )
}

export {CountContext, CountProvider}