import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const HelloTimer = () => {

    const [enable, setEnable] = useState(false);

    return (
        <>
            <h2>useEffect 기본: Unmounted</h2>
            <div className={styles.card}>
                <h3>Hello Timer</h3>
                <label>
                    <input type="checkbox"
                           name="enable"
                           checked={enable}
                           onChange={(e) => setEnable(e.target.checked)} />
                    Start Timer
                </label>

                { enable && <Timer /> }
            </div>
        </>
    )
}

const Timer = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("[HelloTimer] Mounted");
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("[HelloTimer] Unmounted");
        }
    }, []);

    return (
        <p>Timer: {seconds}초</p>
    )
}

export { HelloTimer }