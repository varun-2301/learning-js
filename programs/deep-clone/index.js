/**
 * write a deep clone function
 * that can clone objects, arrays, and primitive values
 */

function deepClone(obj){
    if(obj === null || typeof obj !== 'object') //null or primitive values cloned will be same
        return obj

    const cloneObj = Array.isArray(obj) ? [] : {}

    for(const key in obj){
        if(obj.hasOwnProperty(key))
            cloneObj[key] = deepClone(obj[key])
    }

    return cloneObj
}

console.log(deepClone({ a: { b: { c: 3 } } }))
