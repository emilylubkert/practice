const findMostCommonSubstring = (string, n) => {
    if (!string || string.length === 0 || n <= 0) return "";

    const substringCount = new Map();
    for (let i = 0; i <= string.length - n; i++) {
        const substring = string.substring(i, i + n);
        substringCount.set(substring, (substringCount.get(substring) || 0) + 1);
    }

    let maxCount = 0;
    let mostCommonSubstring = '';

    substringCount.forEach((count, string) => {
        if (count > maxCount) {
            maxCount = count;
            mostCommonSubstring = string;
        }
    })
    return mostCommonSubstring;
}

//console.log(findMostCommonSubstring("Ladidala", 2))

const findAllRepeatedSubstrings = (string) => {
    if(!string || string.length === 0) return [];

    const substringCount = new Map();
    for(let len = 1; len <= string.length; len++) {
        for (let start = 0; start <= string.length - len; start++) {
            const substring = string.substring(start, start + len);
            substringCount.set(substring, (substringCount.get(substring) || 0) + 1);
        }
    }

    const repeatedSubstrings = [];

    substringCount.forEach((count, string) => {
        if (count > 1) {
            repeatedSubstrings.push({substring: string, count: count});
        }
    });

    return repeatedSubstrings;
}

console.log(findAllRepeatedSubstrings('inengineering'));