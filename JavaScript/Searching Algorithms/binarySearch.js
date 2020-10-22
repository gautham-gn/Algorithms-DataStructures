function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let pivot = Math.floor((left + right) / 2);
    if (val > arr[right] || val < arr[left]){
        return -1 ;
    }
    while (arr[pivot] !== val && left <= right) {
        //console.log(left, right, pivot);
        if (arr[pivot] > val) {
            right = pivot-1;
            pivot = Math.floor((left + right) / 2);
        }
        else if (arr[pivot] < val) {
            left = pivot+1;
            pivot = Math.floor((left + right) / 2);
        }
    }
    return arr[pivot] === val ? pivot : -1 ;
}

console.log(binarySearch([1,2,3,4,5], 1))

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 8))

console.log(binarySearch([0,1,2,3,4,5,6,7,8,9], 10))

console.log(binarySearch([0,1,2,3,4,6,7,8,9], 5))