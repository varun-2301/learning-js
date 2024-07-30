let name = {
    firstname : 'Varun',
    lastname : 'kumar'
}

const printFullName = function(hometown) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown)
}

printFullName.call(name, 'Delhi') // call example

printFullName.apply(name, ['Delhi']) // apply example

const printFun = printFullName.bind(name, 'Delhi') //bind example
console.log(printFun);
printFun();