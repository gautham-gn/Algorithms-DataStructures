function getDigit(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10;
}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = digitCount(arr[i]);
        if (temp > max) max = temp;
    }
    return max;
}

function radixSort(arr) {
    let max = mostDigits(arr);
    for (let i = 0; i < max; i++) {
        let buckets = [[],[],[],[],[],[],[],[],[],[]]
        for(let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j],i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}
console.log(radixSort([1,12,123,1234,54,321,27,85,87654]))
console.log(radixSort([56, 12, 34, 21, 90, 1, 10, 27, 83]))
//console.log(getDigit(12345, 0))//5
//console.log(getDigit(12345, 1))//4
//console.log(getDigit(12345, 2))//3
//console.log(getDigit(12345, 3))//2
//console.log(getDigit(12345, 4))//1
//console.log(getDigit(12345, 5))//0


//console.log(digitCount(1))//1
//console.log(digitCount(34))//2
//console.log(digitCount(567))//3

//console.log(mostDigits([1,12,123,1234,54,321,27,85,87654]))
//console.log(mostDigits([]))