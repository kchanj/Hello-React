import reactLogo from './assets/react.png'

function TagImg() {
    const reactLogoAlt = "React Logo";

    return (
        <>
            <img src={reactLogo}
                 alt={reactLogoAlt}
                 width={256}
                 height={228}
            />
            
        </>
    )
}

export default TagImg