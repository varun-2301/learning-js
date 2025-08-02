/**
 * This program removes duplicate elements from an array.
 * It takes an array as input and returns a new array with duplicates removed.
 */

function removeDuplicates(array) {
    if(array.length === 0) return []

    let uniqueEle = new Set(array)
    return Array.from(uniqueEle)
}

// Input
let input = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(removeDuplicates(input)); // Remove duplicates from the array