import Data from '../../data.json' assert {type: 'json'};
console.log(Data);
// import G6 from 'antv/g6'
const data = {
  // The array of nodes
    nodes: [
      {
        id: 'node1', // String, unique and required
        x: 100, // Number, the x coordinate
        y: 200, // Number, the y coordinate
        label: 'Source', // The label of the node
      },
      {
        id: 'node2',
        x: 300,
        y: 200,
        label: 'Target',
      },
    ],
    // The array of edges
    edges: [
      // An edge links from node1 to node2
      {
        source: 'node1', // String, required, the id of the source node
        target: 'node2', // String, required, the id of the target node
        label: 'I am an edge', // The label of the edge
      },
    ],
};

const graph = new G6.Graph({
  container: 'mountNode', // String | HTMLElement, required, the id of DOM element or an HTML node
  width: 800, // Number, required, the width of the graph
    height: 500, // Number, required, the height of the graph
  fitView: true,
  fitViewPadding: [20, 40, 50, 20],
});


const main = async () => {
    const response = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json'
    );
    const remoteData = Data;
    const nodes = remoteData.nodes;
    nodes.forEach((node) => {
        if (!node.style) {
            node.style = {};
        }
        switch (
            node.class // Configure the graphics type of nodes according to their class
        ) {
            case 'c0': {
            node.type = 'circle'; // The graphics type is circle when class = 'c0'
            break;
            }
            case 'c1': {
            node.type = 'rect'; // The graphics type is rect when class = 'c1'
            node.size = [35, 20]; // The node size when class = 'c1'
            break;
            }
            case 'c2': {
            node.type = 'ellipse'; // The graphics type is ellipse when class = 'c2'
            node.size = [35, 20]; // The node size when class = 'c2'
            break;
            }
        }
    });

    // Traverse the egdes data
    const edges = remoteData.edges;
    edges.forEach((edge) => {
    if (!edge.style) {
        edge.style = {};
    }
        edge.style.lineWidth = edge.weight; // Mapping the weight in data to lineWidth
        edge.style.opacity = 0.6;
        edge.style.stroke = 'red';
    });
    graph.data(remoteData); // Load the data defined in Step 2
    graph.render(); // Render the graph
    console.log(graph);
}

main();