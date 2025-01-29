import {createContext, useContext, useReducer, useRef, useState} from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Edit from "./pages/Edit.jsx";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    }
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];
        case "UPDATE":
            return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE":
            return state.filter((item) => item.id !== action.data.id);
    }

}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();


function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    //새 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content
            }
        });
    }

    //일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id, createdDate, emotionId, content
            }
        })
    }

    //일기 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            data: {
                id
            }
        })
    }

    return (
        <>
            <button onClick={() => {
                onCreate(new Date().getTime(), 1, "test");
            }}>일기 생성 테스트
            </button>
            <button onClick={() => {
                onUpdate(1, new Date().getTime(), 3, "update");
            }}>일기 수정 테스트
            </button>
            <button onClick={() => {
                onDelete(1);
            }}>일기 삭제 테스트
            </button>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                <Routes> {/*// routes 바깥의 요소들은 어떤 컴포넌트가 리턴되도 콩통으로 표시됨*/}
                    {/*routes 컴포넌트 하위엔 route만 쓸수있음
            위에서 부터 아래로 해당 경로에 따른 페이지 컴포넌트를 리턴*/}
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/new"} element={<New/>}/>
                    <Route path={"/diary/:id"} element={<Diary/>}/> {/*path 뒤의 : 이후 인자는 동적 파라미터를 의미함*/}
                    <Route path={"*"} element={<NotFound/>}/>
                    <Route path={"/edit/:id"} element={<Edit/>}/>
                </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    )
}

export default App
