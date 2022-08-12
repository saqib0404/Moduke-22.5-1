// For loop
/* 
let sum = 0;
for (let i = 5; i >= 1; i--){
    sum += i;
} 
console.log(sum);
*/

function sum (i){
    if (i == 1){
        return 1;
    }
    return i + sum(i - 1);
}
console.log(sum(5));