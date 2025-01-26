import {useState, useRef} from "react";
import useInput from "../hooks/useInput.jsx";

//3가지 훅 관련된 팁
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건문 안에서는 호출 불가능 if() {사용 불가}
//3. 커스텀 훅을 만들 수 있



const HookExam = () => {

    const [input, onChange] = useInput();
    return (
        <div>
            <input onChange={onChange} type="text" placeholder="Enter name"/>
        </div>
    );
}


export default HookExam;