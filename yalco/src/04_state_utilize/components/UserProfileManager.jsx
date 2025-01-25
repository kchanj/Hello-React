import styles from '../../Card.module.css'
import { useState } from "react";

const UserProfileManager = () => {

    const users = ['Alice', 'Bob', 'Clark'];
    const [user, setUser] = useState(users[0]);
    const [status, setStatus] = useState(true);

    console.log('Rendered UserProfileManager');

    return (
        <div className={styles.card}>
            <h2>User Profile</h2>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li key={index}>
                                {user}
                            </li>
                        )
                    }) 
                }
            </ul>
            <button onClick={() => setUser(
                users[(users.indexOf(user)+1) % users.length]
            )}>
                Switch User
            </button>
            <button onClick={() => setStatus(!status)}>
                Toggle Status
            </button>
            <p>
                {status ? 'Active' : 'Inactive'}
            </p>

            {/* user를 자식 컴포넌트로 전달 */}
            <UserProfile name={user} />
        </div>
    )
}

const UserProfile = ({name}) => {

    const [status, setStatus] = useState('Available');

    console.log('Rendered UserProfile');

    return (
        <div className="user-profile">
            <h3>{name}</h3>
            <p>{status}</p>
            <button onClick={() => setStatus('Available')}>
                Set Available
            </button>
            <button onClick={() => setStatus('Away')}>
                Set Away
            </button>
        </div>
    )
}

export { UserProfileManager }