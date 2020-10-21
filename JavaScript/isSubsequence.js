function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i = 0;
    let j = 0;

    if (str1.length === 0) {
        return true;
    }
    
    while (j < str2.length) {
        if (str1[i] == str2[j]){
            i++;    
        }
        j++;
        if (i == str1.length) {
            return true;
        }
    }
    return false;
  }

  console.log(isSubsequence('hellow', 'hello world'))
  console.log(isSubsequence('', 'hello world'))