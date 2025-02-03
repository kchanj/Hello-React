import styles from '../../Card.module.css'
import { Component } from "react"

const HelloComponent = () => {
    return (
        <>
            <h2>컴포넌트 선언: 일반 함수</h2>
            <HelloFuncComp />
            
            <h2>컴포넌트 선언: 화살표 함수</h2>
            <HelloArrowComp />
            
            <h2>컴포넌트 선언: 클래스</h2>
            <HelloClassComp />
        </>
    )
}

/** 컴포넌트 선언: 함수 */
function HelloFuncComp() {
    return (
        <div className={styles.card}>
            <h3>Function Component</h3>
        </div>
    )
}

/** 컴포넌트 선언: 화살표 함수 */
const HelloArrowComp = () => {
    return (
        <div className={styles.card}>
            <h3>Arrow Component</h3>
        </div>
    )
}

/** 컴포넌트 선언: 클래스 */
class HelloClassComp extends Component {
    render() {
        return (
            <div className={styles.card}>
                <h3>Class Component</h3>
            </div>
        )
    }
}

export { HelloComponent }