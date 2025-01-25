import styles from '../../Card.module.css'
import useWindowSize from '../hooks/useWindowSize'

const WindowResize = () => {

    const windowSize = useWindowSize();

    return (
        <div className={styles.card}>
            <h2>Window Size</h2>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
        </div>
    )
}

export { WindowResize }