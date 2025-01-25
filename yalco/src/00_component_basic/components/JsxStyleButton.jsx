import ButtonRed from '../buttons/JsxStyleButtonRed'
import ButtonUnder from '../buttons/JsxStyleButtonUnder'
import ButtonRedModule from '../buttons/JsxStyleButtonRedModule'
import ButtonUnderModule from '../buttons/JsxStyleButtonUnderModule'

const JsxStyleButton = () => {
    return (
        <>
            <h2>JSX 스타일: 파일 Import</h2>
            <div className="card">
                <ButtonRed/>
                <ButtonUnder/>
            </div>

            <h2>JSX 스타일: 모듈 Import</h2>
            <div className="card">
                <ButtonRedModule/>
                <ButtonUnderModule/>
            </div>
        </>
    )
}

export { JsxStyleButton }