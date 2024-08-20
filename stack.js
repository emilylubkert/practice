//stack: LIFO

const isValid = (s) => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' ||
            s[i] === '{' ||
            s[i] === '['
        ) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false;
            let top = stack.pop();
            if (s[i] === ')' && top !== '(') return false;
            if (s[i] === '}' && top !== '{') return false;
            if (s[i] === ']' && top !== '[') return false;
        }
    }
    return !stack.length;
}

//console.log(isValid("{[()]}"));

const reverseString = (s) => {
    let stack = '';
    for (let i = s.length - 1; i >= 0; i--) {
        stack += s[i];
    }
    return stack;

}

//console.log(reverseString("Hello, World!"));

const decimalToBinary = (num) => {
    let stack = [];
    while (num > 0) {
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }
    return stack.reverse().join("");
}

//console.log(decimalToBinary(2));

const nextLargerElement = (arr) => {
    let res = new Array(arr.length).fill(-1);
    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length) {
            res[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }
    return res;
}

//console.log(nextLargerElement([13, 7, 6, 12]));

const sortStack = (stack) => {
    let tempStack = [];
    while (stack.length) {
        let temp = stack.pop();
        while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    return tempStack;
}

//console.log(sortStack([34, 3, 31, 98, 92, 23]));

const simplifyPath = (path) => {
    let components = path.split("/");
    let stack = [];
    for (let dir of components) {
        if (dir === '..') {
            if (stack.length) {
                stack.pop();
            }
        }
        else if (dir && dir !== '.') stack.push(dir);
    }
    return '/' + stack.join('/');
}

//console.log(simplifyPath("/a//b////c/d//././/.."));

const removeDuplicates = (s) => {
    let stack = [];
    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}

//console.log(removeDuplicates("abbaca"));

const removeStars = (s) => {
    let stack = [];
    for (let char of s) {
        if (char !== '*') {
            stack.push(char);
        } else {
            if (stack.length > 0) {
                stack.pop();
            }
        }
    }
    return stack.join('');
}

//console.log(removeStars("abc*de*f"));

const makeGood = (s) => {
    let stack = [];
    for (let char of s) {
        if (stack.length > 0
            && stack[stack.length - 1].toLowerCase() === char.toLowerCase()
            && stack[stack.length - 1] !== char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
}

console.log(makeGood("AaBbCcDdEeff"));