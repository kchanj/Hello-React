import styles from '../../Card.module.css'

const HighOrderComponent = () => {
    return (
        <>
            <h2>고차 컴포넌트: 컴포넌트를 리턴하는 HOC</h2>
            <div className={styles.card}>
            <MyFoot owner="Meta Platforms, Inc" message="All Rights Reserved."/>
            </div>

            <h2>고차 컴포넌트: 컴포넌트를 인자로 받는 HOC</h2>
            <MyBody owner="Meta Platforms, Inc" message="All Rights Reserved." content="고차 컴포넌트" disabled={true}/>
        </>
    )
}

/** 고차 컴포넌트: 컴포넌트를 리턴하는 HOC */
const MyFoot = makeFoot();
function makeFoot() {
    const foot = ({owner, message}) => {
        return (
            <span>
                { owner && <p><strong>Copyright ⓒ</strong> {owner}</p> }
                { message && <p>{message}</p> }
            </span>
        )
    }

    return foot
}

/** 고차 컴포넌트: 컴포넌트를 인자로 받는 HOC */
const MyBody = makeBody(MyFoot);
function makeBody(Comp) {
    const body = ({content, disabled, ...props}) => {
        return (
            <div className={styles.card}>
                <h3>{content}</h3>
                <div style={{opacity: disabled ? 0.5 : 1}}>
                    <Comp {...props}/>
                </div>
            </div>
        )
    }

    return body;
}

export { HighOrderComponent }