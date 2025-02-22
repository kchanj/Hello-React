import styles from '../../Card.module.css'

const BookContents = ({
    title,
    children
}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <div className={styles.content}>
                <p>Table of Contents</p>
                {children}
            </div>
        </div>
    )
}

export default BookContents;