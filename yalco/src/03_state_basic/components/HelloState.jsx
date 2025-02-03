import styles from '../../Card.module.css'
import { useState } from "react";

const HelloState = () => {
    return (
        <>
            <h2>useState 기본: count</h2>
            <SimpleCountButton />

            <h2>useState 기본: toggle</h2>
            <TogglePinnButton />

            <h2>useState 기본: async</h2>
            <SetterAsyncButton />

            <h2>useState 기본: prev state</h2>
            <SetterPrevButton />
        </>
    )
}

/** useState 기본: count */
const SimpleCountButton = () => {

    const [count, setCount] = useState(0);

    console.log("useState 기본", useState(0));

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>
                + 1
            </button>
            <button onClick={() => setCount(count - 1)}>
                - 1
            </button>
        </div>
    )
}

/** useState 기본: toggle */
const TogglePinnButton = () => {

    const [isPinned, setPinned] = useState(false);

    const togglePinned = () => {
        setPinned(!isPinned);
    }

    return (
        <div className={styles.card}>
            <h3>Pinned: {String(isPinned)}</h3>
            <button onClick={togglePinned}>
                {isPinned && '📌'} 동해물과 백두산이
            </button>
            <button onClick={togglePinned}>
                {isPinned && '📌'} 남산 위에 저 소나무
            </button>
        </div>
    )
}

/** useState 기본: async */
const SetterAsyncButton = () => {

    const [count, setCount] = useState(0);

    const execCount = () => {
        console.log('useState 기본: async, 0번 호출 => ', count);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        console.log('useState 기본: async, 5번 호출 => ', count);
    }

    console.log('useState 기본: async, 리렌더링 => ', count);

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={execCount}>
                5번 호출하기
            </button>
            <button onClick={() => setCount(0)}>
                초기화
            </button>
        </div>
    )
}

/** useState 기본: prev state */
const SetterPrevButton = () => {

    const [count, setCount] = useState(0);

    const execCount = () => {
        console.log('useState 기본: prev, 0번 호출 => ', count);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        console.log('useState 기본: prev, 5번 호출 => ', count);
    }

    console.log('useState 기본: prev, 리렌더링 => ', count);

    return (
        <div className={styles.card}>
            <h3>Count: {count}</h3>
            <button onClick={execCount}>
                5번 호출하기
            </button>
            <button onClick={() => setCount(0)}>
                초기화
            </button>
        </div>
    )
}

export { HelloState }