import {useParams} from "react-router-dom";

const Diary = () => {
    const params = useParams(); //url 파라미터의 값을 추출하는 라이브러리

    return (
        <div>{params.id}번 일기입니다</div>
    )
}

export default Diary;