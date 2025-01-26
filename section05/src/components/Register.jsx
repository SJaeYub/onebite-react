import {useState} from "react";

//간단한 회원가입
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value, //[] 안의 변수에 담긴 값을 키로 지정한다

        })
    };

    return (
        <>
            <div>
                <input name={"name"} onChange={onChange} placeholder={"name"}/>
            </div>
            <div>
                <input name={"birth"} type={"date"} onChange={onChange} placeholder={"birth"} value={input.birth}/>
            </div>
            <div>
                <select value={input.country} onChange={onChange} name={"country"}>
                    <option>korea</option>
                    <option>japan</option>
                    <option>china</option>
                    <option>america</option>
                </select>
            </div>
            <div>
                <textarea onChange={onChange} placeholder={"bio"} value={input.bio} name={"bio"}/>
            </div>
        </>
    );
}

export default Register;