import { useRef } from 'react';
import styles from '../../Card.module.css'

const TextBox = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        console.log("inputRef", inputRef.current);
        inputRef.current.focus();
    }

    return (
        <div className={styles.card}>
            <h2>Text Box</h2>
            <input type="text"
                   placeholder="Type..."
                   ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export { TextBox }