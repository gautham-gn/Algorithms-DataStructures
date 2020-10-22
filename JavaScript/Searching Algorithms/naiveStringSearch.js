function naiveStringSearch(str, pattern) {
    var counter = 0;
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < pattern.length; j++){
            if(pattern[j] !== str[i+j]) break;
            if(j === pattern.length - 1) counter++;
        }
    }
    return counter;
}

function naiveStringSearch2(str, pattern) {
    var len = pattern.length;
    var counter = 0;
    for(var i = 0; i <= str.length - pattern.length ; i++){
        if (str.slice(i,i+len) === pattern) {
            counter++;
        }
    }
    return counter;
}

console.log(naiveStringSearch("hahaha I am a haha  haha  haha boy","haha"));
console.log(naiveStringSearch("hahahahahaha I am a boy","haha"));
console.log(naiveStringSearch("hahaha I am a haha boy","boy"));


console.log(naiveStringSearch2("hahaha I am a haha  haha  haha boy","haha"));
console.log(naiveStringSearch2("hahahahahaha I am a boy","haha"));
console.log(naiveStringSearch2("hahaha I am a haha boy","boy"));