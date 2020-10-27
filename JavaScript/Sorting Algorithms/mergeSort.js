function merge(arr1, arr2) {
    let finalArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] <= arr2[j]) {
            finalArray.push(arr1[i]);
            i++;
        }
        else if (arr1[i] > arr2[j]){
            finalArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        finalArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        finalArray.push(arr2[j]);
        j++;
    }
    return finalArray;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let arr1 = mergeSort(arr.slice(0,mid));
    let arr2 = mergeSort(arr.slice(mid,arr.length));
    return merge(arr1, arr2);
}

//console.log(merge([2,8,12],[3,9,16,20,25]))
//console.log(merge([],[1,3,5,7,9]))
//console.log(merge([2,8],[3,9,16,20,25,30]))
//console.log(merge([2,8],[]))

console.log(mergeSort([2,5,2,1,7,5,6,9]))
console.log(mergeSort([98, 102, 76, 44, 58, 301, 152, 861, 12, 1]))