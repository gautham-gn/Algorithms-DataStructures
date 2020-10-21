// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp){
    if (base < 0 || exp < 0) {
        return;
    }
    if (exp === 0 ) {
        return 1;
    }
    return base * power(base, exp-1);
}

console.log(power(2,4))
console.log(power(2,2))
console.log(power(2,0)) 