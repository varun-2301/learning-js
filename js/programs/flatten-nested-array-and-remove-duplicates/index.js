/** 
 * Flatten a nested array, remove duplicates and sort the array in ascending order.
*/

function flatten(arr) {
    let result = []

    for(let item of arr) {
        if(Array.isArray(item))
            result = result.concat(flatten(item))  // here recursion is used to flatten the nested array
        else
            result.push(item)
    }

    let uniqueArr = new Set(result)
    result = Array.from(uniqueArr)
    
    return result.sort((a,b) => a - b)
}

const array =[1,[2,3],[1,[3,5,[6,7]],4]];
console.log(flatten(array));