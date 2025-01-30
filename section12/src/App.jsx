import {createContext, useContext, useEffect, useReducer, useRef, useState} from 'react'
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

function reducer(state, action) {
    let nextState;

    switch (action.type) {
        case "INIT": {
            return action.data;
        }
        case "CREATE": {
            nextState = [...state, action.data];
            break;
        }
        case "UPDATE": {
            nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
            break;
        }
        case "DELETE": {
            // console.log("call delete");
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        }
        default:
            return state;
    }
    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;

}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef();

    useEffect(() => {
        const storedData = localStorage.getItem("diary");
        if (!storedData) {
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData);

        if (!Array.isArray(parsedData)) {
            setIsLoading(false);
            return;
        }

        let maxId = 0;
        parsedData.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        })

        idRef.current = maxId + 1;

        dispatch({
            type: "INIT",
            data: parsedData
        })

        setIsLoading(false);
    }, [])

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

    if(isLoading) {
        return <div>데이터 로딩 중...</div>
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
