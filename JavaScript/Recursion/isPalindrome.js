// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length <= 1) {
        return true;
    } 
    if (str.length === 2) {
        return str[0] === str[1];
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1,str.length-1));
    } else {
        return false;
    }
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))