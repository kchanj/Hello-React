import styles from '../../Card.module.css'
import useCounter from '../hooks/useCounter'
import useWindowSize from '../hooks/useWindowSize'
import useFetch from '../hooks/useFetch'

const HelloCustomHook = () => {
    return (
        <>
            <h2>Custom Hook: SimpleCounter</h2>
            <SimpleCounter />

            <h2>Custom Hook: WindowResize</h2>
            <WindowResize />

            <h2>Custom Hook: BookSearch</h2>
            <BookSearch />
        </>
    )
}

const SimpleCounter = () => {

    /* 카운터 기능을 컴포넌트 내에서 구현하지 않고, 모듈로 분리함 */
    const { count, increment, decrement } = useCounter(0);

    return (
        <div className={styles.card}>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}

const WindowResize = () => {

    const { width, height } = useWindowSize();

    return (
        <div className={styles.card}>
            <h2>Window Size</h2>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )
}

const BookSearch = () => {
    
    const { data, loading, error } = useFetch('http://localhost:3000/books')
 
    return (
        <div className={styles.card}>
            <h3>Book List</h3>
            {
                loading ? <p>Loading...</p>
                        : error ? <p>Error: {error}</p>
                                : (<ul>
                                    {data.map(book => (
                                            <li key={book.id}>
                                                <strong>{book.title} </strong> by {book.author}
                                            </li>))}
                                  </ul>)
            }
        </div>
   )
}

export { HelloCustomHook }