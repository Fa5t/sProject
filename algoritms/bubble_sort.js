//сортировка пузырьком
const arr = [0, 4, 8, 1, 8, 4, 9, 10, -4, -1, 5, 0]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count++
        }

    }
    return array;
}

console.log( bubbleSort(arr) )
console.log('count = ', count);