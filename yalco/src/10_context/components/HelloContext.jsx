import { SimpleCounter } from './CounterSimple';
import { ContextCounter } from './CounterContext';
import { ContextToggler } from './TogglerContext';

const HelloContext = () => {
    return (
        <>
            <h2>useContext 기본: 계층구조 컴포넌트에서 state의 전달</h2>
            <SimpleCounter />

            <h2>useContext 기본: context를 사용한 state의 전달</h2>
            <ContextCounter />

            <h2>useContext 기본: 다중 context를 사용</h2>
            <ContextToggler />
        </>
    )
}

export { HelloContext }