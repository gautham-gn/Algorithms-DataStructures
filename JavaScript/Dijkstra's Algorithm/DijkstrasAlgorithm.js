class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = Array();
    }

    bubbleUp() {
        let childIdx = this.values.length - 1;
        //let child = this.values[childIdx];
        let parentIdx = Math.floor((childIdx - 1) / 2);
        //let parent = this.values[parentIdx];
        while (this.values[childIdx].priority < this.values[parentIdx].priority) {
            let temp = this.values[childIdx];
            this.values[childIdx] = this.values[parentIdx];
            this.values[parentIdx] = temp;
            childIdx = parentIdx;
            parentIdx = Math.floor((childIdx - 1) / 2);
            if (parentIdx < 0) break;
        }
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        if (this.values.length > 1) this.bubbleUp();
        //return this.values;
    }

    bubbleDown() {
        let length = this.values.length;
        let parentIdx = 0;
        while (true) {
            console.log(this.values);
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = 2 * parentIdx + 2;
            let swap = null;
            if (leftChildIdx < length) {
                if (this.values[leftChildIdx].priority < this.values[parentIdx].priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                if ((swap !== null && this.values[rightChildIdx].priority < this.values[leftChildIdx].priority) ||
                    (swap === null && this.values[rightChildIdx].priority < this.values[parentIdx].priority)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            let temp = this.values[swap];
            this.values[swap] = this.values[parentIdx];
            this.values[parentIdx] = temp;
            parentIdx = swap;

        }
        return this.values;
    }

    dequeue() {
        let ele = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        if (this.values.length > 0) this.bubbleDown();
        return ele;
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
        let queue = new PriorityQueue();
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
                console.log(queue);
                console.log(previous);
                console.log(distances);
            })
        }
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