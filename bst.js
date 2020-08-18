class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {

        if (!this.root) {
            this.root = new Node(value)
            return this
        }

        let currentNode = this.root
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new Node(value)
                    return this
                }
                currentNode = currentNode.left
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new Node(value)
                    return this
                }
                currentNode = currentNode.right
            }
        }

    }

    find(value) {
        if (this.root === null) {
            return false
        }

        let currentNode = this.root
        let isFound = false
        while (!isFound && currentNode) {
            if (currentNode.value > value) {
                currentNode = currentNode.left
            } else if (currentNode.value < value) {
                currentNode = currentNode.right
            } else {
                isFound = true
            }
        }

        return currentNode
    }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(15)
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(12)
tree.insert(0)
console.log(tree.find(0))
console.log(tree.find(100))
console.log(JSON.stringify(tree, undefined, 5))
