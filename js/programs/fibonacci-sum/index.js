/**
 * Fibonacci Sum Program
 */

const fibonacciSum = (n) => {
    if(n <= 0) return 0
    if(n === 1 || n === 2) return 1

    return fibonacciSum(n-1) + fibonacciSum(n-2);

    //OR
    // let a =0, b=1, c=0
    // for(let i =2; i< n; i++){
    //     c = a +b
    //     a=b
    //     b=c
    // }
    // return c;
}

console.log(fibonacciSum(4))