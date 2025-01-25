import styles from '../../Card.module.css'

const JsxStyleAttribute = () => {
    return (
        <>
            <h2>JSX 스타일: 기본</h2>
            <SimpleStyle />

            <h2>JSX 스타일: 객체</h2>
            <ObjectStyle />

            <h2>JSX 스타일: 동적</h2>
            <DynamicStyle />
        </>
    )
}

const SimpleStyle = () => {
    return (
        <div className={styles.card}>
            <h2>기본 스타일</h2>
            <span style={
                {
                    fontWeight: "bold",  // font-weight
                    fontStyle: "italic"  // font-style
                }
            }>Bold & Italic</span>
        </div>
    )
}

function ObjectStyle() {

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
        <div className={styles.card}>
            <div style={style1}>DIV 1</div>
            <div style={style2}>DIV 2</div>
            <div style={{
                ...style2,
                backgroundColor: "lightgreen",
                color: "darkblue"
            }}>DIV 3</div>
        </div>
    )
}

const DynamicStyle = () => {

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
        <div className={styles.card}>
            <div style={isPrimary ? styleA : styleB}>This text has dynamic styling.</div>
            <span style={{
                fontSize: isPrimary ? "1.5em" : "1em",
                opacity: isPrimary ? 1 : 0.5
            }}>So does this text.</span>
        </div>
    )
}

export { JsxStyleAttribute }