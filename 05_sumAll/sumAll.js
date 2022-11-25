const sumAll = function(numOne, numTwo) {
    let holder = 0;
    for (i = numOne; i<numTwo+1; i++) {
        holder += i;
    };
    return holder;

};

// Do not edit below this line
module.exports = sumAll;
