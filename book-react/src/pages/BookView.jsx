import Header from "../components/Header"
import BookDetail from '../components/BookDetail'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import useBookView from "../hooks/useBookView";
import useBookEdit from "../hooks/useBookEdit";

const BookView = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {book, getBook} = useBookView();
    const {delBook} = useBookEdit();

    useEffect(() => {
        getBook(id);
    }, [id]);

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    const doDelete = () => {
        delBook(id);
    }

    return (
        <div>
            <Header enable={false}>Book View</Header>
            <BookDetail book={book} onEdit={goEdit} onDelete={doDelete}/>
        </div>
    )
}

export default BookView