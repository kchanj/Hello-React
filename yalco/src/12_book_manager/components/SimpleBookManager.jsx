import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import styles from '../../Card.module.css'

const SimpleBookManager = () => {
    return (
        <>
            <h2>SimpleBookManager</h2>
            <SimpleBookApp />
        </>
    )
}

const SimpleBookApp = () => {
    return (
        <SimpleBookLayout>
            <BookHead />
            <BookList />
        </SimpleBookLayout>
    )
}

const SimpleBookLayout = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

const BookHead = () => {

    const [ params, setParams ] = useState({keyword: '', genre: ''});

    const setKeyword = (keyword) => {
        setParams(prev => ({...prev, keyword}));
    }

    const setGenre = (genre) => {
        setParams(prev => ({...prev, genre}));
    }

    console.log(`[SimpleBookManager.BookHead] params: `, params);

    return (
        <div className={styles.card_m}>
            <label>Keyword: </label>
            <input type="text" placeholder="Search by title or author"
                   onChange={(e) => setKeyword(e.target.value)} />
            <br/>
            <label>Genre: </label>
            <select onChange={(e) => setGenre(e.target.value)}>
                <option value=''>All Genres</option>
                <option value='Fiction'>Fiction</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Romance'>Romance</option>
            </select>
        </div>
    )
}

const BookList = () => {
    const { data, error, loading } = useFetch('/books');

    console.log(`[SimpleBookManager.BookList] data: `, data);

    if(loading) return (
        <div className={styles.card_m}>
            <div>⏳</div>
            Loading...
        </div>
    ) 

    if(error) return (
        <div className={styles.card_m}>
            <div>⚠️</div>
            Error!
        </div>
    )

    return (
        <div className={styles.card_m}>
            {data.map((book) => (
            <div key={book.id} className={styles.card_s}>
                <h3>{book.title}</h3>
                <p>{book.author} / {book.genre}</p>
            </div>
            ))}
        </div>
      )
}

export { SimpleBookManager }