/**
 * Implement the function once(fn) which accepts another function fn and returns a new function. This new function allows 
 * fn to be executed only once, no matter how many times it is called. On the first call, fn should be executed normally 
 * and its result returned. On subsequent calls, return the result from the first execution, without re-invoking fn
 */

function once(fn){
    let called = false
    let result

    return function (args){
        if(!called){
            try{
                called = true
                result = fn.apply(this, args)
            } catch(error){
                throw error
            }
        }

        return result
    }
}

// Example usage:
function add(a, b) {
    return a + b
}
const res = once(add)
console.log(res([1, 2])) // 3

// ====================== Another Example =========================================
function greet(){
    return "Hello, World!"
}

const greetOnce = once(greet)
console.log(greetOnce([])) // "Hello, World!"