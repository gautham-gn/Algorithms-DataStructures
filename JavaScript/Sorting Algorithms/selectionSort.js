function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function selectionSort(arr) {
    let sortedArray = arr;
    for (var i = 0; i < sortedArray.length; i++) {
        let min = i;
        for (var j = i+1; j < sortedArray.length; j++){
            if (sortedArray[j] < sortedArray[min]){
                min = j;
            }
        }
        if ( i !== min){
            swap(sortedArray, i, min);
        }
    }
    return sortedArray;
}

//console.log(swap([2,5,1,34,53,62],3,4))
console.log(selectionSort([100,50,25,10,5, 16]))
console.log(selectionSort([2,3,4,5,6]))
