import {getEmotionImage} from "../util/get-emotion-image.js";
import Button from "./Button.jsx";
import "./DiaryItem.css"
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, emotionId, createdDate, content}) => {

    const nav = useNavigate();

    return (
        <div className={"DiaryItem"}>
            <div className={`img_section img_section_${emotionId}`}
                 onClick={() => {
                     nav(`/diary/${id}`)
                 }}> {/*$사인을 쓸땐 항상 ₩!!*/}
                <img src={getEmotionImage(emotionId)}/>
            </div>
            <div className={"info_section"}
                 onClick={() => {
                     nav(`/diary/${id}`)
                 }}>
                <div className={"createdDate"}>{new Date(createdDate).toLocaleDateString()}</div>
                <div className={"content"}>{content}</div>
            </div>
            <div className={"button_section"}><Button onClick={() => {
                nav(`/edit/${id}`)
            }} text={"수정하기"}/></div>
        </div>
    )
}

export default DiaryItem;