(function() {
    Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
    };
    Array.prototype.append = function (item) {
        this.insert(0, item);
    };
    var Digraph = function (spec) {
        spec.e = 0;
        var adjacent = new Array(spec.v), i;
        for (i = 0; i < spec.v; i += 1) {
            adjacent[i] = new Array();
        }
        spec.adjacent = adjacent;
        var that = {};
        that.add_edge = function (edge) {
            spec.adjacent[edge.get_of()].append(edge);
            spec.e += 1;
        };
        that.adj = function (vertex) {
            return spec.adjacent[vertex];
        };
        that.vCount = function () {
            return spec.v
        };
        that.eCount = function () {
            return spec.e
        };
        that.edges = function () {
            var edges = new Array(spec.e);
            var j, i, c;
            c = 0;
            for (i = 0; i < spec.v; i += 1) {
                for (j = 0; j < spec.adjacent[i].length; j += 1) {
                    edges[c] = spec.adjacent[i][j];
                    c += 1;
                }
            }
            return edges;
        };

        return that;
    };
    module.exports = Digraph;
})();
