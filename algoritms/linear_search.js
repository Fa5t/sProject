//Линейный поиск
const array = [0, 1, 2, 3, 4, 5, 6, 7]
let count = 0;

function linearSearch(array, item) {
    for(let i = 0; i < array.length; i++) {
        count++;
        if(array[i] === item) return i
    }

     return null
}

console.log( linearSearch(array, 5) )
console.log('count = ', count);
