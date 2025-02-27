import styles from '../../Card.module.css'
import ContextChangeSub1 from './ContextChangeSub1';
import ContextChangeSub2 from './ContextChangeSub2';
import ContextChangeSub3 from './ContextChangeSub3';

const ContextChangeMst = () => {

    console.log(`[ContextChangeMst] render`);

    return (
        <div className={styles.card}>
            <p>ContextChangeMst</p>
            <ContextChangeSub1 />
            <ContextChangeSub2 />
            <ContextChangeSub3 />
        </div>
    )
}

export default ContextChangeMst;