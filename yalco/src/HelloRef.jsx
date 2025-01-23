import { useState, useRef } from "react";

const SimpleCounter = () => {

    const count1 = useRef(0);
    const [count2, setCount2] = useState(0);

    const doCount1 = () => {
        count1.current += 1;
        console.log('doCount1: ', count1.current);
    }

    const doCount2 = () => {
        setCount2(n => n+1);
    }

    return (
        <>
            <h3>Counter</h3>
            <p>Counter1: {count1.current}</p>
            <p>Counter2: {count2}</p>
            <br/>
            <button onClick={doCount1}>Counter1 ++</button>
            <button onClick={doCount2}>Counter2 ++</button>
        </>
    )
}

const StateCounter = () => {

    const ref = useRef(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const doCount1 = () => {
        ref.current += 1;
        setCount1(ref.current);
    }

    const doCount2 = () => {
        setCount2(n => n+1);
    }

    return (
        <>
            <h3>Counter</h3>
            <p>Counter1: {count1}</p>
            <p>Counter2: {count2}</p>
            <br/>
            <button onClick={doCount1}>Counter1 ++</button>
            <button onClick={doCount2}>Counter2 ++</button>
        </>
    )
}

const TextBox = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        console.log("inputRef", inputRef.current);
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text"
                   placeholder="Type..."
                   ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export {
    SimpleCounter,
    StateCounter,
    TextBox
}