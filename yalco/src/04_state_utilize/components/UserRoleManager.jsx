import styles from '../../Card.module.css'
import { useState } from "react";

const UserRoleManager = () => {

    const roles = ['user', 'admin', 'guest'];
    const [formData, setFormData] = useState({
        username: '',
        subscribed: false,
        role: 'user'
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newFormData = {
            ...formData,
            [name]: (type === 'checkbox' ? checked : value)
        }

        setFormData(newFormData);
    };

    return (
        <div className={styles.card}>
            <h2>User Role</h2>
            <form>
                <p>Name: {formData.username}</p>
                <p>Subscription: {formData.subscribed && 'Subscribed'}</p>
                <p>Role: {formData.role}</p>
                <hr/>
                <input type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)} />
                <br/>
                <label>
                    <input type="checkbox"
                        name="subscribed"
                        checked={formData.subscribed}
                        onChange={(e) => handleChange(e)} />
                    Subscription
                </label>
                <br/>
                <select name="role"
                        value={formData.role}
                        onChange={(e) => handleChange(e)}>
                    { roles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                    )) }
                </select>
            </form>
        </div>
    )
}

export { UserRoleManager }