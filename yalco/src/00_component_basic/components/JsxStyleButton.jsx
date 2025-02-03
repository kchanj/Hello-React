import ButtonRed from '../buttons/ButtonRed'
import ButtonUnder from '../buttons/ButtonUnder'
import ButtonRedModule from '../buttons/ButtonRedModule'
import ButtonUnderModule from '../buttons/ButtonUnderModule'

const JsxStyleButton = () => {
    return (
        <>
            <h2>JSX 스타일: CSS 파일 Import</h2>
            <div className="card">
                <ButtonRed/>
                <ButtonUnder/>
            </div>

            <h2>JSX 스타일: CSS 모듈 Import</h2>
            <div className="card">
                <ButtonRedModule/>
                <ButtonUnderModule/>
            </div>
        </>
    )
}

export { JsxStyleButton }