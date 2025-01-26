//1. 배열의 구조 분해 할당
let arr = [1,2,3];

let [one,two,three, four] = arr;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

//2. 객체의 구조 분해 할당
let person = {
    name: "심재엽",
    age: 22,
    hobby: "tennis"
}

let {name, age, hobby} = person;
console.log(name);
console.log(age);
console.log(hobby);

//3. 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby}) => {
    console.log(name, age, hobby);
}

func(person);