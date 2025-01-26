function main(value) {
    value();
}

function sub() {
    // console.log("I am sub");
}

function repeat(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, idx => {
    console.log(idx * 2);
});