import React, { useMemo, useRef, useState } from 'react';
import styles from '../../Card.module.css'

const HelloMemoHOC = () => {
    return (
        <>
            <h2>React.Memo 기본: 하위 컴포넌트가 불필요하게 리렌더링됨</h2>
            <SimpleToggle />

            <h2>React.Memo 기본: 하위 컴포넌트의 불필요한 리렌더링 방지</h2>
            <MemoToggle />
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

            {/* 하위 컴포넌트: 상위가 리렌더링되면 불필요하게 리렌더링됨 */}
            <SimpleChild enable={enable}/>
            <button onClick={() => setEnable(p => !p)}>Enable / Disable</button>
        </div>
    )
}

const SimpleChild = ({enable}) => {
    console.log(`[SimpleChild] Rendered: enable=${enable}`);
    return (
        <p>Child: {enable ? 'Enable' : 'Disable'}</p>
    )
}

const MemoToggle = () => {

    const [active, setActive] = useState(true);
    const [enable, setEnable] = useState(true);

    return (
        <div className={styles.card}>
            <h3>Memo Toggle</h3>

            <p>Parent: {active ? 'Active' : 'Inactive'}</p>
            <button onClick={() => setActive(p => !p)}>Active / Inactive</button>

            {/* 하위 컴포넌트 */}
            <MemoChild enable={enable}/>
            <button onClick={() => setEnable(p => !p)}>Enable / Disable</button>
        </div>
    )
}

/** [Memo HOC 적용] props가 변경됨 경우만 리렌더링됨 */
const MemoChild = React.memo(SimpleChild);

export { HelloMemoHOC }