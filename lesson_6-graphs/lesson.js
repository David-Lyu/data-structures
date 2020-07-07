//Edge List
// example of of an edgelist in this case a undirected, unweighted, cyclic graph
//      2--------------0
//  1       3

const graphEdgeList = [[0,2],[2,3],[2,1],[1,3]];
//shows relationship between the inner arrays elements
    // 0 is related to two, 2 is related to 3 and so forth;


//Adjacent List
//where index is the node and the value is the nodes neighbors
//use array obj or linked list
const graphAdjacentList = [[2], [2,3], [0,1,3], [1,2]];
//in our actualy build going to use obj

//Adjacent Matrix
// represented by 1's and 0's
//node 0(index 1) is conected to its inner index at 2
//node 1 is connected to 2, and 3
//node 2 is connected to 0, 1, 3
//node 3 is connected to 1, 2
const graphAdjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

//each graph can be represented by each other


//creating an undirected cyclic and unweighted graph
//using hash map to create graphs

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        //undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1)
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for(const node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = " ";
            for (const vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + " ==>" + connections)
        }
    }
}

var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 