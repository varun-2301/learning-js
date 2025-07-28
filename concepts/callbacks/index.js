const y = function () {
    console.log('y called')
    //here we can call an api which will work asynchronously
}

const x = function (message, callback){
    console.log(message)
    callback()
}

x('first function', y)  //calling the function


/***************** ANOTHER EXAMPLE ********************/

/**callbacks with the help of closures */
function handleClick(){
    let count = 0;

    function onButtonClick() {
        console.log('button clicked', ++count);
    }

    document.querySelector('#click').addEventListener('click', onButtonClick);
}

handleClick();