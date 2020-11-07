class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if (index === word.length) {
            this.isWord = true;
        }
        else if (index < word.length) {
            let char = word[index];
            let subTrie = this.characters[char] || new Trie();
            //console.log(this.characters)
            this.characters[char] = subTrie;
            subTrie.addWord(word, index + 1);

        }
        return this;
    }
}

var firstTrie = new Trie();
firstTrie.addWord("fun");
firstTrie.addWord("funny");
//console.log(firstTrie.characters);
//console.log(firstTrie.characters["f"]);
//console.log(firstTrie.characters.f.characters);
console.log(firstTrie.characters.f.characters.u);
console.log(firstTrie.characters.f.characters.u.characters.n.characters.n);