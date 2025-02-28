import { useEffect, useMemo, useState } from 'react';
import { createTotos, filterTodos } from './todoListUtils'
import styles from '../../Card.module.css'

const TodoList = ({tab, theme = 'red'}) => {

    const [todos, setTodos] = useState([]);

    console.log(`------------------------------------------------------------`);
    console.log(`[TodoList] render`);

    useEffect(() => {
        const _todos = createTotos();
        setTodos(_todos);
    }, []);

    const filteredTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

    return (
        <div className={styles.content} style={{color: theme}}>
            <ul>
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    { todo.completed ? <s>{todo.text}</s> : todo.text }
                </li>
            ))}
            </ul>
        </div>
    )
}

export default TodoList;