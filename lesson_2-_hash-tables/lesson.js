class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        console.log(hash)
        return hash;
    }

    set(key, value) {
        let address = this._hash(key)
        if(!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key)
        for(let i = 0; i < this.data[address].length; i++) {
            if(this.data[address][i][0] === key) {
                return this.data[address][i][1]
            }
        }
        return undefined
    }

    keys() {
        const keysArr = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArr.push(this.data[i][0][0]);
            }
        }
        return keysArr;
    }

}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("stuff", 11))
console.log(myHashTable.get("grapes"))