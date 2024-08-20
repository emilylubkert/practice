class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// const head = new Node("Node1");
// head.next = new Node("Node2");
// head.next.next = new Node("Node3");

// let current = head;
// while (current) {
//     console.log(current.data);
//     current = current.next;
// }

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAfter(prev, val) {
        if (prev === null) {
            console.log("previous node does not exist");
            return;
        }
        let newNode = new Node(val);
        newNode.next = prev.next;
        prev_node.next = newNode;
    }

    delete(key) {
        let temp = this.head, prev = null;
        if (temp !== null && temp.val === key) {
            this.head = temp.next;
            return;
        }
        while (temp !== null && temp.val !== key) {
            prev = temp;
            temp = temp.next;
        }
        if (temp === null) return;
        prev.next = temp.next;
    }

    search(key) {
        let current = this.head; // Initialize current to head
        while (current !== null) {
            if (current.val === key) // If the key is found, return true
                return true;
            current = current.next; // Move to the next node
        }
        return false; // Key not found, return false
    }
}

const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const deleteDuplicates = (head) => {
    if (!head || head.next === null) return head;
    let current = head;
    while (current !== null && current.next !== null) {
        let temp = current.val;
        let next = current.next.val;
        if (temp === next) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

const mergeTwoLists = (l1, l2) => {
    let dummy = new Node(-1)
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;

    return dummy.next;
}

// class DLNode {
//     constructor(val, next = null, prev = null) {
//         this.val = val;
//         this.next = next;
//         this.prev = prev;
//     }
// }

const isPalindrome = (head) => {
    if(!head || !head.next) return true;
    let start = head;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    let end = tail;
    while (start !== end && start.prev !== end) {
        if (start.val !== end.val) {
            return false
        } else {
            start = start.next;
            end = end.prev;
        }
    }
    return true;
}

const swapPairs = (head) => {
    if (!head.next) return head;
    let dummy = new Node(0);
    dummy.next = head;
    let prev = dummy;

    while(head && head.next) {
        let firstNode = head;
        let secondNode = head.next;

        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        prev.next = secondNode;

        head = firstNode.next;
        prev = firstNode;
    }
    return dummy.next;
}