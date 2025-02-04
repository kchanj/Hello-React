import styles from '../../Card.module.css'
import { useState } from "react";

const UserProfileManager = () => {

    const users = ['Alice', 'Bob', 'Clark'];
    const [user, setUser] = useState(users[0]);
    const [status, setStatus] = useState(true);

    console.log('Rendered UserManager: ', user, status ? 'Active' : 'Inactive');

    return (
        <>
            <h2>User Profile: 컴포넌트의 리렌더링 조건</h2>
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

    /* 컴포넌트의 리렌더링: state 또는 props의 변경, 상위 컴포넌트의 리렌더링 */
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