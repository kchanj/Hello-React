import { useBooksContext } from "../contexts/BooksContext";

const API_BASE_URL = 'http://localhost:3000'

const useBookEdit = () => {

    const {dispatch} = useBooksContext();

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

    return {setBookAvailable}
}

export default useBookEdit;