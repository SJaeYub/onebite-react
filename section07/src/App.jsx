import {useState, useEffect, useRef} from 'react'
import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import Even from "./components/Even.jsx";

function App() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1.마운트 - 컴포넌트 생성 시에 1번만 실행
    useEffect(() => {
        console.log("mount");
    }, [])

    // 2.업데이트 - 해당 컴포넌트에 업데이트가 발생할 때 마다 실행
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    })

    // 3.언마운트 - 컴포넌트 소멸 시에 1번만 실행


    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className={"App"}>
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
            </section>
            <section>
                <Viewer count={count}/>
                {count % 2 === 0 ? <Even/> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    )
}

export default App
