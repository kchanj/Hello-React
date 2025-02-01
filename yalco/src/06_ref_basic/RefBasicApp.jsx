import { SimpleCounter, StateCounter } from "./components/HelloRef"
import { TextBox } from "./components/TextBox"

const RefBasicApp = () => {
    return (
        <>
            <SimpleCounter />
            <StateCounter />
            <TextBox />
        </>
    )
}

export default RefBasicApp