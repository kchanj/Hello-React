import styles from '../../Card.module.css'
import { useState } from "react";

const HelloState = () => {
    return (
        <>
            <h2>Simple State</h2>
            <SimpleCountButton />
            <TogglePinnButton />
            <SumTotalButton />
        </>
    )
}

const SimpleCountButton = () => {

    const [count, setCount] = useState(0);

    console.log("SimpleCountButton")
    console.log(useState(0));

    return (
        <div className={styles.card}>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                + 1
            </button>
            <button onClick={() => setCount(count - 1)}>
                - 1
            </button>
        </div>
    )
}

const TogglePinnButton = () => {

    const [isPinned, setPinned] = useState(false);

    const togglePinned = () => {
        setPinned(!isPinned);
    }

    return (
        <div className={styles.card}>
            <h2>Pinn</h2>
            <button onClick={togglePinned}>
                {isPinned && '📌'} 동해물과 백두산이
            </button>
            <button onClick={togglePinned}>
                {isPinned && '📌'} 남산 위에 저 소나무
            </button>
        </div>
    )
}

const SumTotalButton = () => {

    const [count, setCount] = useState(0);

    const sumTotal = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 2);
        setCount(prev => prev + 3);
        setCount(prev => prev + 4);
        setCount(prev => prev + 5);
    }

    return (
        <div className={styles.card}>
            <h2>Count: {count}</h2>
            <button onClick={sumTotal}>
                1에서 5까지 합하기
            </button>
            <button onClick={() => setCount(0)}>
                초기화
            </button>
        </div>
    )
}
export { HelloState }