import "./Editor.css"
import EmotionItem from "./EmotionItem.jsx";
import Button from "./Button.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js";

const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let day = targetDate.getDate();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    return `${year}-${month}-${day}`;
}

const Editor = ({onSubmit, initData}) => {
    const nav = useNavigate();

    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
            })
        }
    }, [initData]);

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value
        })
    }

    const [input, setInput] = useState({
        createdDate: new Date(),
        content: "",
        emotionId: 3,
    });

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type={"date"} value={getStringedDate(input.createdDate)} name={"createdDate"}
                       onChange={onChangeInput}/>
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) =>
                        <EmotionItem
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                            onClick={() => onChangeInput({
                                target: {
                                    name: "emotionId",
                                    value: item.emotionId,
                                }
                            })}/>)}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea placeholder={"오늘은 어땠나요"} name={"content"} onChange={onChangeInput} value={input.content}/>
            </section>
            <section className="button_section">
                <Button text={"취소하기"} onClick={() => nav(-1)}/>
                <Button text={"작성완료"} type="POSITIVE" onClick={onClickSubmitButton}/>
            </section>
        </div>
    )
}

export default Editor;