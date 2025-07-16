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


// Real world example in search filter
/*
    Every time you type, the timer resets.
    Only after you stop typing for 500ms, it logs.
*/
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // reset previous
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage
const search = debounce(function (e) {
  console.log("Searching for:", e.target.value);
}, 500);

document.getElementById("search").addEventListener("input", search);
