/**
 * write a function that takes an array and a chunk size, and returns an array of arrays (chunks) of the specified size
 * if the array cannot be evenly divided, the last chunk will contain the remaining elements
 */

function chunkArray(array, chunkSize) {
    const length = array.length
    if(length === 0) return []
    if(chunkSize > length) return [array]

    let result = []
    for(let i = 0; i < length; i+= chunkSize) {
        let chunk = []
        for(let j = i; j < length && j < (i+chunkSize); j++)
            chunk.push(array[j])

        result.push(chunk)
    }

    return result
}

// Input
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chunkSize = 3;
// Output
// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

console.log(chunkArray(input, chunkSize)); // Chunk the array into chunks of size 3