function test(x, y) {
    console.log(this)
    return x * y;
}


const test2 = (x, y) => {
    console.log(this)
    return x * y
}

document.getElementById("demo").innerHTML = test(5, 5);
document.getElementById("demo").innerHTML = test2(4, 5);