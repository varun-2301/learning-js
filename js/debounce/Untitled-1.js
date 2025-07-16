
for(let i = length-1; i> 0; i--){
    let j = Math.floor(Math.random() * (i+1))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


document.querySelector('#click').addEventListener('click', search)

const search = debounce(() => {
    console.log('called')
}, 500)

function debounce(fn, delay){
    let timer
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
}

function throttle(fn, delay){
    let last = 0
    let context = this
    return function (...args){
        const now = new Date().now()
        if(now-last >= delay){
            last = now
            fn.apply(context, args)
        }
    }
}