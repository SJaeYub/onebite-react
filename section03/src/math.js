//math 모듈

//common js 모듈
// function add(a, b) {
//     return a + b;
// }
//
// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     add: add,
//     sub: sub
// }

//es module
// export {add, sub};
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}