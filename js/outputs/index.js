//====== Question ==========
(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})()

//====== Output ==========
1
undefined
2

/* 
-> The output is this as the code executes, try block throws error so control moves to catch block
-> In catch block, the x variable is taken as argument which brings the concept of shadow block scope 
(like global or function block scope) and new x variable is created for catch block which has no relation with outside variable
-> In catch block, x and y is assigned values. so x value is assigned to the local scope variable where as y 
remains independent of this shadow block scoped as it was not passed as argument to catch block and so the value of y is assigned to variable decalred at top
-> When the control moves out of catch block, the x variable remains undefined and y variable was assigned value
*/