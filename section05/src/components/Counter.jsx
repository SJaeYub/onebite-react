import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0); //state 변수 2개는 구조 분해 변수로 할당받는 것이 일반적

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default Counter;