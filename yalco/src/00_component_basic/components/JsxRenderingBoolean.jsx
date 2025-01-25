import styles from '../../Card.module.css'

const isLogged = true;
const userRole = "admin";

const JsxRenderingBoolean = () => {
    return (
        <>
            <h2>JSX 랜더링: 3항 연산자</h2>
            { TernaryOperator(isLogged) }

            <h2>JSX 랜더링: 3항 연산자 이중</h2>
            { DualTernaryOperator(userRole) }

            <h2>JSX 랜더링: Null 병합 연산자</h2>
            <NullishOperator />
        </>
    )
}

const TernaryOperator = (isLogged) => {
    return (
        <div className={styles.card}>
            {isLogged ? <h2>Hello</h2> : <h2>Sign in</h2>}
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

const DualTernaryOperator = (userRole) => {
    return (
        <div className={styles.card}>
        {userRole === "admin" ? (
                <>
                    <h2>Admin</h2>
                    <p>Admin Dashboard</p>
                    <button>Manage Users</button>
                </>
            ) : userRole === "member" ? (
                <>
                    <h2>Member</h2>
                    <p>Admin Dashboard</p>
                    <button>Create Article</button>
                </>
            ) : (
                <>
                    <h2>Guest</h2>
                    <p>Admin Dashboard</p>
                    <button>Sign up here</button>
                </>
            )
        }
        </div>
    )
}

const NullishOperator = () => {

    const hasNews = true;    // true, false
    const message = "Hello"; // null, undefined, empty

    return (
        <div className={styles.card}>
            {hasNews && <p>You have new messages!</p>}
            <p>Message: {message && <strong>{message}</strong>}</p>   {/* a && b : a == true, b 출력 */}
            <p>Message: {message || <strong>Message is Null, Undefined, Empty</strong>}</p> {/* a || b : a == true, a 출력 */}
            <p>Message: {message ?? <strong>Message is Null, Undefined</strong>}</p>        {/* a ?? b : a == true, a 출력 */}
        </div>
    )
}

export { JsxRenderingBoolean }