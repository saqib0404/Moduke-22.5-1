// Factorial using for loop
/* 
let factorial = 1;
for (let i = 5; i >= 1; i--){
    factorial *= i;
}
console.log(factorial);
*/

function factorial (i){
    if (i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}
console.log(factorial(5));