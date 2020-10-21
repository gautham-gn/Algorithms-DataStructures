function minSubArrayLen(arr, num) {
    let left = 0;
    let right = 0;
    let tempSum = arr[left];
    let out = Infinity;
    while(left <= right && left < arr.length && right < arr.length) {
        if (tempSum >= num) {
            let temp = right - left + 1;
            if (temp < out){
                out = temp;
            }
            tempSum = tempSum - arr[left];
            left ++;
        }
        else if (tempSum < num ) {
            right++;
            tempSum = tempSum + arr[right];
        }
        console.log(left, right, out);
    }
    if (out == Infinity) {
        return 0;
    }
    else {
        return out;
    }
}

console.log(minSubArrayLen([2,1,3,2,4,3], 3))
             //                 L   R   