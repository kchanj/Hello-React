import {
    SimpleClickButton,
    MessageClickButton,
    MouseEventButton,
    ClickEventButton,
    FocusEventTextbox,
    ChangeEventTextbox,
    KeyEventTextbox
} from './HelloEvent'

function HelloEventApp() {

    return (
        <>
            <h2>클릭 이벤트 버튼</h2>
            <SimpleClickButton />

            <h2>클릭 이벤트 버튼: props 사용</h2>
            <MessageClickButton message="Hello" />
            <MessageClickButton message={"Goodbye"} />
            <MessageClickButton message={1000} />

            <h2>여러 이벤트 버튼</h2>
            <MouseEventButton />
            
            <h2>이벤트의 다양한 정보</h2>
            <ClickEventButton />
            
            <h2>포커스 이벤트</h2>
            <FocusEventTextbox />
            
            <h2>체인지 이벤트</h2>
            <ChangeEventTextbox />
            
            <h2>키보드 이벤트</h2>
            <KeyEventTextbox />
        </>
    )
}

export default HelloEventApp