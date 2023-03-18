const NodeSetup = require('./NodeSetup')

/**
 * --> Data types in Node Class
 * 
 * 
 * @field id: String
 *  desc id of the Node
 *  example 'Sunday' NOTE: label and id are same in our case for now
 * 
 * @field label: String
 *  desc label of the Node
 *  example 'Sunday' NOTE: label and id are same in our case for now
 * 
 * @field type: String
 *  desc type of Node in our current System we are using
 *  example 'circle', 'rect', etc...
 * 
 * @field size: Number
 *  desc size of the Node
 *  example 10 - 100
 * 
 * @field style: Object
 *  desc states of a Node in current Active graph
 *  example 
 *   {
 *    'active': {
 *     "fill": "rgb(247, 250, 255)",
       "stroke": "rgb(95, 149, 255)",
       "lineWidth": 2,
       "shadowColor": "rgb(95, 149, 255)",
       "shadowBlur": 10
      }
     }
 * 
 * @field defaultStyle: Object
 *  desc default styles of the Node in the Graph
 *  example: { 'fill': "rgb(247, 250, 255)" }
 * 
 * @field tjType: String
 *  desc tjType is a classification for Node we made for some of our features
 *  example: 'wikiLinks'
 * 
 * @field cluster: String
 *  desc cluster is group of nodes in a graph that are link together
 *       with one main node
 *  example: 'Sunday'
 * 
 * @field positions: Object
 *  desc positions of node in Graph 
 *  example: { x: 10, y: 20}
 * 
 * @field layoutOrder: Number
 *  desc not in use
 *  example: null
 * 
 * @field mass: Number
 *  desc not in use
 *  example: null
 * 
 * @field Property: Object
 *  desc custom property template can be attached with a node
 *  example: {
 *      "template-name": template 
 *  }
 */

class Node extends NodeSetup{
    constructor() {
        super();
        this.id = null;
        this.label = null;
        this.type= null;
        this.size= null;
        this.style= null;
        this.defaultStyle= null;
        this.tjType= null;
        this.cluster = null;
        this.position= {
            x: null,
            y: null
        }
        this.depth = null;
        this.layoutOrder = null;
        this.mass = null;
        this.property = {};
    }

    render(nodeData) {
        this.convertJSONToInstance(nodeData);
    }
}

module.exports = Node;
