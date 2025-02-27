import { useContext } from 'react';
import styles from '../../Card.module.css'
import { CountContext } from '../hook_context/CountContext';

const ContextChangeSub3 = () => {

    const {sub} = useContext(CountContext);

    console.log(`[ContextChangeSub3] render`);

    return (
        <div>
            <button onClick={sub}>-1</button>
        </div>
    )
}

export default ContextChangeSub3;