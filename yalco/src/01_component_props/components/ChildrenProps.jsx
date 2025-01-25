import styles from '../../Card.module.css'

const ChildrenProps = () => {
    return (
        <>
            <h2>컴포넌트의 Props 전달: children</h2>
            <ChildrenPropsBook
                title="Props in React"
                content="Props pass data from one component to another"
                author="Alice">
                    <Contact email="help@example.com" phone="010-1234-5678" />
            </ChildrenPropsBook>
            <ChildrenPropsBook
                title="React Composition"
                content="Composition makes your components more reusable"
                author="Chalie">
                    <Contact email="help@example.com" phone="010-1234-5678" address="Seoul" />
            </ChildrenPropsBook>
        </>
    )
}

const ChildrenPropsBook = ({title, content, author, children}) => {
    console.log("ChildrenPropsBook", children);
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Author: {author}</p>
            <div>
                {children}
            </div>
        </div>
    )
}

const Contact = ({email, phone, address}) => {
    return (
        <div>
            { email && <p><strong>{email}</strong></p> }
            { phone && <p><strong>{phone}</strong></p> }
            { address && <p><strong>{address}</strong></p> }
        </div>
    )
}

export { ChildrenProps }