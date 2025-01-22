import styles from './Card.module.css'

/** Simple Card */
function SimpleInfoCard() {
    return (
        <div className={styles.card}>
            <h2>Hello React</h2>
            <p>The library for web and native user interfaces</p>
            <p>Author: Meta Platforms, Inc</p>
        </div>
    )
}

/** props 객체 인자 */
function PropsInfoCard(props) {
    console.log("PropsInfoCard", props);

    return (
        <div className={styles.card}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>Author: {props.author}</p>
        </div>
    )
}

/** props 객체의 구조분해 */
function DestructInfoCard({title, content, author}) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Author: {author}</p>
        </div>
    )
}

/** props 객체의 구조분해(Default) */
const DefaultInfoCard = ({title="(No title)", content, author="Anonymous"}) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Author: {author}</p>
        </div>
    )
}

/** props 객체의 함수전달 */
const PriceInfoCard = ({title, content, price, formatPrice}) => {
    const _price = formatPrice(price);

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Price : {_price}</p>
        </div>
    )
}

/** Children 속성 활용 */
const ChildrenCard = ({title, children}) => {
    console.log("ChildrenCard", children);

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

/** Higher Order Compoment */
function makeHocSimpleCard() {
    return function HocSimpleCard({disabled}) {
        return (
            <div style={{opacity: disabled ? 0.5 : 1}}>
                <div className={styles.card}>
                    <h2>Hello React</h2>
                    <p>The library for web and native user interfaces</p>
                    <p>Author: Meta Platforms, Inc</p>
                </div>
            </div>
        )
    }
}

function makeHocWrappedCard(WrappedComp) {
    return function HocWrappedCard({disabled, ...props}) {
        return (
            <div style={{opacity: disabled ? 0.5 : 1}}>
                <WrappedComp {...props}/>
            </div>
        )
    }
}

export {
    SimpleInfoCard,
    PropsInfoCard,
    DestructInfoCard,
    DefaultInfoCard,
    PriceInfoCard,
    ChildrenCard,
    makeHocSimpleCard,
    makeHocWrappedCard
}