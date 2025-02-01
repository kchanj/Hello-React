import { useEffect, useState } from 'react';
import styles from '../../Card.module.css'

const BookSearch = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async() => {
            try {
                const response = await fetch('/data/books.json');
                const books = await response.json();
                setBooks(books);
            } catch(error) {
                console.error('Failed to fetch books:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.card}>
            <h3>Book Search</h3>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong>
                        <br/>
                        by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { BookSearch }