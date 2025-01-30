import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {replace, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {DiaryDispatchContext} from "../App.jsx";

const New = () => {
    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext);
    
    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);

        nav("/", {replace: true}); //작성 완료 후 메인 페이지 이동, 뒤로 가기시 다시 작성 페이지 접근 불가 지정 옵션
    }

    return (
        <div>
            <Header title={"새 일기쓰기"} leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>}/>
            <Editor onSubmit={onSubmit} />
        </div>
    )
}

export default New;