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

    }

    addEdge(node1, node2) {
        //undirected Graph
    }

    showConnections() {

    }
}