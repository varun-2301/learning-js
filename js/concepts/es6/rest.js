// Used to gather multiple elements into a single array or object.

function sum(...numbers){
    return numbers.reduce(function(acc, sum){
        return acc + sum;
    }, 0)

    // return numbers.reduce((acc, sum) => (acc + sum), 0)
}

console.log('rest ', sum(1,2,3,4))
console.log('rest ', sum())

// in Array destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

// In Object Destructuring
const { uname, ...others } = { uname: "Varun", age: 30, city: "Delhi" };
console.log(uname);   // "Varun"
console.log(others); // { age: 30, city: "Delhi" }