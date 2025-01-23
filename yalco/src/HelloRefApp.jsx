import {
    SimpleCounter,
    StateCounter,
    TextBox
} from './HelloRef'

const HelloRefApp = () => {
    return (
        <>
            <h2>Simple Counter</h2>
            <SimpleCounter />

            <h2>State Counter</h2>
            <StateCounter />
            <StateCounter />

            <h2>Ref Input</h2>
            <TextBox />
        </>
    )
}

export default HelloRefApp;