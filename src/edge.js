(function() {
    var Edge = function (spec) {
        var that = {};

        that.get_weight = function () {
            return spec.weight;
        };

        that.get_of = function () {
            return spec.head;
        };

        that.get_to = function () {
            return spec.tail;
        };

        return that;
    };
    module.exports = Edge;
})();
