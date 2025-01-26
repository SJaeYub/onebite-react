let obj1 = new Object();
let obj2 = {};

let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스"
};

class Person1 {
    name;
    age;
    hobby;
}

let person1 = new Person1();
person1.age = 30;
person1.name = "심재엽";

console.log(person1.age);

//새 프로퍼티를 추가하는 방법 
person.job = "developer";

//프로퍼티의 존재 유무를 확인하는 방법
let result = "name" in person1;
console.log(result);