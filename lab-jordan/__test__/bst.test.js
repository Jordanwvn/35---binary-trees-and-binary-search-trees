const BST = require('../lib/bst.js');
const TreeNode = require('../lib/bst.js');
require('jest');

describe('Bst', function () {
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
    it('should create a Binary Search Tree and set the root to null', () => {
      let bst = new BST();
      bst.insert(10);
      bst.insert(5);
      bst.insert(12);
      expect(bst.root).toBe(10);
    });

    // it('should create a new Bst instance', () => {
    //   let bst = new BST();
    //   expect(bst).toBeInstanceOf(BST);
    // });

    // it('should create a new Bst instance', () => {
    //   let bst = new BST();
    //   expect(bst).toBeInstanceOf(BST);
    // });
  });
});
