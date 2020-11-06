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
        return this.values;
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

let pq = new PriorityQueue();
console.log(pq.enqueue('Pay Bill', 4));
//console.log(pq.values[0].priority);
console.log(pq.enqueue('Go To Doctor', 3));
console.log(pq.enqueue('Buy Groceries', 2));
console.log(pq.enqueue('Learn Something', 1));
console.log(pq.enqueue('Take a nap', 2));
//console.log(pq.values[1].priority);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);