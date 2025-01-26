//5가지 배열 변형 메서드
//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "이정환", hobby: "tennis"},
    {name: "홍길동", hobby: "football"},
    {name: "엄정화", hobby: "wrestling"}
]

const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "tennis")
        return true;
    });

console.log(tennisPeople);

//2. map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
})

console.log(mapResult1);

let names = arr1.map((item) => {
    return item.name;
})
console.log(names);

//3.sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

//다만, 요소가 숫자인 경우엔 적용되지 않음(사전순 정렬리익때문)
let arr4 = [10,3,5];
arr4.sort((a, b) => {
    if(a > b) {
        return 1;
    }else if(a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(arr4);

//4. toSorted
//원본 배열을 냅두고 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(sorted);

//5. join
//배열읠 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterload"];
const joined = arr6.join("|");
console.log(joined);