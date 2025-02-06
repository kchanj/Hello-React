import Header from "../components/Header"
import BookForm from '../components/BookForm'

const BookAdd = () => {
    return (
        <div>
            <Header enable={false}>Book Add</Header>
            <BookForm />
        </div>
    )
}

export default BookAdd