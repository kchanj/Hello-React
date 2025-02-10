import { useState } from "react";
import useFetch from "../hooks/useFetch";
import styles from '../../Card.module.css';

const ReduceBookManager = () => {
    return (
        <>
            <h2>ReduceBookManager</h2>
            <ReduceBookApp />
        </>
    )
}

const ReduceBookApp = () => {

    const [ params, setParams ] = useState({keyword: '', genre: 'Fiction'});
    const query = new URLSearchParams(params).toString();
    const { data, error, loading } = useFetch(`/books?${query}`);

    const setKeyword = (keyword) => {
        setParams(prev => ({...prev, keyword}));
    }

    const setGenre = (genre) => {
        setParams(prev => ({...prev, genre}));
    }

    console.log(`[HelloBookManager] loading=${loading ? 'y' : 'n'}, data=${data ? data.length : 0}, query=${query}`);

    if(loading) return (
        <div className={styles.card}>
            <div>⏳</div>
            Loading...
        </div>
    ) 

    if(error) return (
        <div className={styles.card}>
            <div>⚠️</div>
            Error!
        </div>
    )

    return (
        <div className={styles.card}>
            <div className={styles.card_m}>
                <label>Keyword: </label>
                <input type="text" placeholder="Search by title or author"
                       value={params.keyword}
                       onChange={(e) => setKeyword(e.target.value)} />
                <br/>
                <label>Genre: </label>
                <select onChange={(e) => setGenre(e.target.value)}
                        value={params.genre}>
                    <option value=''>All Genres</option>
                    <option value='Fiction'>Fiction</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Romance'>Romance</option>
                </select>
            </div>
            <div className={styles.card_m}>
                {data.map((book) => (
                <div key={book.id} className={styles.card_s}>
                    <h3>{book.title}</h3>
                    <p>{book.author} / {book.genre}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export { ReduceBookManager }