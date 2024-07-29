const Arithmetics = {
    add:(a, b) => {
        return `${a} + ${b} = ${a+b}`;
    },
    subtract:(a, b) => {
        return `${a} - ${b} = ${a-b}`
    }
}
 
console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));