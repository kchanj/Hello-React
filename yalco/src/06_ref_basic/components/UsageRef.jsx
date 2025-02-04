import { useRef } from 'react';
import styles from '../../Card.module.css'

const UsageRef = () => {
    return (
        <>
            <h2>useRef 활용: DOM 요소에 접근하기</h2>
            <RefInputText />
        </>
    )
}

const RefInputText = () => {

    const message = useRef(null);

    const handleClick = () => {
        console.log("RefInputText message", message);
        console.log("RefInputText message.current", message.current);

        message.current.focus();
    }

    return (
        <div className={styles.card}>
            <h3>Message</h3>
            <input type="text"
                   name="message"
                   ref={message}
                   placeholder="Type..." />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export { UsageRef }