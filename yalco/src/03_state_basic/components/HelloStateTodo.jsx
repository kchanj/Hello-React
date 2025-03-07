import styles from '../../Card.module.css'
import { useState } from "react";

const HelloStateTodo = () => {
    return (
        <>
            <h2>useState 기본: Todo List</h2>
            <TodoListManager />
        </>
    )
}

const TodoListManager = () => {

    const [todoList, setTodoList]
        = useState(["Learn React", "Build a project"]);

    const [newTodo, setNewTodo]
        = useState("");

    const delTodoList = (index) => {
        setTodoList(
            todoList.filter((e, i) => i !== index)
        );
    }

    const addTodoList = () => {
        if(!newTodo) {
            return;
        }

        setTodoList(
            [...todoList, newTodo]
        );
        setNewTodo("");
    }

    return (
        <div className={styles.card}>
            <p>Typing : {newTodo}</p>
            <input type="text"
                   value={newTodo}
                   onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodoList}>Add Todo</button>

            <h3>Toto</h3>
            <ul>
                {
                    todoList.map((todo, index) => {
                        return (
                            <li key={index}>
                                {todo}
                                <button onClick={() => delTodoList(index)}>Delete</button>
                            </li>
                        )
                    }) 
                }
            </ul>
        </div>
    )
}

export { HelloStateTodo };