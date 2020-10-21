function productOfArray(arr) {
    if (arr.length === 0) {
        return;
    }
    function helper(helperInput){
        if (helperInput.length === 0) {
            return 1;
        }
        return helperInput[0] * helper(helperInput.splice(1));
    }
    return helper(arr);
}

console.log(productOfArray([1,4,8,5]))
console.log(productOfArray([]))