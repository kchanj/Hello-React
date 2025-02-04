import styles from '../../Card.module.css'
import { useState } from "react";

const UserRoleManager = () => {

    const [user, setUser] = useState({
        username: '',
        subscribed: false,
        role: 'user'
    });

    const handleChange = (e) => {
        console.log('UserRoleManager', e);

        const {name, type, value, checked} = e.target;
        const _user = {
            ...user,
            [name]: (type === 'checkbox' ? checked : value) // Computed properties
        }

        setUser(_user);
    };

    return (
        <>
            <h2>User Role: 객체 state</h2>
            <div className={styles.card}>
                <form>
                    <p>Name: {user.username}</p>
                    <p>Subscription: {user.subscribed && 'Subscribed'}</p>
                    <p>Role: {user.role}</p>
                    <hr/>
                    <input type="text"
                        name="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => handleChange(e)} />
                    <br/>
                    <label>
                        <input type="checkbox"
                            name="subscribed"
                            checked={user.subscribed}
                            onChange={(e) => handleChange(e)} />
                        Subscription
                    </label>
                    <br/>
                    <select name="role"
                            value={user.role}
                            onChange={(e) => handleChange(e)}>
                        { ['user', 'admin', 'guest'].map((role) => (
                            <option key={role} value={role}>{role}</option>
                        )) }
                    </select>
                </form>
            </div>
        </>
    )
}

export { UserRoleManager }