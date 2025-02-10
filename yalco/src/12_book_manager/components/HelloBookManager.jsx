import styles from '../../Card.module.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CommonLoading from "./CommonLoading";
import CommonError from "./CommonError";

const HelloBookManager = () => {
    return (
        <>
            <h2>HelloBookManager</h2>
            <BrowserRouter>
                <HelloBookApp />
            </BrowserRouter>
        </>
    )
}

const HelloBookApp = () => {
    return (
        <Routes>
            <Route path="/"         element={<HelloBookList />} />
            <Route path="/view/:id" element={<HelloBookView />} />
            <Route path="/edit/:id" element={<HelloBookEdit />} />
            <Route path="/add"      element={<HelloBookAdd />} />
            <Route path="*"         element={<CommonError />} />
        </Routes>
    )
}

const HelloBookList = () => {

    const [ params, setParams ] = useState({keyword: '', genre: 'Fiction'});
    const query = new URLSearchParams(params).toString();
    const { data, error, loading } = useFetch(`/books?${query}`);

    const setKeyword = (keyword) => {
        setParams(prev => ({...prev, keyword}));
    }

    const setGenre = (genre) => {
        setParams(prev => ({...prev, genre}));
    }

    if (loading) return <CommonLoading />
    if (error) return <CommonError /> 

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

const HelloBookView = () => {

    return (
        <div className={styles.card}>
            BookView
        </div>
    )
}

const HelloBookEdit = () => {

    return (
        <div className={styles.card}>
            BookEdit
        </div>
    )
}

const HelloBookAdd = () => {

    return (
        <div className={styles.card}>
            BookAdd
        </div>
    )
}

export { HelloBookManager }