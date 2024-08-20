const maximumWealth = (accounts) => {
    let maxWealth = 0;
    let currentWealth = 0;
    for(let account of accounts) {
        currentWealth = account.reduce((prev, curr) => prev + curr, 0);
        maxWealth = Math.max(currentWealth, maxWealth);
    }
    return maxWealth;
}

//console.log(maximumWealth([[10,100],[200,20],[30,300]]))

const diagonalSum = (matrix) => {
    let totalSum = 0;
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        totalSum += matrix[i][i];
        totalSum += matrix[i][n - 1 - i];
    }
    if (n % 2 !== 0) {
        let middle = Math.floor(n / 2);
        totalSum -= matrix[middle][middle];
    }
    return totalSum;
}

// console.log(diagonalSum([[1,2,3],
//     [4,5,6],
//     [7,8,9]]))

const findMaxOnesRow = (matrix) => {
    let maxOnesIdx = 0;
    let maxOnesCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentSum = matrix[i].reduce((a, b) => a + b, 0);
        if (currentSum > maxOnesCount) {
            maxOnesIdx = i;
            maxOnesCount = currentSum
        }      
    }
    return [maxOnesIdx, maxOnesCount];
}

console.log(findMaxOnesRow([[0, 1, 1], [0, 1, 1], [1, 1, 1]]));