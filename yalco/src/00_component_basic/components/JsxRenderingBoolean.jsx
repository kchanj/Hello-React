import styles from '../../Card.module.css'

const JsxRenderingBoolean = () => {
    return (
        <>
            <h2>JSX 랜더링: 3항 연산자</h2>
            { TernaryOperator() }

            <h2>JSX 랜더링: 3항 연산자 이중</h2>
            { DualTernaryOperator() }

            <h2>JSX 랜더링: Null 병합 연산자</h2>
            <NullishOperator />
        </>
    )
}

/** JSX 랜더링: 3항 연산자 */
const TernaryOperator = () => {
    
    const isLogged = true;

    return (
        <div className={styles.card}>
            {isLogged ? <h3>Hello</h3> : <h3>Sign in</h3>}
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
        </div>
    )
}

/** JSX 랜더링: 3항 연산자 이중 */
const DualTernaryOperator = () => {

    const userRole = "admin";

    return (
        <div className={styles.card}>
        {userRole === "admin" ? (
                <>
                    <h3>Admin Dashboard</h3>
                    <button>Manage Users</button>
                </>
            ) : userRole === "member" ? (
                <>
                    <h3>Member Home</h3>
                    <p>Welcome to the community!</p>
                </>
            ) : (
                <>
                    <h3>Guest Access</h3>
                    <a href="/signup">Sign up here</a>
                </>
            )
        }
        </div>
    )
}

/** JSX 랜더링: Null 병합 연산자 */
const NullishOperator = () => {

    const hasNews = true;    // true, false
    const message = "Hello"; // null, undefined, empty

    return (
        <div className={styles.card}>
            {hasNews && <p>You have new messages!</p>}
            <p>&& 연산자: {message && <strong>{message}</strong>}</p>                         {/* a && b : a == true, b 출력, 아니면 공백 */}
            <p>|| 연산자: {message || <strong>Message is Null, Undefined, Empty</strong>}</p> {/* a || b : a == true, a 출력, 아니면 b */}
            <p>?? 연산자: {message ?? <strong>Message is Null, Undefined</strong>}</p>        {/* a ?? b : a == true, a 출력, 아니면 b */}
        </div>
    )
}

export { JsxRenderingBoolean }