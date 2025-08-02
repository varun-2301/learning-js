/**
 * Shuffle an array in place using the Fisher-Yates algorithm.
 */

function shuffleArray(array){

    if(array.length === 0) return array
    
    const result = [...array]
    for(let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result
}

//Input
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Output
//[3, 1, 7, 2, 5, 4, 6, 8, 9] // Example output; actual output will vary due to randomness

const output = shuffleArray(input)
console.log(output)