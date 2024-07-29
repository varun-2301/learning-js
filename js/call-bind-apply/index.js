let name = {
    firstname : 'Varun',
    lastname : 'kumar'
}

const printFullName = function(hometown) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown)
}

printFullName.call(name, 'Delhi')

printFullName.apply(name, ['Delhi'])

const printFun = printFullName.bind(name, 'Delhi')
console.log(printFun);
printFun();