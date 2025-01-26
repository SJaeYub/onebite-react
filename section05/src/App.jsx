import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() { // 부모 컴포넌트
    const [count, setCount] = useState(0); //state 변수 2개는 구조 분해 변수로 할당받는 것이 일반적
    const [light, setLight] = useState("OFF");

    return (
        <>
            <div>
                <h1>{light}</h1>
                <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
                  {light === "ON" ? "OFF" : "ON"}
                </button>
            </div>

            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
        </>
    );
}

export default App
