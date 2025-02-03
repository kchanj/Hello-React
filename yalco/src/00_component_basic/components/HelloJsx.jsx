import styles from '../../Card.module.css'

const HelloJsx = () => {
    return (
        <>
            <h2>JSX 표현식: 문자, 숫자, 논리</h2>
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

/** JSX 표현식: 문자, 숫자, 논리 */
const JsxBasic = () => {

    const name = "John";
    const age = 25;
    const isAdmin = true;

    return (
        <div className={styles.card}>
            <p>문자: {name}</p>
            <p>숫자: {age + 1}</p>
            <p>논리: {isAdmin}</p>
            <p>논리(변환): {String(isAdmin)}</p>
            <p>{name +"'s Profile"}</p>
            <p>Template literal: {`${name} is ${age} years old`}</p>
        </div>
    )
}

/** JSX 표현식: 배열, 객체 */
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

/** JSX 표현식: 함수 */
const JsxFunction = () => {

    const items = [{id: 1, price: 10}, {id: 2, price: 20}, {id: 3, price: 30}];
    const getHello = (name) => `Hello ${name}`;
    const getDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    const getTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

    return (
        <div className={styles.card}>
            <p>문자 반환: {getHello("Alice")}</p>
            <p>문자 반환: {getDate(new Date())}</p>
            <p>숫자 반환: {getTotal(items)}</p>
            <p>익명 함수:
                {
                    (() => {
                        const hours = new Date().getHours();
                        return hours < 12 ? " Good morning" : " Good afternoon"; 
                    })()
                }
            </p>
        </div>
    )
}

/** JSX 표현식: jsx element */
const jsxElement1 = <p>Hello JSX</p>
const jsxElement2 = (
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </ul>
)

console.log("JSX 표현식: jsx element", jsxElement1);
console.log("JSX 표현식: jsx element", jsxElement2);

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