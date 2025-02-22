import styles from '../../Card.module.css'

const SimpleButton = () => {

    const handleClick = () => {
        console.log(`Click Button 1`)
    }

    return (
        <div className={styles.card}>
            <button onClick={handleClick}>Button 1</button>
            <button onClick={() => console.log(`Click Button 2`)}>Button 2</button>
        </div>
    )
}

export default SimpleButton;