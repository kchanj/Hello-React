import React from "react";
import HelloJsx from "./0301_jsx/HelloJsx";
import HelloComponent from "./0302_component/HelloComponent";
import HelloProps from "./0303_props/HelloProps";
import HelloState from "./0304_state/HelloState";
import HelloLifecycle from "./0305_lifecycle/HelloLifecycle";
import HelloShallow from "./0306_shallow/HelloShallow";
import HelloFuncComp from "./0307_func_comp/HelloFuncComp";
import HelloListRendering from "./0308_list_rendering/HelloListRendering";
import HelloCallback from "./0309_callback/HelloCallback";

class ComponentApp extends React.Component {
    render() {
        return (
            <div>
                <h2>3 리액트 컴포넌트</h2>
                <HelloJsx />
                <hr/>
                <HelloComponent />
                <hr/>
                <HelloProps />
                <hr/>
                <HelloState />
                <hr />
                <HelloLifecycle />
                <hr/>
                <HelloShallow />
                <hr/>
                <HelloFuncComp />
                <hr/>
                <HelloListRendering />
                <hr/>
                <HelloCallback />
            </div>
        )
    }
}

export default ComponentApp;