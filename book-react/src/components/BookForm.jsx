import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { genres } from '../utils'
import styles from './BookForm.module.css'
import Loading from './Loading'

const BookForm = ({book = {}, onSubmit}) => {

    console.log(`[   BookForm] book=`, book);

    const navigate = useNavigate();
    const titleRef = useRef();
    const authorRef = useRef();
    const genreRef = useRef();
    const dateRef = useRef();
    const ratingRef = useRef();
    const availableRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const bookData = { 
            id: book.id || null,
            title: titleRef.current.value,
            author: authorRef.current.value,
            genre: genreRef.current.value,
            publishedDate: dateRef.current.value,
            rating: parseInt(ratingRef.current.value, 10),
            available: availableRef.current.checked
        }
    
        onSubmit(bookData);
    }

    if(!book) return <Loading />

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" ref={titleRef} defaultValue={book.title || ''} placeholder="Title" required />
            <input type="text" ref={authorRef} defaultValue={book.author || ''} placeholder="Author" required />
            <select ref={genreRef} defaultValue={book.genre || ''} required>
                <option value="" disabled>Select Genre</option>
                {genres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
                ))}
            </select>
            <input type="date" ref={dateRef} defaultValue={book.publishedDate || ''} placeholder="Published Date" required />
            <input type="number" ref={ratingRef} defaultValue={book.rating || ''} min="1" max="5" placeholder="Rating (1-5)" required />
            <label>
                <input type="checkbox" ref={availableRef} defaultChecked={book.available || false} />
                Available
            </label>
            <div className={styles.buttons}>
                <button type="submit">{book.id ? 'Update Book' : 'Add Book'}</button>
                <button type="button" onClick={() => navigate('/')} className={styles.cancelButton}>Cancel</button>
            </div>
        </form>
      )
}

export default BookForm