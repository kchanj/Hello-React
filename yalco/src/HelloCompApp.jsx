import { HelloFuncComp, HelloArrowComp, HelloClassComp } from './HelloComp'
/**************************************************
 * 컴포넌트 선언 방식
 **************************************************/

/** 간단한 컴포넌트 */
function HelloComp() {
    return <p>Hello Component</p>
}

/** 간단한 컴포넌트: 리턴 생략 */
const SimpleComp = () => (
    <p>Simple Component</p>
)

function HelloCompApp() {
    return (
        <>
            <h2>간단한 컴포넌트</h2>
            <HelloComp />
            
            <h2>간단한 컴포넌트: 리턴 생략</h2>
            <SimpleComp />
            
            <h2>함수로 선언한 컴포넌트</h2>
            <HelloFuncComp />
            
            <h2>화살표로 선언한 컴포넌트</h2>
            <HelloArrowComp />
            
            <h2>클래스로 선언한 컴포넌트</h2>
            <HelloClassComp />
        </>
    )
  }
  
  export default HelloCompApp
  