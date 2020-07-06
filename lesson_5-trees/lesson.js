//A basic structure of binary tree

// function BiinaryTreeNode(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
// }

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)

        if(!this.root) {
            return this.root = newNode
        }

        let node = this.root;
        while(node.value) {
            if(newNode.value < node.value) {
                if(node.left) {
                    node = node.left;
                } else {
                    return node.left = newNode;
                }
            } else {
                if(node.right) {
                    node = node.right;
                } else {
                    return node.right = newNode;
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) {
            return undefined;
        }
        let node = this.root;
        while(node) {
            if(value < node.value) {
                    node = node.left;
            } else if (node.value === value) {
                return value;
            } else {
                    node = node.right
            }
        }
        return undefined
    }

    remove(value) {
        if(!this.lookup(value)) {
            return undefined;
        };
        let node = this.root;
        let parentNode = null;
        while(node) {
            if(value < node.value) {
                parentNode = node;
                node = node.left
            } else if (node.value > value) {
                node = node.right;
                parentNode = node;
            } else {
                if(!node.right) {
                    if (parentNode === null) {
                        this.root = current.left;
                    } else {
                        if (node.value < parentNode.value) {
                            parentNode.left = node.left
                        } else if (node.value > parentNode.value) {
                            parentNode.right = node.left;
                        }
                    }
                } else if (!node.right.left) {
                    if(parentNode === null) {
                        this.root = node.left
                    } else {
                        node.right.left = node.left;

                        if(node.value < parentNode.value) {
                            parentNode.left = node.right;
                        } else if (node.value > parentNode.value) {
                            parentNode.right = node.right;
                        }
                    }
                } else {
                    let leftMost = node.right.left;
                    let leftMostParent = node.right;
                    while (leftMost.left !== null) {
                        leftMostParent = leftMost;
                        leftMost = leftMost.left;
                    }

                    leftMostParent.left = leftMost.right;
                    leftMost.left = node.left;
                    leftMost.right = node.right;

                    if (parentNode === null) {
                        this.root = leftMost;
                    } else {
                        if (node.value < parentNode.value) {
                            parentNode.left = leftMost;
                        } else {
                            if(node.value > parentNode.value) {
                                parentNode.right = leftMost;
                            }
                        }
                    }
                    return true;
                }
            }
        }
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root))
tree.lookup(170)
tree.lookup(0)



//      9
//  4       20
//1   6   15   170
