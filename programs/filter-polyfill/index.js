Array.prototype.myFilter = function(callback){
    const result = []
    for(let i=0; i< this.length; i++){
        if(this.hasOwnProperty(i) && callback(this[i], i, this))
            result.push(this[i])
    }

    return result
}

const nums = [1, 2, 3, 4];
console.log(nums.myFilter(num => num % 2 === 0)) // [2, 4]