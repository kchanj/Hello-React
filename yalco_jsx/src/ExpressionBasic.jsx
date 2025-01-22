function ExpressionBasic() {
    const name = "John";
    const age = 25;
    const isAdmin = true;

    return (
        <div>
            <p>Name: {name}</p> {/* 문자 */}
            <p>Age: {age + 1}</p> {/* 숫자 */}
            <p>Admin: {isAdmin}</p> {/* 논리 */}
            <p>Admin: {String(isAdmin)}</p> {/* 문자 */}
            <p>{name +"'s Profile"}</p>
            <p>{`${name} is ${age} years old`}</p>
        </div>
    )
}

export default ExpressionBasic