import styles from '../../Card.module.css'

const ButtonEvent = () => {
    return (
        <>
            <h2>Click Event</h2>
            <SimpleClickButton />
            <MessageClickButton message="Hello" />

            <h2>Mouse Event</h2>
            <MouseEventButton />

            <h2>Event Object</h2>
            <EventObjectButton />
        </>
    )
}

const SimpleClickButton = () => {

    function handleClick() {
        console.log(`Click Event 1`);
    }

    return (
        <div className={styles.card}>
            <button onClick={handleClick}>
                Simple Click Button 1
            </button>
            <button onClick={() => {console.log(`Click Event 2`)}}>
                Simple Click Button 2
            </button>
        </div>
    )
}

const MessageClickButton = ({message}) => {

    function handleClick() {
        console.log(message);
    }

    return (
        <div className={styles.card}>
            <button onClick={handleClick}>
                {message} Click Button
            </button>
        </div>
    )
}

const MouseEventButton = () => {

    const handleEvent = (which) => {
        console.log(which);
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

const EventObjectButton = () => {

    const handleEvent = (event) => {
        console.log("event", event);
        console.log("event.target", event.target);
        console.log("event.clientX", event.clientX);
        console.log("event.clientY", event.clientY);
        console.log("event.shiftKey", event.shiftKey);
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