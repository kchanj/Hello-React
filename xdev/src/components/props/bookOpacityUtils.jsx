const createBookOpacity = (Comp) => {

    const BookOpacity = ({
        available,
        ...props
    }) => {
        return (
            <div style={{opacity: available ? 1 : 0.5}}>
                <Comp {...props} />
            </div>
        )
    }

    return BookOpacity;
}

export {createBookOpacity}