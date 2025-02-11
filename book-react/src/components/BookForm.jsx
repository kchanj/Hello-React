import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { genres } from '../utils'
import styles from './BookForm.module.css'
import Loading from './Loading'

const BookForm = ({book}) => {

    const navigate = useNavigate()
    const titleRef = useRef()
    const authorRef = useRef()
    const genreRef = useRef()
    const dateRef = useRef()
    const ratingRef = useRef()
    const availableRef = useRef()

    if(!book) return <Loading />

    return (
        <form className={styles.form}>
          <input ref={titleRef} defaultValue={book.title || ''} placeholder="Title" required />
          <input ref={authorRef} defaultValue={book.author || ''} placeholder="Author" required />
          <select ref={genreRef} defaultValue={book.genre || ''} required>
            <option value="" disabled>Select Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
          <input ref={dateRef} defaultValue={book.publishedDate || ''} placeholder="Published Date" required type="date" />
          <input ref={ratingRef} defaultValue={book.rating || 1} placeholder="Rating (1-5)" required type="number" min="1" max="5" />
          <label>
            <input ref={availableRef} type="checkbox" defaultChecked={book.available || false} />
            Available
          </label>
          <div className={styles.buttons}>
            <button type="submit">{book.id ? 'Update Book' : 'Add Book'}</button>
            <button type="button" onClick={() => navigate('/')} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      )
}

export default BookForm