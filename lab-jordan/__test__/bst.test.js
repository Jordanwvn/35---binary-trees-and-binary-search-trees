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
    it('should have a root value of 10', () => {
      expect(bst.root.value).toBe(10);
    });

    it('should have a left value of 5', () => {
      expect(bst.root.left.value).toBe(5);
    });

    it('should have a right value of 12', () => {
      expect(bst.root.right.value).toBe(12);
    });
  });
});
