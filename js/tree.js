class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (newNode.value >= currentNode.value) {
        if (!currentNode.rigth) {
          currentNode.rigth = newNode;
          return;
        }
        currentNode = currentNode.rigth;
      }
    }
  }

  traverseTree(node) {
    if (!node) {
      return;
    } else {
      console.log(node.value);
    }

    this.traverseTree(node.left);
    this.traverseTree(node.rigth);
  }
}

const tree = new BinaryTree();

tree.add(8);
tree.add(7);
tree.add(9);
tree.add(5);
tree.add(10);
tree.add(20);
tree.add(6);
tree.add(2);
tree.add(11);

tree.traverseTree(tree.root);
console.log(tree);
