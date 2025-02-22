import EventButton from "./EventButton";
import styles from '../../Card.module.css'

const EventButtonApp = () => {
    return (
        <div className={styles.card}>
            <EventButton name='Home' />
            <EventButton name='Store' />
            <EventButton name='Contact' />
        </div>
    )
}

export default EventButtonApp;