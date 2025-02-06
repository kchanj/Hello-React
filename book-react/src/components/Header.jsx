import styles from './Header.module.css'
import { genres } from '../utils'

const Header = ({enable, children}) => {
    return (
        <header className={styles.topbar}>
        <h1>{children}</h1>
        {enable &&
            <div>
                <input type="text"
                       placeholder="Search by title or author"
                       onChange={(e) => handleKeyword(e.target.value)}/>

                <select onChange={(e) => handleKeyword(e.target.value)}>
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