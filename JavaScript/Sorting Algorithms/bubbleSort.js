function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function bubbleSort(arr) {
    let sortedArray = arr;
    let loops = 0;
    for (var i = sortedArray.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++){
            loops++;
            if (sortedArray[j] > sortedArray[j+1]){
                swap(sortedArray, j, j+1);
            }
        }
    }
    console.log(loops);
    return sortedArray;
}

function bubbleSortOpt(arr) {
    let sortedArray = arr;
    let noSwaps;
    let loops = 0;
    for (var i = sortedArray.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i; j++){
            loops++;
            if (sortedArray[j] > sortedArray[j+1]){
                swap(sortedArray, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) {
            console.log(loops);
            return sortedArray;
        }
    }
}

//console.log(swap([2,5,1,34,53,62],3,4))
console.log(bubbleSort([100,50,25,10,5, 16]))
console.log(bubbleSortOpt([100,50,25,10,5, 16]))

console.log(bubbleSort([2,3,4,5,6]))
console.log(bubbleSortOpt([2,3,4,5,6]))