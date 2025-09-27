/**
 * Program to find the length of the longest increasing consecutive subsequence in the array.

    ✅ Example 1
    [1,3,5,4,7] → Longest increasing sequence is: 1,3,5 → length = 3
    ✅ Example 2
    [2,2,2,2,2] → No increasing sequence → longest length = 1
*/

function longestIncreasingSubsequence(arr){
    if(arr.length === 0) return 0

    let maxlength = 1
    let current = 1

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i-1])
            current++
        else
            current = 1

        maxlength = Math.max(current, maxlength)
    }

    return maxlength
}

console.log(longestIncreasingSubsequence([1,3,5,4,7]))
console.log(longestIncreasingSubsequence([2,2,2,2,2]))
console.log(longestIncreasingSubsequence([3,6,0,2,4,5,1,7]))