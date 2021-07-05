/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  console.log(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};
twoSum([1,2,3,4,5], 10)

// var twoSum = function(nums, target) {
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if(map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i]
//     }
//     map.set(nums[i], i)
//   }
// };
// @lc code=end

