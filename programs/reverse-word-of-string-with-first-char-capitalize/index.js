
/**
 * Reverse word of string along with making the first alphabet of each word capitalize
 */

function modifyStr(str){
    return str.split(' ')
                .map(word =>{
                    let reverseWord = word.split('').reverse().join('')
                    return reverseWord.charAt(0).toUpperCase() + reverseWord.slice(1)
                })
                .join(' ')
}

let inputStr = "hi i am varun"
let output = "Ih I Ma Nurav"
console.log(modifyStr(inputStr))