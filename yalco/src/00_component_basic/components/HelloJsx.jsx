import styles from '../../Card.module.css'

const HelloJsx = () => {
    return (
        <>
            <h2>JSX 표현식: 기본</h2>
            <JsxBasic />

            <h2>JSX 표현식: 배열, 객체</h2>
            <JxsArray />

            <h2>JSX 표현식: 함수</h2>
            <JsxFunction />

            <h2>JSX 표현식: jsx element</h2>
            <JsxElement />
        </>
    )
}

const JsxBasic = () => {

    const name = "John";
    const age = 25;
    const isAdmin = true;

    return (
        <div className={styles.card}>
            <p>Name: {name}</p> {/* 문자 */}
            <p>Age: {age + 1}</p> {/* 숫자 */}
            <p>Admin: {isAdmin}</p> {/* 논리 */}
            <p>Admin: {String(isAdmin)}</p> {/* 문자 */}
            <p>{name +"'s Profile"}</p>
            <p>{`${name} is ${age} years old`}</p>
        </div>
    )
}

const JxsArray = () => {

    const colors = ["red", "blue", "green"];
    const numbers = [1, 2, 3, 4, 5];
    const user = {
        name: "Jane",
        email: "jane@example.com",
        age: 30
    };

    return (
        <div className={styles.card}>
            <p>User: {user.name}, {user.age}</p>
            <p>Color 1st: {colors[0]}</p>
            <p>Color count: {colors.length}</p>

            <p>Numbers all: {numbers.join(", ")}</p>
            <p>Numbers even: {numbers.filter(n => n%2 === 0).join(", ")}</p>
            <p>Numbers time: {numbers.map(n => n*2).join(", ")}</p>
        </div>
    )
}

const JsxFunction = () => {

    const items = [{id: 1, price: 10}, {id: 2, price: 20}, {id: 3, price: 30}];
    const getGreeting = (name) => `Hello ${name}`;
    const getDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    const sumTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

    return (
        <div className={styles.card}>
            <p>{getGreeting("Alice")}</p>
            <p>Today: {getDate(new Date())}</p>
            <p>Total: {sumTotal(items)}</p>
            <p>
                {
                    (() => {
                        const hours = new Date().getHours();
                        return hours < 12 ? "Good morning" : "Good afternoon"; 
                    })()
                }
            </p>
        </div>
    )
}

const jsxElement1 = <p>Hello JSX</p>
const jsxElement2 = (
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </ul>
)

console.log(jsxElement1);
console.log(jsxElement2);

function JsxElement() {
    return (
        <div className={styles.card}>
            {jsxElement1}
            {jsxElement2}
            {<p>JSX Expression</p>}
        </div>
    )
}

export { HelloJsx }