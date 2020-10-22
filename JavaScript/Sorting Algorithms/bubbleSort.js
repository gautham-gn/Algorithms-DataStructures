function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function bubbleSort(arr) {
    let sortedArray = arr;
    for (var i = sortedArray.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++){
            if (sortedArray[j] > sortedArray[j+1]){
                swap(sortedArray, j, j+1);
            }
        }
    }
    return sortedArray;
}

//console.log(swap([2,5,1,34,53,62],3,4))
console.log(bubbleSort([100,50,25,10,5, 16]))