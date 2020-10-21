function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    let firstCounter = {};
    let secondCounter = {};
    if (str1.length != str2.length){
        return false
    }
    for(let char of str1){
        firstCounter[char] = (firstCounter[char]++ || 0) + 1
    }
  
    for(let char of str2){
        secondCounter[char] = (secondCounter[char]++ || 0) + 1
    }
  
    for (let key in firstCounter){
        if (!(key in secondCounter)){
            return false;
            }
        else if (firstCounter[key] != secondCounter[key]){
            return false;
        }
    }
  
    return true;
  }
  
  console.log(validAnagram(' ',' '))
  console.log(validAnagram('aaz','zza'))
  console.log(validAnagram('anagram', 'nagaram'))
  console.log(validAnagram('rat', 'car'))
  console.log(validAnagram('awesome', 'awesom'))
  console.log(validAnagram('qwerty', 'qeywrt'))
  console.log(validAnagram('texttwisttime', 'timetexttwist'))
  
  