import {createBookOpacity} from './bookOpacityUtils'
import BookCard from './BookCard';
import books from "../../resources/books"

const BookOpacityApp = () => {

    const BookOpacity = createBookOpacity(BookCard);

    return (
        <>
            {books.map(book => (
                <BookOpacity key={book.id} {...book}/>
            ))}
        </>
    )
}

export default BookOpacityApp;