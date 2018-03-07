const BST = require('../lib/bst.js');
const TreeNode = require('../lib/bst.js');
require('jest');

describe('BST', function () {
  describe('#constructor', () => {
    it('should create a Binary Search Tree and set the root to null', () => {
      let bst = new BST();
      expect(bst.root).toBeNull();
    });

    it('should create a new Bst instance', () => {
      let bst = new BST();
      expect(bst).toBeInstanceOf(BST);
    });
  });

  describe('#insert', () => {
    let bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(12);
    bst.insert(15);
    it('should have a root value of 10', () => {
      expect(bst.root.value).toBe(10);
    });

    it('should have a left value of 5', () => {
      expect(bst.root.left.value).toBe(5);
    });

    it('should have a right value of 12', () => {
      expect(bst.root.right.value).toBe(12);
    });

    it('should have a value of 15 under the right of 12', () => {
      expect(bst.root.right.right.value).toBe(15);
    });
  });

  describe('#find', () => {
    let bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(12);
    bst.insert(15);
    it('should return a number', () => {
      expect(typeof bst.find(5)).toBe('number');
    });

    it('should have find value of 5', () => {
      expect(bst.find(5)).toBe(5);
      expect(bst.find(10)).toBe(10);
      expect(bst.find(12)).toBe(12);
    });

    it('should return null if the value passed in does not exist', () => {
      expect(bst.find(25)).toBeNull();
    });
  });

  describe('#findParent', () => {
    let bst = new BST();
    bst.insert(10);
    bst.insert(5);
    bst.insert(12);
    bst.insert(15);
    bst.insert(null);
    it('should have a root value of 10', () => {
      expect(bst.findParent(15)).toBe(12);
    });

    it('should have a root value of 10', () => {
      expect(bst.findParent(5)).toBe(10);
    });

    it('should be null if node is equal to null', () => {
      expect(bst.root.left.left.value).toBeNull();
    });
  });

  describe('#isBalanced', () => {
    it('should return true there is no root', () => {
      let bst = new BST();
      expect(bst.isBalanced()).toBe(true);
    });

    it('should return false for a not balanced tree', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(5);
      bst.insert(12);
      bst.insert(13);
      bst.insert(14);
      expect(bst.isBalanced()).toBe(false);
    });

    it('should return true for a balanced tree', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(5);
      bst.insert(12);
      expect(bst.isBalanced()).toBe(true);
    });
  });

  describe('#preOrderTraversal', () => {
    it('should return true there is no root', () => {
      let bst = new BST();
      expect(bst.isBalanced()).toBe(true);
    });

    it('should return false for a not balanced tree', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(5);
      bst.insert(12);
      bst.insert(13);
      bst.insert(14);
      expect(bst.isBalanced()).toBe(false);
    });

    it('should return true for a balanced tree', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(5);
      bst.insert(12);
      expect(bst.isBalanced()).toBe(true);
    });
  });

  describe('#remove', () => {
    it('should remove a node with zero children', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(20);
      expect(bst.remove(20)).toBe(true);
    });

    it('should remove a node with one children', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(20);
      bst.insert(40);
      expect(bst.remove(20)).toBe(true);
    });

    it('should remove a node with two children', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(20);
      bst.insert(40);
      bst.insert(15);
      expect(bst.remove(20)).toBe(true);
    });
  });
});