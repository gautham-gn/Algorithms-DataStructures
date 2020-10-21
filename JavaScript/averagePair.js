function averagePair(lst, target){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = lst.length - 1;
    while(start < end) {
        if ((lst[start] + lst[end])/2 === target) {
            return true;
        }
        else if ((lst[start] + lst[end])/2 > target){
            end--;
        } else {
            start++;
        }
    }
    return false;
  }

  console.log(averagePair([1,2,3], 2.5))