import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        const flag = window.confirm("Are you sure you want to delete this page?"); //확인과 취소 버튼이 존재하는 확인창
        if (flag) {
            onDelete(params.id);
            nav("/", {replace: true})
        }
    }

    const onSubmit = (input) => {
        const flag = window.confirm("really edit this diary?");
        if (flag) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", {replace: true})
        }
    }

    return (
        <div>
            <Header title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로 가기"} onClick={() => {
                        nav(-1)
                    }}/>}
                    rightChild={<Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"}/>}/>
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit;