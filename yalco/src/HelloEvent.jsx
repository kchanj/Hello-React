/** 클릭 이벤트 버튼 */
const SimpleClickButton = () => {

    function handleClick() {
        console.log(`Click Event 1`);
    }

    return (
        <>
            <button onClick={handleClick}>
                Simple Click Button 1
            </button>
            <button onClick={() => {console.log(`Click Event 2`)}}>
                Simple Click Button 2
            </button>
        </>
    )
}

/** 클릭 이벤트 버튼: props 사용 */
const MessageClickButton = ({message}) => {

    function handleClick() {
        console.log(message);
    }

    return (
        <>
            <button onClick={handleClick}>
                {message} Click Button
            </button>
        </>
    )
}

/** 여러 이벤트 버튼 */
const MouseEventButton = () => {

    const handleEvent = (which) => {
        console.log(which);
    }

    const handleMouseEnter = () => {
        handleEvent('Mouse Enter')
    }

    return (
        <>
            <button onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => handleEvent('Mouse Leave')}
                    onDoubleClick={() => handleEvent('Double Click')}
                    onContextMenu={() => handleEvent('Context Menu')}>
                Mouse Event Button
            </button>
        </>
    )
}

/** 이벤트의 다양한 정보 */
const ClickEventButton = () => {

    const handleEvent = (event) => {
        console.log("Event", event);
        console.log("clientX", event.clientX);
        console.log("clientY", event.clientY);
        console.log("shiftKey", event.shiftKey);
    }

    return (
        <>
            <button onClick={(e) => handleEvent(e)}>
                Click Event Button
            </button>
        </>
    )
}

/** 포커스 이벤트 */
const FocusEventTextbox = () => (
    <input onFocus={() => console.log('Focus')}
           onBlur={() => console.log('Blur')}
           placeholder="Simple Event Textbox" />
)

/** 체인지 이벤트 */
const ChangeEventTextbox = () => (
    <input onChange={(e) => console.log(e.target.value)}
           placeholder="Change Event Textbox" />
)

/** 키보드 이벤트 */
const KeyEventTextbox = () => (
    <input onKeyDown={(e) => {
                    console.log(e.key, 'Key Down');
                    if(e.key === 'Enter' && e.shiftKey) {
                        console.log('Shift + Enter Down')
                    }
                }
           }
           onKeyUp={(e) => console.log(e.key, 'Key Up')}
           placeholder="Key Event Textbox" />
)

export {
    SimpleClickButton,
    MessageClickButton,
    MouseEventButton,
    ClickEventButton,
    FocusEventTextbox,
    ChangeEventTextbox,
    KeyEventTextbox
}