import { useContext } from 'react';
import styles from '../../Card.module.css'
import { CountContext } from '../hook_context/CountContext';

const ContextChangeSub1 = () => {

    const {count} = useContext(CountContext);

    console.log(`[ContextChangeSub1] render`);

    return (
        <div>
            <p>Count : {count}</p>
        </div>
    )
}

export default ContextChangeSub1;