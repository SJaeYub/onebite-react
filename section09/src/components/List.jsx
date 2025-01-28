import "./List.css"
import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
            // console.log(todo.content.includes(search));
        );
    };

    const filteredData = getFilteredData();

    return (
        <div className={"List"}>
            <h4>Todo List</h4>
            <input value={search} onChange={onChangeSearch} placeholder={"검색어를 입력하세요"}/>
            <div className="todos_wrapper">
                {filteredData.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                    );
                })}
            </div>
        </div>
    )
}

export default List;