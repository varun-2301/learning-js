function sum(...numbers){
    return numbers.reduce(function(prev, current){
        return prev + current;
    })
}

console.log('rest ', sum(1,2,3,4))