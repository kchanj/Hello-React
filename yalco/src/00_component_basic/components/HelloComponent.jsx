import styles from '../../Card.module.css'
import { Component } from "react"

const HelloComponent = () => {
    return (
        <>
            <h2>컴포넌트 선언: 함수</h2>
            <HelloFuncComp />
            
            <h2>컴포넌트 선언: 화살표 함수</h2>
            <HelloArrowComp />
            
            <h2>컴포넌트 선언: 클래스</h2>
            <HelloClassComp />
        </>
    )
}

/** 함수로 선언한 컴포넌트 */
function HelloFuncComp() {
    return (
        <div className={styles.card}>
            <h2>Function Component</h2>
        </div>
    )
}

/** 화살표로 선언한 컴포넌트 */
const HelloArrowComp = () => {
    return (
        <div className={styles.card}>
            <h2>Arrow Component</h2>
        </div>
    )
}

/** 클래스로 선언한 컴포넌트 */
class HelloClassComp extends Component {
    render() {
        return (
            <div className={styles.card}>
                <h2>Class Component</h2>
            </div>
        )
    }
}

export { HelloComponent }