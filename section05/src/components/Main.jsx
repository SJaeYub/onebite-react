import "./Main.css";

const Main = () => {
    const user = {
        name: "이정환",
        isLogin: false
    };

    return (
        <>
            {user.isLogin ? <div className="logout">로그아웃</div> : <div className="logout">로그인</div>}
        </>
    );
}

export default Main;