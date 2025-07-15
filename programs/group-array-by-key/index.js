/**
 * This program groups an array of objects by a specified key.
 * It takes an array of objects and a key as input, and returns an object
 */

function groupArrayByKey(array, key) {
    if(array.length === 0 || !key) {
        return {};
    }

    let result = {}
    for(const item of array) {
        const keyValue = item[key]
        if(!result.hasOwnProperty(keyValue))
            result[keyValue] = []

        result[keyValue].push(item)
    }

    return result
}

// Input
let input = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

console.log(groupArrayByKey(input, 'age')); // Group by 'age' key

// Output
// {
//     '25': [
//         { name: 'Alice', age: 25 },
//         { name: 'Charlie', age: 25 }
//     ],
//     '30': [
//         { name: 'Bob', age: 30 }
//     ]
// }