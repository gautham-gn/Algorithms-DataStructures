function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function partition(arr, start=0, end=arr.length - 1) {
    let pivot = arr[start];
    let cnt = start;
    for (let i = start + 1; i <= end; i++){
        //console.log(i, left, right, arr);
         if (arr[i] < pivot) {
            cnt++;
            swap(arr, cnt, i);
        }
    } 
    swap(arr, start, cnt);
    return cnt;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right){
        let pivot = partition(arr,left, right);
        //console.log(pivot, arr);
        quickSort(arr,left,pivot-1)
        quickSort(arr,pivot+1, right)
    } 
    return arr;
}

//console.log(swap([1,3,5,7,9],2,4))
//console.log(partition([12,5,1,11,10,0,6,14,15,7]))
//console.log(partition([5,2,3,11,7]))

console.log(quickSort([12,5,1,11,10,0,6,14,15,7]))
console.log(quickSort([5,2,3,11,7]))
console.log(quickSort([98, 102, 76, 44, 58, 301, 152, 861, 12, 1]))

