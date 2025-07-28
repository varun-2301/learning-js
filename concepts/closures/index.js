function abc() {
    let a = 100;
    return function () {
        console.log(a)
        return a
    }
}

console.log(abc()())

//Real Time Example
function counter(){
    let count = 0

    return function() {  //anonymous function
        count++
        return count
    }
}

let count1 = counter()
let count2 = counter()

console.log(count1())
console.log(count1())
console.log(count2())
console.log(count1())
console.log(count2())