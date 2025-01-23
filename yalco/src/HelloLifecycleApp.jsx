import {
    CompLifecycle,
    CounterLifecycle,
    BookSearch
} from './HelloLifecycle'

const HelloLifecycleApp = () => {
    return (
        <>
            <h2>컴포넌트의 라이프사이클</h2>
            <CompLifecycle />

            <h2>useEffect와 useState</h2>
            <CounterLifecycle />

            <h2>useEffect와 useState</h2>
            <BookSearch />
        </>
    )
}

export default HelloLifecycleApp