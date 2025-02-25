import CustomCounterApp from "./CustomCounterApp";
import FetchBookListApp from "./FetchBookListApp";
import WindowSizeApp from "./WindowSizeApp";

const CustomApp = () => {
    return (
        <>
            <h2>CustomCounterApp</h2>
            <CustomCounterApp />
            <h2>WindowSizeApp</h2>
            <WindowSizeApp />
            <h2>FetchBookListApp</h2>
            <FetchBookListApp />
        </>
    )
}

export default CustomApp;