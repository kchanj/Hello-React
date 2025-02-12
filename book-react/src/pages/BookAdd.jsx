import Header from "../components/Header"
import BookForm from '../components/BookForm'
import { useState } from "react"
import useBookEdit from "../hooks/useBookEdit";

const BookAdd = () => {

    const [book, setBook] = useState({});
    const {addBook} = useBookEdit();

    const handleAddBook = (bookData) => {
        addBook(bookData);
    }

    return (
        <div>
            <Header enable={false}>Book Add</Header>
            <BookForm book={book} onSubmit={handleAddBook}/>
        </div>
    )
}

export default BookAdd