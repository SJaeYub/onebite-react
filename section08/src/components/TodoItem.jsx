import "./TodoItem.css"

const TodoItem = ({id, content, isDone, date, onUpdate, onDelete}) => {

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

export default TodoItem