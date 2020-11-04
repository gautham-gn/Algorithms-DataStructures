class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 53;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hash = this._hash(key);
        if (this.keyMap[hash]) {
            this.keyMap[hash].push([key, value]);
        }
        else {
            this.keyMap[hash] = [[key, value]];
        }
        return this.keyMap;
    }

    get(key) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) {
            return
        } else {
            for (let i = 0; i < this.keyMap[hash].length; i++) {
                if (this.keyMap[hash][i][0] === key) {
                    return this.keyMap[hash][i][1];
                }
            }
            return;
        }
    }
}

let map = new HashTable(13);
console.log(map.set("pink", "#ff3092"));
console.log(map.set("blue", "#a03e5c"));
console.log(map.set("green", "#bb3092"));
console.log(map.set("cyan", "#ae3e5f"));
console.log(map.set("black", "#6fc092"));
console.log(map.set("white", "#a69c5v"));
console.log(map.set("orange", "#ffe354"));
console.log(map.set("yellow", "#00ff5c"));
console.log(map.get("green"));
console.log(map.get("pink"));
console.log(map.get("orange"));
console.log(map.get("cyan"));
console.log(map.get("blue"));
console.log(map.get("yellow"));
console.log(map.get("sky"));