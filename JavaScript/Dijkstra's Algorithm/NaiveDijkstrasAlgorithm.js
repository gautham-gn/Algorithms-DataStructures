class NaivePriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    dijkstra(start, finish) {
        let distances = {};
        let previous = {};
        let nodes = Object.keys(this.adjacencyList);
        let queue = new NaivePriorityQueue();
        let popped;
        let path = [];
        nodes.forEach(element => {
            if (element === start) {
                distances[element] = 0;
                queue.enqueue(element, 0);
            } else {
                distances[element] = Infinity;
                queue.enqueue(element, Infinity);
            }
            previous[element] = null;
        });
        while (queue.values.length !== 0) {
            popped = queue.dequeue().val;
            if (popped === finish) {
                while (popped !== null) {
                    path.push(popped);
                    popped = previous[popped];
                }
                return path.reverse();
            }
            let neighbours = this.adjacencyList[popped];
            neighbours.forEach(neighbour => {
                let nodeDistance = distances[popped] + neighbour.weight;
                let nextNeighbour = neighbour.node;
                if (distances[nextNeighbour] > nodeDistance) {
                    distances[nextNeighbour] = nodeDistance;
                    previous[nextNeighbour] = popped;
                    queue.enqueue(nextNeighbour, nodeDistance);
                }
                console.log(previous);
                console.log(distances);
            })
        }
        return distances;
    }
}

let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
//console.log(wg.adjacencyList);
console.log(wg.dijkstra("A", "E"));
//console.log(Object.keys(wg.adjacencyList));