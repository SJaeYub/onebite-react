import {useParams} from "react-router-dom";

const Edit = () => {
    const params = useParams();
    return (
        <dit>{params.id}번 일기입니다.</dit>
    )
}

export default Edit;