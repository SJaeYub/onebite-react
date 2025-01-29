import "./TodoItem.css"
import {memo, useContext} from "react";
import {TodoDispatchContext} from "../App.jsx";

const TodoItem = ({id, content, isDone, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className={"TodoItem"}>
            <input onChange={onChangeCheckbox} checked={isDone} type={"checkbox"}/>
            <div className={"content"}>{content}</div>
            <div className={"date"}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onDeleteButton}>삭제</button>
        </div>
    );
}

// 두번째 파라미터로 넘긴 콜백함수는, 과거 props와 현재 props를 비교하는 함수를 커스텀해서 제공
export default memo(TodoItem);