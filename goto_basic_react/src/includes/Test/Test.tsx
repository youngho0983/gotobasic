import {useEffect} from "react";

export default function Test() {


    useEffect(() => {
        // Ajax 요청
        fetch("http://localhost:9090/hello")
            .then((res) => res.text())
            .then (text => console.log(text))// JSON 변환
    }, []); // 빈 배열: 컴포넌트 처음 마운트 시 1회 실행

    return (
        <>hello</>
    )

}