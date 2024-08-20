let runningSum = (nums) => {
    if (!nums || nums.length === 0) return [];
    const result = new Array(nums.length);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result[i] = sum;
    }

    return result;
}

//let nums = [-1, 2, -3, 4, -5];
//console.log(runningSum(nums));

let containsDuplicate = (nums) => {
    let potentialMatch = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!potentialMatch.has(nums[i])) {
            potentialMatch.add(nums[i]);
        } else return true;
    }
    return false;
}

//let nums= [1, 2, 3, 4]
//console.log(containsDuplicate(nums));

let findDifferenceArray = (nums) => {
    const n = nums.length;
    const differenceArray = new Array(n).fill(0);
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);

    for (let j = 0; j < nums.length; j++) {
        let current = nums[j];
        rightSum -= current;
        let difference = Math.abs(rightSum - leftSum);
        differenceArray[j] = difference;
        leftSum += current;
    }

    return differenceArray;
}

//let nums = [2, 5, 1, 6, 1];
//console.log(findDifferenceArray(nums));

let largestAltitude = (gain) => {
    let maxAltitude = 0;
    let currentAltitude = 0;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        maxAltitude = Math.max(currentAltitude, maxAltitude);
    }
    return maxAltitude;
}

let nums = [-5, 1, 5, 0, -7];
//console.log(largestAltitude(nums));


const mergeTwoArrays = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;

    let result = [];

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            result.push(arr1[p1]);
            p1++;
        } else {
            result.push(arr2[p2]);
            p2++;
        }
    }

    return result.concat(arr1.slice(p1), arr2.slice(p2));
}

let arr1 = [1, 2, 8, 9]
let arr2 = [5, 6, 7]
//console.log(mergeTwoArrays(arr1, arr2));

const mergeInPlace = (nums1, m, nums2, n) => {
    //3 pointers
    let i = m - 1; // Last element in nums1 that should be merged
    let j = n - 1; // Last element in nums2
    let k = m + n - 1; // Last index in nums1

    //start merging from the end of both arrays
    while (i >=0 && j >= 0) {
        if (nums1[i] > nums2[k]) {
            nums1[k] = nums1[i];
            i--
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them
    while (j >=0) {
        nums[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

console.log(mergeInPlace([1,2,3,0,0,0], 3, [2,5,6], 3))