/**
 * Write a function to check every open bracket has a corresponding close bracket of the same type.
 * Brackets are closed in the correct order
 */

function checkBrackets(str){
    let stack = []
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(let char of str){
        if(char === '(' || char === '{' || char === '[')
            stack.push(char)
        else{
            if(stack.length === 0 || stack.pop() !== map[char])
                return false
        }
    }

    return stack.length === 0
}

console.log(checkBrackets("()"))
console.log(checkBrackets("()[]{}"))
console.log(checkBrackets("(]"))
console.log(checkBrackets("([)]"))
console.log(checkBrackets("([])"))
