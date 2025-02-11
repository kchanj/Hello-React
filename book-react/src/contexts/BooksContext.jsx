import { createContext, useContext, useEffect, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";
import booksReducer from "./BooksReducer";

const BooksContext = createContext();

const BooksProvider = ({children}) => {

    const [books, dispatch] = useReducer(booksReducer, []);
    const [params, setParams] = useState({keyword: '', genre: ''});
    const query = new URLSearchParams(params).toString();
    const {data, loading, error} = useFetch(`/books?${query}`);

    useEffect(() => {
        console.log(`[BookContext] Effect: data=${data ? data.length : 0}`);
        if(data) {
            dispatch({type: 'SET_BOOKS', books: data});
        }
    }, [data]);

    const setKeyword = (keyword) => {
        setParams(params => ({...params, keyword}));
    }

    const setGenre = (genre) => {
        setParams(params => ({...params, genre}));
    }

    return (
        <BooksContext.Provider value={{books, loading, error, dispatch, setKeyword, setGenre}}>
            {children}
        </BooksContext.Provider>
    )
}

const useBooksContext = () => useContext(BooksContext);

export {useBooksContext, BooksProvider}