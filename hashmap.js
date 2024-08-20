const firstUniqChar = (s) => {
    const charMap = {};

    for(let char of s) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    for(let i = 0; i < s.length; i++) {
        if(charMap[s[i]] === 1) return i;
    }
    return -1;
}

//console.log(firstUniqChar('apple'));

const largestUniqueNumber = (A) => {
    const freq = {};
    const maxUnique = -1;

    for (let num of A) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let nonRepeat = A.filter(num => freq[num] === 1);

    for (let num of nonRepeat) {
        maxUnique = Math.max(num, maxUnique)
    }

    return maxUnique;
}

//console.log(largestUniqueNumber(  [9, 9, 8, 8, 7, 7]));

const maxNumberOfBalloons = (text) => {
    const textMap = {};

    for (let char of text) {
        textMap[char] = (textMap[char] || 0) + 1;
    }

    let minCount = Infinity;
    minCount = Math.min(minCount, textMap['b'] || 0);
    minCount = Math.min(minCount, textMap['a'] || 0);
    minCount = Math.floor(Math.min(minCount, textMap['l'] / 2 || 0));
    minCount = Math.floor(Math.min(minCount, textMap['o'] / 2 || 0));
    minCount = Math.min(minCount, textMap['n'] || 0);

    return minCount;
}

console.log(maxNumberOfBalloons('balloonnolab'));