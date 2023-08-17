function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const integers = [1, 2, 3, 4, 5,6];
const result = sumArray(integers);
console.log("Sum:", result);
