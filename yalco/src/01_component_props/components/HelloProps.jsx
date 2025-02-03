import styles from '../../Card.module.css'

const cobal = {
    title: "Hello Cobal",
    content: "Cobal Basic",
    author: "Choi"
}

const books = [{
    idx: 0,
    title: "Hello VB",
    content: "Visual Basic",
    author: "Kim"
}, {
    idx: 1,
    title: "Hello Java",
    content: "Java Basic",
    author: "Lee"
}, {
    idx: 2,
    title: "Hello Python",
    content: "Python Basic",
    author: "Park"
}];

const HelloProps = () => {
    return (
        <>
            <h2>컴포넌트의 Props 인자: N/A</h2>
            <NoPropsBook />

            <h2>컴포넌트의 Props 인자: 객체</h2>
            <ObjectPropsBook
                title="Props in React"
                content="Props pass data from one component to another"
                author="Alice"/>

            <h2>컴포넌트의 Props 인자: 구조분해할당</h2>
            <DestructuringPropsBook
                title="Props in React"
                content="Props pass data from one component to another"
                author="Alice"/>

            <h2>컴포넌트의 Props 인자: 디폴트</h2>
            <DefaultPropsBook
                content="Props pass data from one component to another"
                author="Alice"/>

            <h2>컴포넌트의 Props 파라미터: 전개구분</h2>
            <DefaultPropsBook {...cobal}/>

            <h2>컴포넌트의 Props 파라미터: 리스트 랜더링</h2>
            { books.map((book, index) => (
                <DefaultPropsBook key={index} {...book}/>
            )) }

            <h2>컴포넌트의 Props 파라미터: 함수</h2>
            <FunctionPropsBook
                title="Props in React"
                content="Props pass data from one component to another"
                author="Alice"
                price={123.456}
                format={(p) => p.toFixed(2)}/>
            <FunctionPropsBook
                {...cobal}
                price={123.456}
                format={(p) => `$${p.toFixed(2)}`} />
        </>
    )
}

/** 컴포넌트의 Props 인자: N/A */
const NoPropsBook = () =>  {
    return (
        <div className={styles.card}>
            <h3>Hello React</h3>
            <p>The library for web and native user interfaces</p>
            <p>Author: Meta Platforms, Inc</p>
        </div>
    )
}

/** 컴포넌트의 Props 인자: 객체 */
const ObjectPropsBook = (props) => {
    console.log("SimplePropsBook", props);
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>Author: {props.author}</p>
        </div>
    )
}

/** 컴포넌트의 Props 인자: 구조분해할당 */
const DestructuringPropsBook = ({title, content, author}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Author: {author}</p>
        </div>
    )
}

/** 컴포넌트의 Props 인자: 디폴트 */
const DefaultPropsBook = ({title="(No title)", content, author="Anonymous"}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Author: {author}</p>
        </div>
    )
}

/** 컴포넌트의 Props 파라미터: 함수 */
const FunctionPropsBook = ({title, content, author, price, format}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Author: {author}</p>
            <p>Price: {format(price)}</p>
        </div>
    )
}

export { HelloProps }