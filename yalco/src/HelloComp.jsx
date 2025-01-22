import { Component } from "react"

/** 함수로 선언한 컴포넌트 */
function HelloFuncComp() {
    return (
        <p>Function Component</p>
    )
}

/** 화살표로 선언한 컴포넌트 */
const HelloArrowComp = () => {
    return (
        <p>Arrow Component</p>
    )
}

/** 클래스로 선언한 컴포넌트 */
class HelloClassComp extends Component {
    render() {
        return <p>Class Component</p>
    }
}

export { HelloFuncComp, HelloArrowComp, HelloClassComp }