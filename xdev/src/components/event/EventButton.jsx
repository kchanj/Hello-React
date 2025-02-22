const EventButton = ({name}) => {

    const handleEvent = (name, e) => {
        console.log(`[${name}]`, e);
        console.log(`[${name}] (x, y) = (${e.clientX}, ${e.clientY})`);
        console.log(`[${name}] shiftKey = ${e.shiftKey}`);
    }

    return (
        <button onClick={(e) => handleEvent(name, e)}>{name}</button>
    )
}

export default EventButton;