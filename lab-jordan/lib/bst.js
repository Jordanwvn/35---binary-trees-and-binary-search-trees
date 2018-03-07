'use strict';

class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
};


const BST = module.exports = class {
  constructor(root=null) {
    this.root = root;
  }

  insert(value, root=this.root) {
    // no root
    if (!root) {
      this.root = new TreeNode(value);
    // going left
    } else if (value < root.value) {
      root.left ? this.insert(value, root.left)
        : root.left = new TreeNode(value);
    // going right
    } else {
      root.right ? this.insert(value, root.right)
        : root.right = new TreeNode(value);
    }
  }

  find(value, root=this.root) {
    switch (true) {
    case root.value === value:
      return root.value;
    case value < root.value && !!root.left:
      return this.find(value, root.left);
    case value > root.value && !!root.right:
      return this.find(value, root.right);
    default:
      return null;
    }
  }

  preOrderTraversal(node=this.root, callback) {
    node ? callback(node)
      : node.left ? this.preOrderTraversal(node.left, callback)
        : node.right ? this.preOrderTraversal(node.right, callback)
          : null;
  }

  inOrderTraversal(node=this.root, callback) {
    node.left ? this.inOrderTraversal(node.left, callback)
      : node ? callback(node)
        : node.right ? this.inOrderTraversal(node.right, callback)
          : null;
  }

  postOrderTraversal(node=this.root, callback) {
    node.left ? this.postOrderTraversal(node.left, callback)
      : node.right ? this.postOrderTraversal(node.right, callback)
        : node ? callback(node)
          : null;
  }

  findParent (value, node=this.root) {
    if(node.value === null) return null;
    if(node.right === null && node.left === null) return null;
    if((node.left != null && node.left.value === value) || (node.right != null && node.right.value === value)) {
      return node.value;
    }
    if(node.value > value) return this.findParent(value, node.left);
    if(node.value < value) return this.findParent(value, node.right);
  }

  heightOf(node) {
    // if you've recursed from a leaf, add 0
    if (!node) return 0;
    // otherwise, add 1 and recurse over whichever branch is larger
    return 1 + Math.max(this.heightOf(node.left), this.heightOf(node.right));
  }

  isBalanced(node=this.root) {
    if (!this.root || !node) return true;

    let leftHeight = node.left ? this.heightOf(node.left) : 0;
    let rightHeight = node.right ? this.heightOf(node.right) : 0;

    if (Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)) return true;

    return false;
  }

  larget(node) {
    return !!node.right ? this.largest(node.right) : node.value;
  }

  remove(value) {
    let target = findParent(value);

    let parent = target.parent;
    let child = target.parent[target.direction];

    switch (true) {
    // ZERO CHILDREN
    case !child.left && !child.right:
      parent[target.direction] = null;
      break;
    // ONE CHILD RIGHT
    case !child.left && !!child.right:
      parent[targetDirection] = child.right;
      break;
    // ONE CHILD LEFT
    case !!child.left && !child.right:
      parent[targetDirection] = child.left;
      break;
    // TWO CHILDREN
    case !!child.left && !!child.right:
      let value = this.largest(child.left);
      this.remove(value)
      child.value = value;
      break;
    }
  }
};
