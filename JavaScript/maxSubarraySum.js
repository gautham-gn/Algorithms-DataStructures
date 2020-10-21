function maxSubarraySum(arr,len){
    // add whatever parameters you deem necessary - good luck!
    if (len > arr.length) {
        return null;
    }
    let left = 0;
    let right = len;
    let tempSum = 0;
    for (let i = 0; i < right; i++){
        tempSum += arr[i];
    }
    
    let maxSum = tempSum;

    while (right < arr.length) {
        tempSum = tempSum - arr[left] + arr[right];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
        left++;
        right++;
    }

    return maxSum;

  }

  console.log(maxSubarraySum([100,200,300,400,500],3));