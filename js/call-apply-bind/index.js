let nameData = {
    firstname : 'Varun',
    lastname : 'kumar'
}

const printFullName = function(greet, hometown = 'Delhi') {
    console.log(`${greet} ${this.firstname} ${this.lastname} from ${hometown}`)
}

printFullName.call(nameData, 'hi') // call example

printFullName.apply(nameData, ['hello','India']) // apply example

const printFun = printFullName.bind(nameData, 'GM') //bind example
printFun('WB');