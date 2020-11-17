class Node {
    constructor(char) {
        this.char = char;
        this.isWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node('');
    }

    helper(word) {
        let current = this.root;
        var char;
        for (let i = 0; i < word.length; i++) {
            char = word.charAt(i);
            if (!current.children[char]) return null;
            current = current.children[char];
        }
        return current;
    }

    insert(word) {
        let current = this.root;
        var char;
        for (let i = 0; i < word.length; i++) {
            char = word.charAt(i);
            if (!current.children[char]) current.children[char] = new Node(char);
            current = current.children[char];
        }
        current.isWord = true;
        return this.root;
    }

    size(obj) {
        var size = 0;
        for (var key in obj) {
            size++;
        }
        return size;
    }

    search(word) {
        let node = this.helper(word);
        if (node === null) return false;
        return node.isWord;
    }

    startsWith(word) {
        let node = this.helper(word);
        if (node === null) return false;
        return true;

    }
}




var firstTrie = new Trie();
firstTrie.insert("fun");
firstTrie.insert("funny");
firstTrie.insert("gautham");
console.log(firstTrie.root.children.f.children.u.children.n.children.n.children.y.children)
console.log(firstTrie.search("funny"));
console.log(firstTrie.search("fun"));
console.log(firstTrie.search("gautha"));
console.log(firstTrie.search("zebra"));

console.log(firstTrie.startsWith("funny"));
console.log(firstTrie.startsWith("fun"));
console.log(firstTrie.startsWith("gautha"));
console.log(firstTrie.startsWith("zebra"));

console.log(firstTrie.remove("funny"));
console.log(firstTrie)
