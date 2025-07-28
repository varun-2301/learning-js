let counter = 0;
const getData = () => {
    console.log('Fetching data...', counter++)
}

const throttle = function(fn, del) {
    let flag = true;
    return function(){
        let context = this,
            args = arguments;
        if(flag){
            getData.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true;
            }, del);
        }
    }
}

const newFunction = throttle(getData, 5000);
window.addEventListener('resize', newFunction)

// Real world example in search filter
/*
    want to log or update layout at most once every 300ms, even if resize happens 1000 times/second
*/
function throttle1(fn, delay){
    let lastCall = 0
    return function(...args){
        let now = Date.now()
        if(now - lastCall >= delay){
            lastCall = now
            fn.apply(this, args)
        }
    }
}

const handleResize = throttle1(() => {
    console.log('throttle', new Date().toLocaleString())
})

window.addEventListener("resize", handleResize);