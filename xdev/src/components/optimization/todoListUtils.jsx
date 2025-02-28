const createTotos = () => {
    console.log(`[TodoList] create todos`);

    const _todos = [];
    for(let i = 0; i < 10; i++) {
        _todos.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });
    }

    return _todos;
}

const filterTodos = (todos, tab) => {
    console.log(`[TodoList] filter todos: ${todos.length}`);

    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
      // 매우 느린 코드를 구현하기 위해 500ms 동안 아무것도 하지 않음.
    }

    const _totos = todos.filter(todo => {
        if(tab === 'ALL') {
            return true;
        } else if(tab === 'ACT') {
            return !todo.completed;
        } else if(tab === 'CMP') {
            return todo.completed;
        }
    });

    return _totos;
}

export { createTotos, filterTodos }