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
        createdDate: new Date("2025-01-29").getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createdDate: new Date("2025-01-28").getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    },
    {
        id: 3,
        createdDate: new Date("2024-12-25").getTime(),
        emotionId: 3,
        content: "3번 일기 내용"
    }
]

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [...state, action.data];
        case "UPDATE":
            return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        case "DELETE":
            // console.log("call delete");
            return state.filter((item) => String(item.id) !== String(action.id));
    }

}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // localStorage.setItem("test", "hello");
    // localStorage.setItem("person", JSON.stringify({name: "이정환"}));

    const item = JSON.parse(localStorage.getItem("person"));
    localStorage.removeItem("person");

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
            id
        })
    }

    return (
        <>
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
