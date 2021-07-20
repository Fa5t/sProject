//сортировка выбором
const arr = [0, 4, 8, 1, 8, 4, 9, 10, -4, -1, 5, 0]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
            count++
        }
        let tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp
    }
    return array;
}

console.log( selectionSort(arr) )
console.log('count = ', count);