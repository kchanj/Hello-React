import { useLocation } from 'react-router-dom';
import styles from '../../Card.module.css'

const LocationApp = () => {

    const location = useLocation();

    const querys = new URLSearchParams(location.search);

    console.log(`[LocationApp]`, location);


    return (
        <div className={styles.content}>
            <p>Location App</p>
            <ul>
                <li>pathname: {location.pathname}</li>
                <li>search: {location.search}</li>
                <li>library: {querys.get('library')}</li>
                <li>keyword: {querys.get('keyword')}</li>
            </ul>
        </div>
    )
}

export default LocationApp;