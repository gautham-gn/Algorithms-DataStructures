class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self,val):
        newNode = Node(val)
        if self.length == 0:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return self

    def pop(self):
        if self.length == 0:
            return None
        popped = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            current = self.head
            previous = current
            while current.next:
                previous = current
                current = current.next
            self.tail = previous
            self.tail.next = None
        self.length -= 1
        return popped.val

    def shift(self):
        if self.length == 0:
            return None
        oldHead = self.head
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = oldHead.next
            oldHead.next = None
        self.length -= 1
        return oldHead.val

    def unshift(self, val):
        newNode = Node(val)
        if self.length == 0:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.length += 1
        return self

    def get(self, idx):
        if self.length == 0 or idx < 0 or idx >= self.length:
            return None
        elif idx == 0:
            return self.head
        elif idx == self.length - 1:
            return self.tail
        else:
            current = self.head
            cnt = 1
            while cnt <= idx:
                cnt += 1
                current = current.next
            return current

    def set(self, idx, val):
        node = self.get(idx)
        if node:
            node.val = val
            return True
        else:
            return False

    def print(self):
        output = []
        if self.length == 0:
            return output
        else:
            current = self.head
            while current:
                output.append(current.val)
                current = current.next
        return output

sll = SinglyLinkedList()
print(sll.get(0))
print(sll.get(-10))
print(sll.get(10))
sll.unshift(1)
print(sll.print())
sll.unshift(2)
print(sll.print())
sll.unshift(3)
print(sll.print())
sll.unshift(4)
print(sll.print())
sll.push(5)
print(sll.print())
sll.push(6)
print(sll.print())
sll.set(0,10)
print(sll.print())
sll.set(1,11)
print(sll.print())
sll.set(2,12)
print(sll.print())
sll.set(3,13)
print(sll.print())
sll.set(4,14)
print(sll.print())
sll.set(5,15)
print(sll.print())
print(sll.set(6,15))
print(sll.print())
