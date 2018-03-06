const BST = require('../lib/bst.js');
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

});


