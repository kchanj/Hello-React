import { getBookEmoji, renderStars } from '../utils'
import styles from './BookDetail.module.css'
import Loading from './Loading';

const BookDetail = ({book, onEdit, onDelete}) => {

    if(!book) return <Loading />

    return (
        <>
          <section className={styles.detail}>
            <div>
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Published Date:</strong> {book.publishedDate}</p>
              <p><strong>Rating:</strong>
                <span className={styles.rating}>
                  {renderStars(book.rating)}
                </span>
              </p>
              <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
            </div>
            <div>
              {getBookEmoji(book.id)}
            </div>
          </section>
          <section className={styles.buttons}>
            <button onClick={onEdit} className={styles.editButton}>
              Edit Book
            </button>
            <button onClick={onDelete} className={styles.deleteButton}>
              Delete Book
            </button>
          </section>
        </>
    )
}

export default BookDetail