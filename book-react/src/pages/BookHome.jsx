import Header from "../components/Header"
import BookList from '../components/BookList'

const BookHome = () => {
    return (
        <div>
            <Header enable={true}>Book List</Header>
            <BookList />
        </div>
    )
}

export default BookHome