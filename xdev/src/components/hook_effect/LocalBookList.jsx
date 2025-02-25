import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const LocalBookList = () => {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const response = await fetch('/data/books.json');
                const data = await response.json();
                setBooks(data);
            } catch(e) {
                console.error(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        setTimeout(fetchBooks, 1000);
    }, []);

    if(loading) {
        return (
            <div className={styles.card}>
                <p>Book List</p>
                <p>Loading...</p>
            </div>
        )
    }

    if(error) {
        return (
            <div className={styles.card}>
                <p>Book List</p>
                <p>Error</p>
            </div>
        )
    }

    return (
        <div className={styles.card}>
            <p>Book List</p>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LocalBookList;