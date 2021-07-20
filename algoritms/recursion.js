//Рекурсия
const factorial = (n) => {
    if(n === 1) return 1;

    return n * factorial(n - 1);
}
//Число ФИбоначчи - 1,1,2,3,5,8,13,21 каждое новое чисто это сложение прошлых двух
 const fibonachi = (n) => {
     if(n === 1 || n === 2) return 1;

     return fibonachi(n - 1) + fibonachi(n - 2);
 }
console.log( fibonachi(8) );