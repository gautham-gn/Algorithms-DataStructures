function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let output = []
    //[1, [2, [3, 4], [[5]]]]
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            output =  output.concat(flatten(arr[i]));
        }
        else {
            output.push(arr[i]);
        }
    }
    
    return output;
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3