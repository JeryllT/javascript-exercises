const reverseString = function(word) {
    let holder = '';
    for (i = word.length-1; i >= 0; i--){
        holder += word[i];
    };
    return holder;

};

// Do not edit below this line
module.exports = reverseString;
