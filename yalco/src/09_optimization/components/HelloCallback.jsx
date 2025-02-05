import React, { useCallback, useMemo, useRef, useState } from 'react';
import styles from '../../Card.module.css'

const HelloCallback = () => {
    return (
        <>
            <h2>useCallback 기본: 하위 컴포넌트가 불필요하게 리렌더링됨</h2>
            <SimpleToggle />

            <h2>useCallback 기본: 하위 컴포넌트의 불필요한 리렌더링 방지</h2>
            <CallbackToggle />
        </>
    )
}

const SimpleToggle = () => {

    const [active, setActive] = useState(true);
    const [enable, setEnable] = useState(true);

    return (
        <div className={styles.card}>
            <h3>Simple Toggle</h3>

            <p>Parent: {active ? 'Active' : 'Inactive'}</p>
            <button onClick={() => setActive(p => !p)}>Active / Inactive</button>

            {/* 하위 컴포넌트: props로 전달되는 함수는 매번 재성성되어, 하위 컴포넌트가 리렌더링됨 */}
            <MemoChild enable={enable} onClick={() => setEnable(p => !p)} />
        </div>
    )
}

const SimpleChild = ({enable, onClick}) => {
    console.log(`[SimpleChild] Rendered: enable=${enable}`);
    return (
        <>
            <p>Child: {enable ? 'Enable' : 'Disable'}</p>
            <button onClick={onClick}>Enable / Disable</button>
        </>
    )
}

/** [Memo HOC 적용] props가 변경됨 경우만 리렌더링됨 */
const MemoChild = React.memo(SimpleChild);

const CallbackToggle = () => {

    const [active, setActive] = useState(true);
    const [enable, setEnable] = useState(true);

    /** [Callback Hook 적용] 해당 함수가 재생성되지 않음 */
    const handleEnable = useCallback(() => setEnable(p => !p), []);

    return (
        <div className={styles.card}>
            <h3>Simple Toggle</h3>

            <p>Parent: {active ? 'Active' : 'Inactive'}</p>
            <button onClick={() => setActive(p => !p)}>Active / Inactive</button>

            {/* 하위 컴포넌트: props로 전달되는 함수가 매번 재성성되지 않음, 하위 컴포넌트가 리렌더링 안됨 */}
            <MemoChild enable={enable} onClick={handleEnable} />
        </div>
    )
}

export { HelloCallback }