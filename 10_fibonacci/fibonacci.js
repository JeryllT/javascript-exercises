const fibonacci = function(num) {
    if (+num < 0) return "OOPS";
    let arr = [1];
    let prev = 0;
    let cur = 1;
    for(i = 1; i < +num; i++){
        toAppend = prev + cur
        arr.push(toAppend);
        prev = cur;
        cur = toAppend;
        console.log(prev, cur);
    };
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
