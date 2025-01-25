import styles from '../../Card.module.css'

const HighOrderComponent = () => {
    return (
        <>
            <h2>고차 컴포넌트: 컴포넌트를 리턴</h2>
            <MyFoot owner="Meta Platforms, Inc" message="All Rights Reserved."/>

            <h2>고차 컴포넌트: 컴포넌트를 인자</h2>
            <MyBody owner="Meta Platforms, Inc" message="All Rights Reserved." disabled={true}/>
        </>
    )
}

/** 고차 컴포넌트: 컴포넌트를 리턴 */
const MyFoot = makeFoot();
function makeFoot() {
    const comp = ({owner, message}) => {
        return (
            <div>
                { owner && <p><strong>Copyright ⓒ</strong> {owner}</p> }
                { message && <p>{message}</p> }
            </div>
        )
    }

    return comp
}

/** 고차 컴포넌트: 컴포넌트를 인자 */
const MyBody = makeBody(MyFoot);
function makeBody(ArgsComp) {
    const comp = ({disabled, ...props}) => {
        return (
            <div className={styles.card} style={{opacity: disabled ? 0.5 : 1}}>
                <ArgsComp {...props}/>
            </div>
        )
    }

    return comp;
}

export { HighOrderComponent }