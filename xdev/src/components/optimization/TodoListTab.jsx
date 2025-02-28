import TodoList from "./TodoList";
import styles from '../../Card.module.css';
import { useState } from "react";

const TodoListTab = () => {

    const [tab, setTab] = useState('ALL');
    const [theme, setTheme] = useState('black');

    return (
        <div className={styles.card}>
            <button onClick={() => setTab('ALL')}>ALL</button>
            <button onClick={() => setTab('ACT')}>ACTIVE</button>
            <button onClick={() => setTab('CMP')}>COMPLETED</button>
            <br/>
            <label>
                <input type="radio" name='color' value='black'
                    checked={theme === 'black'}
                    onChange={e => setTheme(e.target.value)} />
                    Black
            </label>
            <label>
                <input type="radio" name='color' value='red'
                    checked={theme === 'red'}
                    onChange={e => setTheme(e.target.value)} />
                    Red
            </label>
            <label>
                <input type="radio" name='color' value='green'
                    checked={theme === 'green'}
                    onChange={e => setTheme(e.target.value)} />
                    Green
            </label>
            <label>
                <input type="radio" name='color' value='blue'
                    checked={theme === 'blue'}
                    onChange={e => setTheme(e.target.value)} />
                    Blue
            </label>
            <TodoList tab={tab} theme={theme}/>
        </div>
    )
}

export default TodoListTab;