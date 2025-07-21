/**
 * Implement a custom version of JSON.stringify. This function should serialize a JavaScript object or value into a JSON string. The implementation should mimic the behavior of the native JSON.stringify, including handling of:
    Primitives (string, number, boolean,null)
    Arrays and nested arrays
    Plain objects with nested properties
    Functions and undefined (ignored in objects, replaced with null in arrays)

    Example Inputs & Outputs
    Input: JSONStringify("hello") 
    Output: '"hello"'

    Input: JSONStringify(name: "Alice", age: 30) 
    Output: '{"name":"Alice","age":30}'

    Input: JSONStringify(1, 'a', true, null)
    Output: '[1,"a",true,null]'

    Input: JSONStringify({ a: undefined, b: function() {},  c: 5 })
    Output: '{"c":5}'

    JSONStringify(undefined, function() {}, 5)
    Output: '[null,null,5]'
*/

function JSONStringify(value){
    if(value === null) return "null"

    if(typeof value === 'string')   return `"${value}"`

    if(typeof value === 'number' || typeof value === 'boolean') return String(value)

    if(Array.isArray(value)) {
        const res = value.map(item => {
            const str = JSONStringify(item)
            return str !== undefined ? str : 'null'
        })

        return `[${res.join(',')}]`
    }

    if(typeof value === 'object') {
        const keys = Object.keys(value)
        const entries = keys.map(key => {
            const item = value[key];
            if (typeof item === 'undefined' || typeof item === 'function') {
                return null; // Ignore undefined and functions
            }
            return `"${key}":${JSONStringify(item)}`;
        }).filter(Boolean);

        return `{${entries.join(',')}}`;
    }

    return undefined
}

console.log(JSONStringify("hello"))
console.log(JSONStringify({name: "Alice", age: 30}))
console.log(JSONStringify([1, 'a', true, null]))
console.log(JSONStringify({ a: undefined, b: function() {},  c: 5 }))
console.log(JSONStringify([undefined, function() {}, 5]))