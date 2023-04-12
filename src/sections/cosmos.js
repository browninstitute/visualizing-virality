var links = [];
var nodes = [];
var n = 100;
var m = 100;
for (var node = 0; node < n * m; node += 1) {
    nodes.push({ id: "".concat(node) });
    var nextNode = node + 1;
    var bottomNode = node + n;
    var nodeLine = Math.floor(node / n);
    var nextNodeLine = Math.floor(nextNode / n);
    var bottomNodeLine = Math.floor(bottomNode / n);
    if (nodeLine === nextNodeLine)
        links.push({ source: "".concat(node), target: "".concat(nextNode) });
    if (bottomNodeLine < m)
        links.push({ source: "".concat(node), target: "".concat(bottomNode) });
}
const cosmos_config = {
    backgroundColor: "#FFFFFF",
    nodeSize: 4,
    nodeColor: "#585858",
    nodeGreyoutOpacity: 0.1,
    linkWidth: 0.1,
    linkColor: "#585858",
    linkArrows: false,
    linkGreyoutOpacity: 0,
    simulation: {
      linkDistance: 1,
      linkSpring: 2,
      repulsion: 0.2,
      gravity: 0.1,
      decay: 10000
    }
  }
export {links as cosmos_links, nodes as cosmos_nodes, cosmos_config}

