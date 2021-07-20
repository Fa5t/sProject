//сортировка Хуара
const arr = [0, 4, 8, 1, 8, 4, 9, 10, -4, -1, 5, 0]
let count = 0

function quichSort(array) {
    if(array.length <= 1) return array;

    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []

    for (let i = 0; i < array.length; i++) {
        if( i === pivotIndex) continue
        if(array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
        
    }
    return [...quichSort(less), pivot, ...quichSort(greater)]
}

console.log( quichSort(arr) )
console.log('count = ', count);