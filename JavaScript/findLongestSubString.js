function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let seen = {}
    let longest = 0;
    for (let i = 0; i < str.length; i++) {
        console.log(seen, start, longest);
        let char = str[i];//i
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }

    return longest;
  }
  
  console.log(findLongestSubstring('iamagxyzo'));
                                    123456789