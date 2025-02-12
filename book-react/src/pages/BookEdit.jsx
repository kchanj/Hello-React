import Header from "../components/Header"
import BookForm from "../components/BookForm"
import useBookView from "../hooks/useBookView";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useBookEdit from "../hooks/useBookEdit";

const BookEdit = () => {

    const {id} = useParams();
    const {book, getBook} = useBookView();
    const {editBook} = useBookEdit();

    useEffect(() => {
        getBook(id);
    }, [id]);

    const handleUpdateBook = (bookData) => {
        editBook(bookData);
    }

    return (
        <div>
            <Header enable={false}>Book Edit</Header>
            <BookForm book={book} onSubmit={handleUpdateBook}/>
        </div>
    )
}

export default BookEdit