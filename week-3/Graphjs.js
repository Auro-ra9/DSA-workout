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

  hasEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1] || !this.adjacentList[vertex2]) {
      return "one of the vertex does not exist";
    }
    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      return;
    }
    this.adjacentList[vertex].forEach((neighbor) => {
      this.removeEdge(vertex, neighbor);
    });

    delete this.adjacentList[vertex];
  }

  display() {
    for (const vertex in this.adjacentList) {
      console.log(`${vertex} => ${[...this.adjacentList[vertex]]}`);
    }
  }
}
