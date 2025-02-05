import { useMemo, useRef, useState } from 'react';
import styles from '../../Card.module.css'

const HelloMemo = () => {
    return (
        <>
            <h2>useMemo 기본: 특정 연산이 불필요하게 재실행됨</h2>
            <SimpleCounter />

            <h2>useMemo 기본: 특정 연산의 불필요한 재실행을 방지</h2>
            <MemoCounter />
        </>
    )
}

const SimpleCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    /** 특정 연산 */
    const calcHeavy = (num) => {
        console.log('[SimpleCounter] calculating...');

        let result = 0;
        for(let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result;
    }

    console.log(`[SimpleCounter] Rendered: count1=${count1}, count2=${count2}`);

    return (
        <div className={styles.card}>
            <h3>Simple Counter</h3>

            <p>Counter1: {count1}</p>
            <button onClick={() => setCount1(p => p + 1)}>Counter1 ++</button>
            <button onClick={() => setCount1(p => p - 1)}>Counter1 --</button>
            
            <p>Counter2: {count2}, Sum: {calcHeavy(count2)}</p>
            <button onClick={() => setCount2(p => p + 1)}>Counter2 ++</button>
            <button onClick={() => setCount2(p => p - 1)}>Counter2 --</button>
        </div>
    )
}

const MemoCounter = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    /** 특정 연산 */
    const calcHeavy = (num) => {
        console.log('[MemoCounter] calculating...');

        let result = 0;
        for(let i = 0; i < 1000000000; i++) {
            result += num;
        }
        return result;
    }

    /** [Memo Hook 적용] count2가 변경되는 경우만 특정 연산을 재실행함 */
    const calcValue = useMemo(() => calcHeavy(count2), [count2]);

    console.log(`[MemoCounter] Rendered: count1=${count1}, count2=${count2}`);

    return (
        <div className={styles.card}>
            <h3>Memo Counter</h3>

            <p>Counter1: {count1}</p>
            <button onClick={() => setCount1(p => p + 1)}>Counter1 ++</button>
            <button onClick={() => setCount1(p => p - 1)}>Counter1 --</button>
            
            <p>Counter2: {count2}, Sum: {calcValue}</p>
            <button onClick={() => setCount2(p => p + 1)}>Counter2 ++</button>
            <button onClick={() => setCount2(p => p - 1)}>Counter2 --</button>
        </div>
    )
}

export { HelloMemo }