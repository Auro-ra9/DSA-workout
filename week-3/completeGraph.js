class CompleteGraph {
    constructor(n) {
        this.n = n; // Number of vertices
        this.adjList = new Map(); // Adjacency list to store graph edges
        this.createCompleteGraph(); // Create the complete graph
    }

    // Create a complete graph with n vertices
    createCompleteGraph() {
        for (let i = 0; i < this.n; i++) {
            this.adjList.set(i, []); // Initialize empty adjacency list for each vertex
        }

        // Add edges between every pair of vertices
        for (let i = 0; i < this.n; i++) {
            for (let j = i + 1; j < this.n; j++) {
                this.adjList.get(i).push(j);
                this.adjList.get(j).push(i); // Since it's an undirected graph
            }
        }
    }

    // Display the graph as an adjacency list
    displayGraph() {
        for (let [vertex, edges] of this.adjList) {
            console.log(`Vertex ${vertex}: ${edges.join(", ")}`);
        }
    }
}

// Example usage:
const completeGraph = new CompleteGraph(4); // Complete graph with 4 vertices
completeGraph.displayGraph();

// Output:
// Vertex 0: 1, 2, 3
// Vertex 1: 0, 2, 3
// Vertex 2: 0, 1, 3
// Vertex 3: 0, 1, 2
