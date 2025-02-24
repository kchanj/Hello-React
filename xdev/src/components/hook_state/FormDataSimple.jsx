import { useState } from "react"
import styles from '../../Card.module.css'

const FormDataSimple = () => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('user');
    const [subscribed, setSubscribed] = useState(true);

    const roles = ['admin', 'user', 'guest'];

    return (
        <div className={styles.card}>
            <h3>User Form</h3>
            <form>
                <p>Name: {name}</p>
                <p>Role: {role}</p>
                <p>{subscribed ? 'Subscribed' : 'Non Subscribed'}</p>

                <div className={styles.content}>
                    <input type='text'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="User Name"
                           style={{width: '100px'}} />
                    <br/>
                    <select value={role}
                            onChange={(e) => setRole(e.target.value)}
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
                               checked={subscribed}
                               onChange={(e) => setSubscribed(e.target.checked)} />
                        Subscribe
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FormDataSimple