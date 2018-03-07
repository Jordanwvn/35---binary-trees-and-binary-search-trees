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

  findNode(value, root=this.root) {
    switch (true) {
    case root.value === value:
      return root;
    case value < root.value && !!root.left:
      return this.find(value, root.left);
    case value > root.value && !!root.right:
      return this.find(value, root.right);
    default:
      return null;
    }
  }

  preOrderTraverse (node, callback) {
    if (node) callback(node);
    if (node && node.left) traverse(node.left, callback);
    if (node && node.right) traverse(node.right, callback);
  }

  inOrderTraverse (node, callback) {
    if (node && node.left) traverse(node.left, callback);
    if (node) callback(node);
    if (node && node.right) traverse(node.right, callback);
  }

  postOrderTraverse (node, callback) {
    if (node && node.left) traverse(node.left, callback);
    if (node && node.right) traverse(node.right, callback);
    if (node) callback(node);
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

  largest(node) {
    return !!node.right ? this.largest(node.right) : node.value;
  }

  remove(value) {
    if (typeof value !== 'number')
      throw new TypeError('value must be a number');
    // nothing to remove if the tree is empty
    if (!this.root)
      return false;

    // edge case: value to remove is the root
    // use the dummy root approach
    if (value === this.root.value) {
      let dummy = new TreeNode(0);
      // set dummy node as parent of actual root
      dummy.left = this.root;
      let result = this._remove(this.root, value, dummy);
      // set new root to the left child of dummy
      this.root = dummy.left;
      return result;
    }

    return this._remove(this.root, value);
  }

  _remove(node, value, parent) {
    // assume success, set false when not possible
    let result = true;

    switch (true) {
    case value < node.value:
      result = node.left ? this._remove(node.left, value, node) : false;
      break;

    case value > node.value:
      result = node.right ? this._remove(node.right, value, node): false;
      break;

    default:
      (node.left && node.right)
        ? (node.value = this._findMinimum(node.right), this._remove(node.right, node.value, node))
        : parent.left === node
          ? parent.left = (node.left ? node.left : node.right)
          : parent.right = (node.left ? node.left : node.right);
      break;
    }
    return result;
  }

  _findMinimum(node) {
    if (!node || !(node instanceof TreeNode))
      throw new TypeError('must have a valid node of type TreeNode');

    return node.left
      ? this._findMinimum(node.left)
      : node.value;
  }
};