import { useState } from 'react';
import styles from '../../Card.module.css'
import useFetch from './useFetch';

const FetchBookList = () => {

    const {data: books, error, loading} = useFetch('http://localhost:3000/books/');

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

export default FetchBookList;