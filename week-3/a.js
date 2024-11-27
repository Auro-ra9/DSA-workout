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

  removeEdge(vertex1, vertex2) {
    this.adjacentList[vertex1].delete(vertex2);
    this.adjacentList[vertex1].delete(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      return `can't find ${vertex1}`;
    }
    if (!this.adjacentList[vertex2]) {
      return `can't find ${vertex2}`;
    }

    return (
      this.adjacentList[vertex1].has(vertex2) &&
      this.adjacentList[vertex2].has(vertex1)
    );
  }

  dfs(start) {
    let visited = new Set();
    let result = [];
    let adjacentList = this.adjacentList;

    function dfs(vertex) {
      if (!vertex) return;
      visited.add(vertex);
      result.push(vertex);

      adjacentList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });
    }
    dfs(start);
    return result;
  }

  bfs(start) {
    let result = [];
    let visited = new Set();
    visited.add(start);
    let queue = [start];
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
}
