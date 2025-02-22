import { useState } from 'react';
import styles from '../../Card.module.css'

const TogglePinned = () => {

    const [pinned, setPinned] = useState(false);

    const togglePinned = () => {
        setPinned(!pinned);
    }

    return (
        <div className={styles.card}>
            <h3>Pinned: {String(pinned)}</h3>
            <button onClick={togglePinned}>
            {pinned && '📌'} Pinn This!
            </button>
        </div>
    )
}

export default TogglePinned;