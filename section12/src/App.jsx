import {useState} from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

// 1."/": 모든 일기를 조회하는 Home 페이지
// 2."/new": 새로운 일기를 작성하 New 페이지
// 3."/diary": 일기를 상세히 조회하는 diary 페이지
function App() {
    const nav = useNavigate();  //버튼을 눌러 페이지를 실제로 이동시키는 navigator 객체를 반환

    const onClickButton = () => {
        nav("/new");
    }

    return (
        <>
            <Header title={"Header"} leftChild={<Button text={"Left"}/>} rightChild={<Button text={"Right"}/>}/>
            <Button text={"123"} type={"DEFAULT"} onClick={() => {
                console.log("clicked");
            }}/>
            <Button text={"123"} type={"POSITIVE"} onClick={() => {
                console.log("clicked");
            }}/>
            <Button text={"123"} type={"NEGATIVE"} onClick={() => {
                console.log("clicked");
            }}/>
            <Routes> {/*// routes 바깥의 요소들은 어떤 컴포넌트가 리턴되도 콩통으로 표시됨*/}
                {/*routes 컴포넌트 하위엔 route만 쓸수있음
            위에서 부터 아래로 해당 경로에 따른 페이지 컴포넌트를 리턴*/}
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/new"} element={<New/>}/>
                <Route path={"/diary/:id"} element={<Diary/>}/> {/*path 뒤의 : 이후 인자는 동적 파라미터를 의미함*/}
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
