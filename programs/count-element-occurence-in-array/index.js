/**
 * Write a function that takes an array, counts the occurrence of each element, and returns an object with elements as keys and their counts as values.
 * The function should handle arrays with mixed data types (numbers, strings, etc.)
 */

function countElementOccurrence(array) {
    if (array.length === 0) return {};

    let result= {}
    for(const item of array){
        if(result.hasOwnProperty(item))
            result[item] += 1
        else
            result[item] = 1
    }

    return result;
}

// Input
let input = ['H', 'H', 'e', 'l', 'l', 'o', 1, 2, 3, 1, 2, 3, 4, 5];
// Output
// { H: 2, e: 1, l: 2, o: 1, '1': 2, '2': 2, '3': 2, '4': 1, '5': 1 }

console.log(countElementOccurrence(input)); // Count the occurrence of each element in the array