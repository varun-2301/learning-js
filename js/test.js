Array.prototype.myReduce = function(cb, initialVal){
    let acc= initialVal
    let start = 0

    if(acc === undefined){
        start = 1
        acc = this[0]
    }

    for(let i =start; i< this.length; i++){
        if(this.hasOwnProperty(i)){
            acc = cb(acc, this[i], i, this)
        }
    }

    return acc
}

const arr = [1,2,3]
console.log(arr.myReduce((item, acc) => acc + item, 0))