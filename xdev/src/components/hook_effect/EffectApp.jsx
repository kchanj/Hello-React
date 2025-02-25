import BookListApp from "./BookListApp";
import EffectCounterApp from "./EffectCounterApp";
import LifecycleClassCompApp from "./LifecycleClassCompApp";
import LifecycleFuncCompApp from "./LifecycleFuncCompApp";
import ToggleTimerApp from "./ToggleTimerApp";

const EffectApp = () => {
    return (
        <>
            <h2>LifecycleClassCompApp</h2>
            <LifecycleClassCompApp />
            <h2>LifecycleFuncCompApp</h2>
            <LifecycleFuncCompApp />
            <h2>EffectCounterApp</h2>
            <EffectCounterApp />
            <h2>BookListApp</h2>
            <BookListApp />
            <h2>ToggleTimerApp</h2>
            <ToggleTimerApp />
        </>
    )
}

export default EffectApp;