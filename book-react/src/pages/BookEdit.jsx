import Header from "../components/Header"
import BookList from '../components/BookForm'

const BookEdit = () => {
    return (
        <div>
            <Header enable={false}>Book Edit</Header>
            <BookForm />
        </div>
    )
}

export default BookEdit