/**
 * Fibonacci Series Program
 * This program generates the Fibonacci series up to a specified number of terms.
 */

const fibonacciSeries = (n) => {
    if(n <= 0) return []
    if(n === 1) return [0]

    const res = [0, 1]
    for(let i = 2; i <= n; i++)
        res.push(res[i-1] + res[i-2])

    return res;
}

console.log(fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciSeries(5));