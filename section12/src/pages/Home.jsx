import {useSearchParams} from "react-router-dom";
import {useState} from "react"; //query string을 통한 파라미터 값을 추출하기 위한 라이브러리

const Home = () => {
    const [params, setParams] = useSearchParams();


    return (
        <div>Home</div>
    )
}

export default Home;