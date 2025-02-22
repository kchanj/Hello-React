import styles from '../../Card.module.css'

const BookCard = ({
    title = '(No Title)',
    author = 'Anonymous',
    genre,
    published,
    price,
    format
}) => {

    const formatted = format && format(price);

    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>{formatted}</p>
            <p>Published: {published}</p>
        </div>
    )
}

export default BookCard;