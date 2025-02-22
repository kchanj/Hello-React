import styles from '../../Card.module.css'

const SimpleTextBox = () => {

    const handleEvent = (e) => {
        //console.log(`[Event]`, e);
        console.log(`[Event] TYPE: ${e.type}, KEY: ${e.key}, VALUE: ${e.target.value}`);
    }

    return (
        <div className={styles.card}>
            <input type='text' onFocus={(e) => handleEvent(e)}
                               onBlur={(e) => handleEvent(e)}
                               onChange={(e) => handleEvent(e)}
                               onKeyDown={(e) => handleEvent(e)}
                               onKeyUp={(e) => handleEvent(e)}/>
        </div>
    )
}

export default SimpleTextBox;