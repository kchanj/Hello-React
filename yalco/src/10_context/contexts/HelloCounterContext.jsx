import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0);
    console.log(`[HelloCountProvider] Rendered`);
    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterContext, CounterProvider }