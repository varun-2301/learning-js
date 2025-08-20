Function.prototype.customBind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

let name = {
    firstname : 'Varun',
    lastname : 'Kumar'
}

let printName = function (state, country='US') {
    console.log(this.firstname + " " + this.lastname + " " + state + " " + country)
} 

let output = printName.customBind(name, 'Delhi')
output('India')