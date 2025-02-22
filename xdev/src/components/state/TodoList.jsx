import { useState } from 'react';
import styles from '../../Card.module.css'

const TodoList = () => {

    const [todos, setTodos] = useState(['Learn Node', 'Learn React', 'Learn Vuejs']);
    const [task, setTask] = useState('');

    const delTodo = (idx) => {
        setTodos(todos => todos.filter((e, i) => i != idx));
    }

    const addTodo = () => {
        setTodos(todos => [...todos, task]);
        setTask('');
    }

    return (
        <div className={styles.card}>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>
                        {todo}
                        <button onClick={() => delTodo(idx)}>Del Task</button>
                    </li>
                ))}
            </ul>
            <input type='text' value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={addTodo}>Add Task</button>
        </div>
    )
}

export default TodoList;