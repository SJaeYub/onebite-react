import "./Button.css"

const Button = ({text, type, onClick}) => {
    return (
        <button onClick={onClick} className={`Button Button_${type}`}> {/*type에 따라 버튼 색을 다르게 적용하기 위함*/}
            {text}
        </button>
    )
}

export default Button;