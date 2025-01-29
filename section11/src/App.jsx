import {useReducer, useRef, useCallback, createContext, useMemo} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import Exam from "./components/exam.jsx";

const mockData = [{
    id: 0, isDone: false, content: "React 공부하기", date: new Date().getTime()
}, {
    id: 1, isDone: false, content: "빨래하기", date: new Date().getTime()
}, {
    id: 2, isDone: false, content: "노래연습하기", date: new Date().getTime()
}]

function reducer(state, action) {
    if (action.type === "CREATE") {
        return [action.data, ...state]
    }
    if (action.type === "UPDATE") {
        return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item)
    }
    if (action.type === "DELETE") {
        return state.filter((item) => item.id !== action.targetId);
        // return [...state, state.filter((item) => item.id !== action.targetId)];
    }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
    const idRef = useRef(3);
    const [todos, dispatch] = useReducer(reducer, mockData);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE", data: {
                id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
            }
        })
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE", targetId: targetId
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE", targetId: targetId
        });
    }, []);

    const memoizedDispatch = useMemo(() => {
        return {onCreate, onUpdate, onDelete};
    }, [])

    return (<div className={"App"}>
            {/*<Exam/>*/}
            <Header/>

            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor/>
                    <List/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>)
}

export default App
