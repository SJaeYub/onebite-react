const Controller = ({count, setCount}) => {
    const onChange = (e) => {
        if (e.target.value === "a") {
            setCount(count - 1);
        } else if (e.target.value === "b") {
            setCount(count - 10);
        } else if (e.target.value === "c") {
            setCount(count - 100);
        } else if (e.target.value === "d") {
            setCount(count + 100);
        } else if (e.target.value === "g") {
            setCount(count + 10);
        } else if (e.target.value === "f") {
            setCount(count + 1);
        }


    }

    return (
        <div>
            <button onClick={onChange} value={"a"}>-1</button>
            <button onClick={onChange} value={"b"}>-10</button>
            <button onClick={onChange} value={"c"}>-100</button>
            <button onClick={onChange} value={"d"}>+100</button>
            <button onClick={onChange} value={"g"}>+10</button>
            <button onClick={onChange} value={"f"}>+1</button>
        </div>
    );
}

export default Controller;