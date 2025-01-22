function TagStyle() {
    return (
        <>
            <h3>기본 스타일</h3>
            <span style={
                {
                    fontWeight: "bold",  // font-weight
                    fontStyle: "italic"  // font-style
                }
            }>Bold & Italic</span>
            <hr/>

            <h3>객채 스타일</h3>
            <StyleObject/>
            <hr/>
            
            <h3>다이나믹 스타일</h3>
            <StyleDynamic/>
            <hr/>
        </>
    )
}

function StyleObject() {
    const style1 = {
        backgroundColor: "lightblue",
        margin: "12px",
        padding: "20px",
        borderRadius: "8px"
    }

    const style2 = {
        ...style1,
        fontWeight: "bold"
    }

    return (
        <>
            <div style={style1}>DIV 1</div>
            <div style={style2}>DIV 2</div>
            <div style={{
                ...style2,
                backgroundColor: "lightgreen",
                color: "darkblue"
            }}>DIV 3</div>
        </>
    )
}

function StyleDynamic() {
    const styleA = {
        color: "darkred",
        fontWeight: "bold"
    }

    const styleB = {
        color: "navy",
        textDecoration: "underline"
    }

    const isPrimary = true;

    return (
        <>
            <div style={isPrimary ? styleA : styleB}>This text has dynamic styling.</div>
            <span style={{
                fontSize: isPrimary ? "1.5em" : "1em",
                opacity: isPrimary ? 1 : 0.5
            }}>So does this text.</span>
        </>
    )
}

export default TagStyle