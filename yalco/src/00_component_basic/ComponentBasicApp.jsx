import { HelloComponent } from './components/HelloComponent'
import { HelloJsx } from './components/HelloJsx'
import { JsxRenderingBoolean } from './components/JsxRenderingBoolean'
import { JsxRenderingList } from './components/JsxRenderingList'
import { JsxTagAttribute } from './components/JsxTagAttribute'
import { JsxStyleAttribute } from './components/JsxStyleAttribute'
import { JsxStyleButton } from './components/JsxStyleButton'

const ComponentBasicApp = () => {
    return (
        <>
            <HelloComponent />
            <HelloJsx />
            <JsxRenderingBoolean />
            <JsxRenderingList />
            <JsxTagAttribute />
            <JsxStyleAttribute />
            <JsxStyleButton />
        </>
    )
}

export default ComponentBasicApp