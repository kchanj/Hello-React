import { useState } from "react"
import styles from '../../Card.module.css'

const FormDataObject = () => {

    const [user, setUser] = useState({
        name: '',
        role: 'user',
        subscribed: true
    });

    const roles = ['admin', 'user', 'guest'];

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setUser({
            ...user,
            [name]: (type === 'checkbox' ? checked : value)
        });
    }

    return (
        <div className={styles.card}>
            <h3>User Form</h3>
            <form>
                <p>Name: {user.name}</p>
                <p>Role: {user.role}</p>
                <p>{user.subscribed ? 'Subscribed' : 'Non Subscribed'}</p>

                <div className={styles.content}>
                    <input type='text'
                           name="name"
                           value={user.name}
                           onChange={handleChange}
                           placeholder="User Name"
                           style={{width: '100px'}} />
                    <br/>
                    <select value={user.role}
                            name='role'
                            onChange={handleChange}
                            style={{width: '115px'}} >
                        {roles.map(role => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <label>
                        <input type='checkbox'
                               name='subscribed'
                               checked={user.subscribed}
                               onChange={handleChange} />
                        Subscribe
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FormDataObject