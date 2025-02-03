import styles from '../../Card.module.css'
import { useState } from "react";

const UserRoleManager = () => {

    const [formData, setFormData] = useState({
        username: '',
        subscribed: false,
        role: 'user'
    });

    const handleChange = (e) => {
        const {name, type, value, checked} = e.target;
        const _formData = {
            ...formData,
            [name]: (type === 'checkbox' ? checked : value) // Computed properties
        }

        setFormData(_formData);
    };

    return (
        <>
            <h2>User Role: 객체 state</h2>
            <div className={styles.card}>
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