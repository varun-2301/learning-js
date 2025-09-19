
/**
 * Curry Polyfill
 */

function curryPolyfill(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args)
        } else {
            return function(...nextArgs){
                return curried.apply(this, args.concat(nextArgs))
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c
}

const data = curry(sum)
console.log(data(1,2,3))
console.log(data(1)(2)(3))
console.log(data(1,2)(3))