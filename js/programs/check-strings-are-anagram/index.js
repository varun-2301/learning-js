/**
 * checks whether two input strings are anagrams of each other. An anagram is a word formed by rearranging 
 * the letters of another word, using all original letters exactly once 
 * 
 *  EXAMPLES
    input : ("listen", "silent")
    output : true

    input: ("dormitory!!", "dirty room")
    output: true

    input: ("hello", "world")
    output: false

    input: ("Triangle", "Integral")
    output: true
*/


function isAnagram(str1, str2){
    const formatStr = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

    return formatStr(str1) === formatStr(str2)
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("dormitory!!", "dirty room"))
console.log(isAnagram("hello", "world"))
console.log(isAnagram("Triangle", "Integral"))

