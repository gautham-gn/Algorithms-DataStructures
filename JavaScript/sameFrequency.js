function sameFrequency(d1, d2){
    // good luck. Add any arguments you deem necessary.
    if (typeof(d1) != "number" || typeof(d2) != "number") {
        return false;
    }

    let d1Str = d1.toString();
    let d2Str = d2.toString();

    if (d1Str.length != d2Str.length) {
        return false;
    }
    
    let cnt = {}

    for (let char of d1Str) {
        cnt[char] = (cnt[char] || 0) + 1;
    }

    for (let char of d2Str) {
        if (!cnt[char]) {
            return false;
        }
        else {
            cnt[char]--;
        }
    }
    return true;
  }


  //console.log(typeof(182));
  console.log(sameFrequency(1822, 2281));
  