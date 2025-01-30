import {DiaryStateContext} from "../App.jsx";
import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState()
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));

        if (!currentDiaryItem) {
            alert("No such current diary item!");
            nav("/", {replace: true});
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]);

    return curDiaryItem;
}

export default useDiary;