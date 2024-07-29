let counter = 0;
const getData = () => {
    console.log('Fetching data...', counter++)
}

const debounce = function(fn, del) {
    let timer;
    return function(){
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args)
        }, del);
    }
}

const newFunction = debounce(getData, 300)