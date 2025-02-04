import { useRef, useState } from 'react';
import styles from '../../Card.module.css'

const HelloRef = () => {
    return (
        <>
            <h2>useRef 기본: ref의 변경은 렌더링과 무관</h2>
            <SimpleCounter />

            <h2>useRef 기본: ref와 let의 차이</h2>
            <StateCounter />
        </>
    )
}

const SimpleCounter = () => {

    const count1 = useRef(0);
    const [count2, setCount2] = useState(0);

    const doCount1 = () => {
        count1.current += 1;
        console.log('count1 = ', count1.current);
    }

    const doCount2 = () => {
        setCount2(n => n+1);
    }

    console.log(`[SimpleCounter] Rendered: count1=${count1.current}, count2=${count2}`);

    return (
        <div className={styles.card}>
            <h3>Simple Counter</h3>
            <p>Counter1: {count1.current}</p>
            <p>Counter2: {count2}</p>
            <br/>
            <button onClick={doCount1}>Counter1 ++</button>
            <button onClick={doCount2}>Counter2 ++</button>
        </div>
    )
}

const StateCounter = () => {

    let num = 0;
    const ref = useRef(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const doRefCount = () => {
        ref.current += 1;
        console.log('[StateCounter] ref = ', ref.current);
    }

    const doLetCount = () => {
        num += 1;
        console.log('[StateCounter] let = ', num);
    }

    const doRendering = () => {
        console.log(`[StateCounter] doRendering: ref=${ref.current}, num=${num}`);
        setCount1(ref.current);
        setCount2(num);
    }

    console.log(`[StateCounter] Rendered: count1=${count1}, count2=${count2}`);

    return (
        <div className={styles.card}>
            <h3>State Counter</h3>
            <p>Count1: {count1}</p>
            <p>Count2: {count2}</p>
            <br/>
            <button onClick={doRefCount}>Ref ++</button>
            <button onClick={doLetCount}>Let ++</button>
            <button onClick={doRendering}>리렌더링</button>
        </div>
    )
}

export { HelloRef }