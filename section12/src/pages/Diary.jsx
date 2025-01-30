import {useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

const Diary = () => {
    const params = useParams(); //url 파라미터의 값을 추출하는 라이브러리

    return (
        <div>
            <Header title={"yyyy-mm-dd 기록"}
                    leftChild={<Button text={"< 뒤로 가기"}/>}
                    rightChild={<Button text={"수정하기"}/>}/>
            <Viewer/>
        </div>
    )
}

export default Diary;