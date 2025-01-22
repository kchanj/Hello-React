function TagAttr() {
    const disableInput = false;

    return (
        <>
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
        </>
    )
}

export default TagAttr