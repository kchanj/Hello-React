import { useRef, useState } from 'react';
import styles from '../../Card.module.css'

const StateChange = () => {

    const mssgref = useRef('');
    const [message, setMessage] = useState('');

    const handleMssgref = (value) => {
        mssgref.current = value;
        console.log(`[StateChange] Typing: ${mssgref.current}`);
    }

    const handleMessage = () => {
        setMessage(mssgref.current);
        console.log(`[StateChange] Apply: ${mssgref.current}`);
    }

    console.log(`[StateChange] render`);

    return (
        <div className={styles.card}>
            <p>State Change</p>
            <p>message: {message}</p>
            <label>
                <input type='text'
                    ref={mssgref}
                    onChange={(e) => handleMssgref(e.target.value)}
                    placeholder='Type Message' />
                <button onClick={handleMessage}>Apply Message</button>
            </label>
        </div>
    )
}

export default StateChange;