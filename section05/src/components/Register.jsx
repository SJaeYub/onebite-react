import {useState} from "react";

//간단한 회원가입
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

const Register = () => {
    const [name, setName] = useState("name");
    const [birth, setBirth] = useState();
    const [country, setCountry] = useState("korea");
    const [bio, setBio] = useState("hello");

    const onChaneName = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const onChangeDate = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={onChaneName} placeholder={"name"}/>{name}
            </div>
            <div>
                <input type={"date"} onChange={onChangeDate} placeholder={"birth"} value={birth}/>{birth}
            </div>
            <div>
                <select value={"country"} onChange={onChangeCountry}>
                    <option>korea</option>
                    <option>japan</option>
                    <option>china</option>
                    <option>america</option>
                </select>{country}
            </div>
            <div>
                <textarea onChange={onChangeBio} placeholder={"bio"} value={bio}/>
                    {bio}
            </div>
        </>
    );
}

export default Register;