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
//bh.insert(100);
console.log(bh.maxHeap);


//                  100
//           74                  52
//      18       36           1       10
//    7   9    2