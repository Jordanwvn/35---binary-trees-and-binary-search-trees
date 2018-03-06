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

  insert(nodeToInsert, root=this.root) {
    // no root
    if (!root) {
      this.root = nodeToInsert;
    // going left
    } else if (nodeToInsert.value < root.value) {
      root.left ? this.insert(root.left, nodeToInsert)
        : root.left = nodeToInsert;
    // going right
    } else {
      !root.right ? this.insert(root.right, nodeToInsert)
        : root.right = nodeToInsert;
    }
  }

  find(root=this.root, value) {
    return value === root.value ? root
      : value > root.value ? this.find(root.right, value)
        : value < root.value ? this.find(root.left, value)
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

  // TODO doesn't actually work. Left overall side could still be deeper than right overall side
  // isBalanced() {
  //   let balanced = true;
  //   this.preOrderTraversal(this.root, (currentNode) => {
  //     let leftDepth, rightDepth;
  //
  //     // check left-side depth
  //     node.left ? (node.left || node.right) ? leftDepth = 2 : leftDepth = 1 : leftDepth = 0;
  //     // check right-side depth
  //     node.right ? (node.left || node.right) ? rightDepth = 2 : rightDepth = 1 : rightDepth = 0;
  //
  //     if ((leftDepth === 0 && rightDepth === 2) || (leftDepth === 2 && rightDepth === 0)) {
  //       balanced = false;
  //     }
  //   })
  //   return balanced;
  // }

  // replaceL(node) {
  //   if (!node.right.right) {
  //     let result = node.right;
  //     node.right = node.right.left;
  //     return result;
  //   } else {
  //     return replaceL(node.right);
  //   }
  // }
  //
  // replaceR(node) {
  //   if (!node.left.left) {
  //     let result = node.left;
  //     node.left = node.left.right;
  //     return result;
  //   } else {
  //     return replaceL(node.left);
  //   }
  // }

  // remove(root=this.root, value) {
  //   let target;
  //   // if the root IS the value
  //   if (root === value) {
  //     target = root.left ? 'root left' : root.right ? 'root right' : 'empty';
  //   // if the root is NOT the value
  //   } else {
  //     target = root.left === value ? 'left' : root.right === value ? 'right' : null;
  //   }
  //   // base cases
  //   switch (target) {
  //
  //     case 'root left':
  //       return this.replaceL(root)
  //
  //     case 'left':
  //       return this.replaceL(root[target])
  //
  //     case 'root right':
  //       return this.replaceR(root)
  //
  //     case 'right':
  //       return this.replaceR(root[target])
  //
  //     case 'empty': {
  //       this.root = null;
  //       return;
  //     }
  //     // recursive case
  //     default: {
  //       // recurse left
  //       if (value < root.value) return root.left ? this.remove(root.left, value) : null;
  //       // recurse right
  //       if (value > root.value) return root.right ? this.remove(root.right, value) : null;
  //     }
  //   }
  // }
};
