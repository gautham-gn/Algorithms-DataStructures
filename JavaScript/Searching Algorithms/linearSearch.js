function linearSearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
  }

  console.log(linearSearch([1,6,2,10,11,12,56,67],67))