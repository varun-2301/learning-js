/**
 * This function takes a string as input and returns the length of the longest substring
 * without repeating characters.
 */

function lengthOfLongestSubstring(s) {
    let seen = new Set()
    let left =0
    let maxLength = 0

    for(let right = 0; right< s.length; right++){
        if(seen.has(s[right])){
            seen.delete(s[left])
            left++
        }

        seen.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

// Example usage:
const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);
console.log(result);  // Output: 3