Array.prototype.myReduce = function(callback, initialValue) {
    let startIndex = 0;
    let accumulator = initialValue;

    if(accumulator === undefined) {
        accumulator = this[0]
        startIndex = 1
    }

    for(let i = startIndex; i < this.length; i++) {
        if(this.hasOwnProperty(i)) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
}


const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, val) => acc + val, 0); // 10
console.log(sum);
