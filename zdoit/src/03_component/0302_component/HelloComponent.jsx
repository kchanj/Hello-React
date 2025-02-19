import React from "react";
import TodaysPlan from "./comps/TodaysPlan";

class HelloComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>3-2 컴포넌트와 구성요소</h3>
                <TodaysPlan />
            </div>
        )
    }
}

export default HelloComponent;