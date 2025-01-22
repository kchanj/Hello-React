function ExpressionFunction() {
    const items = [{id: 1, price: 10}, {id: 2, price: 20}, {id: 3, price: 30}];

    const getGreeting = (name) => `Hello ${name}`;
    const getDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    const sumTotal = (items) => {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

    return (
        <div>
            <p>{getGreeting("Alice")}</p>
            <p>Today: {getDate(new Date())}</p>
            <p>Total: {sumTotal(items)}</p>
            <p>
                {(() => {
                    const hours = new Date().getHours();
                    return hours < 12 ? "Good morning" : "Good afternoon"; 
                        })()}
            </p>
        </div>
    )
}

export default ExpressionFunction