function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let mostFrequentItem = arr[0]; 
    let maxFrequency = 1; 

    for (let i = 0; i < arr.length; i++) {
        let currentFrequency = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentFrequency++;
            }
        }

        if (currentFrequency > maxFrequency) {
            maxFrequency = currentFrequency;
            mostFrequentItem = arr[i];
        }
    }

    return mostFrequentItem;
}

const array = [12, 11, 3, 4, 5, 12, 11, 45, 87, 12];
const mostFrequent = findMostFrequentItem(array);
console.log(`The most frequent item is: ${mostFrequent}`);
