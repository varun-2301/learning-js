Function.prototype.myCall = function(context, ...args){
    context = context || globalThis

    const fnSymbol = Symbol()
    context[fnSymbol] = this

    const result = context[fnSymbol](...args)
    delete context[fnSymbol]
    return result
}

let name = {
    firstname : 'Varun',
    lastname : 'Kumar'
}

let printName = function (state, country='US') {
    console.log(`${this.firstname} ${this.lastname} from ${state} of ${country}`)
} 

printName.myCall(name, 'Delhi')
