const palindromes = function (word) {
    const words = Array.from(word).map(w => w.toLowerCase());
    let pureWords = words.filter(pureWord => {
        if (pureWord.charCodeAt(0) >= 97 && pureWord.charCodeAt(0) <= 122) {
            return pureWord;
        };
    });

    console.log(pureWords)
    l = 0;
    r = pureWords.length-1;

    while (l < r){
        if (pureWords[l] !== pureWords[r]) {
            return false;
        };
        l++;
        r--;
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
