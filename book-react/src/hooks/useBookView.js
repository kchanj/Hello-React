import { useState } from "react";

const API_BASE_URL = 'http://localhost:3000'

const useBookView = () => {

    const [book, setBook] = useState({});

    const getBook = async(id) => {
        try {
            let endpoint = `${API_BASE_URL}/books/${id}`;
            let options = {
                method: 'GET'
            }

            console.log(`[useBookView] Fetch: ${options.method} ${endpoint}`);
            const response = await fetch(endpoint, options);
            if(!response.ok) {
                throw new Error('Failed to update available')
            }

            const result = await response.json();
            console.log(`[useBookView] Result: book=${result.id}`);

            setBook(result);
        } catch(err) {
            console.error(err);
        }
    }

    return {book, getBook}
}

export default useBookView;