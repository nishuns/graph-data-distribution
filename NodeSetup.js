const State = require('./State');

class NodeSetup {
    constructor() {
        this.backup = null;
    }

    convertJSONToInstance(nodeData) {
        const keys = Object.keys(nodeData);
        // console.log(keys);
        for (let key of keys) { 
            // style
            if (key === 'style') {
                for (let item in nodeData[key]) {
                    console.log(item);
                    if (item !== 'stroke' && item !== 'lineWidth' && item !== 'fill') {
                        
                    }
                }
            }
        }
    }
}

module.exports = NodeSetup;