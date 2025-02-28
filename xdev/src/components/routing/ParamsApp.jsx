import { useParams } from 'react-router-dom';
import styles from '../../Card.module.css'

const ParamsApp = () => {

    const params = useParams();

    console.log(`[ParamsApp]`, params);

    return (
        <div className={styles.content}>
            <p>Params App</p>
            <ul>
                <li>lang: {params.lang}</li>
            </ul>
        </div>
    )
}

export default ParamsApp;