import styles from '../../Card.module.css'
import logoImg from '../../assets/react.png'

console.log("JSX 태그 속성: 이미지", logoImg);

const JsxTagAttribute = () => {
    return (
        <>
            <h2>JSX 태그 속성: 기본</h2>
            <TagAttribute />

            <h2>JSX 태그 속성: 이미지</h2>
            <ImgTagAttribute />
        </>
    )
}

/** JSX 태그 속성: 기본 */
const TagAttribute = () => {

    const disableInput = false;

    return (
        <div className={styles.card}>
            <label htmlFor="username">Username</label> {/* for */}
            <input type="text"
                   id="username"

                   className="input-field" // class
                   autoComplete="off"      // autocomplete
                   maxLength={10}          // maxlength
                   spellCheck={true}       // spellcheck
                   readOnly={false}        // readonly
                   tabIndex={0}            // tabindex

                   disabled={disableInput}
                   placeholder={disableInput ? "(DISABLED)" : "Enter your name"}
            />
        </div>
    )
}

/** JSX 태그 속성: 이미지 */
function ImgTagAttribute() {

    const logoAlt = "React Logo";

    return (
        <div className={styles.card}>
            <img src={logoImg}            /* import된 이미지 객체 사용 */
                 alt={logoAlt}
                 width={256}
                 height={228}
            />
        </div>
    )
}

export { JsxTagAttribute }