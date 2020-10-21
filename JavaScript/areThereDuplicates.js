function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    //console.log(arguments);
    let out = {};
    for (let i = 0; i < arguments.length; i++){
        if (!out[arguments[i]]) {
            out[arguments[i]] = 1;
        }
        else {
            return true;
        }
    }
    return false;
  }


  console.log(areThereDuplicates(2,3,4,5,6));
  console.log(areThereDuplicates(2,3,4,5,2));