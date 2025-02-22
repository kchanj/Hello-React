import BookCard from "./BookCard"
import {books} from "../../resources/books"

const BookCardApp = () => {

    const format = (p) => (
        <span style={{color: 'red'}}>$ {p.toFixed(1)}</span>
    );

    return (
        <>
            {books.map(book => (
                <BookCard key={book.id} {...book} format={format}/>
            ))}
        </>
    )
}

export default BookCardApp;