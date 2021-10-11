/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexed_nums = nums.map((n, i) => ({n, i}))
    for (const { n: num1, i } of indexed_nums) {
        for (const { n: suposed_num2, i: j } of indexed_nums) {
            if (j !== i) {
                if ((num1 + suposed_num2) === target) {
                    return [i, j]
                }
            }
        }
    }
};