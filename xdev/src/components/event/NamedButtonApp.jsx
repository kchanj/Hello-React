import NamedButton from "./NamedButton";
import styles from '../../Card.module.css'

const NamedButtonApp = () => {
    return (
        <div className={styles.card}>
            <NamedButton name='Home' />
            <NamedButton name='Store' />
            <NamedButton name='Contact' />
        </div>
    )
}

export default NamedButtonApp;