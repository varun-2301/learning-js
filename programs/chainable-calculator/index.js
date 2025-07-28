/**
 * function to create a chainable calculator
 */

function createCalculator(){
    let result = 0;

    return {
        add: function(val){
            if(typeof val !== 'number'){
                throw new TypeError('Argument must be a number');
            }
            result += val;
            return this; // return the calculator object for chaining
        },
        subtract: function(val){
            if(typeof val !== 'number'){
                throw new TypeError('Argument must be a number')
            }

            result -= val;
            return this;
        },
        multiply: function(val){
            if(typeof val !== 'number'){
                throw new TypeError('Argument must be a number')
            }

            result *= val;
            return this;
        },
        divide: function(val){
            if(typeof val !== 'number'){
                throw new TypeError('Argument must be a number')
            }
            if(val === 0){
                throw new Error('Division by zero is not allowed');
            }

            result /= val;
            return this;
        },
        getResult: function(){
            return result;
        },
        reset: function(){
            result = 0;
            return this; // return the calculator object for chaining
        }
    }
}

// Example usage:
const calculator = createCalculator();
console.log(calculator.add(5).subtract(2).multiply(3).divide(1).getResult()); // 9
console.log(calculator.reset().add(10).getResult()); // 10