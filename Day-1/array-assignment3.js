function generateArrayBetween(start, end) {
    if (end < start) {
        return []; // Return an empty array if end is smaller than start
    }

    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
const resultArray = generateArrayBetween(1, 4);
console.log(resultArray);
