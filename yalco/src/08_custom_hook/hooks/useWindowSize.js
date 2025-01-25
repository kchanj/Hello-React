import { useEffect, useState } from "react"

function useWindowSize() {

    // 윈도우 크기 정보
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    /** 컴포넌트가 마운트될때 실행됨 */
    useEffect(() => {
        // 윈도우 크기 정보 업데이트
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        //윈도우 크기가 변경되는 경우
        window.addEventListener("resize", handleResize);

        //컴포넌트가 언마운트될때 실행됨
        return (() => {
            window.removeEventListener("resize", handleResize);
        })
    }, []);

    return windowSize;
}

export default useWindowSize