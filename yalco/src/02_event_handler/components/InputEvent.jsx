import styles from '../../Card.module.css'

const InputEvent = () => {
    return (
        <>
            <h2>이벤트 핸들러: onFocus, onBlur</h2>
            <FocusInputText />

            <h2>이벤트 핸들러: onChange</h2>
            <ChangeInputText />

            <h2>이벤트 핸들러: onKeyDown, onKeyUp</h2>
            <KeybordInputText />
        </>
    )
}

/** 이벤트 핸들러: onFocus, onBlur */
const FocusInputText = () => (
    <div className={styles.card}>
        <input type="text"
            onFocus={() => console.log('이벤트 핸들러: onFocus', 'Focus')}
            onBlur={() => console.log('이벤트 핸들러: onBlur', 'Blur')}
            placeholder="Focus Event" />
    </div>
)

/** 이벤트 핸들러: onChange */
const ChangeInputText = () => (
    <div className={styles.card}>
        <input type="text"
            onChange={(e) => console.log('이벤트 핸들러: onChange', e.target.value)}
            placeholder="Change Event" />
    </div>
)

/** 이벤트 핸들러: onKeyDown, onKeyUp */
const KeybordInputText = () => (
    <div className={styles.card}>
        <input type="text"
            onKeyDown={(e) => {
                        console.log('이벤트 핸들러: onKeyDown', e.key);
                        if(e.key === 'Enter' && e.shiftKey) {
                            console.log('Shift + Enter Down')
                        }
                    }
            }
            onKeyUp={(e) => console.log('이벤트 핸들러: onKeyUp', e.key)}
            placeholder="Keyboard Event" />
    </div>
)

export { InputEvent }