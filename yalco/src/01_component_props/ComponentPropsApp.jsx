import { HelloProps } from './components/HelloProps'
import { ChildrenProps } from './components/ChildrenProps'
import { HighOrderComponent } from './components/HighOrderComponent'

const ComponentPropsApp = () => {
    return (
        <>
            <HelloProps />
            <ChildrenProps />
            <HighOrderComponent />
        </>
    )
}

export default ComponentPropsApp