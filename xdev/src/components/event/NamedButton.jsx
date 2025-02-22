const NamedButton = ({name}) => {

    const handleEvent = (name, which) => {
        console.log(`[${name}] ${which}`);
    }

    return (
        <button onClick={() => handleEvent(name, 'Mouse Click')}
                onMouseEnter={() => handleEvent(name, 'Mouse Enter')}
                onMouseLeave={() => handleEvent(name, 'Mouse Leave')}
                onDoubleClick={() => handleEvent(name, 'Double Click')}
                onContextMenu={() => handleEvent(name, 'Context Menu')}
        >{name}</button>
    )
}

export default NamedButton;