import { useState } from "react"

const useCounter = (initCount = 0) => {

    const [count, setCount] = useState(initCount);

    const add = () => {
        setCount(c => c + 1);
    }

    const sub = () => {
        setCount(c => c - 1);
    }

    return {count, add, sub};

}

export default useCounter;