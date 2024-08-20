//Pair with Target Sum 
const search = (arr, targetSum) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) return [left, right];
        else if (currentSum > targetSum) right--;
        else left++;
    }
    return [-1, -1]
}

console.log(search([1, 2, 3, 4, 6], 6))