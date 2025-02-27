import { useContext } from 'react';
import { ToggleContext } from './ToggleContext';
import styles from '../../Card.module.css'

const ToggleUsageSub = () => {

    const {on, toggle} = useContext(ToggleContext);

    return (
        <div className={styles.content}>
            <p>{on ? '💛' : '🤍'}</p>
            <button onClick={toggle}>On/Off</button>
        </div>
    )
}

export default ToggleUsageSub;