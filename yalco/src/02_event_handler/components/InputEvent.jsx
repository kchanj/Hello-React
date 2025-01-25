import styles from '../../Card.module.css'

const InputEvent = () => {
    return (
        <>
            <h2>Focus Event</h2>
            <FocusInputText />

            <h2>Change Event</h2>
            <ChangeInputText />

            <h2>Keyboard Event</h2>
            <KeybordInputText />
        </>
    )
}

const FocusInputText = () => (
    <input type="text"
           onFocus={() => console.log('Focus')}
           onBlur={() => console.log('Blur')}
           placeholder="Focus Event" />
)

const ChangeInputText = () => (
    <input type="text"
           onChange={(e) => console.log(e.target.value)}
           placeholder="Change Event" />
)

const KeybordInputText = () => (
    <input type="text"
           onKeyDown={(e) => {
                    console.log(e.key, 'Key Down');
                    if(e.key === 'Enter' && e.shiftKey) {
                        console.log('Shift + Enter Down')
                    }
                }
           }
           onKeyUp={(e) => console.log(e.key, 'Key Up')}
           placeholder="Keyboard Event" />
)

export { InputEvent }