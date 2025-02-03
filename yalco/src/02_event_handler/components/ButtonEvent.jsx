import styles from '../../Card.module.css'

const ButtonEvent = () => {
    return (
        <>
            <h2>이벤트 핸들러: onClick</h2>
            <SimpleClickButton />

            <h2>이벤트 핸들러: onClick</h2>
            <MessageClickButton message="Hello" />

            <h2>이벤트 핸들러: 마우스</h2>
            <MouseEventButton />

            <h2>이벤트 핸들러: event 객체</h2>
            <EventObjectButton />
        </>
    )
}

/** 이벤트 핸들러: onClick */
const SimpleClickButton = () => {

    function handleClick() {
        console.log('이벤트 핸들러: 클릭', `Click Event 1`);
    }

    return (
        <div className={styles.card}>
            <button onClick={handleClick}>
                Simple Click Button 1
            </button>
            <button onClick={() => {console.log('이벤트 핸들러: 클릭 기본', `Click Event 2`)}}>
                Simple Click Button 2
            </button>
        </div>
    )
}

/** 이벤트 핸들러: onClick */
const MessageClickButton = ({message}) => {

    function handleClick() {
        console.log('이벤트 핸들러: 클릭', message);
    }

    return (
        <div className={styles.card}>
            <button onClick={handleClick}>
                {message} Click Button
            </button>
        </div>
    )
}

/** 이벤트 핸들러: 마우스 */
const MouseEventButton = () => {

    const handleEvent = (which) => {
        console.log('이벤트 핸들러: 마우스', which);
    }

    return (
        <div className={styles.card}>
            <button onMouseEnter={() => handleEvent('Mouse Enter')}
                    onMouseLeave={() => handleEvent('Mouse Leave')}
                    onDoubleClick={() => handleEvent('Double Click')}
                    onContextMenu={() => handleEvent('Context Menu')}>
                Mouse Enter, Leave, Double Click, Context Menu
            </button>
        </div>
    )
}

/** 이벤트 핸들러: event 객체 */
const EventObjectButton = () => {

    const handleEvent = (event) => {
        console.log("이벤트 핸들러: event 객체", event);
        console.log("이벤트 핸들러: event 객체 target", event.target);
        console.log("이벤트 핸들러: event 객체 clientX", event.clientX);
        console.log("이벤트 핸들러: event 객체 clientY", event.clientY);
        console.log("이벤트 핸들러: event 객체 shiftKey", event.shiftKey);
    }

    return (
        <div className={styles.card}>
            <button onClick={(e) => handleEvent(e)}>
                Click Event Button
            </button>
        </div>
    )
}

export { ButtonEvent }