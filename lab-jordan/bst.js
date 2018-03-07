'use strict';

class TreeNode{
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST{
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
      !root.right ? this.insert(value, root.right)
        : root.right = new TreeNode(value);
    }
  }

  find(root=this.root, value) {
    return value === root.value ? root
      : value > root.value ? this.find(root.right, value)
        : value < root.value ? this.find(root.left, value)
          : null;
  }

  findParent(value, root=this.root, parent=null, childDirection='') {
    return value === root.value ? {parent: parent, direction: childDirection}
      : value > root.value ? this.find(value, root.right, root, 'right')
        : value < root.value ? this.find(value, root.left, root, 'left')
          : null;
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


  heightOf(node) {
    // if you've recursed from a leaf, add 0
    if (!node) return 0;
    // otherwise, add 1 and recurse over whichever branch is larger
    return 1 + Math.max(this.heightOf(node.left), this.heightOf(node.right));
  }

  isBalanced(node) {
    if (!this.root) return true;

    let leftHeight = this.heightOf(node.left);
    let rightHeight = this.heightOf(node.right);

    if (Math.abs(leftHeight - rightHeight) <= 1 &&
      isBalanced(node.left) &&
      isBalanced(node.right)) return true;

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


}
