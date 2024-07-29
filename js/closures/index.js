function abc() {
    let a = 100;
    function def() {
        console.log(a)
    }

    return def;
}

console.log(abc()())