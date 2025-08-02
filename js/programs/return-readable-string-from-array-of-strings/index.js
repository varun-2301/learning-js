/**
 * Takes an array of strings and returns a human-readable list formatted with commas and the word "and" before the 
 * last item. This is similar to how natural language lists are formatted in English.
 * 
 * example
 * Input: ["apple"]
 * Output: "apple"
 * 
 * Input: ["apple", "banana"]
 * Output: "apple and banana"
 * 
 * Input: ["apple", "banana", "cherry"]
 * Output: "apple, banana and cherry"
 * 
 * Input: ["", "two", ""]
 * Output: ", two and "
 */

function returnReadableStringFromArrayOfStrings(arr) {
    const len = arr.length;
    if(len === 0) return ''
    if(len === 1) return arr[0]
    if(len === 2) return `${arr[0]} and ${arr[1]}`

    return `${arr.slice(0, len-1)
        .join(", ")} and ${arr[len-1]}`
}

console.log(returnReadableStringFromArrayOfStrings([""]))
console.log(returnReadableStringFromArrayOfStrings(["apple"]))
console.log(returnReadableStringFromArrayOfStrings(["apple", "banana", "cherry"]))
console.log(returnReadableStringFromArrayOfStrings(['', "banana", ""]));
