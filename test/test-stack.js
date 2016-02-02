const expect = require('chai').expect;
var Stack = require('../src/stack');

describe('Stack', function () {
  var stack;

  beforeEach(function () {
    stack = new Stack();
  })

  describe("#pop()", function () {
    it('returns NULL when there are no objects', function () {
      expect(stack.pop()).to.be.null;
    });
    it('returns items in LIFO order', function () {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).to.equal(3);
      expect(stack.pop()).to.equal(2);
      expect(stack.pop()).to.equal(1);

      
      expect(stack.pop()).to.be.null;
    });
  });

  describe("#push()", function () {

  });
});
