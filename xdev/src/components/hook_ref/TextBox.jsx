import { useRef } from 'react';
import styles from '../../Card.module.css';

const TextBox = () => {

    const email = useRef('');

    const handleClick = () => {
        console.log(`[TextBox] email.current:`, email.current);
        console.log(`[TextBox] email.current.type:`, email.current.type);
        console.log(`[TextBox] email.current.name:`, email.current.name);
        console.log(`[TextBox] email.current.value:`, email.current.value);
        email.current.focus();
    }

    return (
        <div className={styles.card}>
            <input type='text'
                   ref={email}
                   name='email'
                   placeholder='Type...' />
            <button onClick={handleClick}>Focus Email</button>
        </div>
    )
}

export default TextBox;