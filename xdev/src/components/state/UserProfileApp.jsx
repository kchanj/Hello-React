import UserProfile from "./UserProfile"
import users from "../../resources/users"
import { useState } from "react"
import styles from '../../Card.module.css'

const UserProfileApp = () => {

    const [locked, setLocked] = useState(false);

    const [user, setUser] = useState(users[0]);

    const rollUser = () => {
        const nextUser = users[(users.indexOf(user) + 1) % users.length];
        setUser(nextUser);
    }

    console.log(`[UserProfileApp] render`);

    return (
        <div className={styles.card}>
            <h3>User Profile</h3>
            <button onClick={() => setLocked(p => !p)}>{ locked ? 'Locked' : 'Unlocked'}</button>
            <button onClick={rollUser}>Switch User</button>
            <div style={{opacity: locked ? 0.5 : 1}}>
                <UserProfile {...user} />
            </div>
        </div>
    )
}

export default UserProfileApp;