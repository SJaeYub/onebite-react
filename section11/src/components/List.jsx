import "./List.css"
import TodoItem from "./TodoItem.jsx";
import {useState, useMemo, useContext} from "react";
import {TodoStateContext} from "../App.jsx";

const List = () => {
    const [search, setSearch] = useState("");
    const todos = useContext(TodoStateContext);

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

    // 의존성 배열, deps 즉 두번째 인자인 배열에 들어있는 값이 변할 경우에만 첫번째 인자인 콜백 함수를 실행한. 또한 해당 콜백함 수가
    // 반환한 값을 useMemo가 그대로 리턴한다
    // 두번재 파라미터를 아무것도 넣지 않으면, 맨 처음 콜백함수를 실행할 시 사용 한 데이터를 deps, 두번째 파라미터에 저장한다 여기서는 초기 todos!!
    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((item) => item.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos]);

    return (
        <div className={"List"}>
            <h4>Todo List</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDoneCount: {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} placeholder={"검색어를 입력하세요"}/>
            <div className="todos_wrapper">
                {filteredData.map((todo) => {
                    return (
                        <TodoItem key={todo.id} {...todo}/>
                    );
                })}
            </div>
        </div>
    )
}

export default List;