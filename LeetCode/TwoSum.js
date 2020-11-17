/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let ele;
    let otherEle;
    let seen = {};
    let output = []
    for (let i = 0; i < nums.length; i++) {
        ele = nums[i];
        otherEle = target - ele;
        if (!(otherEle in seen)) {
            seen[ele] = i;
        }
        else {
            return [seen[otherEle], i];
        };
    }
    return;
};

console.log(twoSum([2, 7, 5, 8], 13));