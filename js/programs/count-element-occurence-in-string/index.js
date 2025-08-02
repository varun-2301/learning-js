
/**
 * Reverse word of string along with making the first alphabet of each word capitalize
 */

function countOccurence(str){
    let char = {}

    for (let word of str)
        char[word] = (char[word] || 0) + 1

    return char
}

let inputStr = "hi i am varun"
let outputStr = {"h": 1, "i": 2, " ": 3, "a": 1, "m": 1, "v": 1, "r": 1, "u": 1, "n": 1}
console.log(countOccurence(inputStr))