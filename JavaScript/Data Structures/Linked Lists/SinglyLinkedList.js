class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length +=1;
        return this;
    }

    pop(){
        if (this.length === 0){
            return;
        } 
        var current = this.head;
        var pre = current;
        while(current.next){
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        pre.next = null;
        this.length -= 1;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if (this.length === 0) return;
        let node = this.head;
        this.head = node.next;
        this.length -= 1;
        if (this.length === 0){
            this.tail = null;
        }
        return node;
    }

    unshift(val){
        let node = new Node(val);
        if (this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            let currentHead = this.head;
            this.head = node;
            this.head.next = currentHead;
        }
        this.length +=1;
        return this;
    }

    get(idx){
        if (idx >= this.length || idx < 0){
            return;
        } 
        else if (idx === 0) {
            return this.head;
        }
        else {
            let current = this.head;
            for(let i = 1; i <= idx; i++){
                current = current.next;
            }
            return current;
        }
    }

    set(idx, val){
        var newNode = this.get(idx);
        if (newNode){
            newNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val){
        if (idx > this.length || idx < 0){
            return false;
        } else if (idx === 0){
            let newNode = this.unshift(val);
            if (newNode){
                return true;
            } else {
                return false;
            }
        } else if (idx === this.length){
            let newNode = this.push(val);
            if (newNode){
                return true;
            } else {
                return false;
            }
        } else {
            let preNode = this.get(idx-1);
            let newNode = new Node(val);
            newNode.next = preNode.next;
            preNode.next = newNode;
            this.length += 1;
            return true;
        }
    }

    remove(idx){
        if (idx >= this.length || idx < 0){
            return;
        } else if (idx === 0){
            return this.shift();
        } else if (idx === this.length - 1){
            return this.pop();
        } else {
            let preNode = this.get(idx-1);
            let currentNode = this.get(idx);
            preNode.next = currentNode.next;
            currentNode.next = null;
            this.length -= 1;
            return currentNode;
        }
    }
}

let sll = new SinglyLinkedList()

sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
console.log('--------------------')
console.log(sll.remove(2))
console.log(sll.remove(1))
console.log(sll.remove(1))
console.log(sll.remove(0))
//console.log(sll.get(0))
//console.log(sll.get(1))
//console.log(sll.get(2))
console.log(sll)
