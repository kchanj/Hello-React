import { useContext } from 'react';
import styles from '../../Card.module.css'
import { CountContext } from '../hook_context/CountContext';

const ContextChangeSub2 = () => {

    const {add} = useContext(CountContext);

    console.log(`[ContextChangeSub2] render`);

    return (
        <div>
            <button onClick={add}>+1</button>
        </div>
    )
}

export default ContextChangeSub2;