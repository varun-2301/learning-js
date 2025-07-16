/**
 * Write a function that takes an array containing a mix of characters and numbers and returns a sorted array. 
 * The sorted array should have all characters (letters) in ascending order first, followed by all numbers in ascending order.
 * Must not use any built-in sort methods.
 * input array may contain both uppercase and lowercase letters, and numbers.
 * The sorting should be case-sensitive for letters i.e (A < a), but numbers should be sorted numerically.
 */

function customSortArray(array){
    if(array.length === 0) return []

    let strArr = []
    let numArr = []
    for(const item of array){
        if(typeof item === 'string')
            strArr.push(item)
        else if(typeof item === 'number')
            numArr.push(item)
    }
strArr
    const sortedStrArr = sortArray(strArr)
    const sortedNumArr = sortArray(numArr)
    return [...sortedStrArr, ...sortedNumArr]
}

function sortArray(arr){
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length - 1; j++)
            if(arr[j] > arr[j+1])
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }

    return arr
}

// Input
const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
// Output
// ["a", "c", "e", "g", "s", 1, 2, 5, 6]

console.log(customSortArray(input)); // Sort the array with custom sorting logic