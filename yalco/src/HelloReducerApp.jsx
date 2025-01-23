import {
    SimpleAgeWarning,
    ReducerAgeWarning,
    ResetAgeWarning,
    ReducerCounter
} from './HelloReducer'

function HelloReducerApp() {
    return (
        <>
            <h2>Simple 성인 경고메시지</h2>
            <SimpleAgeWarning />

            <h2>Reducer 성인 경고 메시지</h2>
            <ReducerAgeWarning />

            <h2>Reset 성인 경고 메시지</h2>
            <ResetAgeWarning />

            <h2>Reducer Counter</h2>
            <ReducerCounter />
        </>
    )
}

export default HelloReducerApp