import Header from "../components/Header"
import BookDetail from '../components/BookDetail'

const BookView = () => {
    return (
        <div>
            <Header enable={false}>Book View</Header>
            <BookDetail />
        </div>
    )
}

export default BookView