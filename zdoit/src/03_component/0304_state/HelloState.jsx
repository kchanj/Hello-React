import React from 'react';
import LoadingMessage from './comps/LoadingMessage';
import ToggleMessage from './comps/ToggleMessage';
import UpdateMessage from './comps/UpdateMessage';
import SimpleCounter from './comps/SimpleCounter';

class HelloState extends React.Component {
    render() {
        return (
            <div>
                <h3>3-4 컴포넌트 상태 관리하기</h3>
                <LoadingMessage />
                <ToggleMessage />
                <UpdateMessage />
                <SimpleCounter />
            </div>
        )
    }
}

export default HelloState;