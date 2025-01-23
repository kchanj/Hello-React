import HelloCompApp from './HelloCompApp'
import HelloPropsApp from './HelloPropsApp'
import HelloEventApp from './HelloEventApp'
import HelloStateApp from './HelloStateApp'
import HelloReducerApp from './HelloReducerApp'
import HelloRefApp from './HelloRefApp'
import HelloLifecycleApp from './HelloLifecycleApp'
import './App.css'

function App() {
  return (
    <>
      <h1>1.컴포넌트 선언</h1>
      {/* <HelloCompApp /> */}

      <h1>2.props: 컴포넌트에 정보를 전달</h1>
      {/* <HelloPropsApp /> */}

      <h1>3.event: 컴포넌트의 이벤트 처리</h1>
      {/* <HelloEventApp /> */}

      <h1>4.state: 컴포넌트의 정보를 저장</h1>
      <HelloStateApp />

      <h1>5.Reducer</h1>
      <HelloReducerApp />

      <h1>6.Ref</h1>
      <HelloRefApp />

      <h1>7.Lifecycle</h1>
      <HelloLifecycleApp />
    </>
  )
}

export default App
