function ExpressionArray() {
    const colors = ["red", "blue", "green"];
    const numbers = [1, 2, 3, 4, 5];
    const user = {
        name: "Jane",
        email: "jane@example.com",
        age: 30
    };

    return (
        <div>
            <p>User: {user.name}, {user.age}</p>
            <p>Color 1st: {colors[0]}</p>
            <p>Color count: {colors.length}</p>

            <p>Numbers all: {numbers.join(", ")}</p>
            <p>Numbers even: {numbers.filter(n => n%2 === 0).join(", ")}</p>
            <p>Numbers time: {numbers.map(n => n*2).join(", ")}</p>
        </div>
    )
}

export default ExpressionArray