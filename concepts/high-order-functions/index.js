const radius = [4,6,2,8,1]

/**this is a callback function */
const area = function (rad) {
    return Math.PI * rad * rad;
}

/**this is a callback function */
const diameter = function (rad) {
    return 2 * rad;
}

const calculate = function (radius, arr){
    let output = [];
    for (let i = 0; i < radius.length; i++)
        output.push(arr(radius[i]))

    return output;
}

console.log(calculate(radius, area))
console.log(calculate(radius, diameter))