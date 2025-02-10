import { SimpleCounter } from "./components/SimpleCounter"
import { HelloCounter } from "./components/HelloCounter"
import { HelloToggler } from "./components/HelloToggler"

const ContextApp = () => {
    return (
        <>
            <SimpleCounter />
            <HelloCounter />
            <HelloToggler />
        </>
    )
}

export default ContextApp