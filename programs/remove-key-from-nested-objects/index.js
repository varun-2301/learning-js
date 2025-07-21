/**
 *  Removes all occurrences of specific keys from an object or array, regardless of how deeply nested they are.
*/

function deepOmit(value, keyToOmit){
    if(Array.isArray(value))
        return value.map(item => deepOmit(item, keyToOmit))

    if(typeof value === 'object' && value !== null) {
        const keys = Object.keys(value)
        return keys.reduce((acc, key) => {
            if(!keyToOmit.includes(key))
                acc[key] = deepOmit(value[key], keyToOmit)

            return acc
        }, {})
    }

    return value
}

console.log(deepOmit({a: 1, b: 2, c: { d: 3, e: 4}}, ['d']));
