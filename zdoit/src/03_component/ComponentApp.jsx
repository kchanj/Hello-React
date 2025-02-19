import React from "react";
import HelloJsx from "./0301_jsx/HelloJsx";
import HelloComponent from "./0302_component/HelloComponent";
import HelloProps from "./0303_props/HelloProps";

class ComponentApp extends React.Component {
    render() {
        return (
            <div>
                <h2>3 리액트 컴포넌트</h2>
                <HelloJsx />
                <HelloComponent />
                <HelloProps />
            </div>
        )
    }
}

export default ComponentApp;