import ComponentBasicApp from './00_component_basic/ComponentBasicApp'
import ComponentPropsApp from './01_component_props/ComponentPropsApp'
import EventHandlerApp from './02_event_handler/EventHandlerApp'
import CustomHookApp from './08_custom_hook/CustomHookApp'
import './App.css'

function App() {
  return (
    <>
      <h1>00. Component Basic</h1>
      <ComponentBasicApp />

      <h1>01. Component Props</h1>
      <ComponentPropsApp />

      <h1>02. Event Handler</h1>
      <EventHandlerApp />

      <h1>08. Custom Hook</h1>
      <CustomHookApp />
    </>
  )
}

export default App
