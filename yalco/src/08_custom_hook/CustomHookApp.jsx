import { SimpleCounter } from './components/SimpleCounter'
import { WindowResize } from './components/WindowResize'

const CustomHookApp = () => {
    return (
        <>
            <h2>SimpleCounter</h2>
            <SimpleCounter />

            <h2>WindowResize</h2>
            <WindowResize />
        </>
    )
}

export default CustomHookApp