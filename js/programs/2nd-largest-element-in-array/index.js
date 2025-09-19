/**
 * Function to find the 2nd largest element in array without inbuilt methods
 */
function secondLargestElementWithoutInbuiltMethod(arr){
    let first = -Infinity
    let second = -Infinity

    for(const num of arr){
        if(num > first){
            second = first
            first = num
        } else if(num > second && num < first){
            second = num
        }
    }

    return second === -Infinity ? null : second
}

console.log(secondLargestElementWithoutInbuiltMethod([10, 20, 5, 8, 30]))


/**
 * Function to find the 2nd largest element in array with inbuilt methods
 */
function secondLargestElementWithInbuiltMethod(arr){
    const uniqueArr = [...new Set(arr)]
    uniqueArr.sort((a,b) => b - a)
    return uniqueArr[1] ?? null
}

console.log(secondLargestElementWithInbuiltMethod([10, 20, 5, 8, 30]))