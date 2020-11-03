class MaxBinaryHeap {
    constructor(){
        this.maxHeap = Array();
    }

    bubbleUp(){
        let n = this.maxHeap.length - 1;
        let parent = Math.floor((n-1)/2);
        while(this.maxHeap[n] > this.maxHeap[parent]){
            let temp = this.maxHeap[n];
            this.maxHeap[n] = this.maxHeap[parent];
            this.maxHeap[parent] = temp;
            n = parent;
            parent = Math.floor((n-1)/2);
        }
        return this.maxHeap;
    }

    insert(val){
        this.maxHeap.push(val);
        this.bubbleUp();
    } 

    bubbleDown(){
        let parent = 0;
        let leftChild = 2 * parent + 1;
        let rightChild = 2 * parent + 2;
        while (this.maxHeap[parent] < this.maxHeap[leftChild]
             || this.maxHeap[parent] < this.maxHeap[rightChild]){
            if (this.maxHeap[leftChild] < this.maxHeap[rightChild]){
                let temp = this.maxHeap[rightChild];
                this.maxHeap[rightChild] = this.maxHeap[parent];
                this.maxHeap[parent] = temp;
                parent = rightChild;
            } else {
                let temp = this.maxHeap[leftChild];
                this.maxHeap[leftChild] = this.maxHeap[parent];
                this.maxHeap[parent] = temp;
                parent = leftChild;
            }
            leftChild = 2 * parent + 1;
            rightChild = 2 * parent + 2;
        }
        return this.maxHeap[0];
    }
    
    extractMax(){
        let max = this.maxHeap[0];
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
        this.maxHeap.pop();
        this.bubbleDown();
        return max;
    }
}

let bh = new MaxBinaryHeap();
bh.insert(10);
bh.insert(7);
bh.insert(52);
bh.insert(36);
bh.insert(2);
bh.insert(1);
bh.insert(100);
bh.insert(9);
bh.insert(18);
bh.insert(74);
bh.insert(15);

while(bh.maxHeap.length != 0){
    console.log(bh.extractMax());
    console.log(bh.maxHeap);
}

//                  100
//           74                  52
//      18       36           1       10
//    7   9    2    15

//                    74
//           36                  52
//      18       15           1       10
//    7   9    2    

//                    52
//           36                  10
//      18       15           1       2
//    7   9      