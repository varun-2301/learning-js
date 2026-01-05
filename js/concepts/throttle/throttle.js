// Real world example in search filter
/*
    want to log or update layout at most once every 300ms, even if resize happens 1000 times/second
*/
function throttle(fn, delay){
    let lastCall = 0
    return function(...args){
        let now = Date.now()
        if(now - lastCall >= delay){
            lastCall = now
            fn.apply(this, args)
        }
    }
}

const handleResize = throttle(() => {
    console.log('throttle', new Date().toLocaleString())
}, 500)

window.addEventListener("resize", handleResize);