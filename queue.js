const reverseQueue = (queue) => {
    let result = [];
    for (let i = queue.length - 1; i >= 0; i--) {
        result.push(queue[i]);
    }
    return result;
}

const reverseQueueAlt = (queue) => {
    let stack = [];
    while (queue.length !== 0) {
        stack.push(queue[0]);
        queue.shift();
    }

    while (stack.length !== 0) {
        queue.push(stack.pop())
    }

    return queue;
}

//console.log(reverseQueueAlt([1, 2, 3, 4, 5]));

//implement stack using queues
class StackSolution {
    constructor() {
        this.main = [];
        this.aux = [];
    }

    push(val) {
        this.aux.push(val);
        while (this.main.length > 0) {
            this.aux.push(this.main.shift());
        }
        [this.main, this.aux] = [this.aux, this.main];
    }

    pop() {
       return this.main.shift();
    }
}

const generateBinaryNumbers = (n) => {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let num = i;
        let binary = [];
        while (num > 0) {
            binary.push(num % 2);
            num = Math.floor(num / 2);
        }
        res.push(binary.reverse().join(''));
    }
    return res;
}

//console.log(generateBinaryNumbers(5));

const checkPalindrome = (s) => {
    let arr = s.split('');
    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome('panama'));

//zigzag Iterator
class Solution {
    constructor(v1, v2) {
        this.queue = [];
        if (v1.length !== 0) this.queue.push([v1, 0]);
        if (v2.length !== 0) this.queue.push([v2, 0]);
        console.log(this.queue);
    }
    
    next() {
        let [arr, index] = this.queue.shift();
        let value = arr[index];
        if(index < arr.length - 1) {
            this.queue.push([arr, index + 1]);
        }
        console.log(this.queue);

        return value;
    }
    
    hasNext() {
        return this.queue.length > 0;
    }
}

function main() {
    let i = new Solution([1, 2], [3, 4, 5, 6]);
    console.log(i.next());
    console.log(i.next());
    console.log(i.next());
    console.log(i.next());
}
//main();

const printMax = (arr, k) => {
    let deque = [];
    let result = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        while(deque.length > 0 && deque[deque.length - 1] <= arr[i]) {
            deque.pop();
        }
        deque.push(i);

        if(deque[0] < i - k + 1) {
            deque.shift();
        }

        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }
    return result;
}