/**
 * poyfill method for Object.assign
 */

function customAssign(target, ...sources){
    if(target === null || target === undefined){
        throw new TypeError('Cannot convert undefined or null to object');
    }

    const to = Object(target)

    for(let i = 0; i< sources.length; i++){
        const nextSource = sources[i]
        if(nextSource !== null){
            for(const key in nextSource){
                if(Object.prototype.hasOwnProperty.call(nextSource, key))
                    to[key] = nextSource[key]
            }
        }
    }

    return to
}

// Example usage:
console.log(customAssign({ a: 1 }, { b: 2 }, { c: 3 }))  // { a: 1, b: 2, c: 3 }
console.log(customAssign({}, { a: undefined }, { b: null }))
console.log(customAssign({}, null, { a: 1 })) 