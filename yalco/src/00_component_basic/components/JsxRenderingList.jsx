import styles from '../../Card.module.css'

const JsxRenderingList = () => {
    return (
        <>
            <h2>JSX 랜더링: 배열 기본</h2>
            <ArrayObject />

            <h2>JSX 랜더링: 배열 응용</h2>
            <ListObject />
        </>
    )
}

/** JSX 랜더링: 배열 기본 */
const ArrayObject = () => {

    const fruits = ["Apple", "Banana", "Cherry"];
    const buttons = [<button>A</button>, <button>B</button>, <button>C</button>];

    return (
        <div className={styles.card}>
            <h3>Array Rendering</h3>
            <p>배열의 요소: {[0, 123, "A", "Hello", true, false]}</p> {/* 랜더링 가능한 요소만 출력됨 */}
            <p>배열의 요소: {fruits}</p>
            <p>배열의 요소(map):</p>
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
            <p>배열의 요소(map):
                {buttons.map((button, index) => <span key={index}>{button}</span>)}
            </p>
        </div>
    )
}

/** JSX 랜더링: 배열 응용 */
const ListObject = () => {
    const books = [
        {id: 1, title: "React Basics",   published: true,  publisher: "Manning"},
        {id: 2, title: "Advanced Hooks", published: false, publisher: "OReilly"},
        {id: 3, title: "JSX in Depth",   published: true,  publisher: "Packt"}
    ];

    const publisheds = books.filter(book => book.published);

    return (
        <div className={styles.card}>
            {publisheds.length > 0 && <h4>Published Books</h4>}
            {publisheds.length > 0 ? (
                publisheds.map(book =>
                    <article key={book.id}>
                        <strong>{book.title}</strong>
                        <em> - {book.publisher}</em>
                    </article>)
            ) : (
                <p>No published books found.</p>
            )}
        </div>
    )
}

export { JsxRenderingList }