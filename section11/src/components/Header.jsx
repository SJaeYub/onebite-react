import "./Header.css"
import {memo} from "react";

const Header = () => {
    return (
        <div className={"Header"}>
            <h3>오늘은👌</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

const memoizedHeder = memo(Header);

export default memoizedHeder;