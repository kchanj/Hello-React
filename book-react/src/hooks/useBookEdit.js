import { useNavigate } from "react-router-dom";
import { useBooksContext } from "../contexts/BooksContext";

const API_BASE_URL = 'http://localhost:3000'

const useBookEdit = () => {

    const navigate = useNavigate();
    const {dispatch} = useBooksContext();

    const addBook = async(bookData) => {
        try {
            let endpoint = `${API_BASE_URL}/books`;
            let options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            }

            console.log(`[useBookEdit] Fetch: ${options.method} ${endpoint}`);
            const response = await fetch(endpoint, options);
            if(!response.ok) {
                throw new Error('Failed to add book')
            }

            const book = await response.json();
            console.log(`[useBookEdit] Result: book=${book.id}`);

            dispatch({type: 'ADD_BOOK', book: book});
            navigate('/');
        } catch(err) {
            console.error(err);
        }
    }

    const editBook = async(bookData) => {
        try {
            let endpoint = `${API_BASE_URL}/books/${bookData.id}`;
            let options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookData)
            }

            console.log(`[useBookEdit] Fetch: ${options.method} ${endpoint}`);
            const response = await fetch(endpoint, options);
            if(!response.ok) {
                throw new Error('Failed to update book')
            }

            const book = await response.json();
            console.log(`[useBookEdit] Result: book=${book.id}`);

            dispatch({type: 'EDIT_BOOK', book: book});
            navigate('/');
        } catch(err) {
            console.error(err);
        }
    }

    const delBook = async(id) => {
        const confirmed = window.confirm('Delete this book?')
        if(!confirmed) return;
        
        try {
            let endpoint = `${API_BASE_URL}/books/${id}`;
            let options = {
                method: 'DELETE'
            }

            console.log(`[useBookEdit] Fetch: ${options.method} ${endpoint}`);
            const response = await fetch(endpoint, options);
            if(!response.ok) {
                throw new Error('Failed to delete book')
            }
            console.log(`[useBookEdit] Result: book=${id}`);

            dispatch({type: 'DEL_BOOK', id: id});
            navigate('/')
        } catch(err) {
            console.error(err);
        }
    }

    const setBookAvailable = async(id, currentAvailable) => {
        try {
            let endpoint = `${API_BASE_URL}/books/${id}`;
            let options = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ available: !currentAvailable })
            }

            console.log(`[useBookEdit] Fetch: ${options.method} ${endpoint}`);
            const response = await fetch(endpoint, options);
            if(!response.ok) {
                throw new Error('Failed to update available')
            }

            const updatedBook = await response.json();
            console.log(`[useBookEdit] Result: book=${updatedBook.id}`);

            dispatch({type: 'EDIT_BOOK', book: updatedBook});
        } catch(err) {
            console.error(err);
        }
    }

    return {addBook, editBook, delBook, setBookAvailable}
}

export default useBookEdit;