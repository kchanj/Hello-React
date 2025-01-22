// JSX Elements
const element1 = <p>Hello JSX</p>
const element2 = (
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
    </ul>
)

console.log(element1);
console.log(element2);

function ExpressionJsx() {
    return (
        <section>
            {element1}
            {element2}
            {<p>JSX Expression</p>}
        </section>
    )
}

export default ExpressionJsx