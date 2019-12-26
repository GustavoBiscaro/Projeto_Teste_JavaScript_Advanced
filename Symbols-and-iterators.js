//Symbols
const uniqueId = Symbol('Hello');

// Well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]

const it = arr[Symbol.iterator]();

while (true) {
    let {value, done}  = it.next()

   

    if (done) {
        break;
    } 
    console.log(value);
}

// Com o ES6
Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

console.log(arr[Symbol.iterator]());

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let id = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};
