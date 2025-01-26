//1. 배열 순회
let arr = [1,2,3];


//배열 인덱스
for(let i = 0; i < arr.length; i++) {
    console.log(i);
}

let arr2 = [4,5,6,7,8];
for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

//1.2 for of 반복문
for(let item of arr2) {
    console.log(item);
}

//2. 객체 순회
let person = {
    name: "심재엽",
    age: 27,
    hobby: "테니스"
}

let keys = Object.keys(person);
console.log(keys);

for(let key of keys) {
    console.log(person[key]);
}

let values = Object.values(person);
console.log(values);

for(let value of values) {
    console.log(value);
}

for(let key in person) {
    const key_txt = key;
    console.log(person[key_txt]);
}