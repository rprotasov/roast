const expect = require('chai').expect;
var Digraph = require('../src/graph');
var DirectedEdge = require('../src/edge');

describe('Digraph', function () {
    var v = 10, g;

    beforeEach(function () {
        g = new Digraph({v: v});
    });

    describe('#vCount()', function () {
        it('return the vertex count', function () {
            expect(g.vCount()).to.equal(v);
        });
    });

    describe('#eCount()', function () {
        it('return the inital edge count', function () {
            expect(g.eCount()).to.equal(0);
        })
    });

    describe('#add_edge()', function () {
        it('adds a new edge to adjacency table', function () {
            var edges = [
                new DirectedEdge({head: 1, tail: 0, weight: 5}),
                new DirectedEdge({head: 0, tail: 3, weight: 15}),
                new DirectedEdge({head: 0, tail: 5, weight: 7})
            ], head;

            expect(g.edges()).to.be.empty;

            g.add_edge(edges[0]);

            head = edges[0].get_of();

            expect(g.eCount()).to.equal(1);
            expect(g.adj(head)).to.have.length(1);
            expect(g.adj(head)).to.include(edges[0]);

            g.add_edge(edges[1]);
            g.add_edge(edges[2]);

            head = edges[1].get_of();

            expect(g.eCount()).to.equal(3);
            expect(g.adj(head)).to.have.length(2);
            expect(g.adj(head)).to.eql([edges[2], edges[1]]);
        });
    });

    describe('#edges()', function () {
        it("aggregates and returns all edges in graph", function () {
            var edges = [
                new DirectedEdge({head: 1, tail: 0, weight: 5}),
                new DirectedEdge({head: 2, tail: 3, weight: 15}),
                new DirectedEdge({head: 3, tail: 5, weight: 7})
            ], i;

            expect(g.edges()).to.be.empty;

            for (i = 0; i < 3; i++) {
                g.add_edge(edges[i]);
            }

            expect(g.eCount()).to.equal(3);
            expect(g.edges()).to.have.length(3);
            expect(g.edges()).to.eql(edges);
        });
    });
})
