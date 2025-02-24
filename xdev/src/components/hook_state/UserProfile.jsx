import { useState } from 'react';
import styles from '../../Card.module.css'

const UserProfile = ({name, email, phone}) => {

    const [working, setWorking] = useState(true);

    console.log(`[UserProfile   ] render`);

    return (
        <div className={styles.content}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Working: {working ? 'y' : 'n'}</p>
            <button onClick={() => setWorking(p => !p)}>{working ? '업무중' : '휴직중'}</button>
        </div>
    )
}

export default UserProfile;