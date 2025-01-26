// const moduleData = require("./math");
// console.log(moduleData);
//
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));
//
// //객체의 구조분해 할당 사용기법
// const {add, sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

// import multiply, {add, sub} from "./math.js";
//
// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(multiply(1,2));

//node.js 라이브러리사용
import randomColor from 'randomColor';
const color = randomColor();
console.log(color);