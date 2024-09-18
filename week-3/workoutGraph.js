class Graph {
  constructor() {
    this.adjacentList = {};
  }

  insertVertex(value) {
    if (!this.adjacentList[value]) {
      this.adjacentList[value] = new Set();
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

  display() {
    let arr = [];
    for (let vertex in this.adjacentList) {
      arr.push(vertex + "=>" + [...this.adjacentList[vertex]]);
    }
    return arr;
  }

  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      return `${vertex} vertex does not exist`;
    }
    for (const adjacentVertex of this.adjacentList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacentList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      return `can't find ${vertex1} in the list`;
    }
    if (!this.adjacentList[vertex2]) {
      return `this ${vertex2} does not exist in the list`;
    }
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  depth(start) {
    let result = [];
    let visited = new Set();
    let adjacentList = this.adjacentList;

    function bfs(vertex) {
      if (!vertex) return;
      visited.add(vertex);
      result.push(vertex);

      adjacentList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          bfs(neighbor);
        }
      });
    }
    bfs(start);
    return result;
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
      const currentVertex = queue.shift();
      
      result.push(currentVertex);
      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  shortestPath(start, target) {
    const queue = [start];
    const visited = new Set();
    const previous = {};
    visited.add(start);
    while (queue.length) {
      const currentVertex = queue.shift();
      if (currentVertex === target) {
        return this._reconstructPath(previous, start, target); // Stop when target is found
      }

      this.adjacentList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          previous[neighbor] = currentVertex; // Track the path
        }
      });
    }

    return []; // No path found
  }

  _reconstructPath(previous, start, target) {
    let path = [];
    let current = target;

    while (current) {
      path.unshift(current); // Build the path backward
      current = previous[current];
    }

    return path[0] === start ? path : [];
  }

  findSecondLargestNode() {
    if (!this.adjacentList) {
      return "nothing to return ";
    }
    let vertex = Object.keys(this.adjacentList);

    vertex.sort((a, b) => b.localeCompare(a));

    if (vertex.length < 2) {
      return "there is no second largest node";
    }
    return vertex[1];
  }
  getDegree(vertex) {
    if (!this.adjacentList[vertex]) {
      return "there is no vertix in this list";
    }
    return this.adjacentList[vertex].size;
  }

  displayVertices(vertex) {
    if (this.adjacentList[vertex]) {
      console.log(vertex + "=>" + [...this.adjacentList[vertex]]);
    } else {
      `vertex ${vertex} does not exist`;
    }
  }
}

const graph = new Graph();
graph.insertEdge("A", "Z");
graph.insertEdge("A", "D");
graph.insertEdge("D", "F");
graph.insertEdge("Z", "B");
graph.insertEdge("B", "Y");
graph.insertEdge("Y", "Z");
graph.display();
console.log(graph.bfs("A"));
console.log(graph.depth("A"));
console.log(graph.findSecondLargestNode());

console.log(graph.getDegree("Z"));
