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