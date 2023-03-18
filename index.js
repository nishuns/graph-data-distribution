const nodeData = require('./node.json');
const Node = require('./Node');

// console.log(nodeData)

function renderNodesFromJsonToInstance(node) {
    const newNode = new Node();
    newNode.convertJSONToInstance(node);
}

renderNodesFromJsonToInstance(nodeData);