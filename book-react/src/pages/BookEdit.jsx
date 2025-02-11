import Header from "../components/Header"
import BookForm from "../components/BookForm"
import useBookView from "../hooks/useBookView";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BookEdit = () => {

    const {id} = useParams();
    const {book, getBook} = useBookView();

    useEffect(() => {
        getBook(id);
    }, [id]);

    return (
        <div>
            <Header enable={false}>Book Edit</Header>
            <BookForm book={book} />
        </div>
    )
}

export default BookEdit