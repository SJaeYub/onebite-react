import Button from "./Button.jsx";
import "./DiaryList.css"
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedData = () => {
        return data.toSorted((a, b) => { //원본 배열을 복제ㅅ해서 정렬된 새로운 배열을 리턴해줌
            if (sortType === "latest") {
                return Number(b.createdDate) - Number(a.createdDate)
            } else {
                return Number(a.createdDate) - Number(b.createdDate)
            }
        });
    }

    const sortedData = getSortedData();

    return (
        <div className={"DiaryList"}>
            <div className={"menu_bar"}>
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button onClick={() => {
                    nav("/new")
                }} text={"새로운 일기 쓰기"} type={"POSITIVE"}/>
            </div>
            <div className={"list_wrapper"}>
                {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList;