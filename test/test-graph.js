const expect = require('chai').expect;
var DirectedEdge = require('../index');

describe('DirectedEdge', function() {
  var h = 5,
      t = 6,
      w = 7;
  var e = new DirectedEdge(
    { head: h,
      tail: t,
      weight: w
    }
  );

  describe('#get_weight()', function() {
    it('returns the edge weight', function() {
      expect(e.get_weight()).to.equal(w);
    });
  });

  describe('#get_of()', function() {
    it('returns the vertex head', function() {
      expect(e.get_of()).to.equal(h);
    });
  });

  describe('#get_to()', function() {
    it('returns the vertex tail', function() {
      expect(e.get_to()).to.equal(t);
    });
  });
});
