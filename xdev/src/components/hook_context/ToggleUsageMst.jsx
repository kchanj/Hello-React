import ToggleUsageSub from "./ToggleUsageSub";
import styles from '../../Card.module.css'

const ToggleUsageMst = () => {
    return (
        <div className={styles.content}>
            <p>Toggle Usage</p>
            <ToggleUsageSub />
        </div>
    )
}

export default ToggleUsageMst;