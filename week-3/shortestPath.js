class Graph {
  constructor() {
    this.adjacentList = {};
  }

  insertVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  insertEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.insertVertex(vertex1);
    }

    if (!this.adjacentList[vertex2]) {
      this.insertVertex(vertex2);
    }

    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  }

  // Method to find the shortest path between two vertices using BFS
  shortestPath(start, target) {
    let queue = [start]; 
    let visited = new Set(); 
    let distances = { [start]: 0 }; // Store the distance from start to each vertex
    let previous = {}; // To reconstruct the path

    visited.add(start); 
    while (queue.length) {
      
      let currentVertex = queue.shift(); 

      if (currentVertex === target) {
        // If we've reached the target vertex
        return this._reconstructPath(previous, start, target); // Reconstruct and return the path
      }

      // Visit each neighbor of the current vertex
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          // If the neighbor hasn't been visited
          visited.add(neighbor); // Mark it as visited
          queue.push(neighbor); // Add it to the queue for future visits
          distances[neighbor] = distances[currentVertex] + 1; // Increment distance from start
          previous[neighbor] = currentVertex; // Track the path to reconstruct later
        }
      });
    }

    return []; // If target is not reachable from start, return an empty path
  }

  // Helper method to reconstruct the path from the start to the target
  _reconstructPath(previous, start, target) {
    let path = []; // Array to store the path
    let current = target; // Start with the target vertex

    // Traverse back from target to start using the 'previous' object
    while (current) {
      path.unshift(current); // Add each vertex to the front of the path
      current = previous[current]; // Move to the previous vertex in the path
    }

    // Return the path if it starts with the start vertex, otherwise return an empty array
    return path[0] === start ? path : [];
  }
}

// Example Usage
const graph = new Graph();
graph.insertVertex("A"); // Add vertex A
graph.insertVertex("B"); // Add vertex B
graph.insertVertex("C"); // Add vertex C
graph.insertVertex("D"); // Add vertex D
graph.insertVertex("E"); // Add vertex E

// Add edges between the vertices
graph.insertEdge("A", "B");
graph.insertEdge("A", "C");
graph.insertEdge("B", "D");
graph.insertEdge("B", "E");
graph.insertEdge("C", "D");

console.log(graph.shortestPath("A", "D")); // Output: ["A", "B", "D"]
