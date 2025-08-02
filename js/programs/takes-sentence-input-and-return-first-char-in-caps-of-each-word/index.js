/**
 * Function to take a sentence input and return the first character in caps of each word.
 */

function modifySentence(sentence){
    return sentence
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
}

// Input
const input = "hello world this is a test sentence";
// Output
// "Hello World This Is A Test Sentence"

console.log(modifySentence(input));