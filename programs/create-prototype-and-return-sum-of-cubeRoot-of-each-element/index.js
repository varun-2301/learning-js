/**
 * Extend an built in JS object by adding custom method
 * Task is to create a method named like sumOfCubes which will take array as an argument and 
 * will return the sum of cubes of each item
*/

Array.prototype.sumOfCubes = (arr) => {
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    return arr.reduce((acc, item) => acc + Math.pow(item, 3), 0)
}

// Now use the method
const numbers = [1, 2, 3, 4];
const result = numbers.sumOfCubes(numbers);
console.log(result);