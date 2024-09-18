// Notes:
// Graph Structure: This graph implementation uses an adjacency list, which is a common way to represent a graph.
//  Each vertex is a key in an object, and the value is a set of connected vertices.

// BFS (Breadth-First Search): Explores all the neighbors of a vertex before moving on to their neighbors.
//  It uses a queue (FIFO) to keep track of vertices to visit.

// DFS (Depth-First Search): Explores as far down one path before backtracking.
//  It uses a stack (LIFO) or recursion. The iterative approach uses an explicit stack,
//   while the recursive approach uses the call stack.

// Insert and Remove: Vertices and edges are inserted and removed in the graph while maintaining
//  the connections between vertices. This helps in dynamically constructing and deconstructing the graph.

class Graph {
  constructor() {
    // This is an object to store all the vertices and their connections (edges)
    // Each vertex will be a key, and its value will be a set of connected vertices
    this.adjacentList = {};
  }

  // Method to add a vertex to the graph
  insertVertex(value) {
    // If the vertex does not already exist, create a new set for it
    if (!this.adjacentList[value]) {
      this.adjacentList[value] = new Set();
    }
  }

  // Method to add an edge (connection) between two vertices
  insertEdge(vertex1, vertex2) {
    // If vertex1 does not exist, add it to the graph
    if (!this.adjacentList[vertex1]) {
      this.insertVertex(vertex1);
    }

    // If vertex2 does not exist, add it to the graph
    if (!this.adjacentList[vertex2]) {
      this.insertVertex(vertex2);
    }

    // Add an edge (connection) from vertex1 to vertex2 and vice versa
    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  // Method to remove an edge (connection) between two vertices
  removeEdge(vertex1, vertex2) {
    // Remove the connection from both vertex1 and vertex2
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }

  // Method to check if there is an edge between two vertices
  hasEdge(vertex1, vertex2) {
    // If either vertex doesn't exist, return an error message
    if (!this.adjacentList[vertex1]) {
      return `Can't find the ${vertex1}`;
    }
    if (!this.adjacentList[vertex2]) {
      return `Can't find the ${vertex2}`;
    }
    // Return true if both vertices are connected, otherwise false
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  // Method to remove a vertex and all its connections (edges)
  removeVertex(vertex) {
    // If the vertex doesn't exist, do nothing
    if (!this.adjacentList[vertex]) {
      return;
    }

    // For each vertex connected to the one being removed, delete the connection
    for (const adjacentVertex of this.adjacentList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    // Finally, remove the vertex itself from the graph
    delete this.adjacentList[vertex];
  }

  // Method to display the graph as adjacency list
  display() {
    // Loop through each vertex and print its connections (edges)
    for (const vertex in this.adjacentList) {
      console.log(vertex + " => " + [...this.adjacentList[vertex]]);
    }
  }

  // Breadth-First Search (BFS) - a way to traverse the graph level by level
  bfs(start) {
    const queue = [start]; // Initialize the queue with the starting vertex
    const result = []; // Array to store the order of traversal
    const visited = new Set(); // Set to track visited vertices
    let currentVertex;

    visited.add(start); // Mark the start vertex as visited

    // While there are vertices to visit
    while (queue.length) {
      currentVertex = queue.shift(); // Get the vertex at the front of the queue
      result.push(currentVertex); // Add it to the result array

      // Visit each neighbor
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          // If the neighbor hasn't been visited
          visited.add(neighbor); // Mark it as visited
          queue.push(neighbor); // Add it to the queue for future visits
        }
      });
    }
    return result; // Return the order of traversal
  }

  // Depth-First Search (DFS) - Recursive version
  dfsRecursive(start) {
    const result = []; // Array to store the order of traversal
    const visited = new Set(); // Set to track visited vertices
    const adjacencyList = this.adjacentList;

    // Helper function to perform DFS
    function dfs(vertex) {
      if (!vertex) return; // Base case: if the vertex is null, stop recursion
      visited.add(vertex); // Mark the vertex as visited
      result.push(vertex); // Add it to the result array

      // Visit each neighbor
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          // If the neighbor hasn't been visited
          dfs(neighbor); // Recur for the neighbor
        }
      });
    }

    dfs(start); // Start the DFS with the start vertex
    return result; // Return the order of traversal
  }

  // Depth-First Search (DFS) - Iterative version
  dfsIterative(start) {
    const stack = [start]; // Initialize the stack with the starting vertex
    const result = []; // Array to store the order of traversal
    const visited = new Set(); // Set to track visited vertices
    let currentVertex;

    visited.add(start); // Mark the start vertex as visited

    // While there are vertices to visit
    while (stack.length) {
      currentVertex = stack.pop(); // Get the vertex at the top of the stack
      result.push(currentVertex); // Add it to the result array

      // Visit each neighbor
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          // If the neighbor hasn't been visited
          visited.add(neighbor); // Mark it as visited
          stack.push(neighbor); // Add it to the stack for future visits
        }
      });
    }
    return result; // Return the order of traversal
  }

  // Method to find the second node in the graph
  findSecondNode() {
    // Get all vertices in the graph
    let vertex = Object.keys(this.adjacentList);

    // If there are less than 2 vertices, return an error message
    if (vertex.length < 2) {
      return "there is no second vertex";
    }

    // Return the second vertex
    return vertex[1];
  }

  // Method to get the degree (number of connections) of a vertex
  getDegree(vertex) {
    // If the vertex does not exist, return undefined
    if (!this.adjacentList[vertex]) {
      return;
    }

    // Return the size of the set of connected vertices
    return this.adjacentList[vertex].size;
  }

  //for displaying only one particular vertex and it's connections
  displayVertices(vertex) {
    if (this.adjacentList[vertex]) {
      console.log(vertex + "=>" + [...this.adjacentList[vertex]]);
    } else {
      console.log(`vertex ${vertex} does not exist`);
    }
  }
}

// Example usage:
const graph = new Graph();

// Add edges between the vertices
graph.insertEdge("A", "B");
graph.insertEdge("A", "C");
graph.insertEdge("B", "D");
graph.insertEdge("C", "E");
graph.insertEdge("D", "E");
graph.insertEdge("D", "F");
graph.insertEdge("E", "F");

console.log("Graph display:");
graph.display(); // Display the graph

console.log("BFS traversal from A:", graph.bfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log("BFS traversal from B:", graph.bfs("B")); // Output: [ 'B', 'A', 'D', 'C', 'E', 'F' ]
console.log("BFS traversal from E:", graph.bfs("E")); // Output: [ 'E', 'C', 'D', 'F', 'A', 'B' ]
console.log("DFS Recursive traversal from A:", graph.dfsRecursive("A")); // Output: [ 'A', 'B', 'D', 'E', 'F', 'C' ]
console.log("DFS Iterative traversal from A:", graph.dfsIterative("A")); // Output: [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(graph.findSecondNode());
console.log(graph.getDegree("E"));
graph.displayVertices("P");
