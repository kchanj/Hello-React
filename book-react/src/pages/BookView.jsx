import Header from "../components/Header"
import BookDetail from '../components/BookDetail'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import useBookView from "../hooks/useBookView";

const BookView = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {book, getBook} = useBookView();

    useEffect(() => {
        getBook(id);
    }, [id]);

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    const doDelete = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div>
            <Header enable={false}>Book View</Header>
            <BookDetail book={book} onEdit={goEdit} onDelete={doDelete}/>
        </div>
    )
}

export default BookView