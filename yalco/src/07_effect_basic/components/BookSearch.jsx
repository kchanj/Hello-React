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
        return (
            <>
                <h2>useEffect 기본: 레이아웃 렌더링 후, 내용 가져오기</h2>
                <div className={styles.card}>
                    <h3>Book Search</h3>
                    <p>Loading...</p>
                </div>
            </>
        )
    }

    return (
        <>
            <h2>useEffect 기본: 레이아웃 렌더링 후, 내용 가져오기</h2>
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
        </>
    )
}

export { BookSearch }