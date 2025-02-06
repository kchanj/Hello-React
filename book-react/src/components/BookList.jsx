import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { renderStars, getBookEmoji } from '../utils'
import Error from './Error'
import Loading from './Loading'
import styles from './BookList.module.css'


const BookList = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE_URL = 'http://localhost:3000/books';

    const fetchData = async() => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}`);
            if(!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const body = await response.json();
            setData(body);
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <Loading />
    if (error) return <Error /> 

    return (
        <section className={styles.list}>
            {data.map(book => (
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