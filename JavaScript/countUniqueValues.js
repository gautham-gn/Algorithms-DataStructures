function countUniqueValues(lst){
  // add whatever parameters you deem necessary - good luck!
  if (lst.length === 0) {
      return 0
  }
  else if (lst.length === 1) {
      return 1
  }
  else if (lst.length >= 2 ) {
      let i = 0;
      let j = 1;
      while(i < j && j < lst.length) {
          if (lst[i] === lst[j]) {
              j++;
          }
          else {
              i++;
              lst[i] = lst[j];
              j++;
          }
      }
      return i+1;
  }

}

//[1,1,2,3,3,4,4,5,5,5]
console.log(countUniqueValues([1,1,1,1,1,2,3,4,5,5]))
