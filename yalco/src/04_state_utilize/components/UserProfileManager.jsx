import styles from '../../Card.module.css'
import { useState } from "react";

const UserProfileManager = () => {

    const users = ['Alice', 'Bob', 'Clark'];
    const [user, setUser] = useState(users[0]);
    const [status, setStatus] = useState(true);

    console.log('Rendered UserManager: ', user, status ? 'Active' : 'Inactive');

    return (
        <>
            <h2>User Profile: 상위/하위 컴포넌트 리렌더링</h2>
            <div className={styles.card}>
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
                <button onClick={() => setStatus((prev) => !prev)}>
                    Toggle Active/Inactive
                </button>
                <p>
                    {status ? 'Active' : 'Inactive'}
                </p>

                {/* user를 하위 컴포넌트로 전달 */}
                <UserProfile name={user} />
            </div>
        </>
    )
}

const UserProfile = ({name}) => {

    const [status, setStatus] = useState(true);

    /* 상위가 리렌더링되면 하위도 리렌더링, 하위가 리렌더링되면 상위는 영향없음 */
    console.log('Rendered UserProfile: ', name, status ? 'Enable' : 'Disable');

    return (
        <div className="user-profile">
            <h3>{name}</h3>
            <p>{status ? 'Enable' : 'Disable'}</p>
            <button onClick={() => setStatus((prev) => !prev)}>
                Toggle Enable/Disable
            </button>
        </div>
    )
}

export { UserProfileManager }