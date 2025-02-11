import styles from './Header.module.css'
import { genres } from '../utils'
import { useBooksContext } from '../contexts/BooksContext';

const Header = ({enable, children}) => {

    const {setKeyword, setGenre} = useBooksContext();

    return (
        <header className={styles.topbar}>
        <h1>{children}</h1>
        {enable &&
            <div>
                <input type="text"
                       placeholder="Search by title or author"
                       onChange={(e) => setKeyword(e.target.value)}/>

                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="">All Genres</option>
                    {genres.map((genre, idx) => (
                    <option key={idx} value={genre}>
                        {genre}
                    </option>
                    ))}
                </select>
            </div>
        }
      </header>
    )
}

export default Header