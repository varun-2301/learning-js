function bubbleSort(array) {
    let done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                [array[i-1], array[i]] = [array[i], array[i-1]]
            }
        }
    }
  
    return array
}
  
var numbers = [12, 10, 15, 11, 14, 1, 16];
bubbleSort(numbers)
console.log(numbers)