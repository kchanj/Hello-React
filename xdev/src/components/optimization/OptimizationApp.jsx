import CallbackCounterApp from "./CallbackCounterApp";
import DualCounterApp from "./DualCounterApp";
import MemoizeCounterApp from "./MemoizeCounterApp";
import TodoListApp from "./TodoListApp";

const OptimizationApp = () => {
    return (
        <>
            <h2>DualCounterApp</h2>
            <DualCounterApp />
            <h2>TodoListApp</h2>
            <TodoListApp />
            <h2>MemoizeCounterApp</h2>
            <MemoizeCounterApp />
            <h2>CallbackCounterApp</h2>
            <CallbackCounterApp />
        </>
    )
}

export default OptimizationApp;