import { useEffect, useState } from "react"

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        /** 컴포넌트 마운트 후 실행됨 */
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);

        /** 컴포넌트 언마운트 후 실행됨 */
        return (() => {
            window.removeEventListener("resize", handleResize);
        })
    }, []);

    return windowSize;
}

export default useWindowSize