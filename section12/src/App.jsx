import {useState} from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";

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
            <Button></Button>
            {/*<div> /!*이미지를 public 디렉토리에 보관하면 vite에서 제공하는 최적화 기능이 사용X*!/*/}
            {/*    <img src={"/emotion1.png"}/>*/}
            {/*    <img src={"/emotion2.png"}/>*/}
            {/*    <img src={"/emotion3.png"}/>*/}
            {/*    <img src={"/emotion4.png"}/>*/}
            {/*    <img src={"/emotion5.png"}/>*/}
            {/*</div>*/}

            <div> {/*이미지를 src 밑의 assets에 보관하면 이미지를 캐싱하여 사용 - 최적화 Up*/}
                <img src={getEmotionImage(1)} />
                <img src={getEmotionImage(2)} />
                <img src={getEmotionImage(3)} />
                <img src={getEmotionImage(4)} />
                <img src={getEmotionImage(5)} />
            </div>

            <div>
                {/*Link 컴포넌트 SPA 방식 제공 - 링크를 통한 페이지 이동 방식*/}
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>

                {/*a 태그는 MPA 방식 - 비추천*/}
                {/*<a href={"/"}>Home</a>*/}
                {/*<a href={"/new"}>New</a>*/}
                {/*<a href={"/diary"}>Diary</a>*/}
            </div>
            <button onClick={onClickButton}>New 페이지로 이동</button>
            <Routes> {/*// routes 바깥의 요소들은 어떤 컴포넌트가 리턴되도 콩통으로 표시됨*/}
                {/*routes 컴포넌트 하위엔 route만 쓸수있음
            위에서 부터 아래로 해당 경로에 따른 페이지 컴포넌트를 리턴*/}
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/new"} element={<New/>}/>
                <Route path={"/diary/:id"} element={<Diary/>}/>  {/*path 뒤의 : 이후 인자는 동적 파라미터를 의미함*/}
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
