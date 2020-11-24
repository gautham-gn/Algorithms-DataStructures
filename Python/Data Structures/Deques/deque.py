class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class Deque:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0