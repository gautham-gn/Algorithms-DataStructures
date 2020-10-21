//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
   if (num === 0) {
    return 1;
   }
   return num * factorial(num-1);
}

console.log(factorial(7))
console.log(factorial(6))
console.log(factorial(5)) 