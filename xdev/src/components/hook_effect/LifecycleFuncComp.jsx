import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const LifecycleFuncComp = () => {

    const [count, setCount] = useState(0);

    /**
     * 설정 함수
     * - 컴포넌트가 DOM에 추가된 이후에 실행
     */
    const setup1 = () => {
        console.log(`[LifecycleFuncComp] setup-1 (this=${count})`);
        console.log(`------------------------------------------------------------`);
        /**
         * 정리 함수
         * - 컴포넌트가 DOM에서 제거되거나 리렌더링 되는 경우 실행
         * - 리렌더링 되는 경우, 이전 렌더링에 사용된 값으로 정리 함수를 실행한 후 새로운 값으로 설정 함수를 실행
         */
        return () => {
            console.log(`[LifecycleFuncComp] cleanup-1 (prev=${count})`);
        };
    }

    const setup2 = () => {
        console.log(`[LifecycleFuncComp] setup-2 (this=${count})`);
        console.log(`------------------------------------------------------------`);
        return () => {
            console.log(`[LifecycleFuncComp] cleanup-2 (prev=${count})`);
        };
    }

    useEffect(setup1, []);

    useEffect(setup2, [count]);

    const handleCount = () => {
        setCount(prev => prev + 1);
        console.log(`[LifecycleFuncComp] handle count`);
    }

    console.log(`[LifecycleFuncComp] render (this=${count})`);

    return (
        <div className={styles.card}>
            <p>Counter: {count}</p>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}

export default LifecycleFuncComp;