//Kids With the Greatest Number of Candies (easy)
const kidsWithCandies = (candies, extraCandies) => {
    let maxCandies = 0;
    let result = [];
    for (let kid of candies) {
        maxCandies = Math.max(kid, maxCandies);
    }

    for (let kid of candies) {
        if (kid + extraCandies >= maxCandies) {
            result.push(true);
        } else result.push(false);
    }
    return result;

}

const kidsWithCandiesOptimized = (candies, extraCandies) => {
    const maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
}

//console.log(kidsWithCandiesOptimized([7, 3, 9, 2, 4], 5))

//Roman to Integer 
const romanToInt = (s) => {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let next = s[i + 1];
        if (values[current] < values[next]) {
            total -= values[current];
        } else {
            total += values[current];
        }
    }
    return total;
}

//Best Time to Buy and Sell
const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }

    return maxProfit;

}

//console.log(maxProfit([3, 2, 6, 5, 0, 3]));

//Zigzag conversion
const convert = (s, numRows) => {
    if (numRows === 1) return s;

    let rows = new Array(numRows).fill("");

    let currentRow = 0; //track current row being filled
    let goingDown = false; //track direction of filling

    for (let i = 0; i < s.length; i++) {
        //append character to the current row
        rows[currentRow] += s[i];
        //change direction at first and last rows
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        //move to the next row based on the direction
        goingDown ? currentRow++ : currentRow--;
    }
    //combine all rows to form final result
    return rows.join("");
}

//console.log(convert("ABCDE", 2))

//Jump game
const canJump = (nums) => {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}

let nums = [2, 0, 2, 0, 1]
//console.log(canJump(nums));

//jump game 2
const canJump2 = (nums) => {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    return jumps;
}

//console.log(canJump2([2, 3, 2, 2, 1]))

