/**
 * Memoization Example
 * This code demonstrates a simple memoization technique to cache results of a function.
 */

const memoize = (fn) => {
    const cache = {}
    return function(...args){
        const key = JSON.stringify(args)
        if(cache[key]){
            console.log("Fetching from cache for args:", args);
            return cache[key]
        }

        const results = fn(...args)
        cache[key] = results
        console.log("Calculating result for args:", args);
        return results
    }
}

const fibonacciSum = (n) => {
    if(n <= 0) return 0
    if(n === 1 || n === 2) return 1

    return fibonacciSum(n-1) + fibonacciSum(n-2);
}

const memoizedFibonacciSum = memoize(fibonacciSum);
console.log(memoizedFibonacciSum(4)); // Output: 3
console.log(memoizedFibonacciSum(4)); // Output: 3 (from cache)