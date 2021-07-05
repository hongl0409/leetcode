/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let res = 0
  const l = height.length
  const stack = []
  for (let i = 0; i < l; i++) {
    while(stack.length && height[i] > height[stack[stack.length - 1]]) {
      const bottom = stack.pop() // 栈顶(是当前栈里面最矮的位置， 即当前蓄水池的下边界)
      if(!stack.length) {
        break
      }
      const left = stack[stack.length - 1] // 栈顶下面的一位, 即当前蓄水池的左边界
      const currWidth = i - left - 1
      const currHieght = Math.min(height[left], height[i]) - height[bottom]
      res += currWidth * currHieght
    }
    stack.push(i)
  }
  return res
};

console.log(trap([2,1,5,6,2,3]))
// @lc code=end

