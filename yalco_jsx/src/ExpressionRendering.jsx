function ExpressionRendering() {
    const isLogged = true;
    return (
        <>
            <h3>3항 연산자 랜더링 (기본)</h3>
            {getMessageLogged()}
            <hr/>
            <h3>3항 연산자 랜더링 (다중)</h3>
            {getMessageUser("admin")}
            <hr/>
            <h3>논리 연산자 랜더링</h3>
            {getMessageBoolean()}
            <hr/>
            <h3>리스트 랜더링</h3>
            {getMessageList()}
            <hr/>
            <h3>리스트 랜더링</h3>
            {getMessageBooks()}
        </>
    )
}

function getMessageLogged() {
    const isLogged = true;
    return (
        <>
            {isLogged ? <p>Hello</p> : <p>Sign in</p>}
            {isLogged ? (
                    <>
                        <p>Welcome back</p>
                        <p>You are logged in, Enjoy your time here!</p>
                    </>
                ) : (
                    <>
                        <p>Welcome guest</p>
                        <p>Please log in to access more features</p>
                    </>
                )
            }
        </>
    )
}

function getMessageUser(userStatus) {
    return (
        userStatus === "admin" ? (
            <>
                <p>Admin Dashboard</p>
                <button>Manage Users</button>
            </>
        ) : userStatus === "member" ? (
            <>
                <p>Welcome to the community</p>
                <button>Create Article</button>
            </>
        ) : (
            <>
                <p>Welcome to the community</p>
                <button>Sign up here</button>
            </>
        )

    )
}

function getMessageBoolean() {
    const hasNews = true; // true, false
    const message = "Hello"; // null, undefined, empty

    return (
        <>
            {hasNews && <p>You have new messages!</p>}
            <p>Message is {message && <em>{message}, Not Empty</em>}</p>              {/* a && b : a가 falsity이면, a 출력 아니면, b 출력 */}
            <p>Message is {message || <em>Null, Undefined, Empty</em>}</p> {/* a || b : a가 falsity이면, b 출력 아니면, a 출력 */}
            <p>Message is {message ?? <em>Null, Undefined</em>}</p>        {/* a ?? b : a가 falsity이면, b 출력 아니면, a 출력 */}
        </>
    )
}

function getMessageList() {
    const fruits = ["Apple", "Banana", "Cherry"];

    return (
        <>
            <p>{[0, 123, "A", "Hello", true, false]}</p> {/* 배열의 경우 랜더링 가능한 요소만 출력됨 */}
            <p>{[<button>A</button>, <button>B</button>, <button>C</button>]}</p>
            <p>{fruits}</p>
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
        </>
    )
}

function getMessageBooks() {
    const books = [
        {id: 1, title: "React Basics", published: true, publisher: "Manning"},
        {id: 2, title: "Advanced Hooks", published: false, publisher: "OReilly"},
        {id: 3, title: "JSX in Depth", published: true, publisher: "Packt"}
    ];

    const publisheds = books.filter(book => book.published);

    return (
        <>
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
        </>
    )
}

export default ExpressionRendering