import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { renderStars, getBookEmoji } from '../utils'
import { useBooksContext } from '../contexts/BooksContext'
import Error from './Error'
import Loading from './Loading'
import styles from './BookList.module.css'
import useBookEdit from '../hooks/useBookEdit';

const BookList = () => {

    const {books, loading, error} = useBooksContext();
    const {setBookAvailable} = useBookEdit();

    console.log(`[   BookList] Render: books=${books ? books.length : 0}, loading=${loading}`);

    const handleAvailable = (id, currentAvailable) => {
        setBookAvailable(id, currentAvailable);
    }

    if (loading) return <Loading />
    if (error) return <Error /> 

    return (
        <section className={styles.list}>
            {books.map(book => (
                <article key={book.id} className={styles.item}>
                    <div>{getBookEmoji(book.id)}</div>
                    <div>
                        <h3>{book.title}</h3>
                        <p>{book.author} / {book.genre}</p>
                        <p className={styles.rating}>
                            {renderStars(book.rating)}
                        </p>
                    </div>
                    <div>
                        <button className={styles.toggleButton + (book.available ? '' : ` ${styles.off}`)}
                                onClick={() => handleAvailable(book.id, book.available)}>
                        {book.available ? 'Available' : 'Unavailable'}
                        </button>
                        <Link className={styles.link} to={`/view/${book.id}`}>Details</Link>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default BookList