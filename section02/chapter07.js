//6가지의 요소 조작 메서드

let arr1 = [1,2,3];
arr1.push(4);

console.log(arr1);

let popVal = arr1.pop();
console.log(popVal)

//배열의 맨 앞 요소 제거
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();

console.log(shiftedItem);

//배열의 맨 앞 요소 추가
const arr3Length = arr3.unshift(9);
console.log(arr3);
console.log(arr3Length);

//배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
console.log(arr5);
const arr5Tmp = arr5.slice(1,3);
console.log(arr5Tmp);
const arr5Minus = arr5.slice(-1);
console.log(arr5Minus);

let arr6 = [1, 2];
let arr7 = [3, 4];
console.log(arr6.concat(arr7));