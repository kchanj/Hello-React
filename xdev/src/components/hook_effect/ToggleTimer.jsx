import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const ToggleTimer = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = () => {
            setInterval(() => {setSeconds(s => s+1)}, 1000);
        }
        
        timer();

        return () => {
            clearInterval(timer);
            console.log('[ToggleTimer] clean up');
        }
    }, []);

    return (
        <div className={styles.card}>
            <p>Timer: {seconds} seconds</p>
        </div>
    )
}

export default ToggleTimer;