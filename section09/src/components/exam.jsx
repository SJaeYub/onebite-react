import {useReducer} from "react";

//상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
    if(action.type === "INCREASE") {
        return state + action.data;
    } else if(action.type === "DECREASE") {
        return state - action.data;
    }
}

const Exam = () => {

    const [state, dispatch] = useReducer(reducer, 0); //useReducer(상태변환기함수, state 초기값)

    const onClickPlus = () => {
        // 액션 객체(데이터가 어떻게 처리되기를 원하는지 설계? 한 객체) - 위 객체를 토대로 useReducer에 전달한 변환기 함수를 구현해야함
        dispatch({  //인수: 상태가 어떻게 변화되길 원하는지
            type: "INCREASE",
            data: 1
        });
    };

    const onClickMinus = () => {
        // 액션 객체(데이터가 어떻게 처리되기를 원하는지 설계? 한 객체) - 위 객체를 토대로 useReducer에 전달한 변환기 함수를 구현해야함
        dispatch({  //인수: 상태가 어떻게 변화되길 원하는지
            type: "DECREASE",
            data: 1
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
}

export default Exam;