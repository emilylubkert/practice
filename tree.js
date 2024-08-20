const maxDepth = (root) => {
    if (!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}

const depth = (node) => {
    if (!node) return 0
    const leftDepth = depth(node.left);
    if (leftDepth === -1) return -1;

    const rightDepth = depth(node.right);
    if (rightDepth === -1) return -1;
    
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth) + 1;
}

const isBalanced = (root) => {
    return this.depth(root) !== -1;
}